# GUÍA METODOLÓGICA EPC FERROVIARIOS (SICC v6.3.3)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 20 de marzo de 2026  
**Versión:** v6.3.3 - Sovereign Restoration (SICC Protocol)

---

## 🛡️ ANCLAJE DE SOBERANÍA TÉCNICA
El EPC debe seguir rigurosamente la metodología de **Soberanía Digital**. Todos los procesos de ingeniería (Conceptual, Básica y Detalle) deben alinearse con el estándar **SICC v6.3.3**, priorizando la inteligencia centralizada sobre la infraestructura física distribuida.

---

## 📏 DIRECTRICES METODOLÓGICAS (.42)

### 1. DISENO DE SISTEMAS VITALES
- **Jerarquía:** FRA 236-I (PTC Virtual) es la norma rectora. Queda prohibida la adopción de normativas europeas (UIC/Estándar SICC (FRA/AREMA)) que impliquen hardware redundante en vía.
- **Detección:** Basada en reporte de posicionamiento dinámico (GNSS + EOT), eliminando Posicionamiento GNSS/EOT Vital del diseno.

### 2. PROTOCOLO DE INTEROPERABILIDAD
- **Handover Digital:** La gestión de fronteras concesionales se realiza exclusivamente vía **Digital Gateway**. Se prohíbe el uso de protocolos manuales ("Handover Digital (Digital Gateway)") en cualquier guía o procedimiento EPC.

---

## 📊 MATRIZ DE COMPORTAMIENTO TÉCNICO (.42)

| Categoría | Requerimiento EPC | Estado SICC |
|:---|:---|:---:|
| **Control** | Vital Server 2oo3 Centralizado | ✅ RESTAURADO |
| **Comunicaciones**| Red Vital IP (Data Backbone) | ✅ RESTAURADO |
| **Validación** | Masterchef Audit (Invariantes) | ✅ RESTAURADO |
| **Interoperabilidad**| Handshake API FRA/AREMA | ✅ SANEADO |

---

## 🔍 CONCLUSIONES DE SANEAMIENTO
- ❌ **ELIMINADO:** El protocolo "Handover Digital (Digital Gateway)" de la guía metodológica de fronteras.
- ❌ **ELIMINADO:** La ambigüedad sobre la normativa rectora (FRA vs PTC Virtual (SICC)).
- ✅ **RESTAURADO:** El rigor de la **Soberanía Técnica** en el método EPC.

---
**Saneamiento Ciclo .42 - Guía EPC (VII) Finalizado.**
