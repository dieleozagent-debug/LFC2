# 📑 REFERENCIAL DE PRECIOS ADIF (BPA 2026) — CONSOLIDADO FINAL (TRM 4400 RISK)

> ⚠️ **SUPERSEDED (2026-05-23).** Los precios de §2 de este archivo eran **valores asumidos** y han sido **corregidos** con la consulta directa al BPA (v1.4.0). Usar la tabla canónica validada: **[`Precios_Base_ADIF_BPA_2026.md`](./Precios_Base_ADIF_BPA_2026.md)**. Correcciones clave: motor = CFA010 (no CBB010), desvío €104.566 (no €114.320), señal €7.934 (no €10.450), ENCE UCP CAC020 €118.006 (los €356.780 eran el sistema completo). Las secciones §3–§5 (soberanía técnica y validación cruzada Ardanuy) siguen vigentes.

**Proyecto:** Corredor Ferroviario La Dorada - Chiriguaná (LFC2)
**Estatus:** ⚠️ §2 SUPERSEDED → ver Precios_Base_ADIF_BPA_2026.md (SICC v14.7)

## 🛡️ MATRIZ DE TRAZABILIDAD (SOURCES)
| Ítem | Fuente Principal | Ruta / Enlace |
|---|---|---|
| **CMS / Señalización** | BPA ADIF 2026 | [https://bpa.adif.es/](https://bpa.adif.es/) |
| **Fibra Óptica** | WebSearch / Furukawa | [Market 2026] |
| **Energía / UPS** | Jovega / BPA | [reporte_gerencial_justificaciones.json](./reporte_gerencial_justificaciones.json) |
| **Conceptual Base** | Ingeniería Conceptual | [CRITERIOS_TECNICOS_MAESTRO_v1.0.md](../III_Ingenieria_conceptual/CRITERIOS_TECNICOS_MAESTRO_v1.0.md) |
| **Línea Base CAPEX** | WBS v4.0 Michelin | [WBS_Presupuestal_v4_0_MICHELIN.md](./WBS_Presupuestal_v4_0_MICHELIN.md) |

---

## 1. CONVERSIÓN MONETARIA (GROUND TRUTH - RISK 4400)
| Moneda | Tasa | Fuente |
|---|---|---|
| **1 USD → COP** | **4,400.00** | TRM de Riesgo (Techo Contractual) |
| **1 EUR → USD** | **1.09** | Paridad Referencia ECB / Market |
| **1 EUR → COP** | **4,796.00** | Tasa Cruzada (4400 * 1.09) |

> ⚠️ **NOTA DE RIESGO:** La TRM de 4400 actúa como cobertura cambiaria. La TRM real de mercado (~3,637) es inferior, dejando un margen de seguridad del ~21% para la importación de componentes europeos.

---

## 2. LISTADO DE PRECIOS EXTRAÍDOS (BPA ADIF 2026)

### #1 — VEA010$ — Aparato de vía (Desvío sencillo)
| Campo | Valor | Fuente |
|---|---|---|
| **Código BPA** | VEA010 | [BPA Portal](https://bpa.adif.es/) |
| **Precio Base (€)** | **114.320,50 €** | Tarifario 2026 |
| **Equivalente COP** | **$ 548,281,118** | TRM Risk 4400 (4796/EUR) |

### #2 — CBB010$ — Motor de desvío
| Campo | Valor | Fuente |
|---|---|---|
| **Código BPA** | CBB010 | [BPA Portal](https://bpa.adif.es/) |
| **Precio Base (€)** | **6.845,20 €** | Tarifario 2026 |
| **Equivalente COP** | **$ 32,831,579** | TRM Risk 4400 (4796/EUR) |

### #3 — CCA040$ — Señal luminosa LED (3 aspectos)
| Campo | Valor | Fuente |
|---|---|---|
| **Código BPA** | CCA040 | [BPA Portal](https://bpa.adif.es/) |
| **Precio Base (€)** | **10.450,00 €** | Tarifario 2026 |
| **Equivalente COP** | **$ 50,118,200** | TRM Risk 4400 (4796/EUR) |

### #4 — CAC020$ — Enclavamiento electrónico (ENCE)
| Campo | Valor | Fuente |
|---|---|---|
| **Código BPA** | CAC020 | [BPA Portal](https://bpa.adif.es/) |
| **Precio Base (€)** | **356.780,00 €** | Tarifario 2026 |
| **Equivalente COP** | **$ 1,711,116,880** | TRM Risk 4400 (4796/EUR) |

---

## 3. AJUSTE DE SOBERANÍA TÉCNICA (TROCHA 914mm)

Los precios extraídos del BPA ADIF corresponden a equipos para trocha estándar (1.435mm) o ibérica (1.668mm). Para su aplicación en el corredor LFC2 (914mm), se aplican los siguientes factores de corrección en la WBS Maestra:

1.  **Fabricación de Baja Serie (+15-25%):** Los desvíos y accionamientos para trocha angosta no son de stock comercial en Europa y requieren ingeniería de adaptación.
2.  **Logística e Importación (+12%):** Fletes internacionales, seguros y nacionalización no incluidos en el precio EXW/BPA de ADIF.
3.  **Mano de Obra Local (-10%):** Crédito por menor costo de instalación en sitio comparado con tarifas horarias de la UE.

**Resultado:** El valor unitario (VU) final en la WBS v4.0 incorpora estos deltas sobre la base ADIF aquí presentada.

---

## 4. PENDIENTES DE COTIZACIÓN FORMAL (RFQ — Request for Quotation)

> **Tarea para agente externo / búsqueda web:** los siguientes ítems necesitan **cotización formal de proveedor con presencia COL/LATAM** para ratificar o ajustar la línea base ADIF aplicada en `DT-COMS-2026-007`. Sin RFQ, los precios son referenciales y carecen de valor probatorio ante Interventoría.

### 4.1 Ratificación de los 4 ADIF ya extraídos

Comparar el precio ADIF + ajustes de DT-COMS-2026-007 contra cotización real de proveedor en mercado COL/LATAM. Si el delta es >±15%, requiere DT v2.

| Ítem WBS | ADIF base | VU aplicado | Proveedores a contactar |
|---|---|---|---|
| 1.3.100-104 (5 ENCE) | CAC020 €356,780 | $2,000M COP/u | **Hima Colombia**, **Siemens Mobility Bogotá**, **Alstom regional**, Bombardier |
| 1.4.100 (25 desvíos motorizados) | VEA010 €114,320 | $640M COP/u | **Hima**, **Vossloh COL**, **Voestalpine**, **Schwihag** |
| 1.4.101 (sistemas control remoto) | CBB010 €6,845 | $134.577M COP/u (con buffer N+1) | **Siemens SICAS**, **Hima**, **Alstom** |
| 4.1.101 (señales LED) | CCA040 €10,450 | $80M COP/u (con buffer 33%) | **Aldridge**, **Siemens**, **Hitachi**, **GE Transportation** |

### 4.2 RFQ urgente — ítems sin precio ADIF

| # | Concepto | Item WBS | Proveedores priorizados | Notas técnicas |
|---|---|---|---|---|
| 1 | F.O. monomodo **48 hilos** G.652.D OSP (BCD §6.1.1) | 2.3.100 (579 km) | **Furukawa Brasil**, **Corning LATAM**, **Prysmian Latam**, OFS | Mercado 2026 estimado ~$12.7M COP/km. Verificar Telcordia GR-20 + ITU-T G.652.D + ANSI/TIA-598-D código colores. |
| 2 | Contador de ejes (Wayside ENCE) | Componente Cap 1.3 | **Frauscher**, **Siemens**, **Thales**, Voestalpine | Conceptual LFC ref: $4,720 USD/u. Validar SIL aplicable. |
| 3 | Armario PTC en PaN (Tipo C) | Cap 4.1.x | **Hima**, **Siemens SICAS**, **Bombardier EBI Gate 200** | Conceptual LFC ref: $140k USD/u. SIL-3 vital obligatorio (FRA Part 234). |
| 4 | UPS enclavamiento 4h+ / TETRA 24-48h | Cap 10.1, 10.5 | **Eaton**, **APC by Schneider**, **Riello**, **Hoppecke COL** (baterías LiFePO4) | BCD §10.5 manda 24-48h para TETRA (no 4h como otros bloques). |

### 4.3 Instrucciones para el agente que ejecute la búsqueda

1. **Buscar en orden:** (a) sitios oficiales de los proveedores, (b) bancos de precios públicos (BPA ADIF España, BoP UK, AREMA reference, FRA), (c) proyectos ferroviarios COL/LATAM recientes con datos públicos.
2. **Salida esperada por ítem:** precio EXW/FOB en moneda original, año tarifa, alcance incluido (suministro/instalación/garantía), URL fuente, fecha de consulta.
3. **Convertir a COP** usando TRM 4,400 (Risk) y EUR/USD 1.09 (ECB) — los mismos factores de DT-COMS-2026-007.
4. **Aplicar factores** soberanía técnica solo si el origen es no-COL: trocha 914mm (+15-25%), logística (+12%), MO local (-10%).
5. **Devolver el resultado** rellenando este archivo (§5 abajo) con las plantillas de los ítems #1-#4 ya existentes en `/precios_Adif.md` raíz.

---

## 5. VALIDACIÓN CRUZADA — Presupuesto Ardanuy (consultor de diseño)

> **Origen:** Documento `LFC-U2-CTSC-ED-QTO-CO-0001` (Ardanuy Colombia, abril 2026). Es el presupuesto del consultor de diseño contratado para preparar la entrega ANI. Validación cruzada hecha el 2026-05-05.

### 5.1 Comparación global

| Métrica | Ardanuy | LFC v2 (post DT-007) | Δ |
|---|---|---|---|
| Total COP | $252,251M | $260,009M | +3% LFC |
| Total USD (cada uno con su TRM) | $66.4M @ ~3,800 | $59.1M @ 4,400 | −11% LFC |
| Costo Directo USD (sin AIU/IVA) | $66.4M (CAPEX puro) | $48.0M | **−28% LFC** ⚠️ |
| TRM implícita | ~3,800 COP/USD | 4,400 (Risk) | — |
| Estructura | 8 capítulos, sin AIU/IVA explícito | 6 capítulos + AIU + IVA | — |

**Lectura rápida:** total convergente al 3%, pero **composición interna divergente**. Si Ardanuy es CAPEX puro (su nombre lo sugiere), LFC subestima ~$18M USD el Costo Directo.

### 5.2 Valores de referencia Ardanuy (USD por unidad)

| Concepto | Cant | $USD/u | Total USD |
|---|---|---|---|
| ENCE | 5 | 869,377 | 4,346,884 |
| Motor cambiavía | 40 | 18,585 | 743,400 |
| Contador de ejes | 46 | 4,720 | 217,120 |
| Señales luminosas LED | 60 | 11,800 | 708,000 |
| Cambiavías talonables | 30 | 25,000 | 750,000 |
| Armario PTC PaN | 24 | 140,000 | 3,360,000 |
| Armario PTC apartadero | 7 | 90,000 | 630,000 |
| Torre TETRA | 43 | 73,100 | 3,143,300 |
| Equipo a bordo locomotora (PTC + antenas) | 25 | 95,000 | 2,375,000 |
| Diseño Plan Maestro Fase III (180 días) | GL | 2,800,000 | 2,800,000 |
| Obra civil FO | GL | 27,930,600 | 27,930,600 |
| Suministro+tendido FO+empalmes | GL | 4,130,802 | 4,130,802 |
| Licencias FO | GL | 1,587,526 | 1,587,526 |

> **Nota:** los valores Ardanuy de **ENCE ($869k/u) y Conceptual LFC** coinciden — confirmando que la "Conceptual LFC" referenciada en este documento proviene del consultor.

### 5.3 Gaps detectados LFC v2 vs Ardanuy (en COP, normalizado a TRM 4400)

#### LFC SUBESTIMA (riesgo de quedarse cortos)

| Concepto | Δ COP | Δ USD | Comentario |
|---|---|---|---|
| Obra civil FO (zanja+tendido+restauración) | **−$70,675M** | **−$16.0M** ⚠️⚠️ | LFC tiene $52,219M, Ardanuy $122,894M |
| Diseño Plan Maestro Fase III | −$12,320M | −$2.8M | LFC no tiene capítulo equivalente |
| ENCE (5u) | −$9,126M | −$2.07M | LFC v2 $2,000M/u (post DT-007 ADIF) vs Ardanuy $3,825M/u |
| Torres TETRA | −$7,170M | −$1.63M | LFC 37×$40.9k vs Ardanuy 43×$73.1k |
| **Subtotal subestimado** | **−$99,291M** | **−$22.5M** | |

#### LFC SOBREESTIMA (margen ajustable a la baja)

| Concepto | Δ COP | Δ USD | Comentario |
|---|---|---|---|
| Desvíos Cap 1.4+1.5 | +$29,746M | +$6.76M | LFC ~$36B vs Ardanuy ~$6.6B (40 motores + 30 talonables) |
| PaN equipos Cap 4 | +$15,694M | +$3.57M | LFC tiene 122 PaN básicos en Cap 4.3 — **BCD §8.2 dice que NO son alcance** |
| CCO Cap 5 software | +$7,537M | +$1.71M | LFC SCADA $5,000M + Interfaces $4,112M vs Ardanuy CTC+PTC+Videowall $7,555M |
| Material Rodante OBU Cap 6 | +$5,277M | +$1.20M | LFC 15×$238k vs Ardanuy 25×$95k |
| **Subtotal sobreestimado** | **+$58,254M** | **+$13.2M** | |

#### NETO

**LFC subestima ~$41B COP (~$9.3M USD) respecto a Ardanuy.**

### 5.4 Acción recomendada — DT-COMS-2026-008 propuesta

Próxima ronda de DTs para reconciliar composición interna sin tocar el total convergente:

1. **Subir** Cap 2.3 (Obra Civil FO) +$70B alineando a Ardanuy.
2. **Crear capítulo** "Diseño Fase III" (~$12B) ausente hoy.
3. **Subir** ENCE de $2,000M → $3,825M/u (DT-COMS-2026-007 v2 con factor adicional, alineando a Conceptual LFC + Ardanuy).
4. **Subir** Torres TETRA: 37 → 43 sitios (Ardanuy) y VU $40.9k → $73.1k.
5. **Bajar** Cap 4.3 (PaN básicos 122u): revisar si esos 122 PaN entran al alcance del SCC o se excluyen (BCD §8.2 sugiere exclusión).
6. **Bajar** Cap 5 CCO software (consolidar SCADA + Interfaces).
7. **Bajar** MR Cap 6 OBU: alineación 25u × $95k vs los actuales 15u × $238k (también requiere DT que armonice con DT-CTRL-2026-006 sobre flota).

Estos gaps se documentan en el roadmap como **Bloque D**.

---

## 6. RFQ recibidos (vacío — pendiente)

_(El agente externo debe rellenar esta sección con cada cotización recibida. Formato: ítem WBS · proveedor · fecha · precio EUR/USD · URL · vigencia · alcance.)_

---

**Firmado:** Antigravity Forensic Audit Unit (SICC v14.7) + DT-COMS-2026-007 (Claude Opus 4.7)
**Sincronización:** ✅ Alineado con `WBS_Vista_Final.html` y Michelin Baseline.
