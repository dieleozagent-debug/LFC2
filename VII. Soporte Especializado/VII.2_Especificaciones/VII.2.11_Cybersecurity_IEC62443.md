# CYBERSECURITY SICC LFC (IEC 62443) - SEGURIDAD DE LA INFORMACIÓN VITAL
## APP La Dorada-Chiriguaná - Protección de Infraestructura Crítica

**Estado:** ✅ **SANEADO (MÉTODO KARPATHY)**  
**Fecha:** 13 de marzo de 2026  
**Responsable:** Administrador Contractual EPC  
**Estándar Base:** IEC 62443-4-1/4-2 / FRA 49 CFR Part 236 Annex E

---

## 🎯 **1. PROPÓSITO Y ALCANCE**

### **1.1 PROPÓSITO**
Este documento define el Plan de Ciberseguridad para el sistema **PTC Virtual** del proyecto LFC. El objetivo es garantizar la confidencialidad, integridad y disponibilidad del tráfico vital sobre radio TETRA y el backbone de fibra óptica, cumpliendo con el Nivel de Seguridad **SL-3/SL-4** de la IEC 62443.

### **1.2 ALCANCE**
- **Arquitectura PTC:** Vital PTC Server (CCO) y OBC (Locomotoras).
- **Red de Misión Crítica:** TETRA (Datos Vitales).
- **Gestión de Identidades:** Control de acceso basado en roles (RBAC) para despachadores y mantenimiento.

---

## 🔒 **2. CONTROLES DE SEGURIDAD VITAL**

### **2.1 COMUNICACIÓN SEGURA (RADIO TETRA)**
Se descarta el uso de RED TETRA (Misión Crítica). La seguridad en TETRA se basa en:
1. **TEA3/TEA4 (Air Interface Encryption):** Cifrado de la comunicación entre la BTS y el OBC.
2. **E2EE (End-to-End Encryption):** Cifrado adicional de capa de aplicación (AES-256) para mensajes vitales de autoridad de movimiento (MA).
3. **Autenticación Mutua:** Validación bidireccional entre el Vital Server y el OBC antes de cada sesión de control.

### **2.2 PROTECCIÓN DEL SERVIDOR VITAL (CCO)**
- **Segmentación de Red:** Aislamiento físico y lógico del SICC respecto a redes administrativas o externas (Internet).
- **Zonas y Conductos:** Siguiendo la IEC 62443-3-3, el Servidor PTC se ubica en la "Zona Vital" con conductos cifrados hacia el CTC y el Gateway TETRA.

---

## 🛡️ **3. GESTIÓN DE VULNERABILIDADES**

### **3.1 HARDENING DE SISTEMAS**
- **Sistemas Operativos:** Uso de kernels de tiempo real endurecidos (RT-Hardened), eliminando servicios y puertos innecesarios.
- **Detección de Intrusos (IDS):** Monitoreo en tiempo real de patrones de tráfico anómalos en el backbone de fibra óptica.

---

## 📋 **4. CONTROL DE VERSIONES (PURGE LOG)**

| Versión | Fecha | Responsable | Cambio (Karpathy Purge) |
|:---:|:---:|:---|:---|
| **v2.0** | 13/03/2026 | Admin. Contractual | **RE-ESCRITURA TOTAL**. Eliminada seguridad RED TETRA (Misión Crítica)/Virtual Balise (GNSS)s. Alineado con TETRA y FRA 236. |
| **v1.0** | 27/01/2025 | Ing. Ciberseguridad | Versión obsoleta basada en seguridad PTC VIRTUAL (HALLUCINATED). |

---
**Documento Alineado con el SSOT (DBCD_CRITERIA.md).**
