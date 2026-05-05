# 📑 REFERENCIAL DE PRECIOS ADIF (BPA 2026) — CONSOLIDADO FINAL (TRM 4400 RISK)
**Proyecto:** Corredor Ferroviario La Dorada - Chiriguaná (LFC2)
**Estatus:** ✅ EXTRACCIÓN COMPLETA (SICC v14.7 - Michelin Baseline)

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

## 5. RFQ recibidos (vacío — pendiente)

_(El agente externo debe rellenar esta sección con cada cotización recibida. Formato: ítem WBS · proveedor · fecha · precio EUR/USD · URL · vigencia · alcance.)_

---

**Firmado:** Antigravity Forensic Audit Unit (SICC v14.7) + DT-COMS-2026-007 (Claude Opus 4.7)
**Sincronización:** ✅ Alineado con `WBS_Vista_Final.html` y Michelin Baseline.
