# SEÑALIZACIÓN FERROVIARIA - DOCUMENTO MAESTRO v1.0 (Consolidación)

**Proyecto:** APP La Dorada - Chiriguaná  
**Fecha:** 03/10/2025  
**Estado:** EN PROGRESO (consolidación)  
**Responsable:** Ingeniería de Señalización / PMO  

## Fuentes a consolidar
- III. Ingenieria conceptual/29_Sistema_Senalizacion_Integrado_docx_AT1_AT2_AT3_AT4_AT8_social.md
- V. Ingenieria de detalle/V.1_Señalizacion_Ferroviaria_Detalle_v1.0.md
- V. Ingenieria de detalle/V.4_Sistemas/1_Se_alizaci_n_ferroviaria_Contrato_8_1.md
- V. Ingenieria de detalle/V.4_Sistemas/3_Pasos_a_nivel_Contrato_8_3.md
- VII. Soporte Especializado/VII.2_Especificaciones/VII.2.3_Plan_Virtual Balise (GNSS)_Ubicacion_150m.md

> **📋 DOCUMENTOS FUENTE CONSOLIDADOS:**
> - `V. Ingenieria de detalle/V.1_Señalizacion_Ferroviaria_Detalle_v1.0.md`
> - `V. Ingenieria de detalle/V.4_Sistemas/1_Se_alizaci_n_ferroviaria_Contrato_8_1.md`
> - `V. Ingenieria de detalle/V.4_Sistemas/3_Pasos_a_nivel_Contrato_8_3.md`
> - `VII. Soporte Especializado/VII.2_Especificaciones/VII.2.3_Plan_Virtual Balise (GNSS)_Ubicacion_150m.md`

---

## 1. Alcance del Sistema
- Señalización e interlocking para corredor LD-CH, con pasos a nivel y punto de referencia virtualdo Virtual Balise (GNSS).  
  (Fuente: 29_Sistema_Senalizacion_Integrado...)
- Cumplimiento de seguridad ferroviaria y normativas FRA/AREMA/EN, integración con CTC/PTC.  
  (Fuente: V.1_Señalizacion_Ferroviaria_Detalle_v1.0.md)

## 2. Trazabilidad Contractual
- ATs aplicables: AT1 (alcance), AT2 (operaciones), AT3 (especificaciones), AT4 (indicadores), AT8 (seguridad vial).  
  (Fuente: 29_Sistema_Senalizacion_Integrado...)
- Relación con KPIs de disponibilidad (AT4) y prerequisitos de obra (AT9).  
  (Fuente: 1_Se_alizaci_n_ferroviaria_Contrato_8_1.md)

## 3. Integración de Fuentes (plan de consolidación)
- Conceptual → Alcance y RTM: 29_Sistema_Senalizacion_Integrado...  
- Detalle → Especificaciones constructivas: V.1_Señalizacion_Ferroviaria_Detalle_v1.0.md  
- Sistemas → Requisitos específicos: 1_Se_alizaci_n_ferroviaria_Contrato_8_1.md, 3_Pasos_a_nivel_Contrato_8_3.md  
- Especializado → Plan Virtual Balise (GNSS): VII.2.3_Plan_Virtual Balise (GNSS)_Ubicacion_150m.md

## 4. Estructura Técnica (índice consolidado)
1. Requisitos normativos y funcionales  
   - FRA/AREMA/EN; protección de cruces; integración con CTC/PTC. (V.1; 29_Sistema_...)
2. Arquitectura y principio de funcionamiento  
   - Topología interlocking; lógica de rutas; enclavamientos. (V.1)
3. Interlocking y tablas (resumen)  
   - Resumen de tablas para 5 estaciones críticas. (VII.2.x si aplica)
4. Pasos a nivel: criterios y diseno  
   - Tipologías, activación, barreras, señalización vial. (3_Pasos_a_nivel_Contrato_8_3.md)
5. Punto de referencia virtualdo Virtual Balise (GNSS): ubicación y parámetros  
   - Ubicación propuesta a 150 m; parámetros de telegrama. (VII.2.3_Plan_Virtual Balise (GNSS)_Ubicacion_150m.md)
6. Interfaces con CTC e PTC (FFFIS)  
   - Señales, estados y alarmas integrados vía FFFIS; sincronización horaria. (VII.2.4)
7. Pruebas y validación (FAT/SAT)  
   - FAT de lógicas de enclavamiento; SAT en campo de pasos a nivel y Virtual Balise (GNSS). (V.1)
8. Operación y mantenimiento (resumen)  
   - Procedimientos de prueba periódica, reposición, y monitoreo. (V.1; AT2)

9. RTM y KPIs  
   - RTM: Requisito→Evidencia→AT/Doc fuente (AT1/2/3/4/8; V.1; 29_; 3_Pasos_; VII.2.3).  
   - KPIs (AT4): Disponibilidad enclavamientos; MTBF/MTTR; tasa falsas activaciones P.N.  
   - Verificación: checklist de pruebas y registros SAT correlacionados a RTM.

   RTM (resumen):
   
   | Requisito | Evidencia | Fuente |
   |---|---|---|
   | Interlocking operativo por estación | FAT lógicas + reporte V.1 | AT3, V.1 |
   | P.N. con activación segura | SAT de campo + plan pruebas | 3_Pasos_, AT8 |
   | Virtual Balise (GNSS) ubicado a 150 m | Plano y cálculo de ubicación | VII.2.3 |
   | Disponibilidad señalización ≥ objetivo | Registro KPIs trimestral | AT4 |
   | Integración FFFIS con CTC/PTC | Log de mensajes y alarmas | VII.2.4 |

### 9.2 Indicadores Clave de Rendimiento (KPIs) - Detallados

| KPI | Objetivo | Actual | Evidencia | Responsable | Estado |
|:---|:---:|:---:|:---|:---|:---:|
| **Disponibilidad enclavamientos** | 99.95% | En diseno | Análisis RAMS | Ing. Señalización | ⏳ |
| **MTBF sistema** | >8760h | En diseno | Análisis RAMS | Ing. Señalización | ⏳ |
| **MTTR sistema** | <4h | En diseno | Plan mantenimiento | Ing. Señalización | ⏳ |
| **Tasa falsas activaciones PAL** | <0.1% | En diseno | Simulaciones | Ing. Señalización | ⏳ |
| **Tiempo respuesta Virtual Balise (GNSS)** | <500ms | En diseno | Especificaciones | Ing. Señalización | ⏳ |

10. Criterios de Aceptación (FAT/SAT)
   - FAT: validación de lógicas de enclavamiento y alarmas críticas sin fallas.
   - SAT: verificación en campo de P.N., Virtual Balise (GNSS) y señalización vial asociada.
   - Integración: prueba de mensajes/estados FFFIS con CTC/PTC sin pérdidas.
   - Disponibilidad: evidencias que soporten objetivos AT4 (KPIs iniciales).

## 5. Pendientes de Integración
- Volcar contenido único de cada fuente a las secciones 1–9 con citas de origen  
- Completar RTM con referencias a contrato y ATs  
- Verificar consistencia con KPIs de AT4

## 6. Referencias
- Roadmap: @@Roadmap_v12.0_Marco_Gestion_Consolidado.md
- Auditoría: Reportes/Estados/REPORTE_AUDITORIA_v1.1.md
- Índice Maestro: Indice_Maestro_Consolidado_v1.0.md
