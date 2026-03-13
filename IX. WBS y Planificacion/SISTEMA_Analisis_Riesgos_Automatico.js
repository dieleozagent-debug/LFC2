/**
 * SISTEMA DE ANÃLISIS AUTOMÃTICO DE RIESGOS
 * EvalÃºa cambios propuestos en WBS y genera riesgos automÃ¡ticamente
 */

const SistemaRiesgos = {
    
    // UMBRALES DE RIESGO
    umbrales: {
        // Cajas de fibra
        cajas_fibra_espaciamiento: {
            optimo_min: 300,
            optimo_max: 400,
            aceptable_min: 250,
            aceptable_max: 500,
            limite_normativo: 500,
            norma: "UIT-T G.652.D"
        },
        
        // Torres TETRA
        torres_tetra_cantidad: {
            minimo_absoluto: 33,
            optimo: 37,
            maximo_eficiente: 42,
            norma: "ETSI EN 300 396"
        },
        
        // Workstations CTC
        workstations_cantidad: {
            minimo_operativo: 6,
            optimo_con_redundancia: 8,
            maximo_recomendado: 10
        },
        
        // Impacto econÃ³mico
        impacto_economico: {
            bajo: 100000000,        // < $100M
            medio: 500000000,       // $100M - $500M
            alto: 1000000000,       // $500M - $1,000M
            critico: 5000000000     // > $1,000M
        }
    },
    
    // ANÃLISIS DE CAMBIO PROPUESTO
    analizarCambio(item, valorNuevo, tipoCambio) {
        const riesgos = [];
        
        // CASO 1: CAJAS DE FIBRA (Espaciamiento)
        if (item.codigo === "2.3.103" && tipoCambio === "espaciamiento") {
            const espaciamiento = valorNuevo;
            const umbral = this.umbrales.cajas_fibra_espaciamiento;
            
            // Calcular nueva cantidad
            const nuevaCantidad = Math.ceil(594000 / espaciamiento) + 88;
            const cantidadActual = parseInt(item.cantidad);
            const delta = nuevaCantidad - cantidadActual;
            const impactoEconomico = delta * item.vu_cop;
            
            // EVALUACIÃN DE RIESGOS
            
            // Riesgo 1: Espaciamiento fuera de rango Ã³ptimo
            if (espaciamiento < umbral.optimo_min) {
                riesgos.push({
                    id: `R-FIBRA-NEW-${Date.now()}`,
                    categoria: "TÃ©cnico",
                    descripcion: `Espaciamiento ${espaciamiento}m muy corto aumenta CAPEX innecesariamente`,
                    probabilidad: "Alta",
                    impacto: "Alto",
                    nivel_riesgo: "ALTO",
                    origen_decision: `Espaciamiento ${espaciamiento}m < ${umbral.optimo_min}m (Ã³ptimo mÃ­nimo)`,
                    estrategia_sugerida: "Mitigar: Ajustar a rango Ã³ptimo 300m-400m",
                    responsable: "Especialista Fibra",
                    estado: "Nuevo - Pendiente AprobaciÃ³n",
                    accion_requerida: "REVISAR Y JUSTIFICAR",
                    vinculacion_contractual: "AT1 - ApÃ©ndice TÃ©cnico 1, SecciÃ³n 2.1 (Fibra Ãptica)",
                    hito_verificacion: "IngenierÃ­a Detalle - ValidaciÃ³n DiseÃ±o OSP"
                });
            }
            
            if (espaciamiento > umbral.aceptable_max) {
                riesgos.push({
                    id: `R-FIBRA-NEW-${Date.now() + 1}`,
                    categoria: "TÃ©cnico-Normativo",
                    descripcion: `Espaciamiento ${espaciamiento}m excede lÃ­mite normativo UIT-T (${umbral.limite_normativo}m)`,
                    probabilidad: "Alta",
                    impacto: "CrÃ­tico",
                    nivel_riesgo: "CRÃTICO",
                    origen_decision: `Espaciamiento ${espaciamiento}m > ${umbral.limite_normativo}m (lÃ­mite normativo)`,
                    estrategia_sugerida: "Evitar: NO PROCEDE - Incumple norma UIT-T G.652.D",
                    responsable: "PMO + Especialista Fibra",
                    estado: "Bloqueante - Requiere AprobaciÃ³n Formal",
                    accion_requerida: "DETENER - NO APROBAR",
                    vinculacion_contractual: "AT1 - ApÃ©ndice TÃ©cnico 1, ClÃ¡usula 2.1.3 (Cumplimiento Normas)",
                    hito_verificacion: "RevisiÃ³n PMO + ValidaciÃ³n Legal"
                });
            }
            
            // Riesgo 2: Impacto econÃ³mico significativo
            if (Math.abs(impactoEconomico) > this.umbrales.impacto_economico.alto) {
                riesgos.push({
                    id: `R-ECON-NEW-${Date.now() + 2}`,
                    categoria: "Financiero",
                    descripcion: `Cambio de espaciamiento genera impacto econÃ³mico de ${this.formatearPeso(Math.abs(impactoEconomico))} (${impactoEconomico > 0 ? 'incremento' : 'ahorro'})`,
                    probabilidad: "Alta",
                    impacto: Math.abs(impactoEconomico) > this.umbrales.impacto_economico.critico ? "CrÃ­tico" : "Alto",
                    nivel_riesgo: Math.abs(impactoEconomico) > this.umbrales.impacto_economico.critico ? "CRÃTICO" : "ALTO",
                    origen_decision: `DT cambio espaciamiento ${espaciamiento}m â Î ${delta} cajas`,
                    estrategia_sugerida: impactoEconomico < 0 ? "Aceptar: Genera ahorro significativo" : "Validar: Requiere justificaciÃ³n sÃ³lida",
                    responsable: "CFO + PMO",
                    estado: "Nuevo - Requiere AprobaciÃ³n Financiera",
                    accion_requerida: impactoEconomico < 0 ? "APROBAR SI TÃCNICAMENTE VIABLE" : "VALIDAR NECESIDAD",
                    vinculacion_contractual: "Contrato Principal - ClÃ¡usula 3.5 (Modificaciones Presupuestales)",
                    hito_verificacion: "AprobaciÃ³n CFO + ComitÃ© Directivo"
                });
            }
            
            // Riesgo 3: Tiempo de localizaciÃ³n de fallas
            if (espaciamiento > 400) {
                riesgos.push({
                    id: `R-OPE-NEW-${Date.now() + 3}`,
                    categoria: "Operacional",
                    descripcion: `Espaciamiento ${espaciamiento}m aumenta tiempo de localizaciÃ³n de fallas en ~${Math.ceil((espaciamiento - 300) / 50)} minutos`,
                    probabilidad: "Media",
                    impacto: "Medio",
                    nivel_riesgo: "MEDIO",
                    origen_decision: `Espaciamiento ${espaciamiento}m > 400m (umbral operacional)`,
                    estrategia_sugerida: "Asumir: Documentar en Plan de Mantenimiento",
                    responsable: "Jefe Operaciones",
                    estado: "Nuevo - Pendiente ValidaciÃ³n",
                    accion_requerida: "DOCUMENTAR EN PLAN MANTENIMIENTO",
                    vinculacion_contractual: "AT6 - ApÃ©ndice TÃ©cnico 6 (OperaciÃ³n y Mantenimiento)",
                    hito_verificacion: "Plan de Mantenimiento - Procedimiento LocalizaciÃ³n Fallas"
                });
            }
        }
        
        // CASO 2: TORRES TETRA (Cantidad)
        if (item.codigo === "2.1.100" && tipoCambio === "cantidad") {
            const cantidad = parseInt(valorNuevo);
            const umbral = this.umbrales.torres_tetra_cantidad;
            
            if (cantidad < umbral.minimo_absoluto) {
                riesgos.push({
                    id: `R-TETRA-NEW-${Date.now()}`,
                    categoria: "TÃ©cnico-CrÃ­tico",
                    descripcion: `${cantidad} torres TETRA insuficientes para cobertura 100% (mÃ­nimo: ${umbral.minimo_absoluto})`,
                    probabilidad: "Alta",
                    impacto: "CrÃ­tico",
                    nivel_riesgo: "CRÃTICO",
                    origen_decision: `Cantidad ${cantidad} < ${umbral.minimo_absoluto} (mÃ­nimo segÃºn simulaciÃ³n RF)`,
                    estrategia_sugerida: "Evitar: NO PROCEDE - Incumple requisito cobertura 100%",
                    responsable: "Especialista TETRA + PMO",
                    estado: "Bloqueante",
                    accion_requerida: "DETENER - INCREMENTAR A MÃNIMO 33",
                    vinculacion_contractual: "AT1 - SecciÃ³n 3.1 (Cobertura TETRA 100% obligatoria)",
                    hito_verificacion: "Pruebas de Cobertura - PAC"
                });
            }
            
            if (cantidad > umbral.maximo_eficiente) {
                riesgos.push({
                    id: `R-TETRA-NEW-${Date.now() + 1}`,
                    categoria: "Financiero",
                    descripcion: `${cantidad} torres excede cantidad eficiente (Ã³ptimo: ${umbral.optimo}), genera sobrecosto`,
                    probabilidad: "Alta",
                    impacto: "Medio",
                    nivel_riesgo: "MEDIO",
                    origen_decision: `Cantidad ${cantidad} > ${umbral.maximo_eficiente} (mÃ¡ximo eficiente)`,
                    estrategia_sugerida: "Validar: Justificar necesidad o reducir",
                    responsable: "PMO + CFO",
                    estado: "Nuevo - Requiere JustificaciÃ³n",
                    accion_requerida: "JUSTIFICAR TÃCNICAMENTE",
                    vinculacion_contractual: "Contrato - OptimizaciÃ³n de Recursos",
                    hito_verificacion: "AprobaciÃ³n PMO"
                });
            }
        }
        
        // GENÃRICO: Impacto econÃ³mico significativo
        if (tipoCambio === "cantidad" || tipoCambio === "precio") {
            const valorActual = item.total_cop;
            const valorNuevoTotal = tipoCambio === "cantidad" 
                ? valorNuevo * item.vu_cop 
                : item.cantidad * valorNuevo;
            const impacto = Math.abs(valorNuevoTotal - valorActual);
            
            if (impacto > this.umbrales.impacto_economico.critico) {
                riesgos.push({
                    id: `R-ECON-NEW-${Date.now()}`,
                    categoria: "Financiero-CrÃ­tico",
                    descripcion: `Cambio genera impacto crÃ­tico de ${this.formatearPeso(impacto)} (${valorNuevoTotal > valorActual ? 'incremento' : 'ahorro'})`,
                    probabilidad: "Alta",
                    impacto: "CrÃ­tico",
                    nivel_riesgo: "CRÃTICO",
                    origen_decision: `DT-${item.codigo} â Î ${this.formatearPeso(impacto)}`,
                    estrategia_sugerida: valorNuevoTotal < valorActual ? "Aceptar: Ahorro significativo si tÃ©cnicamente viable" : "Evitar: Requiere aprobaciÃ³n Junta Directiva",
                    responsable: "CFO + Junta Directiva",
                    estado: "Nuevo - Requiere AprobaciÃ³n Directiva",
                    accion_requerida: valorNuevoTotal < valorActual ? "VALIDAR TÃCNICAMENTE" : "APROBAR EN JUNTA",
                    vinculacion_contractual: "Contrato Principal - ClÃ¡usula 3.5.2 (Modificaciones >5%)",
                    hito_verificacion: "AprobaciÃ³n Junta Directiva"
                });
            }
        }
        
        return riesgos;
    },
    
    // EVALUAR NIVEL DE RIESGO GLOBAL
    evaluarNivelRiesgo(probabilidad, impacto) {
        const matrizRiesgo = {
            "Baja": { "Bajo": "BAJO", "Medio": "BAJO", "Alto": "MEDIO", "CrÃ­tico": "ALTO" },
            "Media": { "Bajo": "BAJO", "Medio": "MEDIO", "Alto": "ALTO", "CrÃ­tico": "CRÃTICO" },
            "Alta": { "Bajo": "MEDIO", "Medio": "ALTO", "Alto": "CRÃTICO", "CrÃ­tico": "CRÃTICO" }
        };
        
        return matrizRiesgo[probabilidad]?.[impacto] || "MEDIO";
    },
    
    // GENERAR YAML PARA ACTUALIZAR MATRIZ_RIESGOS
    generarYAMLActualizacionRiesgos(riesgos, dtID) {
        let yaml = `
# ActualizaciÃ³n automÃ¡tica de MATRIZ_RIESGOS_PMO_AMPLIADA
matriz_riesgos_actualizar:
  - file: "VIII. Documentos Maestros y Metodologia/Matrices_Dependencias/MATRIZ_RIESGOS_PMO_AMPLIADA_v1.0.md"
    accion: "agregar_riesgos_nuevos"
    riesgos_nuevos:
`;
        
        riesgos.forEach(riesgo => {
            yaml += `      - id: "${riesgo.id}"
        categoria: "${riesgo.categoria}"
        descripcion: "${riesgo.descripcion}"
        probabilidad: "${riesgo.probabilidad}"
        impacto: "${riesgo.impacto}"
        nivel_riesgo: "${riesgo.nivel_riesgo}"
        estrategia: "${riesgo.estrategia_sugerida}"
        responsable: "${riesgo.responsable}"
        estado: "${riesgo.estado}"
        fuente: "Sistema"
        origen_decision: "${dtID}"
        hito_verificacion: "${riesgo.hito_verificacion}"
        vinculacion_contractual: "${riesgo.vinculacion_contractual}"
        fecha_identificacion: "${new Date().toISOString().split('T')[0]}"
        accion_requerida: "${riesgo.accion_requerida}"
`;
        });
        
        yaml += `
    notificar:
      - tipo: "pmo"
        mensaje: "${riesgos.length} riesgos nuevos identificados por ${dtID}"
      - tipo: "especialista"
        mensaje: "Revisar riesgos asociados a tu propuesta"
`;
        
        return yaml;
    },
    
    // FORMATEAR PESO
    formatearPeso(valor) {
        return '$' + Math.abs(valor).toLocaleString('es-CO');
    }
};

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SistemaRiesgos;
}

