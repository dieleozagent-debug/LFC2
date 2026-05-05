# 🎯 LÉEME PRIMERO — Sistema LFC2 v14.7 (BCD-aligned)

**Última actualización:** 5 de Mayo de 2026 (post-cirugía BCD v001)
**Hito vigente:** commit `2598bb8` · tag `entrega-presupuesto-2026-05-05`
**Estado:** ✅ Frontend WBS unificado · Doctrina alineada a BCD v001 · Pipeline `lfc-cli promote` operativo

---

## ⚡ Inicio rápido

### 1. Vista de entrega (la que importa para ANI)
```
IX_WBS_Planificacion/WBS_Vista_Final.html
```
135 ítems · AIU 33% + IVA 19% en vivo · Excel descargable (4 hojas) · TRM Risk 4400.
URL pública: `https://lfc-2.vercel.app/IX_WBS_Planificacion/WBS_Vista_Final`

### 2. Hub de navegación
```
IX_WBS_Planificacion/WBS_Menu_Principal.html
```
"WBS Interactiva" y "Detalle Presupuestal" → Vista Final · Acceso a `precios_Adif_COMPLETO.md`.

### 3. Pipeline único: `lfc-cli promote`
```bash
node scripts/lfc-cli.js promote
```
Ejecuta: `process-dts → sync → cook → serve`. Es el gatillo SICC v14.7.

⚠️ **Conocido:** `sync` actualmente regenera `wbs_presupuestal_datos.js` desde `WBS_Presupuestal_v2_0.md`. Si el `.md` está incompleto, **se pierden ítems** (regresión 135 → 30 reportada el 2026-05-05). Hasta arreglar la dirección del flujo, **el SSoT del dataset es el `.js`**, no el `.md`.

---

## 📚 Documentos clave (raíz)

| Documento | Propósito |
|---|---|
| `README.md` | Manifesto + criterios maestros derivados de BCD v001 |
| `architectureLFC.md` | Arquitectura del sistema · jerarquía L1-L8 · mapa dos universos · flujo DT |
| `SICC_METHODOLOGY_42.md` | **Metodología .42 unificada** (jerarquía verdad, prefijos DT, workflow agente, deuda doctrinal) |
| `IV_Ingenieria_basica/BCD_SCC_v001_2026-04.md` | **SSoT técnica vinculante** (Ardanuy, abril 2026) |
| `IX_WBS_Planificacion/wbs_presupuestal_datos.js` | Dataset presupuestal certificado (135 ítems) |

---

## 🏛️ Jerarquía de verdad (L1-L8)

```
L1  Contrato APP 001/2025
L2  Apéndices Técnicos (AT1, AT3, ...)
L3  BCD_SCC_v001_2026-04.md  ← SSoT técnica
L4  SICC_METHODOLOGY_42.md   ← metodología
L5  lfc-terminology.js       ← criterios + restricciones
L6  DT aprobadas (II_Apendices_Tecnicos/Decisiones_Tecnicas/)
L7  wbs_presupuestal_datos.js ← dataset presupuestal
L8  WBS_Vista_Final.html (Vercel) ← plato servido
```
Lo que no está en L1–L6, no existe en la ingeniería.

---

## 🎯 Criterios maestros (BCD v001)

| Criterio | Valor |
|---|---|
| Trocha | **914 mm** |
| Corredor | 526.133 km · PK 201+470 → 722+683 |
| Filosofía PTC | Cantonamiento virtual + 5 ENCE físicos |
| 5 ENCE | La Dorada–México, Pto Berrío–Grecia, Barrancabermeja, García Cadena, Zapatosa |
| Pasos a Nivel | **24 protegidos** (9 Tipo C + 15 Tipo B) |
| Fibra óptica | **48 hilos G.652.D** soterrada |
| FENOCO | **Stop & Switch operacional** (NO integración técnica) |
| TRM Risk | 4,400 COP/USD |

Detalle completo: `SICC_METHODOLOGY_42.md` §3 + `architectureLFC.md`.

---

## 🔴 Deuda activa (qué hay que cerrar)

| # | Item | Severidad |
|---|---|---|
| 1 | **DT-SICC-2026-015** (fibra 48h→64h) contradice BCD §6.1.1. Matar o reescribir post-BCD. | 🔴 |
| 2 | **`agente/architecture.md`** desalineado: línea 22 fibra 64h, línea 25 "eliminada UPS 24h TETRA". | 🔴 |
| 3 | **WBS Cap 4.2.100** descripción "barreras manuales" — BCD §8.2.1 dice Tipo B = **Señales Luminosas y Acústicas (SLA)**, NO barreras. Reconciliar precio + descripción. | 🟡 |
| 4 | **Locomotoras nº exacto** (15 actual = post-DT). Verificar AT1 Cap 5.1 + DT formal. | 🟡 |
| 5 | **Universo B** (`datos_wbs_TODOS_items.js`) servido con cifras pre-purga FENOCO. Migrar a A o dropear. | 🟡 |
| 6 | **Re-ingesta `contrato_documentos`** en agente con BCD v001. | 🟡 |
| 7 | **Excel hoja 4** hardcoded "133 ítems" en Vista_Final. | 🟢 |
| 8 | **Direccionalidad sync**: `.md` ↔ `.js` debe ir `.js → .md`, no al revés. | 🟢 |

---

## 🤖 Agente externo (repo separado)

`/home/administrador/docker/agente/` valida la ingeniería LFC2 vía:
- **Tridente NVIDIA NIM:** DeepSeek-v4-pro (Auditor) + Nemotron-3-super (Legal) + Llama 3.3 70B (Coordinador)
- **Oracle MCP NotebookLM** (`localhost:3001`): 108 fuentes Contrato/Ardanuy
- **pgvector** (`sicc-postgres:5432`): 10,358 fragmentos del Contrato

Comandos vía Telegram: `/audit [área]`, `/promote [DT-ID]`.

Doctrina del agente: `/home/administrador/docker/agente/architecture.md` (sanear contra BCD v001 — ver deuda #2).

---

## 📞 Cómo retomar una sesión nueva

1. Leer este archivo (`LEEME_PRIMERO.md`).
2. Ojear `SICC_METHODOLOGY_42.md` (jerarquía L1-L8 + prefijos DT + reglas de oro).
3. Verificar git: `git log --oneline -5` y `git status`.
4. Confirmar que la entrega Vista_Final sigue mostrando 135 ítems: `grep -c '"item":' IX_WBS_Planificacion/wbs_presupuestal_datos.js`.
5. Atacar la deuda activa por orden de severidad.

**Patrón de verificación:** si el agente externo (Antigravity/Telegram) reporta haber hecho algo, **siempre verificar** con `git log`, `grep`, `wc -l`, `ls`. Patrón histórico: tiende a sobre-vender resultados.
