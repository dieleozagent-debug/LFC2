# VII.2.1 - ESPECIFICACIÓN TÉCNICA: PTC VIRTUAL (SANEADO) v6.0
## APP La Dorada - Chiriguaná

**Fecha:** 13 de marzo de 2026  
**Versión:** v6.0 - Purge Release (Specialized Support)
**Metodología:** Punto 42 (Karpathy Saneamiento) - Ciclo Inverso

---

## 1. ESPECIFICACIÓN TÉCNICA DEL SISTEMA VIRTUAL

Este documento reemplaza las antiguas especificaciones de PTC/PTC VIRTUAL para centrarse en una arquitectura de **Soberanía Tecnológica** basada en el estándar **FRA 236**.

### 1.1 El Motor de Bloqueo Virtual:
- **Lógica de Ocupación:** Basada en la posición GNSS de alta precisión de la locomotora y la confirmación de integridad del tren (EOT).
- **Virtual Blocks (V-Blocks):** Segmentos de vía definidos por software en el Servidor Maestro PTC, eliminando la necesidad de senales físicas o circuitos de vía.

### 1.2 Protocolo de Mensajería Vital:
- **Protocolo:** **Vital IP** sobre red TETRA de misión crítica.
- **Seguridad:** Encriptación de extremo a extremo (Tren a Servidor Maestro) sin intermediarios propietarios (Servidor PTC Central).

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE HARDWARE)

Se han corregido los siguientes desvíos críticos:
- ✅ **ELIMINADO:** Requerimiento de "Virtual Balise (GNSS)s" para calibración de odometría. Se utiliza GNSS Multibanda + IMU.
- ✅ **ELIMINADO:** Referencias a "STM" (Specific Transmission Modules). El sistema es nativo IP.
- ✅ **ELIMINADO:** Arquitectura "Servidor PTC Central" europea. Se adopta el **Servidor Maestro PTC 2oo3**.
- ✅ **ELIMINADO:** Protocolo FFFIS (Protocolo Vital IP (SICC)). Se institucionaliza la interfaz abierta Vital IP.

---

## ✅ CONCLUSIONES:

Las especificaciones técnicas de soporte especializado ahora reflejan fielmente el diseno ejecutivo del proyecto, eliminando el riesgo de "lock-in" tecnológico y asegurando la interoperabilidad soberana.

**Saneamiento Ciclo 7 - Especialización Finalizado.**
