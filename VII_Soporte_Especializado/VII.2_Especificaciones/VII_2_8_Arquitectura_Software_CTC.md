# ARQUITECTURA SOFTWARE CTC - CENTRO DE CONTROL INTEGRADO
## APP La Dorada-Chiriguaná - Gestión de Tráfico PTC Virtual

**Estado:** ✅ **SANEADO (MÉTODO KARPATHY)**  
**Fecha:** 13 de marzo de 2026  
**Responsable:** Administrador Contractual EPC  
**Estándar Base:** EN 50716:2023 / FRA 49 CFR Part 236

---

## 🏗️ **1. ARQUITECTURA GENERAL**

### **1.1 MODELO DE MICROSERVICIOS VIRTUALIZADOS**
El CTC de LFC se basa en una arquitectura de microservicios contenerizados, eliminando la dependencia de gateways técnicos propietarios.

1. **Service Authority Manager (SAM):** Microservicio encargado de solicitar y gestionar las Autorizaciones de Movimiento (MA) ante el Vital PTC Server.
2. **Virtual Signal Service:** Gestiona los aspectos que se muestran en el DMI de las locomotoras.
3. **Switch Control Wrapper:** Interfaz de control para los motores de desvío en el corredor.
4. **Traffic Planner:** Motor de optimización de surcos basado en el modelo operacional de LFC.

---

## 📡 **2. ESTRATEGIA DE COMUNICACIÓN**

### **2.1 PROTOCOLO VITAL IP (FRA-COMPLIANT)**
Se descarta el protocolo FFFIS. La comunicación CTC-PTC se realiza mediante:
- **Transporte:** TCP/IP sobre red de fibra óptica redundante.
- **Mensajería:** Formatos abiertos basados en el estándar FRA 236 para PTC, garantizando interoperabilidad y eliminando cajas negras de proveedores.
- **Cifrado:** TLS 1.3 con certificados de dispositivo (PKI).

---

## 🛡️ **3. SEGURIDAD DEL SOFTWARE (SIL-2/SIL-4)**

- **Integridad de Datos:** Uso de CRCs de seguridad ferroviaria en todos los mensajes de control.
- **Segregación:** Capa HMI (Presentación) estrictamente separada de la Lógica de Control (Servicios) mediante API Gateways endurecidos.

---

## 📋 **4. CONTROL DE VERSIONES (PURGE LOG)**

| Versión | Fecha | Responsable | Cambio (Karpathy Purge) |
|:---:|:---:|:---|:---|
| **v2.0** | 13/03/2026 | Admin. Contractual | **RE-ESCRITURA TOTAL**. Eliminado FFFIS y Gateways. Basado en Arquitectura Vital IP. |
| **v1.0** | 27/01/2025 | Ing. Sistemas | Versión obsoleta basada en Alstom PTC (HALLUCINATED). |

---
**Documento Alineado con el SSOT (DBCD_CRITERIA.md).**
