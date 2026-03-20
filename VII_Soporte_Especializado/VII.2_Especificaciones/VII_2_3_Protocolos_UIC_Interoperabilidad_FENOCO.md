# PROTOCOLO DE INTEROPERABILIDAD OPERACIONAL - RED VITAL v6.3.2
## APP La Dorada-Chiriguaná - Punto de Intercambio Chiriguaná (FENOCO)

**Estado:** ✅ **SANEADO (SICC SOVEREIGN)**  
**Fecha:** 18 de marzo de 2026  
**Responsable:** Administrador Contractual EPC (Agente v2.3.8)
**Estándar Base:** FRA 49 CFR Part 236 / AREMA Manual

---

## 🎯 **1. PROPÓSITO Y ALCANCE**

### **1.1 PROPÓSITO**
Este documento establece el procedimiento de **Interoperabilidad Operacional** entre la **Red Vital LFC (PTC Virtual)** y la red FENOCO. Bajo el modelo de **Soberanía Tecnológica**, se rechaza el uso de **Protocolos Europeos Legacy** y se adopta el estándar **FRA/AREMA** para la lógica de seguridad.

### **1.2 ALCANCE**
- **Punto de Intercambio:** Estación Chiriguaná (PK 526+000).
- **Modelo:** Stop & Switch (Independencia Técnica Total).
- **Sistemas:** Servidor PTC Central (LFC) vs. Control por Despacho (FENOCO).

---

## 🚉 **2. PROCEDIMIENTO "STOP & SWITCH" (SICC-DBCI)**

### **2.1 TRANSICIÓN LFC → FENOCO**
1. **Llegada a Chiriguaná:** El tren LFC monitorea su posición mediante el OBC Vital (FRA Compliant).
2. **Parada de Seguridad (STOP):** Detención absoluta en el PK 526. 
3. **Cambio de Régimen (SWITCH):** 
    - El maquinista coloca el sistema de abordo en modo **Isolating** (Aislamiento).
    - La autorización para entrar a la red FENOCO se gestiona mediante canal de voz seguro (Red Vital TETRA).
    - No existe intercambio de datos vitales entre el **Servidor Maestro de Red Vital** y los sistemas de FENOCO para evitar "Contaminación de Seguridad".

### **2.2 TRANSICIÓN FENOCO → LFC**
1. **Llegada a Frontera:** Parada en el punto de demarcación SICC.
2. **Activación de Soberanía:** 
    - El maquinista inicializa el sistema SICC.
    - El Servidor Maestro valida la identidad del tren y emite la **Despacho Virtual (DV)** virtual tras verificar la integridad de la ruta IP.

---

## 🚫 **3. PURGA DE LEGACY (EUROPEAN CONCEPTS)**

### 3.1 ELIMINACIÓN DE PROTOCOLO UIC (SANEAMIENTO PTC VIRTUAL)
Se eliminan las referencias a interoperabilidad basada en Protocolo Vital IP (SICC). Se ratifica el uso de PTC Virtual (SICC) como estándar soberano. El SICC es **100% FRA/AREMA Virtual Ready**. No se instalan Puntos de Referencia Virtuales (SICC) físicas en la frontera con FENOCO.

### **3.2 COMUNICACIONES SICC**
El backbone de **Red Vital IP / TETRA** garantiza la comunicación de voz con los despachadores de FENOCO, pero mantiene el muro de fuego (**Firewall de Red Vital**) para el tráfico de datos PTC.

---

## 📋 **4. CONTROL DE VERSIONES (SICC PURITY)**

| Versión | Fecha | Responsable | Cambio (Karpathy Synthesis) |
|:---:|:---:|:---|:---|
| **v2.1** | 18/03/2026 | Agente SICC | **RESTAURACIÓN DE SOBERANÍA**. Corregido error de purga: FRA/AREMA se mantiene como CORE. Eliminado UIC/PTC Virtual (SICC). |
| **v2.0** | 13/03/2026 | Admin. Contractual | Versión con error de lógica (Purga errónea de FRA). |

---
**Documento Alineado con el ADN de Red Vital e IDENTITY.md.**
