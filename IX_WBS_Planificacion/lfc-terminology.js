/**
 * LFC TERMINOLOGY & DBCI (Design Basis & Concepts Integrity)
 * Single Source of Truth for Technical Constraints v6.0
 */

const LFC_DBCI = {
    PROJECT: {
        NAME: "LFC STUDIO",
        FULL_LOCATION: "APP La Dorada-Chiriguaná",
        VERSION: "v6.3.2 Masterchef",
    },

    // CONSTANTES FÍSICAS INAMOVIBLES (La Biblia de Ingeniería)
    PHYSICS: {
        CORRIDOR_KM: 526,           // Longitud contractual base
        GASA_TECNICA_PERCENT: 0.10, // 10% adicional para instalación
        TOTAL_INSTALACION_KM: 579,  // 526 * 1.10 rounded
        LOCOMOTORAS_TOTAL: 15,      // Flota operativa completa
        ESTACIONES_TORRES: 37,      // Nodos de comunicación
        ENCE_ESTACIONES: 5,         // Enclavamientos
        CCTV_CAMARAS: 73            // Cámaras corredor
    },
    
    // TÉRMINOS SOBERANOS (Lo que DEBE aparecer)
    SOVEREIGN: {
        SIGNALING: "SICC (Sistema de Intervención y Control Centralizado)",
        PTC: "PTC Nativo (Positive Train Control - FRA 236)",
        STANDARDS: "FRA / AREMA / AAR (Soberanía)",
        TRACTION: "Tracción Diesel-Eléctrica",
        COMMS: "Red Vital IP / TETRA / LTE",
        GNSS: "Nodos GNSS (SICC)"
    },
    
    // BLACKLIST LEGACY (Lo que NO puede existir - SACC)
    LEGACY_BLACKLIST: [
        "EUROBALIZA", "EUROBALISE", "SICC PTC Virtual", "RADIO BLOCK CENTRE", "ETCS", "ERTMS", "ASFA",
        "RED TETRA MISION CRITICA", "TETRA Misión Crítica", "RED TETRA (Misión Crítica)", "RED TETRA (Mision Critica)",
        "CATENARIA", "TRACCIÓN ELÉCTRICA", "TRACCION ELECTRICA", "25 KV", "3 KV", "60 HZ",
        "PANTÓGRAFO", "PANTOGRAFO", "SUBESTACIÓN DE TRACCIÓN", "SUBESTACION DE TRACCION",
        "ITCS", "Interlocking Propietario", "Señales LED", "Señalización Lateral"
    ],

    // MAPEO DE CORRECCIÓN DETERMINISTA (Manual del Chef - Purity by Design)
    CORRECTION_MAP: {
        "SICC PTC Virtual": "Servidor PTC Central",
        "Radio Block Centre": "Servidor PTC Central",
        "Baliza Virtual (GNSS)": "Nodos GNSS (SICC)",
        "Eurobalise": "Nodos GNSS (SICC)",
        "Señalización Física": "Filosofía PTC Virtual",
        "Señales LED": "Señalización en Cabina (Cab-Signaling)",
        "ITCS": "PTC Nativo (FRA 49 CFR 236)",
        "RED TETRA Misión Crítica": "Red Vital IP / TETRA",
        "RED TETRA (Misión Crítica)": "Red Vital IP / TETRA",
        "RED TETRA (Mision Critica)": "Red Vital IP / TETRA",
        "TRACCIÓN ELÉCTRICA": "Soberanía Diésel-Eléctrica",
        "TRACCION ELECTRICA": "Soberanía Diésel-Eléctrica",
        "25 KV": "[ESTÁNDAR PROHIBIDO: SICC v6.3 ES DIÉSEL]",
        "25 KV/0.4 KV": "[ESTÁNDAR PROHIBIDO: SICC v6.3 ES DIÉSEL]",
        "25 KVA": "[ESTÁNDAR PROHIBIDO: SICC v6.3 ES DIÉSEL]",
        "3 KV": "[ESTÁNDAR PROHIBIDO: SICC v6.3 ES DIÉSEL]",
        "60 HZ": "[ESTÁNDAR PROHIBIDO: FRECUENCIA FERROVIARIA NO APLICABLE]",
        "Señales LED": "Señalización en Cabina (Cab-Signaling)",
        "Señalización Lateral": "Señalización en Cabina (Cab-Signaling)",
        "CATENARIA": "[INFRAESTRUCTURA PROHIBIDA]",
        "EUROBALIZA": "Punto de Referencia Virtual (SICC)",
        "EUROBALISE": "Punto de Referencia Virtual (SICC)",
        "EUROBALIZAS": "Puntos de Referencia Virtuales (SICC)",
        "EUROBALISES": "Puntos de Referencia Virtuales (SICC)",
        "LEU": "[CONTROLLER PROHIBIDO - SICC ES VIRTUAL]",
        "ETCS": "PTC Virtual (SICC)",
        "ERTMS": "PTC Virtual (SICC)"
    },

    FINANCIAL: {
        TRM: 4000
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = LFC_DBCI;
} else {
    window.LFC_TERMINOLOGY = LFC_DBCI;
}
