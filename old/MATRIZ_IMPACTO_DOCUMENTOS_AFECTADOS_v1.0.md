# MATRIZ DE IMPACTO - DOCUMENTOS AFECTADOS POR CRITERIOS TÉCNICOS MAESTROS
## APP La Dorada-Chiriguaná - Análisis Crítico de Desalineación

**Estado:** 🚨 **DESALINEACIÓN MASIVA DETECTADA**  
**Fecha:** Enero 2025  
**Responsable:** PMO - Administrador Contractual EPC  
**Versión:** 1.0  

---

## 📊 **RESUMEN EJECUTIVO**

### **🎯 DIAGNÓSTICO GENERAL**
Se ha detectado una **desalineación crítica** entre los **Criterios Técnicos Maestros** (documento fuente de verdad) y múltiples documentos del proyecto. Esta desalineación representa un **impacto presupuestal neto de -$50,193,000,000 COP**.

### **📈 MÉTRICAS DE IMPACTO**
| Categoría | Cantidad | Estado |
|:----------|:--------:|:------:|
| **Documentos críticos afectados** | 15 | 🔴 CRÍTICO |
| **Documentos medios afectados** | 8 | 🟡 MEDIO |
| **Documentos nuevos requeridos** | 4 | 🆕 NUEVO |
| **Total documentos a actualizar** | 27 | ⚠️ MASIVO |

---

## 🔍 **MATRIZ DE IMPACTO POR DOCUMENTO**

### **🔴 DOCUMENTOS CRÍTICOS (Prioridad 1 - Impacto Alto)**

| Documento | Criterio Afectado | Desviación | Impacto Presupuestal | Esfuerzo | Estado |
|:----------|:------------------|:-----------|:---------------------|:---------|:------:|
| **WBS_Presupuesto_SCC_APP_La_Dorada_Chiriguaná.html** | Virtual Balise (GNSS)s + Señalización en Cabina (Cab-Signaling) + Servidor PTC Central | 1,080 + 270 + 2 unidades | -$54,000,000,000 | Alto | ⏳ Pendiente |
| **V.1_Señalizacion_Ferroviaria_Detalle_v1.0.md** | Filosofía señalización | Física → Virtual | -$64,000,000,000 | Alto | ⏳ Pendiente |
| **V.2_Centro_Control_Trafico_CTC_Detalle_v1.0.md** | Arquitectura CTC | Servidor PTC Central eliminado | -$2,000,000,000 | Alto | ⏳ Pendiente |
| **V.3_Sistemas_Comunicacion_Detalle_v1.0.md** | TETRA + Red Vital IP / TETRA | 33→37 + Agregar 37 | +$1,484,000,000 | Alto | ⏳ Pendiente |
| **VII.2.1_SRS_PTC_PTC VIRTUAL_Level2_v1.0.md** | Arquitectura PTC | PTC Virtual (FRA 236) → PTC embarcado | -$40,000,000,000 | Alto | ⏳ Pendiente |
| **VII.2.3_Plan_Virtual Balise (GNSS)_Ubicacion_150m.md** | Virtual Balise (GNSS)s | 1,080 → 0 unidades | -$40,000,000,000 | Alto | ⏳ Pendiente |
| **29_Sistema_Senalizacion_Integrado.md** | Filosofía señalización | Física → Virtual | -$64,000,000,000 | Alto | ⏳ Pendiente |
| **27_Sistema_TETRA_Integrado.md** | Cantidades TETRA | 33 → 37 estaciones | +$4,830,000,000 | Alto | ⏳ Pendiente |
| **32_Material_Rodante_Integrado.md** | Sistema EOT | NO → 15 dispositivos | +$520,000,000 | Alto | ⏳ Pendiente |
| **AT1_Alcance_del_Proyecto_MEJORADO.md** | Múltiples sistemas | Arquitectura completa | -$50,193,000,000 | Alto | ⏳ Pendiente |
| **23_ListadoMaestro_Sistemas.md** | Inventario sistemas | Múltiples cambios | -$50,193,000,000 | Alto | ⏳ Pendiente |
| **25.1_WBS_COMPLETA_ESPECIALIDADES.md** | Estructura WBS | Reestructuración | -$50,193,000,000 | Alto | ⏳ Pendiente |
| **VII.2.6_Interlocking_Tables_5_Estaciones.md** | ENCE | NO → 5 estaciones | +$6,020,000,000 | Alto | ⏳ Pendiente |
| **VII.2.4_Interfaces_CTC_PTC_Protocolo_FFFIS.md** | Interfaces | Servidor PTC Central eliminado | -$2,000,000,000 | Alto | ⏳ Pendiente |
| **VII.2.7_Especificaciones_STM_Embarcadas.md** | STM embarcado | PTC VIRTUAL → PTC | -$40,000,000,000 | Alto | ⏳ Pendiente |

### **🟡 DOCUMENTOS MEDIOS (Prioridad 2 - Impacto Medio)**

| Documento | Criterio Afectado | Desviación | Impacto Presupuestal | Esfuerzo | Estado |
|:----------|:------------------|:-----------|:---------------------|:---------|:------:|
| **28_Sistema_FibraOptica_Integrado.md** | Cantidades fibra | 526 → 526 km | +$6,800,000,000 | Medio | ⏳ Pendiente |
| **31_Sistema_CCTV_Integrado.md** | Cantidades CCTV | 110-180 → 73 cámaras | -$2,000,000,000 | Medio | ⏳ Pendiente |
| **30_Sistema_ITS_Integrado.md** | Sistemas ITS | Actualización | Sin impacto | Medio | ⏳ Pendiente |
| **26_Sistema_CTC_Integrado.md** | Arquitectura CTC | Servidor PTC Central eliminado | -$2,000,000,000 | Medio | ⏳ Pendiente |
| **VII.2.8_Arquitectura_Software_CTC.md** | Software CTC | Servidor PTC Central eliminado | -$2,000,000,000 | Medio | ⏳ Pendiente |
| **VII.2.9_Analisis_RAMS_EN50126.md** | Análisis RAMS | PTC VIRTUAL → PTC | Sin impacto | Medio | ⏳ Pendiente |
| **VII.2.10_Plan_Verificacion_Validacion_Completo.md** | Plan V&V | PTC VIRTUAL → PTC | Sin impacto | Medio | ⏳ Pendiente |
| **VII.2.11_Cybersecurity_IEC62443.md** | Ciberseguridad | PTC VIRTUAL → PTC | Sin impacto | Medio | ⏳ Pendiente |

### **🆕 DOCUMENTOS NUEVOS REQUERIDOS (Prioridad 3 - Creación)**

| Documento | Propósito | Criterio Base | Impacto Presupuestal | Esfuerzo | Estado |
|:----------|:-----------|:--------------|:---------------------|:---------|:------:|
| **V.X_Enclavamientos_ENCE_Detalle_v1.0.md** | Especificaciones ENCE | 5 estaciones ENCE | +$6,020,000,000 | Alto | ⏳ Pendiente |
| **V.X_Sistema_Desvios_Detalle_v1.0.md** | Especificaciones desvíos | 120 desvíos | +$3,783,000,000 | Alto | ⏳ Pendiente |
| **V.X_Sistema_RED TETRA (Misión Crítica)_Detalle_v1.0.md** | Especificaciones Red Vital IP / TETRA | 37 estaciones Red Vital IP / TETRA | +$3,484,000,000 | Alto | ⏳ Pendiente |
| **V.X_Sistema_EOT_Detalle_v1.0.md** | Especificaciones EOT | 15 dispositivos EOT | +$520,000,000 | Alto | ⏳ Pendiente |

---

## 📋 **DETALLE DE DESVIACIONES POR CRITERIO**

### **🚨 CRITERIOS CRÍTICOS - ELIMINACIÓN TOTAL**

#### **1. EUROBALISES (1,080 unidades → 0 unidades)**
- **Impacto:** -$40,000,000,000 COP
- **Documentos afectados:** 8 documentos
- **Acción requerida:** Eliminación completa de todas las referencias
- **Justificación:** Señalización virtual implementada

#### **2. SEÑALES LED EN VÍA (270 unidades → 0 unidades)**
- **Impacto:** -$12,000,000,000 COP
- **Documentos afectados:** 6 documentos
- **Acción requerida:** Eliminación completa de todas las referencias
- **Justificación:** CTC virtual centralizado

#### **3. Servidor PTC Central - RADIO BLOCK CENTRE (2 unidades → 0 unidades)**
- **Impacto:** -$2,000,000,000 COP
- **Documentos afectados:** 5 documentos
- **Acción requerida:** Eliminación completa de todas las referencias
- **Justificación:** Arquitectura PTC embarcado

#### **4. LEU - LINESIDE ELECTRONIC UNITS (1,080 unidades → 0 unidades)**
- **Impacto:** -$10,000,000,000 COP
- **Documentos afectados:** 4 documentos
- **Acción requerida:** Eliminación completa de todas las referencias
- **Justificación:** Sistema PTC embarcado

### **🟡 CRITERIOS MEDIOS - AJUSTE DE CANTIDADES**

#### **5. TETRA (33 → 37 estaciones)**
- **Impacto:** +$4,830,000,000 COP
- **Documentos afectados:** 3 documentos
- **Acción requerida:** Actualizar cantidades
- **Justificación:** Cobertura 100% + solapamiento 15-20%

#### **6. CCTV (110-180 → 73 cámaras)**
- **Impacto:** -$2,000,000,000 COP
- **Documentos afectados:** 2 documentos
- **Acción requerida:** Actualizar cantidades específicas
- **Justificación:** Solo control ferroviario

### **🆕 CRITERIOS NUEVOS - IMPLEMENTACIÓN**

#### **7. Red Vital IP / TETRA (NO incluido → 37 estaciones)**
- **Impacto:** +$3,484,000,000 COP
- **Documentos afectados:** 2 documentos
- **Acción requerida:** Crear especificaciones completas
- **Justificación:** Redundancia con TETRA

#### **8. EOT - END OF TRAIN (NO incluido → 15 dispositivos)**
- **Impacto:** +$520,000,000 COP
- **Documentos afectados:** 2 documentos
- **Acción requerida:** Crear especificaciones completas
- **Justificación:** Integridad del tren

#### **9. ENCE - ENCLAVAMIENTOS ELECTRÓNICOS (NO especificado → 5 estaciones)**
- **Impacto:** +$6,020,000,000 COP
- **Documentos afectados:** 2 documentos
- **Acción requerida:** Crear especificaciones completas
- **Justificación:** Control de desvíos críticos

#### **10. DESVÍOS (NO incluido → 120 unidades)**
- **Impacto:** +$3,783,000,000 COP
- **Documentos afectados:** 2 documentos
- **Acción requerida:** Crear especificaciones completas
- **Justificación:** Control de tráfico

---

## 📊 **MATRIZ DE DEPENDENCIAS DOCUMENTALES**

### **🏗️ CAPA 1: DOCUMENTOS BASE (Días 3-4)**
**Dependencia:** Otros documentos dependen de estos
1. **AT1_Alcance_del_Proyecto_MEJORADO.md** ← **BASE CRÍTICA**
2. **23_ListadoMaestro_Sistemas.md** ← **BASE CRÍTICA**
3. **CRITERIOS_TECNICOS_MAESTRO_v1.0.md** ← **YA ACTUALIZADO**

### **🎨 CAPA 2: INGENIERÍA CONCEPTUAL (Días 5-6)**
**Dependencia:** Dependen de Capa 1, sirven de base para Capa 3
1. **25.1_WBS_COMPLETA_ESPECIALIDADES.md**
2. **29_Sistema_Senalizacion_Integrado.md**
3. **27_Sistema_TETRA_Integrado.md**
4. **26_Sistema_CTC_Integrado.md**
5. **28_Sistema_FibraOptica_Integrado.md**
6. **30_Sistema_ITS_Integrado.md**
7. **31_Sistema_CCTV_Integrado.md**
8. **32_Material_Rodante_Integrado.md**

### **📐 CAPA 3: INGENIERÍA BÁSICA (Días 7-8)**
**Dependencia:** Dependen de Capa 2, sirven de base para Capa 4
1. **V.1_Señalizacion_Ferroviaria_Detalle_v1.0.md**
2. **V.2_Centro_Control_Trafico_CTC_Detalle_v1.0.md**
3. **V.3_Sistemas_Comunicacion_Detalle_v1.0.md**
4. **VII.2.1_SRS_PTC_PTC VIRTUAL_Level2_v1.0.md**
5. **VII.2.3_Plan_Virtual Balise (GNSS)_Ubicacion_150m.md**
6. **VII.2.4_Interfaces_CTC_PTC_Protocolo_FFFIS.md**
7. **VII.2.6_Interlocking_Tables_5_Estaciones.md**
8. **VII.2.7_Especificaciones_STM_Embarcadas.md**
9. **VII.2.8_Arquitectura_Software_CTC.md**

### **🔧 CAPA 4: INGENIERÍA DE DETALLE (Días 9-10)**
**Dependencia:** Dependen de Capa 3, son los más específicos
1. **V.X_Enclavamientos_ENCE_Detalle_v1.0.md** ← **NUEVO**
2. **V.X_Sistema_Desvios_Detalle_v1.0.md** ← **NUEVO**
3. **V.X_Sistema_RED TETRA (Misión Crítica)_Detalle_v1.0.md** ← **NUEVO**
4. **V.X_Sistema_EOT_Detalle_v1.0.md** ← **NUEVO**

### **💰 CAPA 5: PRESUPUESTO (Días 13-15)**
**Dependencia:** Depende de TODAS las capas anteriores
1. **WBS_Presupuesto_SCC_APP_La_Dorada_Chiriguaná.html**

---

## 🎯 **PLAN DE ACCIÓN POR CAPAS**

### **📅 CRONOGRAMA DETALLADO**

#### **DÍA 1-2: AUDITORÍA Y MAPEO**
- ✅ **COMPLETADO:** Matriz de impacto creada
- ✅ **COMPLETADO:** Documentos afectados identificados
- ✅ **COMPLETADO:** Dependencias mapeadas

#### **DÍA 3-4: CAPA 1 - DOCUMENTOS BASE**
- **DÍA 3:** Actualizar AT1_Alcance_del_Proyecto_MEJORADO.md
- **DÍA 4:** Actualizar 23_ListadoMaestro_Sistemas.md

#### **DÍA 5-6: CAPA 2 - INGENIERÍA CONCEPTUAL**
- **DÍA 5:** Actualizar WBS y sistemas principales
- **DÍA 6:** Actualizar sistemas secundarios

#### **DÍA 7-8: CAPA 3 - INGENIERÍA BÁSICA**
- **DÍA 7:** Actualizar documentos de detalle críticos
- **DÍA 8:** Actualizar documentos de detalle secundarios

#### **DÍA 9-10: CAPA 4 - INGENIERÍA DE DETALLE**
- **DÍA 9:** Crear documentos nuevos (ENCE, Desvíos)
- **DÍA 10:** Crear documentos nuevos (Red Vital IP / TETRA, EOT)

#### **DÍA 11-12: VALIDACIÓN CRUZADA**
- **DÍA 11:** Ejecutar checklist de coherencia
- **DÍA 12:** Validar integridad documental

#### **DÍA 13-15: GENERACIÓN PRESUPUESTO**
- **DÍA 13-14:** Actualizar WBS presupuestal
- **DÍA 15:** Validar presupuesto final

---

## ⚠️ **ALERTAS CRÍTICAS**

### **🚨 RIESGOS IDENTIFICADOS**
1. **Riesgo de inconsistencia:** Si no se actualiza por capas
2. **Riesgo de sobrepresupuesto:** Si no se eliminan eurobalises
3. **Riesgo de falta de sistemas:** Si no se agregan Red Vital IP / TETRA, EOT, ENCE
4. **Riesgo de retraso:** Si no se sigue la secuencia de capas

### **🔒 CRITERIOS DE ÉXITO**
- [ ] Todos los documentos actualizados según criterios maestros
- [ ] Coherencia 100% entre documentos
- [ ] Presupuesto alineado con criterios técnicos
- [ ] Validación cruzada exitosa
- [ ] Documentación de cambios completa

---

## 📞 **RESPONSABILIDADES**

| Capa | Responsable | Especialidad | Fecha Límite |
|:-----|:------------|:-------------|:-------------|
| **Capa 1** | Administrador Contractual EPC | Contractual | Día 4 |
| **Capa 2** | Ing. Sistemas | Conceptual | Día 6 |
| **Capa 3** | Ing. Especialistas | Básica | Día 8 |
| **Capa 4** | Ing. Especialistas | Detalle | Día 10 |
| **Validación** | PMO | Coordinación | Día 12 |
| **Presupuesto** | Ing. Costos | Financiero | Día 15 |

---

**Este documento es VIVO y debe actualizarse conforme se avance en las correcciones documentales.**

**Próximo paso:** Iniciar actualización de AT1_Alcance_del_Proyecto_MEJORADO.md (documento base más crítico)
