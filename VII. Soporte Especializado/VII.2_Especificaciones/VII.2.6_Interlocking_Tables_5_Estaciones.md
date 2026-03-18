# TABLAS DE ENCLAVAMIENTO VIRTUAL - SICC LFC
## APP La Dorada-Chiriguaná - Lógica de Seguridad de Rutas

**Estado:** ✅ **SANEADO (MÉTODO KARPATHY)**  
**Fecha:** 13 de marzo de 2026  
**Responsable:** Administrador Contractual EPC  
**Estándar Base:** FRA 49 CFR Part 236 I / AREMA C&S / SIL-4

---

## 🎯 **1. PROPÓSITO Y ALCANCE**

### **1.1 PROPÓSITO**
Este documento define la lógica de **Enclavamiento Virtual** para las 5 estaciones centrales de LFC. Se elimina la señalización luminosa lateral (física) y se sustituye por **Puntos de Control Virtual** y aspectos de cabina (CAB Signaling) gestionados por el Vital PTC Server.

### **1.2 ALCANCE**
- **Estaciones:** La Dorada, Puerto Salgar, Honda, Mariquita, Chiriguaná.
- **Activos Controlados:** Motor de desvío (Switch machines), Ocupación lógica de vía.
- **Control de Autoridad:** Bloqueo de rutas y protección contra conflictos.

---

## 🚉 **2. LÓGICA DE ESTACIONES (BLOQUE VIRTUAL)**

### **2.1 PRINCIPIOS DE ENCLAVAMIENTO PTC**
1. **Ruta Virtual:** Una ruta se considera establecida cuando los desvíos están bloqueados mecánicamente y el Vital PTC Server reserva el segmento para un tren específico.
2. **Señales Virtuales:** Los aspectos (Verde, Amarillo, Rojo) existen solo en la lógica del sistema y se transmiten al DMI del tren vía TETRA.
3. **Liberación por Odometría:** La liberación de la ruta se valida mediante el reporte de posición GPS/IMU del tren y la confirmación de integridad (EOT).

### **2.2 TABLA DE ENCLAVAMIENTO (EJEMPLO LA DORADA)**

| Ruta ID | Origen | Destino | Desvíos (Posición) | Condiciones de Vía | Aspecto DMI |
|:---:|:---|:---|:---|:---|:---|
| **R-LD-001** | North Gate | Main Track 1 | Desvío 1 (N) | Vía 1 Libre | PROCEED (Green) |
| **R-LD-002** | North Gate | Siding 3 | Desvío 1 (R) | Vía 3 Libre | RESTRICTED (Yellow) |
| **R-LD-003** | Any | Any Conflict | N/A | Vía Ocupada | STOP (Red) |

---

## 🛡️ **3. SEGURIDAD VITAL (SIL-4)**

### **3.1 PROTECCIÓN DE RUTA**
- **Approach Locking Virtual:** Una vez emitida una MA sobre una ruta, el enclavamiento prohíbe el cambio de posición de desvíos hasta que el tren haya liberado la sección o se haya aplicado un tiempo de guarda tras la cancelación de la autoridad.
- **Detección de Desvíos:** La posición real de las puntas de desvío es reportada al ENCE por cableado directo o WIU Vital y validada por el servidor antes de emitir cualquier color distinto a Rojo.

---

## 📋 **4. CONTROL DE VERSIONES (PURGE LOG)**

| Versión | Fecha | Responsable | Cambio (Karpathy Purge) |
|:---:|:---:|:---|:---|
| **v2.0** | 13/03/2026 | Admin. Contractual | **RE-ESCRITURA TOTAL**. Señales físicas eliminadas. Lógica virtualizada según FRA 236. |
| **v1.0** | 27/01/2025 | Ing. Señalización | Versión obsoleta basada en Filosofía PTC Virtual (HALLUCINATED). |

---
**Documento Alineado con el SSOT (DBCD_CRITERIA.md).**
