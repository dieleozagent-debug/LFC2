#!/usr/bin/env node

/**
 * LFC Studio CLI v1.0.0
 * Herramienta de automatización multiplataforma (Linux/POSIX)
 * Reemplaza los scripts legacy de PowerShell (.ps1)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LFC_ROOT = path.resolve(__dirname, '../'); // Asumiendo que está en /scripts/
const REPO_ROOT = '/home/administrador/docker/LFC2'; // Ruta absoluta configurada en el entorno

// Colores para consola
const colors = {
    reset: "\x1b[0m",
    cyan: "\x1b[36m",
    yellow: "\x1b[33m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    magenta: "\x1b[35m"
};

/**
 * Escapa caracteres no-ASCII para asegurar compatibilidad total de encoding
 */
function unicodeEscape(str) {
    return str.replace(/[^\x00-\x7F]/g, function (c) {
        return "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4);
    });
}

function log(msg, color = colors.reset) {
    console.log(`${color}${msg}${colors.reset}`);
}

/**
 * COMANDO: sync
 * Sincroniza el WBS Presupuestal con los JSON/JS interactivos
 */
function sync() {
    log("\n🔄 SINCRONIZACIÓN WBS (LINUX NATIVE) INICIADA\n", colors.cyan);

    const wbsPath = path.join(REPO_ROOT, 'IX. WBS y Planificacion/WBS_Presupuestal_v2.0.md'); // El archivo md sigue llamándose v2.0 pero contiene v3.0
    if (!fs.existsSync(wbsPath)) {
        log(`❌ ERROR: No se encuentra ${wbsPath}`, colors.red);
        process.exit(1);
    }

    log(`📖 Paso 1: Leyendo ${path.basename(wbsPath)}...`, colors.yellow);
    const contenido = fs.readFileSync(wbsPath, 'utf8');

    log("🔍 Paso 2: Parseando ítems de la WBS...", colors.yellow);
    // Regex adaptada para tablas markdown con formato | **Item** | **Descripción** | **Cantidad** | **VU (COP)** | **Total (COP)** |
    const pattern = /^\|\s*\*\*(\d+\.\d+\.\d+)\*\*\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/gm;
    
    const items = [];
    let match;
    while ((match = pattern.exec(contenido)) !== null) {
        const codigo = match[1].trim();
        const descripcion = match[2].trim().replace(/\*\*/g, '');
        // Limpiar cantidad: dejar solo números y punto decimal
        const cantidadStr = match[3].trim().replace(/[^0-9.]/g, '');
        // Limpiar valores monetarios: quitar $, comas y espacios
        const vuStr = match[4].trim().replace(/\$/g, '').replace(/,/g, '').replace(/\s/g, '');
        const totalStr = match[5].trim().replace(/\$/g, '').replace(/,/g, '').replace(/\s/g, '');

        if (codigo && descripcion && !descripcion.toLowerCase().includes('subtotal')) {
            items.push({
                codigo: codigo,
                descripcion: descripcion,
                tipo: "SUMINISTRO", 
                unidad: match[3].toLowerCase().includes('km') ? "KM" : (match[3].toLowerCase().includes('rollos') ? "ROLLO" : "UND"),
                cantidad: cantidadStr || "1",
                vu_cop: parseInt(vuStr, 10) || 0,
                total_cop: parseInt(totalStr, 10) || 0
            });
        }
    }

    log(`✅ Parseados ${items.length} ítems de la WBS\n`, colors.green);

    // Generar JSON
    const trm = 4000; // Referencia SICC
    const wbsData = {
        version: "4.2",
        fecha_actualizacion: new Date().toISOString().split('T')[0],
        trm_aplicada: trm,
        total_capitulos: 6,
        items: items.map(item => ({
            ...item,
            capitulo: item.codigo.split('.')[0],
            vu_usd: (item.vu_cop / trm).toFixed(2),
            total_usd: (item.total_cop / trm).toFixed(2),
            modificable: true,
            categoria: getCategoria(item.codigo),
            archivos_relacionados: [],
            riesgos_asociados: []
        }))
    };

    const jsonPath = path.join(REPO_ROOT, 'IX. WBS y Planificacion/datos_wbs_TODOS_items.json');
    fs.writeFileSync(jsonPath, unicodeEscape(JSON.stringify(wbsData, null, 4)), 'utf8');
    log(`💾 Creado (Multidivisa): ${jsonPath}`, colors.green);

    // Generar JS
    const jsPath = path.join(REPO_ROOT, 'IX. WBS y Planificacion/datos_wbs_TODOS_items.js');
    const jsContent = `// WBS Datos SICC v4.2 - Dual COP/USD\n// Fecha: ${new Date().toLocaleString()}\nwindow.datos_wbs = ${JSON.stringify(wbsData, null, 0)};\n`;
    fs.writeFileSync(jsPath, unicodeEscape(jsContent), 'utf8');
    log(`💾 Creado (Multidivisa): ${jsPath}\n`, colors.green);

    log("✅ SINCRONIZACIÓN EXITOSA", colors.cyan);
}

function getCategoria(codigo) {
    const cap = codigo.split('.')[0];
    const map = {
        "1": "control",
        "2": "telecomunicaciones",
        "3": "its_seguridad",
        "4": "pasos_nivel",
        "5": "cco",
        "6": "material_rodante"
    };
    return map[cap] || "otros";
}

const PANDOC_PATH = fs.existsSync('/home/administrador/docker/LFC2/bin/pandoc') 
    ? '/home/administrador/docker/LFC2/bin/pandoc' 
    : 'pandoc';

// ... (getCategoria stays the same)

/**
 * COMANDO: cook (Regenerar ejecutivos)
 */
function cook(sistema = null) {
    log("\n🍳 COOK - Regenerando Entregables Consolidados\n", colors.cyan);
    
    const mapeoSistemas = {
        "01": { nombre: "Control_y_Senalizacion", fuentes: ["III. Ingenieria conceptual/29_Sistema_Senalizacion*.md", "V. Ingenieria de detalle/V.2_Centro_Control_Trafico*.md"] },
        "02": { nombre: "Telecomunicaciones", fuentes: ["III. Ingenieria conceptual/28_Sistema_FibraOptica*.md", "III. Ingenieria conceptual/27_Sistema_TETRA*.md"] },
        "03": { nombre: "ITS_y_Seguridad", fuentes: ["III. Ingenieria conceptual/31_Sistema_CCTV*.md", "III. Ingenieria conceptual/30_Sistema_ITS*.md"] },
        "04": { nombre: "Material_Rodante", fuentes: ["I. Contrato General/6_Cl_13_1_MaterialRodante*.md"] },
        "05": { nombre: "Infraestructura_Operativa", fuentes: ["IV. Ingenieria básica/IV.4_Especificaciones_Basicas_Sistemas*.md"] },
        "06": { nombre: "Integracion_y_Coordinacion", fuentes: ["II. Apendices Tecnicos/11. AT1*.md"] },
        // Especialidades
        "E01": { nombre: "ESPECIALIDAD_01_Ingenieria_Civil", fuentes: ["IV. Ingenieria básica/IV.1_Obras_Civiles*.md"] },
        "E02": { nombre: "ESPECIALIDAD_02_Ingenieria_Electrica", fuentes: ["IV. Ingenieria básica/IV.2_Instalaciones_Electricas*.md"] },
        "E03": { nombre: "ESPECIALIDAD_03_Ingenieria_Mecanica", fuentes: ["IV. Ingenieria básica/IV.3_Estructuras_Mecanicas*.md"] },
        "E04": { nombre: "ESPECIALIDAD_04_Ingenieria_Sistemas", fuentes: ["III. Ingenieria conceptual/32_Arquitectura_Sistemas*.md"] },
        "E05": { nombre: "ESPECIALIDAD_05_Ingenieria_Ambiental", fuentes: ["II. Apendices Tecnicos/15. AT4_Socio_Ambiental*.md"] },
        // Gestión
        "G01": { nombre: "GESTION_EJECUTIVO_Alcance_y_Objetivos", fuentes: ["I. Contrato General/1_Objeto*.md"] },
        "G02": { nombre: "GESTION_EJECUTIVO_Cambios_y_Decisiones_Tecnicas", fuentes: ["VIII. Documentos Maestros y Metodologia/Matrices_Dependencias/*.md"] },
        "G03": { nombre: "GESTION_EJECUTIVO_Cronograma_y_Recursos", fuentes: ["IX. WBS y Planificacion/WBS_Cronograma_Propuesta.md"] }
    };

    const sistemasACocinar = sistema ? [sistema] : Object.keys(mapeoSistemas);

    sistemasACocinar.forEach(cap => {
        const config = mapeoSistemas[cap];
        if (!config) return;

        let nombreEjecutivo, rutaEjecutivo;
        
        if (cap.startsWith('E')) {
            nombreEjecutivo = `${config.nombre}_EJECUTIVO.md`;
        } else if (cap.startsWith('G')) {
            nombreEjecutivo = `${config.nombre}.md`;
        } else {
            nombreEjecutivo = `SISTEMA_${cap}_${config.nombre}_EJECUTIVO.md`;
        }
        rutaEjecutivo = path.join(REPO_ROOT, 'X_ENTREGABLES_CONSOLIDADOS/7_SISTEMAS_EJECUTIVOS', nombreEjecutivo);

        log(`Cocinando SISTEMA_${cap}...`, colors.yellow);

        if (!fs.existsSync(rutaEjecutivo)) {
            log(`  ⚠️ Ejecutivo no encontrado: ${nombreEjecutivo}`, colors.magenta);
            return;
        }

        let contenido = fs.readFileSync(rutaEjecutivo, 'utf8');
        
        // VALIDACIÓN DE SOBERANÍA (Protocolo v2.2 - Systemic Purge)
        const blacklist = ["UIC", "ERTMS", "ETCS", "GSM-R", "EUROBALIZA", "EMU", "CATENARIA", "25 KV"];
        const detectados = blacklist.filter(term => contenido.toUpperCase().includes(term));
        
        if (detectados.length > 0) {
            log(`  ❌ FALLO DE SOBERANÍA: Términos prohibidos detectados: ${detectados.join(', ')}`, colors.red);
            log(`  ⚠️ Saneamiento requerido en: ${nombreEjecutivo}`, colors.yellow);
        }

        const fechaActual = new Date().toLocaleString();
        const marker = `\n\n<!-- COCINADO LFC-CLI v2.2 | SICC Pureza: ${detectados.length === 0 ? '100%' : 'AUDIT_REQUIRED'} | Fecha: ${fechaActual} -->\n`;
        
        if (!contenido.includes("COCINADO LFC-CLI v2.2")) {
            contenido += marker;
            fs.writeFileSync(rutaEjecutivo, contenido, 'utf8');
            log(`  ✅ Marcado con SICC-Validation v2.2.`, colors.green);
        } else {
            log(`  ℹ️ Ya está validado v2.2.`, colors.magenta);
        }
    });
}

/**
 * COMANDO: serve (Exportar a Word/HTML)
 */
function serve() {
    log("\n🍽️ SERVE - Exportando a formatos empresariales\n", colors.cyan);
    const carpetaEjecutivos = path.join(REPO_ROOT, 'X_ENTREGABLES_CONSOLIDADOS/7_SISTEMAS_EJECUTIVOS');
    const carpetaWord = path.join(REPO_ROOT, 'X_ENTREGABLES_CONSOLIDADOS/8_DOCUMENTOS_SERVIDOS/WORD');
    const carpetaHTML = path.join(REPO_ROOT, 'X_ENTREGABLES_CONSOLIDADOS/8_DOCUMENTOS_SERVIDOS/HTML');

    if (!fs.existsSync(carpetaWord)) fs.mkdirSync(carpetaWord, { recursive: true });
    if (!fs.existsSync(carpetaHTML)) fs.mkdirSync(carpetaHTML, { recursive: true });

    const archivos = fs.readdirSync(carpetaEjecutivos).filter(f => f.endsWith('.md'));

    // FORZAR PANDOC DEL SISTEMA (linux native)
    const sysPandoc = 'pandoc'; 

    archivos.forEach(file => {
        const fullPath = path.join(carpetaEjecutivos, file);
        const baseName = path.basename(file, '.md');
        log(`Sirviendo: ${baseName}...`, colors.cyan);

        try {
            // Generar Word
            execSync(`${sysPandoc} "${fullPath}" -o "${path.join(carpetaWord, baseName + '.docx')}" --toc --toc-depth=3`);
            
            // Generar HTML Premium con Plantilla Centralizada
            const templatePath = path.join(REPO_ROOT, 'scripts/templates/premium-shell.html');
            const command = `${sysPandoc} "${fullPath}" -o "${path.join(carpetaHTML, baseName + '.html')}" ` +
                          `--template="${templatePath}" ` +
                          `--standalone --toc --toc-depth=3 ` +
                          `--metadata title="${baseName.replace(/_/g, ' ')}"`;
            
            execSync(command);
            log(`  💎 HTML Premium y Word generados exitosamente`, colors.green);
        } catch (e) {
            log(`  ❌ Error en Pandoc para ${file}: ${e.message}`, colors.red);
        }
    });

    log("\n✅ PLATOS SERVIDOS!", colors.green);
}

// Router de comandos
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case 'sync':
        sync();
        break;
    case 'cook':
        cook(args[1]);
        break;
    case 'serve':
        serve();
        break;
    default:
        log("Uso: lfc [sync | cook | serve]", colors.yellow);
        break;
}
