/**
 * LFC TERMINOLOGY - Single Source of Truth
 * Ciclo 7.5: ADN del Proyecto
 */

const LFC_TERMINOLOGY = {
    PROJECT_NAME: "LFC STUDIO",
    APP_SHORT_NAME: "LFC Studio",
    FULL_LOCATION: "APP La Dorada-Chiriguaná",
    VERSION: "v6.0 Premium",
    TECHNICAL_CRITERIA: "PTC Nativo / SICC",
    
    // Términos Maestros (Soberanía Tecnológica)
    SYSTEMS: {
        CONTROL: "Control y Señalización (SICC)",
        SIGNALING: "SICC (Sistema de Intervención y Control Centralizado)",
        PTC: "PTC Nativo (Positive Train Control - FRA 236)",
        STANDARDS: "FRA / AREMA / AAR (Soberanía)",
        TRACTION: "Tracción Diesel-Eléctrica (Standard)",
        COMMS: "Telecomunicaciones (TETRA/LTE)",
        VITAL_IP: "Red IP Vital / Vital IP",
        SECURITY: "ITS y Seguridad+",
        POWER: "Sistemas de Energía Soberanos",
        GANTT: "Cronograma Maestro de Ejecución"
    },
    
    // Lista de Inhibición (Legacy Prohibido)
    LEGACY_BLACKLIST: [
        "UIC", "EN 50126", "ERTMS", "ETCS", "Eurobaliza", 
        "GSM-R", "Tracción Eléctrica", "Catenaria", "EMU", "25 kV AC"
    ],

    // Mapeo Multidivisa
    FINANCIAL: {
        DEFAULT_CURRENCY: "MULTIDIVISA (COP/USD)",
        TRM_REFERENCE: 4000
    },
};

// Exportar para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LFC_TERMINOLOGY;
} else {
    window.LFC_TERMINOLOGY = LFC_TERMINOLOGY;
}
