# LISTADO MAESTRO DE VERIFICACIÓN DE PRECIOS — SICC v14.7

**Proyecto:** APP La Dorada – Chiriguaná (UF2)
**Contrato:** Concesión No. 001 de 2025
**Documento base:** WBS_Presupuestal_v4_0_MICHELIN.md (TRM 4400)
**Fecha:** 2026-05-04
**Estado:** En proceso de consolidación pre-entrega presupuesto
**Owner técnico:** Diego Z. — Director Técnico UF2

---

## CONTEXTO DEL EJERCICIO

Este documento consolida los **6 ítems críticos** del WBS_Presupuestal_v4_0 que requieren validación de precio antes de la entrega del presupuesto, cruzando todas las fuentes documentales disponibles para triangular el VU defendible ante Interventoría.

**Variables de contexto que afectan el ejercicio:**

- **TRM presupuesto v4.0:** $4.400 COP/USD (Línea Base Michelin, 09-04-2026)
- **TRM real estimada hoy (2026-05-04):** $3.637 COP/USD (verificar al momento de entrega)
- **Delta cambiario:** ~$760 COP/USD a favor del Concesionario si se mantiene TRM presupuestada
- **Doctrina aplicable:** SICC v14.7 (post-cirugía 30/04/2026)
- **Salario mínimo 2026:** verificar impacto en mano de obra de cuadrillas (WBS 2.3.101 = $52.219M)
- **Stock crítico:** microchips SIL-3/SIL-4 con tiempos de entrega largos en 2026 → riesgo cronograma

---

## TABLA MAESTRA — 6 PUNTOS DE DOLOR FINANCIERO

### #1 — WBS 1.1.103: Software PTC + Autorizaciones

| Campo | Valor |
|---|---|
| **Cantidad** | 1 (licencia maestra) |
| **VU presupuesto v4.0** | $11,000,000,000 COP |
| **Equivalente USD @ 4400** | $2,500,000 USD |
| **Categoría** | CTC Virtual / Back Office |

**Fuentes cruzadas disponibles:**
- WBS v3.0 línea base interna: **$88,112,090,432 COP** ($20,025,475 USD) — incluía "Software CTC Virtual + ETCS L2 + FENOCO" — **purgado en Michelin** por sobredimensionamiento (incluía gateway FENOCO eliminado por Sec. 25.4)
- CRRC CIF Buenaventura: **$12,130,636 USD** "Sistema CTC en Tierra (Despacho)" → equivalente ~$53,375M COP @ TRM 4400 — referencia de oferta china
- WBS v4.0 Michelin: $11,000M COP (purgado)

**Qué falta buscar:**
- Cotización Alstom (Atlas, Iconis), Siemens Mobility (Trainguard MT, Vicos), Thales (NetTrac MT, LockTrac) en versión PTC con cantonamiento virtual
- Modelo de licenciamiento (perpetuo vs. SaaS, por trayecto, por tren, por nodo)
- Costo de mantenimiento anual (típicamente 18-22% del CAPEX licencia)

**Línea de defensa interna:** $11,000M COP (techo Michelin)
**Margen de negociación:** alto — el rango entre referencias va de $11M a $53M COP

---

### #2 — WBS 1.4.100: Desvíos Motorizados CTC

| Campo | Valor |
|---|---|
| **Cantidad** | 25 unidades |
| **VU presupuesto v4.0** | $448,589,000 COP |
| **Total** | $11,214,725,000 COP |
| **Equivalente USD @ 4400** | $101,952 USD/u |

**Fuentes cruzadas:**
- Conceptual LFC (LFC-U2-CTSC-ED-QTO-CO-0001): **Motores cambiavía $18,585 USD/u** → solo el motor, no el desvío completo
- WBS v3.0: $448,589,000 COP/u (idem)
- Trocha **914 mm** (no estándar) — limita proveedores: requiere herrajería específica

**Composición esperada del VU:**
- Aparato de vía completo (cambio + corazón + contraagujas + traviesas) — partida ADIF VEA010
- Motor de cambio (×1, posible doble por seguridad SIL-3) — partida ADIF CBB010
- Detector de posición / comprobador de aguja
- Calefacción aguja (clima Caribe colombiano: NO aplica, omitir)
- Cableado a enclavamiento

**Qué falta buscar:**
- Precio ADIF base unitario VEA010 (desvío sencillo) — pendiente de extracción por agente externo
- Mayor por trocha 914 mm vs estándar 1435 mm (típico +15-25% por baja serie)
- Cotización Vossloh, Voestalpine, Vorbis en formato proyecto

**Línea de defensa:** $448M COP/u (WBS v3.0 ya validado en Michelin)
**Riesgo:** trocha 914 mm puede tirar VU al alza si no hay stock

---

### #3 — WBS 6.1.100 / 1.2.100: Sistemas PTC Embarcados (Computadora + Suite)

| Campo | Valor (referencia 6.1.100) | Valor (referencia 1.2.100) |
|---|---|---|
| **Cantidad** | 15 trenes | 15 trenes |
| **VU presupuesto v4.0** | $400,000,000 COP | $120,000,000 COP |
| **Total** | $6,000M COP | $1,800M COP |
| **Categoría** | Integración + puesta a punto en GR12/U10 | Computadora PTC embarcada (hardware) |

**Fuentes cruzadas:**
- WBS v3.0 (LÍMITE R-HARD INNEGOCIABLE): **$726,000,000 COP/u** ($165,000 USD) — Sistemas ATP Embarcados (OBC) completo
- CRRC CIF Buenaventura: **$989,421 USD/tren** "ATP Embarcado por tren" → ~$4,353M COP/u — muy alto, incluye instalación completa
- Conceptual LFC: **Armarios PTC en PaN $140,000 USD/u** (no aplica embarcado, es para wayside)

**Composición esperada del paquete embarcado completo (por tren):**
- Computadora PTC (CPU SIL-3/4 redundante 2oo3): WBS 1.2.100 = $120M
- Display maquinista (DMI): WBS 1.2.101 = $80M
- Sensores velocidad: WBS 1.2.102 = $25M
- GPS: WBS 1.2.103 = $35M
- Software PTC embarcado: WBS 1.2.104 = $100M
- Interfaces frenos: WBS 1.2.105 = $30M
- Sistema redundancia: WBS 1.2.106 = $50M
- **Subtotal hardware embarcado v4.0:** $440M COP/tren ≠ R-HARD v3.0 $726M COP

**Gap detectado:** WBS v4.0 Michelin parece haber bajado de $726M a $440M sin documentar el porqué. **Riesgo:** si Interventoría auditará contra v3.0, hay que justificar el saneamiento.

**Qué falta buscar:**
- Cotización Wabtec/GE Transportation OBC PTC (referencia: I-ETMS Wabtec)
- Cotización Alstom Atlas OBU
- Cotización Siemens Mobility Trainguard MT EVC
- Costo retrofit GR12 (locomotora vieja, integración complicada) y U10/U18
- Conceptual LFC referencia equivalente

**Línea de defensa:** $726M COP/u (R-HARD WBS v3.0)
**Acción:** **revisar por qué Michelin bajó a $440M**

---

### #4 — WBS 2.3.100: Fibra Óptica G.652.D

| Campo | Valor |
|---|---|
| **Cantidad** | 579 km (cubre 526 km corredor + 53 km accesos/contingencia) |
| **VU presupuesto v4.0** | $9,811,013 COP/km |
| **Total cable** | $5,680,576,527 COP |
| **Hilos actuales** | 48 |
| **Hilos requeridos por v14.7** | **64** |

**Fuentes cruzadas:**
- WBS v3.0: $9,811,013 COP/km (48 hilos) — NO HAY referencia 64 hilos cargada
- Jovega Ingeniería 29-12-2025 (TRM $3,900): NO incluye fibra óptica (su capítulo es energía y cableado eléctrico bajo voltaje)
- CRRC: NO desglosa fibra
- Tritubo 40mm complementario (Jovega): **$15,845 COP/m** = $9,174,255/km × 579 km = $5,311M (verificar si está incluido en el actual o aparte)
- Cajas de empalme 80x80 (WBS v3.0): **$1,350,000 COP/u**
- Mano de obra instalación (WBS 2.3.101): **$90,188,987 COP/km** × 579 km = $52,219M — verificar impacto SMMLV 2026

**Qué falta buscar (autorizado WebSearch):**
- VU cable F.O. monomodo 64 hilos G.652.D OSP, tubo loose, anti-roedor
  - Furukawa LATAM 2026 (planta Brasil, distribuidor COL)
  - Corning AltosLite/SST-Drop
  - Prysmian (planta Brasil/EU)
  - Optical Cable Corp
- Ratio histórico 64/48 hilos cable monomodo: típicamente **+25-35%**
- Estimación rápida: $9,811,013 × 1.30 = **$12,754,317 COP/km** → total 64h ~$7,384M (delta vs v4.0: +$1,704M)

**Línea de defensa:** pendiente WebSearch para tener 3 referencias defendibles

---

### #5 — WBS 1.3.100: Controladores ENCE (5 estaciones)

| Campo | Valor |
|---|---|
| **Cantidad** | 5 estaciones (Zapatosa, García Cadena, Barrancabermeja, Puerto Berrío–Grecia, La Dorada–México) |
| **VU presupuesto v4.0** | $800,000,000 COP/u |
| **Total** | $4,000M COP |
| **Equivalente USD @ 4400** | $181,818 USD/u |
| **SIL requerido** | **SIL-3 mínimo** (doctrina v14.7); Acta interna marca SIL-4 |

**Fuentes cruzadas:**
- WBS v3.0: $800,000,000 COP/u (validado en Michelin)
- Conceptual LFC: **Enclavamiento $869,376.80 USD/u** → equivalente ~$3,825M COP @ 4400 → **muy por encima** del v4.0 (~5x)
- CRRC: NO desglosa enclavamientos individuales (van dentro del paquete CTC)

**Discrepancia crítica:** El conceptual LFC dice ~$870k USD/u y el WBS v4.0 dice ~$182k USD/u. **Diferencia de 4.8x**. ¿Está el v4.0 subdimensionado o el conceptual sobredimensionado?

**Composición esperada de un ENCE completo:**
- CPU vital 2oo3 SIL-4 (Hima HiMax, Siemens Sicas-S7, Alstom Smartlock 400)
- I/O vital (módulos detección + comando señales/cambios)
- Workstation operación local + HMI
- Caseta climatizada + UPS local 4h
- Cableado a campo (señales, cambios, contadores)

**Qué falta buscar:**
- Cotización Siemens Sicas-S7, Hima HiMax/HiQuad, Alstom Smartlock 200/400, Bombardier EBI Lock 950, Thales LockTrac
- Comparar contra el rango USD 500k–1M/u típico de mercado europeo/norteamericano para ENCE pequeño-mediano

**Línea de defensa:** $800M COP (WBS v3.0)
**Acción:** **conciliar diferencia 4.8x con conceptual LFC** — uno de los dos está mal

---

### #6 — WBS 1.2.100: Computadora PTC Embarcada (hardware)

Ver análisis combinado en **#3** (parte del paquete embarcado completo).

---

## VARIABLES TRANSVERSALES A VERIFICAR

### V1 — TRM
- Presupuesto v4.0: $4,400 COP/USD
- Real estimada 2026-05-04: ~$3,637 COP/USD
- **Acción:** verificar si contrato APP 001/2025 fija TRM techo/piso o si aplica indexación BanRep

### V2 — Mano de obra fibra óptica (WBS 2.3.101)
- Cuantía: $52,219M COP (32% del Cap 2)
- VU: $90,188,987 COP/km — verificar contra SMMLV 2026 + factor prestacional 51% + cuadrilla típica (5-7 personas)
- Mano de obra Jovega instalación cables eléctricos: **$21,033 COP/m** = $21,033,000/km — orden de magnitud distinto pero referencia útil

### V3 — Stock SIL-3/SIL-4 (chips)
- Riesgo cronograma 2026: lead time típico 18-24 meses para módulos vitales
- **Acción:** confirmar con proveedor disponibilidad antes de fijar fecha entrega ENCE/PTC

---

## FUENTES DOCUMENTALES CARGADAS Y SU APORTE

| Fuente | Cobertura | Estado |
|---|---|---|
| **WBS v3.0 (línea base interna pre-Michelin)** | Todos los ítems CTC/PTC/ENCE/Fibra/PaN | Disponible — usar como techo de defensa |
| **WBS v4.0 Michelin** | Todos los ítems (saneados) | Vigente — base actual del presupuesto |
| **CRRC (oferta china)** | Material rodante + CTC + comunicaciones tren-tierra + ATP | Disponible — referencia FOB/CIF Buenaventura |
| **PowerTrunk (Grupo Ortiz)** | Solo consultoría TETRA $468k USD | NO incluye BOM ni hoja de consumo W |
| **Conceptual LFC (LFC-U2-CTSC-ED-QTO-CO-0001)** | Enclavamientos, motores cambiavía, contadores eje, señales LED, armarios PTC PaN, torres TETRA, FO global | Disponible — todo en USD |
| **Jovega Ingeniería (29-12-2025, TRM $3,900)** | Energía 13.2kV, BT, UPS, generadores, baterías, cableado eléctrico | Disponible — útil para escudo "no diésel" |
| **Hispasat Portfolio Concesiones** | Candidato satelital LEO/GEO redundancia tren-tierra | Cargado, pendiente extracción tarifas |
| **ADIF (bpa.adif.es)** | Precios base europeos para vía y CMS | **EN EXTRACCIÓN por agente externo** → ver `precios_Adif.md` en raíz |

---

## ENTREGABLES PARA MAÑANA

1. ✅ Este listado consolidado (ya)
2. ⏳ Receptor ADIF (`precios_Adif.md` en raíz LFC2) — listo para que agente externo lo rellene
3. ⏳ WebSearch fibra 64h, OTDR, empalmes — pendiente autorización + ejecución
4. ⏳ Conciliación discrepancia ENCE conceptual vs Michelin (4.8x) — requiere decisión Diego
5. ⏳ Conciliación gap PTC embarcado v3.0 ($726M) vs v4.0 ($440M) — requiere decisión Diego
6. ⏳ Plan C: Punto 42 manual sobre BCD v001 (autorizado, pendiente ejecución por Claude)

---

**Última actualización:** 2026-05-04 17:55 — Claude Opus 4.7 (consolidación inicial post-paquete-táctico)
