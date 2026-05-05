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

---

## 🟡 En curso / próxima sesión

### Bloque A — Presupuesto base con precios ADIF v1
- [ ] Auditar `precios_Adif.md` y `precios_Adif_COMPLETO.md`: ¿qué referencias ADIF están convertidas a TRM 4400 + EUR/COP 4360? ¿cuáles siguen pendientes?
- [ ] Cruzar precios ADIF (VEA010 desvíos, CBB010 motores, CCA040 señales LED, CAC020 enclavamientos) contra ítems WBS Cap 1.3, 1.4 y 4.
- [ ] Validar el ajuste de trocha: BCD dice **914 mm** (yarda), ADIF es **1,435 mm** (UIC). Aplicar factor +15-25% donde aplique (ya documentado en SICC_METHODOLOGY_42 §3).
- [ ] Documentar fuentes RFQ pendientes: Hima Colombia, Siemens Mobility Bogotá, Furukawa Brasil, Corning LATAM, Prysmian.

### Bloque B — Flujo agente / enjambre y validación DT por ítem WBS
- [ ] Revisar pipeline `agente/architecture.md` FASE-0 a FASE-5 contra escenario real (Tridente NVIDIA NIM saturado, NVIDIA NIM down, Gemini 429).
- [ ] Definir contrato de salida del Auditor Forense por ítem WBS: qué campos obligatorios debe traer la DT generada (prefijo, items_wbs_afectados, fundamento L1-L5, validaciones).
- [ ] Implementar verificación cruzada bidireccional: DT → ítem WBS, ítem WBS → "origen DT-XXX-YYY".
- [ ] Probar end-to-end: ítem 1.4.100 (desvíos motorizados) → `/audit señalizacion` → DT generada → `/promote` → push.

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
| D7 | **TRM real "3,637" hardcoded** en 3 lugares de `WBS_Vista_Final.html`. | Definir constante o leer de `lfc-terminology.js`. |
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
