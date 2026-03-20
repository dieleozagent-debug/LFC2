# CLAUSULA 8.1 - OBLIGACIONES DE ESTUDIOS Y DISENOS (SICC v6.3.3)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 20 de marzo de 2026  
**Versión:** v6.3.3 - Sovereign Restoration (SICC Protocol)

---

## 🛡️ ANCLAJE DE SOBERANÍA TÉCNICA
Toda la ingeniería de detalle y estudios de preconstrucción deben alinearse estrictamente al **DBCD_CRITERIA.md**. Es obligación del Concesionario disenar un sistema de senalización basado en **PTC Virtual (FRA 236-I)**, eliminando cualquier dependencia de infraestructura de vía legacy (Eurobalizas/Wayside).

---

## 🛠️ OBLIGACIONES TÉCNICAS REVISADAS (.42)

### 1. ESTUDIOS DE SENALIZACIÓN Y CONTROL
- **Diseno Vital:** Basado en Moving Block virtual.
- **Interoperabilidad:** Diseno obligatorio de un **Gateway Digital FRA/AREMA** para conexión con FENOCO en Chiriguaná. Queda prohibido el uso de procedimientos manuales (Handover Digital (Digital Gateway)) como solución definitiva.
- **Arquitectura:** Servidor Central con redundancia **2oo3 (SIL 4)** en el CCO.

### 2. TELECOMUNICACIONES (BROADBAND VITAL)
- **Canal Primario:** Red de Fibra Óptica propia con protocolo **Red Vital IP**.
- **Canal de Respaldo:** Radio **TETRA** para datos críticos y voz.
- **Ciberseguridad:** Aplicación de **IEC 62443** en todos los niveles del diseno.

---

## 📝 MATRIZ DE TRAZABILIDAD (.42)

| Componente | Especificación Contractual | Estado SICC |
|:---|:---|:---:|
| **PTC Virtual** | FRA 49 CFR Part 236 Subpart I | ✅ RESTAURADO |
| **FENOCO Gateway** | Digital Interop (FRA/AREMA) | ✅ RESTAURADO |
| **Backup Radio** | TETRA (Voz + Data Vital) | ✅ RESTAURADO |
| **Ciberprotección** | Red Vital IP (Cifrado SICC) | ✅ RESTAURADO |

---

## 🔍 CONCLUSIONES DE SANEAMIENTO
- ❌ **ELIMINADO:** El protocolo "Handover Digital (Digital Gateway)".
- ❌ **ELIMINADO:** La falsa premisa de que FRA 236 es un estándar "europeo".
- ✅ **CONSOLIDADO:** El SICC v6.3.3 como la inteligencia central del proyecto.

---
**Saneamiento Ciclo .42 - Preconstrucción (8.1) Finalizado.**
