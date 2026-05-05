# SICC METHODOLOGY .42 — SSoT Doctrinal Unificada
## Sistema Integrado de Control Contractual · Proyecto LFC2 (UF2 La Dorada–Chiriguaná)

**Versión:** v2.0 — alineada a **BCD SCC v001** (Ardanuy Colombia, abril 2026)
**Fecha:** 5 de Mayo de 2026
**Reemplaza:** `VIII_/_legacy/PROMPT_Metodologia_Punto_42_Iteracion_MultiAgente_v1_1.md` (ene 2025) · `VIII_/_legacy/SICC_METHODOLOGY_42_ALPHA.md` (abr 2026) · `VIII_/_legacy/_ARQUITECTURA_SISTEMA_COMPLETO_Integracion.md` (oct 2025)

> Documento autoritativo de la metodología .42 para el repo LFC2. La arquitectura del agente externo que la opera vive en `/home/administrador/docker/agente/architecture.md` y se rige por esta SSoT.

---

## 0. Aclaración de nombres — ".42" tiene 3 usos distintos

| Etiqueta | Qué es | Dónde |
|---|---|---|
| **".42" / "Punto 42" (metodología)** | La doctrina descrita en este documento | Acá |
| **DT-SICC-2026-042** | Decisión técnica específica (habilitación satelital cadena 9.12 → 25.4) que casualmente lleva el número 42 | `II_Apendices_Tecnicos/Decisiones_Tecnicas/` |
| **`SICC_METHODOLOGY_42_ALPHA.md`** | Documento histórico previo a esta unificación | `VIII_/_legacy/` |

Cuando este documento dice ".42" se refiere **solo** a la metodología.

---

## 1. Filosofía Contract-First

La ingeniería no es un proceso creativo libre; es una función ejecutiva del contrato. Toda decisión técnica nace de una obligación contractual y termina en un dictamen verificable.

**Principio de Coherencia:** Lo que no está sustentado en el Contrato, los Apéndices Técnicos, el BCD o una DT formal, **no existe** en el presupuesto ni en la ingeniería.

---

## 2. Jerarquía de la Verdad (BCD v001 §2.1)

Regla de gobernanza técnica del diseño. En caso de contradicción, prevalece el instrumento de mayor jerarquía:

```
L1 — Contrato APP No. 001 de 2025 y documentos prevalentes
       ↓
L2 — Apéndice Técnico 1 (AT1):  alcance, requerimientos funcionales
       ↓
L3 — Apéndice Técnico 3 (AT3):  especificaciones técnicas, criterios de diseño
       ↓
L4 — BCD v001 SCC (Ardanuy 04-2026):  bases, parámetros y criterios SSoT del SCC
       ↓
L5 — Normas y estándares adoptados:  FRA 49 CFR Part 236 Subpart I (2026) · AREMA · AAR · ETSI TETRA · ITU-T G.652 · RETIE 2024 · NSR-10 · NTC 4741 · Manual Señalización Vial 2024
       ↓
L6 — Decisiones Técnicas (DT) aprobadas:  modificaciones formales por encima del BCD
       ↓
L7 — Ingeniería de detalle:  V_Ingenieria_detalle/, planos
       ↓
L8 — WBS y presupuesto:  IX_WBS_Planificacion/wbs_presupuestal_datos.js
       ↓
L9 — Entregables consolidados:  Vercel · platos servidos
```

**Regla de desempate normativo (AT3 Cap. I literal c):** AREMA > FRA > AAR > UIC. Ante contradicción residual, prevalece la disposición más restrictiva o segura compatible con L1–L4.

---

## 3. Criterios Maestros — derivados de BCD v001

Invariantes técnicas salvo DT formal aprobada por encima del BCD:

| Sistema | Valor vinculante | Fuente BCD |
|---|---|---|
| **Trocha** | **914 mm** (yarda) | §1.2 |
| **Corredor** | 526.133 km · PK 201+470 → 722+683 · vía única, carga | §3.2 |
| **Filosofía PTC** | Cantonamiento virtual + 5 ENCE físicos · FRA 236 Subpart I (2026) | §4.1 |
| **5 ENCE nominados** | La Dorada–México · Pto Berrío–Grecia · Barrancabermeja · García Cadena · Zapatosa | §4.1 (Tabla 17 AT1) |
| **Pasos a Nivel protegidos** | **24** (9 Tipo C + 15 Tipo B). Los 122 restantes NO son alcance del sistema señalización | §8.2 |
| **Fibra óptica** | **48 hilos G.652.D** soterrada, solución homogénea para todo el corredor | §6.1.1 |
| **TETRA** | Cobertura 100% AT1 · nº torres **(post-RF)** · ETSI EN 300 392-2 V3.8.1 | §6.2 |
| **Redundancia comms Tren–Tierra** | Satelital LEO/GEO bajo EN 50159 Cat 3 + FRA §236.1033 | §6.2.3 |
| **CCO** | Principal La Dorada · failover Barrancabermeja · UPS 4h · HA | §7 |
| **Interoperabilidad FENOCO** | **Stop & Switch operacional** (NO integración técnica/lógica/software) | §9.2 |
| **Material rodante tractivo** | AT1 Cap 5.1 (inventario base) — `15` actual requiere DT formal · número exacto pendiente | §5.2 |
| **Energía señalización/PTC/CCO/PaN** | UPS 4 h · 110V DC | §10.1–10.4 |
| **Energía TETRA** | UPS **24–48 h** · 48V DC | §10.5 |
| **Servicios auxiliares (CCTV/SCADA)** | 120 VAC solo entrada UPS · caída tensión ≤ 3% · RETIE 2024 | §10.6 |
| **TRM Risk** | 4,400 COP/USD (techo cobertura cambiaria) | SICC v14.7 |

### Mandatos de Soberanía (Anti-Scope Creep)

- **SIL-4** aplica solo al OBC PTC. Sistemas de transmisión COTS (módems satelitales, routers LTE, SD-WAN) operan SIL-2 + EN 50159 Cat 3. **Prohibido** exigir SIL-4 a equipos comerciales.
- **CCO con failover Barrancabermeja** obligatorio. No aceptar arquitectura SPOF en La Dorada.
- **PTC embarcado** acotado a tractivo. Material remolcado: "puesta a punto" general sin hardware redundante.

---

## 4. Anatomía de una Directriz Técnica (DT v4.2)

Una DT es una **instrucción de mando** ejecutable, no un reporte de auditoría.

### Estructura piramidal (1 página, sin decoración)

```markdown
# DIRECTRIZ TÉCNICA DE DISEÑO  DT-{PREFIX}-{AÑO}-{SEQ}

**PARA:** ARDANUY COLOMBIA S.A.S. (Consultoría de Diseño)
**CC:** Gerencia EPC — LFC
**ASUNTO:** [Título directo de la instrucción]

## 1. INSTRUCCIÓN DE DISEÑO
[Orden explícita: qué se diseña, qué se borra, qué se presupuesta. Sin ambigüedades.]

## 2. FUNDAMENTO CONTRACTUAL Y NORMATIVO
[Cita canónica L1–L5. Ej.: "AT1 Tabla 17", "FRA 49 CFR §236.1005(e)(2)(ii)", "BCD §6.1.1".]

## 3. CIERRE OPERATIVO
[Actualizar BCD/Anexo Cantidades/Planos. Ítems WBS afectados. Consecuencia de incumplimiento.]

## 10. YAML EJECUTABLE
items_wbs_afectados: ["1.2.100", ...]
archivos_actualizar:
  - file: "V_Ingenieria_detalle/V.2_CTC_Detalle_v4.0.md"
    accion: "actualizar_seccion_y_versionar"
    seccion: "§3.2 Arquitectura PTC Embarcado"
    cambios: [...]
versionamiento:
  version_actual: "v4.0"
  version_nueva: "v4.1"
```

### Prefijos DT canónicos

| Prefijo | Especialidad |
|---|---|
| **CTSC** | Señalización (Control de Tráfico, Señalización y Comunicaciones) |
| **COMS** | Telecomunicaciones (TETRA, fibra, satelital) |
| **ENRG** | Energía (UPS, redundancia, RETIE) |
| **INTG** | Integración / Interoperabilidad (Stop & Switch FENOCO) |
| **CTRL** | Control (PTC, CTC, CCO) |
| **ENCE** | Enclavamientos electrónicos |
| **SICC** | Doctrina contractual transversal (metodología, blindaje) |

### Tono y estilo

- Gerencial, directivo, técnico.
- **Defensiva-Externa:** blindar el contrato frente a ANI/Interventoría.
- **Ofensiva-Interna:** exigir eficiencia y cero desperdicio a Ardanuy.
- **Prohibido:** emojis, lenguaje judicial ("Juez", "Veredicto"), ornamento.

---

## 5. Protocolo de Iteración Multi-Agente (5 pasos)

Para cualquier solicitud de revisión documental o auditoría:

| Paso | Quién | Qué |
|---|---|---|
| **1. Recepción** | Auditor Forense | Clasificar tipo (técnico/contractual/gestión), fase (A–E), especialidad, dependencias WBS y RACI. |
| **2. Diagnóstico** | Auditor + Especialidad | Revisar 9 dimensiones: estructura v4.2, versionado, trazabilidad, completitud, coherencia transversal, calidad redaccional, **coherencia técnica vs BCD**, **consulta a criterios maestros**, **validación de propagación**. |
| **3. Reporte de hallazgos** | Auditor | Tabla de brechas con severidad ALTA/MEDIA/BAJA, dependencias afectadas, propagación requerida (qué archivos cambian si se aprueba). |
| **4. Propuesta de mejora** | Estratega SICC | Cambios estructura/contenido/trazabilidad/versionado + alineación con criterios maestros + lista docs a actualizar (V_X, VIII_, WBS, HTML servidos). |
| **5. Iteración colaborativa** | Coordinador | Mensaje al usuario con brechas + propuestas + consideraciones para validar. Solo con aprobación humana → `/promote`. |

---

## 6. Swarm Protocol .42 — Stack vigente (2026-05)

> Stack real implementado en `/home/administrador/docker/agente/`. Cualquier mención de "Gemini 1.5 Pro" o "Claude 3.5 Sonnet" en archivos viejos es **incorrecta** — no son los modelos del Swarm operativo.

```
┌─ Cámara de Doble Ciego — Tridente NVIDIA NIM ───────────────────┐
│                                                                  │
│  Auditor Forense (DeepSeek-v4-pro):                              │
│      → Borrador DT con citación canónica L1-L5                   │
│         ↓                                                         │
│  Validador Legal (Nemotron-3-super-120b):                        │
│      → Verifica AT1/AT3, jerarquía normativa                     │
│         ↓                                                         │
│  Coordinador (Llama 3.3 70B):                                    │
│      → Cruza ambos · consenso obligatorio · sin consenso = veto  │
│         ↓                                                         │
│  Oracle externo (NotebookLM MCP :3001):                          │
│      → Verdad Externa · 108 fuentes Contrato/Ardanuy LFC         │
│         ↓                                                         │
│  Embeddings Multiplexados:                                       │
│      → Primario: Gemini embedding-001 (Cloud)                    │
│      → Fallback: Ollama nomic-embed-text (Local soberano)        │
│         ↓                                                         │
│  Tier 2 — Soberanía Total:                                       │
│      → Ollama local (Llama 3.1 8B / Gemma 2 9B)                  │
│      → Ingesta masiva offline · datos ultra-sensibles            │
└──────────────────────────────────────────────────────────────────┘
         ↓
Persistencia genética → pgvector (sicc_genetic_memory)
DT alucinada → Vacuna en brain/SPECIALTIES/{area}.md
```

**Hard-caps:** MAX_CICLOS=3 · timeout exec=1800s · Oracle timeout=90s · Throttle NVIDIA NIM 1.5s entre llamadas · Prompt destilado <5000 chars.

**Gobernanza R-HARD:** CAPEX blindado $726M COP máx (WBS 6.1.100) · Idioma español obligatorio · CPU >80% encolar / >95% bloqueo total · prohibido editar dictámenes manualmente.

---

## 7. Workflow del Agente — Validar/Proponer DT por ítem WBS

> Contrato funcional que esta metodología impone al agente. Implementación detallada en `/home/administrador/docker/agente/architecture.md`.

### Pipeline de inferencia (FASE-0 a FASE-5)

```
FASE-0: evaluarRecursos (CPU governor)
   ↓
FASE-1: buscarLecciones — sicc_genetic_memory (vacunas anti-alucinación, coseno >0.7)
   ↓
FASE-2: buscarSimilares — contrato_documentos (top-3 fragmentos del Contrato + AT + BCD)
   ↓
FASE-3: validarExternaNotebook (Oracle MCP :3001 — Verdad Externa)
   ↓
FASE-4: seleccionarSkills (brain/skills/*.md)
   ↓
FASE-5: getMultiplexedContext → Tridente NVIDIA NIM con systemPromptSICC
```

### Bucle de Auditoría Forense `/audit [área]`

```
hasta 3 ciclos (STATE persistente):
   FASE 0:    Supabase RAG extrae contexto crudo del Contrato/AT/BCD
   FASE 0.5:  Oracle Fetcher → Ficha Técnica obligatoria (distil-mandates.js)
   FASE 1:    Auditor Forense genera borrador DT con citación canónica
   FASE 2:    validarInternaSupabase + validarExternaNotebook
   FASE 3:    Juez SICC v14.5 (Heurística Forense agnóstica a JSON)
   FASE 4:    Persistencia
              ├─ APROBADO  → brain/dictamenes/ + vectorización + /promote
              └─ RECHAZADO → brain/SPECIALTIES/{area}.md (Vacuna Genética)
```

### Validación de DT contra ítem WBS (flujo esperado)

1. **Cargar ítem WBS:** leer `IX_WBS_Planificacion/wbs_presupuestal_datos.js` → registro `{item, descripcion, tipo, vu, total, ...}`.
2. **Identificar fundamento contractual:** consultar Oracle (NotebookLM MCP :3001) sobre el ítem → encontrar referencia AT1/AT3/BCD.
3. **Verificar coherencia con criterios maestros §3:** ¿el ítem respeta trocha 914mm, fibra 48h, PaN 24, 5 ENCE, Stop & Switch, etc.? Si NO, generar DT correctiva.
4. **Verificar marco normativo:** ¿la norma citada está en L5? ¿hay redirección legítima?
5. **Calcular impacto financiero:** ¿el cambio modifica `vu`/`total`? Recalcular AIU 33% e IVA con `wbs_core_logic.calcularAIUeIVA()`. Convertir USD↔COP con TRM Risk 4400.
6. **Emitir DT v4.2** con prefijo correcto (CTSC/COMS/ENRG/...) + YAML ejecutable de propagación.
7. **Dictamen del Juez:** sólo con consenso doble-ciego del Tridente → `brain/dictamenes/` → `/promote` → `LFC2/II_Apendices_Tecnicos/Decisiones_Tecnicas/`.

### Prohibiciones operativas del agente

- **NO bloquear** términos que el BCD v001 cita explícitamente. Purgados de blacklist el 2026-05-05: `Stop & Switch`, `ADIF`, `Telcordia GR-20-CORE`.
- **NO emitir DT** que altere criterios maestros §3 sin invocar formalmente DT por encima del BCD.
- **NO inventar cifras.** Si un dato no está en Contrato/AT/BCD/RAG, declararlo `pendiente verificación`.
- **NO sobre-vender.** Cualquier afirmación verificable (archivo creado, commit hecho, número de ítems) debe poder validarse con grep/ls/git log.

---

## 8. Reglas de Oro

1. **Preservar integridad contractual:** nunca contradecir L1–L4. Validar impacto cruzado.
2. **Mejora incremental:** cambios específicos y justificados. Priorizar brechas críticas sobre estética.
3. **Trazabilidad bidireccional:**
   - **Hacia adelante:** DT → ítems WBS, secciones V_X, AT, criterios maestros.
   - **Hacia atrás:** ítem WBS muestra "Origen cambio: DT-XXX-YYY".
4. **Coherencia técnica obligatoria:** todo cambio se propaga a CRITERIOS_TECNICOS_MAESTRO, MATRIZ_TRAZABILIDAD, MATRIZ_DEPENDENCIAS, WBS_Vista_Final.html.
5. **Comunicación clara:** reportes estructurados, severidad y acción concreta por hallazgo. Español obligatorio.
6. **Verificación antes de aceptar:** ningún resultado del agente se da por hecho sin verificar archivos, contenido (`grep`), git log/tags, push real.

---

## 9. Criterios de Éxito (DT LISTA cuando)

- [ ] Estructura v4.2 (3 secciones + YAML)
- [ ] Versionado actualizado en encabezado
- [ ] Trazabilidad: cita canónica L1–L5
- [ ] Contenido técnico completo y verificable
- [ ] Sin inconsistencias transversales con criterios maestros §3
- [ ] Propagación documental especificada (qué V_X, qué WBS, qué HTML)
- [ ] Impacto financiero recalculado si modifica WBS
- [ ] Consenso doble-ciego del Tridente (Auditor + Legal + Coordinador)

---

## 10. Deuda Doctrinal Activa (pendientes a cerrar)

- [ ] **DT formal flota tractiva:** validar AT1 Cap 5.1 → fijar nº locomotoras base + DT que justifique extensión a 15 si aplica.
- [ ] **Matar DT-SICC-2026-015** (upgrade fibra 48h→64h): contradice BCD §6.1.1 (48h homogéneo). O reescribir como DT post-BCD con justificación blindada.
- [ ] **Reconciliar `WBS_Presupuestal_v4_0_MICHELIN.md`:** verificar 24 PaN (no 146), fibra 48h, criterios energía por bloque (4h vs 24-48h).
- [ ] **Sanear `agente/architecture.md`:** corregir línea 22 (fibra 64→48) y línea 25 (UPS TETRA "eliminada 24h" → restaurar BCD §10.5: 24-48h).
- [ ] **Re-ingesta `contrato_documentos`** con BCD v001 como fuente vinculante L4.
- [ ] **Migrar `WBS_COMPLETA_TODO_Interactiva_v4.0.html`** del universo B (legacy) al A (saneado), o reapuntar la sidebar a `WBS_Vista_Final.html` mientras tanto.

---

**Sello:** "Lo que no está en L1–L6, no existe en la ingeniería."
**Versión:** v2.0 · 2026-05-05 · BCD-aligned
**Verificación de autoría:** este documento fue redactado contra el texto literal del BCD v001 SCC pasado por el director técnico el 2026-05-05.
