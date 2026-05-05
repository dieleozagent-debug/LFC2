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

    // CONSTANTES FÍSICAS INAMOVIBLES (La Biblia de Ingeniería - Ground Truth)
    PHYSICS: {
        CORRIDOR_KM: 526.133,       
        ORIGIN_PK_MEXICO: "201+470", // La Dorada (México)
        PUERTO_BERRIO_GRECIA_PK_RANGE: "299+800—332+500",
        BARRANCABERMEJA_PK_RANGE: "423+400—465+250",
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
        "Contadores de ejes", "Circuitos de via", "SICC Legacy", "Manual de Frontera",
        "ANSI/ICEA S-87-640", "Telcordia GR-20-CORE", "IEC 60794", "IEC-60794", "EN 50126", "EN 50128", "EN 50129", "EN 50716", "G.984", "GPON", "EDFA", "ROADM",
        "Resolución 1885 de 2015", "Res. 1885 de 2015", "Manual de Señalización Vial 2015"
    ],

    // MAPEO DE CORRECCIÓN DETERMINISTA (Manual del Chef - Purity by Design)
    CORRECTION_MAP: {
        "Manual de Senalización Vial 2024 (Res. 20243040045005)": "Manual de Senalización Vial 2024 (Res. 20243040045005)",
        "Resolución 20243040045005 de 2024": "Resolución 20243040045005 de 2024",
        // Purga de Alucinaciones Geográficas (Soberanía Toponímica)
        "La Dorada-Chiriguaná": "La Dorada (México) - Chiriguaná",
        "Puerto Berrio": "Puerto Berrío (Grecia)",
        "Barrancabermeja": "Barrancabermeja (Puerto)",
        "PK 0+000": "PK 201+470 (Origen México)",
        "540 km": "526.133 km (Corredor SICC)",
        
        // Purga de Manualidad
        
        // Purga de Legado Europeo
        "ADIF": "Estándar SICC (FRA/AREMA)",
        "EULYNX": "Arquitectura SICC v6.3.3",
        "Eurobalise": "Punto de Referencia Virtual (GNSS)",
        "EUROBALISE": "Invariable Virtual GNSS (SICC)",
        "GSM-R": "Red Vital IP (SICC v7.0)",
        "Eurobaliza": "Baliza Virtual (GNSS/EOT)",
        "EUROBALIZA": "Baliza Virtual (GNSS/EOT)",
        "ETCS": "PTC Virtual (SICC)",
        "ERTMS": "PTC Virtual (SICC)",
        "RBC": "Servidor Maestro SICC",
        "Radio Block Centre": "Servidor Maestro SICC",
        
        // Purga de Hardware Wayside
        "Contadores de ejes": "Posicionamiento GNSS/EOT Vital (Sovereign)",
        "Circuitos de via": "Bloque Virtual Dinámico",
        "Circuitos de vía": "Bloque Virtual Dinámico",
        "Sistemas Propietarios": "Ecosistema Digital Abierto",
        
        // Purga de Normas No Contractuales (Axioma 23)
        "ANSI/ICEA S-87-640": "Estándar ITU-T G.652 (Blindaje AT3)",
        "Telcordia GR-20-CORE": "Estándar ITU-T G.652 (Blindaje AT3)",
        "IEC 60794": "ITU-T G.652.D (Soberanía AT3)",
        "IEC-60794": "ITU-T G.652.D (Soberanía AT3)",
        "EN 50126": "Seguridad RAMS bajo FRA 236 Subpart I / PTCSP",
        "EN 50128": "Seguridad de Software bajo FRA 49 CFR §236.1015 (PTCSP)",
        "EN 50129": "Seguridad Electrónica Vital bajo FRA/PTC (§236.1015)",
        "EN 50716": "Seguridad de Software bajo FRA 49 CFR §236.1015 (PTCSP)",
        "Manual de Señalización Vial 2015": "Manual de Señalización Vial 2024 (Res. 20243040045005)",
        "Manual de Senalización Vial 2015": "Manual de Señalización Vial 2024 (Res. 20243040045005)",
        "Resolución 1885 de 2015": "Resolución 20243040045005 de 2024",
        "EDFA": "Ópticas Pasivas ZR (Sustracción N-1)",
        "ROADM": "Red Vital IP (Direct Fiber Only)",
        "G.984": "Arquitectura Active Ethernet (SICC Soberano)",
        "GPON": "Arquitectura Active Ethernet (SICC Soberano)",
        "IEEE 802.3": "Catálogo IEEE Industrial (802.3z/u/an/af | 802.1q/p/d/w/x)",
        "CISPR22": "Inmunidad EMC CISPR22 (Acreditación DoC)",
        "CISPR24": "Inmunidad EMC CISPR24 (Acreditación DoC)"
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
