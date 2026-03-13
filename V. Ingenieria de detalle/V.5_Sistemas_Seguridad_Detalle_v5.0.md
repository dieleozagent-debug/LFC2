# V.5 - INGENIERÍA DE DETALLE: SEGURIDAD v6.0 (CORE VIRTUAL)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Versión:** v6.0 - Purge Release (Integrated Safety Detail Design)
**Metodología:** Punto 42 (Karpathy Saneamiento) - Ciclo Inverso

---

## 1. SEGURIDAD FERROVIARIA INTEGRADA (SANEADA)

La seguridad se garantiza mediante la integridad de los datos en la red **PTC Virtual**, eliminando la necesidad de módulos de transmisión propietarios.

### 1.1 Niveles de Seguridad (Auditados):
- **Core Vital:** Servidor Maestro 2oo3 con certificación de seguridad lógica para PTC (FRA 236).
- **Comunicación Vital:** Basada exclusivamente en **TETRA** con encriptación de grado militar. Se elimina el RED TETRA (Misión Crítica).
- **Seguridad en Cabina:** Interfaz DMI simplificada, centrada en autorizaciones de movimiento virtuales.

### 1.2 Sistemas ITS (Seguridad Física):
- **CCTV:** 73 cámaras IP integradas al video-muro del CCO.
- **Detección perimetral:** Integrada por software a las alarmas del CTC.

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE RED TETRA (Misión Crítica)/PTC Virtual)

Se han corregido los siguientes desvíos técnicos de la v5.0:
- ✅ **ELIMINADO:** Requerimiento "TETRA + RED TETRA (Misión Crítica) dual" para el ATP embarcado.
- ✅ **ELIMINADO:** Referencias a "Virtual Balise (GNSS)s" en la matriz de seguridad física de vía.
- ✅ **ELIMINADO:** Mención a interfaces de seguridad para RBC. La seguridad es **Peer-to-Peer** (Tren-Servidor PTC).
- ✅ **ADOPTADO:** El protocolo **Vital IP** como el único canal de seguridad para el intercambio de mensajes entre el EPC y el Tren.

---

## 🛡 PROTOCOLO DE CIBERSEGURIDAD
- Unificación de la seguridad en la capa de transporte (TLS Ferroviario).
- No se depende de la seguridad física del espectro RED TETRA (Misión Crítica), sino de la robustez lógica de la red TETRA y la Fibra Óptica.

---

## ✅ CONCLUSIONES:

El sistema de seguridad de detalle ha sido saneado para proteger la **Soberanía Tecnológica**. Al simplificar la pila de protocolos y eliminar el hardware redundante, se logra un sistema más resiliente y fácil de auditar.

**Saneamiento Ciclo 5 - Ingeniería de Detalle Seguridad Finalizado.**
