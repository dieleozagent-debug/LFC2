/**
 * LFC TERMINOLOGY & DBCI (Design Basis & Concepts Integrity)
 * Single Source of Truth for Technical Constraints v6.3.3 SOBERANO
 */

const LFC_DBCI = {
    PROJECT: {
        NAME: "LFC STUDIO",
        FULL_LOCATION: "APP La Dorada-Chiriguaná",
        VERSION: "v6.3.3 Sovereign Restoration",
    },

    // CONSTANTES FÍSICAS INAMOVIBLES (La Biblia de Ingeniería)
    PHYSICS: {
        CORRIDOR_KM: 526.133,       
        LOCOMOTORAS_TOTAL: 15,      
        ESTACIONES_TORRES: 37,      
        ENCE_ESTACIONES: 5,         
        CCTV_CAMARAS: 73            
    },
    
    // TÉRMINOS SOBERANOS (Lo que DEBE aparecer - LA RECETA PURA)
    SOVEREIGN: {
        SIGNALING: "SICC v6.3.3 (Sistema de Intervención y Control Centralizado)",
        PTC: "PTC Virtual (Positive Train Control - FRA 236-I)",
        BACKBONE: "Red Vital IP (Broadband Sovereign)",
        STANDARDS: "FRA / AREMA / AAR (Soberanía Digital)",
        COMMS: "Red Vital IP / TETRA / LTE (Broadband)",
        DETECTION: "Bloque Virtual (GNSS / EOT)"
    },
    
    // BLACKLIST LEGACY (Lo que NO puede existir - EL VENENO)
    LEGACY_BLACKLIST: [
        "Stop & Switch", "Stop and Switch", "ADIF", "EULYNX", "GSM-R", "EUROBALISE", "EUROBALIZAS",
        "RBC", "Radio Block Centre", "ERTMS", "ETCS", "ASFA", "UNISIG", "UIC TSI",
        "Contadores de ejes", "Circuitos de via", "SICC Legacy", "Manual de Frontera"
    ],

    // MAPEO DE CORRECCIÓN DETERMINISTA (Manual del Chef - Purity by Design)
    CORRECTION_MAP: {
        // Purga de Manualidad
        "Stop & Switch": "Handover Digital (Digital Gateway)",
        "Stop and Switch": "Handover Digital (Digital Gateway)",
        "Manual de Frontera": "Protocolo Digital Vital",
        
        // Purga de Legado Europeo
        "ADIF": "Estándar SICC (FRA/AREMA)",
        "EULYNX": "Arquitectura SICC v6.3.3",
        "Eurobalise": "Punto de Referencia Virtual (GNSS)",
        "EUROBALISE": "Punto de Referencia Virtual (GNSS)",
        "GSM-R": "Red Vital IP (Broadband)",
        "ETCS": "PTC Virtual (SICC)",
        "ERTMS": "PTC Virtual (SICC)",
        "RBC": "Servidor Maestro SICC",
        "Radio Block Centre": "Servidor Maestro SICC",
        
        // Purga de Hardware Wayside
        "Contadores de ejes": "Posicionamiento GNSS/EOT Vital",
        "Circuitos de via": "Bloque Virtual Dinámico",
        "Circuitos de vía": "Bloque Virtual Dinámico",
        "Sistemas Propietarios": "Ecosistema Digital Abierto"
    },

    FINANCIAL: {
        TRM: 4400
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = LFC_DBCI;
} else {
    window.LFC_TERMINOLOGY = LFC_DBCI;
}
