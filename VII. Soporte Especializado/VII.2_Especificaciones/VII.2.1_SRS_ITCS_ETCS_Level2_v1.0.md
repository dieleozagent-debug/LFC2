# SRS PTC VIRTUAL - ESPECIFICACIÓN DE REQUISITOS DEL SISTEMA
## APP La Dorada-Chiriguaná - SICC LFC

**Estado:** ✅ **SANEADO (MÉTODO KARPATHY)**  
**Fecha:** 13 de marzo de 2026  
**Responsable:** Administrador Contractual EPC  
**Estándar Base:** FRA 49 CFR Part 236 Subpart I / AREMA / AAR

---

## 🎯 **1. PROPÓSITO Y ALCANCE**

### **1.1 PROPÓSITO**
Este documento define las **Especificaciones de Requisitos del Sistema (SRS)** para el sistema **PTC VIRTUAL** (Positive Train Control) del proyecto LFC. Basado en la arquitectura de **Bloque Virtual (Moving Block)**, este sistema garantiza la seguridad ferroviaria mediante el control vital de autoridad de movimiento sobre radio TETRA.

### **1.2 ALCANCE**
El sistema PTC Virtual cubre:
- **Corredor LFC:** La Dorada - Chiriguaná (526 km).
- **Control Centralizado:** Gestión desde el CCO La Dorada mediante Servidor Vital PTC.
- **Material Rodante:** 15 locomotoras con equipamiento OBC (On-Board Computer) FRA-Compliant.
- **Interoperabilidad:** Interfaz operacional **Stop & Switch** en Chiriguaná (FENOCO).

### **1.3 JERARQUÍA NORMATIVA (DBCD)**
- **FRA 49 CFR 236(I):** Estándar mandatorio para sistemas PTC.
- **AREMA C&S Manual:** Ingeniería de señalización y comunicaciones.
- **AAR S-9101:** Requisitos de interoperabilidad de material rodante.
- **CENELEC EN 50126/128/129:** Aplicación de SIL-4 para funciones vitales.

---

## 📊 **2. REQUISITOS FUNCIONALES (ARCHITECTURE VIRTUAL)**

### **2.1 LÓGICA DE BLOQUE VIRTUAL**
- **RF-001:** El sistema debe calcular la **Autorización de Movimiento (MA)** basada en la posición georeferenciada del tren y la ocupación lógica de la vía.
- **RF-002:** El sistema debe implementar curvas de frenado vital (Braking Curves) según el estándar FRA 236.
- **RF-003:** La detección de ocupación de vía se basa en la posición del OBC y la integridad del tren (EOT), eliminando la necesidad de señales físicas y circuitos de vía continuos.

### **2.2 POSICIONAMIENTO Y DETECCIÓN**
- **RF-004:** El sistema debe determinar la posición mediante **GPS Diferencial + IMU (Odometría)** con una precisión sub-métrica.
- **RF-005:** Se eliminan las Eurobalizas. La corrección de posición se realiza mediante una **Base de Datos de Vía Georeferenciada (GITS)** y sensores puntuales de respaldo (Tags/WIU) solo en puntos críticos.

### **2.3 COMUNICACIONES CRÍTICAS**
- **RF-006:** La comunicación vital se realiza exclusivamente sobre red **TETRA** (Digital Trunked Radio).
- **RF-007:** Se prohíbe el uso de GSM-R y protocolos UIC incompatibles con el estándar de radio del contrato.

---

## 🛡️ **3. REQUISITOS DE SEGURIDAD (SIL)**

### **3.1 INTEGRIDAD VITAL**
- **RS-001:** El **Servidor Vital PTC** y el **OBC** deben cumplir con **SIL-4** según IEC 62443 / EN 50129.
- **RS-002:** El sistema debe garantizar que un tren NO reciba una MA si existe una ocupación lógica o un conflicto de ruta en los 5 Enclavamientos (ENCE) centralizados.

### **3.2 MODOS DE DEGRADACIÓN**
- **RS-003:** Ante pérdida de radio TETRA, el OBC debe aplicar la curva de frenado de servicio hasta la detención segura (Safe State).
- **RS-004:** La redundancia de enlace se garantiza mediante el Backbone de Fibra Óptica y respaldo Satelital (Starlink/Similar).

---

## 🏗️ **4. ARQUITECTURA TÉCNICA (SICC LFC)**

### **4.1 COMPONENTES CORE**
1. **Vital PTC Server:** Ubicado en CCO La Dorada. Gestiona la lógica de autoridad y el RBC Virtual.
2. **On-Board Computer (OBC):** Cerebro vital en locomotora encargado de la protección (ATP).
3. **ENCE (5 Unidades):** Enclavamientos lógicos en Zapatosa, García Cadena, Barrancabermeja, P. Berrio y La Dorada.
4. **SICC-HMI:** Interfaz del despachador en el CTC.

### **4.2 INTEROPERABILIDAD FENOCO**
- **Protocolo:** Stop & Switch.
- **Interfaz:** Manual/Operacional. Se elimina el Gateway técnico Alstom ITCS y protocolos propietarios.

---

## 📋 **5. CONTROL DE VERSIONES (PURGE LOG)**

| Versión | Fecha | Responsable | Cambio (Karpathy Purge) |
|:---:|:---:|:---|:---|
| **v2.0** | 13/03/2026 | Admin. Contractual | **RE-ESCRITURA TOTAL**. Eliminado ETCS, GSM-R y Eurobalizas. Alineado con FRA 236 y PTC Virtual. |
| **v1.0** | 02/10/2025 | Ing. Sistemas | Versión obsoleta basada en ETCS (HALLUCINATED). |

---
**Documento Alineado con el SSOT (DBCD_CRITERIA.md).**
