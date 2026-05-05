# 🏗️ ARQUITECTURA DEL SISTEMA — LFC2 (UF2 La Dorada–Chiriguaná)
**Proyecto:** Corredor Férreo La Dorada–Chiriguaná · Contrato APP No. 001 de 2025
**Última actualización:** 5 de Mayo de 2026 (post-cirugía BCD v001)
**Versión:** 14.7 (SICC Unified Edition)

---

## 🏛️ JERARQUÍA DE VERDAD TÉCNICA (SSoT)

Desde 2026-05-05, la arquitectura se rige por el **BCD v001 (Ardanuy, abril 2026)**. Cualquier documento que contradiga esta jerarquía se considera **LEGACY/OBSOLETO** y debe ir a `_legacy/`.

| Nivel | Documento | Rol |
|---|---|---|
| **L1** | Contrato APP 001/2025 | Base legal suprema |
| **L2** | Apéndices Técnicos AT1, AT3, AT5… | Requerimientos funcionales ANI |
| **L3** | `IV_Ingenieria_basica/BCD_SCC_v001_2026-04.md` | **SSoT técnica vinculante** |
| **L4** | `SICC_METHODOLOGY_42.md` (raíz) | Metodología unificada del enjambre |
| **L5** | `IX_WBS_Planificacion/lfc-terminology.js` | Diccionario de constantes y restricciones |
| **L6** | DT aprobadas en `II_Apendices_Tecnicos/Decisiones_Tecnicas/` | Modificaciones formales sobre BCD |
| **L7** | `IX_WBS_Planificacion/wbs_presupuestal_datos.js` | Dataset presupuestal certificado |
| **L8** | `WBS_Vista_Final.html` + Vercel | Plato servido al cliente |

**Regla de desempate normativo (AT3 Cap. I literal c):** AREMA > FRA > AAR > UIC.

---

## 🎯 CRITERIOS MAESTROS VINCULANTES (BCD v001)

| Sistema | Valor | Fuente |
|---|---|---|
| **Trocha** | **914 mm** (yarda) | BCD §1.2 |
| **Corredor** | 526.133 km · PK 201+470 → 722+683 · vía única, carga | BCD §3.2 |
| **PTC** | Cantonamiento virtual + 5 ENCE físicos · FRA 49 CFR Part 236 Subpart I (2026) | BCD §4.1 |
| **5 ENCE** | La Dorada–México · Pto Berrío–Grecia · Barrancabermeja · García Cadena · Zapatosa | BCD §4.1 (Tabla 17 AT1) |
| **Pasos a Nivel** | **24 protegidos** (9 Tipo C + 15 Tipo B). 122 restantes fuera de alcance | BCD §8.2 |
| **Fibra óptica** | **48 hilos G.652.D**, soterrada, homogénea | BCD §6.1.1 |
| **TETRA** | Cobertura 100% AT1 · nº torres por simulación RF | BCD §6.2 |
| **Redundancia comms** | Satelital LEO/GEO · EN 50159 Cat 3 + FRA §236.1033 | BCD §6.2.3 |
| **CCO** | Principal La Dorada · failover Barrancabermeja · UPS 4h · HA | BCD §7 |
| **Interoperabilidad FENOCO** | **Stop & Switch operacional** · NO integración técnica/lógica | BCD §9.2 |
| **Energía señalización/PTC/CCO/PaN** | UPS 4 h · 110V DC | BCD §10.1–10.4 |
| **Energía TETRA** | UPS **24-48 h** · 48V DC | BCD §10.5 |
| **TRM Risk** | 4,400 COP/USD (techo cobertura cambiaria) | SICC v14.7 |

**Mandatos de Soberanía (Anti-Scope Creep):**
- SIL-4 solo al OBC PTC. Sistemas COTS (módems, routers LTE, SD-WAN) operan SIL-2 + EN 50159 Cat 3.
- CCO failover Barrancabermeja obligatorio (no SPOF en La Dorada).
- PTC embarcado solo a tractivo. Material remolcado: puesta a punto general sin hardware redundante.

---

## 🗺️ MAPA DE DEPENDENCIAS WBS — FRONTEND VERCEL

> **Leer ANTES de tocar cualquier `.html`/`.js` en `IX_WBS_Planificacion/`.** Coexisten **dos universos de datos paralelos** con schemas distintos.

### Capas

```
┌─ Capa 0: Cosmética / UI compartida ──────────────────────────────┐
│  sidebar-component.js   → ADN visual + nav. Lee window.LFC_TERMINOLOGY. │
│  lfc-terminology.js     → window.LFC_TERMINOLOGY (TRM=4400, criterios   │
│                            maestros). Lo carga TODO HTML del folder.    │
└──────────────────────────────────────────────────────────────────┘

┌─ Capa 1: DATOS — DOS DATASETS PARALELOS, NO COMPATIBLES ─────────┐
│                                                                   │
│  A) wbs_presupuestal_datos.js  — SANEADO v14.7 (entrega 05-05)   │
│     window.wbsDataPresupuestal = [{item, vu, total, tipo, ...}]  │
│     135 ítems · 1.1.103 = $11,000M (post-purga FENOCO Sec 25.4)  │
│     ✅ ALINEADO con BCD v001                                      │
│                                                                   │
│  B) datos_wbs_TODOS_items.js   — LEGACY v7.0 Michelin (abril)    │
│     window.datos_wbs = {trm_aplicada:4000, items:[{codigo,        │
│                          vu_cop, total_cop, ...}]}                │
│     1.1.103 = $63,112M (PRE-purga FENOCO)  ⚠️ DESACTUALIZADO     │
│                                                                   │
│  Datasets auxiliares (un solo consumidor):                        │
│  · cronograma_datos.js         → WBS_Cronograma_Propuesta         │
│  · riesgos_wbs.js              → WBS_Analisis_Riesgos             │
│  · reporte_gerencial_data.js   → WBS_Reporte_Gerencial            │
│  · wbs_metadata_enriquecida.js → metadata extra para B            │
└──────────────────────────────────────────────────────────────────┘

┌─ Capa 2: MOTOR (solo universo A) ────────────────────────────────┐
│  wbs_core_logic.js → WBS_CORE.{getTRM, calcularAIUeIVA,          │
│                                getNombresCapitulos, parseNumber} │
│  Lee TRM desde window.LFC_TERMINOLOGY.FINANCIAL.TRM.             │
│  AIU = 33% sobre Obra Civil (23+5+5). IVA = 19%.                 │
│  Universo B NO usa este motor; hardcodea `const TRM = 4400`.     │
└──────────────────────────────────────────────────────────────────┘
```

### Capa 3: Vistas HTML — qué dataset consume cada una

| HTML | Dataset | Motor | Notas |
|---|---|---|---|
| `WBS_Vista_Final.html` | **A** saneado | `wbs_core_logic` | ⭐ Vista de entrega ANI 2026-05-05 |
| `WBS_Presupuesto_SCC_APP_La_Dorada_Chiriguana.html` | **A** | `wbs_core_logic` | Presupuesto extendido |
| `WBS_Cronograma_Propuesta.html` | **A** + `cronograma_datos.js` | — | Gantt |
| `WBS_Controles_Operativos_L4.html` | **A** | `wbs_core_logic` | L4 ops |
| `WBS_COMPLETA_TODO_Interactiva_v4.0.html` | **B** legacy | TRM hardcoded | ⚠️ Linkeado por sidebar |
| `WBS_COMPLETA_TODO_Interactiva_v4_0.html` | **B** | hardcoded | Duplicado idéntico |
| `WBS_EDT_Detalle.html` | **B** + `wbs_metadata_enriquecida.js` | — | EDT por ítem |
| `WBS_Analisis_Riesgos.html` | `riesgos_wbs.js` | — | Riesgos |
| `WBS_Reporte_Gerencial.html` | `reporte_gerencial_data.js` | — | Reporte L1 |
| `WBS_Menu_Principal.html` | (solo UI) | — | Hub |

### 🚨 La trampa heredada de la sesión 2026-05-04

`sidebar-component.js:20` linkea **"🚀 WBS Interactiva"** → `WBS_COMPLETA_TODO_Interactiva_v4.0.html` (universo **B**, legacy). Un evaluador que entre desde el home y haga click ahí verá el ítem **1.1.103 con valor pre-purga ($63,112M)**, contradiciendo `Vista_Final` ($11,000M conciliados). La purga FENOCO Sec 25.4 se aplicó solo en universo A; el universo B quedó congelado en abril.

**Reglas operativas para futuras sesiones:**
1. Antes de modificar cifras del WBS, identificar a cuál universo pertenece el archivo. Tocar uno sin el otro = desincronización.
2. La línea base certificada es **A** (`wbs_presupuestal_datos.js`). Motor canónico: `wbs_core_logic.js`. TRM canónica: `lfc-terminology.js:98` (`TRM: 4400`).
3. Universo B (`datos_wbs_TODOS_items.js`) está obsoleto pero servido. Plan: migrar `WBS_COMPLETA_TODO_Interactiva_*.html` a A (mapping `codigo→item`, `vu_cop→vu`, `total_cop→total`) y eliminar B.
4. Mientras B exista, la sidebar debe apuntar a `WBS_Vista_Final.html` para no exponer cifras pre-purga.

---

## 🔄 FLUJO DT → SISTEMA (Pipeline ideal)

```
ESPECIALISTA → DT v4.2 (II_Apendices_Tecnicos/Decisiones_Tecnicas/DT-XXX-YYY-FECHA.md)
                con bloque YAML ejecutable (Sección 10)
        ↓
AGENTE SICC (Swarm) — `/audit [área]` — verifica DT contra BCD v001 + Contrato vía MCP NotebookLM
        ↓
JUEZ (consenso doble-ciego Tridente NVIDIA NIM)
   ├─ APROBADO → brain/dictamenes/ + /promote → push a LFC2/II_Apendices_Tecnicos/
   └─ RECHAZADO → brain/SPECIALTIES/{area}.md (vacuna anti-alucinación)
        ↓
CIRUGÍA — `lfc-cli process-dts` lee YAML y aplica replace físico:
        ├─ NIVEL 1: WBS y presupuesto (wbs_presupuestal_datos.js, .md sincronizado)
        ├─ NIVEL 2: Cronograma + Riesgos (cronograma_datos.js, riesgos_wbs.js)
        ├─ NIVEL 3: Ingeniería de detalle (V_X_Sistema_Detalle_vN.md)
        ├─ NIVEL 4: Documentos Maestros (CRITERIOS_TECNICOS_MAESTRO, MATRIZ_TRAZABILIDAD)
        ├─ NIVEL 5: Entregables consolidados (X_ENTREGABLES_CONSOLIDADOS)
        └─ NIVEL 6: Índices y navegación (Indice_Maestro, sidebar)
        ↓
SINCRO — `lfc-cli sync` regenera wbs_presupuestal_datos.js (cache-bust v=14.7.X)
        ↓
SERVICIO — `lfc-cli cook` convierte MD → HTML, deploy Vercel
        ↓
TRAZABILIDAD bidireccional:
   DT → enlaza WBS, V.X, AT, criterios maestros
   WBS item → muestra "Origen: DT-XXX-YYY"
```

---

## 🤖 ARQUITECTURA DEL AGENTE EXTERNO

> Implementación viva en `/home/administrador/docker/agente/architecture.md`. Aquí solo el contrato funcional que LFC2 espera del agente.

### Stack vigente (2026-05)

| Servicio | Rol |
|---|---|
| **Bot Telegram** (`src/index.js`) | Interfaz de mando soberano · long polling |
| **Oracle MCP** (`notebooklm-mcp-v12:3001`) | Verdad Externa · 108 fuentes Contrato/Ardanuy |
| **Postgres pgvector** (`sicc-postgres:5432`) | Biblia Legal · 10.358 fragmentos Contrato APP 001/2025 + memoria genética |
| **Tridente NVIDIA NIM** | DeepSeek-v4-pro (Auditor) · Nemotron-3-super (Legal) · Llama 3.3 70B (Coordinador) |
| **Embeddings** | Gemini `embedding-001` (Cloud) → fallback Ollama `nomic-embed-text` (Local) |
| **Tier 2 fallback** | Ollama local (Llama 3.1 8B / Gemma 2 9B) — soberanía offline |

### Pipeline FASE-0 a FASE-5 (`procesarMensaje()`)

```
FASE-0: evaluarRecursos        → CPU governor
FASE-1: buscarLecciones        → sicc_genetic_memory (vacunas, coseno >0.7)
FASE-2: buscarSimilares        → contrato_documentos (top-3 fragmentos)
FASE-3: validarExternaNotebook → Oracle MCP :3001
FASE-4: seleccionarSkills      → brain/skills/*.md
FASE-5: getMultiplexedContext  → Tridente NVIDIA NIM con systemPromptSICC
```

### Bucle `/audit [área]` — hasta 3 ciclos

```
FASE 0:    Supabase RAG extrae contexto crudo (Contrato + AT + BCD)
FASE 0.5:  Oracle Fetcher → Ficha Técnica obligatoria (distil-mandates.js)
FASE 1:    Auditor genera borrador DT con citación canónica
FASE 2:    validarInternaSupabase + validarExternaNotebook
FASE 3:    Juez SICC v14.5 (Heurística Forense agnóstica a JSON)
FASE 4:    APROBADO → brain/dictamenes/ + vectorización + /promote
           RECHAZADO → brain/SPECIALTIES/{area}.md (Vacuna Genética)
```

**Hard-caps:** MAX_CICLOS=3 · timeout=1800s · Oracle timeout=90s · throttle NIM 1.5s · prompt destilado <5000 chars.

---

## 📊 ESTADO ACTUAL — qué funciona y qué no

### ✅ Implementado y funcional

| Flujo | Estado | Comentario |
|---|---|---|
| DT → Presupuesto Universo A | ✅ | `wbs_presupuestal_datos.js` actualizado vía `sincronizar_TODO`. WBS_Vista_Final consume en vivo. |
| Vista Final entregable (Vercel) | ✅ | 135 ítems, AIU 33% + IVA 19% calculados en tiempo real. Excel 4 hojas. |
| Pipeline forense `/audit` | ✅ | Tridente NVIDIA NIM emite DTs certificadas en `brain/dictamenes/`. |
| CI/CD `/promote` | ✅ | `gitlocal.js` copia DT → LFC2 → push GitHub → Vercel auto-deploy. |
| Cache-busting | ✅ | Universo A: `?v=14.7.3`. |

### ⚠️ Parcial / con desincronización

| Flujo | Estado | Comentario |
|---|---|---|
| Universo B (`datos_wbs_TODOS_items.js`) | ⚠️ | Servido pero pre-BCD. Sidebar lo linkea como "WBS Interactiva". Ítem 1.1.103 = $63,112M (incorrecto). |
| Cronograma dinámico | ⚠️ | `cronograma_datos.js` existe pero `WBS_Cronograma_Propuesta.html` parcialmente hardcoded. |
| Riesgos vinculados | ⚠️ | `riesgos_wbs.js` existe pero NO vincula con ítems WBS específicos. |
| Reporte gerencial | ⚠️ | Pareto funciona; no actualiza tiempo real. |
| Excel hoja 4 (Fuentes) | ⚠️ | Hardcoded "133 ítems" — contradice meta dinámico (135). |

### ❌ Pendiente

| Flujo | Estado | Comentario |
|---|---|---|
| Actualización V_X (Ingeniería Detalle) | ❌ | Manual. YAML de DT no especifica sección a actualizar. |
| Actualización VIII_/ Documentos Maestros | ❌ | Manual. CRITERIOS_TECNICOS_MAESTRO, MATRIZ_TRAZABILIDAD requieren edición. |
| Sync Excel ↔ Sistema | ❌ | Solo Excel → Sistema. No bidireccional. |
| File watcher / hot-reload | ❌ | Sin daemon. Cambios requieren ejecución manual de scripts. |

---

## 🔧 DEUDA TÉCNICA ACTIVA (2026-05-05)

| ID | Item | Severidad | Acción |
|---|---|---|---|
| 1 | **DT-SICC-2026-015** (fibra 64h) contradice BCD §6.1.1 (48h) | 🔴 Alta | Matar o reescribir post-BCD |
| 2 | `agente/architecture.md:22` dice fibra 64h | 🔴 Alta | Corregir a 48h |
| 3 | `agente/architecture.md:25` "eliminada 24h UPS" | 🔴 Alta | Restaurar BCD §10.5: TETRA 24-48h |
| 4 | Sidebar linkea universo B como "WBS Interactiva" | 🔴 Alta | Reapuntar a `WBS_Vista_Final.html` |
| 5 | Universo B (`datos_wbs_TODOS_items.js`) servido con cifras pre-purga | 🟡 Media | Migrar a A o dropear |
| 6 | Excel hoja 4 hardcoded "133 ítems" | 🟢 Baja | Parametrizar a `data.length` |
| 7 | Re-ingesta `contrato_documentos` con BCD v001 | 🟡 Media | Necesario para que el agente cite correctamente |
| 8 | Locomotoras nº exacto (15 actual = post-DT) | 🟡 Media | Verificar AT1 Cap 5.1 + DT formal |
| 9 | WBS_Presupuestal_v4_0_MICHELIN: 24 PaN no 146, fibra 48h | 🟡 Media | Reconciliar |

---

## 📁 ESTRUCTURA DOCUMENTAL

| Carpeta | Contenido |
|---|---|
| `I_Contrato_General/` | Contrato + cláusulas |
| `II_Apendices_Tecnicos/` | AT1-AT10 + `Decisiones_Tecnicas/` (DT canónicas) |
| `II_A_Analisis_Contractual/` | Dictámenes contractuales |
| `III_Ingenieria_conceptual/` | Análisis de Riesgos y Supuestos |
| `IV_Ingenieria_basica/` | **BCD_SCC_v001_2026-04.md** + BCD v002 (Punto 42) + memorias diseño |
| `V_Ingenieria_detalle/` | Planos y secciones por especialidad |
| `VI_Operacion_Mantenimiento_Reversion/` | O&M |
| `VII_Soporte_Especializado/` | Normas, RAMS, ciberseguridad |
| `VII_Documentos_Transversales/` | Cruzados |
| `VIII_Documentos_Maestros_Metodologia/` | Metodología (legacy en `_legacy/`) |
| `IX_WBS_Planificacion/` | WBS, datasets `.js`, vistas HTML, motor de cálculo |
| `IX_ENTREGABLES/` | Entregables intermedios |
| `X_ENTREGABLES_CONSOLIDADOS/` | "Restaurante" platos servidos |

---

**Cerebro Maestro:** `IX_WBS_Planificacion/lfc-terminology.js` v14.7.3 (BCD-aligned)
**Motor de Cálculo:** `IX_WBS_Planificacion/wbs_core_logic.js` v14.7.3
**Filosofía:** Technical Sovereignty by Design · Contract-First
**Referencia Cruzada Cerebro:** [`/home/administrador/docker/agente/architecture.md`](file:///home/administrador/docker/agente/architecture.md)
**© 2026 LFC STUDIO — SICC SYSTEM**
