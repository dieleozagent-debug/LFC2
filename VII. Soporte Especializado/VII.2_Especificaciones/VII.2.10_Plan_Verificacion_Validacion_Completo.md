# PLAN V&V PTC VIRTUAL - VERIFICACIÓN Y VALIDACIÓN
## APP La Dorada-Chiriguaná - SICC LFC

**Estado:** ✅ **SANEADO (MÉTODO KARPATHY)**  
**Fecha:** 13 de marzo de 2026  
**Responsable:** Administrador Contractual EPC  
**Estándar Base:** FRA 49 CFR Part 236 Subpart I / IEEE 1012 / SIL-4

---

## 🎯 **1. PROPÓSITO Y ALCANCE**

### **1.1 PROPÓSITO**
Este documento establece el marco de **Verificación y Validación (V&V)** para el sistema PTC Virtual. Se eliminan todas las actividades de prueba relacionadas con infraestructura obsoleta (PTC VIRTUAL, Red Vital IP / TETRA, Virtual Balise (GNSS)s) y se enfoca en la validación de la arquitectura de Bloque Virtual y comunicaciones TETRA.

### **1.2 ALCANCE**
- **Pruebas de Software Vital:** Vital PTC Server y OBC.
- **Validación de Campo:** Precisión GNSS/IMU y cobertura TETRA.
- **Integración SICC:** Interfaz CTC-PTC y enclavamientos virtuales.

---

## 📊 **2. ESTRATEGIA DE PRUEBAS (FRA COMPLIANT)**

### **2.1 PRUEBAS DE LABORATORIO (FAT)**
1. **Validación de Lógica Vital:** Simulación de 100+ escenarios de colisión/seguridad para validar el Servidor PTC.
2. **Pruebas de Curva de Frenado:** Validación del OBC frente a los algoritmos de frenado de servicio y emergencia de FRA 236.
3. **Ciberseguridad:** Pruebas de penetración en la interfaz Vital IP / TETRA.

### **2.2 PRUEBAS EN SITIO (SAT / DYNAMIC TESTS)**
1. **Calibración GITS:** Verificación de que la base de datos de vía coincide con la geografía real del corredor (526 km).
2. **Validación de Odometría:** Pruebas de pérdida de GNSS en túneles para validar la precisión del IMU/Odometría.
3. **Cobertura TETRA:** Verificación de latencia y pérdida de paquetes en todo el corredor.

---

## 🛡️ **3. CRITERIOS DE ACEPTACIÓN SIL-4**

- **MT THE (Mean Time to Hazardous Event):** > 10^9 horas por función vital.
- **Detección de Fallos:** El sistema debe detectar discrepancias entre el reporte de posición y el GITS en < 2 segundos.
- **Fail-Safe TETRA:** Ante pérdida de comunicación > 5 segundos (configurable), el tren debe recibir o aplicar restricción de velocidad automática.

---

## 📋 **4. CONTROL DE VERSIONES (PURGE LOG)**

| Versión | Fecha | Responsable | Cambio (Karpathy Purge) |
|:---:|:---:|:---|:---|
| **v2.0** | 13/03/2026 | Admin. Contractual | **RE-ESCRITURA TOTAL**. Eliminadas pruebas PTC VIRTUAL/Red Vital IP / TETRA. Alineado con FRA 236. |
| **v1.0** | 27/01/2025 | Ing. Calidad | Versión obsoleta basada en V&V PTC VIRTUAL (HALLUCINATED). |

---
**Documento Alineado con el SSOT (DBCD_CRITERIA.md).**
