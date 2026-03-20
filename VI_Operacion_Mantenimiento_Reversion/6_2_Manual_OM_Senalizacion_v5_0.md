# 6.2 MANUAL DE OPERACIÓN Y MANTENIMIENTO: SENALIZACIÓN v6.3.2
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 20 de marzo de 2026  
**Versión:** v6.3.2 - Forensic SICC Release (O&M Phase)
**Metodología:** Karpathy Loop - Saneamiento de Soberanía

---

## 1. FILOSOFÍA DE SENALIZACIÓN SICC
La senalización del corredor abandona los paradigmas físicos para adoptar un modelo **100% Virtual** basado en el estándar **FRA 236 Subpart I**.

### 1.1 Bloqueo Virtual y MA (Movement Authority):
- **Autoridad Vital:** Generada por el Servidor Maestro SICC y transmitida a la OBC vía **Red Vital IP** (Backbone FO).
- **Integridad:** La liberación de bloques virtuales (V-Block) se confirma mediante reportes de integridad del **EOT** (Vital IP) y telemetría GNSS.
- **Respaldo:** En zonas de sombra FO, se habilita el canal de radio **TETRA** para el transporte de telemetría de seguridad.

### 1.2 Purga de Infraestructura Física:
- **Cero Punto de Referencia Virtual:** Se elimina cualquier rutina de mantenimiento de hardware en vía (Eurobalizas, [CONTROLLER PROHIBIDO - SICC ES VIRTUAL]).
- **Senalización en Cabina:** El personal operativo debe basar su conducción exclusivamente en el DMI (Driver Machine Interface). No existen senales luminosas wayside.

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE PTC VIRTUAL)
En cumplimiento del **Ciclo Inverso**, se han corregido los siguientes desvíos operativos:
- ✅ **RESTAURADO:** Jerarquía del protocolo **Vital IP** sobre Fibra Óptica como portador primario.
- ✅ **ELIMINADO:** Rutinas de inspección para hardware de Punto de Referencia Virtual y circuitos de vía continuos.
- ✅ **SINCRONIZADO:** El check-list de mantenimiento ahora se enfoca en la disponibilidad del Backbone FO y la calibración GNSS.

---

## 🛠 RUTINAS DE MANTENIMIENTO SANEADAS (SSOT)
1. **Inspección de Nodos ENCE:** Limpieza y test de failover en los 5 hubs soberanos (Triunfo, Barranca, etc.).
2. **Backbone Vital IP:** Verificación de latencia y redundancia en el anillo de Fibra Óptica.
3. **Sensores OBC/GNSS:** Calibración semestral de la fusión IMU/GNSS en las 15 locomotoras.

---

## ✅ CONCLUSIÓN DE AUDITORÍA:
El Manual de O&M ha sido saneado bajo el protocolo SICC v6.3 para garantizar que la operación dependa únicamente de sistemas soberanos y virtuales, eliminando el riesgo de "mantenimiento zombie" sobre tecnologías descartadas.

**Aprobado con Saneamiento Forense - 20/03/2026.**
