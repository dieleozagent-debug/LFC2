/**
 * LFC TERMINOLOGY & DBCI (Design Basis & Concepts Integrity)
 * Single Source of Truth for Technical Constraints v14.7 — alineado a BCD v001 (2026-04)
 *
 * Jerarquía de verdad (BCD v001 §2.1):
 *   Contrato APP 001/2025 > AT1 > AT3 > BCD_SCC_v001_2026-04 > normas adoptadas
 * Cualquier número marcado "post-DT" requiere DT formal por encima del BCD.
 */

const LFC_DBCI = {
    // Nombre corto de marca — patrón único de títulos/headers: "<Página> · LFC UF2"
    APP_SHORT_NAME: "LFC UF2",

    PROJECT: {
        NAME: "LFC UF2",
        FULL_LOCATION: "APP La Dorada-Chiriguaná",
        VERSION: "v14.7 BCD-aligned",
    },

    // CONSTANTES FÍSICAS — alineadas a BCD v001 SCC (Ardanuy, abril 2026)
    PHYSICS: {
        CORRIDOR_KM: 526.133,                               // BCD §3.2
        TROCHA_MM: 914,                                     // BCD §1.2 — yarda, NO 1435
        ORIGIN_PK_MEXICO: "201+470",                        // La Dorada (México) — BCD §3.2
        TERMINUS_PK_CHIRIGUANA: "722+683",                  // BCD §3.2
        PUERTO_BERRIO_GRECIA_PK_RANGE: "299+800—332+500",
        BARRANCABERMEJA_PK_RANGE: "423+400—465+250",
        ENCE_ESTACIONES: 5,                                 // BCD §4.1: Zapatosa, García Cadena, Barrancabermeja, Pto Berrío–Grecia, La Dorada–México
        PAN_PROTEGIDOS_TIPO_C: 9,                           // BCD §8.2
        PAN_PROTEGIDOS_TIPO_B: 15,                          // BCD §8.2
        PAN_PROTEGIDOS_TOTAL: 24,                           // BCD §8.2 (los 122 restantes NO entran al sistema señalización)
        FIBRA_HILOS: 48,                                    // BCD §6.1.1 — solución homogénea G.652.D
        // Números bajo DT — no son inamovibles, pendientes de formalización
        LOCOMOTORAS_TOTAL: 15,                              // DT-CTRL-2026-006: 1 U18 base (AT1 §5) + 14 Factor de Calidad
        ESTACIONES_TORRES: 37,                              // estimación pre-RF. BCD §6.2.1 manda simulación de cobertura
        CCTV_CAMARAS: 73                                    // catálogo interno, no fijado por BCD
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
    // PURGADOS 2026-05-05 contra BCD v001:
    //   - "Stop & Switch" / "Stop and Switch": BCD §9.2 los manda como criterio rector de interoperabilidad FENOCO
    //   - "ADIF": BCD §2.1 cita 4 normas ADIF (NAT 405, NAT 716, ET 03.366.780.9, ET 03.366.752.8) como referencia
    //   - "Telcordia GR-20-CORE": BCD §2.1 lo cita explícitamente (Issue 2)
    LEGACY_BLACKLIST: [
        "EULYNX", "GSM-R", "EUROBALISE", "EUROBALIZAS",
        "RBC", "Radio Block Centre", "ERTMS", "ETCS", "ASFA", "UNISIG", "UIC TSI",
        "Contadores de ejes", "Circuitos de via", "SICC Legacy", "Manual de Frontera",
        "ANSI/ICEA S-87-640", "IEC 60794", "IEC-60794", "EN 50126", "EN 50128", "EN 50129", "EN 50716", "G.984", "GPON", "EDFA", "ROADM",
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
        
        // Purga de Legado Europeo (ADIF removido 2026-05-05: BCD §2.1 cita ADIF como referencia válida)
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
        // "Telcordia GR-20-CORE" removido 2026-05-05: BCD §2.1 lo cita como referencia válida
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
        TRM: 4400
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = LFC_DBCI;
} else {
    window.LFC_TERMINOLOGY = LFC_DBCI;
}
