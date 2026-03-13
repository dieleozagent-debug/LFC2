# V.1 - SEÑALIZACIÓN FERROVIARIA DE DETALLE v6.0 (PTC VIRTUAL)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Versión:** v6.0 - Purge Release (Detail Design Engineering)
**Metodología:** Punto 42 (Karpathy Saneamiento) - Ciclo Inverso

---

## 1. INGENIERÍA DE SEÑALIZACIÓN SANEADA

La señalización de detalle se basa al 100% en la arquitectura **PTC Virtual** (FRA 236), eliminando cualquier dependencia de protocolos europeos o hardware propietario.

### 1.1 Arquitectura del Tren (OBC):
- **Unidad de Bordo:** Basada en arquitectura COTS (Vital IP). Integración nativa con GNSS y EOT.
- **Display (DMI):** Interfaz gráfica virtual para el maquinista, sin necesidad de STM (Specific Transmission Modules).
- **Comunicaciones:** Canal único y redundante sobre **TETRA**.

### 1.2 Segmento Vía (Wayside):
- **Bloqueo Virtual:** Implementado por software en el servidor PTC. No se instalan circuitos de vía ni contadores de ejes en trayecto.
- **Control de Desvíos:** Interfaz Vital IP entre el servidor PTC y los controladores ENCE.

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE RED TETRA (Misión Crítica)/PTC VIRTUAL)

En cumplimiento del **Ciclo Inverso**, se han corregido los siguientes desvíos técnicos de la v5.0:
- ✅ **ELIMINADO:** Redundancia RED TETRA (Misión Crítica). La comunicación vital se unifica en la red TETRA de misión crítica.
- ✅ **ELIMINADO:** Asunción de costos para "Virtual Balise (GNSS)s" (Incluso como valor negativo, se purga la mención para evitar confusión).
- ✅ **ELIMINADO:** Protocolos FFFIS/UNISIG. El sistema habla **Vital IP**.
- ✅ **CORREGIDO:** El CAPEX se optimiza al eliminar el equipamiento RED TETRA (Misión Crítica) embarcado y de vía.

---

## 🚀 ESTRATEGIA DE DETALLE VIRTUAL
- **Posicionamiento:** Basado en GNSS con integridad validada por el dispositivo EOT en cola del tren.
- **Autorizaciones:** Transmitidas punto a punto desde el Servidor Maestro 2oo3 mediante mensajes Vital IP encriptados.

---

## ✅ CONCLUSIONES:

Este documento de ingeniería de detalle garantiza que no existan contradicciones con los documentos maestros. Al eliminar el "fantasma" del RED TETRA (Misión Crítica) y el PTC VIRTUAL, el proyecto asegura su soberanía tecnológica y eficiencia financiera.

**Saneamiento Ciclo 5 - Señalización de Detalle Finalizado.**
