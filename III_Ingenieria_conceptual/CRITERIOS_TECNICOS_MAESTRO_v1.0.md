# ⭐ CRITERIOS TÉCNICOS MAESTRO — v1.0
## FUENTE ÚNICA DE VERDAD (SSoT) — PROYECTO LFC2

> [!IMPORTANT]
> Este documento es la autoridad técnica suprema para la Ingeniería del Proyecto LFC2. Cualquier discrepancia en otros documentos debe resolverse a favor de lo aquí establecido.

---

## 1. INFRAESTRUCTURA Y CORREDOR
- **Longitud Total:** 526.133 km (La Dorada – Chiriguaná).
- **CCO:** La Dorada, Caldas (PK 201+470).
- **Pasos a Nivel:** 146 totales (9 tipo C, 15 tipo B, 122 otros).

---

## 2. SISTEMA DE SEÑALIZACIÓN Y CONTROL (PTC/CTC)
- **Tecnología PTC:** Cantonamiento Virtual (Wayside Zero) basado en GNSS y Odometría embarcada.
- **Normativa Rector:** FRA 49 CFR Parte 236, Subparte I (PTC).
- **Enclavamientos (ENCE):** Única y exclusivamente cinco (5) estaciones operativas SIL-4:
  1. Zapatosa
  2. García Cadena
  3. Barrancabermeja
  4. Puerto Berrío – Grecia
  5. La Dorada – México
- **Régimen de Cambiavías:**
  - **Motorizados:** Solo dentro del perímetro de los 5 nodos ENCE.
  - **Autotalonables con Comprobación:** En todos los apartaderos y desvíos fuera de las zonas ENCE.
- **Interoperabilidad:** Modelo **Stop & Switch** (OBC Dual) en la frontera con FENOCO. Sin gateways lógicos.

---

## 3. TELECOMUNICACIONES
- **Fibra Óptica:** Fibra monomodo convencional G.652.D.
- **Topología:** Anillo redundante con protección MPLS 1+1.
- **TETRA:** 33 estaciones base para cobertura total del corredor.
- **CCTV:** 73 cámaras distribuidas (48 PAN, 12 Talleres, 8 CCO, 5 Estaciones).

---

## 4. ENERGÍA (POWER)
- **Indicador EL2 (Respaldo):** Entrada de energía auxiliar (Plantas Diésel) en menos de **2 minutos** en el 100% de los eventos de falla de red.
- **UPS (SIL-4):**
  - Autonomía estándar: **4 horas**.
  - Autonomía sitios remotos/fotovoltaicos: **48 horas**.
- **Neutralidad Tecnológica:** Especificaciones basadas en desempeño (SIL-4, protocolos abiertos IP), sin vendor lock-in.

---

## 5. JERARQUÍA NORMATIVA (R-HARD-06)
1. Contrato APP 001/2025.
2. Apéndice Técnico 1 (AT1).
3. Apéndice Técnico 3 (AT3).
4. Documento de Bases y Criterios de Diseño (DBCD).
5. Normas Adoptadas (AREMA > FRA > AAR > UIC en términos de calidad/seguridad técnica).

---

**Última Actualización:** 28/04/2026
**Responsable:** Dirección Técnica SICC — SICC v14.6 Consolidated.
