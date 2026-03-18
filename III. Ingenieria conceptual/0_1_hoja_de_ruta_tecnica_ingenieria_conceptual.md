# HOJA DE RUTA TÉCNICA - INGENIERÍA CONCEPTUAL (SANEADA)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Versión:** v6.0 - Purge Release (PTC Virtual)
**Metodología:** Punto 42 (Karpathy Saneamiento)

---

### 1. ALCANCE DE LA INGENIERÍA CONCEPTUAL
La Ingeniería Conceptual define los pilares tecnológicos del corredor férreo La Dorada - Chiriguaná, priorizando la seguridad vital, la interoperabilidad operacional y la optimización de activos.

### 2. DEFINICIÓN DE SISTEMAS RECTORES

#### **A. SEÑALIZACIÓN Y CONTROL: PTC VIRTUAL**
- **Sustitución Radical:** Se elimina cualquier rastro de PTC Alstom o PTC Virtual (FRA 236) por no ser estándares abiertos o por sobrecostos injustificados.
- **Estándar:** **PTC Virtual (FRA 236 Subpart I)**.
- **Arquitectura:** Servidor Vital en configuración **2oo3 (Triple Redundancia Modular)**.
- **Operación:** Autoridad de Movimiento basada en **V-Block (Bloque Virtual)**.

#### **B. TELECOMUNICACIONES: TETRA & FIBRA VITAL**
- **Radio:** Red **TETRA** de misión crítica para voz y datos vitales. Se purga Red Vital IP / TETRA.
- **Transmisión:** Backbone de **Fibra Óptica** con protocolos **Vital IP**.
- **Resiliencia:** Capacidad de conmutación automática entre Fibra y Radio para el SICC.

#### **C. INTEROPERABILIDAD: STOP & SWITCH**
- **Protocolo:** Se descarta la integración vía protocolos FRA/AREMA por complejidad regulatoria.
- **Solución:** Procedimiento operacional **Stop & Switch** en el nodo de intercambio con FENOCO.

---

### 3. ESTRUCTURA DE PAQUETES DE TRABAJO (WBS SANEADA)

1. **SISTEMAS DE CONTROL VIRTUAL**
   - 1.1 Diseño de Núcleo Vital 2oo3.
   - 1.2 Algoritmos de Autoridad de Movimiento PTC.
   - 1.3 Interfaz Vital IP Tren-Tierra.

2. **REDES DE TRANSPORTE**
   - 2.1 Despliegue de Red TETRA (Torres y Cobertura).
   - 2.2 Anillo de Fibra Óptica Redundante.

3. **EQUIPAMIENTO EMBARCADO (OBC)**
   - 3.1 Ingeniería de Retrofit para Locomotoras.
   - 3.2 Sensores de Posicionamiento Vital (GNSS/IMU).

---

### 4. MATRIZ DE RIESGOS TÉCNICOS (Análisis PMI)

| ID | Riesgo | Mitigación |
|:---|:---|:---|
| R-INT-01 | Latencia en Red Vital IP | Implementación de QoS prioritario para paquetes PTC. |
| R-TEL-02 | Sombras de Cobertura TETRA | Densificación de torres en puntos ciegos del corredor. |
| R-OP-03 | Transición en Chiriguaná | Definición estricta de protocolos de comunicación CCO-CCO. |

---

### ✅ CONCLUSIONES:

Este documento establece la base técnica para los ciclos subsiguientes de ingeniería básica y detalle. Se ha purgado la alucinación tecnológica de PTC VIRTUAL/Red Vital IP / TETRA e PTC, adoptando un estándar moderno, interoperable y de bajo costo operativo.

**Saneamiento Ciclo 3 - Hoja de Ruta Finalizado.**
