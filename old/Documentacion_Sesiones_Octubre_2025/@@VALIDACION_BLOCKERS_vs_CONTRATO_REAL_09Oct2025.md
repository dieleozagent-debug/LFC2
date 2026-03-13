# VALIDACIÓN BLOCKERS vs CONTRATO REAL

**Proyecto:** APP La Dorada - Chiriguaná  
**Fecha:** 9 de Octubre 2025  
**Responsable:** PMO / Análisis Contractual  
**Fuente:** Apéndices Técnicos AT1, AT3, AT9, AT10

---

## ✅ **VALIDACIÓN COMPLETADA**

### **BLOCKER-001: Indefinición Sistema PTC/PTC VIRTUAL L2** 🔴 **CONFIRMADO REAL**

**Fuente:** AT3 - Capítulo VIII (Señalización y Control de Trenes)

**Lo que el contrato SÍ dice:**
- ✅ "Positive Train Control" (PTC) - Línea 289 AT3
- ✅ Normas AAR (Association of American Railroads)
- ✅ Sistemas CTC con protocolo Adif (español) - Líneas 529-532
- ✅ Enclavamientos electrónicos normas ET/NAS (Adif España)

**Lo que el contrato NO dice:**
- ❌ **PTC (Incremental Train Control System)** - NO mencionado
- ❌ **PTC Virtual (FRA 236) (European Train Control System)** - NO mencionado
- ❌ Arquitectura técnica específica
- ❌ Protocolos de comunicación detallados

**CONCLUSIÓN:** ✅ **BLOCKER REAL**
- Contrato menciona normas mixtas (AAR americano + Adif español)
- **NO define qué sistema implementar**
- PTC ≠ PTC Virtual (FRA 236) (son sistemas diferentes)
- Requiere clarificación formal ANI

**Acción:** Oficiar ANI solicitando definición: ¿PTC americano, PTC VIRTUAL europeo, o CTC español Adif?

---

### **BLOCKER-002: Protocolos FENOCO** 🟡 **PARCIALMENTE CONFIRMADO**

**Fuente:** AT10 - Capítulo IV (Compatibilidad Material Rodante)

**Lo que el contrato SÍ dice:**
- ✅ "Requerimientos técnicos para compatibilidad Material Rodante" (AT10 §4.1)
- ✅ "Terceros Interesados" pueden operar en la vía
- ✅ Concesionario debe garantizar interoperabilidad
- ✅ ANI aprueba compatibilidad

**Lo que el contrato NO dice:**
- ❌ Nombre específico "FENOCO"
- ❌ Protocolos de comunicación específicos
- ❌ Especificaciones sistemas operadores existentes
- ❌ ¿Quién equipa qué? (locomotoras propias vs terceros)

**CONCLUSIÓN:** 🟡 **BLOCKER PARCIAL**
- Interoperabilidad requerida con "Terceros" (FENOCO incluido)
- **Protocolos NO especificados**
- Concesionario debe crear documento "Compatibilidad MR" en 90 días post-inicio

**Acción:** Solicitar a FENOCO especificaciones para incluir en documento de compatibilidad

---

### **BLOCKER-003: Cantidades Pasos a Nivel** ⏳ **REQUIERE VALIDAR EN AT1**

**Fuente:** AT3 §8.3 + AT1 (pendiente revisar)

**Lo que el contrato SÍ dice:**
- ✅ Normas Adif para Pasos a Nivel (NAPN)
- ✅ Sistemas de protección PAN (barreras, señalización)

**Pendiente validar:**
- ⏳ ¿Cantidades específicas en AT1?
- ⏳ ¿Proceso de regularización mencionado?

**Acción:** Revisar AT1 (Alcance)

---

### **BLOCKER-004: Cronograma Material Rodante** ✅ **CONFIRMADO REAL**

**Fuente:** AT9 §(h) + AT10 Cap. III

**Lo que el contrato SÍ dice:**
- ✅ "Material Rodante entregado por la Nación" (AT9)
- ✅ "Puesta a Punto de cada unidad" requerida
- ✅ "Cronograma entrega escalonada" debe incluirse en Plan de Obras

**Lo que el contrato NO dice:**
- ❌ **Fechas específicas de entrega**
- ❌ Cantidad exacta de locomotoras
- ❌ Cronograma escalonado definido
- ❌ Responsable de entrega (¿ANI? ¿FENOCO?)

**CONCLUSIÓN:** ✅ **BLOCKER REAL**
- Contrato requiere "Puesta a Punto" pero NO define cuándo llegan
- Plan de Obras debe **incluir** cronograma MR (AT9 §g y §h)
- **Responsabilidad:** Concesionario debe definir en Plan de Obras

**Acción:** Solicitar cronograma MR a ANI/FENOCO para incluir en Plan de Obras

---

## 📊 **RESUMEN DE VALIDACIÓN**

| Blocker | Estado Validación | Fuente Contrato | Criticidad |
|:--------|:------------------|:----------------|:----------:|
| **BLOCKER-001** PTC | ✅ **CONFIRMADO REAL** | AT3 Cap. VIII | 🔴 CRÍTICA |
| **BLOCKER-002** FENOCO | 🟡 **PARCIAL** | AT10 Cap. IV | 🟠 ALTA |
| **BLOCKER-003** PAN | ⏳ Pendiente AT1 | AT3 §8.3 + AT1 | 🟡 MEDIA |
| **BLOCKER-004** MR | ✅ **CONFIRMADO REAL** | AT9 §(h) + AT10 | 🟡 MEDIA |

---

## 🎯 **HALLAZGOS CONTRACTUALES CLAVE**

### **1. SISTEMAS DE CONTROL DE TRENES:**

**Normas mencionadas:**
- **AAR:** Association of American Railroads (USA)
- **Adif:** Administrador de Infraestructuras Ferroviarias (España)
- **AREMA:** American Railway Engineering and Maintenance-of-Way Association
- **FRA/AREMA:** Union Internationale des Chemins de Fer (Europa)

**Sistemas mencionados:**
- **PTC:** Positive Train Control (americano)
- **CTC:** Control de Tráfico Centralizado (con protocolo Adif español)
- **Enclavamientos:** Normas Adif (españolas)

**NO mencionados:**
- ❌ PTC (Incremental Train Control System)
- ❌ PTC VIRTUAL (European Train Control System)
- ❌ Especificación de cuál usar

---

### **2. INTEROPERABILIDAD:**

**Lo que dice AT10:**
> "El Concesionario elaborará el documento 'Requerimientos técnicos
> para la compatibilidad exitosa y condiciones de prueba del Material
> Rodante' sobre el cual enunciará y definirá los aspectos técnicos
> que condicionen la compatibilidad de la Infraestructura Férrea."

**Plazo:** 90 días post-inicio  
**Aprobación:** ANI + Interventoría

**Conclusión:**
- ✅ Interoperabilidad requerida
- ❌ Protocolos específicos NO definidos
- ✅ Concesionario debe crear documento

---

### **3. MATERIAL RODANTE:**

**Lo que dice AT9:**
> "Se debe incluir el tiempo estimado para realizar la Puesta a Punto
> de cada unidad de Material Rodante (Locomotoras y Plataformas)
> entregada por parte de la Nación."

**Responsabilidad:** Concesionario define cronograma en Plan de Obras  
**Input requerido:** Cronograma entrega de la Nación

**Conclusión:**
- ✅ Puesta a Punto requerida
- ❌ Cronograma entrega NO especificado
- ⏳ Concesionario debe solicitarlo

---

## ✅ **RECOMENDACIONES PMO**

### **BLOCKER-001 (CRÍTICO):**
**Oficio a ANI:**
> "AT3 menciona normas mixtas (AAR, Adif, FRA/AREMA) pero NO define
> sistema específico. Solicitamos clarificación formal:
>
> ¿Implementar PTC (americano AAR)?
> ¿Implementar PTC Virtual (FRA 236) (europeo FRA/AREMA)?
> ¿Implementar CTC Adif (español)?
> ¿Implementar solución híbrida?"

**Plazo respuesta:** Mes 6 (60 días)  
**Plan B:** Asumir normas mixtas con gateway interoperable

---

### **BLOCKER-004 (CONFIRMADO):**
**Oficio a ANI:**
> "AT9 §(h) requiere cronograma Material Rodante para Plan de Obras.
> Solicitamos:
>
> 1. Cantidad exacta de locomotoras a entregar
> 2. Cronograma entrega escalonada
> 3. Especificaciones técnicas (para Puesta a Punto)
> 4. Responsable entrega (¿ANI? ¿FENOCO?)"

**Plazo respuesta:** Mes 5 (45 días)  
**Plan B:** Asumir cronograma genérico M20-30

---

## 📋 **PRÓXIMA ACCIÓN:**

1. ✅ Revisar AT1 (Alcance) para validar BLOCKER-003 (PAN)
2. ✅ Emitir oficios a ANI (BLOCKER-001 y BLOCKER-004)
3. ✅ Contactar FENOCO para especificaciones (BLOCKER-002)

**¿Quieres que continúe revisando AT1 para validar BLOCKER-003 (Pasos a Nivel)?** 🎯

---

**Estado:** 2 BLOCKERS confirmados, 1 parcial, 1 pendiente validación  
**Fecha:** 9 de Octubre 2025

