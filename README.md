# PROYECTO APP LA DORADA - CHIRIGUANÁ v14.7 | SICC SOVEREIGN
## Manifesto de Soberanía Técnica y Control de Interoperabilidad (SICC)

**Fecha de actualización:** 5 de Mayo de 2026
**Estado del sistema:** ✅ **SICC SOVEREIGN v14.7 — Entrega presupuesto ANI certificada**
**Hito vigente:** commit `9d82f03` · tag `entrega-presupuesto-2026-05-05`
**Responsable:** Agente Antigravity / Administración Contractual SICC
**Tecnología Base:** Diésel-Eléctrica | PTC Virtual | Red Vital IP / TETRA | Estándar FRA/AREMA

---

## 🏛️ FUENTE DE VERDAD SUPREMA (SSoT)
El proyecto se rige por la jerarquía establecida en el **BCD v001 (Abril 2026)**. La metodología operativa se encuentra en [`SICC_METHODOLOGY_42.md`](SICC_METHODOLOGY_42.md).

---

## RESUMEN EJECUTIVO (MAYO 2026)

Este repositorio constituye el **Ecosistema de Ingeniería SICC** para el proyecto **APP La Dorada (México) - Chiriguaná**. La línea base v14.7 incorpora la **purga doctrinal del 2026-05-04** (ítem 1.1.103 conciliado a $11,000M COP post-FENOCO Sec 25.4), el **Punto 42** (DT-SICC-2026-042: habilitación satelital transitoria, cadena 9.12 → 25.4), y la consolidación del **WBS v4.0 Michelin** sincronizado entre `.md` y `.js`.

### OBJETIVOS TÉCNICOS SICC
1.  **Interoperabilidad**: Alineación nativa con **FENOCO** mediante estándares FRA/AREMA.
2.  **Soberanía**: Transición de 25kV (Monopolio) a **Tracción Diésel-Eléctrica** (Soberana).
3.  **Digitalización**: Control virtual vía GNSS y Red Vital IP / TETRA.

---

## INICIO RÁPIDO - TORRE DE CONTROL

### Doble entrada — gerencia y técnico

⭐ **[Presupuesto SCC — Vista Final](IX_WBS_Planificacion/WBS_Vista_Final.html)** — *Para gerencia, banca y ANI*
- Línea base v14.7 BCD-aligned · **133 ítems**
- 📊 **Excel descargable de 7 hojas**: Total General · Por Capítulo · **Detalle Ítems** (estilo Costo_proyecto.xlsx, TRM en M1, fórmulas A1 con `$M$1`) · **Obra Civil vs Compras** (Acta de Obra) · **AIU Desglose** · **Pendientes RFQ** · Fuentes y Notas
- 5 modales L4 inline: 💰 Desglose AIU · 📝 Acta de Obra · ⚠️ Validación Cap. 4 · 🧮 Zero-Residue · 📋 Pendientes RFQ
- Tabla por capítulo + 4 cards resumen (Costo Directo · AIU · IVA · Total)

🛠️ **[WBS Interactiva con generador de DT](IX_WBS_Planificacion/WBS_COMPLETA_TODO_Interactiva_v4.0.html)** — *Para el técnico que propone cambios*
- 133 ítems navegables por capítulo + **búsqueda con pill "📊 FILTRADO"** (avisa cifras parciales) + botón "🔄 Limpiar"
- 6 KPIs vivos: Ítems · Capítulos · Costo Directo · AIU 33% · IVA 19% · **TOTAL PROYECTO** (cuadra con Vista Final)
- **Subtotal por sub-capítulo** en cada header
- Pill **"RFQ pendiente"** en 9 ítems (5 ENCE + desvíos + control N+1 + LED + F.O. + UPS)
- Botón **"PROPONER DT"** por ítem → modal con:
  - **📚 CONTEXTO TÉCNICO** desde `wbs_metadata_enriquecida.js v2.0` (133 ítems): justificación, criterios de diseño, supuestos, **DTs previas** (24 ítems vinculados), documentos de ingeniería
  - Selector de prefijo SICC **pre-seleccionado por capítulo** (Cap 1→CTRL, 2→COMS, 3→SICC, 4→PAN, 5→CCO, 6→MR; ENRG/PMO disponibles)
  - Justificación técnica + cantidad/VU editables → **delta presupuestal** en COP+USD coloreado
  - Plantilla DT exportable a **markdown al portapapeles** (toast no bloqueante)
- Botón **"➕ Nuevo Capítulo"** → genera DT-NEWCAP para proponer alcance nuevo

### Portales y herramientas
*   [🏠 Sovereign Tower Dashboard](index.html) — primer card linkea directo a Vista Final
*   [📋 Reporte Gerencial](IX_WBS_Planificacion/WBS_Reporte_Gerencial.html) — KPIs vivos, comparativa Estructuración/LFC/Ardanuy, 3 escenarios, 5 riesgos contractuales
*   [⚠️ Análisis de Riesgos](IX_WBS_Planificacion/WBS_Analisis_Riesgos.html) — 22 riesgos · 5 críticos del momento (Interventoría AT1, Ardanuy performance, Ardanuy FO, RFQ, TRM)
*   [🎯 WBS Hub](IX_WBS_Planificacion/WBS_Menu_Principal.html) — navegación detallada (Cronograma, Riesgos, Reporte, Auditoría)
*   [🍽️ Platos Servidos (Entregables)](X_ENTREGABLES_CONSOLIDADOS/8_DOCUMENTOS_SERVIDOS/HTML/INDICE_Documentos_Servidos.html)

> **Nota:** Las URLs `WBS_COMPLETA_TODO_Interactiva_v4_0`, `WBS_Controles_Operativos_L4`, `WBS_Presupuesto_SCC_APP_La_Dorada_Chiriguana` siguen como **redirects** automáticos hacia la Vista Final (commit `5cbe10f`). La URL `WBS_COMPLETA_TODO_Interactiva_v4.0` fue **rescatada** del redirect en el Bloque E (turno vespertino 2026-05-05) por ser la única vista con generador de DT.

---

## CRITERIOS TÉCNICOS — derivados de BCD v001 (Abril 2026)

| Sistema | Criterio | Valor | Fuente |
|---------|----------|-------|--------|
| **Trocha** | Vía única, carga | **914 mm** (yarda) | BCD §1.2 |
| **PTC** | Cantonamiento virtual + 5 ENCE físicos | FRA 49 CFR Part 236 Subpart I (2026) | BCD §4.1 |
| **Pasos a Nivel** | Con protección activa | **24 Protegidos** | BCD §8.2 |
| **Fibra óptica** | Backbone homogéneo G.652.D | **48 hilos** | BCD §6.1.1 |
| **TETRA** | Cobertura 100% AT1 | nº torres (post-RF) | BCD §6.2 |
| **Energía** | UPS autonomía mínima | **4 h** (Signal) / **24-48h** (TETRA) | BCD §10 |
| **TRM Risk** | Techo cobertura cambiaria | 4,400 COP/USD | SICC Doctrine |

---

## EL MOTOR LFC-CLI (MASTERCHEF v6.5)
El núcleo de automatización reside en `scripts/lfc-cli.js`, el cual ejecuta el **Ciclo de Purificación Técnica**. Toda modificación tecnológica nace de una **DT** (Decisión Técnica).

---

**Metodología Maestro:** [`SICC_METHODOLOGY_42.md`](SICC_METHODOLOGY_42.md)  
**Arquitectura del Sistema:** [`architectureLFC.md`](architectureLFC.md)  
**Cerebro Maestro:** `IX_WBS_Planificacion/lfc-terminology.js` v14.7.3  
**© 2026 LFC STUDIO - SICC SYSTEM**
