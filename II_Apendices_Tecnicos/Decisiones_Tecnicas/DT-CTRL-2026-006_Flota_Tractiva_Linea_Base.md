# DIRECTRIZ TÉCNICA DE DISEÑO  DT-CTRL-2026-006

**PARA:** ARDANUY COLOMBIA S.A.S. (Consultoría de Diseño)
**CC:** Gerencia EPC — LFC · Administración Contractual SICC
**ASUNTO:** Línea base presupuestal de flota tractiva — U18 contractual + Factor de Calidad
**Fecha:** 5 de Mayo de 2026
**Estado:** Pendiente Vo.Bo. (no objetada por Interventoría)

---

## 1. INSTRUCCIÓN DE DISEÑO

Fijar la línea base de la flota tractiva del Sistema de Señalización, Control de Tráfico y Comunicaciones (SCC) en **15 locomotoras**, distribuidas como:

- **1 locomotora U18** — material rodante base bajo custodia ANI, entregable en Fecha de Inicio (AT1 §5).
- **14 locomotoras adicionales** — provistas por el Concesionario en cumplimiento del **Factor de Calidad** ofertado, con condiciones técnicas equivalentes o superiores a la U18 (AT1 §5).

Cada una de las 15 unidades deberá contar con **equipo embarcado PTC** (OBC SIL-4) compatible con el sistema central del corredor LFC y con la red interoperable de FENOCO en Chiriguaná, conforme al procedimiento Stop & Switch (BCD §9.2).

**Items WBS afectados:** 1.2.100 a 1.2.106 (subsistema PTC embarcado, cantidad = 15 unidades). Mantener el conteo, **sub-rotular trazabilidad** entre la unidad U18 base y las 14 unidades del Factor de Calidad.

---

## 2. FUNDAMENTO CONTRACTUAL Y NORMATIVO

- **AT1 §5:** Establece la locomotora U18 como material rodante base bajo custodia de la ANI, con entrega en la Fecha de Inicio. Permite locomotora alternativa de condiciones equivalentes o superiores. Habilita Factor de Calidad para ampliación.
- **AT1 §5.x:** Permite la oferta de plataformas y locomotoras adicionales como Factor de Calidad del Concesionario.
- **BCD §5.2:** "El subsistema embarcado del sistema PTC con cantonamiento virtual deberá diseñarse para su integración con el material rodante tractivo del Proyecto definido en el AT1, Capítulo 5.1, que hacen parte del inventario base. **En caso de material rodante adicional, su integración deberá desarrollarse bajo los mismos criterios funcionales y de compatibilidad operacional.**"
- **FRA 49 CFR §236.1005(e):** Funciones obligatorias del sistema PTC aplicables a todas las unidades tractivas habilitadas.
- **AT1 (interoperabilidad FENOCO):** El equipo embarcado debe permitir Stop & Switch en Chiriguaná. La cantidad mínima de OBC = cantidad de locomotoras tractivas habilitadas para circular en ambas redes.

---

## 3. CIERRE OPERATIVO

- **WBS Cap 1.2** mantiene cantidad = 15 unidades por ítem (1.2.100 a 1.2.106). No se modifica el presupuesto.
- **Documentos a propagar:**
  - `IX_WBS_Planificacion/WBS_Presupuestal_v4_0_MICHELIN.md` — agregar nota de trazabilidad U18 base + 14 Factor Calidad en el subtítulo "1.2 Sistema PTC Embarcado".
  - `IX_WBS_Planificacion/lfc-terminology.js` — actualizar comentario `LOCOMOTORAS_TOTAL: 15` (ya marca "post-DT pendiente"; cerrar la deuda referenciando esta DT).
  - `architectureLFC.md` — quitar item 4 de la deuda técnica activa.
  - `agente/architecture.md` — sanear "Flota: GR12, U10 y U18 (o equivalente por Factor de Calidad)" → confirma alineación, no requiere cambio.
- **Consecuencia de incumplimiento:** Riesgo de no cobertura de equipo embarcado en unidades del Factor de Calidad → incumplimiento de PTCSP (FRA §236.1015) → no certificación FRA del corredor.

---

## 10. INSTRUCCIONES PARA MASTERCHEF (YAML)

```yaml
dt_metadata:
  id: "DT-CTRL-2026-006"
  fecha: "2026-05-05"
  area: "control"
  prefijo: "CTRL"
  estado: "pendiente_vo_bo"
  cierra_deuda:
    - "architectureLFC.md §Deuda Técnica item 4 (locomotoras nº exacto)"
    - "lfc-terminology.js comentario LOCOMOTORAS_TOTAL post-DT"

items_wbs_afectados:
  - "1.2.100"
  - "1.2.101"
  - "1.2.102"
  - "1.2.103"
  - "1.2.104"
  - "1.2.105"
  - "1.2.106"

archivos_actualizar:
  - file: "IX_WBS_Planificacion/lfc-terminology.js"
    accion: "actualizar_comentario"
    cambios:
      - buscar: "LOCOMOTORAS_TOTAL: 15,                              // post-DT pendiente. AT1 Cap 5.1 = inventario base (verificar nº exacto, ~6)"
        reemplazar: "LOCOMOTORAS_TOTAL: 15,                              // DT-CTRL-2026-006: 1 U18 base (AT1 §5) + 14 Factor de Calidad"

  - file: "IX_WBS_Planificacion/WBS_Presupuestal_v4_0_MICHELIN.md"
    accion: "actualizar_subtitulo"
    cambios:
      - buscar: "#### **1.2 Sistema PTC Embarcado (15 Unidades PTC)**"
        reemplazar: "#### **1.2 Sistema PTC Embarcado (15 Unidades — 1 U18 base AT1 §5 + 14 Factor Calidad — DT-CTRL-2026-006)**"

validaciones:
  - alineado_BCD_v001: true
  - alineado_AT1_§5: true
  - alineado_FRA_236.1005: true
  - capex_protegido: true  # No modifica el presupuesto, solo trazabilidad
```

---

**Vo.Bo. requerido:** Dirección Técnica UF2 — LFC
**Auditoría:** SICC v14.7 (BCD-aligned)
