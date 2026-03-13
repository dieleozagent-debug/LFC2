# PTC VIRTUAL — Equipamiento Embarcado OBC (Especificación v2.0)
## APP La Dorada - Chiriguaná

**Fecha:** 13 de marzo de 2026  
**Sistema:** On-Board Computer (OBC) para 15 locomotoras  
**Normativa:** FRA 236 Subpart I, AREMA Section 16  
**Metodología:** Punto 42 (Karpathy Saneamiento)

---

## 1. ALCANCE Y ARQUITECTURA

### 1.1 Propósito
Esta especificación define los requerimientos técnicos para el equipamiento embarcado (**OBC**) necesario para operar bajo el sistema **PTC Virtual**. El OBC es el componente encargado de la supervisión de velocidad, el cumplimiento de la autoridad de movimiento y el frenado automático.

### 1.2 Componentes del OBC:
- **Procesador Vital:** Unidad de cómputo SIL 4.
- **DMI (Driver Machine Interface):** Pantalla táctil industrial para el maquinista.
- **Sensores Vitales:** Fusión de GNSS (Trimble/U-blox) e IMU (Inercial) para posicionamiento vital.
- **Unidad de Radio:** Terminal **TETRA** para datos vitales.
- **Interfaz de Freno:** Conexión con la válvula de control neumático para frenado de emergencia.

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE STM/PTC VIRTUAL)
- ✅ **ELIMINADO:** Módulo STM (Specific Transmission Module).
- ✅ **ELIMINADO:** Antena de Virtual Balise (GNSS)s.
- ✅ **ELIMINADO:** Radio RED TETRA (Misión Crítica) y protocolos EIRENE.
- ✅ **ADOPTADO:** Arquitectura de **Retrofit PTC** basada en estándares americanos (AAR/AREMA).

---

## 3. LÓGICA DE SUPERVISIÓN (FRA 236)

El OBC descarga la base de datos de vía (Track Database) y recibe las autoridades de movimiento (MA) del **Servidor Vital**. Calcula continuamente la curva de frenado y aplica el freno si el tren excede los límites seguros.

### 3.1 Fusión de Sensores (Vital Locating)
Se elimina la dependencia de punto de referencia virtuals físicas. La posición se determina mediante la red satelital con corrección diferencial y sensores inerciales que garantizan precisión de < 2 metros incluso en cortes.

---

## 📊 MÉTRICAS DE EQUIPAMIENTO (SANEADAS):

| Métrica | Objetivo | Criterio |
|:---|:---:|:---|
| **Precisión Posición** | < 2m | GNSS Vital + IMU. |
| **Tiempo de Respuesta**| < 250ms | Desde detección de exceso hasta comando de freno. |
| **Integración OBC** | 15 Locs | Retrofit completo verificado. |

---

## ✅ CONCLUSIONES:

La especificación del equipamiento embarcado ha sido saneada para eliminar la terminología y dependencias de PTC VIRTUAL, estableciendo un esquema de **OBC PTC Virtual** moderno y alineado con los requerimientos operacionales del corredor.

**Saneamiento Ciclo 3 - Equipamiento Embarcado Finalizado.**
