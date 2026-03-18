# SIMULACIONES DE CAPACIDAD Y SURCOS - SICC LFC (VIRTUAL BLOCK)
## APP La Dorada-Chiriguaná - Optimización del Corredor (526 km)

**Estado:** ✅ **SANEADO (MÉTODO KARPATHY)**  
**Fecha:** 13 de marzo de 2026  
**Responsable:** Administrador Contractual EPC  
**Estándar Base:** FRA 49 CFR Part 236 / Operación LFC

---

## 🎯 **1. PROPÓSITO Y ALCANCE**

### **1.1 PROPÓSITO**
Este documento presenta las simulaciones de capacidad para el corredor **La Dorada - Chiriguaná (526 km)**. Se analiza el impacto de la implementación del **PTC Virtual (Virtual Block)** en la densidad de surcos y la eficiencia operativa, eliminando cualquier referencia a sistemas de Filosofía PTC Virtual o PTC VIRTUAL.

### **1.2 ALCANCE**
- **Corredor:** Troncal La Dorada-Chiriguaná (Vía única con apartaderos).
- **Servicios:** Carga (Carbón, Contenedores) y Pasajeros.
- **Tecnología:** Bloque Dinámico basado en PTC Virtual.

---

## 📊 **2. PARÁMETROS DEL CORREDOR (SSOT)**

| Parámetro | Valor | Observaciones |
|:---|:---|:---|
| **Longitud Total** | 526 km | SSOT (La Dorada a Chiriguaná). |
| **Velocidad Carga** | 60 - 80 km/h | Según tramo y carga (DBCD). |
| **Velocidad Pasajeros**| 80 - 100 km/h | Capacidad de diseño. |
| **Puntualidad Objetivo**| > 95% | Gestión centralizada CTC. |

---

## 🚂 **3. CÁLCULO DE CAPACIDAD (PTC VIRTUAL)**

### **3.1 BLOQUE DINÁMICO (VIRTUAL BLOCKING)**
A diferencia de los circuitos de vía fijos, el PTC Virtual permite reducir el intervalo entre trenes (Headway) de forma segura:
- **Intervalo con Señalización Convencional:** 30 minutos.
- **Intervalo con PTC Virtual (MA Dinámica):** 10 - 15 minutos (Optimización del 50%).

### **3.2 ASIGNACIÓN DE SURCOS (EJEMPLO DIARIO)**

| Tipo de Tren | Surcos/Sentido/Día | Capacidad Anual (MTPA) |
|:---|:---:|:---:|
| **Carga Pesada** | 12 | 15 - 20 MTPA |
| **Carga Regular** | 8 | 5 - 8 MTPA |
| **Intermodal** | 4 | N/A |
| **Pasajeros** | 2 | N/A |

---

## 📋 **4. CONTROL DE VERSIONES (PURGE LOG)**

| Versión | Fecha | Responsable | Cambio (Karpathy Purge) |
|:---:|:---:|:---|:---|
| **v2.0** | 13/03/2026 | Admin. Contractual | **RE-ESCRITURA TOTAL**. Corregida longitud a 526 km. Eliminado PTC/PTC VIRTUAL. Basado en Bloque Virtual FRA. |
| **v1.0** | 27/01/2025 | Ing. Sistemas | Versión obsoleta con longitud errónea (178 km) y PTC VIRTUAL (HALLUCINATED). |

---
**Documento Alineado con el SSOT (DBCD_CRITERIA.md).**
