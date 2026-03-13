# PLAN DE POSICIONAMIENTO Y DETECTORES PUNTUALES - SICC LFC
## APP La Dorada-Chiriguaná - Referencia Espacial de Trenes

**Estado:** ✅ **SANEADO (MÉTODO KARPATHY)**  
**Fecha:** 13 de marzo de 2026  
**Responsable:** Administrador Contractual EPC  
**Estándar Base:** AREMA Section 21 / FRA 236 Annex C

---

## 🎯 **1. PROPÓSITO Y ALCANCE**

### **1.1 PROPÓSITO**
Este documento define la estrategia de posicionamiento del sistema PTC Virtual. Se elimina la infraestructura de Eurobalizas físicas cada 150m y se sustituye por un modelo de **Posicionamiento Satelital Asistido**, optimizando el mantenimiento y el CAPEX del proyecto.

### **1.2 ALCANCE**
- **Sistema Primario:** GPS Diferencial (GNSS) + IMU (Inertial Measurement Unit).
- **Sistema de Corrección:** GITS (Base de Datos de Vía Georeferenciada).
- **Sistema de Respaldo:** Tags pasivos (WIU) en puntos de alta criticidad.
- **Corredor:** 526 km (La Dorada - Chiriguaná).

---

## 📍 **2. ESTRATEGIA DE POSICIONAMIENTO VIRTUAL**

### **2.1 GPS/GNSS + IMU (ODOMETRÍA VITAL)**
El OBC calcula la posición continua del tren mediante:
1. **Receptor Dual GNSS:** Obtiene la posición absoluta con precisión < 1m en cielo abierto.
2. **Algoritmo de Fusión IMU:** Proporciona odometría de alta resolución para tramos sin cobertura satelital (túneles o vegetación densa).
3. **Validación GITS:** El tren cruza su posición calculada con la base de datos de vía cargada en el OBC para corregir cualquier deriva (drift).

### **2.2 DETECTORES PUNTUALES DE RESPALDO (TAGS)**
Se renuncia al uso de Eurobalizas activas/pasivas cada 150m. En su lugar se instalan **Tags RFID pasivos** únicamente en:
- **Entrada/Salida de Estaciones:** Sincronización para enclavamientos lógicos.
- **Túneles y Puentes Críticos:** Puntos de recalibración obligatoria.
- **Puntos de Intercambio (Chiriguaná):** Transición a reglas FENOCO.

**Cantidad estimada:** ~150 unidades para todo el corredor (vs. 8,801 originales).

---

## 🏗️ **3. ESPECIFICACIONES TÉCNICAS (GITS)**

### **3.1 BASE DE DATOS GEODÉSICA**
El "GITS" (Georeferenced Information & Track Survey) es un mapa digital vital que contiene:
- PK exacto de cada cambio de vía.
- Curvatura y peralte (para validación de velocidad).
- Ubicación de pasos a nivel y puentes.
- Zonas de restricción permanente.

### **3.2 ACTUALIZACIÓN VITAL**
Las actualizaciones de la base de datos se propagan vía **TETRA** desde el Vital PTC Server a los OBC, garantizando que todas las locomotoras operen con la misma versión del mundo físico.

---

## 📋 **4. CONTROL DE VERSIONES (PURGE LOG)**

| Versión | Fecha | Responsable | Cambio (Karpathy Purge) |
|:---:|:---:|:---|:---|
| **v2.0** | 13/03/2026 | Admin. Contractual | **RE-ESCRITURA TOTAL**. Eurobalizas eliminadas. Introducción de GPS/IMU + GITS. |
| **v1.0** | 27/01/2025 | Ing. Sistemas | Versión obsoleta con 8,801 Eurobalizas (HALLUCINATED). |

---
**Documento Alineado con el SSOT (DBCD_CRITERIA.md).**
