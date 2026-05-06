window.wbsMetadataEnriquecida = {
  "version": "2.0",
  "fecha_creacion": "2025-10-08",
  "fecha_actualizacion": "2026-05-05",
  "descripcion": "Metadata enriquecida del WBS LFC2 — descripción técnica, criterios, supuestos, DTs aplicadas y documentos por ítem. v2.0 expande de 8 a 133 ítems con entrada mínima auto-generada para los nuevos.",
  "items": {
    "1.1.100": {
      "descripcion": "Servidores CTC principales",
      "justificacion_tecnica": "Servidores redundantes para control centralizado del tráfico ferroviario según AT2 Â§5.3",
      "criterios_diseno": [
        "Redundancia N+1 para alta disponibilidad",
        "Capacidad procesamiento: 100 trenes simultáneos",
        "Tiempo respuesta < 100ms según IEC 62290-1"
      ],
      "supuestos": [
        "2 servidores (1 principal + 1 respaldo)",
        "Arquitectura cliente-servidor",
        "Comunicación redundante fibra óptica"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "V.1_CTC_Detalle_v1.0.md",
        "IV.1_CTC_Basica_v2.0.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "Sistema WBS"
    },
    "1.1.101": {
      "descripcion": "Servidores CTC respaldo",
      "justificacion_tecnica": "Ítem 1.1.101 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 2 UND × $180.0M COP/u = $360.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $180.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 2 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.1.102": {
      "descripcion": "Workstations operadores",
      "justificacion_tecnica": "Ítem 1.1.102 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 8 UND × $45.0M COP/u = $360.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $45.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 8 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.1.103": {
      "descripcion": "Software CTC virtual + PTC L2 + Interoperabilidad FENOCO",
      "justificacion_tecnica": "Software CTC ampliado con PTC High-Level, Interoperabilidad FENOCO y Alta Disponibilidad segun ofertas tecnicas Knorr Bremse/CRRC validadas - Desglose: Core $30B + PTC L2 $25B + FENOCO $15B + HA $9.15B",
      "criterios_diseno": [
        "Licencias Core CTC: $30B - 8 estaciones + CCO + redundancia + 100 trenes simultaneos",
        "Modulo PTC High-Level: $25B - EVC + Servidor PTC Central + Sistema claves + Interfaces TETRA/LTE/TETRA",
        "Interoperabilidad FENOCO: $15B - Protocolos FRA/AREMA 950-7/554 + Gestion coordinada + Transferencia control",
        "Alta Disponibilidad: $9.15B - Cluster N+1 + Failover <5seg + DR (RTO<1h, RPO<15min) + 99.95%"
      ],
      "supuestos": [
        "Licenciamiento perpetuo con 5 anos soporte tecnico incluido",
        "Certificacion CENELEC PTC High-Level completa incluida",
        "Interfaces FENOCO customizadas especificas del proyecto",
        "Capacitacion 300 horas (200 operadores + 100 ingenieros)",
        "Customizacion 30% del software para requisitos especificos",
        "Integracion con SCADA, PAN, CCTV incluida"
      ],
      "decisiones_tecnicas": [
        "DT-CTC-002-2025-10-08",
        "DT-CTC-003-2025-10-08"
      ],
      "feedback_especialista": "Incremento +901% justificado por alcance completo PTC L2 + Interoperabilidad FENOCO. Valor alineado con ofertas Knorr Bremse ($82B) y CRRC ($79B) para soluciones similares. Incluye: EVC, Servidor PTC Central, interfaces FRA/AREMA, sistema HA 99.95%.",
      "documentos_ingenieria": [
        "V.2_Centro_Control_Trafico_CTC_Detalle_v1.0.md",
        "IV.2_CTC_Basica_v2.0.md",
        "VII.2.1_SRS_[CONTAMINACIÓN_PURGADA]_PTC_Level2_PROVISIONAL.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "DT-CTC-003"
    },
    "1.1.104": {
      "descripcion": "Base de datos centralizada",
      "justificacion_tecnica": "Ítem 1.1.104 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 1 UND × $200.0M COP/u = $200.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $200.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.1.105": {
      "descripcion": "Sistema redundancia",
      "justificacion_tecnica": "Ítem 1.1.105 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 1 UND × $300.0M COP/u = $300.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $300.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.1.106": {
      "descripcion": "Interfaces comunicación",
      "justificacion_tecnica": "Bloque lógico de integración (no hardware físico único). Conecta CTC con PTC Nativo (FRA 49 CFR 236)/PTC L2, FENOCO (Gateway FRA/AREMA 918-4), TETRA (voz/datos), Fibra óptica (backbone N+1) y sistemas ITS. Incluye: gateways industriales, switches de borde, firewalls IEC 62443, middleware interoperabilidad, licencias software.",
      "criterios_diseno": [
        "Integración funcional CTC-PTC Nativo (FRA 49 CFR 236)-FENOCO-TETRA-ITS",
        "Redundancia N+1 en comunicaciones críticas",
        "Middleware interoperabilidad con protocolos FRA/AREMA 918-4",
        "Firewalls IEC 62443 para ciberseguridad industrial"
      ],
      "supuestos": [
        "1 UND representa conjunto lógico completo de integración",
        "Equipos físicos mayores cubiertos en ítems 1.1.100-1.1.105",
        "Incluye licencias software, configuración y ensayos FAT/SAT",
        "Interfaces con: PTC Nativo (FRA 49 CFR 236)/PTC L2, FENOCO, TETRA, Fibra, ITS (CCTV/acceso/intrusión)"
      ],
      "decisiones_tecnicas": [
        "DT-INTERFACES-001-2025-10-09"
      ],
      "feedback_especialista": "Elemento clave de integración del sistema CTC. NO es hardware físico único sino bloque funcional que conecta todos los subsistemas. Costo $150M incluye gateways, middleware FRA/AREMA, firewalls, licencias y configuración completa.",
      "documentos_ingenieria": [
        "V.2_Centro_Control_Trafico_CTC_v5.0.md",
        "IV.2_Interfaces_Sistemas_MEJORADO.md",
        "VII.2.4_Interfaces_CTC_[CONTAMINACIÓN_PURGADA]_Protocolo_FFFIS.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "DT-INTERFACES-001-2025-10-09"
    },
    "1.2.100": {
      "descripcion": "Computadora PTC embarcada",
      "justificacion_tecnica": "Reducción de 15 a 8 unidades alineada con AT1: 5 locomotoras contractuales + 2 diseno/pruebas + 1 contingencia",
      "criterios_diseno": [
        "Cumplimiento CENELEC Seguridad RAMS bajo FRA 236 Subpart I / PTCSP/128/129",
        "SIL 4 para funciones vitales de seguridad",
        "Interfaz con Nodos GNSS (SICC) y odómetro"
      ],
      "supuestos": [
        "5 locomotoras operativas según AT1 Â§3.1",
        "2 unidades para diseno y pruebas de aceptación",
        "1 unidad de contingencia/repuesto estratégico"
      ],
      "decisiones_tecnicas": [
        "DT-TETRA-001-2025-10-07",
        "DT-PTC-001-2025-10-09"
      ],
      "feedback_especialista": "Cantidad 8 UND justificada por Apéndice Financiero pág. 3 (5 locomotoras: 2 GR12 + 2 U10 + 1 U18C) + 3 reserva (2 pruebas FAT/SAT + 1 contingencia). Alineación contractual AT1 completa.",
      "documentos_ingenieria": [
        "V.2_ATP_Detalle_v3.0.md",
        "IV.2_ATP_Basica_v2.0.md",
        "AT1 - Apéndice Técnico 1",
        "Apéndice Financiero pág. 3"
      ],
      "referencias_contractuales": [
        "Apéndice Financiero pág. 3 - Material rodante base",
        "AT1 Cap. V y Anexo AT1-3 - Equipos embarcados"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "DT-PTC-001-2025-10-09"
    },
    "1.2.101": {
      "descripcion": "Display maquinista",
      "justificacion_tecnica": "Ítem 1.2.101 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 15 UND × $80.0M COP/u = $1,200.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $80.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.2.102": {
      "descripcion": "Sensores velocidad",
      "justificacion_tecnica": "Ítem 1.2.102 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 15 UND × $25.0M COP/u = $375.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $25.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.2.103": {
      "descripcion": "Sistema GPS",
      "justificacion_tecnica": "Ítem 1.2.103 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 15 UND × $35.0M COP/u = $525.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $35.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.2.104": {
      "descripcion": "Software PTC",
      "justificacion_tecnica": "Ítem 1.2.104 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 15 UND × $100.0M COP/u = $1,500.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $100.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.2.105": {
      "descripcion": "Interfaces frenos",
      "justificacion_tecnica": "Ítem 1.2.105 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 15 UND × $30.0M COP/u = $450.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $30.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.2.106": {
      "descripcion": "Sistema redundancia",
      "justificacion_tecnica": "Ítem 1.2.106 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 15 UND × $50.0M COP/u = $750.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $50.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.3.100": {
      "descripcion": "Controlador ENCE Zapatosa (DT-COMS-2026-007: ADIF CAC020 €356,780 + ajustes trocha 914+log−MO ≈ $2,000M COP)",
      "justificacion_tecnica": "Ítem 1.3.100 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 1 UND × $2,000.0M COP/u = $2,000.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $2,000.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)",
        "🔴 RFQ pendiente — VU sujeto a actualización post-cotización formal"
      ],
      "decisiones_tecnicas": [
        "DT-COMS-2026-007 — VU $800M→$2,000M (ADIF CAC020 + ajustes trocha 914mm + logística + MO local)"
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.3.101": {
      "descripcion": "Controlador ENCE García Cadena (DT-COMS-2026-007)",
      "justificacion_tecnica": "Ítem 1.3.101 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 1 UND × $2,000.0M COP/u = $2,000.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $2,000.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)",
        "🔴 RFQ pendiente — VU sujeto a actualización post-cotización formal"
      ],
      "decisiones_tecnicas": [
        "DT-COMS-2026-007 — VU $800M→$2,000M (ADIF CAC020 + ajustes trocha 914mm + logística + MO local)"
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.3.102": {
      "descripcion": "Controlador ENCE Barrancabermeja (Puerto) (DT-COMS-2026-007)",
      "justificacion_tecnica": "Ítem 1.3.102 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 1 UND × $2,000.0M COP/u = $2,000.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $2,000.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)",
        "🔴 RFQ pendiente — VU sujeto a actualización post-cotización formal"
      ],
      "decisiones_tecnicas": [
        "DT-COMS-2026-007 — VU $800M→$2,000M (ADIF CAC020 + ajustes trocha 914mm + logística + MO local)"
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.3.103": {
      "descripcion": "Controlador ENCE Puerto Berrío-Grecia (DT-COMS-2026-007)",
      "justificacion_tecnica": "Ítem 1.3.103 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 1 UND × $2,000.0M COP/u = $2,000.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $2,000.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)",
        "🔴 RFQ pendiente — VU sujeto a actualización post-cotización formal"
      ],
      "decisiones_tecnicas": [
        "DT-COMS-2026-007 — VU $800M→$2,000M (ADIF CAC020 + ajustes trocha 914mm + logística + MO local)"
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.3.104": {
      "descripcion": "Controlador ENCE La Dorada-México (DT-COMS-2026-007)",
      "justificacion_tecnica": "Ítem 1.3.104 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 1 UND × $2,000.0M COP/u = $2,000.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $2,000.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)",
        "🔴 RFQ pendiente — VU sujeto a actualización post-cotización formal"
      ],
      "decisiones_tecnicas": [
        "DT-COMS-2026-007 — VU $800M→$2,000M (ADIF CAC020 + ajustes trocha 914mm + logística + MO local)"
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.3.105": {
      "descripcion": "Sistema redundancia ENCE",
      "justificacion_tecnica": "Ítem 1.3.105 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 1 UND × $400.0M COP/u = $400.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $400.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.3.106": {
      "descripcion": "Interfaces CTC-ENCE",
      "justificacion_tecnica": "Ítem 1.3.106 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 5 UND × $60.0M COP/u = $300.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $60.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 5 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.4.100": {
      "descripcion": "Desvíos motorizados CTC (DT-COMS-2026-007: ADIF VEA010 €114,320 + ajustes trocha 914+log−MO ≈ $640M COP)",
      "justificacion_tecnica": "Ítem 1.4.100 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 25 UND × $640.0M COP/u = $16,000.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $640.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 25 UND (sin justificación documentada en metadata enriquecida)",
        "🔴 RFQ pendiente — VU sujeto a actualización post-cotización formal"
      ],
      "decisiones_tecnicas": [
        "DT-COMS-2026-007 — VU $448.6M→$640M (ADIF VEA010)"
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.4.101": {
      "descripcion": "Sistemas control remoto + redundancia N+1",
      "justificacion_tecnica": "Ítem 1.4.101 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 25 UND × $134.6M COP/u = $3,364.4M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $134.6M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 25 UND (sin justificación documentada en metadata enriquecida)",
        "🔴 RFQ pendiente — VU sujeto a actualización post-cotización formal"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.4.102": {
      "descripcion": "Interfaces CTC/ENCE",
      "justificacion_tecnica": "Ítem 1.4.102 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 25 UND × $67.3M COP/u = $1,682.2M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $67.3M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 25 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.5.100": {
      "descripcion": "Desvíos manuales autotalonables (con comprobador integrado)",
      "justificacion_tecnica": "Ítem 1.5.100 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 120 UND × $134.6M COP/u = $16,149.2M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $134.6M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 120 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.5.101": {
      "descripcion": "Señalización semafórica estaciones ENCE (5 estaciones × 6 señales/estación promedio)",
      "justificacion_tecnica": "Ítem 1.5.101 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 30 UND × $51.9M COP/u = $1,557.6M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $51.9M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 30 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "1.5.102": {
      "descripcion": "Herramientas operación (kit completo certificado)",
      "justificacion_tecnica": "Ítem 1.5.102 del Capítulo 1 (Control y Señalización Virtual). Tipo: SUMINISTRO. Cantidad: 120 UND × $13.5M COP/u = $1,615.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $13.5M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 120 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "IV.1_CTC_Basica_v2.0.md",
        "V.1_CTC_Detalle_v1.0.md",
        "BCD_SCC_v001_2026-04.md §4-§5"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.1.100": {
      "descripcion": "Torres autosoportadas",
      "justificacion_tecnica": "Ítem 2.1.100 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 37 UND × $180.0M COP/u = $6,660.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $180.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 37 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.1.101": {
      "descripcion": "Estaciones base TETRA",
      "justificacion_tecnica": "Ítem 2.1.101 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 37 UND × $65.0M COP/u = $2,405.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $65.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 37 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.1.102": {
      "descripcion": "Antenas TETRA",
      "justificacion_tecnica": "Ítem 2.1.102 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 37 UND × $12.0M COP/u = $444.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $12.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 37 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.1.103": {
      "descripcion": "Radios embarcados (30 unidades)",
      "justificacion_tecnica": "30 radios embarcados TETRA según Metodología Punto 42: 9 locomotoras operativas (factor 1.5 redundancia) + 9 equipos maniobras/vía + 12 personal operativo. Basado en AT2/AT10 para operación segura con redundancia en emergencias. Distribución: radio principal por locomotora + portátiles para conducción/maniobras/mantenimiento.",
      "criterios_diseno": [
        "1 radio principal embarcado por locomotora (control tráfico y voz CTC)",
        "Radios portátiles para personal conducción, maniobras y mantenimiento",
        "Factor redundancia 1.5 según Metodología Punto 42",
        "Cumplimiento AT2 y AT10 para operación segura"
      ],
      "supuestos": [
        "Flota base: 6 locomotoras operativas (U18C + GR12 + reserva)",
        "Factor 1.5 redundancia aplicado (dotación + backup)",
        "Personal operativo: 8 base (jefes tren, seguridad vía, control apartaderos)",
        "Total calculado: 9 locomotoras + 9 maniobras + 12 personal = 30 radios"
      ],
      "decisiones_tecnicas": [
        "DT-TETRA-002-2025-10-09"
      ],
      "feedback_especialista": "Cálculo basado en Apéndice Financiero 4 (material rodante tractivo) y AT2/AT10 (operación segura). 30 radios cubren: locomotoras (principal) + equipos maniobras/vía + personal operativo con redundancia emergencias.",
      "documentos_ingenieria": [
        "Apéndice Financiero 4",
        "AT2 - Operación y Mantenimiento",
        "AT10 - Capacidad Surcos"
      ],
      "referencias_contractuales": [
        "Apéndice Financiero 4: Material rodante base (1 U18 + 2 GR12 + complementario)",
        "AT2: Requerimientos operación segura y redundancia emergencias",
        "AT10: Personal operativo y requisitos comunicaciones"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "DT-TETRA-002-2025-10-09"
    },
    "2.1.104": {
      "descripcion": "Radios portátiles",
      "justificacion_tecnica": "Ítem 2.1.104 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 80 UND × $6.0M COP/u = $480.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $6.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 80 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.1.105": {
      "descripcion": "Sistema control centralizado",
      "justificacion_tecnica": "Ítem 2.1.105 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 1 UND × $120.0M COP/u = $120.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $120.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.1.106": {
      "descripcion": "Casetas técnicas",
      "justificacion_tecnica": "Ítem 2.1.106 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: OBRA. Cantidad: 37 UND × $65.0M COP/u = $2,405.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $65.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 37 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.1.107": {
      "descripcion": "Cimentaciones",
      "justificacion_tecnica": "Ítem 2.1.107 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: OBRA. Cantidad: 37 UND × $25.0M COP/u = $925.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $25.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 37 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.1.108": {
      "descripcion": "Cerramiento perimetral",
      "justificacion_tecnica": "Ítem 2.1.108 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: OBRA. Cantidad: 37 UND × $30.0M COP/u = $1,110.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $30.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 37 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.1.109": {
      "descripcion": "Vías de acceso",
      "justificacion_tecnica": "Ítem 2.1.109 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: OBRA. Cantidad: 37 UND × $25.0M COP/u = $925.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $25.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 37 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.1.110": {
      "descripcion": "Sistemas de seguridad",
      "justificacion_tecnica": "Ítem 2.1.110 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 37 UND × $20.0M COP/u = $740.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $20.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 37 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.1.111": {
      "descripcion": "Montaje e instalación",
      "justificacion_tecnica": "Ítem 2.1.111 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: OBRA. Cantidad: 37 UND × $15.0M COP/u = $555.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $15.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 37 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.1.112": {
      "descripcion": "Configuración red",
      "justificacion_tecnica": "Ítem 2.1.112 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SERVICIO. Cantidad: 1 UND × $200.0M COP/u = $200.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $200.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.1.113": {
      "descripcion": "Pruebas cobertura",
      "justificacion_tecnica": "Ítem 2.1.113 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SERVICIO. Cantidad: 1 UND × $150.0M COP/u = $150.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $150.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.1.114": {
      "descripcion": "Capacitación",
      "justificacion_tecnica": "Ítem 2.1.114 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SERVICIO. Cantidad: 1 UND × $100.0M COP/u = $100.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $100.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.1.115": {
      "descripcion": "Repuestos (10%)",
      "justificacion_tecnica": "Ítem 2.1.115 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 1 UND × $1,774.0M COP/u = $1,774.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $1,774.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.1.116": {
      "descripcion": "Bancos baterías UPS 24h sitios remotos TETRA (BCD §10.5 — química a definir vía RFQ)",
      "justificacion_tecnica": "Ítem 2.1.116 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 37 UND × $50.0M COP/u = $1,850.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $50.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 37 UND (sin justificación documentada en metadata enriquecida)",
        "🔴 RFQ pendiente — VU sujeto a actualización post-cotización formal"
      ],
      "decisiones_tecnicas": [
        "Renombrado: \"LiFePO4\" → \"Bancos baterías UPS 24h sitios remotos TETRA (química a definir RFQ — BCD §10.5)\""
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.2.100": {
      "descripcion": "Estaciones base — red móvil broadband ferroviaria (complemento TETRA — tecnología por RFQ)",
      "justificacion_tecnica": "Ítem 2.2.100 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 37 UND × $45.0M COP/u = $1,665.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $45.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 37 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [
        "Renombrado: \"Red Vital IP / TETRA (Soberanía SICC v7.0)\" → \"Estaciones base — red móvil broadband ferroviaria\""
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.2.101": {
      "descripcion": "Antenas — red móvil broadband ferroviaria (complemento TETRA — tecnología por RFQ)",
      "justificacion_tecnica": "Ítem 2.2.101 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 37 UND × $8.0M COP/u = $296.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $8.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 37 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [
        "Renombrado: \"Red Vital IP / TETRA (Broadband)\" → \"Antenas — red móvil broadband ferroviaria\""
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.2.102": {
      "descripcion": "Radios embarcados — red móvil broadband ferroviaria (complemento TETRA — tecnología por RFQ)",
      "justificacion_tecnica": "Ítem 2.2.102 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 30 UND × $25.0M COP/u = $750.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $25.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 30 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [
        "Renombrado: \"Red Vital IP / TETRA (ZR-Optics Compatible)\" → \"Radios embarcados — red móvil broadband ferroviaria\" (ZR-Optics era hallucination Antigravity)"
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.2.103": {
      "descripcion": "Sistema control — red móvil broadband ferroviaria (complemento TETRA)",
      "justificacion_tecnica": "Ítem 2.2.103 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 1 UND × $80.0M COP/u = $80.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $80.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [
        "Renombrado: \"Sistema control Red Vital IP / TETRA\" → \"Sistema control — red móvil broadband ferroviaria\""
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.2.104": {
      "descripcion": "Interfaces TETRA — red móvil broadband ferroviaria",
      "justificacion_tecnica": "Ítem 2.2.104 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 37 UND × $5.0M COP/u = $185.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $5.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 37 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [
        "Renombrado: \"Interfaces TETRA-Red Vital IP / TETRA\" → \"Interfaces TETRA — red móvil broadband ferroviaria\""
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.2.105": {
      "descripcion": "Sistema redundancia",
      "justificacion_tecnica": "Ítem 2.2.105 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 1 UND × $150.0M COP/u = $150.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $150.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.2.106": {
      "descripcion": "Configuración dual",
      "justificacion_tecnica": "Ítem 2.2.106 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SERVICIO. Cantidad: 1 UND × $100.0M COP/u = $100.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $100.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.2.107": {
      "descripcion": "Pruebas integración",
      "justificacion_tecnica": "Ítem 2.2.107 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SERVICIO. Cantidad: 1 UND × $80.0M COP/u = $80.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $80.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.2.108": {
      "descripcion": "Repuestos (10%)",
      "justificacion_tecnica": "Ítem 2.2.108 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 1 UND × $312.0M COP/u = $312.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $312.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.3.100": {
      "descripcion": "Cable fibra óptica monomodo 48 hilos G.652.D OSP (BCD §6.1.1 — solución homogénea 526km + 10% gasa técnica)",
      "justificacion_tecnica": "Ítem 2.3.100 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 579 KM × $9.8M COP/u = $5,680.6M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $9.8M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 579 KM (sin justificación documentada en metadata enriquecida)",
        "🔴 RFQ pendiente — VU sujeto a actualización post-cotización formal"
      ],
      "decisiones_tecnicas": [
        "DT-COMS-2026-007 — descripción \"64 hilos\"→\"48 hilos G.652.D OSP\" (BCD §6.1.1)"
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.3.101": {
      "descripcion": "Mano de obra instalación (Tendido 526km + 10% Gasa Técnica)",
      "justificacion_tecnica": "Ítem 2.3.101 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: OBRA. Cantidad: 579 KM × $90.2M COP/u = $52,219.4M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $90.2M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 579 KM (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.3.102": {
      "descripcion": "Tritubo 40mm",
      "justificacion_tecnica": "Ítem 2.3.102 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 1448 ROLLO × $16k COP/u = $22.9M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $16k COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1448 ROLLO (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.3.103": {
      "descripcion": "Cajas empalme 80x80",
      "justificacion_tecnica": "Ítem 2.3.103 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 1930 UND × $1.4M COP/u = $2,605.5M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $1.4M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1930 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.3.104": {
      "descripcion": "Uniones rápidas",
      "justificacion_tecnica": "Ítem 2.3.104 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 5790 UND × $35k COP/u = $202.7M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $35k COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 5790 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.3.105": {
      "descripcion": "Fusionadoras",
      "justificacion_tecnica": "Ítem 2.3.105 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 2 UND × $50.0M COP/u = $100.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $50.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 2 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.3.106": {
      "descripcion": "OTDR triwavelength (1310/1550/1625 nm)",
      "justificacion_tecnica": "Ítem 2.3.106 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 2 UND × $90.0M COP/u = $180.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $90.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 2 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.3.107": {
      "descripcion": "Muflas fusionado",
      "justificacion_tecnica": "Ítem 2.3.107 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 6800 UND × $25k COP/u = $170.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $25k COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 6800 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.3.108": {
      "descripcion": "Insumos fusionado",
      "justificacion_tecnica": "Ítem 2.3.108 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 6200 UND × $15k COP/u = $93.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $15k COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 6200 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.3.109": {
      "descripcion": "Repuestos Estratégicos (Stock 3% Corredor)",
      "justificacion_tecnica": "Ítem 2.3.109 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 16 KM × $8.0M COP/u = $128.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $8.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 16 KM (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "2.4.100": {
      "descripcion": "Habilitación Satelital Transitoria (Punto 42) — 5 terminales LEO + 12 meses suscripción (DT-SICC-2026-042, cadena 9.12→25.4)",
      "justificacion_tecnica": "Ítem 2.4.100 del Capítulo 2 (Telecomunicaciones Colocalizadas). Tipo: SUMINISTRO. Cantidad: 1 GLB × $1,200.0M COP/u = $1,200.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $1,200.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 GLB (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §6 (Telecom)",
        "precios_Adif_COMPLETO.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.1.100": {
      "descripcion": "Cámaras PAN PTZ 4MP (73 unidades - cobertura completa)",
      "justificacion_tecnica": "Ítem 3.1.100 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 73 UND × $30.0M COP/u = $2,190.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $30.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 73 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.1.101": {
      "descripcion": "Cámaras talleres (12 unidades)",
      "justificacion_tecnica": "Ítem 3.1.101 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 12 UND × $6.0M COP/u = $72.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $6.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 12 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.1.102": {
      "descripcion": "Cámaras CCO (8 unidades)",
      "justificacion_tecnica": "Ítem 3.1.102 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 8 UND × $10.0M COP/u = $80.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $10.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 8 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.1.103": {
      "descripcion": "Cámaras estaciones (5 unidades)",
      "justificacion_tecnica": "Ítem 3.1.103 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 5 UND × $7.0M COP/u = $35.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $7.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 5 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.1.104": {
      "descripcion": "Sistema grabación",
      "justificacion_tecnica": "Ítem 3.1.104 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 1 UND × $150.0M COP/u = $150.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $150.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.1.105": {
      "descripcion": "Servidores almacenamiento",
      "justificacion_tecnica": "Ítem 3.1.105 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 2 UND × $80.0M COP/u = $160.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $80.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 2 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.1.106": {
      "descripcion": "Software análisis",
      "justificacion_tecnica": "Ítem 3.1.106 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 1 UND × $120.0M COP/u = $120.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $120.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.1.107": {
      "descripcion": "Monitores CCO",
      "justificacion_tecnica": "Ítem 3.1.107 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 8 UND × $15.0M COP/u = $120.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $15.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 8 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.1.108": {
      "descripcion": "Instalación y configuración",
      "justificacion_tecnica": "Ítem 3.1.108 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SERVICIO. Cantidad: 73 UND × $2.0M COP/u = $146.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $2.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 73 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.1.109": {
      "descripcion": "Repuestos (10%)",
      "justificacion_tecnica": "Ítem 3.1.109 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 1 UND × $307.3M COP/u = $307.3M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $307.3M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.2.100": {
      "descripcion": "Lectores RFID control accesos (ISO 14443, IP65/IK10)",
      "justificacion_tecnica": "Ítem 3.2.100 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 100 UND × $3.0M COP/u = $300.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $3.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 100 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.2.101": {
      "descripcion": "Tarjetas RFID",
      "justificacion_tecnica": "Ítem 3.2.101 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 1000 UND × $25k COP/u = $25.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $25k COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1000 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.2.102": {
      "descripcion": "Sistema biométrico",
      "justificacion_tecnica": "Ítem 3.2.102 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 5 UND × $50.0M COP/u = $250.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $50.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 5 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.2.103": {
      "descripcion": "Software control accesos",
      "justificacion_tecnica": "Ítem 3.2.103 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 1 UND × $80.0M COP/u = $80.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $80.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.2.104": {
      "descripcion": "Cerraduras electrónicas",
      "justificacion_tecnica": "Ítem 3.2.104 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 50 UND × $8.0M COP/u = $400.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $8.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 50 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.2.105": {
      "descripcion": "Intercomunicadores",
      "justificacion_tecnica": "Ítem 3.2.105 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 20 UND × $15.0M COP/u = $300.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $15.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 20 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.2.106": {
      "descripcion": "Instalación y configuración",
      "justificacion_tecnica": "Ítem 3.2.106 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SERVICIO. Cantidad: 1 UND × $100.0M COP/u = $100.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $100.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.2.107": {
      "descripcion": "Repuestos (10%)",
      "justificacion_tecnica": "Ítem 3.2.107 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 1 UND × $145.5M COP/u = $145.5M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $145.5M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.3.100": {
      "descripcion": "Detectores humo",
      "justificacion_tecnica": "Ítem 3.3.100 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 200 UND × $150k COP/u = $30.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $150k COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 200 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.3.101": {
      "descripcion": "Detectores temperatura",
      "justificacion_tecnica": "Ítem 3.3.101 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 150 UND × $200k COP/u = $30.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $200k COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 150 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.3.102": {
      "descripcion": "Sistema aspersores",
      "justificacion_tecnica": "Ítem 3.3.102 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 50 UND × $800k COP/u = $40.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $800k COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 50 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.3.103": {
      "descripcion": "Extintores",
      "justificacion_tecnica": "Ítem 3.3.103 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 100 UND × $500k COP/u = $50.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $500k COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 100 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.3.104": {
      "descripcion": "Sistema alarma",
      "justificacion_tecnica": "Ítem 3.3.104 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 1 UND × $120.0M COP/u = $120.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $120.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.3.105": {
      "descripcion": "Botones emergencia",
      "justificacion_tecnica": "Ítem 3.3.105 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 30 UND × $500k COP/u = $15.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $500k COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 30 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.3.106": {
      "descripcion": "Instalación",
      "justificacion_tecnica": "Ítem 3.3.106 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 1 UND × $80.0M COP/u = $80.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $80.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "3.3.107": {
      "descripcion": "Repuestos (10%)",
      "justificacion_tecnica": "Ítem 3.3.107 del Capítulo 3 (Sistemas ITS y Seguridad). Tipo: SUMINISTRO. Cantidad: 1 UND × $36.5M COP/u = $36.5M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $36.5M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §7 (ITS)",
        "AT1 Tabla 17"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "4.1.100": {
      "descripcion": "Sistemas barreras automáticas SIL-3 vital (FRA Part 236 Subpart I)",
      "justificacion_tecnica": "Ítem 4.1.100 del Capítulo 4 (Pasos a Nivel). Tipo: SUMINISTRO. Cantidad: 9 UND × $180.0M COP/u = $1,620.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $180.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 9 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §8.2 (PaN)",
        "49 CFR §236.1005"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "4.1.101": {
      "descripcion": "Senalización LED (Res. 20243040045005)",
      "justificacion_tecnica": "Ítem 4.1.101 del Capítulo 4 (Pasos a Nivel). Tipo: SUMINISTRO. Cantidad: 9 UND × $80.0M COP/u = $720.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $80.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 9 UND (sin justificación documentada en metadata enriquecida)",
        "🔴 RFQ pendiente — VU sujeto a actualización post-cotización formal"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §8.2 (PaN)",
        "49 CFR §236.1005"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "4.1.102": {
      "descripcion": "Sistemas detección vehículos SIL-3 vital (FRA Part 236 Subpart I)",
      "justificacion_tecnica": "Ítem 4.1.102 del Capítulo 4 (Pasos a Nivel). Tipo: SUMINISTRO. Cantidad: 9 UND × $360.0M COP/u = $3,240.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $360.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 9 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §8.2 (PaN)",
        "49 CFR §236.1005"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "4.1.103": {
      "descripcion": "Sistemas comunicación",
      "justificacion_tecnica": "Ítem 4.1.103 del Capítulo 4 (Pasos a Nivel). Tipo: SUMINISTRO. Cantidad: 9 UND × $60.0M COP/u = $540.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $60.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 9 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §8.2 (PaN)",
        "49 CFR §236.1005"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "4.1.104": {
      "descripcion": "Sistemas emergencia SIL-3 vital (FRA Part 236 Subpart I)",
      "justificacion_tecnica": "Ítem 4.1.104 del Capítulo 4 (Pasos a Nivel). Tipo: SUMINISTRO. Cantidad: 9 UND × $40.0M COP/u = $360.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $40.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 9 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §8.2 (PaN)",
        "49 CFR §236.1005"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "4.1.105": {
      "descripcion": "Instalación y configuración",
      "justificacion_tecnica": "Ítem 4.1.105 del Capítulo 4 (Pasos a Nivel). Tipo: SERVICIO. Cantidad: 9 UND × $200.0M COP/u = $1,800.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $200.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 9 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §8.2 (PaN)",
        "49 CFR §236.1005"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "4.1.106": {
      "descripcion": "Repuestos (10%)",
      "justificacion_tecnica": "Ítem 4.1.106 del Capítulo 4 (Pasos a Nivel). Tipo: SUMINISTRO. Cantidad: 1 UND × $828.0M COP/u = $828.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $828.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §8.2 (PaN)",
        "49 CFR §236.1005"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "4.2.100": {
      "descripcion": "Señales Luminosas y Acústicas (SLA) — PaN Tipo B (BCD §8.2.1, NTC 4741:1999). VU pendiente RFQ COL.",
      "justificacion_tecnica": "Ítem 4.2.100 del Capítulo 4 (Pasos a Nivel). Tipo: SUMINISTRO. Cantidad: 15 UND × $120.0M COP/u = $1,800.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $120.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [
        "DT-SICC v14.7 — descripción \"barreras manuales\"→\"Señales Luminosas y Acústicas (SLA) Tipo B\" (BCD §8.2.1)"
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §8.2 (PaN)",
        "49 CFR §236.1005"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "4.2.101": {
      "descripcion": "Senalización basica (Res. 20243040045005)",
      "justificacion_tecnica": "Ítem 4.2.101 del Capítulo 4 (Pasos a Nivel). Tipo: SUMINISTRO. Cantidad: 15 UND × $50.0M COP/u = $750.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $50.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §8.2 (PaN)",
        "49 CFR §236.1005"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "4.2.102": {
      "descripcion": "Sistemas detección",
      "justificacion_tecnica": "Ítem 4.2.102 del Capítulo 4 (Pasos a Nivel). Tipo: SUMINISTRO. Cantidad: 15 UND × $80.0M COP/u = $1,200.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $80.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §8.2 (PaN)",
        "49 CFR §236.1005"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "4.2.103": {
      "descripcion": "Sistemas comunicación",
      "justificacion_tecnica": "Ítem 4.2.103 del Capítulo 4 (Pasos a Nivel). Tipo: SUMINISTRO. Cantidad: 15 UND × $40.0M COP/u = $600.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $40.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §8.2 (PaN)",
        "49 CFR §236.1005"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "4.2.104": {
      "descripcion": "Instalación",
      "justificacion_tecnica": "Ítem 4.2.104 del Capítulo 4 (Pasos a Nivel). Tipo: SUMINISTRO. Cantidad: 15 UND × $60.0M COP/u = $900.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $60.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §8.2 (PaN)",
        "49 CFR §236.1005"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "4.2.105": {
      "descripcion": "Repuestos (10%)",
      "justificacion_tecnica": "Ítem 4.2.105 del Capítulo 4 (Pasos a Nivel). Tipo: SUMINISTRO. Cantidad: 1 UND × $525.0M COP/u = $525.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $525.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §8.2 (PaN)",
        "49 CFR §236.1005"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "4.3.100": {
      "descripcion": "Senalización basica (Manual 2024 / Res. 20243040045005)",
      "justificacion_tecnica": "Ítem 4.3.100 del Capítulo 4 (Pasos a Nivel). Tipo: SUMINISTRO. Cantidad: 122 UND × $25.0M COP/u = $3,050.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $25.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 122 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §8.2 (PaN)",
        "49 CFR §236.1005"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "4.3.103": {
      "descripcion": "Repuestos (10%)",
      "justificacion_tecnica": "Ítem 4.3.103 del Capítulo 4 (Pasos a Nivel). Tipo: SUMINISTRO. Cantidad: 1 UND × $305.0M COP/u = $305.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $305.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §8.2 (PaN)",
        "49 CFR §236.1005"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "5.1.100": {
      "descripcion": "Construcción edificio",
      "justificacion_tecnica": "Ítem 5.1.100 del Capítulo 5 (Centro de Control Operacional). Tipo: SUMINISTRO. Cantidad: 1 UND × $2,500.0M COP/u = $2,500.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $2,500.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §9 (CCO)",
        "IV.2_CCO_Basica.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "5.1.101": {
      "descripcion": "Sala de control",
      "justificacion_tecnica": "Ítem 5.1.101 del Capítulo 5 (Centro de Control Operacional). Tipo: SUMINISTRO. Cantidad: 1 UND × $800.0M COP/u = $800.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $800.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §9 (CCO)",
        "IV.2_CCO_Basica.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "5.1.102": {
      "descripcion": "Sistemas HVAC",
      "justificacion_tecnica": "Ítem 5.1.102 del Capítulo 5 (Centro de Control Operacional). Tipo: SUMINISTRO. Cantidad: 1 UND × $300.0M COP/u = $300.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $300.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §9 (CCO)",
        "IV.2_CCO_Basica.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "5.1.103": {
      "descripcion": "Sistemas eléctricos",
      "justificacion_tecnica": "Ítem 5.1.103 del Capítulo 5 (Centro de Control Operacional). Tipo: SUMINISTRO. Cantidad: 1 UND × $400.0M COP/u = $400.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $400.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §9 (CCO)",
        "IV.2_CCO_Basica.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "5.1.104": {
      "descripcion": "Sistemas seguridad",
      "justificacion_tecnica": "Ítem 5.1.104 del Capítulo 5 (Centro de Control Operacional). Tipo: SUMINISTRO. Cantidad: 1 UND × $200.0M COP/u = $200.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $200.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §9 (CCO)",
        "IV.2_CCO_Basica.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "5.1.105": {
      "descripcion": "Sistemas comunicaciones",
      "justificacion_tecnica": "Ítem 5.1.105 del Capítulo 5 (Centro de Control Operacional). Tipo: SUMINISTRO. Cantidad: 1 UND × $150.0M COP/u = $150.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $150.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §9 (CCO)",
        "IV.2_CCO_Basica.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "5.2.100": {
      "descripcion": "Consolas operadores",
      "justificacion_tecnica": "Ítem 5.2.100 del Capítulo 5 (Centro de Control Operacional). Tipo: SUMINISTRO. Cantidad: 8 UND × $120.0M COP/u = $960.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $120.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 8 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §9 (CCO)",
        "IV.2_CCO_Basica.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "5.2.101": {
      "descripcion": "Pantallas de video",
      "justificacion_tecnica": "Ítem 5.2.101 del Capítulo 5 (Centro de Control Operacional). Tipo: SUMINISTRO. Cantidad: 16 UND × $25.0M COP/u = $400.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $25.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 16 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §9 (CCO)",
        "IV.2_CCO_Basica.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "5.2.102": {
      "descripcion": "Sistema audio",
      "justificacion_tecnica": "Ítem 5.2.102 del Capítulo 5 (Centro de Control Operacional). Tipo: SUMINISTRO. Cantidad: 1 UND × $80.0M COP/u = $80.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $80.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §9 (CCO)",
        "IV.2_CCO_Basica.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "5.2.103": {
      "descripcion": "Sistema iluminación",
      "justificacion_tecnica": "Ítem 5.2.103 del Capítulo 5 (Centro de Control Operacional). Tipo: SUMINISTRO. Cantidad: 1 UND × $60.0M COP/u = $60.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $60.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §9 (CCO)",
        "IV.2_CCO_Basica.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "5.2.104": {
      "descripcion": "Muebles y accesorios",
      "justificacion_tecnica": "Ítem 5.2.104 del Capítulo 5 (Centro de Control Operacional). Tipo: SUMINISTRO. Cantidad: 1 UND × $100.0M COP/u = $100.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $100.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §9 (CCO)",
        "IV.2_CCO_Basica.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "5.3.100": {
      "descripcion": "Servidores SCADA",
      "justificacion_tecnica": "Servidores duales para sistema SCADA de supervisión de infraestructura ferroviaria",
      "criterios_diseno": [
        "Arquitectura maestro-esclavo",
        "Monitoreo tiempo real de senales, cambios vía, detectores",
        "Integración con CTC para vista unificada"
      ],
      "supuestos": [
        "2 servidores (1 maestro + 1 esclavo)",
        "Capacidad: 500 puntos I/O",
        "Protocolo IEC 61850 para interoperabilidad"
      ],
      "decisiones_tecnicas": [
        "DT-SCADA-001-2025-10-07"
      ],
      "feedback_especialista": "Costo ajustado a $400M c/u para incluir licencias SCADA corporativas y módulos de ciberseguridad industrial.",
      "documentos_ingenieria": [
        "V.5_SCADA_Detalle_v1.0.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "DT-SCADA-001"
    },
    "5.3.101": {
      "descripcion": "Software SCADA",
      "justificacion_tecnica": "Plataforma SCADA industrial de alta confiabilidad para supervisión y control",
      "criterios_diseno": [
        "Compatibilidad con múltiples protocolos: Modbus, DNP3, IEC 61850",
        "HMI gráfico con sinópticos dinámicos",
        "Módulo de alarmas inteligentes y trending"
      ],
      "supuestos": [
        "1 licencia corporativa ilimitada",
        "Incluye: desarrollo, runtime, historian, reporting",
        "Soporte técnico 24/7 por 5 anos"
      ],
      "decisiones_tecnicas": [
        "DT-SCADA-002-2025-10-07"
      ],
      "feedback_especialista": "Incremento justificado por requerimientos de ciberseguridad IEC 62443 y necesidad de módulo de gestión de energía para análisis de consumos.",
      "documentos_ingenieria": [
        "V.5_SCADA_Detalle_v1.0.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "DT-SCADA-002"
    },
    "5.3.102": {
      "descripcion": "Base de datos",
      "justificacion_tecnica": "Ítem 5.3.102 del Capítulo 5 (Centro de Control Operacional). Tipo: SUMINISTRO. Cantidad: 1 UND × $150.0M COP/u = $150.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $150.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §9 (CCO)",
        "IV.2_CCO_Basica.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "5.3.103": {
      "descripcion": "Interfaces comunicación L2/L3",
      "justificacion_tecnica": "Switches industriales de capa 2/3 para red de comunicaciones del sistema SCADA",
      "criterios_diseno": [
        "Managed switches con VLAN y QoS",
        "Redundancia en anillo (ring topology) IEC 62439-3",
        "Grado industrial: -40Â°C a +75Â°C"
      ],
      "supuestos": [
        "1 set de equipos: core switch + distribution switches + access switches",
        "Fibra óptica para backbone, cobre para edge",
        "Certificación IEC 61850-3 para subestaciones"
      ],
      "decisiones_tecnicas": [
        "DT-SCADA-003-2025-10-07"
      ],
      "feedback_especialista": "Costo incluye switches core redundantes con protocolo PRP (Parallel Redundancy Protocol) para tiempo de conmutación <20ms según requerimientos críticos.",
      "documentos_ingenieria": [
        "V.5_SCADA_Detalle_v1.0.md",
        "V.3_Comunicacion_Detalle_v3.0.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "DT-SCADA-003"
    },
    "5.3.104": {
      "descripcion": "Sistema redundancia",
      "justificacion_tecnica": "Ítem 5.3.104 del Capítulo 5 (Centro de Control Operacional). Tipo: SUMINISTRO. Cantidad: 1 UND × $300.0M COP/u = $300.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $300.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §9 (CCO)",
        "IV.2_CCO_Basica.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "5.3.105": {
      "descripcion": "Configuración",
      "justificacion_tecnica": "Ítem 5.3.105 del Capítulo 5 (Centro de Control Operacional). Tipo: SERVICIO. Cantidad: 1 UND × $100.0M COP/u = $100.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $100.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §9 (CCO)",
        "IV.2_CCO_Basica.md"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "6.1.100": {
      "descripcion": "Sistemas PTC embarcados",
      "justificacion_tecnica": "Ítem 6.1.100 del Capítulo 6 (Material Rodante). Tipo: SUMINISTRO. Cantidad: 15 UND × $400.0M COP/u = $6,000.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $400.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [
        "DT-CTRL-2026-006 — flota tractiva 15 unidades (1 U18 base AT1 §5 + 14 Factor Calidad)"
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §11 (MR)",
        "AT1 §5 (flota tractiva)",
        "DT-CTRL-2026-006"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "6.1.101": {
      "descripcion": "Radios TETRA embarcados",
      "justificacion_tecnica": "Ítem 6.1.101 del Capítulo 6 (Material Rodante). Tipo: SUMINISTRO. Cantidad: 30 UND × $35.0M COP/u = $1,050.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $35.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 30 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [
        "DT-CTRL-2026-006 — flota tractiva 15 unidades (1 U18 base AT1 §5 + 14 Factor Calidad)"
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §11 (MR)",
        "AT1 §5 (flota tractiva)",
        "DT-CTRL-2026-006"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "6.1.102": {
      "descripcion": "Radios embarcados — red móvil broadband ferroviaria (complemento TETRA)",
      "justificacion_tecnica": "Ítem 6.1.102 del Capítulo 6 (Material Rodante). Tipo: SUMINISTRO. Cantidad: 30 UND × $25.0M COP/u = $750.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $25.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 30 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [
        "Renombrado: \"Red Vital IP / TETRA\" → \"red móvil broadband ferroviaria (complemento TETRA)\""
      ],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §11 (MR)",
        "AT1 §5 (flota tractiva)",
        "DT-CTRL-2026-006"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "6.1.103": {
      "descripcion": "Sistemas GPS",
      "justificacion_tecnica": "Ítem 6.1.103 del Capítulo 6 (Material Rodante). Tipo: SUMINISTRO. Cantidad: 15 UND × $35.0M COP/u = $525.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $35.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §11 (MR)",
        "AT1 §5 (flota tractiva)",
        "DT-CTRL-2026-006"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "6.1.104": {
      "descripcion": "Sistemas redundancia",
      "justificacion_tecnica": "Ítem 6.1.104 del Capítulo 6 (Material Rodante). Tipo: SUMINISTRO. Cantidad: 15 UND × $80.0M COP/u = $1,200.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $80.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §11 (MR)",
        "AT1 §5 (flota tractiva)",
        "DT-CTRL-2026-006"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "6.1.105": {
      "descripcion": "Instalación y configuración",
      "justificacion_tecnica": "Ítem 6.1.105 del Capítulo 6 (Material Rodante). Tipo: SERVICIO. Cantidad: 15 UND × $100.0M COP/u = $1,500.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $100.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §11 (MR)",
        "AT1 §5 (flota tractiva)",
        "DT-CTRL-2026-006"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "6.1.106": {
      "descripcion": "Repuestos (10%)",
      "justificacion_tecnica": "Ítem 6.1.106 del Capítulo 6 (Material Rodante). Tipo: SUMINISTRO. Cantidad: 1 UND × $1,102.5M COP/u = $1,102.5M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $1,102.5M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §11 (MR)",
        "AT1 §5 (flota tractiva)",
        "DT-CTRL-2026-006"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "6.2.100": {
      "descripcion": "Dispositivos EOT completos",
      "justificacion_tecnica": "Ítem 6.2.100 del Capítulo 6 (Material Rodante). Tipo: SUMINISTRO. Cantidad: 15 UND × $25.0M COP/u = $375.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $25.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §11 (MR)",
        "AT1 §5 (flota tractiva)",
        "DT-CTRL-2026-006"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "6.2.101": {
      "descripcion": "Repuestos EOT (10%)",
      "justificacion_tecnica": "Ítem 6.2.101 del Capítulo 6 (Material Rodante). Tipo: SUMINISTRO. Cantidad: 2 UND × $25.0M COP/u = $50.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $25.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 2 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §11 (MR)",
        "AT1 §5 (flota tractiva)",
        "DT-CTRL-2026-006"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "6.2.102": {
      "descripcion": "Instalación EOT",
      "justificacion_tecnica": "Ítem 6.2.102 del Capítulo 6 (Material Rodante). Tipo: SUMINISTRO. Cantidad: 15 UND × $5.0M COP/u = $75.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $5.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 15 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §11 (MR)",
        "AT1 §5 (flota tractiva)",
        "DT-CTRL-2026-006"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    },
    "6.2.103": {
      "descripcion": "Configuración EOT",
      "justificacion_tecnica": "Ítem 6.2.103 del Capítulo 6 (Material Rodante). Tipo: SERVICIO. Cantidad: 1 UND × $20.0M COP/u = $20.0M COP total. Sustento técnico detallado pendiente de elaboración por especialista.",
      "criterios_diseno": [],
      "supuestos": [
        "VU base aplicado: $20.0M COP/u (ver fuente en precios_Adif_COMPLETO.md o RFQ pendiente)",
        "Cantidad: 1 UND (sin justificación documentada en metadata enriquecida)"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "BCD_SCC_v001_2026-04.md §11 (MR)",
        "AT1 §5 (flota tractiva)",
        "DT-CTRL-2026-006"
      ],
      "ultima_actualizacion": "2026-05-05",
      "actualizado_por": "auto-sync v14.7.5 — pendiente enriquecimiento manual"
    }
  }
};
