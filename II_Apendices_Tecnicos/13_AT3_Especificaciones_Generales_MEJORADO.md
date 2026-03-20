# APÉNDICE TÉCNICO 3 - ESPECIFICACIONES GENERALES (PTC VIRTUAL)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Proyecto:** APP La Dorada - Chiriguaná  
**Contrato:** Concesión No. 001 de 2025  

---

## 📄 ESPECIFICACIONES DE SENALIZACIÓN (PTC)
Las especificaciones técnicas se rigen exclusivamente por la normativa **FRA (Federal Railroad Administration)** para sistemas **Positive Train Control (PTC)**.
- **Detección de Integridad:** Vía GPS + EOT (End of Train).
- **Autorización de Movimiento:** Transmitida vía Radio (TETRA/IP) al DMI del maquinista.
- **Distancia de Frenado:** Calculada por la computadora de abordo basada en la curva de frenado AAR.

---

## 🔍 AUDITORÍA DE RE-INGENIERÍA (METODOLOGÍA P.42 v6.3.3)
Se han blindado los siguientes estándares soberanos:
1. **RESTAURADO PTC Virtual (FRA 236-I)**: Reconfirmado como el estándar rector de seguridad vital.
2. **RESTAURADO Red Vital IP**: Se confirma su rol como capa de transporte para telemetría vital.
3. **ELIMINADO CIRCUITOS DE VÍA**: Se mantiene la prohibición de detección física.

---

## 📡 ESPECIFICACIONES DE TELECOMUNICACIONES
- **Radio de Respaldo:** TETRA (Voz y Contingencia).
- **Backbone Vital:** Red Vital IP (Anillo de Fibra Óptica + Microondas).
- **Transporte de Datos:** IP/MPLS con encriptación SICC.
- **Redundancia:** Failover automático SICC entre Fibra y Microondas para disponibilidad > 99.9%.

---

| Versión | Fecha       | Responsable            | Descripción                              |
|:------:|:-----------:|:-----------------------|:-----------------------------------------|
| v6.3.3 | 20/03/2026  | Admin. Contractual EPC | Restauración de Red Vital IP como backbone rector. Alineación SICC. |
