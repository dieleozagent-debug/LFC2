# DT-SICC-2026-013: Estandarización del Bus Vital 110V DC y Criterios de Autonomía

## .Section 10: Metadatos Forenses (YAML)
```yaml
dt_metadata:
  id: "DT-SICC-2026-013"
  version: "2.0 (Forensic Review)"
  fecha: "2026-04-09"
  especialidad: "Eléctrica / Señalización"
  estado: "Aprobado para Gobernanza Interna"
  impacto_capex: "Optimización por flexibilización de criterios (N-1)"

jerarquia_n_1:
  prioridad_1: "FRA 49 CFR §236.551 (Voltaje ±10%)"
  prioridad_2: "RETIE (Seguridad Eléctrica Nacional)"
  prioridad_3: "Contrato APP 001-2025 (Obligación de Resultado)"
  prioridad_4: "DBCD V002 (Propuesta Técnica LFC - Ajustable)"
```

---

## 1. ANÁLISIS JURISPRUDENCIAL Y FORENSE
Se identifica una distinción crítica entre las **obligaciones mandatorias (Ley del Contrato/Norma)** y las **propuestas de diseño (Criterios LFC)**. Este dictamen establece la hoja de ruta para evitar el sobredimensionamiento (Over-engineering) mediante la flexibilización de parámetros antes de su aprobación definitiva por la Interventoría.

### 1.1 Matriz de Trazabilidad: Autonomía y Carga

| Parámetro | Origen Normativo / Contractual | Criterio de Diseño (Propuesta LFC) | Carga de Ardanuy (Ingeniería Detalle) |
| :--- | :--- | :--- | :--- |
| **Autonomía 8h (Red)** | **Inexistente.** El AT3 §6.10 no cuantifica horas. | **8 Horas mínimas.** Propuesta ajustable basada en RAMS/Criticidad. | Dimensionamiento real + Factor Envejecimiento (1.25). |
| **Autonomía 48h (Solar)** | **Inexistente.** Sin mandato en Apéndices. | **48 Horas (2 días).** Estimación para radiación nula. | Dimensionamiento paneles + LiFePO4 según GHI local. |
| **Carga 5-10 kW (Sign.)** | **Inexistente.** Sin mandato de kW/kVA. | **Estimación referencial.** Margen 20% sobre pico (AREMA). | Cálculo de demanda real por nodo (No impositivo). |
| **Carga 2-5 kW (Com.)** | **Inexistente.** Sin mandato de kW/kVA. | **Estimación referencial.** | Cálculo de demanda real por nodo. |

### 1.2 Matriz de Redundancia y Seguridad

| Parámetro | Origen Normativo / Contractual | Aplicación SICC | Criterio de Optimización |
| :--- | :--- | :--- | :--- |
| **Doble Acometida + ATS** | **RETIE Art. 20-30.** Ley nacional aplicable. | Implementado según disponibilidad de red local. | Evitar extensión de red exterior si no es técnicamente viable. |
| **Redundancia N+1** | **AT3 (Genérico).** Exige redundancia sin cuantificar. | Adoptado para sistemas críticos. | Evitar esquema 2N (Duplicidad completa) para proteger CAPEX. |
| **Estabilidad Voltaje** | **FRA §236.551.** Voltaje ±10% nominal. | Bus 110V DC Dedicado. | Garantizar integridad Fail-Safe sin sobrecosto IT. |

---

## 2. DIRECTRIZ ESTRATÉGICA DE GOBERNANZA

1. **Flexibilización de Autonomía:** El valor de "8 horas" debe interpretarse como un rango propuesto (4h a 8h) dependiente de la criticidad del nodo. Se instruye a Ardanuy para no congelar este valor como un mínimo estricto en el DBCD sin un análisis de criticidad previo.
2. **Mitigación Solar:** La autonomía de 48h debe estar condicionada al estudio de radiación (GHI) y el perfil de carga real de cada sitio, evitando la compra masiva de litio en zonas de alta producción solar.
3. **Responsabilidad de Cálculo:** Las estimaciones de carga (kW) son referenciales para el presupuesto base. Ardanuy tiene la obligación contractual de realizar memorias de cálculo reales por nodo. No se aceptará el dimensionamiento basado únicamente en las estimaciones del DBCD.

---

## 3. REGISTRO DE AUDITORÍA
- **Auditado por:** OpenGravity Sovereign Agent (Tone: Forensic Neutral)
- **Aprobado por:** Dirección Técnica LFC
- **Versión:** 2.0 - SICC Methodology Punto 42
