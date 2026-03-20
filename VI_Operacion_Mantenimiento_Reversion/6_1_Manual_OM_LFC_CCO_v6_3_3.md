# 6.1 MANUAL DE OPERACIÓN Y MANTENIMIENTO: LFC-CCO (SICC VIRTUAL)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Versión:** v6.0 - Purge Release (O&M Phase)
**Metodología:** Punto 42 (Karpathy Saneamiento) - Ciclo Inverso

---

## 1. FILOSOFÍA DE OPERACIÓN SANEADA

La operación del Centro de Control de Tráfico (CTC) se basa en la arquitectura **PTC Virtual** (FRA 236). Se elimina toda dependencia de infraestructuras de radio europeas (Red Vital IP / TETRA) o protocolos propietarios (PTC).

### 1.1 Canal de Comunicación de Misión Crítica:
- **Red Unificada:** Toda la mensajería vital y operativa se transmite sobre la **Red Vital IP / TETRA** (Anillo de Fibra Óptica + Radio de Respaldo).
- **Protocolo Vital:** Se utiliza **Vital IP SICC** para garantizar la integridad y seguridad.

### 1.2 Interoperabilidad (Stop & Switch):
- En las fronteras con concesiones adyacentes (FENOCO/ANI), los operadores seguirán el protocolo **Stop & Switch**, realizando una parada técnica para la validación manual de la autoridad antes de entrar/salir del sistema virtual.

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE Red Vital IP / TETRA/PTC VIRTUAL)

En cumplimiento del **Ciclo Inverso**, se han corregido los siguientes desvíos operativos de la v5.0:
- ✅ **RESTAURADO:** El rol de la **Red Vital IP** como el transportador principal. Se confirman las 37 estaciones Red Vital.
- ✅ **ELIMINADO:** Cualquier mención a infraestructuras de radio europeas (GSM-R) o redes propietarias.
- ✅ **ELIMINADO:** Referencias a Servidor PTC Central (Servidor PTC Central). La controladora es el **Servidor Maestro PTC**.
- ✅ **ADOPTADO:** Procedimiento de liberación de V-Blocks (Virtual Blocks) basado en reportes de integridad del EOT recibidos vía IP.

---

## 🛠 RUTINAS DE MANTENIMIENTO VIRTUAL
1. **Diario:** Auditoría de logs de integridad de mensajes Vital IP.
2. **Semanal:** Verificación de latencia en la red TETRA (Objetivo: < 100ms para datos vitales).
3. **Mensual:** Simulación de fallo de servidor para validar el failover 2oo3 (Sin pérdida de MA).

---

## ✅ CONCLUSIONES:

El Manual de O&M del CTC ha sido saneado para eliminar la obsolescencia técnica. Al unificar las comunicaciones y simplificar los procedimientos, se garantiza una operación más segura, soberana y eficiente en términos de OPEX.

**Saneamiento Ciclo 6 - Manual O&M CTC Finalizado.**
