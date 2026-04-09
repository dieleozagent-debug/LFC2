# DT-SICC-2026-013: Estandarización del Bus Vital 110V DC y Autonomía Optimizada

## .Section 10: Metadatos para Auto-Ejecución (YAML)
```yaml
dt_metadata:
  id: "DT-SICC-2026-013"
  fecha: "2026-04-09"
  especialidad: "Electrica / Señalización"
  estado: "aprobado"
  prioridad: "Crítica (Ahorro CAPEX)"
  impacto_capex: "Reducción por optimización de autonomía (8h vs 12h)"

normativa_aplicable:
  - FRA_49_CFR_236.551: "Estabilidad de voltaje ±10%"
  - AREMA_C&S_Manual: "Referencia para 110V DC en enclavamientos"
  - DBCD_V002: "Criterio de Diseño Propuesto"
```

## 1. Justificación Técnica (Recalibración de Sanidad)
Se formaliza la segregación de cargas eléctricas para proteger la integridad fail-safe del sistema SICC. El uso de **110V DC** para periféricos vitales (ENCE, barreras, etc.) asegura inmunidad ante fluctuaciones de la red AC y reduce la dependencia de inversores de potencia, alineado con la normativa **FRA §236.551**.

Asimismo, se recalibra el criterio de autonomía para evitar un sobredimensionamiento catastrófico (CAPEX Trap). La autonomía se define como un **Criterio Propuesto**, no un mandato inamovible, permitiendo optimizaciones basadas en la criticidad del nodo.

## 2. Parámetros de Diseño (SICC v7.1)
| Parámetro | Valor Propuesto | Base de Referencia |
|:---|:---|:---|
| **Carga por Nodo (Señalización)** | **5 - 10 kW** | DBCD V002 |
| **Carga por Nodo (Telecom)** | **2 - 5 kW** | DBCD V002 |
| **Tensión Vital** | **110V DC** | FRA / AREMA |
| **Tensión Telecom** | **48V DC** | ETSI / DBCD |
| **Autonomía (Red Pública)** | **8 Horas** (Mínima) | Propuesta DBCD |
| **Autonomía (Remoto Solar)** | **48 Horas** (Radiación nula) | Propuesta DBCD |

## 3. Resolución de Topología
1. **Escenario A (Con Red):** Rectificadores redundantes AC/DC con banco de baterías VRLA/LiFePO4. Respaldo terciario mediante generador Diésel opcional según criticidad.
2. **Escenario B (Sin Red):** Arquitectura Híbrida (Solar MPPT + LiFePO4).

---

## 4. Registro de Auditoría
- **Iniciador:** Agente OpenGravity (Recalibración Forense)
- **Aprobador:** Diego Zúniga (Verificación de Sanidad CAPEX)
- **Pureza SICC:** 100% (Alineado con DBCD V002)
