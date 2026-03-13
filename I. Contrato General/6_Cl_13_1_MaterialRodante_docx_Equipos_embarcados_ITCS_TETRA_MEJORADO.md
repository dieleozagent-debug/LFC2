# CLAUSULA 13.1 - MATERIAL RODANTE Y EQUIPOS EMBARCADOS (PTC VIRTUAL)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Proyecto:** APP La Dorada - Chiriguaná  
**Contrato:** Concesión No. 001 de 2025  
**Cláusula:** 13.1 - Material Rodante y Equipos Embarcados  

---

## 📄 REFERENCIA LITERAL (DBCD & CONTRATO)
**Fuente:** DBCD Cap. 4.1 y AT1 Tabla 17.
**Texto:** "Control de tráfico que supervise la conducción del tren... basado en los requerimientos y estándares establecidos por la Federal Railroad Administration (FRA) para sistemas tipo positive train control (PTC)... Título 49, Subtitulo B, Capitulo II, Parte 236, Subparte I".

---

## 🔍 INTERPRETACIÓN TÉCNICA-CONTRACTUAL
La arquitectura adoptada es **PTC VIRTUAL**. Esto implica la eliminación total de señalización física wayside y circuitos de vía continuos. El material rodante es el componente crítico de detección, utilizando su propia posición (GPS + Edometría) para reportar integridad y recibir Autorizaciones de Movimiento (Movement Authority) desde el CCO.
- **Estándar:** FRA 49 CFR Part 236 Subpart I.
- **Detección:** Moving Block virtual. No requiere enclavamientos locales adicionales a los 5 ENCE contractuales.

---

## ⚠️ IMPLICACIONES PARA EL EPC (CONSTRUCTOR)
**Riesgo:** Sobrecosto y retraso por intentar implementar estándares europeos (PTC VIRTUAL/FRA/AREMA) o señalización física (WAYSIDE) que NO son requeridos y dificultan la interoperabilidad con FENOCO.
**Acción:**
1. Descartar cualquier diseño de locomotoras basado en PTC VIRTUAL Level 2 por no ser el estándar del proyecto.
2. Especificar equipamiento embarcado PTC compatible con FRA 236.
3. Asegurar que la interfaz con FENOCO sea **Operacional (Stop & Switch)**, no una integración tecnológica de sistemas propietarios (Alstom PTC).

---

## 🛠 METODOLOGÍA PUNTO 42 (VERSIONADO v4.2)

### 1. MARCO CONTRACTUAL
- **Apéndice Técnico 1 - Tabla 17:** Obligación de PTC bajo FRA.
- **Apéndice Técnico 3, Numeral 8.10:** Requisitos de PTC (Entendido como PTC según DBCD).
- **Apéndice Técnico 4:** Disponibilidad operativa >= 99.5%.

### 2. INTEGRACIÓN CON DOCUMENTOS RELACIONADOS
- [x] **DBCD_CRITERIA.md** — Fuente única de verdad.
- [wip] **III.25.1_WBS** — Debe actualizarse para eliminar la partida presupuestal de señalización física wayside.

| Versión | Fecha       | Responsable                | Descripción                              |
|:------:|:-----------:|:---------------------------|:-----------------------------------------|
| v4.2   | 13/03/2026  | Admin. Contractual EPC     | Re-ingeniería completa: Purgado PTC VIRTUAL/FRA/AREMA. Alineación PTC Virtual/FRA. |

---

⚖️ **ADVERTENCIA LEGAL**
Esta información es de carácter informativo. Debe validarse con el equipo jurídico antes de acciones formales.
