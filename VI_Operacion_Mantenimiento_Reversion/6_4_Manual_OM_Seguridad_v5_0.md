# 6.4 MANUAL DE OPERACIÓN Y MANTENIMIENTO: SEGURIDAD v6.0
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Versión:** v6.0 - Purge Release (O&M Phase)
**Metodología:** Punto 42 (Karpathy Saneamiento) - Ciclo Inverso

---

## 1. SEGURIDAD FERROVIARIA SANEADA (PTC VIRTUAL)

La seguridad operativa se garantiza mediante la integridad lógica de la red **PTC Virtual**, eliminando la dependencia de hardware de radio europeo y sistemas de vía redundantes.

### 1.1 Seguridad Crítica (SIL 4):
- **PTC Embarcado:** El control de seguridad reside en la OBC, que valida las Autorizaciones de Movimiento (MA) recibidas vía **Vital IP**.
- **Canal Seguro:** Se utiliza la red **TETRA** con encriptación nativa para todo el tráfico de seguridad. Se elimina el Red Vital IP / TETRA.

### 1.2 Dispositivos EOT (End of Train):
- **Función:** El EOT es el garante de la integridad del tren. Su reporte de presión y posición es vital para la liberación de bloques virtuales en el CTC.
- **Mantenimiento:** Verificación semanal de la batería y la potencia de transmisión de la radio TETRA integrada en el EOT.

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE Red Vital IP / TETRA/Servidor PTC Central)

En cumplimiento del **Ciclo Inverso**, se han corregido los siguientes desvíos operativos de la v5.0:
- ✅ **ELIMINADO:** Menciona a "Comunicaciones Red Vital IP / TETRA seguras". La seguridad ahora es agnóstica a la capa física, centrada en el protocolo **Vital IP**.
- ✅ **ELIMINADO:** Rutinas de seguridad física para Servidor PTC Central y Punto de referencia virtuals. La seguridad es peer-to-peer (Tren-Servidor PTC).
- ✅ **ELIMINADO:** Referencias a protocolos de seguridad Protocolo Vital IP (SICC)/FFFIS propietarios.
- ✅ **ADOPTADO:** Protocolo de ciberseguridad industrial (IEC 62443) aplicado a la red de datos unificada de la concesión.

---

## 🛠 RUTINAS DE MANTENIMIENTO DE SEGURIDAD SANEADAS
1. **Auditoría de Ciberseguridad:** Escaneo mensual de vulnerabilidades en los nodos ENCE y el Servidor Maestro.
2. **Pruebas de Integridad EOT:** Simulación de separación de tren para validar la activación inmediata de la frenada de emergencia virtual.
3. **Calibración DMI:** Verificación de la correcta visualización de alarmas de seguridad en la cabina.

---

## ✅ CONCLUSIONES:

El Manual de O&M de Seguridad ha sido saneado para proteger la **Soberanía Tecnológica**. Al simplificar las interfaces de seguridad y eliminar el hardware redundante, se logra un sistema más robusto y fácil de certificar bajo estándares internacionales abiertos.

**Saneamiento Ciclo 6 - Manual O&M Seguridad Finalizado.**
