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

## 📝 NOTAS DE RETOMA POST-ENTREGA (2026-05-04)

> **Contexto:** tras la auditoría doctrinal del 2026-05-04 se cerraron 4 gaps críticos y 3 mejoras (acciones 1-7). Los precios siguientes son **estimaciones basadas en mercado y referencias internas (Conceptual LFC, ADIF, WebSearch)**. Antes de la firma del contrato de obra es indispensable obtener cotizaciones formales (RFQ vinculantes) y ajustar el WBS.

### RFQ formales pendientes (orden de prioridad)

| # | Ítem WBS | Concepto | Valor estimado actual | Cotizar a | Razón |
|---|---|---|---|---|---|
| 1 | 1.3.100-104 | Controlador ENCE SIL-3/4 (5 estaciones) | **$2,000M COP/u** (post DT-COMS-2026-007) | Hima Colombia, Siemens Mobility Bogotá, Alstom regional | Era $800M (riesgo subdim). Reconciliado a ADIF CAC020 + ajustes (€356,780 → ~$2,000M). Aún 1.9x menor que Conceptual LFC ($3,824M); RFQ formal a proveedores COL pendiente para ratificar. |
| 2 | 4.1.100, 4.1.102, 4.1.104 | Controladores PaN Tipo C SIL-3 vital | $180M-$360M COP/u | Hima HiMax/HiMatrix, Siemens SICAS-S7, Bombardier EBI Gate 200 | El WBS asume controladores genéricos. SIL-3 certificado puede ser ~$110-160k USD/u (gap potencial +$3-5B). |
| 3 | 2.3.100 | Cable F.O. monomodo **48 hilos** G.652.D OSP (BCD §6.1.1 vinculante) | VU $9.81M COP/km | Furukawa Brasil, Corning LATAM, Prysmian | Reconciliado a 48h conforme BCD v001. La idea previa de upgrade a 64h fue descartada (sin sustento contractual; BCD impone 48h homogéneo). |
| 4 | 2.4.100 | Habilitación Satelital Punto 42 (5 terminales LEO + 12 meses) | $1,200M COP global | Hispasat (GEO), Starlink Maritime / OneWeb (LEO) | Estimación gruesa. Tarifa real Mbps/mes pendiente del proveedor. |
| 5 | 2.1.116 | Bancos baterías LiFePO4 24h sitios TETRA | $50M COP/u × 37 sitios | Hoppecke COL, EnerSys, BYD | Consumo W por sitio TETRA pendiente del equipo TETRA — sin eso el dimensionamiento es estimación. |
| 6 | 2.3.106 | OTDR triwavelength (1310/1550/1625 nm) | $90M COP/u × 2 | EXFO MaxTester 730C, Yokogawa AQ7280, Viavi T-BERD | Mercado: USD 25-45k/u nuevo. Verificar si compra o arriendo aceptación. |
| 7 | 1.5.101 | Señales semafóricas estaciones ENCE | $51.92M COP/u × 30 | Conceptual LFC ($11,800 USD/u) — referencia genérica | Cantidad estimada (5 ENCE × 6 señales/estación). Validar contra diseño detalle real de cada estación. |
| 8 | 1.1.103 | Software CTC virtual + Autorizaciones PTC | $11,000M COP global | Alstom (Atlas/Iconis), Siemens (Trainguard MT), Thales (NetTrac MT/LockTrac) | Sin cotización formal. Modelo licenciamiento (perpetuo vs SaaS) por definir. |

### Validaciones pendientes (no cotización, sino confirmación documental)

| # | Tema | Acción |
|---|---|---|
| V1 | Cadena 9.12 → 25.4 para satelital (DT-042) | Buscar antecedente jurídico real de aplicación 9.12 a tecnologías satelitales transitorias. Si no hay, refinar la fundamentación contractual. |
| V2 | Firma Registro de Revisiones BCD v002 | El v002 incluye §6.2.5 nueva. Confirmar si Ardanuy Colombia revisa formalmente o queda como blindaje interno LFC. |
| V3 | DT-SICC-2026-015 (Backbone Fibra) | Auditar contaminantes residuales tipo los que tenía el DT-042 (DBCD inventado, ATs sin verificar, métricas erróneas). |
| V4 | Reconciliación .js vs .md | Verificar que después de cada commit los totales por capítulo en `WBS_Presupuestal_v4_0_MICHELIN.md` coincidan con `wbs_presupuestal_datos.js` (chequeo periódico antes de cada entrega). |
| V5 | Token GitHub embebido en URL del remote | Rotar token (`ghp_...`) y limpiar de la URL del remote (`git remote set-url`). |
| V6 | Cantidad real de señales por estación ENCE (1.5.101) | El asumido 6/estación es promedio. Validar contra planos de detalle de Zapatosa, García Cadena, Barrancabermeja, Puerto Berrío–Grecia, La Dorada–México. |
| V7 | Consumo eléctrico W por sitio TETRA | Pendiente del equipo TETRA. Dimensiona Ah de los bancos LiFePO4 (item 2.1.116). Sin esto, el VU $50M es estimación gruesa. |

### Trazabilidad técnica de la auditoría

- Commit de aplicación: ver tag `entrega-presupuesto-2026-05-05` en repo LFC2.
- Backups `.legacy` de cada archivo modificado disponibles (rollback granular posible).
- **Total directo post-auditoría: $200,406,043,560 COP / $45,546,828 USD @ TRM Risk 4,400**.
- **Total con AIU+IVA estimado: ~$247,250M COP / ~$56.2M USD @ TRM Risk 4,400**.
- Vista en vivo: [`WBS_Vista_Final.html`](./WBS_Vista_Final.html) — URL Vercel: `https://lfc-2.vercel.app/IX_WBS_Planificacion/WBS_Vista_Final.html`.

---
**Firmado:** Dirección Técnica UF2 — LFC
**Última auditoría:** 2026-05-04 — Doctrina SICC v14.7 aplicada
