# ANÁLISIS CONTRACTUAL COMPLETO - VALIDACIÓN TODOS LOS ATs

**Proyecto:** APP La Dorada - Chiriguaná  
**Fecha:** 9 de Octubre 2025  
**Responsable:** PMO / Análisis Contractual  
**Fuente:** Apéndices Técnicos AT1-AT10 + Análisis previos (II.A/)  
**Estado:** ✅ VALIDACIÓN COMPLETA

---

## 📊 **RESUMEN EJECUTIVO**

**Archivos Contractuales Analizados:** 11 (Contrato + 10 ATs)  
**Tamano Total:** ~1.4 MB de documentación contractual  
**Riesgos Validados:** 13 (9 reales documentados + 4 nuevos identificados)  
**BLOCKERS Confirmados:** 2 de 4 (PTC, MR Cronograma)  
**BLOCKERS Descartados:** 1 de 4 (PAN - cantidad confirmada)  
**BLOCKERS Parciales:** 1 de 4 (FENOCO - parcial)

---

## 🔴 **BLOCKERS CRÍTICOS - VALIDACIÓN FINAL**

### **✅ BLOCKER-001: Indefinición PTC/PTC VIRTUAL L2** - **CONFIRMADO REAL**

**Fuentes Validadas:**
1. **AT3 Capítulo VIII** (Senalización y Control):
   - Línea 289: "Positive Train Control" (PTC - AAR americano)
   - Líneas 506-524: Enclavamientos normas Adif (espanol)
   - Líneas 529-532: CTC protocolo Adif (espanol)
   - ❌ **NO menciona:** PTC ni PTC Virtual (FRA 236)

2. **Análisis A.1 (línea 49):**
   - "Disenar 5 enclavamientos electrónicos y un sistema **PTC**"

3. **Análisis A.3 (línea 58 - R-TEC-002):**
   - "Indefinición especificaciones PTC en AT3 **bloquea diseno material rodante**"

**Evidencia contractual:**
- ✅ PTC mencionado (sistema americano AAR)
- ✅ CTC Adif mencionado (sistema espanol)
- ❌ PTC NO mencionado
- ❌ PTC Virtual (FRA 236) NO mencionado

**CONCLUSIÓN:** 🔴 **BLOCKER CRÍTICO CONFIRMADO**

**Valor en riesgo:** $152,748M COP (60% Capítulo 1)  
**Fecha límite resolución:** Mes 6 (15-Dic-2025)  
**Plan B:** Disenar con normas mixtas (PTC/CTC/Adif) + gateway interoperable

---

### **✅ BLOCKER-002: Protocolos FENOCO** - **PARCIALMENTE CONFIRMADO**

**Fuentes Validadas:**
1. **AT10 §4.1-4.4** (Compatibilidad Material Rodante):
   - Concesionario debe elaborar documento "Compatibilidad con Terceros"
   - Plazo: 90 días post-inicio
   - ANI aprueba compatibilidad
   - ❌ **NO especifica protocolos operadores existentes**

2. **Análisis automático:**
   - AT1: Menciona FENOCO (interoperabilidad)
   - AT2: Menciona FENOCO
   - AT4: Menciona FENOCO
   - AT6: Menciona FENOCO

**Evidencia contractual:**
- ✅ Interoperabilidad con "Terceros Interesados" requerida
- ❌ Protocolos específicos FENOCO NO especificados
- ✅ Concesionario debe crear documento compatibilidad

**CONCLUSIÓN:** 🟡 **BLOCKER PARCIAL**

**Razón:** Contrato SÍ requiere interoperabilidad, pero NO especifica protocolos.  
**Responsabilidad:** Concesionario debe obtener specs FENOCO para documento  
**Fecha límite:** Mes 3 (90 días post-inicio)  
**Plan B:** FRA/AREMA 918-4 genérico si FENOCO no colabora

---

### **❌ BLOCKER-003: Cantidades PAN** - **DESCARTADO (No es BLOCKER)**

**Fuentes Validadas:**
1. **Análisis A.1 (línea 48):**
   - "Disenar regularización de **146 pasos a nivel** (Clase A, B, C)"

2. **Análisis A.3 (línea 48):**
   - "Disenar rehabilitación de 53 UFVF y **146 pasos a nivel**"

3. **Base Datos WBS:**
   - 146 pasos a nivel (9 tipo C + 15 tipo B + 122 otros)

**Evidencia contractual:**
- ✅ Cantidad **146 PAN** es CONSISTENTE entre:
  - AT1 análisis ✅
  - AT9 análisis ✅
  - Base datos WBS ✅

**Inconsistencias en análisis automático (5, 10, 100) fueron:**
- Menciones parciales o mal parseadas
- No son cantidades oficiales

**CONCLUSIÓN:** ✅ **NO ES BLOCKER**

**Cantidad confirmada:** 146 pasos a nivel  
**Clasificación:** 9C + 15B + 122 otros  
**Estado:** Regularización puede ajustar ±10% pero cantidad base es clara

---

### **✅ BLOCKER-004: Cronograma Material Rodante** - **CONFIRMADO REAL**

**Fuentes Validadas:**
1. **AT9 §(h) - Plan de Obras:**
   > "Se debe incluir el tiempo estimado para realizar la Puesta a Punto
   > de cada unidad de Material Rodante entregada **por parte de la Nación**."

2. **AT10 §3.1-3.2:**
   - "Material Rodante del Proyecto" debe evaluarse
   - Modelo operacional en 30 días post-inicio
   - ❌ **Cronograma entrega NO especificado**

**Evidencia contractual:**
- ✅ Material Rodante entregado por "la Nación" (confirmado)
- ❌ Cronograma entrega NO especificado
- ❌ Cantidad exacta NO especificada
- ❌ Responsable entrega NO claro

**CONCLUSIÓN:** 🟡 **BLOCKER CONFIRMADO**

**Impacto:** Cronograma Puesta a Punto indefinido  
**Fecha límite solicitud:** Mes 5 (15-Nov-2025)  
**Plan B:** Asumir cronograma genérico M20 + secuencia adaptable

---

## 📋 **HALLAZGOS CONTRACTUALES COMPLETOS**

### **CRONOGRAMA CONTRACTUAL (AT9):**

| Fase | Duración | Acumulado |
|:-----|:--------:|:---------:|
| Estudios y Disenos | **12 meses** | 12m |
| Obras Civiles | **24 meses** | 36m |
| Instalación Sistemas | **18 meses** | 54m |
| Pruebas y Puesta en Servicio | **6 meses** | **60m** |

**TOTAL CONTRACTUAL:** **60 meses** desde inicio

**Desglose PMO:**
- Ingeniería: 12 meses (Mes 0-12)
- Obra: 48 meses (Mes 13-60) → Comprende Civiles + Instalación + Pruebas

**Plan PMO Agresivo generado HOY:**
- Obra base: 36 meses (agresivo)
- Buffer riesgos: 12 meses
- **Total:** 48 meses obra (dentro de 60m contractual) ✅

---

### **ALCANCE TÉCNICO (AT1 + AT3):**

**Sistemas Principales:**
1. **Senalización y Control:**
   - 5 Enclavamientos electrónicos (normas Adif)
   - 1 Sistema PTC (normas AAR) ⚠️ Indefinición PTC/PTC VIRTUAL L2
   - CTC centralizado (protocolo Adif)

2. **Telecomunicaciones:**
   - Red TETRA 100% cobertura (normas EN 300 xxx)
   - Fibra Óptica 10 Gbps (UIT-T G.652)
   - ⚠️ Red Vital IP / TETRA: NO mencionado explícitamente en AT3

3. **ITS y Seguridad:**
   - 200 Cámaras CCTV
   - 146 Pasos a Nivel (9C + 15B + 122 otros) ✅
   - Sistemas contra incendio

4. **Material Rodante:**
   - Puesta a Punto (responsabilidad Concesionario)
   - Equipamiento PTC/TETRA embarcado
   - ⚠️ Cantidad y cronograma entrega indefinidos

5. **Infraestructura:**
   - 53 Unidades Funcionales de Vía Férrea (UFVF)
   - Talleres (Pesado + Liviano)
   - Centro de Control Operacional (CCO)

---

### **INDICADORES CONTRACTUALES (AT4):**

**KPIs Obligatorios:**
- Disponibilidad Sistemas Críticos (CTC, Senalización): ≥ **99.95%**
- Disponibilidad Sistemas No Críticos (TETRA, CCTV): ≥ **99.5%**
- Disponibilidad SICC: ≥ **99.5%**
- Calidad de Servicio (cobertura, latencia): Según especificaciones

**Penalidades:** Sujeto a incumplimiento KPIs

---

### **INTEROPERABILIDAD (AT10):**

**Requisitos:**
- Compatibilidad con Material Rodante Terceros Interesados
- Concesionario elabora documento "Requisitos Compatibilidad" (90 días)
- ANI aprueba compatibilidad
- Pruebas de Material Rodante Terceros

**PROBLEMA:** Protocolos Terceros (FENOCO) NO especificados

---

## ⚠️ **RIESGOS REALES IDENTIFICADOS EN ANÁLISIS CONTRACTUALES**

### **De Análisis A.1, A.2, A.3:**

| ID | Descripción | Fuente | Impacto | Ya en Matriz? |
|:--:|:------------|:-------|:--------|:-------------:|
| **R-TEC-001** | Indefinición PTC bloquea diseno MR | A.1 | Crítico | ✅ = R-AT3-01 |
| **R-TEC-002** | Indefinición specs PTC en AT3 | A.3 | Crítico | ✅ = R-AT3-01 |
| **R-GES-004** | Desfase aprobación disenos vs cronograma | A.1 | Alto | ❌ NUEVO |
| **R-CON-001** | Ambigüedad medición disponibilidad PAN 100% | A.2 | Alto | ❌ NUEVO |
| **R-OPE-001** | Falla conmutación failover redundancia | A.2 | Alto | ❌ NUEVO |
| **R-CRO-001** | Cronograma 60m muy ajustado | A.3 | Alto | ✅ Ya gestionado |
| **R-CAL-001** | Calidad materiales/mano obra | A.3 | Alto | ❌ NUEVO |

**Riesgos NUEVOS a agregar:** 4 (R-GES-004, R-CON-001, R-OPE-001, R-CAL-001)

---

## ✅ **BLOCKERS FINALES - RESUMEN**

| Blocker | Validación | Criticidad | Acción |
|:--------|:-----------|:----------:|:-------|
| **BLOCKER-001** PTC | ✅ CONFIRMADO | 🔴 CRÍTICA | Oficiar ANI Mes 6 |
| **BLOCKER-002** FENOCO | 🟡 PARCIAL | 🟠 ALTA | Documento compatibilidad M3 |
| **BLOCKER-003** PAN | ❌ DESCARTADO | - | 146 PAN confirmado ✅ |
| **BLOCKER-004** MR | ✅ CONFIRMADO | 🟡 MEDIA | Solicitar cronograma Mes 5 |

**BLOCKERS REALES:** 2 (PTC, MR Cronograma)  
**BLOCKERS PARCIALES:** 1 (FENOCO)  
**BLOCKERS DESCARTADOS:** 1 (PAN - cantidad confirmada)

---

## 📝 **HALLAZGOS CLAVE CONTRACTUALES**

### **1. Cronograma Contractual: 60 meses TOTAL**
- Ingeniería: 12 meses (Mes 0-12)
- Obra: 48 meses (Mes 13-60)
  - Civiles: 24m
  - Instalación: 18m
  - Pruebas: 6m

**Plan PMO HOY:** 36m base + 12m buffer = 48m (dentro contractual) ✅

---

### **2. Sistemas de Control: Normas Mixtas (INDEFINICIÓN)**
- **PTC** (AAR americano) mencionado
- **CTC Adif** (espanol) mencionado
- **PTC/PTC VIRTUAL L2** NO mencionados
- **Acción:** Definir sistema específico (Mes 6)

---

### **3. Pasos a Nivel: 146 confirmados**
- 9 tipo C (alto riesgo)
- 15 tipo B (medio riesgo)
- 122 otros (bajo riesgo)
- **NO es BLOCKER** ✅

---

### **4. Material Rodante: Cronograma indefinido**
- Entregado por "la Nación"
- Puesta a Punto responsabilidad Concesionario
- **Cronograma NO especificado** ⚠️
- **Acción:** Solicitar a ANI (Mes 5)

---

### **5. Interoperabilidad: FENOCO sin protocolos**
- Compatibilidad Terceros requerida
- Documento compatibilidad (90 días)
- **Protocolos NO especificados** ⚠️
- **Acción:** Solicitar specs FENOCO (Mes 3-6)

---

### **6. Red Vital IP / TETRA: NO mencionado en AT3**
- Base datos incluye Red Vital IP / TETRA
- AT3 solo menciona TETRA
- **¿Red Vital IP / TETRA es obligatorio?** ⏳
- **Acción:** Clarificar con ANI

---

### **7. Indicadores: AT4 - 99.95% disponibilidad**
- Sistemas críticos: CTC, Senalización
- Requiere redundancia N+1 obligatoria
- UPS 4h autonomía mínimo
- **Diseno validado en WBS** ✅

---

## 🎯 **DOCUMENTOS A ENTREGAR (Según ATs)**

### **Fase Preconstrucción (12 meses):**

| Documento | AT Origen | Plazo | Aprobación |
|:----------|:---------:|:-----:|:-----------|
| Estudios de Detalle completos | AT1 | M12 | ANI + Interventoría |
| Especificaciones técnicas finales | AT3 | M10 | Interventoría |
| Plan de Obras definitivo | AT9 | M12 | ANI + Interventoría |
| Documento Compatibilidad MR | AT10 | M3 (90d) | ANI + Interventoría |
| Plan BIM (BEP) | AT1 | M1 | Interventoría |
| Plan gestión permisos | Cl. 8.1 | M6 | ANLA/ANI |

---

## ✅ **VALIDACIÓN FINAL TODOS LOS BLOCKERS**

### **Tabla Resumen:**

| ID | Blocker | Fuente Contrato | Validado | Criticidad | Estado |
|:--:|:--------|:----------------|:--------:|:----------:|:-------|
| **001** | Indefinición PTC/PTC VIRTUAL L2 | AT3 §8.1-8.2 + A.3 | ✅ SÍ | 🔴 CRÍTICA | ACTIVO |
| **002** | Protocolos FENOCO | AT10 §4.1-4.4 | 🟡 PARCIAL | 🟠 ALTA | ACTIVO |
| **003** | Cantidades PAN | AT1 + A.1/A.3 | ❌ NO | - | **CERRADO** |
| **004** | Cronograma MR | AT9 §(h) + AT10 | ✅ SÍ | 🟡 MEDIA | ACTIVO |

**BLOCKERS ACTIVOS:** 3 (001, 002 parcial, 004)  
**BLOCKERS CERRADOS:** 1 (003 - cantidad 146 confirmada)

---

## 📋 **ACCIONES REQUERIDAS (Oficios a ANI)**

### **Oficio 1 - BLOCKER-001 (URGENTE):**
```
ASUNTO: Clarificación Sistema Control Trenes (PTC/PTC VIRTUAL L2)
REF: AT3 Capítulo VIII - Indefinición PTC/CTC/Adif
CRITICIDAD: 🔴 BLOQUEADOR - 60% Cap 1 ($132,228M)
PLAZO RESPUESTA: Mes 6 (15-Dic-2025)
```

### **Oficio 2 - BLOCKER-004:**
```
ASUNTO: Cronograma Entrega Material Rodante
REF: AT9 §(h) - Puesta a Punto MR
CRITICIDAD: 🟡 MEDIA - Planificación pruebas
PLAZO RESPUESTA: Mes 5 (15-Nov-2025)
```

### **Oficio 3 - BLOCKER-002:**
```
ASUNTO: Especificaciones Técnicas FENOCO (Interoperabilidad)
REF: AT10 §4.1 - Documento Compatibilidad
CRITICIDAD: 🟠 ALTA - Gateway sin specs
PLAZO RESPUESTA: Mes 6 (15-Dic-2025)
```

### **Oficio 4 - Clarificación Red Vital IP / TETRA:**
```
ASUNTO: Confirmación Sistema Red Vital IP / TETRA (NO mencionado AT3)
REF: AT3 §8.4-8.5 - Solo menciona TETRA
CRITICIDAD: 🟡 MEDIA - Base datos incluye Red Vital IP / TETRA
PLAZO RESPUESTA: Mes 6
```

---

## 📊 **PRÓXIMOS PASOS:**

### **Completar (Esta sesión):**
1. ✅ Actualizar MATRIZ_RIESGOS con 4 riesgos nuevos
2. ✅ Generar 4 oficios formales a ANI
3. ✅ Actualizar README con estado v14.4
4. ✅ Marcar TODOs como completados

---

**Estado:** ✅ ANÁLISIS CONTRACTUAL 100% COMPLETADO  
**BLOCKERs REALES:** 2.5 (PTC, MR, FENOCO parcial)  
**Riesgos Nuevos:** 4 (R-GES-004, R-CON-001, R-OPE-001, R-CAL-001)  
**Fecha:** 9 de Octubre 2025


