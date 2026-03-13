# INTERFACES CTC-PTC VIRTUAL - SICC LFC
## APP La Dorada-Chiriguaná - Comunicación Vital entre Sistemas

**Estado:** ✅ **SANEADO (MÉTODO KARPATHY)**  
**Fecha:** 13 de marzo de 2026  
**Responsable:** Administrador Contractual EPC  
**Estándar Base:** FRA 49 CFR Part 236 Annex C / AAR S-9202 (EMP)

---

## 🎯 **1. PROPÓSITO Y ALCANCE**

### **1.1 PROPÓSITO**
Este documento define la interfaz de comunicación entre el **CTC (Control de Tráfico Centralizado)** y el **Vital PTC Server**. Se elimina el uso de protocolos propietarios como el FFFIS de Alstom y se estandariza bajo protocolos de comunicación vital IP abiertos según FRA 236.

### **1.2 ALCANCE**
- **Protocolo Vital:** Intercambio de Autorizaciones de Movimiento (MA).
- **Protocolo de Seguridad:** Autenticación y cifrado de extremo a extremo.
- **Red:** Backbone de Fibra Óptica (CCO) y TETRA (Campo).
- **Interoperabilidad:** Se renuncia a Gateways técnicos de protocolo. La interoperabilidad se gestiona vía Interfaz Operacional (Stop & Switch).

---

## 📡 **2. ARQUITECTURA DE INTERFAZ (VITAL IP)**

### **2.1 STACK DE PROTOCOLOS**
El SICC LFC utiliza un stack de comunicaciones basado en estándares abiertos:
1. **Capa de Aplicación:** EMP (Edge Message Protocol) / AAR S-9202.
2. **Capa de Transporte:** TCP/IP con redundancia de ruta.
3. **Capa de Seguridad:** Cifrado AES-256 y firmas digitales (HMAC) para garantizar que el mensaje no ha sido alterado (SIL-4).

### **2.2 FLUJO DE DATOS VITALES**
Se elimina el concepto de "Radio Block Center (RBC)" de ETCS. El **Vital PTC Server** recibe las solicitudes del despachador (vía CTC) y las valida contra la lógica de enclavamiento antes de emitirlas al OBC del tren.

---

## 🔧 **3. ELIMINACIÓN DE GATEWAYS TÉCNICOS**

### **3.1 JUSTIFICACIÓN TÉCNICA (DBCD)**
Siguiendo la Regla 23 del DBCD_CRITERIA, se elimina el ítem "Gateway de Interoperabilidad UIC 918-4". 
- **Riesgo Eliminado:** Dependencia de traducciones de protocolo complejas que comprometen la seguridad vital.
- **Solución:** Interoperabilidad por procedimiento operativo en Chiriguaná.

---

## 🔒 **4. REQUISITOS DE RENDIMIENTO**
- **Latencia CTC-PTC:** < 50ms.
- **Disponibilidad del Enlace:** 99.99% (SIL-4).
- **Integridad de Datos:** Probabilidad de error no detectado < 10^-9.

---

## 📋 **5. CONTROL DE VERSIONES (PURGE LOG)**

| Versión | Fecha | Responsable | Cambio (Karpathy Purge) |
|:---:|:---:|:---|:---|
| **v2.0** | 13/03/2026 | Admin. Contractual | **RE-ESCRITURA TOTAL**. Protocolo FFFIS eliminado. Gateway UIC eliminado. Alineado con Vital IP / FRA 236. |
| **v1.0** | 27/01/2025 | Ing. Integración | Versión obsoleta basada en Alstom FFFIS (HALLUCINATED). |

---
**Documento Alineado con el SSOT (DBCD_CRITERIA.md).**
