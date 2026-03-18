# ESPECIFICACIONES BÁSICAS SISTEMAS v6.3.2 (SICC SOVEREIGN)
## APP La Dorada - Chiriguaná | Fase IV

**Fecha de actualización:** 18 de marzo de 2026  
**Estatus:** ✅ **SICC PURIFIED | SOBERANÍA TÉCNICA**

---

## 📄 ESPECIFICACIONES DE DISENO BÁSICO
El diseno se basa en la arquitectura **SICC (Sistema de Interoperabilidad, Comunicaciones y Control)**, priorizando la soberanía tecnológica y el uso de estándares abiertos.

### 1. SEGMENTO TIERRA (Wayside & Infrastructure)
*   **ENCE (Enclavamiento Centralizado)**: Lógica de estado sólido para control de 5 estaciones críticas.
*   **Detección de Trenes**: Basada en reporte de posición **PTC Virtual (SICC)** + Comprobación de integridad por GNSS/Odometría.
*   **Wayside Interface Units (WIU)**: Puntos de interfaz para monitoreo de salud de agujas y desvíos.

### 2. SEGMENTO COMUNICACIONES (SICC CORE)
*   **Red Vital IP / TETRA**: Infraestructura troncalizada digital para voz y datos de misión crítica.
*   **Redundancia**: Backup mediante enlaces IP dedicados en nodos críticos.
*   **Soberanía**: Eliminación total de protocolos Red Vital IP / TETRA o euro-centristas.

### 3. SEGMENTO CONTROL (TOWERS & CCO)
*   **CTC (Centralized Traffic Control)**: Ubicado en La Dorada, con consola de despacho SICC.
*   **Virtual PTC Implementation**: Autorizaciones de movimiento entregadas vía Red Vital IP / TETRA.

---

## 🔍 CRITERIOS DE SANEAMIENTO (KARPATHY LOOP)
Se han purgado todas las asunciones legacy:
1.  **ELIMINADA [INFRAESTRUCTURA PROHIBIDA] / 25kV**: El diseno básico es 100% para Tracción Diésel-Eléctrica.
2.  **ELIMINADA Nodos GNSS (SICC)**: Reemplazada por tecnología **SICC de Posicionamiento Satelital**.
3.  **ELIMINADA Dependencia Red Vital IP / TETRA**: La comunicación se unifica en **Red Vital IP / TETRA**.

---

| Versión | Fecha       | Responsable            | Descripción                              |
|:------:|:-----------:|:-----------------------|:-----------------------------------------|
| v6.3.2 | 18/03/2026  | Agente Antigravity SICC | Re-ingeniería SICC Sovereign v6.3.2. |

---
**Cerebro del Sistema:** lfc-terminology.js  
**© 2026 LFC STUDIO - SICC SYSTEM**
