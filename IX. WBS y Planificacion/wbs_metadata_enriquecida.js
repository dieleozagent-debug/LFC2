window.wbsMetadataEnriquecida = {
  "version": "1.0",
  "fecha_creacion": "2025-10-08",
  "descripcion": "Metadata enriquecida de la WBS con criterios tÃ©cnicos, justificaciones y trazabilidad completa",
  "items": {
    "1.1.100": {
      "descripcion": "Servidores CTC principales",
      "justificacion_tecnica": "Servidores redundantes para control centralizado del trÃ¡fico ferroviario segÃºn AT2 Â§5.3",
      "criterios_diseno": [
        "Redundancia N+1 para alta disponibilidad",
        "Capacidad procesamiento: 100 trenes simultÃ¡neos",
        "Tiempo respuesta < 100ms segÃºn IEC 62290-1"
      ],
      "supuestos": [
        "2 servidores (1 principal + 1 respaldo)",
        "Arquitectura cliente-servidor",
        "ComunicaciÃ³n redundante fibra Ã³ptica"
      ],
      "decisiones_tecnicas": [],
      "feedback_especialista": "",
      "documentos_ingenieria": [
        "V.1_CTC_Detalle_v1.0.md",
        "IV.1_CTC_Basica_v2.0.md"
      ],
      "ultima_actualizacion": "2025-10-08",
      "actualizado_por": "Sistema WBS"
    },
    "1.1.103": {
      "descripcion": "Software CTC virtual + ETCS L2 + Interoperabilidad FENOCO",
      "justificacion_tecnica": "Software CTC ampliado con ETCS Level 2, Interoperabilidad FENOCO y Alta Disponibilidad segun ofertas tecnicas Knorr Bremse/CRRC validadas - Desglose: Core $30B + ETCS L2 $25B + FENOCO $15B + HA $9.15B",
      "criterios_diseno": [
        "Licencias Core CTC: $30B - 8 estaciones + CCO + redundancia + 100 trenes simultaneos",
        "Modulo ETCS Level 2: $25B - EVC + RBC + Sistema claves + Interfaces GSM-R/TETRA",
        "Interoperabilidad FENOCO: $15B - Protocolos UIC 950-7/554 + Gestion coordinada + Transferencia control",
        "Alta Disponibilidad: $9.15B - Cluster N+1 + Failover <5seg + DR (RTO<1h, RPO<15min) + 99.95%"
      ],
      "supuestos": [
        "Licenciamiento perpetuo con 5 anos soporte tecnico incluido",
        "Certificacion CENELEC ETCS Level 2 completa incluida",
        "Interfaces FENOCO customizadas especificas del proyecto",
        "Capacitacion 300 horas (200 operadores + 100 ingenieros)",
        "Customizacion 30% del software para requisitos especificos",
        "Integracion con SCADA, PAN, CCTV incluida"
      ],
      "decisiones_tecnicas": [
        "DT-CTC-002-2025-10-08",
        "DT-CTC-003-2025-10-08"
      ],
      "feedback_especialista": "Incremento +901% justificado por alcance completo ETCS L2 + Interoperabilidad FENOCO. Valor alineado con ofertas Knorr Bremse ($82B) y CRRC ($79B) para soluciones similares. Incluye: EVC, RBC, interfaces UIC, sistema HA 99.95%.",
      "documentos_ingenieria": [
        "V.2_Centro_Control_Trafico_CTC_Detalle_v1.0.md",
        "IV.2_CTC_Basica_v2.0.md",
        "VII.2.1_SRS_ITCS_ETCS_Level2_PROVISIONAL.md"
      ],
      "ultima_actualizacion": "2025-10-08",
      "actualizado_por": "DT-CTC-003"
    },
    "1.2.100": {
      "descripcion": "Computadora ATP embarcada",
      "justificacion_tecnica": "ReducciÃ³n de 15 a 8 unidades alineada con AT1: 5 locomotoras contractuales + 2 diseÃ±o/pruebas + 1 contingencia",
      "criterios_diseno": [
        "Cumplimiento CENELEC EN 50126/128/129",
        "SIL 4 para funciones vitales de seguridad",
        "Interfaz con eurobaliza y odÃ³metro"
      ],
      "supuestos": [
        "5 locomotoras operativas segÃºn AT1 Â§3.1",
        "2 unidades para diseÃ±o y pruebas de aceptaciÃ³n",
        "1 unidad de contingencia/repuesto estratÃ©gico"
      ],
      "decisiones_tecnicas": [
        "DT-TETRA-001-2025-10-07",
        "DT-ATP-001-2025-10-09"
      ],
      "feedback_especialista": "Cantidad 8 UND justificada por ApÃ©ndice Financiero pÃ¡g. 3 (5 locomotoras: 2 GR12 + 2 U10 + 1 U18C) + 3 reserva (2 pruebas FAT/SAT + 1 contingencia). AlineaciÃ³n contractual AT1 completa.",
      "documentos_ingenieria": [
        "V.2_ATP_Detalle_v3.0.md",
        "IV.2_ATP_Basica_v2.0.md",
        "AT1 - ApÃ©ndice TÃ©cnico 1",
        "ApÃ©ndice Financiero pÃ¡g. 3"
      ],
      "referencias_contractuales": [
        "ApÃ©ndice Financiero pÃ¡g. 3 - Material rodante base",
        "AT1 Cap. V y Anexo AT1-3 - Equipos embarcados"
      ],
      "ultima_actualizacion": "2025-10-09",
      "actualizado_por": "DT-ATP-001-2025-10-09"
    },
    "5.3.100": {
      "descripcion": "Servidores SCADA",
      "justificacion_tecnica": "Servidores duales para sistema SCADA de supervisiÃ³n de infraestructura ferroviaria",
      "criterios_diseno": [
        "Arquitectura maestro-esclavo",
        "Monitoreo tiempo real de seÃ±ales, cambios vÃ­a, detectores",
        "IntegraciÃ³n con CTC para vista unificada"
      ],
      "supuestos": [
        "2 servidores (1 maestro + 1 esclavo)",
        "Capacidad: 500 puntos I/O",
        "Protocolo IEC 61850 para interoperabilidad"
      ],
      "decisiones_tecnicas": [
        "DT-SCADA-001-2025-10-07"
      ],
      "feedback_especialista": "Costo ajustado a $400M c/u para incluir licencias SCADA corporativas y mÃ³dulos de ciberseguridad industrial.",
      "documentos_ingenieria": [
        "V.5_SCADA_Detalle_v1.0.md"
      ],
      "ultima_actualizacion": "2025-10-08",
      "actualizado_por": "DT-SCADA-001"
    },
    "5.3.101": {
      "descripcion": "Software SCADA",
      "justificacion_tecnica": "Plataforma SCADA industrial de alta confiabilidad para supervisiÃ³n y control",
      "criterios_diseno": [
        "Compatibilidad con mÃºltiples protocolos: Modbus, DNP3, IEC 61850",
        "HMI grÃ¡fico con sinÃ³pticos dinÃ¡micos",
        "MÃ³dulo de alarmas inteligentes y trending"
      ],
      "supuestos": [
        "1 licencia corporativa ilimitada",
        "Incluye: desarrollo, runtime, historian, reporting",
        "Soporte tÃ©cnico 24/7 por 5 aÃ±os"
      ],
      "decisiones_tecnicas": [
        "DT-SCADA-002-2025-10-07"
      ],
      "feedback_especialista": "Incremento justificado por requerimientos de ciberseguridad IEC 62443 y necesidad de mÃ³dulo de gestiÃ³n de energÃ­a para anÃ¡lisis de consumos.",
      "documentos_ingenieria": [
        "V.5_SCADA_Detalle_v1.0.md"
      ],
      "ultima_actualizacion": "2025-10-08",
      "actualizado_por": "DT-SCADA-002"
    },
    "1.1.106": {
      "descripcion": "Interfaces comunicaciÃ³n",
      "justificacion_tecnica": "Bloque lÃ³gico de integraciÃ³n (no hardware fÃ­sico Ãºnico). Conecta CTC con ITCS/ETCS L2, FENOCO (Gateway UIC 918-4), TETRA (voz/datos), Fibra Ã³ptica (backbone N+1) y sistemas ITS. Incluye: gateways industriales, switches de borde, firewalls IEC 62443, middleware interoperabilidad, licencias software.",
      "criterios_diseno": [
        "IntegraciÃ³n funcional CTC-ITCS-FENOCO-TETRA-ITS",
        "Redundancia N+1 en comunicaciones crÃ­ticas",
        "Middleware interoperabilidad con protocolos UIC 918-4",
        "Firewalls IEC 62443 para ciberseguridad industrial"
      ],
      "supuestos": [
        "1 UND representa conjunto lÃ³gico completo de integraciÃ³n",
        "Equipos fÃ­sicos mayores cubiertos en Ã­tems 1.1.100-1.1.105",
        "Incluye licencias software, configuraciÃ³n y ensayos FAT/SAT",
        "Interfaces con: ITCS/ETCS L2, FENOCO, TETRA, Fibra, ITS (CCTV/acceso/intrusiÃ³n)"
      ],
      "decisiones_tecnicas": [
        "DT-INTERFACES-001-2025-10-09"
      ],
      "feedback_especialista": "Elemento clave de integraciÃ³n del sistema CTC. NO es hardware fÃ­sico Ãºnico sino bloque funcional que conecta todos los subsistemas. Costo $150M incluye gateways, middleware UIC, firewalls, licencias y configuraciÃ³n completa.",
      "documentos_ingenieria": [
        "V.2_Centro_Control_Trafico_CTC_v5.0.md",
        "IV.2_Interfaces_Sistemas_MEJORADO.md",
        "VII.2.4_Interfaces_CTC_ITCS_Protocolo_FFFIS.md"
      ],
      "ultima_actualizacion": "2025-10-09",
      "actualizado_por": "DT-INTERFACES-001-2025-10-09"
    },
    "2.1.103": {
      "descripcion": "Radios embarcados (30 unidades)",
      "justificacion_tecnica": "30 radios embarcados TETRA segÃºn MetodologÃ­a Punto 42: 9 locomotoras operativas (factor 1.5 redundancia) + 9 equipos maniobras/vÃ­a + 12 personal operativo. Basado en AT2/AT10 para operaciÃ³n segura con redundancia en emergencias. DistribuciÃ³n: radio principal por locomotora + portÃ¡tiles para conducciÃ³n/maniobras/mantenimiento.",
      "criterios_diseno": [
        "1 radio principal embarcado por locomotora (control trÃ¡fico y voz CTC)",
        "Radios portÃ¡tiles para personal conducciÃ³n, maniobras y mantenimiento",
        "Factor redundancia 1.5 segÃºn MetodologÃ­a Punto 42",
        "Cumplimiento AT2 y AT10 para operaciÃ³n segura"
      ],
      "supuestos": [
        "Flota base: 6 locomotoras operativas (U18C + GR12 + reserva)",
        "Factor 1.5 redundancia aplicado (dotaciÃ³n + backup)",
        "Personal operativo: 8 base (jefes tren, seguridad vÃ­a, control apartaderos)",
        "Total calculado: 9 locomotoras + 9 maniobras + 12 personal = 30 radios"
      ],
      "decisiones_tecnicas": [
        "DT-TETRA-002-2025-10-09"
      ],
      "feedback_especialista": "CÃ¡lculo basado en ApÃ©ndice Financiero 4 (material rodante tractivo) y AT2/AT10 (operaciÃ³n segura). 30 radios cubren: locomotoras (principal) + equipos maniobras/vÃ­a + personal operativo con redundancia emergencias.",
      "documentos_ingenieria": [
        "ApÃ©ndice Financiero 4",
        "AT2 - OperaciÃ³n y Mantenimiento",
        "AT10 - Capacidad Surcos"
      ],
      "referencias_contractuales": [
        "ApÃ©ndice Financiero 4: Material rodante base (1 U18 + 2 GR12 + complementario)",
        "AT2: Requerimientos operaciÃ³n segura y redundancia emergencias",
        "AT10: Personal operativo y requisitos comunicaciones"
      ],
      "ultima_actualizacion": "2025-10-09",
      "actualizado_por": "DT-TETRA-002-2025-10-09"
    },
    "5.3.103": {
      "descripcion": "Interfaces comunicaciÃ³n L2/L3",
      "justificacion_tecnica": "Switches industriales de capa 2/3 para red de comunicaciones del sistema SCADA",
      "criterios_diseno": [
        "Managed switches con VLAN y QoS",
        "Redundancia en anillo (ring topology) IEC 62439-3",
        "Grado industrial: -40Â°C a +75Â°C"
      ],
      "supuestos": [
        "1 set de equipos: core switch + distribution switches + access switches",
        "Fibra Ã³ptica para backbone, cobre para edge",
        "CertificaciÃ³n IEC 61850-3 para subestaciones"
      ],
      "decisiones_tecnicas": [
        "DT-SCADA-003-2025-10-07"
      ],
      "feedback_especialista": "Costo incluye switches core redundantes con protocolo PRP (Parallel Redundancy Protocol) para tiempo de conmutaciÃ³n <20ms segÃºn requerimientos crÃ­ticos.",
      "documentos_ingenieria": [
        "V.5_SCADA_Detalle_v1.0.md",
        "V.3_Comunicacion_Detalle_v3.0.md"
      ],
      "ultima_actualizacion": "2025-10-08",
      "actualizado_por": "DT-SCADA-003"
    }
  }
};

