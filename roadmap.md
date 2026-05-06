# 🗺️ ROADMAP — LFC2 (UF2 La Dorada–Chiriguaná)

**Última actualización:** 5 de Mayo de 2026
**Hito vigente:** entrega presupuesto ANI 2026-05-05 · tag `entrega-presupuesto-2026-05-05` · commit `2598bb8` (barrido BCD v001)

> Bitácora viva. Cada sesión actualiza esta página: cierra ítems hechos, agrega hallazgos nuevos, mueve los que pasan a deuda profunda hacia "Backlog".

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
- [ ] **Próximo:** ejecutar búsqueda web por agente externo (NotebookLM o equivalente) sobre los 8 ítems pendientes RFQ.

### Bloque D — Reconciliación contra presupuesto Ardanuy (DT-COMS-2026-008 propuesta)

> **Origen:** Validación cruzada del 2026-05-05 contra el documento del consultor `LFC-U2-CTSC-ED-QTO-CO-0001` (Ardanuy Colombia, abril 2026). Detalle completo en `IX_WBS_Planificacion/precios_Adif_COMPLETO.md §5`.

**Diagnóstico:** Total convergente al 3% (LFC $260B vs Ardanuy $252B COP), pero **composición interna divergente**. LFC subestima ~$41B COP (~$9.3M USD) en el costo directo si se compara contra Ardanuy CAPEX puro.

**Items para próxima DT (DT-COMS-2026-008):**

#### Subir (LFC subestima)
- [ ] **Cap 2.3 Obra Civil FO**: +$70B (LFC $52B vs Ardanuy $122B). Es el gap más material.
- [ ] **Crear capítulo nuevo "Diseño Plan Maestro Fase III"**: +$12B (no existe en LFC, Ardanuy lo separa explícitamente — práctica más defendible ante ANI).
- [ ] **ENCE Cap 1.3.100-104**: $2,000M → $3,825M/u (DT-COMS-2026-007 v2 — alinear a Conceptual LFC + Ardanuy convergentes en $869k USD/u).
- [ ] **Torres TETRA Cap 2.1.100**: 37 → 43 sitios + VU $40.9k → $73.1k USD/u.

#### Bajar (LFC sobreestima)
- [ ] **Cap 4.3 PaN básicos (122 unidades)**: revisar si entran al alcance del SCC. **BCD §8.2 sugiere que NO** (solo los 24 protegidos = 9 Tipo C + 15 Tipo B son alcance del sistema señalización). Si se excluyen: −$15.7B.
- [ ] **Cap 5 CCO software** (5.3.101 SCADA + 5.3.103 Interfaces): consolidar — Ardanuy reporta CTC+PTC+Videowall integrado en $7.5B, LFC tiene componentes separados $9.1B.
- [ ] **Cap 6 OBU**: revisar 15u × $238k vs Ardanuy 25u × $95k. Armonizar con DT-CTRL-2026-006 (flota tractiva).
- [ ] **Desvíos Cap 1.4 + 1.5**: revisar (LFC $36B vs Ardanuy $6.6B — gap muy grande, posible diferencia de criterio: Ardanuy modela 40 motores + 30 talonables, LFC tiene 25 motorizados + 120 manuales autotalonables).

**Riesgo principal:** Si Ardanuy cotiza correctamente la obra civil de FO, LFC en ejecución va a quedar corto en $70B.

**Oportunidad:** los $58B sobreestimados cubren parcialmente el gap. **Reasignar internamente sin tocar el total**: bajar PaN básicos / MR / desvíos, subir FO obra civil + agregar capítulo Diseño.

---

### Bloque E — Rescatar WBS Interactivo con generación de DT (regresión del Bloque C)

> **Diagnóstico (2026-05-05):** En el Bloque C (commit `5cbe10f`) se convirtió `WBS_COMPLETA_TODO_Interactiva_v4.0.html` (624 líneas) a redirect `<meta refresh>` → Vista_Final por estar sirviendo Universo B (cifras pre-purga FENOCO). **Pero esa vista era la que daba al técnico la tabla por ítem + botón "Generar DT"** que Vista_Final NO replica. La consolidación fue prematura: se mató funcionalidad en lugar de migrarla. El gerente abre Vista_Final (resumen por capítulo + Excel), el técnico necesita la tabla cruda con generación de DT.

**Archivo a rescatar:** `IX_WBS_Planificacion/WBS_COMPLETA_TODO_Interactiva_v4.0.html` versión `5cbe10f~1` (commit `21d5afa` o anterior).

**Tareas:**
- [ ] **E1** — Recuperar contenido pre-redirect desde git: `git show 5cbe10f~1:IX_WBS_Planificacion/WBS_COMPLETA_TODO_Interactiva_v4.0.html`.
- [ ] **E2** — Migrar dataset de **Universo B** (`datos_wbs_TODOS_items.js`, schema `codigo/vu_cop/total_cop`, 124 ítems pre-purga) a **Universo A** (`wbs_presupuestal_datos.js`, schema `item/vu/total`, 133 ítems post Q2/Q3). Mapeo:
  - `codigo` → `item`
  - `vu_cop` → `vu`
  - `total_cop` → `total`
  - `descripcion` (ya cuadra)
  - Cap 1.1.103 = $11,000M (post-purga FENOCO Sec 25.4) en lugar de $63,112M legacy.
- [ ] **E3** — Reapuntar imports a `wbs_presupuestal_datos.js?v=14.7.5` y `wbs_core_logic.js?v=14.7.5`. Cambiar `window.datos_wbs.items` → `window.wbsDataPresupuestal`.
- [ ] **E4** — Auditar el flujo "Generar DT" (botones onclick, prefijos, plantilla DT generada). Validar que el output sea compatible con la convención SICC v14.7 (ID `DT-XXX-2026-NNN`, items_wbs_afectados, fundamento L1-L5).
- [ ] **E5** — Reemplazar el redirect actual por el HTML migrado. Mantener acceso vía `WBS_COMPLETA_TODO_Interactiva_v4.0.html` (URL ya conocida y linkeada externamente).
- [ ] **E6** — Reescribir `WBS_Menu_Principal.html`: hero apunta al WBS Interactivo rescatado (es lo que el técnico abre), Vista_Final pasa a card secundario "Resumen ejecutivo gerencial". Borrar Brain Feed con insights ficticios. Limpiar pills "v4.0 PREMIUM/v6.0/B.R.A.I.N." Bumpear cache a v=14.7.5. Cifras vivas (133 ítems, 22 riesgos).
- [ ] **E7** — Cerrar redirects de `_v4_0.html` (duplicado), `Controles_L4.html` y `Presupuesto_SCC_APP_La_Dorada_Chiriguana.html` — esos sí pueden seguir como redirect a Vista_Final, no tenían generación de DT.

**Lección aprendida:** antes de "consolidar" una vista frontend en favor de otra, auditar funcionalidad pieza a pieza, no solo data servida. La métrica "líneas de código" no captura "valor para el usuario".

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
| D1 | **`agente/architecture.md` desalineado con BCD v001:** línea 22 "fibra 64 hilos" (BCD: 48), línea 25 "eliminada UPS 24h TETRA" (BCD §10.5: 24-48h), línea 39 blacklist "Stop & Switch" (BCD §9.2 lo manda). | Sanear el agente. Si no, falla `/audit` contra el propio contrato. |
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
