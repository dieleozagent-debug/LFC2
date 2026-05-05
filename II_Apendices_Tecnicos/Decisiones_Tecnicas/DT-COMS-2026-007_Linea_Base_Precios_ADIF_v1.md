# DIRECTRIZ TÉCNICA DE DISEÑO  DT-COMS-2026-007

**PARA:** ARDANUY COLOMBIA S.A.S. (Consultoría de Diseño)
**CC:** Gerencia EPC — LFC · Administración Contractual SICC · Interventoría
**ASUNTO:** Línea base presupuestal de precios — Anclaje a BPA ADIF 2026 (v1)
**Fecha:** 5 de Mayo de 2026
**Estado:** Aplicada (línea base para entrega 2026-05-05). Pendiente RFQ formal de ratificación.

---

## 1. INSTRUCCIÓN DE DISEÑO

Adoptar como **línea base presupuestal del Sistema de Señalización, Control de Tráfico y Comunicaciones (SCC)** los precios extraídos del **Banco de Precios ADIF (BPA) 2026**, ajustados por los factores de soberanía técnica del corredor LFC2 (trocha angosta, logística de importación, mano de obra local).

Esta DT consolida la conversión monetaria, los factores de ajuste y el mapeo ADIF → ítem WBS, y blinda los valores unitarios resultantes hasta tanto se obtenga **RFQ formal** (Request for Quotation = pedido de cotización vinculante a proveedor) que confirme o ajuste los precios.

**Items WBS afectados:** 1.3.100 a 1.3.104 (5 ENCE) · 1.4.100 (desvíos motorizados) · 4.1.101 (señales LED). Otros ítems con buffer sobre ADIF se documentan en §3.

---

## 2. FUNDAMENTO CONTRACTUAL Y NORMATIVO

- **AT3 Capítulo I literal c:** Regla de desempate normativo AREMA > FRA > AAR > UIC. ADIF no aparece como vinculante; se usa como **referencia comparativa** de mercado europeo, no como mandato.
- **BCD v001 §2.1:** Cita expresamente normas ADIF (NAT 405, NAT 716, ET 03.366.780.9, ET 03.366.752.8) como "guía de buenas prácticas de explotación y construcción". Su adopción se armoniza con marco regulatorio colombiano.
- **BCD v001 §1.2:** Trocha de **914 mm** (yarda). ADIF opera en 1,435 mm (UIC) o 1,668 mm (ibérica). El precio ADIF requiere ajuste por baja serie / no-stock.
- **Principio de defensa CAPEX:** Si Interventoría/ANI consultan el BPA ADIF directamente, los precios de la WBS deben reconciliar con la fuente pública sin sorpresas.

---

## 3. ESPECIFICACIÓN TÉCNICA — Conversión y ajustes

### 3.1 Conversión monetaria (vinculante)

| Tasa | Valor | Fuente |
|---|---|---|
| **TRM Risk** | **4,400 COP/USD** | Techo cobertura cambiaria (margen ~+21% vs TRM real ~3,637) |
| **EUR/USD** | **1.09** | Paridad referencia ECB / mercado |
| **EUR/COP cruzada** | **4,796** | TRM × 1.09 |

### 3.2 Factores de ajuste por soberanía técnica (ADIF → LFC2)

Aplicables sobre el precio ADIF BASE expresado en COP:

1. **Trocha 914 mm (+15-25%):** Equipos para trocha angosta no son stock comercial europeo; requieren ingeniería de adaptación / fabricación de baja serie.
2. **Logística e importación (+12%):** Fletes internacionales, seguros, nacionalización aduanera, no incluidos en precio EXW del BPA.
3. **Mano de obra local (−10%):** Crédito por menor costo de instalación en sitio Colombia vs. tarifas UE.

**Regla operativa para esta DT v1 (conservador):** se aplica el extremo bajo del rango trocha (+15%) para no inflar la línea base. Cuando llegue RFQ formal, se ratifica o ajusta.

### 3.3 Línea base de precios (4 ítems con ADIF extraído)

| Item WBS | Concepto | ADIF Code | Precio base | EUR/COP raw | + 15% Trocha | + 12% Log | − 10% MO | **VU defendible** | VU anterior | Δ |
|---|---|---|---|---|---|---|---|---|---|---|
| **1.3.100-104** | Controlador ENCE (5 estaciones) | CAC020 | €356,780 | $1,711M | $1,968M | $2,204M | $1,983M | **$2,000M/u** | $800M | **+$1,200M/u (+150%)** |
| **1.4.100** | Desvío motorizado (25 unidades) | VEA010 | €114,320 | $548M | $630M | $706M | $635M | **$640M/u** | $448M | **+$192M/u (+43%)** |
| **1.4.101** | Sistema control remoto + redundancia N+1 (componente) | CBB010 | €6,845 | $32.8M | (no aplica directo — buffer N+1 documentado) | — | — | **$134.5M/u** (sin cambio) | $134.5M | 0 (buffer mantenido) |
| **4.1.101** | Señal luminosa LED (9 unidades) | CCA040 | €10,450 | $50.1M | $57.6M | $64.5M | $58.1M | **$80M/u** (sin cambio) | $80M | 0 (buffer +33% mantenido) |

### 3.4 Decisión sobre buffers (ítems sobre-dimensionados)

- **1.4.101** ($134.5M vs ADIF defendible ~$40M): mantener — incluye redundancia N+1 que ADIF no captura, protege contra escalación en RFQ.
- **4.1.101** ($80M vs ADIF defendible ~$60M): mantener — buffer +33% para cobertura de 9 instalaciones distribuidas en sitios remotos del corredor.

### 3.5 Ítems pendientes RFQ — fuera del alcance de esta DT

| # | Concepto | Item WBS | Acción |
|---|---|---|---|
| 1 | F.O. monomodo **48 hilos** G.652.D OSP (BCD §6.1.1) | 2.3.100 | RFQ Furukawa Brasil / Corning LATAM / Prysmian — mercado COL/LATAM (no ADIF) |
| 2 | Contador de ejes (Wayside ENCE) | Componente 1.3 | RFQ Frauscher / Siemens / Thales |
| 3 | Armario PTC en PaN | 4.1.x | RFQ Hima / Siemens SICAS / Bombardier EBI |
| 4 | UPS enclavamiento 4h+ / TETRA 24-48h | Cap 10 | RFQ Eaton / APC / Riello / Hoppecke COL |

---

## 4. IMPACTO PRESUPUESTAL

| Capítulo | Subtotal anterior | Subtotal nuevo | Δ |
|---|---|---|---|
| 1.3 (5 ENCE) | $4,700M | $10,700M | **+$6,000M** |
| 1.4 (Desvíos motorizados) | $16,261M | $21,046M | **+$4,786M** |
| **Total impacto Capítulo 1** | — | — | **+$10,786M COP (+$2.45M USD @ 4400)** |

Sobre el total de proyecto post-audit ($200,406M COP), el incremento es ~5.4%. Sigue cómodamente dentro del margen R-HARD del CAPEX (techo 6.1.100 = $726M COP/u no afectado).

---

## 5. CIERRE OPERATIVO

### Aplicación inmediata (this DT)
- ✅ `wbs_presupuestal_datos.js` ítems 1.3.100-104 actualizados: vu = $2,000M, total = $2,000M, vu_usd = $454,545.
- ✅ `wbs_presupuestal_datos.js` ítem 1.4.100 actualizado: vu = $640M, total = $16,000M, vu_usd = $145,455, total_usd = $3,636,364.
- ✅ Descripciones referencian DT-COMS-2026-007 para trazabilidad.
- ⏳ **Pendiente:** sincronizar subtotales en `WBS_Presupuestal_v4_0_MICHELIN.md` (Cap 1.3 nuevo $10,700M, Cap 1.4 nuevo $21,046M).
- ⏳ **Pendiente:** la `WBS_Vista_Final.html` recalcula AIU/IVA en vivo desde el `.js`, no requiere intervención.

### Pendiente de validación externa
- 🔍 Búsqueda web por agente externo: confirmar/ratificar los 4 ADIF extraídos vs. cotizaciones de proveedores con presencia en COL/LATAM (Hima Colombia, Siemens Mobility Bogotá, Bombardier regional, Alstom). Ver §3.5 + nota en `precios_Adif_COMPLETO.md` y `WBS_Listado_Verificacion_Precios_v14_7_FINAL_SICC.md`.

### Consecuencia de incumplimiento
Si RFQ formal devuelve precio significativamente distinto:
- **Mayor:** se requiere DT v2 que ajuste WBS hacia arriba + aprobación gerencial por incremento CAPEX.
- **Menor:** delta cae dentro del buffer; la línea base se mantiene como techo de seguridad presupuestal.

---

## 10. INSTRUCCIONES PARA MASTERCHEF (YAML)

```yaml
dt_metadata:
  id: "DT-COMS-2026-007"
  fecha: "2026-05-05"
  area: "telecomunicaciones_y_control"
  prefijo: "COMS"
  estado: "aplicada_v1_pendiente_rfq"
  reemplaza: null
  cierra_deuda:
    - "roadmap.md Bloque A — alineación WBS↔ADIF"
    - "WBS_Listado §3 (línea ENCE subdimensionada vs Conceptual LFC)"

items_wbs_afectados:
  - item: "1.3.100"
    cambio: "vu: 800M → 2,000M (ADIF CAC020 + ajustes)"
  - item: "1.3.101"
    cambio: "vu: 800M → 2,000M"
  - item: "1.3.102"
    cambio: "vu: 800M → 2,000M"
  - item: "1.3.103"
    cambio: "vu: 800M → 2,000M"
  - item: "1.3.104"
    cambio: "vu: 800M → 2,000M"
  - item: "1.4.100"
    cambio: "vu: 448.589M → 640M (ADIF VEA010 + ajustes)"

archivos_actualizar:
  - file: "IX_WBS_Planificacion/wbs_presupuestal_datos.js"
    accion: "ya_aplicado"
  - file: "IX_WBS_Planificacion/WBS_Presupuestal_v4_0_MICHELIN.md"
    accion: "actualizar_subtotales_capitulo_1"
  - file: "IX_WBS_Planificacion/precios_Adif_COMPLETO.md"
    accion: "agregar_seccion_pendientes_rfq"

validaciones:
  - alineado_BCD_v001: true
  - alineado_AT3_jerarquia_normativa: true  # ADIF como referencia, no mandato
  - capex_protegido: true                    # incremento +5.4% dentro del margen Risk 21%
  - trazabilidad_bidireccional: true         # .js item descripcion referencia esta DT

rfq_pendiente:
  - "F.O. 48h G.652.D OSP — Furukawa/Corning/Prysmian"
  - "Contador de ejes — Frauscher/Siemens/Thales"
  - "Armario PTC PaN — Hima/Siemens/Bombardier"
  - "UPS enclavamiento — Eaton/APC/Riello/Hoppecke"
```

---

**Vo.Bo. requerido:** Dirección Técnica UF2 — LFC
**Auditoría:** SICC v14.7 (BCD-aligned)
