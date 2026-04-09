/**
 * LFC VERIFY v1.0 — Sovereign Integrity Checker
 * Permite validar físicamente el estado de la ingeniería desde Telegram (/cmd)
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = '/home/administrador/docker/LFC2';
const DTS_DIR = path.join(REPO_ROOT, 'II_Apendices_Tecnicos/Decisiones_Tecnicas');
const TERMINOLOGY_FILE = path.join(REPO_ROOT, 'IX_WBS_Planificacion/lfc-terminology.js');
const SERVED_DIR = path.join(REPO_ROOT, 'X_ENTREGABLES_CONSOLIDADOS/7_SISTEMAS_EJECUTIVOS');

function checkFile(filePath, label) {
    const exists = fs.existsSync(filePath);
    console.log(`[${exists ? '✅' : '❌'}] ${label}: ${exists ? 'OK' : 'FALTANTE'}`);
    return exists;
}

console.log('--- 🛡️ SICC VERIFY: AUDITORÍA DE SOBERANÍA ---');
console.log(`Timestamp: ${new Date().toISOString()}`);

// 1. Verificación de Dictámenes Críticos
checkFile(path.join(DTS_DIR, 'DT-AT10-001.md'), 'DT-AT10-001 (Moving Block)');
checkFile(path.join(DTS_DIR, 'DT-SICC-2026-009.md'), 'DT-SICC-2026-009 (Purga Eléctrica)');
checkFile(path.join(DTS_DIR, 'DT-SICC-2026-008.md'), 'DT-SICC-2026-008 (AREMA 2021)');
checkFile(path.join(DTS_DIR, 'DT-SICC-2026-010.md'), 'DT-SICC-2026-010 (Seguridad FRA 236)');
checkFile(path.join(DTS_DIR, 'DT-SICC-2026-011.md'), 'DT-SICC-2026-011 (Catálogo IEEE/EMC)');
checkFile(path.join(DTS_DIR, 'DT-SICC-2026-012.md'), 'DT-SICC-2026-012 (Purga GPON)');

// 2. Verificación de ADN (LFC-Terminology)
if (checkFile(TERMINOLOGY_FILE, 'ADN (lfc-terminology.js)')) {
    const content = fs.readFileSync(TERMINOLOGY_FILE, 'utf8');
    if (content.includes('Active Ethernet')) {
        console.log('[✅] ADN: Soberanía de Backbone Activo detectada.');
    }
    if (content.includes('802.1q/p/d/w/x')) {
        console.log('[✅] ADN: Catálogo IEEE Industrial detectado.');
    }
    if (content.includes('CISPR22')) {
        console.log('[✅] ADN: Inmunidad EMC detectada.');
    }
    if (content.includes('FRA 49 CFR')) {
        console.log('[✅] ADN: Soberanía de Seguridad FRA detectada.');
    }
    if (content.includes('Manual de Senalización Vial 2024')) {
        console.log('[✅] ADN: Sincronización Res. 2024 detectada.');
    }
}

// 3. Verificación de Servido (Masterchef)
const htmls = fs.readdirSync(SERVED_DIR).filter(f => f.endsWith('.html'));
console.log(`[📦] Platos Servidos: ${htmls.length} archivos HTML detectados.`);

if (htmls.length >= 15) {
    console.log('[✅] CAPACIDAD: Restauración total de platos ejecutivos.');
} else {
    console.log(`[⚠️] CAPACIDAD: Solo ${htmls.length}/15 platos detectados. Ejecute Masterchef.`);
}

console.log('-------------------------------------------');
