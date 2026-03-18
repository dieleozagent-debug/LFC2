# REVISIÓN DE DISPONIBILIDAD (Red Vital LFC) - JUSTIFICACIÓN DEL 99.95%
## APP La Dorada-Chiriguaná - Análisis de Uptime Realista

**Estado:** ✅ **SANEADO (MÉTODO KARPATHY)**  
**Fecha:** 13 de marzo de 2026  
**Responsable:** Administrador Contractual EPC  
**Estándar Base:** EN 50126 / DBCD_CRITERIA.md (Regla 11)

---

## 🎯 **1. PROPÓSITO Y ALCANCE**

### **1.1 PROPÓSITO**
Este documento justifica técnicamente la adopción de una **Disponibilidad Operacional del 99.95%** para el sistema PTC Virtual, en lugar del requerimiento teórico del 100% (físicamente inalcanzable). Se alinea con la Regla 11 del DBCD.

### **1.2 ALCANCE**
- **Sistema Vital:** Vital PTC Server.
- **Red de Comunicaciones:** TETRA / Fibra Óptica.
- **Sistema Embarcado:** OBC y sensores de posicionamiento.

---

## 📊 **2. ANÁLISIS TÉCNICO DE DISPONIBILIDAD**

### **2.1 LIMITACIONES DEL REQUISITO 100%**
Matemáticamente, una disponibilidad del 100% implica un **MTTR (Tiempo Medio de Reparación) igual a cero**, lo cual es imposible en un sistema distribuido de 526 km. Incluso con redundancia extrema, el tiempo de conmutación (switching) genera una ventana de indisponibilidad técnica.

### **2.2 ANÁLISIS POR COMPONENTES PTC VIRTUAL**

| Activo | Redundancia | Disponibilidad Estimada | Justificación |
|:---|:---:|:---:|:---|
| **Vital PTC Server** | 2oo3 (Triple) | 99.99% | Tolerancia a falla de un CPU sin parada. |
| **Radio TETRA** | N+1 (Bases) | 99.95% | Resiliencia de red digital contra fallas de sitio. |
| **Odometría (OBC)** | Doble GNSS/IMU | 99.98% | Continuidad de posición en zonas de sombra. |
| **SISTEMA INTEGRAL**| **Estratégica** | **99.95%** | **Objetivo realista alineado al DBCD.** |

---

## 🛡️ **3. ESTRATEGIA PARA MAXIMIZAR UPTIME**

1. **Monitoreo Predictivo:** Uso de telemetría en tiempo real desde el OBC y los activos de vía (WIUs) para detectar fatiga de componentes antes del fallo.
2. **Arquitectura Vital IP:** El uso de protocolos IP abiertos permite una recuperación de sesión más rápida que los protocolos propietarios serie (FFFIS/PTC).
3. **Mantenimiento Modular:** Reemplazo de módulos OBC en caliente (Hot-swap) para reducir el MTTR a < 30 minutos.

---

## 📋 **4. CONTROL DE VERSIONES (PURGE LOG)**

| Versión | Fecha | Responsable | Cambio (Karpathy Purge) |
|:---:|:---:|:---|:---|
| **v2.0** | 13/03/2026 | Admin. Contractual | **RE-ESCRITURA TOTAL**. Eliminados Servidor PTC Central y PTC VIRTUAL. Justificación basada en PTC Virtual y TETRA. |
| **v1.0** | 27/01/2025 | Ing. Sistemas | Versión obsoleta basada en componentes PTC VIRTUAL (HALLUCINATED). |

---
**Documento Alineado con el SSOT (DBCD_CRITERIA.md).**
