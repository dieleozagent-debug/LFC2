# 🗺️ ROADMAP — LFC2 (UF2 La Dorada–Chiriguaná)

**Última actualización:** 23 de Mayo de 2026
**Hito vigente:** entrega presupuesto ANI 2026-05-05 · tag `entrega-presupuesto-2026-05-05`
**Última sesión:** 2026-05-23 — Apartaderos PTC + Baseline ENCE + Precios base ADIF validados (BPA v1.4.0)

> Bitácora viva. Cada sesión actualiza esta página: cierra ítems hechos, agrega hallazgos nuevos, mueve los que pasan a deuda profunda hacia "Backlog".

---

## ✅ Cerrado en sesión 2026-05-23 (Apartaderos + ENCE + Precios base ADIF)

> **Contexto:** TFP pidió el coste de automatizar 10 apartaderos; el reporte previo daba ~$7,7M USD ("casi un ENCE"). Se replanteó bajo doctrina PTC virtual y se validó toda la base de precios contra el BPA ADIF real (consulta directa, app v1.4.0, válida 19/02/2026, © ADIF 2025).

| Ítem | Detalle | Commit |
|---|---|---|
| **Apartadero PTC austero** — nueva vista `WBS_Detalle_Apartadero.html` (`/apartadero`) + `Costo_Apartaderos_PTC.xlsx` | Corrección del sobrecoste: el modelo viejo cobraba desvío nuevo (VEA010), motor, **señales LED y gabinetes prohibidos fuera de ENCE**, y energía sobredimensionada. Modelo correcto = comprobador SIL-4 ×2 + terminal TETRA ×2 + solar. **10 apartaderos: $3.316M COP ≈ $0,75M USD** (vs $33.200M previo, −90%). ~$22K/desvío. No incluye obra civil ni infra TETRA del corredor. | `f71cfc8`→`3438e60` |
| **Ajuste TETRA (anti doble-conteo)** | Infra TETRA del corredor ya presupuestada (verificado WBS v3.0: sin partida de terminales para apartaderos) → solo el terminal del switch es incremental. Comms $520M→$350M. | `52fa92b` |
| **Comprobador desglosado + Referencia/Fuente** | CTC/PTC partido en hardware (ADIF CFA040$ €4.963,85) + cert. SIL-4 + integración = $92M, para transparencia ante Interventoría. Columna de fuente por línea (ADIF real / mercado / RFQ pendiente). | `3438e60` |
| **Baseline ENCE bottom-up ADIF** — nueva vista `WBS_Baseline_ENCE.html` (`/ence`) + `Baseline_ENCE_ADIF.xlsx` | BoQ por estación con núcleo CAC# 100% real (UCP CAC020 + CAC010/030/040/050 + registrador CAC070 + interfaz CTC CAC080 + firewall CAC170 + SAI COA220 6h) + 8 motores/comprobadores + 12 señales + 9 contadores. **1 ENCE ≈ $968K USD / $4.260M COP; 5 ENCE ≈ $4,84M USD / $21.298M COP.** Se alinea con Ardanuy ($869K, +11% por registrador+interfaz CTC) y expone que el WBS v3.0 ($800M/ENCE) subestima ~5×. | `2aa57c5`, `09c0439`, `f06cb80` |
| **Tabla de precios base ADIF validada** — `Precios_Base_ADIF_BPA_2026.md` (canónica) | Catálogo verificado en BPA con código paramétrico, €, ≈COP y **URL por ítem**: 17 ítems señalización/vía + subcapítulo CAC# completo (17 módulos) + SAI COA#. Correcciones: motor = CFA010 (no CBB010, que era bastidor enclavamiento), desvío €104.566 (no €114.320), señal €7.934 (no €10.450), UCP ENCE €118.006 (los €356.780 eran sistema completo). `precios_Adif_COMPLETO.md §2` marcado SUPERSEDED. | — |
| **Hallazgo GSM-R vs TETRA** | "TETRA" da cero resultados en el BPA — ADIF usa GSM-R. LFC usa TETRA por doctrina (BCD) → terminales por mercado (Hytera/Motorola), no por ADIF. Confirmado. | — |
| **Cache-bust + fix menús** | Scripts del sidebar unificados a `?v=14.7.14` en los 42 HTML (antes mezcla v=6.3.2/14.7.x) para que aparezcan los enlaces nuevos (Apartadero, ENCE). Corregido `?v=` duplicado preexistente en `INDICE_Documentos_Servidos.html`. `navMap` del sidebar ampliado con resaltado activo de las páginas nuevas. Aliases `/apartadero` y `/ence` en vercel.json. | `1d9d7d4` + sesión |
| **Validación del BoQ LFC2 contra ADIF** — `Presupuesto_SCC_LFC2_2026-05-05 (5).xlsx` (entregable) | Nueva hoja "8.Validación ADIF": cada ítem contrastado contra precio BPA real (€/ud, delta %, estado, URL). ENCE ×5 +1% ✅ · desvíos motoriz. +9% ✅ · señales +36% ✅ · autotalonables alcance distinto ⚠ · fibra (sum+MO) +280% 🔴 (terreno selvático) · 124 ítems sin partida ADIF → RFQ. Corrige 2 notas erróneas (CAC020/VEA010); no toca ningún VU. El (5) reemplaza al validado paralelo. | `342ecf7`, `08eadad` |
| **Reporte Gerencial restaurado + ajustado a ADIF** — `WBS_Reporte_Gerencial.html` (`/reporte`) | (1) Había quedado convertido en la consulta de coste de apartaderos (commits 7401df4→ecb775b); ese contenido ya vive en `/apartadero`. Revertido a la versión gerencial entregada (`3917613`): optimizaciones Tabla 17, comparativa Grupo Ortiz, escenarios, resumen por capítulo, riesgos BCD, criterios y palancas. (2) Ajustado a la validación BPA: banner "precios validados v1.4.0", escenario pesimista sin el "upgrade ENCE ~2,1M" (descartado, +1%), riesgo FO confirmado (+280% MO fibra), riesgo RFQ con núcleo ratificado, palancas 3/5 actualizadas, enlaces a Baseline ENCE / Detalle Apartadero. Cifras vivas del JS sin cambio. Cache v=14.7.14. | `9f5d197`, `f28dc70` |

### ⏳ Pendiente de esta línea (precios base)
- **Cantidades por estación ENCE** — único pendiente del baseline: nº real de desvíos/señales/contadores por cada uno de los 5 ENCE (ingeniería de detalle); hoy se usa promedio Ardanuy ÷ 5.
- **Desvío talonable** — no existe partida en BPA (solo tipos C/P/G/AV/B) → precio contradictorio si se requiere.
- **RFQ formal** — los precios ADIF son referencia europea; confirmar con proveedor COL/LATAM antes de valor contractual.

---

## ✅ Cerrado en sesión 2026-05-08 (Reporte Gerencial + Análisis de Riesgos)

| Ítem | Commit |
|---|---|
| **Reporte Gerencial ampliado** — sección "🎯 Optimizaciones doctrinales 4 reglas Tabla 17 AT1" (Stop & Switch FENOCO, 5 ENCE, PTC virtual −15M USD, redimensionamiento eléctrico/FO −5/−10M USD), comparativa contractual con cifra Grupo Ortiz CD+IVA sin AIU $54,73M USD vs oferta sin AIU $69,08M USD = +21% margen, sección "🛡️ Criterios BCD v001 que cuidan margen" (8 criterios mapeados a sección BCD + mecanismo de protección), sección "📈 Palancas activas" (7 acciones con impacto y estado). Cache v=14.7.5. | `3917613` |
| **riesgos_wbs.js schema v2** — 22 riesgos preexistentes cuantificados con principal/mitigación/residual + 26 nuevos por especialidad: Fibra OC (R-FO-PROF profundidad 40→120cm con mitigación servidumbre 30m, R-FO-AEREO, R-FO-CRUCE-VEH/FERREO, R-FO-PUENTE, R-FO-CAJAS, R-FO-RESTAUR, R-FO-CUSTODIA, R-FO-PERMISOS), Eléctrica (R-UPS-SUBDIM, R-RETIE-001, R-EMC-001), TETRA (R-TETRA-COB/CIBER/SAT), PTC (R-PTC-BALIZAS, R-ENCE-NUM, R-PTC-GPS), PaN (R-PAN-ALCANCE, R-PAN-CWT, R-PAN-FAILSAFE), FENOCO (R-FENOCO-INTEG, R-FENOCO-EMBARCADO), Custodia (R-CUSTODIA-EQUIPOS, R-CUSTODIA-POLIZA). | `b07bbe8` |
| **riesgos_wbs.js schema v3** — 4 ejes de clasificación nuevos: `tipo` (RIESGO/OPORTUNIDAD), `responsable_capex` (SICC/ANI/CFO/HSEQ — solo SICC suma al KPI gerencial), `transferibilidad` (a ANI vía Sec 9.11/9.12→25.4 con mecanismo + referencia contractual), `confianza` (orden_magnitud/pendiente_wbs/wbs_firme). Riesgos reclasificados con residual SICC=0: R-PTC-BALIZAS (Sec 9.12(a)→25.4), R-ENCE-NUM (Tabla 17 fija 5), R-FENOCO-INTEG (triple capa §9.11(b)(ii) + §9.12→25.4 + Resolución Surcos Art 5), R-PAN-ALCANCE (122 PaN en UF≠SCC). R-UPS-SOBREDIM movido a OPORTUNIDAD ($300-700M COP liberación). R-TRM-001 marcado responsable_capex=CFO (fuera cancha SICC). | `bd74d00` |
| **WBS_Analisis_Riesgos rediseñado** — 4 KPIs reactivos al filtro: Provisión SICC ⭐ con ratio sobre margen ($14,35M USD) y CD ($211B COP) + Transferido ANI (rango worst-case) + Oportunidades de ahorro + Otros owners (CFO). Filtros por nivel de exposición + por especialidad (Fibra/Eléctrica/TETRA/PTC/PaN/FENOCO/Custodia/Transversal) + búsqueda libre, todos en cascada. Badges por card: 💡 OPORTUNIDAD, 🏛️ Transferible ANI, 💼 Cancha CFO, ✅ WBS firme / ⏳ Pendiente WBS / ~ Orden magnitud. Bloques amarillos para transferibles ANI (mecanismo + referencia). Cache v=14.7.7. | `bd74d00` |
| **Cifras finales reporte de riesgos**: Provisión Residual SICC ~$13,25B COP / **$3,01M USD** = 21% del margen actual / 6,27% del CD. Transferido ANI worst-case $57-154B COP (no es CapEx LFC). Oportunidades $300-700M COP. Otros owners (TRM=CFO) $875M COP. | — |
| **SICC → SCC en cara externa**: cambio de sigla en HTMLs gerenciales y `riesgos_wbs.js` para evitar colisión con SICC del AT4 (Sistema de Indicadores). Glosario explícito en Análisis de Riesgos. Backstage interno (`lfc-terminology.js`, `SICC_METHODOLOGY_42.md`, IDs DT-SICC-XXX, scripts agente) mantiene "SICC" como marca interna. | `a045d6d` |
| **Index UX corporativo + fix bug navegación**: header "SICC INTEGRATED ECOSYSTEM/Sovereign Tower/Soberanía tecnológica v6.4.8 Alpha 2026" → "Centro de Gestión Técnica · UF2" + cita contractual. Métricas tech ("UTF-8 Purity", "SICC Kernel") → KPIs útiles (Riesgos, Margen, Provisión SCC). Sidebar y access cards: traducción al español + hrefs sin `.html` (resuelve bug navegación adelante/atrás causado por cleanUrls de Vercel). Cache scripts v=14.7.10. Meta `Cache-Control: no-cache`. | `a1d6bbc` + `e12ca26` |
| **Sidebar fix 404**: eliminados 2 links a `.md` en sidebar embebido del index (Vercel no renderiza markdown). | `a5a852c` |
| **D1.5 — Dictámenes legacy eliminados** (commit pendiente): `git rm -rf II_A_Analisis_Contractual/dictamenes/*` (57 archivos v8 pre-purga). Directorio queda con `README.md` placeholder explicando la regeneración esperada vía `/audit` + `/promote` con BCD v001. Histórico forense conservado en `agente/brain/dictamenes/`. | pendiente |
| **Docs sincronizadas con saneamiento agente**: `agente/README.md` corregido "64 hilos → 48 hilos G.652.D" + "UPS 4h + 24-48h TETRA" + sección Deuda Activa D1/D2/D3. `agente/architecture.md` con sigla SCC en cara externa + sección "Estado de los DTs publicados en LFC2" advirtiendo que son alucinaciones legacy. README.md/architectureLFC.md/roadmap.md de LFC2 reflejan eliminación de dictamenes. | pendiente |

---

## ✅ Cerrado en sesión 2026-05-05 (post-cirugía BCD v001)

| Ítem | Commit / Archivo |
|---|---|
| Frontend WBS unificado · Universo A (135 ítems certificados) restaurado tras regresión Antigravity | `2598bb8` |
| Sidebar reapuntada de Universo B legacy → `WBS_Vista_Final.html` | `sidebar-component.js:20` |
| `WBS_Menu_Principal.html` integrado: hero + Detalle Presupuestal → Vista_Final + acceso a precios ADIF | `2598bb8` |
| `WBS_Vista_Final.html` con sidebar inyectada + botón "🏠 Menú Principal" | `2598bb8` |
| `lfc-cli.js`: nuevo comando `promote` (gatillo SICC: process-dts → sync → cook → serve) | `2598bb8` |
| `lfc-terminology.js` purgado: trocha 914mm, fibra 48h, 24 PaN, Stop & Switch / ADIF / Telcordia GR-20-CORE fuera de blacklist | `2598bb8` |
| `README.md` con tabla criterios maestros (13 filas, fuente BCD) | `2598bb8` |
| `architectureLFC.md` reescrito: jerarquía L1-L8, mapa dos universos, flujo DT 6 niveles, deuda técnica | `2598bb8` |
| `SICC_METHODOLOGY_42.md` (raíz) creado: metodología .42 unificada con prefijos DT, workflow agente, stack Tridente NVIDIA NIM, deuda doctrinal | `2598bb8` |
| 3 metadocs obsoletos a `VIII_/_legacy/` con README explicativo | `2598bb8` |
| `WBS_Presupuestal_v2_0.md` saneado a v4.0 BCD-aligned (purga FENOCO declarada) | `2598bb8` |
| `LEEME_PRIMERO.md` reescrito completo (oct 2025 → mayo 2026, BCD-aligned) | turno actual |
| **Cap 4.2.100 fix**: descripción "barreras manuales" → "Señales Luminosas y Acústicas (SLA) Tipo B" alineado BCD §8.2.1 | turno actual |
| **Saneo "64 hilos" en docs auxiliares** (`WBS_Listado_Verificacion_Precios`, `precios_Adif.md`): contradecía BCD §6.1.1 (48h homogéneo) | turno actual |
| **DT-CTRL-2026-006 redactada**: flota tractiva 15 unidades = 1 U18 (AT1 §5) + 14 Factor Calidad. Cierra deuda doctrinal locomotoras. | turno actual |
| **DT-COMS-2026-007 aplicada (ADIF v1)**: 5 ENCE $800M→$2,000M (CAC020) + 25 desvíos motorizados $448M→$640M (VEA010). Bug 2.3.100 fix "64 hilos"→"48 hilos". Cap 1 +$10,786M COP. Notas RFQ pendiente para 8 ítems (4 ratificación ADIF + 4 sin ADIF: F.O. 48h, contador ejes, armario PTC, UPS) con proveedores priorizados en `precios_Adif_COMPLETO.md` §4. | turno actual |
| **Bloque C UI/UX consolidado** (C1+C2+C3+C4+C5+C6): Vista Final como vista canónica única con barra L4 secundaria (AIU · Acta · Validación Cap.4 · Zero-Residue · RFQ) en modales inline + Excel 7 hojas (incluye estilo Costo_proyecto.xlsx en Hoja 3 con TRM en M1 y fórmulas $M$1). 4 redirects (WBS_COMPLETA_TODO_v4.0 + duplicado + Controles_L4 + Presupuesto_SCC) → Vista_Final. Index.html migrado a Universo A (count-items desde wbs_presupuestal_datos.js). | turno actual |
| **Sincronización post-Q2/Q3 al .js (D12 cerrado)**: 7 renames aplicados al `wbs_presupuestal_datos.js` — 2.1.116 LiFePO4→"Bancos baterías UPS 24h (química RFQ)"; 2.2.100-104 + 6.1.102 "Red Vital IP / TETRA"→"red móvil broadband ferroviaria (complemento TETRA)"; eliminado "ZR-Optics Compatible" residuo de Antigravity. Eliminados ítems vacíos 4.3.101 y 4.3.102 (cant=0, total=$0). **135 → 133 ítems**. Cache bumped a v=14.7.5. WBS_Presupuestal_v4_0_MICHELIN.md sincronizado. | turno actual |
| **Validación cruzada Ardanuy** (Bloque D abierto): comparación contra `LFC-U2-CTSC-ED-QTO-CO-0001` documentada en `precios_Adif_COMPLETO.md §5`. Total convergente al 3% pero composición divergente. Gaps identificados → DT-COMS-2026-008 propuesta. | turno actual |
| **Excel entregable v2 FINAL cerrado (Q2+Q4)**: Hoja 1 con columna USD@TRM real 3,637 + bloque EXPOSICIÓN CAMBIARIA citando Ardanuy ($66.4M @ ~3,800); Hoja 6 RFQ con ítem 2.1.116 baterías UPS 24h TETRA (Hoppecke/Saft/EnerSys/BYD); Hoja 1 C18 EUR/COP=4,796 con fórmula `=C16*C17`; formato condicional Ratificación/RFQ urgente en col E. Constante `TRM_REAL=3637` en Vista_Final. Validación 7/7 OK. **Archivo `Presupuesto_SCC_LFC2_2026-05-05 (4).xlsx` versionado en `X_ENTREGABLES_CONSOLIDADOS/`**. | `d55e653` |
| **Reporte Gerencial reescrito BCD-aligned**: 4 KPIs vivos desde `WBS_CORE.calcularAIUeIVA()` (COP, USD@4400, USD@3637, 133 ítems); tabla comparativa contractual (Estructuración Grupo Ortiz $73.66M / LFC $59.10M / Ardanuy $57.33M @ TRM 4400) + nota TRM 3800 implícita Ardanuy; 3 escenarios de ejecución (optimista 59M, esperado 59-71M, pesimista 80-110M); tabla resumen por capítulo viva; 5 riesgos contractuales BCD-aligned; supuestos doctrina vigente; disclaimer Interventoría AT1 Tabla 17. **Purgado**: bloque "ELIMINACIONES CRÍTICAS" (PRV/Cab-Signaling/Vital IP/Soberanía Tecnológica LFC), tabla "+$8B/+$3.5B/+$6B" sin trazabilidad, "Ahorro neto -$50.2B", "Complejidad FENOCO +$24B". | `4749554` |
| **Matriz de Riesgos actualizada (17→22 riesgos)**: purga contaminantes Antigravity ("Soberania PTC", "Vital IP Gateway", "pasarela Vital IP"); ID renombrado `R-PTC Nativo (FRA 49 CFR 236)-001`→`R-PTC-001`; R-INT-01 FENOCO bajado MEDIA→BAJA (Stop & Switch operativo, no integración técnica). **5 riesgos del momento agregados**: R-INT-V1-001 (CRÍTICA, no-objeción Interventoría AT1 Tabla 17), R-ARDANUY-PERF-001 (CRÍTICA, incumplimiento Ardanuy día 98/270, comunicación 00013-2026, plan: comité bisemanal + pre-radicación 15 días + carpeta evidencias), R-ARDANUY-FO-001 (ALTA, gap obra civil FO $70B), R-RFQ-001 (MEDIA, 8 ítems pendientes), R-TRM-001 (MEDIA, exposición cambiaria). KPI 4 "Impacto Máx" obsoleto → "Total Riesgos" en vivo. Borrada sección "Tendencias y Monitoreo" (flechitas hardcoded). Estadísticas: 5 críticos · 3 altos · 10 medios · 4 bajos. | `364648f` |

---

## 🟡 En curso / próxima sesión

### Bloque A — Presupuesto base con precios ADIF v1 ✅ CERRADO en commit pendiente
- [x] Auditar `precios_Adif_COMPLETO.md`: 4 extraídos (VEA010, CBB010, CCA040, CAC020) + 4 pendientes RFQ (F.O. 48h, contador ejes, armario PTC, UPS).
- [x] TRM 4400 + EUR/COP 4796 (factor 1.09 ECB) confirmados.
- [x] Cruzar ADIF vs WBS: 1.3.100-104 ENCE subdim 2.5x → fixed; 1.4.100 desvíos subdim 45% → fixed; 1.4.101 + 4.1.101 sobre-dim mantenidos como buffer.
- [x] DT-COMS-2026-007 redactada y aplicada (.js + .md sincronizados).
- [x] Notas RFQ pendientes documentadas en `precios_Adif_COMPLETO.md §4` (proveedores, fuentes, instrucciones para agente externo de búsqueda web).
- [x] **Búsqueda externa ejecutada (2026-05-23):** consulta directa al BPA ADIF (app v1.4.0, válida 19/02/2026) vía Claude-in-Chrome. Precios reales capturados con código paramétrico + URL para señalización, vía, núcleo CAC# completo, SAI y cables. Consolidado en `Precios_Base_ADIF_BPA_2026.md`. Quedan por RFQ formal los ítems sin partida ADIF (ver hoja "8.Validación ADIF" del entregable).

### Bloque D — Reconciliación contra presupuesto Ardanuy (DT-COMS-2026-008 propuesta)

> **Origen:** Validación cruzada del 2026-05-05 contra el documento del consultor `LFC-U2-CTSC-ED-QTO-CO-0001` (Ardanuy Colombia, abril 2026). Detalle completo en `IX_WBS_Planificacion/precios_Adif_COMPLETO.md §5`.

**Diagnóstico:** Total convergente al 3% (LFC $260B vs Ardanuy $252B COP), pero **composición interna divergente**. LFC subestima ~$41B COP (~$9.3M USD) en el costo directo si se compara contra Ardanuy CAPEX puro.

**Items para próxima DT (DT-COMS-2026-008):**

#### Subir (LFC subestima)
- [ ] **Cap 2.3 Obra Civil FO**: +$70B (LFC $52B vs Ardanuy $122B). Es el gap más material.
- [ ] **Crear capítulo nuevo "Diseño Plan Maestro Fase III"**: +$12B (no existe en LFC, Ardanuy lo separa explícitamente — práctica más defendible ante ANI).
- [x] ~~**ENCE Cap 1.3.100-104**: $2,000M → $3,825M/u~~ **DESCARTADO (2026-05-23)** tras bottom-up ADIF: el ítem 1.3.100-104 es solo el **controlador/núcleo** del ENCE, y el núcleo CAC real del BPA (€414K ≈ $1.987M COP) **confirma el $2.000M actual (+1%)**. Los $3.825M/$869k de Ardanuy son la estación completa (controlador + desvíos + señales + contadores), cuyo equipo de campo **ya está** en 1.4/1.5 — subir 1.3 a $3.825M sería **doble conteo**. Detalle en `WBS_Baseline_ENCE.html` y hoja "8.Validación ADIF". **No abrir DT-007 v2 para ENCE.**
- [ ] **Torres TETRA Cap 2.1.100**: 37 → 43 sitios + VU $40.9k → $73.1k USD/u.

#### Bajar (LFC sobreestima)
- [ ] **Cap 4.3 PaN básicos (122 unidades)**: revisar si entran al alcance del SCC. **BCD §8.2 sugiere que NO** (solo los 24 protegidos = 9 Tipo C + 15 Tipo B son alcance del sistema señalización). Si se excluyen: −$15.7B.
- [ ] **Cap 5 CCO software** (5.3.101 SCADA + 5.3.103 Interfaces): consolidar — Ardanuy reporta CTC+PTC+Videowall integrado en $7.5B, LFC tiene componentes separados $9.1B.
- [ ] **Cap 6 OBU**: revisar 15u × $238k vs Ardanuy 25u × $95k. Armonizar con DT-CTRL-2026-006 (flota tractiva).
- [ ] **Desvíos Cap 1.4 + 1.5**: revisar (LFC $36B vs Ardanuy $6.6B — gap muy grande, posible diferencia de criterio: Ardanuy modela 40 motores + 30 talonables, LFC tiene 25 motorizados + 120 manuales autotalonables).

**Riesgo principal:** Si Ardanuy cotiza correctamente la obra civil de FO, LFC en ejecución va a quedar corto en $70B.

**Oportunidad:** los $58B sobreestimados cubren parcialmente el gap. **Reasignar internamente sin tocar el total**: bajar PaN básicos / MR / desvíos, subir FO obra civil + agregar capítulo Diseño.

---

### Bloque E — Rescatar WBS Interactivo con generación de DT (regresión del Bloque C) ✅ E1-E5 CERRADOS en commit pendiente

> **Diagnóstico (2026-05-05):** En el Bloque C (commit `5cbe10f`) se convirtió `WBS_COMPLETA_TODO_Interactiva_v4.0.html` (624 líneas) a redirect `<meta refresh>` → Vista_Final por estar sirviendo Universo B (cifras pre-purga FENOCO). **Pero esa vista era la que daba al técnico la tabla por ítem + botón "Generar DT"** que Vista_Final NO replica. La consolidación fue prematura: se mató funcionalidad en lugar de migrarla. El gerente abre Vista_Final (resumen por capítulo + Excel), el técnico necesita la tabla cruda con generación de DT.

**Archivo a rescatar:** `IX_WBS_Planificacion/WBS_COMPLETA_TODO_Interactiva_v4.0.html` versión `5cbe10f~1` (commit `21d5afa` o anterior).

**Tareas:**
- [x] **E1** — Recuperado contenido pre-redirect (624 líneas, 13 menciones DT, 15 elementos tabla). Confirmado: 95% lógica dinámica desde dataset, único hardcode era `const TRM = 4400`.
- [x] **E2** — Dataset migrado Universo B → A. Mapeo aplicado: `codigo→item`, `vu_cop→vu`, `total_cop→total`, `window.datos_wbs.items→window.wbsDataPresupuestal`. Cap 1.1.103 muestra $11,000M (post-purga) en vivo.
- [x] **E3** — Imports actualizados: `wbs_presupuestal_datos.js?v=14.7.5` + `wbs_core_logic.js?v=14.7.5` + `lfc-terminology.js?v=14.7.5` + `sidebar-component.js?v=14.7.5`. TRM dinámica desde `WBS_CORE.getTRM()` con fallback a `LFC_TERMINOLOGY.FINANCIAL.TRM`.
- [x] **E4** — Flujo "Generar DT" enriquecido vs versión legacy: selector de **8 prefijos SICC** (COMS/CTRL/PAN/CCO/MR/ENRG/PMO/SICC) en lugar de ID hardcoded; placeholder pidiendo cita normativa (BCD §X · AT1 Tabla Y · ADIF · Ardanuy); cantidad y VU editables por separado con recálculo automático; **delta presupuestal** en COP+USD coloreado (rojo/verde); **plantilla DT exportable a markdown** copiable al portapapeles con secciones estándar (justificación, cambio en tabla, checklist de aplicación al WBS).
- [x] **E5** — HTML migrado reemplaza el redirect. Acceso vivo en URL original `/IX_WBS_Planificacion/WBS_COMPLETA_TODO_Interactiva_v4.0`.
- [x] **Mejoras adicionales aplicadas:** búsqueda por texto (item/descripción/tipo), pills por tipo (SUMINISTRO/OBRA/SERVICIO con colores), pill "RFQ pendiente" condicional, subtotal por capítulo en header, KPI "TOTAL COP" agregado al stats-bar.
- [x] **Routing fix (commits `3248702` + `d87a896`)**: `vercel.json` `/` → `index.html` (Sovereign Tower) en lugar de redirect duplicado. Atajos `/wbs`, `/vista`, `/reporte`, `/riesgos` agregados (sin `.html` por compat con `cleanUrls: true`). Index.html con 5 access cards (Vista Final + WBS Interactiva + Reporte + Riesgos + WBS Hub). Doble entrada visible desde la home.
- [x] **KPIs cuadran con Vista Final (commit `4a35a51`)**: 6 KPIs (Items · Capítulos · Costo Directo · AIU 33% · IVA 19% · **TOTAL PROYECTO** ⭐) usando `WBS_CORE.calcularAIUeIVA()`. Costo Directo $211,191M (suma cruda) ≠ Total Proyecto $260,009M (con AIU+IVA, coincide con Vista Final). Nota explicativa debajo de los KPIs.
- [x] **Bugfix WBS_CORE undefined (commit pendiente)**: en `f4ef73a` quedaron 2 referencias a `window.WBS_CORE` que era `undefined` (el motor expone `const WBS_CORE` global, no `window.WBS_CORE`). Síntoma: KPIs AIU/IVA/TOTAL=$0M, Costo Directo OK. Fix: `typeof WBS_CORE !== 'undefined'` en `getTRM()` y en llamada `cargarWBS().calcularAIUeIVA()`. Bonus: meta tags `Cache-Control: no-cache` para que browsers respeten reload del HTML (la URL del .html no tiene `?v=` para cache-bust).
- [x] **UX v2 + metadata enriquecida (commit `f4ef73a`)**:
  - Pill "📊 FILTRADO" rojo sobre TOTAL PROYECTO cuando hay search/cap activo (clickeable para limpiar).
  - Botón "🔄 Limpiar" filtros junto al search box.
  - Subtotal por sub-capítulo (COP+USD) en cada header.
  - Pill "RFQ pendiente" en 9 ítems desde lista hardcoded.
  - Selector prefijo SICC pre-seleccionado por capítulo (Cap 1→CTRL, 2→COMS, 3→SICC, 4→PAN, 5→CCO, 6→MR).
  - Toast no bloqueante reemplaza alert() al copiar al portapapeles.
  - Modal "PROPONER DT" muestra bloque "📚 CONTEXTO TÉCNICO" con metadata: justificación, criterios, supuestos, DTs previas, documentos.
  - **`wbs_metadata_enriquecida.js v1.0 → v2.0`**: expansión de 8 a 133 ítems. 8 originales preservados con su detalle. 125 generados con entrada mínima (descripción del .js + justificación esqueleto cap+tipo+VU + supuesto VU base + documentos por capítulo). 24 ítems con DTs vinculadas (DT-COMS-2026-007, DT-CTRL-2026-006, DT-SICC v14.7, renames Q2/Q3). 10 ítems con flag "🔴 RFQ pendiente" en supuestos.
- [ ] **E6** — Reescribir `WBS_Menu_Principal.html`: hero apunta al WBS Interactivo rescatado, Vista_Final pasa a card secundario. Borrar Brain Feed con insights ficticios. Limpiar pills "v4.0 PREMIUM/v6.0/B.R.A.I.N." Bumpear cache a v=14.7.5. Cifras vivas. **Pendiente próxima sesión.**
- [ ] **E8 — Visualizar DTs ya generadas en modal "PROPONER DT"** (pendiente abierto 2026-05-05): el HTML de la WBS Interactiva tiene el bloque condicional `${has('decisiones_tecnicas') ? ... : ''}` que debería renderizar las DTs vinculadas a cada ítem (24 ítems con DTs en `wbs_metadata_enriquecida.js v2.0`: ENCE→DT-COMS-2026-007, desvíos→DT-COMS-2026-007, fibra→DT-COMS-2026-007, locomotoras→DT-CTRL-2026-006, etc.). Reportado por Diego: el modal abre pero el bloque "DTs PREVIAS" no aparece o no muestra el detalle esperado. Hipótesis a investigar:
  - (a) Bug visual / CSS oculta el bloque
  - (b) Bug de renderización del array `decisiones_tecnicas` (formato esperado por `getMetadata` vs lo que devuelve el JSON)
  - (c) Caché del browser sirve la versión `f4ef73a` (con bug WBS_CORE) que rompía la cadena de funciones
  - (d) La metadata se carga pero la condición `has('decisiones_tecnicas')` falla por edge case (Array.isArray vs longitud)
  - **Próximo paso:** abrir DevTools en `/WBS_COMPLETA_TODO_Interactiva_v4.0` con un ítem que tenga DT (ej. 1.3.100 ENCE), inspeccionar `window.wbsMetadataEnriquecida.items['1.3.100'].decisiones_tecnicas`, validar que el array tiene los strings esperados, y revisar el HTML generado por `abrirModalDT`. Considerar también enriquecer la **vista de lista** (no solo el modal) con badge "🛡️ DT" en ítems con `decisiones_tecnicas.length > 0`, para que el técnico vea qué ítems ya tienen historia DT sin tener que abrir el modal.
- [x] **E7** — Redirects de `_v4_0.html` (duplicado), `Controles_L4.html` y `Presupuesto_SCC_APP_La_Dorada_Chiriguana.html` confirmados como redirect a Vista_Final (no tenían generación de DT).

**Lección aprendida:** antes de "consolidar" una vista frontend en favor de otra, auditar funcionalidad pieza a pieza, no solo data servida. La métrica "líneas de código" no captura "valor para el usuario". Bloque C consolidó por data servida; Bloque E corrige por funcionalidad rescatada.

### Bloque B — Flujo agente / enjambre y validación DT por ítem WBS
- [ ] Revisar pipeline `agente/architecture.md` FASE-0 a FASE-5 contra escenario real (Tridente NVIDIA NIM saturado, NVIDIA NIM down, Gemini 429).
- [ ] Definir contrato de salida del Auditor Forense por ítem WBS: qué campos obligatorios debe traer la DT generada (prefijo, items_wbs_afectados, fundamento L1-L5, validaciones).
- [ ] Implementar verificación cruzada bidireccional: DT → ítem WBS, ítem WBS → "origen DT-XXX-YYY".
- [ ] Probar end-to-end: ítem 1.4.100 (desvíos motorizados) → `/audit señalizacion` → DT generada → `/promote` → push.

### Bloque C — UI/UX consolidación frontend WBS (la entrega visual al gerente) ✅ CERRADO en commit `5cbe10f`

> **Diagnóstico (2026-05-05):** Hoy hay **4 URLs distintas** consumiendo data superpuesta y un usuario nuevo se pierde. El gerente solo va a mirar el Excel. Lo que importa: **Excel completo y bien ordenado** + **una sola entrada al sistema**. — **RESUELTO**.

**Estado actual:**
| URL Vercel | Archivo | Universo | Estado |
|---|---|---|---|
| `/IX_WBS_Planificacion/WBS_Vista_Final` | `WBS_Vista_Final.html` (321 líneas) | A saneado | ⭐ Vista de entrega — sidebar OK, botón Menú OK |
| `/IX_WBS_Planificacion/WBS_Presupuesto_SCC_APP_La_Dorada_Chiriguana` | (854 líneas) | A | Probable redundante con Vista_Final — auditar y decidir fusión |
| `/IX_WBS_Planificacion/WBS_COMPLETA_TODO_Interactiva_v4.0` | (universo B legacy) | B | Cifras pre-purga FENOCO — sidebar ya redirige, pero URL pública sigue activa |
| `/IX_WBS_Planificacion/WBS_Controles_Operativos_L4` | (157 líneas) | A | 4 botones (Desglose AIU · Acta de Obra · Validación Cap.4 · Zero-Residue). 🐛 Bug: botón "Acta → Excel" llama `exportarActaExcel()` que NO existe en `wbs_core_logic.js` (solo `exportarDesgloseExcel`). |

**Pendientes:**

- [x] **C1 — Index → entrada única.** Primer access-card del index ahora apunta a `WBS_Vista_Final.html` con label "⭐ Presupuesto SCC — Vista Final". El hub `WBS_Menu_Principal` queda como segunda card "WBS Hub (navegación detallada)".
- [x] **C2 — Excel mejorado.** Vista Final descarga 7 hojas: 1.Total General · 2.Por Capítulo · 3.Detalle Ítems (estilo Costo_proyecto.xlsx — TRM en M1, fórmulas A1 con `$M$1`) · 4.Obra vs Compras · 5.AIU Desglose · 6.Pendientes RFQ · 7.Fuentes y Notas. Cambio TRM en M1 propaga a todo el archivo.
- [x] **C3 — Bug `exportarActaExcel`.** Eliminado: el export Acta ahora vive como Hoja 4 del Excel consolidado de Vista Final. No depende más de la función fantasma.
- [x] **C4 — L4 dentro de Vista_Final.** Barra de acciones secundaria con 5 botones modales: 💰 Desglose AIU · 📝 Acta de Obra · ⚠️ Validación Cap. 4 · 🧮 Zero-Residue · 📋 Pendientes RFQ.
- [x] **C5 — Universo B deprecado.** `WBS_COMPLETA_TODO_Interactiva_v4.0.html` y `_v4_0.html` reemplazados por redirects HTML (meta refresh 2s + mensaje + botón) que apuntan a `WBS_Vista_Final.html`. El `index.html` ya no carga `datos_wbs_TODOS_items.js`; ahora carga `wbs_presupuestal_datos.js` para `count-items`.
- [x] **C6 — `WBS_Presupuesto_SCC_APP_La_Dorada_Chiriguana.html`** convertido a redirect a Vista Final (era redundante de 854 líneas sin funcionalidad distintiva auditada).
- [x] **C7 — Estilo visual mantenido**: Inter font, header azul `#1e3c72`, accent gold, sidebar dinámica, cards glass en resumen.

> **Pendiente menor:** TableStyleLight15 nativo + referencias estructuradas `Tabla2[[#This Row],...]` requieren SheetJS Pro. Solución actual: el usuario abre el Excel y presiona `Ctrl+T` sobre `A2:J<N>` — Excel convierte a tabla con bandas y las fórmulas A1 con `$M$1` ya están listas (cambiar TRM en M1 propaga al archivo entero). Documentado en Hoja 7.

---

## 🔴 Deuda activa (orden de severidad)

### Crítica (bloquea coherencia BCD)

| # | Item | Acción |
|---|---|---|
| D0 | **Falta YAML EJECUTABLE en DTs del Enjambre:** Las DTs generadas por el agente (ej. `DT-ENRG-2026-001`) omiten la Sección 10 requerida por la metodología `.42`. Sin el YAML, las DTs quedan aisladas y el comando `/promote` no puede propagar cambios al WBS ni a los HTML. Cruzado con `agente/brain/ROADMAP.md`. | Ajustar prompt del Auditor Forense (en el Agente) para forzar la emisión estricta de la Sección 10 YAML. |
| D1 | **`agente/architecture.md` desalineado con BCD v001:** línea 22 "fibra 64 hilos" (BCD: 48), línea 25 "eliminada UPS 24h TETRA" (BCD §10.5: 24-48h), línea 39 blacklist "Stop & Switch" (BCD §9.2 lo manda). | Sanear el agente. Si no, falla `/audit` contra el propio contrato. |
| D1.5 | **`II_A_Analisis_Contractual/dictamenes/` vaciado el 2026-05-08** (commit `d23dd82`): los 57 archivos eran producto v8 pre-purga del agente vía `/promote` durante pruebas tempranas (terminología "Red Vital IP", "Bus Vital 110V DC", "PTC Virtual (SICC) L2", "Soberano/Sovereign", "[REDACTADO_SICC]", "DT-SICC-V8-*", cifras "CAPEX Protegido $X M USD" sin trazabilidad). El directorio queda con un `README.md` placeholder. Histórico forense conservado en `agente/brain/dictamenes/`. | **Plan de regeneración detallado en `agente/brain/ROADMAP.md` sección "🟢 PLAN PENDIENTE — Regeneración de DTs en LFC2 (post-D1 + D0)"** (5 pasos: cerrar D1+D0+D3 → `/audit` por especialidad → `/promote` → reescribir `dictamenes/index.html` corporativo → restaurar al sidebar gerencial). Cuando se ejecute, mover este ítem a "Cerrado". |
| D2 | **Re-ingesta `contrato_documentos`** en pgvector con BCD v001 como L4 vinculante. | `docker exec sicc-postgres ...` (no disparar sin Vo.Bo. del director técnico) |
| D3 | **Universo B (`datos_wbs_TODOS_items.js`)** servido en Vercel con cifras pre-purga FENOCO. Sidebar reapuntada (D5 cerrado), pero las 3 vistas que lo consumen (`WBS_COMPLETA_TODO_Interactiva_v4.0`, `WBS_COMPLETA_TODO_Interactiva_v4_0`, `WBS_EDT_Detalle`) siguen sirviendo cifras desactualizadas. | Migrar las 3 al schema A (mapping `codigo→item`, `vu_cop→vu`, `total_cop→total`) o dropear duplicado. |

### Media (deuda técnica documental)

| # | Item | Acción |
|---|---|---|
| D4 | **Duplicación ID DT-015**: existen 2 archivos con mismo ID y contenido distinto (`DT-SICC-2026-015.md` energía LiFePO4 + `DT-SICC-2026-015_Blindaje_Fibra_Backbone.md` fibra G.652.D). | Renombrar el de energía a `DT-ENRG-2026-XXX_Saneamiento_LiFePO4.md` (prefijo canónico ENRG). Verificar que ningún YAML de otra DT lo referencie por ID. |
| D5 | **Direccionalidad sync**: `lfc-cli sync` regenera `.js` desde `.md`. Si el `.md` está incompleto, **destruye el dataset** (caso 2026-05-05: 135→30 ítems). | Invertir flujo: `.js` es SSoT, `.md` se deriva. O agregar guardia: si `count(items)` post-sync < pre-sync, abortar. |
| D6 | **Excel hoja 4 de `WBS_Vista_Final`** dice hardcoded "133 ítems". | Parametrizar a `data.length`. |
| ~~D7~~ | ~~**TRM real "3,637" hardcoded** en 3 lugares de `WBS_Vista_Final.html`~~. | ✅ Cerrado en `d55e653`: constante `TRM_REAL=3637` declarada arriba del bloque de export. |
| D8 | **Energía por bloque en WBS Cap 1/2:** el `.md` no detalla UPS 4h (PTC/CCO/PaN) vs 24-48h (TETRA) por subcap. | Anotar en notas de subcap; no urgente para entrega. |
| D9 | **WBS Cap 1.4 (25 desvíos motorizados)**: el BCD dice "cambiavías motorizados gobernados por enclavamiento en zonas operativas". 25 / 5 ENCE = 5 motorizados por estación. Verificar contra planos AT1. | RFQ + cruce planos. |

### Baja (cosmético / depuración)

| # | Item | Acción |
|---|---|---|
| D10 | **9 archivos** todavía contienen "Karpathy" residual pese al commit `d1d7fd8`: `README.md.legacy` (OK, es backup), `VII_Soporte_Especializado/VII.2_*.md` (7 archivos), `scripts/lfc-daemon.js`. | Re-purga selectiva. |
| D11 | **`wbs_presupuestal_datos.js` encabezado** dice "v6.3" desde el sync de Antigravity 2026-05-05. Debería decir v14.7. | Ajustar header al regenerar. |

---

## 📦 Backlog (futuras fases — no urgente)

- Cronograma dinámico: `cronograma_datos.json` + `WBS_Cronograma_Propuesta.html` parseando JSON en vez de hardcoded.
- Riesgos vinculados: `riesgos_wbs.json` con `items_afectados` por ítem WBS.
- Reporte gerencial en tiempo real (polling `?t=Date.now()`).
- Sync Excel ↔ Sistema bidireccional.
- File watcher para auto-sincronización.
- Migración completa Universo B → A (eliminar legacy).

---

## 🧭 Cómo seguir esta bitácora

1. Cada sesión empieza con `git log --oneline -5` + leer `LEEME_PRIMERO.md`.
2. Antes de tocar el WBS, leer **§3 Criterios Maestros** de `SICC_METHODOLOGY_42.md`.
3. Si el agente externo (Antigravity/Telegram) reporta una acción, **verificar** con `git log`, `grep`, `wc -l`. Patrón histórico: tiende a sobre-vender.
4. Cerrar ítems en orden de severidad (Crítica → Media → Baja). No saltar.
5. Cuando se cierra un ítem, mover de "🟡 En curso" a "✅ Cerrado" con commit hash.

---

**Sello:** "Lo que no está en L1–L6, no existe en la ingeniería."
