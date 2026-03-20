# ANÁLISIS RAMS Red Vital LFC (EN 50126) - CONFIABILIDAD Y SEGURIDAD VITAL
## APP La Dorada-Chiriguaná - Garantía de Operación SIL-4

**Estado:** ✅ **SANEADO (MÉTODO KARPATHY)**  
**Fecha:** 13 de marzo de 2026  
**Responsable:** Administrador Contractual EPC  
**Estándar Base:** EN 50126-1 / EN 50129 / FRA 236 Subpart I

---

## 🎯 **1. PROPÓSITO Y ALCANCE**

### **1.1 PROPÓSITO**
Este documento presenta el análisis de **Confiabilidad, Disponibilidad, Mantenibilidad y Seguridad (RAMS)** para el ecosistema SICC. El análisis se centra exclusivamente en el núcleo vital soberano: el **Vital PTC Server 2oo3** y la **Red Vital IP / TETRA**, eliminando cualquier referencia a infraestructuras europeas legacy (Track Circuits, Punto de Referencia Virtual físicas).

### **1.2 ALCANCE**
- **Sistema Vital:** Vital PTC Server con redundancia 2oo3.
- **Sistema Embarcado:** OBC con odometría vital GNSS/IMU.
- **Canal de Datos:** Radio TETRA y Backbone de Fibra Óptica.

---

## 🛡️ **2. ANÁLISIS DE SEGURIDAD (SAFETY - SIL-4)**

### **2.1 FUNCIONES VITALES Y THR**
Siguiendo la norma EN 50129, las funciones críticas del PTC Virtual deben cumplir con una Tasa de Peligro Tolerable (THR) de nivel **SIL-4**.

| Función Vital | THR Objetivo (h⁻¹) | Mitigación Técnica |
|:---|:---:|:---|
| **Prevención de Colisión (MA)** | < 10⁻⁹ | Lógica 2oo3 en Vital Server |
| **Protección Sobre-velocidad (PTC)** | < 10⁻⁹ | Supervisión continua OBC |
| **Integridad de Ruta (Interlocking)** | < 10⁻⁹ | Validación Vital de Posición de Desvío |
| **Localización Precisa** | < 10⁻⁸ | Fusión GPS/IMU + Base de Datos GITS |

---

## 📈 **3. DISPONIBILIDAD (AVAILABILITY)**

### **3.1 DISPONIBILIDAD DEL VITAL PTC SERVER**
La redundancia **2oo3** (2 de 3) garantiza que el sistema continúe operando ante la falla de un procesador sin degradar la seguridad.
- **Disponibilidad Objetivo:** ≥ 99.999%
- **MTBF Estimado:** > 100,000 horas.
- **MTTR (Modular Repair):** < 0.5 horas (Hot-swap).

---

## 📋 **4. CONTROL DE VERSIONES (PURGE LOG)**

| Versión | Fecha | Responsable | Cambio (Karpathy Purge) |
|:---:|:---:|:---|:---|
| **v2.0** | 20/03/2026 | Admin. Contractual | **RE-ESCRITURA SICC**. Eliminados PTC Virtual (SICC)/Red Vital IP (Broadband). Basado en Vital PTC Server 2oo3 y Red Vital IP. |
| **v1.0** | 27/01/2025 | Ing. Calidad | Versión obsoleta basada en RAMS PTC VIRTUAL (HALLUCINATED). |

---
**Documento Alineado con el SSOT (DBCD_CRITERIA.md).**
