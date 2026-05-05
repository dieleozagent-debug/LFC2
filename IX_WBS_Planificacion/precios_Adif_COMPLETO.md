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
**Firmado:** Antigravity Forensic Audit Unit (SICC v14.7)
**Sincronización:** ✅ Alineado con `WBS_Vista_Final.html` y Michelin Baseline.
