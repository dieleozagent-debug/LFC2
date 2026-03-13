# PTC VIRTUAL — Especificación de Interfaces Vital IP (v2.0)
## APP La Dorada - Chiriguaná

**Fecha:** 13 de marzo de 2026  
**Sistema:** Interfaces de mensajería vital entre el CCO y el Bordo (OBC)  
**Protocolo:** Vital IP sobre MPLS/TETRA  
**Normativa:** FRA 236 Subpart I, IEEE 1474.1  
**Metodología:** Punto 42 (Karpathy Saneamiento)

---

## 1. ARQUITECTURA DE INTERFACES

### 1.1 Propósito
Esta especificación define los protocolos de comunicación vital para el sistema **PTC Virtual**, asegurando que el Centro de Control (CTC) y el Servidor Vital se comuniquen de forma íntegra, segura y con baja latencia.

### 1.2 Protocolo Rector: Vital IP
Se descarta el uso del protocolo propietario FFFIS. En su lugar, se adopta **Vital IP**, un stack de comunicaciones abierto basado en TCP/UDP con capas de seguridad vital (Check-summing, Timestamping y Sequence Numbering) certificables según IEC 62443.

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE FFFIS/ETCS)
- ✅ **ELIMINADO:** Protocolo FFFIS (Form Fit Function Interface Specification).
- ✅ **ELIMINADO:** Referencias a ETCS Level 2 y RBC.
- ✅ **ELIMINADO:** Mensajería XML pesada por overhead innecesario.
- ✅ **ADOPTADO:** Mensajería binaria optimizada sobre **Vital IP**.

---

## 3. ESPECIFICACIÓN DE INTERFACES CRÍTICAS (8/8)

1. **IF-PTC-001: Estado de Posición Vital (OBC → CCO):** Reporte de coordenadas GNSS/IMU filtradas por el algoritmo vital del tren.
2. **IF-PTC-002: Entrega de Autoridad (CCO → OBC):** Transmisión de la Autoridad de Movimiento (MA) basada en el **Bloque Virtual**.
3. **IF-PTC-003: Lógica de Interlocked (CCO ↔ Servidor):** Sincronización de estados de agujas y ocupación de vía.
4. **IF-PTC-004: Eventos y Alarmas:** Reporte de discrepancias en el votador 2oo3.
5. **IF-PTC-005: Parada de Emergencia (E-Stop):** Comando de alta prioridad para frenado inmediato.
6. **IF-PTC-006: Estado de Salud de Red:** Monitoreo de latencia en el backbone de Fibra y red TETRA.
7. **IF-PTC-007: Configuración de Base de Datos:** Parámetros de vía y límites de velocidad (TSR).
8. **IF-PTC-008: Trazabilidad Legal:** Log inalterable de comunicaciones vitales.

---

## 📊 MÉTRICAS DE DESEMPEÑO (SANEADAS):

| Métrica | Objetivo | Criterio |
|:---|:---:|:---|
| **Latencia punta a punta** | < 150ms | Medido en la interfaz OBC-VitalServer. |
| **Integridad de Datos** | 10⁻⁹ Errores | Tasa de error de bit no detectada. |
| **Disponibilidad** | 99.95% | Uptime de la interfaz según AT4. |

---

## ✅ CONCLUSIONES:

Las interfaces han sido saneadas para eliminar la dependencia de protocolos cerrados (FFFIS) y alinearlas con la arquitectura de **PTC Virtual** mediante el uso de **Vital IP**.

**Saneamiento Ciclo 3 - Interfaces Vitales Finalizado.**
