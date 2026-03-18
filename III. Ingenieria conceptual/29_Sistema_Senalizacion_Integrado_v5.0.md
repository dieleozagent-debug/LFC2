# SISTEMA DE SEÑALIZACIÓN INTEGRADO v6.0 (PTC VIRTUAL)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Proyecto:** APP La Dorada - Chiriguaná  
**Contrato:** Concesión No. 001 de 2025  

---

## 📄 FILOSOFÍA DE DISEÑO
El sistema de señalización se define como **VIRTUAL**, eliminando señales físicas y punto de referencia virtuals para reducir CAPEX y riesgos de robo/vandalismo.
- **Detección:** Basada en posición GPS reportada por la locomotora y el EOT.
- **Validación de Vía:** Los enclavamientos (ENCE) verifican la posición de los desvíos y comunican el estado al Servidor PTC Central.
- **Autorización:** Se envía digitalmente a través de la red **TETRA**.

---

## 🔍 AUDITORÍA DE RE-INGENIERÍA (METODOLOGÍA P.42 v4.2)
Este documento purga la v5.0 de las siguientes inconsistencias:
1. **ELIMINADO PTC Virtual (FRA 236):** Se sustituye por arquitectura **PTC Virtual** (FRA 236).
2. **ELIMINADO INTERFAZ Servidor PTC Central:** No hay centros de bloque de radio europeos.
3. **ELIMINADO Puntos de Referencia Virtuales (SICC):** Detección lógica mediante GPS/EOT.

---

## 🛤 ARQUITECTURA TÉCNICA
1. **Centro de Control (CCO):** Donde reside el servidor maestro de autorizaciones.
2. **Segmento Tierra:** 5 ENCE para control de estaciones y desvíos.
3. **Segmento Embarcado:** Equipos de abordo para cálculo de distancias de frenado y recepción de misiones.
4. **Segmento Comunicaciones:** TETRA como enlace vital.

---

| Versión | Fecha       | Responsable            | Descripción                              |
|:------:|:-----------:|:-----------------------|:-----------------------------------------|
| v6.0   | 13/03/2026  | Admin. Contractual EPC | Re-ingeniería completa. Enfoque 100% Virtual/FRA. |