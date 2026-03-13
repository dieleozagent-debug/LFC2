# 🟡 RIESGO MEDIO 004: CRONOGRAMA MATERIAL RODANTE INDEFINIDO

**ID:** BLOCKER-004  
**Fecha Identificación:** 9 de Octubre 2025 (Mes 4)  
**Responsable Gestión:** PMO + Gerencia Operaciones  
**Criticidad:** 🟡 **MEDIA** - Input externo requerido  
**Estado:** ⚠️ **PENDIENTE** - Solicitar cronograma a FENOCO/Concesionario

---

## ⚠️ **PROBLEMA IDENTIFICADO**

### **Indefinición Temporal:**

**Base de datos dice:** "15 locomotoras con PTC embarcado"  
**Realidad:** ❌ **Cronograma de entrega escalonada NO DEFINIDO**

### **Impacto:**

**Documentos con secuencia GENÉRICA:**
- ⚠️ `32_Material_Rodante_Integrado.md` - Cronograma genérico
- ⚠️ `AT9_Plan_Obras.md` - Dependencias NO resueltas
- ⚠️ `Plan_Pruebas.md` - Secuencia comisionamiento INDEFINIDA

**Alcance afectado:**
- 🟡 Sistemas embarcados (PTC, TETRA, RED TETRA (Misión Crítica))
- 🟡 Secuencia de pruebas (no se sabe cuándo habrá locomotoras)
- 🟡 Cronograma instalación embarcados

**Riesgo Temporal:**
- Si locomotoras llegan tarde → Retraso pruebas embarcadas
- Si llegan escalonadas → Cronograma pruebas debe adaptarse

---

## 🎯 **ESTRATEGIA EPC: DISEÑO ADAPTABLE**

### **Enfoque:** Secuencia flexible basada en inputs

**Premisa:**
> "EPC NO es responsable del cronograma de entrega de Material Rodante.
> EPC diseñará secuencia de comisionamiento ADAPTABLE a cronograma que
> entregue el Concesionario/FENOCO."

---

## 📋 **ALCANCE EPC (CLARIFICADO)**

### **LO QUE SÍ incluye EPC:**

1. ✅ **Diseño estándar sistemas embarcados**
   - Especificaciones PTC embarcado
   - Especificaciones TETRA embarcado
   - Especificaciones RED TETRA (Misión Crítica) embarcado
   - Manual instalación por locomotora

2. ✅ **Secuencia de comisionamiento ADAPTABLE**
   - Plan para 1 locomotora (piloto)
   - Plan para 5 locomotoras (lote)
   - Plan para 15 locomotoras (todas)
   - **FLEXIBLE:** Se adapta a cronograma real entrega

3. ✅ **Plan de pruebas escalable**
   - Banco de pruebas (sin locomotora real)
   - Pruebas piloto (1 locomotora)
   - Pruebas integradas (5 locomotoras)
   - Certificación final (15 locomotoras)

**Beneficio:** Sin importar CUÁNDO lleguen, el plan se adapta

---

### **LO QUE NO incluye EPC:**

- ❌ **Cronograma de entrega locomotoras** → Responsable: **FENOCO + Concesionario**
- ❌ **Modificación estructural locomotoras** → Responsable: **Taller certificado MR**
- ❌ **Coordinación operativa FENOCO** → Responsable: **Concesionario**

---

## 📋 **INPUTS REQUERIDOS (Del Concesionario/FENOCO)**

### **Entregable:** Cronograma Entrega Material Rodante

**Información requerida:**
1. ✅ Fecha entrega locomotora piloto (para pruebas)
2. ✅ Cronograma entrega escalonada (15 locomotoras)
3. ✅ Disponibilidad para modificaciones (días en taller)
4. ✅ Certificaciones vigentes (seguridad, ambiental)
5. ✅ Plan de pruebas conjuntas (shutdowns)

**Plazo:** 45 días desde HOY → **23 Noviembre 2025 (Mes 5)**

**Responsable:**
- **Gerencia de Operaciones** (Concesionario)
- **FENOCO** (proveedor MR)
- **Coordinación:** PMO Proyecto

---

## 🛡️ **PLAN DE CONTINGENCIA**

### **Escenario A: MR llega Mes 20 (según plan base)** ✅

**Secuencia:**
- M20: Locomotora piloto → Instalación embarcados (2m)
- M22: Piloto probado → Replicar a lote 1 (5 unidades)
- M23-26: Lote 1 equipado → Pruebas integradas
- M27-34: Resto equipado (10 unidades)

**Impacto:** Sin cambio en cronograma ✅

---

### **Escenario B: MR llega tarde (Mes 22-25)** ⚠️

**Impacto:**
- Retraso pruebas embarcadas: 2-5 meses
- Usar buffer: 2-3 meses
- Activar plan alternativo: Pruebas en banco sin MR real

**Mitigación:**
- ✅ Certificar sistemas en banco de pruebas
- ✅ Pruebas reales cuando MR llegue
- ✅ Extensión plazo justificada (entrega externa)

---

### **Escenario C: MR NO llega (problema FENOCO)** 🔴

**Impacto:**
- ⚠️ Sistemas embarcados NO se pueden probar in-situ
- 🔴 Certificación SAT INCOMPLETA
- 🔴 Entrega final condicionada

**Mitigación:**
- ✅ Entrega condicional: Sistemas terrestres 100% + Embarcados en banco
- ✅ Embarcados se instalarán cuando MR esté disponible
- ✅ **Responsabilidad de retraso: FENOCO/Concesionario** (NO EPC)

**Cláusula:** "Entrega final condicionada a disponibilidad Material Rodante"

---

## 🎯 **COORDINACIÓN REQUERIDA**

### **Mesa de Trabajo: Material Rodante (Mes 5)**

**Participantes:**
1. Gerencia de Material Rodante (Concesionario)
2. FENOCO (proveedor MR)
3. Oferente EPC (diseño PTC embarcado)
4. FENOCO (coordinación operativa)
5. PMO Proyecto
6. Interventoría

**Agenda:**
1. Cronograma entrega 15 locomotoras (escalonado)
2. Disponibilidad para modificaciones (días/taller)
3. Especificaciones técnicas locomotoras
4. Plan de pruebas conjuntas
5. Responsabilidades instalación embarcados
6. Protocolo shutdowns operación FENOCO

**Plazo:** 15 días desde HOY  
**Entregable:** Acta con cronograma comprometido

---

## ✅ **DISEÑO ADAPTABLE EPC**

### **Secuencia por Escenarios:**

**Si MR llega Mes 20:** Plan A (óptimo)
- M20-22: Piloto equipado
- M23-26: Lote 1 (5 unidades)
- M27-34: Resto (10 unidades)

**Si MR llega Mes 22-25:** Plan B (con retraso)
- M22-25: Piloto equipado
- M26-30: Lote 1 (5 unidades)
- M31-38: Resto (usando buffer)

**Si MR NO llega:** Plan C (contingencia)
- Certificación en banco de pruebas
- Entrega condicional
- Instalación posterior (fuera de alcance)

**Beneficio:** Plan adaptable a cualquier cronograma MR

---

## 📋 **OFICIO A CONCESIONARIO/FENOCO**

```
ASUNTO: Solicitud Cronograma Material Rodante

De: PMO Proyecto APP La Dorada
Para: Gerencia de Operaciones + FENOCO
Fecha: 9 de Octubre 2025
Plazo respuesta: 45 días

SOLICITUD:
Cronograma de entrega escalonada de 15 locomotoras para
equipamiento con sistemas embarcados (PTC, TETRA, RED TETRA (Misión Crítica)).

INFORMACIÓN REQUERIDA:
1. Fecha entrega locomotora piloto
2. Cronograma entrega resto (escalonado)
3. Disponibilidad para modificaciones (días en taller)
4. Especificaciones técnicas (potencia, tracción, frenos)
5. Plan de pruebas conjuntas (shutdowns operativos)

IMPACTO SI NO SE ENTREGA:
Diseño de secuencia de comisionamiento será GENÉRICO.
EPC asumirá cronograma estándar: Piloto M20, Lote 1 M23, Resto M27.

Si Material Rodante NO está disponible según cronograma asumido,
la responsabilidad del retraso será de FENOCO/Concesionario.

PLAN B:
Certificación en banco de pruebas sin Material Rodante real.
Instalación y pruebas in-situ cuando MR esté disponible (puede
ser post-entrega formal del proyecto).
```

---

**Elaborado por:** PMO / Gestión Material Rodante  
**Estado:** ⚠️ PENDIENTE INPUT - Diseño adaptable preparado  
**Requiere:** Cronograma MR de FENOCO (Mes 5)

