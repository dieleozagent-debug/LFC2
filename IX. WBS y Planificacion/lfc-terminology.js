/**
 * LFC TERMINOLOGY & DBCI (Design Basis & Concepts Integrity)
 * Single Source of Truth for Technical Constraints v6.0
 */

const LFC_DBCI = {
    PROJECT: {
        NAME: "LFC STUDIO",
        FULL_LOCATION: "APP La Dorada-Chiriguaná",
        VERSION: "v6.0 Masterchef",
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
    
    // BLACKLIST LEGACY (Lo que NO puede existir)
    LEGACY_BLACKLIST: [
        "PTC Nativo (FRA 236)", "PTC Nativo", "PTC Nativo", "Red de Comunicaciones Vital IP", "EUROBALIZA", "EUROBALISE", "FRA/AREMA", "EN 50126",
        "CATENARIA", "TRACCIÓN ELÉCTRICA", "TRACCION ELECTRICA", "25 KV", "3 KV", "60 HZ",
        "PANTÓGRAFO", "PANTOGRAFO", "SUBESTACIÓN DE TRACCIÓN", "RBC", "RADIO BLOCK CENTRE"
    ],

    // MAPEO DE CORRECCIÓN DETERMINISTA (Manual del Chef)
    CORRECTION_MAP: {
        "PTC Nativo (FRA 236)": "PTC Nativo (FRA 236)",
        "Red de Comunicaciones Vital IP": "Red de Comunicaciones Vital IP",
        "Tracción Diesel-Eléctrica": "Tracción Diesel-Eléctrica",
        "Infraestructura Diesel": "Infraestructura Diesel",
        "PTC Nativo": "PTC Nativo",
        "PTC Nativo": "PTC Nativo",
        "FRA/AREMA": "FRA/AREMA",
        "Nodos GNSS (SICC)": "Nodos GNSS (SICC)",
        "579 km (526 km + 10% Gasa)": "579 km (526 km + 10% Gasa)",
        "579km": "579km"
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
