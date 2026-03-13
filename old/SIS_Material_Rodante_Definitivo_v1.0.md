# MATERIAL RODANTE - DOCUMENTO MAESTRO v1.0 (Consolidación)

**Proyecto:** APP La Dorada - Chiriguaná  
**Fecha:** 03/10/2025  
**Estado:** EN PROGRESO (consolidación)  
**Responsable:** Ingeniería Mecánica / PMO  

## Fuentes a consolidar
- III. Ingenieria conceptual/32_Material_Rodante_Integrado_docx_AT1_Cl_13_1_AT2_operaci_n_AT4.md
- V. Ingenieria de detalle/V.3_Mecanica/V.3.1_Material_Rodante_Detallado.md
- I. Contrato General/6_Cl_13_1_MaterialRodante_docx_Equipos_embarcados_PTC_TETRA_MEJORADO.md

> **📋 DOCUMENTOS FUENTE CONSOLIDADOS:**
> - `V. Ingenieria de detalle/V.3_Mecanica/V.3.1_Material_Rodante_Detallado.md`
> - `I. Contrato General/6_Cl_13_1_MaterialRodante_docx_Equipos_embarcados_PTC_TETRA_MEJORADO.md`

---

## 1. Alcance del Sistema
- Definir especificaciones de material rodante y equipos embarcados (PTC, TETRA, energía, seguridad).  
  (Fuentes: 32_Material_Rodante_Integrado; Cl_13_1_MaterialRodante)

## 2. Trazabilidad Contractual
- Cláusula 13.1 (equipos embarcados); AT1 (alcance), AT2 (operación), AT4 (indicadores).  
  (Fuentes: Cl_13_1; 32_Material_Rodante_Integrado)

## 3. Integración de Fuentes (plan)
- Conceptual → Alcance y RTM: 32_Material_Rodante_Integrado  
- Detalle → Especificaciones y montaje: V.3.1_Material_Rodante_Detallado  
- Contractual → Requisitos mínimos y conformidad: Cl_13_1  

## 4. Estructura Técnica (índice)
1. Requisitos funcionales y de desempeño (AT4)  
   - Disponibilidad, fiabilidad, compatibilidad. (AT4; 32_Material_Rodante)
2. Equipos embarcados (PTC, TETRA, CCTV, energía)  
   - Interfaces, alimentación, cableado. (Cl_13_1; V.3.1)
3. Integración con sistemas de vía y CTC/PTC  
   - Protocolos, sincronización, pruebas. (32_Material_Rodante)
4. Seguridad operacional y normativas  
   - EN, UIC, RAMS (EN50126). (V.3.1)
5. Pruebas y puesta en servicio (FAT/SAT)  
   - Planes y criterios de aceptación. (V.3.1)
6. Operación y mantenimiento (O&M)  
   - Manuales, periodicidades, repuestos críticos, herramientas. (AT2; V.3.1)
7. Seguridad y ciberseguridad embarcada  
   - Aislamiento de redes, control de acceso, hardening. (Cl_13_1; criterios transversales)
8. RTM  
   - Requisito→Evidencia→Doc fuente (Cl_13_1; AT1/2/4; V.3.1; 32_Material_Rodante).  
9. KPIs  
   - AT4: disponibilidad MR; tasa fallas equipos embarcados; MTBF/MTTR; tiempo de recuperación.

10. RTM (resumen)
   
   | Requisito | Evidencia | Fuente |
   |---|---|---|
   | Equipos PTC embarcados conformes | Lista de verificación y pruebas embarcadas | Cl_13_1, V.3.1 |
   | Integración TETRA a bordo | Pruebas de comunicación tierra–tren | Cl_13_1, 27_TETRA |
   | Interfaces con CTC/PTC | Logs de mensajes/estados | 32_Material_Rodante |
   | Disponibilidad MR según AT4 | KPIs y bitácoras de fallas | AT4 |

### 9.2 Indicadores Clave de Rendimiento (KPIs) - Detallados

| KPI | Objetivo | Actual | Evidencia | Responsable | Estado |
|:---|:---:|:---:|:---|:---|:---:|
| **Disponibilidad material rodante** | 99.95% | En diseño | Monitoreo O&M | Ing. Mecánica | ⏳ |
| **MTBF equipos embarcados** | >8760h | En diseño | Análisis RAMS | Ing. Mecánica | ⏳ |
| **MTTR equipos embarcados** | <2h | En diseño | Plan mantenimiento | Ing. Mecánica | ⏳ |
| **Tasa fallas PTC embarcado** | <0.1% | En diseño | Logs de fallas | Ing. Mecánica | ⏳ |
| **Tiempo recuperación TETRA** | <30min | En diseño | Pruebas de campo | Ing. Mecánica | ⏳ |

11. Criterios de Aceptación (FAT/SAT)
   - FAT: validación funcional de equipos embarcados (PTC/TETRA/CCTV/energía).  
   - SAT: pruebas de integración en material rodante en operación.  
   - Disponibilidad: medición inicial vs. objetivos AT4 y tiempos de recuperación.

## 5. Pendientes de Integración
- Integrar contenido único por sección con referencia a origen  
- Completar RTM y validar KPIs AT4 y criterios de aceptación  

## 6. Referencias
- Roadmap: @@Roadmap_v12.0_Marco_Gestion_Consolidado.md
- Auditoría: Reportes/Estados/REPORTE_AUDITORIA_v1.1.md
- Índice Maestro: Indice_Maestro_Consolidado_v1.0.md
