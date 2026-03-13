# TEMPLATES METODOLÓGICOS - PROYECTOS EPC FERROVIARIOS v2.0
## Versión Saneada (Soberanía Tecnológica) - APP La Dorada-Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Versión:** 2.0 - Purge Release
**Metodología:** Punto 42 (Karpathy Saneamiento) - Ciclo Inverso

---

## 📋 TEMPLATE T01: FICHA DE SISTEMA (SANEADO)
Este template debe usarse para definir sistemas bajo el estándar **PTC Virtual / Vital IP**.

### Ejemplo de Integración Saneada:
| Sistema Externo | Tipo Interface | Protocolo | Datos Intercambiados | Criticidad |
|:----------------|:---------------|:----------|:---------------------|:-----------|
| **Tren (OBC)** | Ethernet/TETRA | **Vital IP** | MA, Posición, Integridad | CRÍTICA |
| **FENOCO** | Operacional | **Stop & Switch** | Validación de Frontera | ALTA |

---

## 📋 TEMPLATE T02: ANÁLISIS DE REQUISITOS (SANEADO)

### Requisitos Funcionales de Seguridad:
1. **Autorización de Movimiento (MA):** Transmisión vital vía **Vital IP** encapsulado en TETRA.
2. **Integridad del Tren:** Reporte continuo del dispositivo **EOT** para liberación de V-Blocks.
3. **Interoperabilidad:** Cumplimiento estricto del procedimiento operacional en el punto de intercambio (PK 526).

---

## 📋 TEMPLATE T04: ESPECIFICACIÓN TÉCNICA (SANEADO)

### 1. ALCANCE TÉCNICO
- **Tecnología:** PTC Virtual (Soberanía Tecnológica).
- **Redundancia:** Servidor Maestro 2oo3 sobre hardware COTS.
- **Canal de Datos:** Red Unificada TETRA de misión crítica.

---

## ✅ CONCLUSIONES DE TEMPLATES:

Los templates metodológicos han sido purgados de cualquier referencia a tecnologías propietarias o protocolos cerrados. El uso de estos templates garantiza que la documentación del proyecto sea consistente con los **Criterios Técnicos Maestros** y el **Brain** del agente.

**Saneamiento Ciclo 7 - Templates Finalizado.**
