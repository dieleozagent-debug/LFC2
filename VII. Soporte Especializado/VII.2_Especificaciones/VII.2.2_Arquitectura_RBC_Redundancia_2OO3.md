# ARQUITECTURA VITAL PTC SERVER - SICC LFC
## APP La Dorada-Chiriguaná - Control de Movimiento Vital

**Estado:** ✅ **SANEADO (MÉTODO KARPATHY)**  
**Fecha:** 13 de marzo de 2026  
**Responsable:** Administrador Contractual EPC  
**Estándar Base:** FRA 49 CFR Part 236 Subpart I / AREMA / SIL-4

---

## 🎯 **1. PROPÓSITO Y ALCANCE**

### **1.1 PROPÓSITO**
Este documento define la arquitectura de hardware y procesos del **Vital PTC Server**, el cerebro central del sistema de Bloque Virtual LFC. Este servidor es el encargado de generar las Autorizaciones de Movimiento (MA) y garantizar el cumplimiento de las reglas de seguridad de vía.

### **1.2 ALCANCE**
La arquitectura del Vital PTC Server cubre:
- **Lógica de Bloque Virtual:** Cálculo de separaciones dinámicas.
- **Gestión de Enclavamientos (ENCE):** Control lógico de las 5 estaciones principales.
- **Interfaz TETRA:** Protocolo de comunicación vital con los OBC.
- **Redundancia 2oo3:** Disponibilidad crítica SIL-4.

### **1.3 REFERENCIAS NORMATIVAS**
- **FRA 236(I):** Requisitos técnicos para PTC.
- **AREMA C&S Section 22:** Vital Processing Systems.
- **EN 50129:** Validación de sistemas eléctricos/electrónicos vitales.

---

## 🏗️ **2. ARQUITECTURA GENERAL (REDUNDANCIA 2OO3)**

### **2.1 CONFIGURACIÓN TERNARIA (VOTING LOGIC)**
El Vital PTC Server utiliza una arquitectura de redundancia **2 de 3 (2oo3)**:
1. **Tres Nodos Independientes:** Procesan los datos de vía y posición del material rodante en paralelo.
2. **Lógica de Votación (Voter):** Un comparador vital valida que al menos 2 CPUs coincidan en la salida antes de emitir una MA.
3. **Fail-Safe:** Si un nodo falla o discrepa, es aislado automáticamente, permitiendo que el sistema opere en modo 2oo2 o proceda a la detención segura.

```
┌─────────────────────────────────────────────────────────────────┐
│                 CENTRO DE CONTROL PTC (VITAL HUB)               │
│                                                                 │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐     │
│  │   CPU VITAL 1 │  │   CPU VITAL 2 │  │   CPU VITAL 3 │     │
│  │   (PROCESO)   │  │   (PROCESO)   │  │   (PROCESO)   │     │
│  └───────┬───────┘  └───────┬───────┘  └───────┬───────┘     │
│          │                  │                  │             │
│          └──────────────────┼──────────────────┘             │
│                             ▼                                │
│                ┌───────────────────────────┐                 │
│                │  VOTER VITAL (SIL-4 HW)   │                 │
│                └────────────┬──────────────┘                 │
│                             │                                │
│        ┌────────────────────┴────────────────────┐           │
│        ▼                                         ▼           │
│  GATEWAY TETRA (VITAL)               INTERFAZ CTC (SICC)     │
└───────────────────────────────────────────────────────────────┘
```

---

## 🔧 **3. ESPECIFICACIONES DE SOFTWARE VITAL**

### **3.1 MÓDULOS DEL NÚCLEO**
- **MAM (Movement Authority Manager):** Motor de cálculo de bloque virtual.
- **Interlocking Logic (IL):** Ejecución de tablas de enclavamiento lógicas (Sustituye ENCE tradicionales).
- **Communication Stack TETRA:** Gestión de paquetes de datos cifrados sobre la red de misión crítica.
- **Vital Database (OASIS/GITS):** Base de datos georeferenciada de activos de vía (curvas, túneles, puentes).

### **3.2 COMUNICACIÓN VITAL**
Se elimina el protocolo GSM-R y el ITCS Alstom. La comunicación se realiza mediante protocolo IP Vital sobre **TETRA**, cumpliendo con la segregación de tráfico y priorización de voz/datos de seguridad.

---

## 🔒 **4. SEGURIDAD Y DISPONIBILIDAD**

### **4.1 MÉTRICAS SIL-4**
- **SFF (Safe Failure Fraction):** > 99%.
- **MTBF (System):** > 100,000 horas.
- **MTTR:** < 1 hora (Intercambio en caliente / Hot Swap).
- **Latencia de Votación:** < 100ms.

---

## 📋 **5. CONTROL DE VERSIONES (PURGE LOG)**

| Versión | Fecha | Responsable | Cambio (Karpathy Purge) |
|:---:|:---:|:---|:---|
| **v2.0** | 13/03/2026 | Admin. Contractual | **RE-ESCRITURA TOTAL**. RBC eliminado. Vital PTC Server estandarizado. |
| **v1.0** | 27/01/2025 | Ing. Sistemas | Versión obsoleta basada en RBC ETCS (HALLUCINATED). |

---
**Documento Alineado con el SSOT (DBCD_CRITERIA.md).**
