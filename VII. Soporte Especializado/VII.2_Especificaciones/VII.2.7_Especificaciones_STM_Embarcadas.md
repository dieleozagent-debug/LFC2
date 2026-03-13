# ESPECIFICACIONES OBC (ON-BOARD COMPUTER) - SICC LFC
## APP La Dorada-Chiriguaná - Computador de Abordo Vital

**Estado:** ✅ **SANEADO (MÉTODO KARPATHY)**  
**Fecha:** 13 de marzo de 2026  
**Responsable:** Administrador Contractual EPC  
**Estándar Base:** FRA 49 CFR Part 236 Subpart I / AREMA / SIL-4

---

## 🎯 **1. PROPÓSITO Y ALCANCE**

### **1.1 PROPÓSITO**
Este documento define las especificaciones técnicas del **OBC (On-Board Computer)**, el componente vital embarcado en las 15 locomotoras de LFC. El OBC es responsable de aplicar la protección de sobrepaso de velocidad (ATP) y garantizar que el tren opere dentro de los límites de la Autorización de Movimiento (MA) virtual.

### **1.2 ALCANCE**
- **Funcionalidades PTC Virtual:** Bloque dinámico, curvas de frenado FRA.
- **Detección de Posición:** GPS Diferencial + IMU + GITS (Base de datos).
- **Comunicaciones:** Módulo de radio **TETRA** (Digital Trunked).
- **Control de Tren:** Interfaz vital con el sistema de freno neumático.

---

## 🔧 **2. ARQUITECTURA DEL OBC VIRTUAL**

### **2.1 COMPONENTES DEL HARDWARE**
1. **CPU Vital:** Procesador SIL-4 redundante (2oo2 o superior).
2. **Módulo GNSS/IMU:** Receptor satelital de alta precisión y acelerómetros para odometría vital.
3. **Módulo de Comunicaciones TETRA:** Interfaz de datos de misión crítica con el Vital PTC Server (CCO).
4. **DMI (Driver Machine Interface):** Pantalla en cabina bajo estándar FRA para visualización de MA y alertas.
5. **EOR (Event Recorder):** Registrador jurídico de eventos.

### **2.2 ESPECIFICACIONES ELÉCTRICAS**
- **Alimentación:** 24V DC / 74V DC (Rango ferroviario estándar).
- **Protección EMC:** Según EN 50121-3-2 para entorno de locomotora diesel.

---

## 🛡️ **3. FUNCIONES VITALES (ATP)**

### **3.1 SUPERVISIÓN DE VELOCIDAD**
El OBC debe implementar curvas de velocidad dinámicas basadas en:
- Perfil de vía (GITS).
- Cargo del tren (Peso/Longitud).
- Límites de autoridad (MA).

### **3.2 CONTROL DE FRENADO**
- **Intervención Vital:** Si el maquinista no reduce la velocidad según la alerta del DMI, el OBC debe aplicar el frenado de penalidad automáticamente.
- **Fallas en Radio:** Al perder cobertura TETRA, el OBC aplica modo de seguridad (Safe Mode) restringiendo la velocidad hasta recuperar enlace o recibir autorización manual.

---

## 📡 **4. COMUNICACIONES Y POSICIONAMIENTO**

- **Eliminación de GSM-R:** No se permite hardware ni software GSM-R.
- **Eliminación de Eurobalizas:** La sincronización de posición se realiza mediante GPS y base de datos de vía. Solo se autorizan Tags RFID puntuales en zonas de sombra GNSS.

---

## 📋 **5. CONTROL DE VERSIONES (PURGE LOG)**

| Versión | Fecha | Responsable | Cambio (Karpathy Purge) |
|:---:|:---:|:---|:---|
| **v2.0** | 13/03/2026 | Admin. Contractual | **RE-ESCRITURA TOTAL**. STM eliminado. OBC estandarizado bajo FRA 236 y TETRA. |
| **v1.0** | 27/01/2025 | Ing. Embarcados | Versión obsoleta basada en ETCS STM (HALLUCINATED). |

---
**Documento Alineado con el SSOT (DBCD_CRITERIA.md).**
