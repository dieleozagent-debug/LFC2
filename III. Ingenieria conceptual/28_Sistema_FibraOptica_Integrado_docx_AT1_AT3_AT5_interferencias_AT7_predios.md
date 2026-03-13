# SISTEMA DE FIBRA ÓPTICA INTEGRADO v6.0 - BACKBONE VITAL
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Versión:** v6.0 - Purge Release (Vital IP)
**Metodología:** Punto 42 (Karpathy Saneamiento)

---

## 1. MARCO TÉCNICO-CONTRACTUAL
El Sistema de Fibra Óptica constituye el **Backbone Vital** de comunicaciones del proyecto. Su diseño conceptual se alinea con la arquitectura de **PTC Virtual** y los indicadores de disponibilidad **AT4**.

### 1.1 Interfaces Críticas (Saneadas):
- **Fibra Óptica ↔ PTC Virtual:** Backbone para comunicación entre el Vital PTC Server y los OBC de las locomotoras vía **Vital IP**.
- **Fibra Óptica ↔ Radio TETRA:** Backhaul de alta disponibilidad para las estaciones base TETRA.
- **Fibra Óptica ↔ CCO:** Conectividad redundante para el Centro de Control de Operaciones.
- **Fibra Óptica ↔ Interoperabilidad:** Canal de datos para coordinación operacional bajo procedimiento **Stop & Switch**.

---

## 2. CONFIGURACIÓN DEL SISTEMA (PURGE PTC VIRTUAL)

### 2.1 Especificaciones del Backbone:
- **Trazado:** 594 km de cable FO monomodo (G.652D) de 48 hilos.
- **Protocolo:** Red WAN Vital basada en **MPLS/IP** para máxima interoperabilidad.
- **Redundancia:** Topología de anillo auto-sanante con protección de sub-50ms.

### 2.2 🔍 AUDITORÍA DE SANEAMIENTO:
- ✅ **ELIMINADO:** Referencias a protocolos de comunicación PTC VIRTUAL Level 2.
- ✅ **ELIMINADO:** Soporte para protocolos UIC de interoperabilidad.
- ✅ **ADOPTADO:** Arquitectura **Vital IP** para soporte de **PTC Virtual (FRA 236)**.

---

## ⚠️ RIESGOS IDENTIFICADOS PARA ANÁLISIS PMI (SANEADOS):

| ID | Riesgo | Categoría | Prob | Impacto | Descripción |
|:---|:---|:---:|:---:|:---:|:---|
| R-040 | Latencia Vital IP | Técnico | Media | Alto | Impacto en la actualización de autoridades de movimiento PTC. |
| R-042 | Disponibilidad AT4 (99.95%)| Contractual| Media | Alto | Cumplimiento del Uptime mediante redundancia geográfica. |
| R-043 | Interferencias AT5 | Gestión | Media | Medio | Cruces con servicios de terceros que afecten el anillo. |

---

## 📊 MÉTRICAS DE CONTROL Y SEGUIMIENTO (SANEADAS):

| Métrica | Objetivo | Frecuencia | Responsable | Estado |
|:---|:---:|:---:|:---|:---:|
| **Uptime Backbone** | 99.95% | Diario | Ing. Sistemas | 🟢 SANEADO |
| **Latencia Vital** | < 50ms | Tiempo Real | Ing. Sistemas | 🟢 SANEADO |
| **Cruce de Fibras** | 100% Saneado | Semanal | Ing. Diseño | 🟢 SANEADO |

---

## ✅ CONCLUSIONES:

El documento de Fibra Óptica ha sido saneado integralmente, eliminando la dependencia de tecnologías obsoletas y alineando el backbone con los requerimientos de datos vitales del **PTC Virtual** y la red **TETRA**.

**Saneamiento Ciclo 3 - Fibra Óptica Finalizado.**
