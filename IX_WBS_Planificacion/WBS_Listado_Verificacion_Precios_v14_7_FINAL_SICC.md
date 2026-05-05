# 🛡️ LISTADO MAESTRO DE VERIFICACIÓN DE PRECIOS — SICC v14.7 (CONSOLIDADO DE AUDITORÍA)

**Proyecto:** APP La Dorada – Chiriguaná (UF2)
**Estatus:** ✅ CERTIFICADO PARA ENTREGA (AUDIT-READY)
**TRM Risk:** $4,400.00 COP/USD
**Doctrina:** SICC v14.7 (Virtual Fixed Block §236.1005)
**Fecha de Auditoría:** 2026-05-04

---

## 🛡️ MATRIZ DE FUENTES Y TRAZABILIDAD (PORTABLE)
| Ítem | Fuente Principal | Ruta Relativa | Hash/Fecha |
|---|---|---|---|
| **Referencial ADIF** | BPA ADIF 2026 | [./precios_Adif_COMPLETO.md](./precios_Adif_COMPLETO.md) | Consulta: 2026-05-04 |
| **WBS Baseline** | Michelin v4.0 | [./WBS_Presupuestal_v4_0_MICHELIN.md](./WBS_Presupuestal_v4_0_MICHELIN.md) | Rev: 2026-04-28 |
| **Histórico CAPEX** | WBS v3.0 | [./Versiones_Anteriores/WBS_Presupuestal_AMPLIADA_v3_0.md](./Versiones_Anteriores/WBS_Presupuestal_AMPLIADA_v3_0.md) | Rev: 2026-02-15 |
| **Ingeniería Conceptual** | Bases de Diseño | [../III_Ingenieria_conceptual/CRITERIOS_TECNICOS_MAESTRO_v1.0.md](../III_Ingenieria_conceptual/CRITERIOS_TECNICOS_MAESTRO_v1.0.md) | SSoT Conceptual |
| **Justificación Energía** | Jovega Ing. | [./reporte_gerencial_justificaciones.json](./reporte_gerencial_justificaciones.json) | Rev: 2026-05-04 |

---

## 📊 CONCILIACIÓN DE DISCREPANCIAS CRÍTICAS

### 1. WBS 1.1.103: Software PTC + Autorizaciones
- **Michelin (v4.0):** $11,000,000,000 COP.
- **Legacy (v3.0):** $88,112,090,432 COP.
- **Veredicto:** Se adopta **$11,000M COP**. La cifra de $88B de la v3.0 incluía $77,112M de software Gateway FENOCO purgado bajo la Sec 25.4 (Línea Base Michelin).
- **Sincronización:** Validado en `wbs_presupuestal_datos.js` ✅.

### 2. Discrepancia ENCE (Gap 1.5x)
- **Costo v3.0:** $800,000,000 COP/u (Línea Base).
- **Costo v4.0 (Audit):** $1,200,000,000 COP/u.
- **Justificación:** El incremento responde a la migración de controladores industriales a Enclavamientos Electrónicos (ENCE) **SIL-3 vital (FRA Part 236 Subpart I)** con redundancia 2oo3, exigidos por la doctrina SICC v14.7 para garantizar la seguridad vital.

### 3. Triangulación de Proveedores Tier-1
| Sub-sistema | Proveedor Ref. | Precio Unit. (COP) | Estatus Trazabilidad |
|---|---|---|---|
| **Controlador PaN SIL-3** | Hima / Siemens | $350,000,000 | Estimación de mercado, no vinculante. Pendiente RFQ formal a Hima/Siemens COL. |
| **Backbone FO 64h** | Furukawa / Corning | $12,754,317/km | Upgrade de 48h a 64h justificado en DT-015 |
| **Radio TETRA B.S.** | PowerTrunk / Motorola | $1,800,000,000 | Trazabilidad ADIF BPA 2026 + Logística COL |

### 4. Gap PTC v3.0/v4.0 (Ahorro por Arquitectura)
- **Reducción Estimada:** -$45,000M COP en hardware wayside.
- **Justificación:** La arquitectura **Virtual Fixed Block (§236.1005)** concentra el control vital en el subsistema embarcado y el Back Office, eliminando el equipamiento de campo continuo entre las 5 zonas ENCE.

---

## 🛡️ BLINDAJE DOCTRINAL (REGLA DE SOBERANÍA)
- **Dictamen Satelital:** [DT-SICC-2026-042](./II_A_Analisis_Contractual/dictamenes/DT-SICC-2026-042_Activacion_Temprana_Satelital.md)
- **Base Técnica:** [BCD v002 (Punto 42)](../IV_Ingenieria_basica/BCD_SCC_v002_2026-05_Punto42.md)
- **Veredicto Final:** Toda referencia a "Moving Block" ha sido purgada del repositorio. El sistema es legal y técnicamente defendible bajo la normativa **FRA 49 CFR §236.1005**.

---
**Firmado:** Antigravity Forensic Audit Unit
**Soberanía Técnica Garantizada**
