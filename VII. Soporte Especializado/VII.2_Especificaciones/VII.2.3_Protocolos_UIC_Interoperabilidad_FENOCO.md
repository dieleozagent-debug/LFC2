# PROTOCOLO DE INTEROPERABILIDAD OPERACIONAL - SICC LFC
## APP La Dorada-Chiriguaná - Punto de Intercambio Chiriguaná (FENOCO)

**Estado:** ✅ **SANEADO (MÉTODO KARPATHY)**  
**Fecha:** 13 de marzo de 2026  
**Responsable:** Administrador Contractual EPC  
**Estándar Base:** DBCD_CRITERIA.md (Regla 1 y 23)

---

## 🎯 **1. PROPÓSITO Y ALCANCE**

### **1.1 PROPÓSITO**
Este documento establece el procedimiento de **Interoperabilidad Operacional** entre el SICC LFC (PTC Virtual) y la red FENOCO. Siguiendo el SSOT (DBCD_CRITERIA), se renuncia a la integración técnica mediante Gateways y protocolos complejos, adoptando un modelo de transición manual segura.

### **1.2 ALCANCE**
- **Punto de Intercambio:** Estación Chiriguaná (PK 526+000).
- **Modelo:** Stop & Switch.
- **Sistemas Afectados:** PTC Virtual (LFC) vs. Control Operacional (FENOCO).

---

## 🚉 **2. PROCEDIMIENTO "STOP & SWITCH" (PK 526)**

### **2.1 TRANSICIÓN LFC → FENOCO**
1. **Llegada a Chiriguaná:** El tren LFC llega al límite de autoridad (MA) en Chiriguaná bajo supervisión PTC.
2. **Parada Obligatoria (STOP):** El tren debe detenerse completamente en el punto de demarcación virtual.
3. **Cambio de Régimen (SWITCH):** 
   - El maquinista desactiva el OBC PTC (Modo Standby/Isolating).
   - Se solicita autorización de entrada a la red FENOCO vía radio voz (Back-to-Back).
   - La circulación en red FENOCO se rige bajo sus propias reglas operacionales y sistemas de seguridad.

### **2.2 TRANSICIÓN FENOCO → LFC**
1. **Llegada a Frontera:** El tren proveniente de FENOCO se detiene en el límite de la concesión LFC.
2. **Activación PTC:** 
   - El maquinista activa el OBC PTC.
   - El sistema realiza el self-test y obtiene posición vía GPS/GNSS.
   - El Vital PTC Server (LFC) emite la primera MA virtual tras validar la ruta en el enclavamiento virtual de Chiriguaná.

---

## 🚫 **3. PURGA DE INFRAESTRUCTURA TÉCNICA**

### **3.1 ELIMINACIÓN DE GATEWAYS**
Se eliminan todos los ítems de hardware y software destinados a "Gateway UIC" o "PTC VIRTUAL Bridge". La seguridad de la transición recae en el cumplimiento estricto del procedimiento operacional y la demarcación lógica en el SICC.

### **3.2 COMUNICACIONES**
La coordinación entre despachadores (CCO La Dorada y Control FENOCO) se realiza mediante enlace de voz directo y mensajería administrativa, sin intercambio de datos vitales automáticos.

---

## 📋 **4. CONTROL DE VERSIONES (PURGE LOG)**

| Versión | Fecha | Responsable | Cambio (Karpathy Purge) |
|:---:|:---:|:---|:---|
| **v2.0** | 13/03/2026 | Admin. Contractual | **RE-ESCRITURA TOTAL**. Eliminados Gateways y protocolos UIC técnicos. Establecido modo "Stop & Switch". |
| **v1.0** | 27/01/2025 | Ing. Integración | Versión obsoleta basada en Gateways técnicos (HALLUCINATED). |

---
**Documento Alineado con el SSOT (DBCD_CRITERIA.md).**
