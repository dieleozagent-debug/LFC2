---
title: "Dirección Técnica DT-SICC-2026-042: Infraestructura Satelital Transitoria para Despliegue Temprano"
status: "APROBADO"
priority: "ALTA"
ssot: "LFC2/IV_Ingenieria_basica/BCD_SCC_v002_2026-05_Punto42.md"
author: "Diego Z. — Director Técnico UF2"
date: "2026-05-04"
---

# 🛡️ DT-SICC-2026-042: INFRAESTRUCTURA SATELITAL TRANSITORIA

## 1. ANTECEDENTES
Para cumplir con los hitos de puesta en servicio temprana del corredor La Dorada - Chiriguaná, se autoriza el despliegue de infraestructura de comunicación satelital transitoria como alternativa al Backbone de Fibra Óptica (Red Vital IP) en tramos con obra de vía finalizada pero red troncal en proceso.

## 2. FUNDAMENTO CONTRACTUAL
- **Apéndice Técnico 1 (AT1), Sección 25.4:** Equipos complementarios para la operación anticipada.
- **Cláusula 9.12 (Contrato 001/2025):** Procedimiento para actualizaciones tecnológicas y modificaciones de alcance por eficiencia operativa.
- **DBCD SCC v002:** Se integra formalmente la habilitación de comunicaciones LEO para asegurar la continuidad del control vital PTC en fases de despliegue modular.

## 3. REQUERIMIENTOS TÉCNICOS (SICC v14.7)
1. **Tecnología:** Constelaciones LEO (Starlink Maritime / OneWeb) con terminales de alta disponibilidad.
2. **Latencia:** Máximo **3 segundos** (End-to-End) para el protocolo de control ferroviario **Virtual Fixed Block (§236.1005)**.
3. **Seguridad Functional:** Integridad **SIL-3** en la capa de transporte de datos vitales.
4. **Priorización:** El satélite es el canal primario de datos vitales en ausencia de fibra óptica, subordinado a la red de radio TETRA para voz operativa.

## 4. IMPACTO FINANCIERO (CADENA DOCTRINAL 9.12 -> 25.4)
- Los costos asociados a terminales y suscripciones se clasifican como **Equipos Complementarios (Sec 25.4)**, activados mediante el procedimiento de actualización tecnológica de la **Cláusula 9.12**.
- Esta habilitación no exime la obligación de finalizar el Backbone de Fibra Óptica G.652.D de 64 hilos, el cual asumirá el tráfico una vez finalizado el tendido.

## 5. CONCLUSIÓN
Se valida la arquitectura satelital transitoria. Queda prohibido el uso del término "Moving Block"; en su lugar se utilizará **"Virtual Fixed Block bajo §236.1005"**. Esta disposición no fracciona la entrega operativa de la UF2, sino que facilita la explotación técnica segura por tramos habilitados.

---
**Firmado:** Diego Z. — Director Técnico UF2
**Soberanía Ferroviaria Garantizada**
