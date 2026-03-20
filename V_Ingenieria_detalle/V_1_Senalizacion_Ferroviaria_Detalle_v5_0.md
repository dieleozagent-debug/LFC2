# V.1 - SENALIZACIÓN FERROVIARIA DE DETALLE v6.3.2 (SICC)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 18 de marzo de 2026  
**Versión:** v6.3.2 - Sovereign Mobility (PTC Virtual)
**Metodología:** Karpathy Autoresearch Loop (Daemon v1.0)

---

## 1. INGENIERÍA DE SENALIZACIÓN SOBERANA

La senalización de detalle se basa al 100% en la arquitectura **PTC Virtual** (FRA 236), eliminando cualquier dependencia de protocolos cerrados o senales físicas laterales. El sistema garantiza la interoperabilidad mediante lógica de software centralizada.

### 1.1 Arquitectura del Tren (Segmento Embarcado):
- **OBC Sovereign:** Unidad de Procesamiento Vital basada en arquitectura COTS (Vital IP). Integración nativa con GNSS de alta precisión para localización.
- **EOT (End-of-Train):** Dispositivo de telemetría en cola para validación de integridad de convoy y reporte de presión de tubería de freno.
- **Comunicaciones:** Canal dual redundante sobre **Red Vital IP / TETRA**.

### 1.2 Segmento Vía (Wayside):
- **Bloqueo de Movimiento Dinámico (Moving Block):** Implementado en el Servidor Maestro SICC. Los trenes mantienen separaciones seguras calculadas en tiempo real.
- **Puntos de Referencia Virtuales:** Reemplazo de Puntos de Referencia Virtuales (SICC) físicas por geocercas GNSS inyectadas en la base de datos de vía.

---

## 2. 🔍 AUDITORÍA DE SOBERANÍA (SICC Purity Check)

Se han corregido los desvíos técnicos del ciclo anterior que erróneamente sugerían la eliminación de tecnologías clave:

- ✅ **RESTAURADO:** **PTC Virtual (FRA 236)** como el estándar mandatorio de seguridad.
- ✅ **RESTAURADO:** **Red Vital IP / TETRA** para garantizar el ancho de banda necesario para el control dinámico.
- ✅ **ELIMINADO:** Todo rastro de protocolos europeos (PTC Virtual (SICC)/SICC Virtual Protection (SVP)) que no aportan a la soberanía del corredor.
- ✅ **ZERO-ACCENTS:** Normalización de nombres de archivos para estabilidad del servidor.

---

## 🚀 ESTRATEGIA DE DETALLE VIRTUAL
- **Localización Determinista:** Fusión de datos GNSS + IMU (Inertial Measurement Unit) para precisión centimétrica.
- **Autorizaciones MA:** Transmisión de autorizaciones de movimiento cifradas vía Vital IP desde el Centro de Control.

---

## ✅ CONCLUSIONES:

Este documento de ingeniería de detalle consolida el modelo SICC como la única fuente de verdad para la senalización. La adopción de la filosofía **Virtual Ready** permite al proyecto operar sin hardware de vía costoso, asegurando soberanía absoluta sobre el mantenimiento y la operación.

**Saneamiento Ciclo 2.3.8 - Senalización SICC Finalizado.**
