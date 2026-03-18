# 🔴 BLOCKER CRÍTICO 002: PROTOCOLOS PROPIETARIOS FENOCO

**ID:** BLOCKER-002  
**Fecha Identificación:** 9 de Octubre 2025 (Mes 4)  
**Responsable Gestión:** PMO + Gerencia Técnica  
**Criticidad:** 🔴 **BLOQUEADOR - Interoperabilidad**  
**Estado:** ❌ **NO RESUELTO** - Requiere reunión técnica URGENTE

---

## ⚠️ **PROBLEMA CRÍTICO**

### **Indefinición Técnica:**

**Base de datos dice:** "Protocolos FRA/AREMA para FENOCO"  
**Realidad:** ❌ **FENOCO usa protocolos PROPIETARIOS (Siemens Trainguard)**

### **Impacto:**

**Documentos BLOQUEADOS:**
- ❌ `27_Sistema_TETRA_Integrado.md` - Interfaces NO definidas
- ❌ `29_Sistema_Señalización_Integrado.md` - Compatibilidad PENDIENTE
- ❌ `32_Material_Rodante_Integrado.md` - Equipos embarcados NO compatibles
- ❌ `IV.2_Interfaces_Sistemas_MEJORADO.md` - Gateway NO especificado
- ❌ `V.1_Señalización_Ferroviaria_Detalle.md` - Protocolos indefinidos

**Alcance afectado:**
- 🔴 Gateway de interoperabilidad (ítem 1.1.106) = **$150M COP**
- 🔴 Integración CTC-FENOCO = **$200M COP adicional estimado**
- 🔴 Sistemas embarcados compatibilidad = **Riesgo técnico ALTO**

---

## 🎯 **ANÁLISIS DEL PROBLEMA**

### **Sistemas FENOCO Actuales:**

**Información Conocida:**
- ✅ Operador existente en Colombia (Red Atlántico)
- ✅ Sistema de señalización: **Siemens Trainguard** (propietario)
- ⚠️ Protocolos comunicación: **NO públicos** (requiere NDA)
- ⚠️ Arquitectura de red: **Desconocida** (sin documentación)

**Información Requerida:**
1. ❌ Especificaciones técnicas Trainguard
2. ❌ Protocolos de comunicación (nivel aplicación)
3. ❌ APIs disponibles (si existen)
4. ❌ Formato de mensajes (tren ↔ tierra)
5. ❌ Requisitos de seguridad (ciberseguridad)
6. ❌ Certificaciones vigentes (CENELEC, IEC)

---

## 📋 **PLAN DE RESOLUCIÓN**

### **PASO 1: OFICIAR A ANI SOLICITUD FORMAL (HOY - Mes 4)**

**Oficio ANI-002:**

```
ASUNTO: SOLICITUD ESPECIFICACIONES TÉCNICAS FENOCO

De: PMO Proyecto APP La Dorada
Para: ANI
Copia: Concesionario
Fecha: 9 de Octubre 2025
Prioridad: 🔴 CRÍTICA

SOLICITUD:
Requerimos que la ANI, como autoridad contratante y propietaria 
de la concesión FENOCO, solicite formalmente a FENOCO:

1. Especificaciones técnicas sistema Siemens Trainguard
2. Protocolos de comunicación para interoperabilidad
3. Requisitos técnicos gateway de integración
4. Formato de mensajes y APIs (si disponibles)
5. Certificaciones de seguridad vigentes

JUSTIFICACIÓN:
Sin estas especificaciones, NO se puede diseñar el gateway de
interoperabilidad requerido contractualmente. Esto afecta el 
cumplimiento del alcance del proyecto.

FECHA LÍMITE: 15 de Diciembre 2025 (Mes 6)
PLAZO RESPUESTA FENOCO: 30 días desde solicitud ANI

PLAN B (si no hay respuesta):
Diseñar gateway FRA/AREMA 918-4 estándar europeo SIN integración directa
con sistemas FENOCO. Interoperabilidad será responsabilidad de 
FENOCO/Concesionario en fase posterior (post-entrega).
```

---

### **PASO 2: REUNIÓN TÉCNICA FENOCO (Mes 5)**

**Fecha propuesta:** 15 de Noviembre 2025  
**Plazo:** 15 días desde HOY

**Agenda:**

1. **Especificaciones técnicas sistemas actuales FENOCO** (30 min)
   - Sistema Trainguard (arquitectura)
   - Equipos embarcados (locomotoras)
   - Centro de control existente

2. **Protocolos de comunicación** (45 min)
   - Protocolos propietarios vs estándares
   - Posibilidad de compartir especificaciones (NDA)
   - APIs disponibles o desarrollo necesario

3. **Requisitos de interoperabilidad** (30 min)
   - Qué información debe intercambiarse
   - Frecuencia de comunicación
   - Redundancia y seguridad

4. **Plan de pruebas conjuntas** (30 min)
   - Pruebas en banco (sin afectar operación)
   - Pruebas en vía (con shutdowns coordinados)
   - Certificación interoperabilidad

5. **Responsabilidades de equipamiento** (30 min)
   - ¿Quién equipa qué? (Gateway, interfaces, cableado)
   - ¿FENOCO modifica algo en sus locomotoras?
   - ¿Qué entrega cada parte?

6. **Cierre y compromisos** (15 min)
   - Responsables por entregable
   - Fechas comprometidas
   - Próxima reunión

**Participantes:**
- FENOCO: Gerente Técnico + Especialista Señalización
- ANI: Gerente Técnico
- PMO Proyecto
- Especialista Señalización (EPC pre-seleccionado)
- Interventoría

**Entregable:** Acta con compromisos formales

---

### **PASO 3: DECISIÓN GO/NO-GO (Mes 6)**

**Escenario A: FENOCO Colabora** ✅
- Especificaciones compartidas (con NDA)
- Gateway custom Trainguard ↔ CTC nuevo
- Interoperabilidad garantizada
- **Costo:** $10M USD (incluido en presupuesto)
- **Plazo:** Cumplible

**Escenario B: FENOCO NO Colabora** ❌
- Gateway FRA/AREMA 918-4 genérico (estándar europeo)
- Sin integración directa Trainguard
- Interoperabilidad "futura" (responsabilidad FENOCO/Concesionario)
- **Costo:** $8M USD (menor)
- **Plazo:** Cumplible
- **Riesgo:** Interoperabilidad NO demostrada en fase construcción

**Decisión Mes 6:** Plan A (Colaboración) o Plan B (Genérico)

---

## 🛡️ **PLAN B DETALLADO: Gateway FRA/AREMA 918-4 Genérico**

### **Especificación Técnica:**

**Protocolo:** FRA/AREMA 918-4 (estándar europeo ferroviario)

**Funcionalidades:**
- ✅ Mensajes de posición tren (cada 10 seg)
- ✅ Mensajes de estado sistemas (TETRA, PTC, frenos)
- ✅ Comandos de emergencia (stop, slow)
- ✅ Telemetría básica (velocidad, ubicación GPS)

**Arquitectura:**
- Gateway embarcado (locomotora)
- Canal Red Vital IP / TETRA (comunicación continua)
- Interfaz con CTC (Ethernet redundante)
- Protocolo seguro (cifrado AES-256)

**Documentación Entregable:**
- Manual técnico gateway (200 pág)
- Especificaciones interfaces (ICD)
- Manual configuración FENOCO
- Procedimiento certificación interoperabilidad
- **Responsabilidad:** FENOCO/Concesionario implementa integración

**Ventaja:** Cumple contrato sin depender de colaboración FENOCO  
**Desventaja:** Interoperabilidad "teórica" (sin pruebas con Trainguard)

---

## 📌 **CLÁUSULAS DE PROTECCIÓN CONTRATO EPC**

### **Cláusula Interoperabilidad FENOCO:**

```
"El EPC diseñará e implementará un gateway de interoperabilidad 
según protocolo FRA/AREMA 918-4 estándar europeo, debidamente documentado.

La integración efectiva con sistemas FENOCO (Siemens Trainguard) 
está sujeta a:
  a) Entrega de especificaciones técnicas por FENOCO (Mes 6)
  b) Firma de NDA para compartir protocolos propietarios
  c) Coordinación de pruebas conjuntas

Si FENOCO NO entrega especificaciones en Mes 6, el EPC entregará 
gateway genérico FRA/AREMA 918-4 con documentación completa.

La responsabilidad de integración posterior con sistemas FENOCO 
será del Concesionario/FENOCO, sin responsabilidad del EPC por 
incompatibilidades derivadas de protocolos no compartidos."
```

---

## ✅ **ACCIONES INMEDIATAS (HOY - Mes 4)**

### **1. Oficiar a ANI (HOY):**
- Solicitar especificaciones FENOCO
- Fecha límite: Mes 6
- Plan B documentado

### **2. Oficiar a FENOCO (HOY):**
- Solicitar reunión técnica Mes 5
- Agenda de 6 puntos
- Solicitud formal especificaciones

### **3. Mesa Trabajo Interna (Semanal M4-6):**
- Preparar matriz de decisión
- Documentar Plans A y B
- Evaluar costos/riesgos

### **4. Preparar TdR EPC (Mes 5):**
- Incluir cláusula de protección
- Especificar entregables con/sin FENOCO
- Definir responsabilidades claras

---

**Estado:** ❌ BLOCKER ACTIVO  
**Fecha resolución objetivo:** Mes 6  
**Plan B disponible:** ✅ SÍ (Gateway genérico FRA/AREMA 918-4)

