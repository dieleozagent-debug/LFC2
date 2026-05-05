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

### Vista canónica (lo que usa el gerente y se entrega a ANI)
⭐ **[Presupuesto SCC — Vista Final](IX_WBS_Planificacion/WBS_Vista_Final.html)** · línea base v14.7 BCD-aligned · 135 ítems

Incluye:
- 📊 **Excel descargable de 7 hojas**: Total General · Por Capítulo · **Detalle Ítems** (estilo Costo_proyecto.xlsx, TRM en M1, fórmulas A1 con `$M$1`) · **Obra Civil vs Compras** (Acta de Obra) · **AIU Desglose** · **Pendientes RFQ** (lo que pasa a Compras / Integradora) · Fuentes y Notas
- 5 modales L4 inline: 💰 Desglose AIU · 📝 Acta de Obra · ⚠️ Validación Cap. 4 · 🧮 Zero-Residue · 📋 Pendientes RFQ
- Tabla por capítulo + 4 cards resumen (Costo Directo · AIU · IVA · Total)

### Portales y herramientas
*   [🏠 Sovereign Tower Dashboard](index.html) — primer card linkea directo a Vista Final
*   [🎯 WBS Hub](IX_WBS_Planificacion/WBS_Menu_Principal.html) — navegación detallada (Cronograma, Riesgos, Reporte, Auditoría)
*   [🍽️ Platos Servidos (Entregables)](X_ENTREGABLES_CONSOLIDADOS/8_DOCUMENTOS_SERVIDOS/HTML/INDICE_Documentos_Servidos.html)

> **Nota:** Las URLs antiguas `WBS_COMPLETA_TODO_Interactiva_v4.0`, `WBS_COMPLETA_TODO_Interactiva_v4_0`, `WBS_Controles_Operativos_L4`, `WBS_Presupuesto_SCC_APP_La_Dorada_Chiriguana` están consolidadas como **redirects** automáticos hacia la Vista Final (commit `5cbe10f`).

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
