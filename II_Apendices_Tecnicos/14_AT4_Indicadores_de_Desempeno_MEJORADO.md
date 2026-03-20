# APÉNDICE TÉCNICO 4 - INDICADORES DE DESEMPENO (SICC)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Proyecto:** APP La Dorada - Chiriguaná  
**Contrato:** Concesión No. 001 de 2025  

---

## 📊 SISTEMA SICC (INDICADORES TÉCNICOS)
El SICC monitorea la disponibilidad y calidad del servicio basándose en la arquitectura **SICC v6.3.3**.
- **Disponibilidad de Senalización (E3):** ≥ 99.5%. Se mide como la disponibilidad del Servidor PTC Central y el enlace redundante (Fibra/Radio).
- **Disponibilidad de Telecomunicaciones (COM1):** ≥ 99.9%. Disponibilidad del backbone **Red Vital IP** y cobertura TETRA.
- **Integridad del Tren:** Verificación constante de la comunicación Locomotora-EOT vía Red Vital IP.

---

## 🔍 AUDITORÍA DE RE-INGENIERÍA (METODOLOGÍA P.42 v6.3.3)
Se han blindado los KPIs operativos fundamentales:
1. **RESTAURADO KPI Red Vital IP**: Se define el indicador COM1 basado en la disponibilidad del backbone soberano.
2. **RESTAURADO KPI PTC Virtual**: Se mantiene el indicador E3 alineado a la disponibilidad de las MA (Movement Authorities).
3. **ELIMINADO KPl SENALES WAYSIDE**: No hay senales físicas LED, por lo que el KPI de "luces fundidas" es legalmente improcedente.

---

## 🛠 REGLAS DE MEDICIÓN
- **Falla Crítica:** Indisponibilidad de cualquiera de los 5 ENCE o del servidor central PTC que impida la emisión de Autorizaciones de Movimiento.
- **Tiempo de Respuesta:** Según Tabla de Indicadores AT4 original, garantizando la soberanía de la información mediante SICC.

---

| Versión | Fecha       | Responsable            | Descripción                              |
|:------:|:-----------:|:-----------------------|:-----------------------------------------|
| v6.3.3 | 20/03/2026  | Admin. Contractual EPC | Restauración de indicadores para Red Vital IP y PTC Virtual. Alineación SICC. |
