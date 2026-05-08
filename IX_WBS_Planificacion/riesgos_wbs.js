// ============================================================================
// RIESGOS WBS — APP La Dorada-Chiriguaná UF2 SCC
// ============================================================================
// Schema v2 (2026-05-08) — riesgo_principal · estrategia_mitigacion · riesgo_residual
// Cifras en millones COP (M COP). exposicion_residual_cop = probabilidad × punto_medio_residual
// Total exposición residual esperada se calcula en cliente (HTML).
// ============================================================================

window.riesgosWbs = {
  "fecha_actualizacion": "2026-05-08",
  "schema_version": "v3",
  "metodologia": "Cada ítem se clasifica con 4 ejes para que el KPI gerencial separe bien lo que es cancha SICC de lo transferible o de cancha ajena: (1) tipo: RIESGO u OPORTUNIDAD; (2) responsable_capex: SICC, ANI, CFO, Concesionario, HSEQ — solo SICC suma al KPI gerencial SICC; (3) transferibilidad: si el costo es transferible a ANI vía Sec 9.11/9.12→25.4, residual SICC = 0 y se reporta el monto transferido por separado; (4) confianza: orden_magnitud, pendiente_wbs, wbs_firme — visible en cada card. Los riesgos con principal/mitigación/residual: el principal sostiene el argumento, la mitigación muestra la palanca, el residual va a provisión SICC. Los macro están en residual=0 para evitar doble conteo con sus descomposiciones.",
  "riesgos": [

    // =====================================================================
    // ESPECIALIDAD: FIBRA ÓPTICA / OBRA CIVIL  (BCD §6.1.1)
    // =====================================================================
    {
      "id": "R-FO-PROF-001",
      "categoria": "Técnico / Económico",
      "especialidad": "Fibra Óptica",
      "descripcion": "Profundidad de soterrado: cotización vigente asume 40 cm homogéneos en 526 km. AREMA + cargas dinámicas en zona de balasto exigen hasta 120 cm. Volumen de excavación pasa de ~105.200 m³ a ~315.600 m³ (3×).",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Crítico",
      "impacto_num": 0.9,
      "nivel_exposicion": "CRÍTICA",
      "exposicion": 0.45,
      "riesgo_principal": {
        "cop_min": 6300,
        "cop_max": 16800,
        "descripcion": "Si toda la zanja se ejecuta a 120 cm en 526 km a costo unitario $30-80k COP/m³"
      },
      "estrategia_mitigacion": "Profundidad diferenciada por tramo: (1) 60-80 cm en servidumbre 30 m fuera del balasto (~70% del trazado); (2) 120 cm solo bajo vía y en cruces críticos (~10-15%); (3) memoria de cálculo de cargas dinámicas validada con Interventoría antes del RFQ obra civil; (4) HDD solo en cruces vivos, zanja convencional reforzada en el resto.",
      "riesgo_residual": {
        "cop_min": 1500,
        "cop_max": 4000,
        "descripcion": "Sobrecosto residual aplicando profundidad diferenciada por zona técnica vs servidumbre"
      },
      "exposicion_residual_cop": 1375,
      "plan_accion": "Memoria de cálculo de profundidad por tramo en ingeniería de detalle. Validación previa con Interventoría antes de cierre RFQ obra civil FO.",
      "responsable": "Director Obra Civil + Ing. Comunicaciones",
      "hito_verificacion": "Memoria de cálculo profundidad por tramo aprobada",
      "items_wbs": ["2.3.100", "2.3.101", "2.3.102"],
      "fuente": "BCD §6.1.1 + AREMA Manual for Railway Engineering 2021 + cargas dinámicas",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-FO-AEREO-001",
      "categoria": "Técnico / Económico",
      "especialidad": "Fibra Óptica",
      "descripcion": "Tendido aéreo (cable ADSS) no cuantificado en cantidad. BCD §6.1.1 lo permite solo en excepciones (invasión predial, cruces de ríos, zonas pantanosas). Estimación realista: 5-15% del corredor (~26-79 km).",
      "probabilidad": "Alta",
      "probabilidad_num": 0.6,
      "impacto": "Alto",
      "impacto_num": 0.7,
      "nivel_exposicion": "ALTA",
      "exposicion": 0.42,
      "riesgo_principal": {
        "cop_min": 4200,
        "cop_max": 7900,
        "descripcion": "52 km en aéreo × $80-150M/km (cable ADSS + postería + herrajes) sin cotizar"
      },
      "estrategia_mitigacion": "Inventario de tramos aéreos por planos AT1 (ríos Magdalena, ciénagas Cesar, predios de invasión); cable ADSS estandarizado homogéneo; postería compartida con líneas eléctricas existentes donde sea viable; gálibo vertical ferroviario validado.",
      "riesgo_residual": {
        "cop_min": 1000,
        "cop_max": 2500,
        "descripcion": "Sobrecosto residual con inventario firme + estandarización ADSS + postería compartida"
      },
      "exposicion_residual_cop": 1050,
      "plan_accion": "Mapeo de tramos aéreos con planos AT1 antes de RFQ. Estandarizar especificación ADSS única. Negociar postería compartida con operadoras existentes.",
      "responsable": "Director Obra Civil + Ing. Comunicaciones",
      "hito_verificacion": "Inventario de tramos aéreos firmado contra planos AT1",
      "items_wbs": ["2.3.100", "2.3.103"],
      "fuente": "BCD §6.1.1 (excepción tendido aéreo)",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-FO-CRUCE-VEH-001",
      "categoria": "Técnico / Económico",
      "especialidad": "Fibra Óptica",
      "descripcion": "Cruces sobre vías vehiculares no cuantificados con métodos especiales (HDD - perforación horizontal dirigida). Estimación: ~50 cruces en 526 km (carreteras y caminos).",
      "probabilidad": "Alta",
      "probabilidad_num": 0.6,
      "impacto": "Alto",
      "impacto_num": 0.7,
      "nivel_exposicion": "ALTA",
      "exposicion": 0.42,
      "riesgo_principal": {
        "cop_min": 1500,
        "cop_max": 4000,
        "descripcion": "50 cruces × $30-80M/cruce con HDD bajo vía vehicular"
      },
      "estrategia_mitigacion": "HDD obligatoria solo en vías primarias (nacionales/departamentales); zanja convencional reforzada con ducto PEAD en vías terciarias y caminos rurales; aprovechamiento de obras existentes.",
      "riesgo_residual": {
        "cop_min": 700,
        "cop_max": 1500,
        "descripcion": "Sobrecosto residual con jerarquización por tipo de vía"
      },
      "exposicion_residual_cop": 660,
      "plan_accion": "Inventario de cruces vehiculares por planos AT1 con clasificación primaria/secundaria/terciaria. Pliego HDD solo donde norma vial lo exija.",
      "responsable": "Director Obra Civil",
      "hito_verificacion": "Inventario de cruces vehiculares clasificado",
      "items_wbs": ["2.3.100"],
      "fuente": "BCD §6.1.1 + AREMA + Manual Señalización Vial Colombia 2024",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-FO-CRUCE-FERREO-001",
      "categoria": "Técnico / Económico",
      "especialidad": "Fibra Óptica",
      "descripcion": "Cruces sobre vía férrea (FENOCO en Chiriguaná + ramales) sin canalización profunda según AREMA. Vibración + cargas dinámicas pueden cortar fibra. Estimación: 5-15 cruces.",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Crítico",
      "impacto_num": 0.85,
      "nivel_exposicion": "CRÍTICA",
      "exposicion": 0.43,
      "riesgo_principal": {
        "cop_min": 400,
        "cop_max": 3000,
        "descripcion": "10 cruces × $80-200M/sitio con HDD + ducto reforzado bajo vía férrea, sin afectar operación"
      },
      "estrategia_mitigacion": "Aprovechar atravesamientos existentes con ANI/concesionarias; HDD solo en cruces vivos; coordinación con FENOCO para ventanas operativas; ducto reforzado HDPE SDR 11 normalizado.",
      "riesgo_residual": {
        "cop_min": 200,
        "cop_max": 800,
        "descripcion": "Sobrecosto residual con aprovechamiento de obras existentes"
      },
      "exposicion_residual_cop": 250,
      "plan_accion": "Mapear cruces existentes vs nuevos antes de RFQ. Coordinar con FENOCO ventanas operativas para HDD.",
      "responsable": "Director Obra Civil + PMO Coordinación FENOCO",
      "hito_verificacion": "Inventario cruces ferroviarios + acuerdos ventanas FENOCO",
      "items_wbs": ["2.3.100"],
      "fuente": "BCD §6.1.1 + AREMA cargas dinámicas",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-FO-PUENTE-001",
      "categoria": "Técnico / Económico",
      "especialidad": "Fibra Óptica",
      "descripcion": "Puentes y viaductos: BCD §6.1.1 prohíbe expresamente fijar la fibra mediante soldaduras o perforaciones a elementos estructurales. Estimación: 30-60 puentes/viaductos en 526 km. Solución: ducto independiente o tendido aéreo ADSS entre estribos.",
      "probabilidad": "Media",
      "probabilidad_num": 0.4,
      "impacto": "Alto",
      "impacto_num": 0.8,
      "nivel_exposicion": "ALTA",
      "exposicion": 0.32,
      "riesgo_principal": {
        "cop_min": 900,
        "cop_max": 6000,
        "descripcion": "30-60 puentes × $30-100M/sitio (ducto independiente o ADSS aéreo entre estribos)"
      },
      "estrategia_mitigacion": "Ducto independiente fijado a estructura auxiliar (no a la principal del puente); ADSS aéreo entre estribos para luces cortas; herrajes anti-vibración; acuerdos con operadoras telecom para usar canalizaciones existentes.",
      "riesgo_residual": {
        "cop_min": 300,
        "cop_max": 1500,
        "descripcion": "Sobrecosto residual con soluciones tipo estandarizadas por tipo de puente"
      },
      "exposicion_residual_cop": 360,
      "plan_accion": "Inventario de puentes/viaductos por planos AT1 con tipología. Definir 3-4 soluciones tipo (luz corta/media/larga). Acuerdos con telcom existentes.",
      "responsable": "Director Obra Civil + Ing. Estructural",
      "hito_verificacion": "Inventario + soluciones tipo aprobadas Interventoría",
      "items_wbs": ["2.3.100", "2.3.103"],
      "fuente": "BCD §6.1.1 prohibición expresa fijación a estructuras",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-FO-CAJAS-001",
      "categoria": "Técnico / Económico",
      "especialidad": "Fibra Óptica",
      "descripcion": "Cajas de paso (empalmes ópticos) no cuantificadas con especificación real. BCD §6.1.1 indica solo donde la tensión/geometría lo exija + derivaciones a CCO + 5 ENCE + estaciones TETRA.",
      "probabilidad": "Alta",
      "probabilidad_num": 0.6,
      "impacto": "Medio",
      "impacto_num": 0.5,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.3,
      "riesgo_principal": {
        "cop_min": 250,
        "cop_max": 960,
        "descripcion": "50-80 cajas × $5-12M/caja (caja exterior IP68 + empalme fusión + bandeja)"
      },
      "estrategia_mitigacion": "Espaciado óptimo 8-10 km en zonas rurales; empalme programado en derivaciones funcionales (CCO, ENCE, TETRA); especificación única estandarizada IP68 con bandeja modular.",
      "riesgo_residual": {
        "cop_min": 150,
        "cop_max": 400,
        "descripcion": "Costo final con cantidad firme y especificación estandarizada"
      },
      "exposicion_residual_cop": 165,
      "plan_accion": "Definir cantidad firme y especificación única en RFQ. Validar contra OTDR de diseño.",
      "responsable": "Ing. Comunicaciones",
      "hito_verificacion": "RFQ cajas de paso emitido y consolidado",
      "items_wbs": ["2.3.100", "2.3.103"],
      "fuente": "BCD §6.1.1",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-FO-RESTAUR-001",
      "categoria": "Técnico / Económico",
      "especialidad": "Fibra Óptica",
      "descripcion": "Restauración de superficie post-excavación. Si la zanja pasa de 40 cm a 120 cm, la superficie afectada (zanja + sobreancho) crece proporcionalmente. Costo unitario $15-40k COP/m².",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Medio",
      "impacto_num": 0.6,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.3,
      "riesgo_principal": {
        "cop_min": 1500,
        "cop_max": 5000,
        "descripcion": "315.600 m² afectados × $15-40k COP/m² en zonas urbanas y atravesamientos"
      },
      "estrategia_mitigacion": "Restauración solo en zonas urbanas/pavimentadas y atravesamientos críticos; en servidumbre rural restauración mínima vegetal (siembra natural); pliego diferenciado por tipo de superficie.",
      "riesgo_residual": {
        "cop_min": 400,
        "cop_max": 1200,
        "descripcion": "Sobrecosto residual con restauración por tipo de superficie"
      },
      "exposicion_residual_cop": 400,
      "plan_accion": "Pliego de restauración por tipo de superficie en RFQ obra civil.",
      "responsable": "Director Obra Civil",
      "hito_verificacion": "Pliego restauración aprobado",
      "items_wbs": ["2.3.100"],
      "fuente": "Asociado a R-FO-PROF-001 (mayor profundidad = mayor sobreancho)",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-FO-CUSTODIA-001",
      "categoria": "Custodia",
      "especialidad": "Fibra Óptica",
      "descripcion": "Cable de fibra óptica G.652.D 48h: $13-26B COP en juego desde recepción hasta entrega al concesionario/SPV. Riesgo de robo (carretes en obra), daño en transporte, pérdida en almacenamiento. Pérdida típica sin custodia formal: 2-5%.",
      "probabilidad": "Media",
      "probabilidad_num": 0.4,
      "impacto": "Medio",
      "impacto_num": 0.6,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.24,
      "riesgo_principal": {
        "cop_min": 300,
        "cop_max": 1300,
        "descripcion": "Pérdida 2-5% sobre cable en juego ($13-26B)"
      },
      "estrategia_mitigacion": "Póliza all-risk transporte y almacenamiento (0,5-1,5% del valor); secuencia just-in-time desde fábrica; almacén intermedio con vigilancia 24/7; control de carretes con tracking RFID; entrega contra acta firmada al SPV.",
      "riesgo_residual": {
        "cop_min": 100,
        "cop_max": 300,
        "descripcion": "Costo neto residual con póliza + custodia formal (deducible + pérdidas no aseguradas)"
      },
      "exposicion_residual_cop": 80,
      "plan_accion": "Estructurar póliza all-risk + protocolo de custodia + tracking RFID antes del primer pedido de fibra (Mes -9).",
      "responsable": "PMO Adquisiciones + Tesorería Grupo Ortiz",
      "hito_verificacion": "Póliza emitida + protocolo custodia firmado",
      "items_wbs": ["2.3.100"],
      "fuente": "Buenas prácticas custodia infraestructura crítica",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-FO-PERMISOS-001",
      "categoria": "Contractual / Económico",
      "especialidad": "Fibra Óptica",
      "descripcion": "Permisos prediales y atravesamientos: servidumbres, ocupación temporal, restituciones a propietarios. Pendiente validar si están incluidos en la cifra Ardanuy de $122B obra civil FO.",
      "probabilidad": "Alta",
      "probabilidad_num": 0.6,
      "impacto": "Alto",
      "impacto_num": 0.7,
      "nivel_exposicion": "ALTA",
      "exposicion": 0.42,
      "riesgo_principal": {
        "cop_min": 500,
        "cop_max": 3000,
        "descripcion": "Servidumbres + ocupación temporal + restituciones en 526 km si no están incluidos en cifra Ardanuy"
      },
      "estrategia_mitigacion": "Validar inclusión en cifra Ardanuy (cruzar con LFC-U2-CTSC-ED-QTO-CO-0001); negociar paquete de servidumbres con ANI bajo Plan de Predios del proyecto; aprovechar servidumbre ferroviaria 30m (uso público).",
      "riesgo_residual": {
        "cop_min": 200,
        "cop_max": 800,
        "descripcion": "Costo residual con servidumbre ferroviaria + paquete ANI"
      },
      "exposicion_residual_cop": 300,
      "plan_accion": "Verificar con Ardanuy si los $122B incluyen prediales. Si no, presupuestar separado y negociar con ANI.",
      "responsable": "Gestor Permisos + Director Técnico UF2",
      "hito_verificacion": "Aclaración Ardanuy + Plan de Predios firmado",
      "items_wbs": ["1.0.100", "2.3.100"],
      "fuente": "BCD §6.1.1 + Ardanuy LFC-U2-CTSC-ED-QTO-CO-0001",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },

    // =====================================================================
    // ESPECIALIDAD: ELÉCTRICA / UPS / BATERÍAS  (BCD §10)
    // =====================================================================
    {
      "id": "R-UPS-SUBDIM-001",
      "categoria": "Técnico / Económico",
      "especialidad": "Eléctrica",
      "descripcion": "Subdimensionamiento baterías TETRA: BCD §10.5 exige 24-48h de autonomía a 48V DC. Si se cotiza 4h homogéneo (criterio señalización) en torres TETRA, falta capacidad.",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Alto",
      "impacto_num": 0.7,
      "nivel_exposicion": "ALTA",
      "exposicion": 0.35,
      "riesgo_principal": {
        "cop_min": 550,
        "cop_max": 2500,
        "descripcion": "30-50 torres TETRA × delta kit 24-48h vs 4h ($35-55M c/u)"
      },
      "estrategia_mitigacion": "Pliego diferenciado por bloque BCD §10.1-10.5 desde RFQ inicial; especificación 48V DC TETRA separada de 110V DC señalización; química definida (LiFePO4 o Plomo) en cierre RFQ.",
      "riesgo_residual": {
        "cop_min": 150,
        "cop_max": 500,
        "descripcion": "Costo residual con pliego diferenciado por bloque"
      },
      "exposicion_residual_cop": 162,
      "plan_accion": "Cerrar RFQ baterías TETRA con química definida y autonomía 24-48h.",
      "responsable": "Ing. Eléctrico + PMO Compras",
      "hito_verificacion": "RFQ baterías TETRA cerrada",
      "items_wbs": ["2.1.116", "2.1.100"],
      "fuente": "BCD §10.5 (UPS TETRA 24-48h)",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-UPS-SOBREDIM-001",
      "tipo": "OPORTUNIDAD",
      "categoria": "Económico (Oportunidad)",
      "especialidad": "Eléctrica",
      "responsable_capex": "SICC",
      "confianza": "orden_magnitud",
      "descripcion": "OPORTUNIDAD DE AHORRO. Sobredimensionamiento por homogeneizar 24-48h en señalización donde BCD §10.1-10.4 solo exige 4h. Si se aplica criterio diferenciado, hay ahorro neto.",
      "probabilidad": "Media",
      "probabilidad_num": 0.6,
      "impacto": "Bajo",
      "impacto_num": 0.4,
      "nivel_exposicion": "BAJA",
      "exposicion": 0.24,
      "riesgo_principal": {
        "cop_min": -900,
        "cop_max": -450,
        "descripcion": "Ahorro disponible: 30 sitios señalización × delta 24h vs 4h evitado"
      },
      "estrategia_mitigacion": "Aplicar criterio diferenciado BCD §10 en RFQ. NO homogeneizar por simplicidad.",
      "riesgo_residual": {
        "cop_min": -700,
        "cop_max": -300,
        "descripcion": "Ahorro neto realizado con criterio diferenciado"
      },
      "exposicion_residual_cop": -300,
      "plan_accion": "Aplicar criterio BCD §10 en RFQ baterías. Ahorro identificado va a margen.",
      "responsable": "Ing. Eléctrico",
      "hito_verificacion": "RFQ baterías diferenciadas por bloque",
      "items_wbs": ["2.1.116"],
      "fuente": "BCD §10.1-10.5",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-RETIE-001",
      "categoria": "Contractual / Técnico",
      "especialidad": "Eléctrica",
      "descripcion": "Cumplimiento RETIE 2024 (Resolución 40117) en alimentación 120VAC servicios auxiliares y CCTV. No-cumplimiento implica retrofit + sanción regulatoria.",
      "probabilidad": "Media",
      "probabilidad_num": 0.4,
      "impacto": "Medio",
      "impacto_num": 0.6,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.24,
      "riesgo_principal": {
        "cop_min": 300,
        "cop_max": 1000,
        "descripcion": "Retrofit eléctrico + sanción si auditoría externa detecta incumplimiento RETIE"
      },
      "estrategia_mitigacion": "Aplicar RETIE 2024 desde ingeniería de detalle; memoria de cálculo RETIE certificada; cláusula RETIE obligatoria en RFQ equipos eléctricos; inspección retie en FAT/SAT.",
      "riesgo_residual": {
        "cop_min": 100,
        "cop_max": 300,
        "descripcion": "Costo de cumplimiento normativo (memoria + inspección)"
      },
      "exposicion_residual_cop": 80,
      "plan_accion": "Memoria de cálculo RETIE en ingeniería de detalle. Inspector RETIE certificado en FAT/SAT.",
      "responsable": "Ing. Eléctrico + QA",
      "hito_verificacion": "Memoria RETIE firmada + inspector designado",
      "items_wbs": ["2.1.100", "5.1.100"],
      "fuente": "BCD §10.6 + RETIE 2024 (Resolución 40117)",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-EMC-001",
      "categoria": "Técnico",
      "especialidad": "Eléctrica",
      "descripcion": "Compatibilidad electromagnética CISPR 22:2008 y CISPR 24:2010 (citadas por AT3 + BCD §2.1). Equipos no certificados pueden interferir con PTC. Re-cotización equipos certificados +15-30%.",
      "probabilidad": "Media",
      "probabilidad_num": 0.4,
      "impacto": "Medio",
      "impacto_num": 0.5,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.2,
      "riesgo_principal": {
        "cop_min": 500,
        "cop_max": 1500,
        "descripcion": "Retrofit equipos CISPR 22/24 + re-cotización +15-30% si no se exige en RFQ"
      },
      "estrategia_mitigacion": "Cláusula CISPR 22:2008 + CISPR 24:2010 obligatoria en RFQ todos los equipos electrónicos; certificación del fabricante exigida en suministro.",
      "riesgo_residual": {
        "cop_min": 100,
        "cop_max": 300,
        "descripcion": "Sobrecosto marginal por exigir certificación EMC desde RFQ"
      },
      "exposicion_residual_cop": 80,
      "plan_accion": "Cláusula CISPR 22/24 obligatoria en pliego RFQ equipos. Certificación de fabricante en aceptación.",
      "responsable": "Ing. Comunicaciones + QA",
      "hito_verificacion": "Cláusula EMC en pliegos RFQ",
      "items_wbs": ["2.2.100", "5.2.100"],
      "fuente": "BCD §2.1 + AT3 normativa transmisión datos",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },

    // =====================================================================
    // ESPECIALIDAD: TETRA / RADIO  (BCD §6.2)
    // =====================================================================
    {
      "id": "R-TETRA-COB-001",
      "categoria": "Técnico / Económico",
      "especialidad": "TETRA",
      "descripcion": "Cantidad de torres TETRA no validada por simulación RF firme. LFC v14.7 cotiza 37 sitios; Ardanuy estima 43 sitios. BCD §6.2 exige cobertura 100% AT1 con número validado por simulación + line-of-sight.",
      "probabilidad": "Alta",
      "probabilidad_num": 0.6,
      "impacto": "Alto",
      "impacto_num": 0.7,
      "nivel_exposicion": "ALTA",
      "exposicion": 0.42,
      "riesgo_principal": {
        "cop_min": 1500,
        "cop_max": 2500,
        "descripcion": "6 torres adicionales × $73,1k USD/torre + obra civil + alimentación"
      },
      "estrategia_mitigacion": "Simulación RF firme con software dedicado (Atoll, ICS Telecom o equivalente); validación line-of-sight con drones/topografía; convergencia LFC/Ardanuy en cantidad final antes de cierre RFQ.",
      "riesgo_residual": {
        "cop_min": 500,
        "cop_max": 1200,
        "descripcion": "Sobrecosto residual si simulación da 40-43 vs 37 cotizados"
      },
      "exposicion_residual_cop": 510,
      "plan_accion": "Encargar simulación RF formal antes del cierre BCD v002. Validar contra Ardanuy.",
      "responsable": "Ing. Comunicaciones + Especialista RF",
      "hito_verificacion": "Estudio simulación RF firmado",
      "items_wbs": ["2.1.100"],
      "fuente": "BCD §6.2 cobertura validada por simulación",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-TETRA-CIBER-001",
      "categoria": "Técnico / Ciberseguridad",
      "especialidad": "TETRA",
      "descripcion": "Incumplimiento EN 50159 Categoría 3 + autenticación criptográfica FRA 49 CFR §236.1033. Vulnerabilidad de seguridad en transmisión PTC sobre red TETRA + redundancia satelital.",
      "probabilidad": "Media",
      "probabilidad_num": 0.4,
      "impacto": "Crítico",
      "impacto_num": 0.85,
      "nivel_exposicion": "CRÍTICA",
      "exposicion": 0.34,
      "riesgo_principal": {
        "cop_min": 500,
        "cop_max": 2000,
        "descripcion": "Retrofit cifrado + autenticación + sanción RAMS si auditoría externa detecta no-cumplimiento"
      },
      "estrategia_mitigacion": "Cláusula EN 50159 Cat 3 + FRA §236.1033 obligatoria en RFQ TETRA y satelital; PKI de dispositivo desde diseño; pruebas de penetración pre-aceptación.",
      "riesgo_residual": {
        "cop_min": 150,
        "cop_max": 400,
        "descripcion": "Costo de cumplimiento criptográfico desde diseño (PKI + pruebas)"
      },
      "exposicion_residual_cop": 110,
      "plan_accion": "Cláusulas EN 50159 + FRA §236.1033 en pliegos RFQ. Pruebas penetración en SAT.",
      "responsable": "Ing. Ciberseguridad + Ing. Comunicaciones",
      "hito_verificacion": "Cláusulas en pliegos + plan pruebas penetración",
      "items_wbs": ["2.1.100", "2.2.100", "1.1.106"],
      "fuente": "BCD §6.2.1 + FRA 49 CFR §236.1033 + EN 50159 Cat 3",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-TETRA-SAT-001",
      "categoria": "Técnico / Económico",
      "especialidad": "TETRA",
      "descripcion": "Equipos satelitales embarcados (15 locomotoras) para redundancia tren-tierra BCD §6.2.3. Validar inclusión en Cap 6 OBU vs cotización separada.",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Medio",
      "impacto_num": 0.5,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.25,
      "riesgo_principal": {
        "cop_min": 300,
        "cop_max": 800,
        "descripcion": "15 locomotoras × $30-60M/sistema satelital embarcado si no está en Cap 6 OBU"
      },
      "estrategia_mitigacion": "Validar contra DT-CTRL-2026-006 que el OBU embarcado incluye el módulo satelital. Si falta, agregarlo en RFQ con requisitos EN 50159 Cat 3.",
      "riesgo_residual": {
        "cop_min": 100,
        "cop_max": 300,
        "descripcion": "Costo residual si requiere actualización de DT-CTRL-2026-006"
      },
      "exposicion_residual_cop": 100,
      "plan_accion": "Cruzar BOM OBU con DT-CTRL-2026-006. Si falta módulo SAT, actualizar DT.",
      "responsable": "Ing. Comunicaciones",
      "hito_verificacion": "BOM OBU validado contra BCD §6.2.3",
      "items_wbs": ["6.1.100", "6.1.102"],
      "fuente": "BCD §6.2.3",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },

    // =====================================================================
    // ESPECIALIDAD: PTC / SEÑALIZACIÓN  (BCD §4, §5)
    // =====================================================================
    {
      "id": "R-PTC-BALIZAS-001",
      "tipo": "RIESGO",
      "categoria": "Contractual / Técnico",
      "especialidad": "PTC",
      "responsable_capex": "ANI",
      "confianza": "wbs_firme",
      "descripcion": "Si Interventoría exige balizas/transponders en línea (cantonamiento físico extendido) más allá de las 5 zonas ENCE. BCD §1.3, §4.1 y AT1 Tabla 17 son contundentes con cantonamiento virtual fuera de las 5 ENCEs.",
      "probabilidad": "Baja",
      "probabilidad_num": 0.3,
      "impacto": "Crítico",
      "impacto_num": 0.95,
      "nivel_exposicion": "ALTA",
      "exposicion": 0.285,
      "riesgo_principal": {
        "cop_min": 22000,
        "cop_max": 66000,
        "descripcion": "Worst-case catastrófico: 526 puntos × $5-15k USD baliza + obra civil. Solo si Interventoría desconoce BCD + AT1."
      },
      "estrategia_mitigacion": "Defensa contractual con FRA 49 CFR §236.1005 (Virtual Fixed Block expresamente permitido) + BCD §1.3, §4.1 + AT1 Tabla 17. No hay base legal para exigir balizas fuera de zonas ENCE. Documentación reforzada en paquete V1.",
      "transferibilidad": {
        "a": "ANI",
        "mecanismo": "Sección 9.12(a) del Contrato → 25.4 (cost-to-ANI). AT1 Tabla 17 fija PTC virtual. Cualquier exigencia de balizas fuera de Tabla 17 implica modificación del Apéndice Técnico, lo que activa la cláusula de costos a cuenta de ANI.",
        "referencia": "Contrato APP No. 001/2025 §9.12(a) + §25.4 + AT1 Tabla 17 + BCD §4.1 + FRA 49 CFR §236.1005"
      },
      "riesgo_residual": {
        "cop_min": 0,
        "cop_max": 0,
        "descripcion": "RESIDUAL SICC = 0 — costo transferido a ANI por construcción contractual. La defensa contractual es robusta (BCD + AT1 + FRA convergen). Si LFC pierde el match, va por Sec 9.12→25.4."
      },
      "exposicion_residual_cop": 0,
      "plan_accion": "Reforzar paquete técnico V1 con base legal FRA + BCD + AT1 ANTES de reuniones con Interventoría.",
      "responsable": "Director Técnico UF2 + Asesoría Legal",
      "hito_verificacion": "Paquete V1 con defensa legal entregado a Interventoría",
      "items_wbs": ["1.1.100", "1.1.103", "1.2.100"],
      "fuente": "BCD §1.3, §4.1 + AT1 Tabla 17 + FRA 49 CFR §236.1005",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-ENCE-NUM-001",
      "tipo": "RIESGO",
      "categoria": "Contractual / Técnico",
      "especialidad": "PTC",
      "responsable_capex": "ANI",
      "confianza": "wbs_firme",
      "descripcion": "Si Interventoría/consultor exige >5 ENCE más allá de los nominados en Tabla 17 AT1 (La Dorada-México, Pto Berrío-Grecia, Barrancabermeja, García Cadena, Zapatosa).",
      "probabilidad": "Baja",
      "probabilidad_num": 0.3,
      "impacto": "Alto",
      "impacto_num": 0.8,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.24,
      "riesgo_principal": {
        "cop_min": 7000,
        "cop_max": 10000,
        "descripcion": "+2 a +3 ENCE adicionales × $0,8M USD = $3,5B/u + obra civil"
      },
      "estrategia_mitigacion": "Defensa con AT1 Tabla 17 (5 ENCEs específicamente nominados). Cualquier ENCE adicional debe justificarse vía DT formal + modificación contractual (no es decisión técnica de LFC).",
      "transferibilidad": {
        "a": "ANI",
        "mecanismo": "Sección 9.12(a) → 25.4 (cost-to-ANI). Tabla 17 AT1 fija exactamente 5 ENCE nominados. Cualquier exceso requiere modificación del Apéndice y activa cost-to-ANI.",
        "referencia": "Contrato APP No. 001/2025 §9.12(a) + §25.4 + AT1 Tabla 17 (5 ENCE específicamente nominados) + BCD §4.1"
      },
      "riesgo_residual": {
        "cop_min": 0,
        "cop_max": 0,
        "descripcion": "RESIDUAL SICC = 0 — costo transferido a ANI. Tabla 17 AT1 es contrato vigente; LFC no paga ENCE adicionales por construcción contractual."
      },
      "exposicion_residual_cop": 0,
      "plan_accion": "Defensa AT1 Tabla 17 documentada en paquete V1.",
      "responsable": "Director Técnico UF2",
      "hito_verificacion": "Paquete V1 con justificación 5 ENCE",
      "items_wbs": ["1.3.100", "1.3.101", "1.3.102", "1.3.103", "1.3.104"],
      "fuente": "AT1 Tabla 17 + BCD §4.1",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-PTC-GPS-001",
      "categoria": "Técnico",
      "especialidad": "PTC",
      "descripcion": "Tolerancia GPS no cumple FRA 49 CFR §236 Subpart I para supervisión de movimiento. BCD §5.2.2 exige GPS + odometría. Si la tolerancia no es suficiente, requiere radar/odometría redundante adicional.",
      "probabilidad": "Media",
      "probabilidad_num": 0.4,
      "impacto": "Medio",
      "impacto_num": 0.6,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.24,
      "riesgo_principal": {
        "cop_min": 2000,
        "cop_max": 4000,
        "descripcion": "Sistema redundante por locomotora: $30-60k USD × 15 locomotoras + integración OBU"
      },
      "estrategia_mitigacion": "Definir tolerancia GPS+odometría en ingeniería de detalle conforme FRA. Validación en pruebas FAT/SAT con material rodante real. RTK/Differential GPS donde aplique.",
      "riesgo_residual": {
        "cop_min": 400,
        "cop_max": 1000,
        "descripcion": "Costo residual con configuración estándar GPS+odometría sin redundancia adicional"
      },
      "exposicion_residual_cop": 280,
      "plan_accion": "Especificación GPS+odometría en pliego OBU. Pruebas FAT con tolerancia real.",
      "responsable": "Ing. Sistemas PTC",
      "hito_verificacion": "Pliego OBU con tolerancia validada FRA",
      "items_wbs": ["6.1.100"],
      "fuente": "BCD §5.2.2 + FRA 49 CFR §236.1005",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },

    // =====================================================================
    // ESPECIALIDAD: PASOS A NIVEL  (BCD §8)
    // =====================================================================
    {
      "id": "R-PAN-ALCANCE-001",
      "tipo": "RIESGO",
      "categoria": "Contractual / Económico",
      "especialidad": "Pasos a Nivel",
      "responsable_capex": "ANI",
      "confianza": "wbs_firme",
      "descripcion": "Si Interventoría exige cobertura SCC de los 122 PaN básicos no protegidos. BCD §8.2 limita el alcance a 24 protegidos (9 Tipo C + 15 Tipo B). Los 122 restantes son responsabilidad UF≠SCC (Min. Transporte/Vías), no de este alcance.",
      "probabilidad": "Baja",
      "probabilidad_num": 0.3,
      "impacto": "Alto",
      "impacto_num": 0.85,
      "nivel_exposicion": "ALTA",
      "exposicion": 0.255,
      "riesgo_principal": {
        "cop_min": 6100,
        "cop_max": 12200,
        "descripcion": "122 PaN × $50-100M/u (señalización pasiva + integración mínima)"
      },
      "estrategia_mitigacion": "Defensa con BCD §8.2 + AT1 §4.5 (alcance contractualmente limitado a 24 protegidos). Verificación contra WBS Acta de Obra v3.0: los 122 PaN básicos están imputados a UF≠SCC. Cualquier ampliación requiere modificación del Apéndice.",
      "transferibilidad": {
        "a": "ANI",
        "mecanismo": "Sección 9.12(a) → 25.4. Si Interventoría empuja la inclusión de los 122 PaN básicos, implica modificación del AT1 §4.5 y activa cost-to-ANI. Acompañamiento contractual SICC pero el costo no es de LFC.",
        "referencia": "Contrato APP No. 001/2025 §9.12(a) + §25.4 + AT1 §4.5 + BCD §8.2 + WBS Acta de Obra v3.0 (verificar imputación a UF≠SCC)"
      },
      "riesgo_residual": {
        "cop_min": 0,
        "cop_max": 300,
        "descripcion": "RESIDUAL SICC ≈ 0 — costo material transferido a ANI. Solo queda costo marginal de acompañamiento contractual (apoyo legal/técnico en disputa)."
      },
      "exposicion_residual_cop": 75,
      "plan_accion": "Defensa BCD §8.2 + AT1 §4.5 documentada en paquete V1.",
      "responsable": "Director Técnico UF2",
      "hito_verificacion": "Paquete V1 con justificación 24 PaN",
      "items_wbs": ["4.1.100", "4.1.101", "4.3.100"],
      "fuente": "BCD §8.2 + AT1 §4.5",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-PAN-CWT-001",
      "categoria": "Técnico / Operacional",
      "especialidad": "Pasos a Nivel",
      "descripcion": "Tiempo de Advertencia Constante (CWT) mal calibrado. Activación tardía → riesgo de colisión vehicular → responsabilidad civil + sanción.",
      "probabilidad": "Media",
      "probabilidad_num": 0.4,
      "impacto": "Alto",
      "impacto_num": 0.7,
      "nivel_exposicion": "ALTA",
      "exposicion": 0.28,
      "riesgo_principal": {
        "cop_min": 300,
        "cop_max": 1000,
        "descripcion": "Multas + retrofit lógica + responsabilidad civil por evento"
      },
      "estrategia_mitigacion": "Cálculo CWT validado en ingeniería de detalle conforme FRA Part 234 + AREMA C&S Manual; pruebas operacionales con material rodante real en SAT; validación con la ANI/Min. Transporte.",
      "riesgo_residual": {
        "cop_min": 100,
        "cop_max": 300,
        "descripcion": "Costo de validación + ajuste post-SAT"
      },
      "exposicion_residual_cop": 80,
      "plan_accion": "Memoria CWT en ingeniería detalle. Pruebas SAT con material rodante real.",
      "responsable": "Ing. Sistemas PAN + QA",
      "hito_verificacion": "Memoria CWT + pruebas SAT firmadas",
      "items_wbs": ["4.1.100", "4.1.101"],
      "fuente": "BCD §8.3 + FRA 49 CFR Part 234 + AREMA C&S Manual",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-PAN-FAILSAFE-001",
      "categoria": "Técnico",
      "especialidad": "Pasos a Nivel",
      "descripcion": "Controlador local de PaN sin comportamiento failsafe ante falla de comunicación o energía. Riesgo SIL + sanción RAMS.",
      "probabilidad": "Baja",
      "probabilidad_num": 0.3,
      "impacto": "Alto",
      "impacto_num": 0.7,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.21,
      "riesgo_principal": {
        "cop_min": 300,
        "cop_max": 800,
        "descripcion": "Retrofit lógica failsafe + re-certificación SIL"
      },
      "estrategia_mitigacion": "Cláusula failsafe obligatoria en RFQ controlador local; certificación SIL-3 explícita; pruebas de degradación en FAT/SAT.",
      "riesgo_residual": {
        "cop_min": 100,
        "cop_max": 300,
        "descripcion": "Costo de exigir failsafe certificado desde RFQ"
      },
      "exposicion_residual_cop": 60,
      "plan_accion": "Cláusula failsafe + SIL-3 en RFQ controlador PaN.",
      "responsable": "Ing. Sistemas PAN",
      "hito_verificacion": "Pliego RFQ con cláusula failsafe",
      "items_wbs": ["4.1.100", "4.1.101"],
      "fuente": "BCD §8.4",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },

    // =====================================================================
    // ESPECIALIDAD: INTEROPERABILIDAD FENOCO  (BCD §9)
    // =====================================================================
    {
      "id": "R-FENOCO-INTEG-001",
      "tipo": "RIESGO",
      "categoria": "Contractual",
      "especialidad": "Interoperabilidad FENOCO",
      "responsable_capex": "ANI",
      "confianza": "wbs_firme",
      "descripcion": "Si FENOCO/Interventoría empuja integración técnica (gateway lógico ITCS / pasarela vital) más allá de Stop & Switch operacional. BCD §9.1 lo descarta expresamente, pero existe presión externa.",
      "probabilidad": "Baja",
      "probabilidad_num": 0.2,
      "impacto": "Crítico",
      "impacto_num": 0.95,
      "nivel_exposicion": "ALTA",
      "exposicion": 0.19,
      "riesgo_principal": {
        "cop_min": 22000,
        "cop_max": 66000,
        "descripcion": "Pasarela ITCS o gateway lógico con sistema FENOCO: $5-15M USD"
      },
      "estrategia_mitigacion": "Triple capa contractual: (1) BCD §9.1 + AT1 no exigen integración técnica con sistemas propietarios de terceros — Stop & Switch operacional cubre la obligación; (2) Sección 9.11(b)(ii) — costo a Concesionario solo si LFC pide voluntariamente la integración; (3) Sección 9.12(a) → 25.4 — si ANI ordena la integración, va por cost-to-ANI. Adicionalmente Resolución Surcos Art 5 actúa como escudo legal.",
      "transferibilidad": {
        "a": "ANI",
        "mecanismo": "Triple capa: §9.11(b)(ii) (concesionario solo si pide voluntariamente) + §9.12(a)→§25.4 (si ANI ordena, cost-to-ANI) + Resolución Surcos Art 5 (escudo legal). LFC no paga gateway si defiende posición.",
        "referencia": "Contrato APP No. 001/2025 §9.11(b)(ii) + §9.12(a) + §25.4 + AT1 + BCD §9.1, §9.2 + Resolución Surcos Art 5"
      },
      "riesgo_residual": {
        "cop_min": 0,
        "cop_max": 0,
        "descripcion": "RESIDUAL SICC = 0 — defensa contractual con triple capa robusta. Si la posición se sostiene, no hay costo. Si se pierde el match, va por cost-to-ANI (Sec 9.12→25.4)."
      },
      "exposicion_residual_cop": 0,
      "plan_accion": "Defensa BCD §9.1 + AT1 documentada en paquete V1. Reuniones técnicas con FENOCO con asesoría legal.",
      "responsable": "Director Técnico UF2 + Asesoría Legal",
      "hito_verificacion": "Acta de reunión FENOCO con scope operacional acotado",
      "items_wbs": ["1.1.106"],
      "fuente": "BCD §9.1 + AT1",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-FENOCO-EMBARCADO-001",
      "categoria": "Técnico / Económico",
      "especialidad": "Interoperabilidad FENOCO",
      "descripcion": "Equipos embarcados duales (PTC LFC + sistema FENOCO) para material rodante que circule en ambas redes. BCD §9.3 lo exige en configuración.",
      "probabilidad": "Media",
      "probabilidad_num": 0.4,
      "impacto": "Medio",
      "impacto_num": 0.6,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.24,
      "riesgo_principal": {
        "cop_min": 2600,
        "cop_max": 5300,
        "descripcion": "15 locomotoras × $40-80k USD/sistema dual si no está en Cap 6 OBU actual"
      },
      "estrategia_mitigacion": "Validar contra DT-CTRL-2026-006 que el OBU dual está cotizado. Si no, actualizar DT y BOM.",
      "riesgo_residual": {
        "cop_min": 500,
        "cop_max": 1500,
        "descripcion": "Sobrecosto residual con DT actualizada"
      },
      "exposicion_residual_cop": 400,
      "plan_accion": "Cruzar BOM OBU con DT-CTRL-2026-006. Confirmar configuración dual.",
      "responsable": "Ing. Comunicaciones + PMO",
      "hito_verificacion": "BOM OBU validado contra BCD §9.3",
      "items_wbs": ["6.1.100", "6.1.101"],
      "fuente": "BCD §9.3",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },

    // =====================================================================
    // ESPECIALIDAD: CUSTODIA HASTA ENTREGA SPV  (transversal)
    // =====================================================================
    {
      "id": "R-CUSTODIA-EQUIPOS-001",
      "categoria": "Custodia",
      "especialidad": "Custodia",
      "descripcion": "Equipos PTC, ENCE, TETRA, OBU en almacén/sitio antes de entrega al SPV. Valor en juego: ~$220B COP. Pérdida típica sin custodia formal: 1-3%.",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Alto",
      "impacto_num": 0.7,
      "nivel_exposicion": "ALTA",
      "exposicion": 0.35,
      "riesgo_principal": {
        "cop_min": 2200,
        "cop_max": 6600,
        "descripcion": "Pérdida 1-3% sobre $220B COP en equipos sensibles"
      },
      "estrategia_mitigacion": "Póliza all-risk transporte y almacenamiento; protocolo de custodia con vigilancia 24/7; almacén intermedio cerrado; secuencia de entrega just-in-time; trazabilidad por número de serie; entrega contra acta firmada al SPV.",
      "riesgo_residual": {
        "cop_min": 500,
        "cop_max": 1500,
        "descripcion": "Costo neto residual con póliza + custodia formal (deducibles + pérdidas no aseguradas + inflación tiempo entrega)"
      },
      "exposicion_residual_cop": 500,
      "plan_accion": "Estructurar póliza all-risk + protocolo custodia ANTES del primer pedido material crítico.",
      "responsable": "PMO Adquisiciones + Tesorería Grupo Ortiz",
      "hito_verificacion": "Póliza emitida + protocolo custodia firmado",
      "items_wbs": [],
      "fuente": "Buenas prácticas custodia infraestructura crítica",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },
    {
      "id": "R-CUSTODIA-POLIZA-001",
      "categoria": "Económico",
      "especialidad": "Custodia",
      "descripcion": "Pólizas all-risk transporte + almacén no presupuestadas como rubro explícito. Costo típico: 0,5-1,5% del valor asegurado (sobre $220B equipos + $26B fibra).",
      "probabilidad": "Alta",
      "probabilidad_num": 0.7,
      "impacto": "Medio",
      "impacto_num": 0.5,
      "nivel_exposicion": "ALTA",
      "exposicion": 0.35,
      "riesgo_principal": {
        "cop_min": 1100,
        "cop_max": 3300,
        "descripcion": "Prima all-risk 0,5-1,5% sobre valor asegurado total ~$246B"
      },
      "estrategia_mitigacion": "Presupuestar pólizas como rubro explícito en AIU o Costo Directo de Compras. Negociación corporativa Grupo Ortiz para tarifa preferencial.",
      "riesgo_residual": {
        "cop_min": 500,
        "cop_max": 1500,
        "descripcion": "Costo neto de pólizas con tarifa corporativa Grupo Ortiz"
      },
      "exposicion_residual_cop": 700,
      "plan_accion": "Línea presupuestal explícita para pólizas all-risk. Negociar tarifa corporativa.",
      "responsable": "Tesorería Grupo Ortiz + PMO",
      "hito_verificacion": "Línea presupuestal pólizas aprobada",
      "items_wbs": [],
      "fuente": "Buenas prácticas seguros infraestructura",
      "origen_decision": "Auditoría riesgos 2026-05-08",
      "estado": "Activo"
    },

    // =====================================================================
    // RIESGOS PRE-EXISTENTES (cuantificados con schema v2)
    // =====================================================================
    {
      "id": "R-AT3-01",
      "categoria": "Técnico",
      "especialidad": "PTC",
      "descripcion": "Dependencia de definición final de protocolos PTC con cantonamiento virtual conforme FRA 49 CFR §236.1005",
      "probabilidad": "Alta",
      "probabilidad_num": 0.7,
      "impacto": "Alto",
      "impacto_num": 0.8,
      "nivel_exposicion": "ALTA",
      "exposicion": 0.56,
      "riesgo_principal": {
        "cop_min": 1500,
        "cop_max": 4000,
        "descripcion": "Re-diseño del subsistema PTC si la definición se desvía del Virtual Fixed Block"
      },
      "estrategia_mitigacion": "Alinear supuestos de diseño con FRA 49 CFR §236.1005 (Virtual Fixed Block) desde la ingeniería conceptual; solicitar no-objeción a Interventoría sobre criterios V1 (AT1 Tabla 17).",
      "riesgo_residual": {
        "cop_min": 300,
        "cop_max": 1000,
        "descripcion": "Sobrecosto residual con definición temprana del protocolo y validación FRA"
      },
      "exposicion_residual_cop": 455,
      "plan_accion": "Alinear supuestos de diseño con PTC bajo FRA 49 CFR §236 y solicitar no-objeción a Interventoría sobre criterios V1 (AT1 Tabla 17)",
      "responsable": "Ing. Sistemas",
      "hito_verificacion": "H-SICC-001",
      "items_wbs": ["1.1.100", "1.2.100"],
      "fuente": "P42 / Docs SICC",
      "origen_decision": "N/A",
      "estado": "Activo"
    },
    {
      "id": "R-INT-01",
      "categoria": "Técnico",
      "especialidad": "Interoperabilidad FENOCO",
      "descripcion": "Coordinación operativa con FENOCO en interfaz Chiriguaná (Stop & Switch — sin integración técnica de protocolos)",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Bajo",
      "impacto_num": 0.3,
      "nivel_exposicion": "BAJA",
      "exposicion": 0.15,
      "riesgo_principal": {
        "cop_min": 200,
        "cop_max": 600,
        "descripcion": "Coordinación operativa adicional + procedimientos extendidos"
      },
      "estrategia_mitigacion": "Coordinar reuniones operativas con FENOCO para validar protocolo Stop & Switch en Chiriguaná y handoff de tráfico.",
      "riesgo_residual": {
        "cop_min": 50,
        "cop_max": 200,
        "descripcion": "Costo residual solo de coordinación operativa formalizada"
      },
      "exposicion_residual_cop": 62,
      "plan_accion": "Coordinar reuniones operativas con FENOCO para validar protocolo Stop & Switch en Chiriguaná y handoff de tráfico",
      "responsable": "Comunicaciones",
      "hito_verificacion": "H-INT-002",
      "items_wbs": ["1.1.106", "4.1.100"],
      "fuente": "P42 / Interfaces",
      "origen_decision": "N/A",
      "estado": "Activo"
    },
    {
      "id": "R-AT4-01",
      "categoria": "Contractual",
      "especialidad": "Transversal",
      "descripcion": "Cumplimiento disponibilidad AT4 (RAMS)",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Alto",
      "impacto_num": 0.8,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.4,
      "riesgo_principal": {
        "cop_min": 800,
        "cop_max": 2500,
        "descripcion": "Re-diseño con redundancia adicional + sanción por incumplimiento KPI disponibilidad"
      },
      "estrategia_mitigacion": "Análisis RAMS detallado y redundancia N+1 en diseños críticos desde ingeniería conceptual.",
      "riesgo_residual": {
        "cop_min": 300,
        "cop_max": 800,
        "descripcion": "Costo de redundancia N+1 ya incorporada al diseño"
      },
      "exposicion_residual_cop": 275,
      "plan_accion": "Realizar análisis RAMS detallado y asegurar redundancia N+1 en diseños críticos",
      "responsable": "Ing. Sistemas",
      "hito_verificacion": "Continuo",
      "items_wbs": [],
      "fuente": "AT4 / P42",
      "origen_decision": "N/A",
      "estado": "Activo"
    },
    {
      "id": "R-CYB-01",
      "categoria": "Técnico",
      "especialidad": "Transversal",
      "descripcion": "Ciberseguridad IEC 62443 — defensa en profundidad de sistemas SCC",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Alto",
      "impacto_num": 0.8,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.4,
      "riesgo_principal": {
        "cop_min": 800,
        "cop_max": 2500,
        "descripcion": "Retrofit ciberseguridad post-incidente + sanción regulatoria + póliza cyber"
      },
      "estrategia_mitigacion": "Defensa en profundidad desde diseño (IEC 62443); auditorías periódicas; póliza ciberriesgos; segregación de redes.",
      "riesgo_residual": {
        "cop_min": 200,
        "cop_max": 600,
        "descripcion": "Costo continuo de auditorías + póliza + actualizaciones de seguridad"
      },
      "exposicion_residual_cop": 200,
      "plan_accion": "Contratar póliza de seguro contra ciberriesgos y realizar auditorías de seguridad periódicas",
      "responsable": "Ciberseguridad",
      "hito_verificacion": "H-CYB-001",
      "items_wbs": [],
      "fuente": "VII.2.11",
      "origen_decision": "N/A",
      "estado": "Activo"
    },
    {
      "id": "R-IF-01",
      "categoria": "Gestión",
      "especialidad": "Transversal",
      "descripcion": "Desalineación en interfaces (ICD) entre subsistemas (PTC, CCO, ENCE, TETRA, OBU)",
      "probabilidad": "Alta",
      "probabilidad_num": 0.7,
      "impacto": "Alto",
      "impacto_num": 0.8,
      "nivel_exposicion": "ALTA",
      "exposicion": 0.56,
      "riesgo_principal": {
        "cop_min": 800,
        "cop_max": 2500,
        "descripcion": "Re-trabajo de integración + retrasos cronograma + penalidades por hito incumplido"
      },
      "estrategia_mitigacion": "Workshops de integración tempranos + ICD por cada par de sistemas + congelación temprana de interfaces antes de RFQ.",
      "riesgo_residual": {
        "cop_min": 300,
        "cop_max": 800,
        "descripcion": "Costo de gestión de interfaces formalizada"
      },
      "exposicion_residual_cop": 385,
      "plan_accion": "Realizar workshops de integración y definir ICD para cada par de sistemas",
      "responsable": "PMO/Integración",
      "hito_verificacion": "H-IF-003",
      "items_wbs": ["1.1.106", "5.3.103"],
      "fuente": "41. Interfaces",
      "origen_decision": "N/A",
      "estado": "Activo"
    },
    {
      "id": "R-PERM-01",
      "categoria": "Contractual",
      "especialidad": "Transversal",
      "descripcion": "Retrasos permisos ANE/ANLA",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Alto",
      "impacto_num": 0.8,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.4,
      "riesgo_principal": {
        "cop_min": 600,
        "cop_max": 2000,
        "descripcion": "Retrasos cronograma 3-9 meses + penalidades + standby de equipos"
      },
      "estrategia_mitigacion": "Gestión temprana de permisos + comunicación constante con autoridad ambiental + cronograma de hitos crítico.",
      "riesgo_residual": {
        "cop_min": 200,
        "cop_max": 600,
        "descripcion": "Costo de gestión activa + buffer cronograma"
      },
      "exposicion_residual_cop": 200,
      "plan_accion": "Iniciar gestión temprana de permisos y mantener comunicación constante con autoridad ambiental",
      "responsable": "Gestor Permisos",
      "hito_verificacion": "H-PERM-001",
      "items_wbs": ["1.0.100"],
      "fuente": "40. Permisos",
      "origen_decision": "N/A",
      "estado": "Activo"
    },
    {
      "id": "R-FIBRA-001",
      "categoria": "Cronograma",
      "especialidad": "Fibra Óptica",
      "descripcion": "Lead time crítico fibra 9 meses (pago 3m + fabricación 4m + nacionalización 2m)",
      "probabilidad": "Alta",
      "probabilidad_num": 0.7,
      "impacto": "Crítico",
      "impacto_num": 0.9,
      "nivel_exposicion": "CRÍTICA",
      "exposicion": 0.63,
      "riesgo_principal": {
        "cop_min": 1500,
        "cop_max": 4000,
        "descripcion": "Penalidades por retraso de hito crítico + standby de cuadrillas obra civil"
      },
      "estrategia_mitigacion": "EVITAR — Ordenar fibra óptica con 9 meses de anticipación (Mes -9 respecto a instalación). Carta de intención + adelanto del 30% para reservar producción.",
      "riesgo_residual": {
        "cop_min": 200,
        "cop_max": 800,
        "descripcion": "Costo financiero del adelanto + buffer logístico"
      },
      "exposicion_residual_cop": 350,
      "plan_accion": "Ordenar fibra óptica con 9 meses de anticipación (Mes -9 respecto a instalación)",
      "responsable": "PMO Adquisiciones",
      "hito_verificacion": "Orden Mes -9",
      "items_wbs": ["2.3.100", "2.3.103"],
      "fuente": "DT-FIBRA-003",
      "origen_decision": "DT-FIBRA-003",
      "estado": "Activo"
    },
    {
      "id": "R-FM-001",
      "categoria": "Fuerza Mayor",
      "especialidad": "Transversal",
      "descripcion": "Huelgas transporte, problemas FENOCO, paros sector",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Alto",
      "impacto_num": 0.8,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.4,
      "riesgo_principal": {
        "cop_min": 600,
        "cop_max": 2000,
        "descripcion": "Standby de obra + retraso cronograma 1-3 meses por evento"
      },
      "estrategia_mitigacion": "Plan de contingencia con proveedores alternativos + rutas de transporte backup + cláusulas de fuerza mayor en contratos.",
      "riesgo_residual": {
        "cop_min": 200,
        "cop_max": 600,
        "descripcion": "Costo de contingencia mantenida + buffer logístico"
      },
      "exposicion_residual_cop": 200,
      "plan_accion": "Desarrollar plan de contingencia con proveedores alternativos y rutas de transporte backup",
      "responsable": "PMO",
      "hito_verificacion": "Continuo",
      "items_wbs": [],
      "fuente": "Contrato",
      "origen_decision": "N/A",
      "estado": "Activo"
    },
    {
      "id": "R-GES-004",
      "categoria": "Gestión",
      "especialidad": "Transversal",
      "descripcion": "Desfase aprobación diseños vs cronograma Plan Obras",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Alto",
      "impacto_num": 0.8,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.4,
      "riesgo_principal": {
        "cop_min": 400,
        "cop_max": 1500,
        "descripcion": "Standby de cuadrillas + penalidades por hito"
      },
      "estrategia_mitigacion": "Matriz de aprobaciones con plazos claros para cada entregable + comité bisemanal con Interventoría.",
      "riesgo_residual": {
        "cop_min": 100,
        "cop_max": 400,
        "descripcion": "Costo residual con matriz formalizada"
      },
      "exposicion_residual_cop": 125,
      "plan_accion": "Crear y socializar matriz de aprobaciones con plazos claros para cada entregable",
      "responsable": "PMO",
      "hito_verificacion": "H-APROB-M12",
      "items_wbs": [],
      "fuente": "A.1 Análisis",
      "origen_decision": "N/A",
      "estado": "Activo"
    },
    {
      "id": "R-CON-001",
      "categoria": "Contractual",
      "especialidad": "Pasos a Nivel",
      "descripcion": "Ambigüedad medición disponibilidad PAN 100% (KPI inalcanzable sin metodología clara)",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Alto",
      "impacto_num": 0.7,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.35,
      "riesgo_principal": {
        "cop_min": 300,
        "cop_max": 1000,
        "descripcion": "Sanciones por KPI no cumplido si la medición no se aclara contractualmente"
      },
      "estrategia_mitigacion": "Solicitar a ANI clarificación formal sobre metodología de medición de disponibilidad para los PAN; cláusula contractual ajustada.",
      "riesgo_residual": {
        "cop_min": 100,
        "cop_max": 300,
        "descripcion": "Costo de gestión de aclaración formal"
      },
      "exposicion_residual_cop": 100,
      "plan_accion": "Solicitar a ANI clarificación formal sobre metodología de medición de disponibilidad para los PAN",
      "responsable": "PMO Calidad",
      "hito_verificacion": "Continuo",
      "items_wbs": ["3.2.100", "4.1.100"],
      "fuente": "A.2 Análisis",
      "origen_decision": "N/A",
      "estado": "Activo"
    },
    {
      "id": "R-OPE-001",
      "categoria": "Operacional",
      "especialidad": "Transversal",
      "descripcion": "Falla conmutación failover sistemas redundantes",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Alto",
      "impacto_num": 0.7,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.35,
      "riesgo_principal": {
        "cop_min": 300,
        "cop_max": 1000,
        "descripcion": "Re-trabajo + retrasos certificación si SAT detecta falla failover"
      },
      "estrategia_mitigacion": "Pruebas de conmutación por falla obligatorias en protocolos FAT/SAT; ingeniería de detalle valida la lógica.",
      "riesgo_residual": {
        "cop_min": 100,
        "cop_max": 300,
        "descripcion": "Costo de pruebas estructuradas"
      },
      "exposicion_residual_cop": 100,
      "plan_accion": "Incluir pruebas de conmutación por falla (failover) en protocolos de pruebas SAT",
      "responsable": "Especialista Sistemas",
      "hito_verificacion": "H-SAT-M44",
      "items_wbs": ["1.1.100", "2.1.100"],
      "fuente": "A.2 Análisis",
      "origen_decision": "N/A",
      "estado": "Activo"
    },
    {
      "id": "R-CAL-001",
      "categoria": "Gestión",
      "especialidad": "Transversal",
      "descripcion": "Calidad materiales/mano obra no cumple estándares",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Alto",
      "impacto_num": 0.8,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.4,
      "riesgo_principal": {
        "cop_min": 600,
        "cop_max": 2000,
        "descripcion": "Re-trabajo + reposición de materiales no conformes + retrasos"
      },
      "estrategia_mitigacion": "Plan de aseguramiento de calidad estricto con inspecciones en fábrica y en sitio; certificaciones de fabricante exigidas.",
      "riesgo_residual": {
        "cop_min": 200,
        "cop_max": 600,
        "descripcion": "Costo continuo de QA/QC"
      },
      "exposicion_residual_cop": 200,
      "plan_accion": "Implementar plan de aseguramiento de calidad estricto con inspecciones en fábrica y en sitio",
      "responsable": "PMO Calidad",
      "hito_verificacion": "Continuo",
      "items_wbs": [],
      "fuente": "A.3 Análisis",
      "origen_decision": "N/A",
      "estado": "Activo"
    },
    {
      "id": "R-PAN-001",
      "categoria": "Contractual",
      "especialidad": "Pasos a Nivel",
      "descripcion": "Cantidades PAN NO confirmadas (regularización en curso) - Variación ±10% sobre 24 protegidos",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Medio",
      "impacto_num": 0.5,
      "nivel_exposicion": "BAJA",
      "exposicion": 0.25,
      "riesgo_principal": {
        "cop_min": 250,
        "cop_max": 700,
        "descripcion": "Variación ±10% sobre 24 PaN protegidos"
      },
      "estrategia_mitigacion": "ACEPTAR — Diseño modular ±10%, contingencia $489M ya presupuestada.",
      "riesgo_residual": {
        "cop_min": 100,
        "cop_max": 489,
        "descripcion": "Contingencia presupuestada"
      },
      "exposicion_residual_cop": 147,
      "plan_accion": "Confirmar diseño modular de PANs. Validar asignación de contingencia $489M en presupuesto",
      "responsable": "PMO + Seguridad Vial",
      "hito_verificacion": "HG-PAN-04-M10",
      "items_wbs": ["3.2.100", "4.1.100"],
      "fuente": "BLOCKER-003",
      "origen_decision": "N/A",
      "estado": "Activo"
    },
    {
      "id": "R-MR-001",
      "categoria": "Gestión",
      "especialidad": "Transversal",
      "descripcion": "Cronograma MR indefinido (15 locomotoras) - Secuencia pruebas NO definida",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Medio",
      "impacto_num": 0.5,
      "nivel_exposicion": "BAJA",
      "exposicion": 0.25,
      "riesgo_principal": {
        "cop_min": 400,
        "cop_max": 1200,
        "descripcion": "Standby de locomotoras + certificación en banco si MR no llega a tiempo"
      },
      "estrategia_mitigacion": "Plan adaptable + certificación en banco si MR no llega + cronograma con buffer.",
      "riesgo_residual": {
        "cop_min": 200,
        "cop_max": 600,
        "descripcion": "Costo de certificación en banco como contingencia"
      },
      "exposicion_residual_cop": 200,
      "plan_accion": "Enviar oficio a ANI solicitando cronograma detallado de entrega. Desarrollar 3 escenarios de planificación",
      "responsable": "PMO + Gerencia Operaciones",
      "hito_verificacion": "H-MR-M5",
      "items_wbs": ["6.1.100"],
      "fuente": "BLOCKER-004",
      "origen_decision": "N/A",
      "estado": "Activo"
    },
    {
      "id": "R-FIBRA-006",
      "categoria": "Económico",
      "especialidad": "Fibra Óptica",
      "descripcion": "Ahorro CAPEX no realizado si cajas cada 1000m fallan en mantenimiento (cubierto por R-FO-CAJAS-001)",
      "probabilidad": "Baja",
      "probabilidad_num": 0.2,
      "impacto": "Medio",
      "impacto_num": 0.5,
      "nivel_exposicion": "BAJA",
      "exposicion": 0.1,
      "riesgo_principal": {
        "cop_min": 250,
        "cop_max": 600,
        "descripcion": "Costo de re-cajas en mantenimiento si el espaciado falla"
      },
      "estrategia_mitigacion": "Aceptar: beneficio de espaciado optimizado supera el riesgo de mantenimiento. Ver R-FO-CAJAS-001 para gestión activa.",
      "riesgo_residual": {
        "cop_min": 0,
        "cop_max": 0,
        "descripcion": "RIESGO RELACIONADO — cubierto por R-FO-CAJAS-001. No sumar para evitar doble conteo."
      },
      "exposicion_residual_cop": 0,
      "plan_accion": "Monitorear costo final de fibra para confirmar ahorro proyectado. Validar en H-FIBRA-005",
      "responsable": "PMO",
      "hito_verificacion": "H-FIBRA-005",
      "items_wbs": ["2.3.100"],
      "fuente": "DT-FIBRA-001",
      "origen_decision": "DT-FIBRA-001",
      "estado": "Activo"
    },
    {
      "id": "R-INT-V1-001",
      "categoria": "Contractual",
      "especialidad": "Transversal",
      "descripcion": "Aprobación criterios de diseño V1 por Interventoría (Apéndice Técnico 1, Tabla 17). Las cifras de la línea base son estimadas hasta la no-objeción. El cierre depende de esta aprobación.",
      "probabilidad": "Alta",
      "probabilidad_num": 0.7,
      "impacto": "Crítico",
      "impacto_num": 0.9,
      "nivel_exposicion": "CRÍTICA",
      "exposicion": 0.63,
      "riesgo_principal": {
        "cop_min": 4000,
        "cop_max": 12000,
        "descripcion": "Si Interventoría rechaza alguna de las 4 reglas Tabla 17, escenario pesimista $80-110M USD vs esperado $59M USD"
      },
      "estrategia_mitigacion": "Mitigar: paquete técnico V1 completo (BCD v001 + DTs + matriz cumplimiento AT1 Tabla 17); seguimiento semanal con Interventoría; defensa contractual sólida.",
      "riesgo_residual": {
        "cop_min": 1000,
        "cop_max": 3000,
        "descripcion": "Caso negociación parcial: 1-2 de las 4 reglas requieren ajuste menor"
      },
      "exposicion_residual_cop": 1400,
      "plan_accion": "Entregar paquete técnico V1 completo (BCD v001 + DTs + matriz de cumplimiento AT1 Tabla 17) y agendar reuniones quincenales hasta obtener no-objeción formal",
      "responsable": "Director Técnico UF2",
      "hito_verificacion": "No-objeción Interventoría AT1 Tabla 17",
      "items_wbs": [],
      "fuente": "Contrato APP No. 001 de 2025 / AT1 Tabla 17",
      "origen_decision": "N/A",
      "estado": "Activo"
    },
    {
      "id": "R-ARDANUY-FO-001",
      "categoria": "Financiero",
      "especialidad": "Fibra Óptica",
      "descripcion": "Gap obra civil de fibra óptica: LFC estima $52.219M COP, Ardanuy v1 estima $122.894M COP. Diferencia de $70.675M COP (~$16M USD subestimado). Cubierto por la familia R-FO-* (profundidad, aéreo, cruces, puentes, restauración, permisos).",
      "probabilidad": "Alta",
      "probabilidad_num": 0.7,
      "impacto": "Alto",
      "impacto_num": 0.8,
      "nivel_exposicion": "ALTA",
      "exposicion": 0.56,
      "riesgo_principal": {
        "cop_min": 35000,
        "cop_max": 70675,
        "descripcion": "Subestimación obra civil FO si LFC ejecuta a la cifra cotizada y Ardanuy es la realidad"
      },
      "estrategia_mitigacion": "Mitigar: reasignación interna desde Cap 4.3 PaN básicos (fuera del alcance BCD §8.2) + Cap 6 OBU + Cap 5 CCO software vía DT-COMS-2026-008. La descomposición fina del riesgo va por R-FO-PROF, R-FO-AEREO, R-FO-CRUCE, R-FO-PUENTE, R-FO-RESTAUR, R-FO-PERMISOS.",
      "riesgo_residual": {
        "cop_min": 0,
        "cop_max": 0,
        "descripcion": "RIESGO MACRO — el residual real está descompuesto en la familia R-FO-* (PROF, AEREO, CRUCE-VEH, CRUCE-FERREO, PUENTE, RESTAUR, PERMISOS). No sumar para evitar doble conteo."
      },
      "exposicion_residual_cop": 0,
      "plan_accion": "Ejecutar DT-COMS-2026-008: subir Cap 2.3 obra civil FO + crear capítulo Diseño Fase III, compensando con bajadas en Cap 4.3, 5 y 6. Total convergente sin tocar techo.",
      "responsable": "Ing. Comunicaciones + Director Técnico UF2",
      "hito_verificacion": "DT-COMS-2026-008 emitida y aplicada al WBS",
      "items_wbs": ["2.3.100", "2.3.101", "2.3.102"],
      "fuente": "Validación cruzada Ardanuy LFC-U2-CTSC-ED-QTO-CO-0001 vs WBS LFC v14.7",
      "origen_decision": "Bloque D roadmap.md",
      "estado": "Activo"
    },
    {
      "id": "R-RFQ-001",
      "categoria": "Comercial",
      "especialidad": "Transversal",
      "descripcion": "8 ítems pendientes de cotización formal: 4 en ratificación contra ADIF (ENCE, desvíos motorizados, control remoto N+1, señales LED) + 4 sin ADIF en RFQ urgente (F.O. 48h G.652.D, contador de ejes, armario PTC SIL-3, UPS).",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Medio",
      "impacto_num": 0.6,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.3,
      "riesgo_principal": {
        "cop_min": 800,
        "cop_max": 2500,
        "descripcion": "Desviación RFQ vs precio base ADIF: ±$100-300M por ítem × 8 ítems"
      },
      "estrategia_mitigacion": "Línea base ADIF v1 aplicada (DT-COMS-2026-007) con buffer +12-15% por trocha 914mm + logística + MO local; RFQ a proveedores priorizados.",
      "riesgo_residual": {
        "cop_min": 300,
        "cop_max": 800,
        "descripcion": "Volatilidad residual post-RFQ con buffer aplicado"
      },
      "exposicion_residual_cop": 275,
      "plan_accion": "Lanzar RFQ formal a proveedores priorizados: Hima Colombia, Vossloh, Furukawa, Frauscher, Hima HiMax, Eaton/APC. Plazo: 30 días desde no-objeción Interventoría.",
      "responsable": "Compras / Integradora (ART, Hitachi)",
      "hito_verificacion": "RFQ recibidas y consolidadas en precios_Adif_COMPLETO.md §6",
      "items_wbs": ["1.3.100", "1.4.100", "1.4.101", "4.1.101", "2.3.100", "2.1.116"],
      "fuente": "DT-COMS-2026-007 §3.5 + precios_Adif_COMPLETO.md §4",
      "origen_decision": "DT-COMS-2026-007",
      "estado": "Activo"
    },
    {
      "id": "R-TRM-001",
      "tipo": "RIESGO",
      "categoria": "Financiero",
      "especialidad": "Transversal",
      "responsable_capex": "CFO",
      "confianza": "orden_magnitud",
      "descripcion": "FUERA DE CANCHA SICC — Exposición cambiaria: TRM Risk 4.400 COP/USD incorpora margen ~+21% vs TRM real spot 3.637. Si la TRM se mantiene cerca del spot durante ejecución, el equivalente USD del CAPEX sube de $59,1M a $71,5M (+21%).",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Alto",
      "impacto_num": 0.7,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.35,
      "riesgo_principal": {
        "cop_min": 12000,
        "cop_max": 30000,
        "descripcion": "Pérdida cambiaria si TRM se sostiene en spot 3.637 durante ejecución (~60% del CAPEX en USD)"
      },
      "estrategia_mitigacion": "Transferir: cobertura cambiaria forward sobre componente de suministro importado (~60% del CAPEX); revisión trimestral.",
      "riesgo_residual": {
        "cop_min": 1000,
        "cop_max": 2500,
        "descripcion": "Costo de instrumento de cobertura (forward/collar) sobre componente USD"
      },
      "exposicion_residual_cop": 875,
      "plan_accion": "Evaluar instrumento de cobertura (forward / collar) con tesorería Grupo Ortiz para componente USD del WBS. Revisar trimestralmente.",
      "responsable": "Tesorería Grupo Ortiz + Director Técnico UF2",
      "hito_verificacion": "Política de cobertura cambiaria aprobada",
      "items_wbs": [],
      "fuente": "lfc-terminology.js FINANCIAL.TRM + lectura spot Banco República",
      "origen_decision": "N/A",
      "estado": "Activo"
    },
    {
      "id": "R-ARDANUY-PERF-001",
      "categoria": "Contractual / Cronograma",
      "especialidad": "Transversal",
      "descripcion": "Incumplimiento de obligación de resultado por Ardanuy (TDR §2.12). Día 98 de 270. Hito 1 (DBCD) reformulado internamente por el EPC; Hito 2 (60%) radicado el 27-abr sin incorporar los criterios aprobados el 1-may. Cero reuniones técnicas entre Hitos 1 y 2.",
      "probabilidad": "Alta",
      "probabilidad_num": 0.8,
      "impacto": "Crítico",
      "impacto_num": 0.9,
      "nivel_exposicion": "CRÍTICA",
      "exposicion": 0.72,
      "riesgo_principal": {
        "cop_min": 1500,
        "cop_max": 5000,
        "descripcion": "Penalidades por retraso ingeniería + standby cuadrillas + re-trabajo si Hito 4 (5-jul-2026) no se cumple"
      },
      "estrategia_mitigacion": "Mitigar: reencauzar modelo de seguimiento. Comité técnico bisemanal + pre-radicación 15 días + carpeta de evidencias por hito (TDR §2.12 ya lo establece).",
      "riesgo_residual": {
        "cop_min": 500,
        "cop_max": 1500,
        "descripcion": "Costo residual con seguimiento estructurado y escalada al Comité Directivo"
      },
      "exposicion_residual_cop": 800,
      "plan_accion": "Reunión 5/7-may-2026 con Ardanuy y Oscar (comunicación 00013-2026). Único punto: Ardanuy presenta plan operativo escrito sobre integración multidisciplinar, coordinación interna entre disciplinas, evidencia de lectura UF1+UF2, y mecanismo de pre-radicación 15 días antes de cada hito. Si no hay compromiso escrito post-reunión, escalar al Comité Directivo del Consorcio antes del 15-may-2026.",
      "responsable": "Director Técnico UF2 + Comité Directivo Consorcio",
      "hito_verificacion": "Acta firmada Ardanuy con plan operativo + 1ra pre-radicación Hito 3 cumplida 15 días antes",
      "items_wbs": [],
      "fuente": "Comunicación 00013-2026 (4-may-2026) + TDR Ardanuy §2.12 + Contrato APP No. 001 de 2025",
      "origen_decision": "Comunicación 00013-2026",
      "estado": "Activo"
    },
    {
      "id": "R-PTC-001",
      "categoria": "Técnico",
      "especialidad": "PTC",
      "descripcion": "Indefinición técnica de arquitectura PTC con cantonamiento virtual (saneamiento ya completado, R-PTC-BALIZAS-001 captura el residual contractual)",
      "probabilidad": "Baja",
      "probabilidad_num": 0.3,
      "impacto": "Crítico",
      "impacto_num": 0.9,
      "nivel_exposicion": "ALTA",
      "exposicion": 0.27,
      "riesgo_principal": {
        "cop_min": 5000,
        "cop_max": 15000,
        "descripcion": "Re-arquitectura PTC si la definición se desvía del Virtual Fixed Block (cubierto contractualmente por R-PTC-BALIZAS-001)"
      },
      "estrategia_mitigacion": "EVITAR — Saneamiento Recursivo Completado. PTC con cantonamiento virtual ya alineado con FRA 49 CFR §236.1005. Ver R-PTC-BALIZAS-001 para defensa contractual residual.",
      "riesgo_residual": {
        "cop_min": 0,
        "cop_max": 0,
        "descripcion": "RIESGO MACRO — el residual está cubierto por R-PTC-BALIZAS-001 + R-ENCE-NUM-001 + R-PTC-GPS-001. No sumar para evitar doble conteo."
      },
      "exposicion_residual_cop": 0,
      "plan_accion": "Confirmar arquitectura PTC con cantonamiento virtual. Validar ahorro CAPEX en línea base BCD-aligned.",
      "responsable": "Gerencia Técnica + ANI",
      "hito_verificacion": "H-PTC-DEF-M6",
      "items_wbs": ["1.1.100", "1.1.103", "1.2.100"],
      "fuente": "BLOCKER-001",
      "origen_decision": "N/A",
      "estado": "Activo"
    },
    {
      "id": "R-FENOCO-001",
      "categoria": "Técnico",
      "especialidad": "Interoperabilidad FENOCO",
      "descripcion": "Interoperabilidad con sistemas legacy de FENOCO en interfaz operativa (Stop & Switch Chiriguaná). Ver R-FENOCO-INTEG-001 y R-FENOCO-EMBARCADO-001 para descomposición.",
      "probabilidad": "Media",
      "probabilidad_num": 0.5,
      "impacto": "Alto",
      "impacto_num": 0.7,
      "nivel_exposicion": "MEDIA",
      "exposicion": 0.35,
      "riesgo_principal": {
        "cop_min": 1000,
        "cop_max": 3000,
        "descripcion": "Coordinación operativa adicional + procedimientos extendidos (cubierto por R-FENOCO-INTEG y R-FENOCO-EMBARCADO)"
      },
      "estrategia_mitigacion": "MITIGAR — Validar protocolo Stop & Switch operativo con FENOCO en interfaz Chiriguaná (BCD §9 + AT1 Tabla 17). Sin pasarela ITCS.",
      "riesgo_residual": {
        "cop_min": 0,
        "cop_max": 0,
        "descripcion": "RIESGO MACRO — el residual está cubierto por R-FENOCO-INTEG-001 + R-FENOCO-EMBARCADO-001 + R-INT-01. No sumar para evitar doble conteo."
      },
      "exposicion_residual_cop": 0,
      "plan_accion": "Validar protocolo Stop & Switch operativo con FENOCO en interfaz Chiriguaná (BCD §9 + AT1 Tabla 17).",
      "responsable": "PMO + FENOCO",
      "hito_verificacion": "H-FENOCO-M6",
      "items_wbs": ["1.1.106", "4.1.100"],
      "fuente": "BLOCKER-002",
      "origen_decision": "N/A",
      "estado": "Activo"
    }
  ],
  "estadisticas": {
    "exposicion_critica": 7,
    "exposicion_alta": 12,
    "exposicion_media": 19,
    "exposicion_baja": 5,
    "por_especialidad": {
      "fibra_optica": 11,
      "electrica": 4,
      "tetra": 3,
      "ptc": 4,
      "cco": 0,
      "pasos_a_nivel": 4,
      "interoperabilidad_fenoco": 4,
      "custodia": 2,
      "transversal": 11
    }
  },
  "proyecto": "APP La Dorada-Chiriguaná",
  "riesgos_vinculados": 28,
  "total_riesgos": 43
};
