# ANÁLISIS DE RIESGOS CONTRACTUALES - INDEFINICIONES Y EXCLUSIONES

**Proyecto:** APP La Dorada - Chiriguaná  
**Fecha:** 9 de Octubre 2025  
**Responsable:** PMO / Gestión de Riesgos  
**Versión:** 1.0

---

## ⚠️ **RIESGOS CRÍTICOS - DEPENDENCIAS INFORMACIÓN EXTERNA**

### **1. INPUTS REQUERIDOS DEL CONCESIONARIO (Anexo G)**

| # | Input Requerido | Responsable | Fecha Máxima | Impacto si NO llega | Plan B |
|:-:|:----------------|:------------|:------------:|:-------------------|:-------|
| **1** | **Definición final sistema PTC (PTC Virtual (FRA 236))** | **ANI + Concesionario** | **Mes 6** | 🔴 Bloquea 60% UF2 | Gateway interoperable documentado (Contratista CTC entrega) |
| **2** | **Cronograma entrega material rodante** | **Fenoco** | **Mes 8** | 🟠 No se puede diseñar embarcados | Asumir especificaciones estándar IEC |
| **3** | **Especificaciones técnicas FENOCO (interoperabilidad)** | **Fenoco** | **Mes 6** | 🔴 No se puede diseñar gateway FRA/AREMA | Gateway FRA/AREMA 918-4 genérico + documentación completa |
| **4** | **Regularización pasos a nivel (cantidad exacta)** | **Concesionario** | **Mes 10** | 🟡 Sobre-diseño o sub-diseño | Asumir cantidad contractual AT1 |
| **5** | **Topografía actualizada del corredor** | **Concesionario** | **Mes 3** | 🟠 Diseños preliminares | Usar topografía Fenoco existente |

---

### **RIESGO R-INFO-001: Indefinición PTC/PTC VIRTUAL L2**

**Descripción:** Sin definición final de PTC (PTC Virtual (FRA 236)), no se puede diseñar 60% del alcance de UF2 (Control y Señalización).

**Probabilidad:** ALTA (70%) - Historial de indefiniciones  
**Impacto:** CRÍTICO (5) - Bloquea diseño completo  
**Exposición:** 4.5/5 (CRÍTICA) 🔴

**Estrategia:**
- **EVITAR:** Solicitar definición formal a ANI/Concesionario
- **Fecha límite:** **Mes 6** (dentro de 2 meses desde hoy Mes 4)
- **Plan B:** Si no llega Mes 6 → Gateway interoperable genérico documentado
  - Contratista CTC entrega gateway que permite:
    - Interoperabilidad Fenoco (FRA/AREMA 918-4)
    - PTC VIRTUAL L2 estándar (futuro)
    - Documentación completa de interfaces
  - Cliente asume riesgo de incompatibilidad futura

**Responsable:** PMO → Solicitar HOY a ANI  
**Hito Verificación:** H-INFO-001 (Mes 6)

---

### **RIESGO R-INFO-002: Especificaciones FENOCO**

**Descripción:** Sin especificaciones técnicas FENOCO, no se puede diseñar interoperabilidad (gateway FRA/AREMA).

**Probabilidad:** MEDIA (50%)  
**Impacto:** CRÍTICO (5) - Bloquea integración  
**Exposición:** 3.5/5 (ALTA) 🟠

**Estrategia:**
- **MITIGAR:** Solicitar especificaciones + Coordinación mensual
- **Fecha límite:** **Mes 6**
- **Plan B:** Gateway FRA/AREMA 918-4 genérico según norma europea
  - Protocolo estándar FRA/AREMA 918-4
  - Interoperabilidad demostrada en banco de pruebas
  - Documentación completa entregada a Fenoco para validación
  - Fenoco/Concesionario asumen responsabilidad de integración futura

**Responsable:** PMO → Oficiar a FENOCO HOY  
**Hito Verificación:** H-INFO-002 (Mes 6)

---

### **RIESGO R-INFO-003: Material Rodante**

**Descripción:** Sin cronograma de entrega MR, no se puede diseñar sistemas embarcados (PTC, TETRA, Red Vital IP / TETRA).

**Probabilidad:** MEDIA (40%)  
**Impacto:** ALTO (4) - Retrasa embarcados  
**Exposición:** 2.8/5 (MEDIA) 🟡

**Estrategia:**
- **MITIGAR:** Asumir especificaciones estándar IEC
- **Fecha límite:** **Mes 8**
- **Plan B:** Diseñar para locomotora estándar colombiana
  - Especificaciones IEC 62280 (ferroviario)
  - Montaje modular adaptable
  - Certificación en banco de pruebas sin MR real

**Responsable:** Especialista Material Rodante  
**Hito Verificación:** Continuo

---

## 🚫 **EXCLUSIONES EXPLÍCITAS - ANÁLISIS DE RESPONSABILIDADES**

### **RIESGO R-EXC-001: Exclusiones Asumidas por EPC (Incorrectas)**

| # | Exclusión Contractual | Responsable Real | Riesgo si EPC NO hace | Acción Correctiva |
|:-:|:----------------------|:-----------------|:----------------------|:------------------|
| **1** | **Estudios geotécnicos** | **EPC** 🔴 | Sin geotecnia NO HAY diseño civil | EPC DEBE incluir en ingeniería (M6-10) |
| **2** | **Estudios topográficos** | **EPC** 🔴 | Sin topo NO HAY diseño rutas/torres | EPC DEBE incluir en ingeniería (M3-8) |
| **3** | **Tramitología permisos** | **EPC** 🔴 | Sin permisos NO HAY obra | EPC DEBE tramitar + Concesionario apoya |
| **4** | **Coordinación FENOCO** | **EPC** 🔴 | Sin coordinación NO HAY acceso vía | EPC DEBE liderar + Concesionario facilita |
| **5** | **Definición PTC** | **ANI + Concesionario** ✅ | Indefinición bloquea diseño | Solicitar HOY, Plan B documentado |
| **6** | **Especificaciones MR** | **Cliente (Fenoco)** ✅ | Sin MR NO HAY embarcados | Asumir estándar IEC |
| **7** | **Diseño detallado PAN** | **EPC Civil** ✅ | Sin diseño NO HAY construcción | EPC incluye en ingeniería |
| **8** | **Integración sistemas ANI** | **Concesionario + Interventoría** ✅ | Indefinición de alcance | Solicitar alcance formal Mes 6 |
| **9** | **Capacitación personal** | **Concesionario** ✅ | Sin capacitación NO HAY operación | Concesionario incluye en contrato |
| **10** | **Soporte post-entrega** | **EPC o contratar** ⚠️ | Sin soporte hay riesgo operativo | Definir en Mes 6 si EPC o tercero |
| **11** | **Actualizaciones futuras** | **EPC ingeniería + supervisión** ⚠️ | Obsolescencia tecnológica | EPC supervisa, ejecución terceros |
| **12** | **Auditoría/Interventoría construcción** | **NO hace EPC** ✅ | Sin interventoría riesgo calidad | Tercero contratado por Concesionario |

**⚠️ CONCLUSIÓN:** Ítems 1-4 son **RESPONSABILIDAD EPC** (mal excluidos). Ítems 5-12 correctamente asignados.

---

## 🎯 **ACCIONES CORRECTIVAS INMEDIATAS**

### **1. CLARIFICAR ALCANCE EPC (Esta semana):**

**Documento:** Alcance EPC Corregido v1.0

**Incluir:**
- ✅ **Estudios geotécnicos** (3 sondeos mínimo) - Mes 6-10
- ✅ **Estudios topográficos** (actualización corredor) - Mes 3-8
- ✅ **Tramitología permisos** (ANLA, ANI, INVÍAS) - Mes 6-12
- ✅ **Coordinación FENOCO** (protocolo semanal) - Continuo

**Costo adicional:** ~$500M COP (2% proyecto)  
**Alternativa:** Negociar con Concesionario quién asume

---

### **2. SOLICITAR INPUTS EXTERNOS (HOY - Mes 4):**

**Oficio a ANI/Concesionario:**

```
Asunto: Solicitud Inputs Críticos para Ingeniería

De: PMO Proyecto APP La Dorada
Para: ANI + Concesionario
Fecha: 9 Octubre 2025 (Mes 4/12 Ingeniería)

Solicitamos definición formal de:

1. Sistema PTC final (PTC VIRTUAL L2 o alternativa)
   - Fecha límite: 15 Diciembre 2025 (Mes 6)
   - Responsable: Concesionario + ANI
   - Plan B: Gateway interoperable genérico

2. Especificaciones FENOCO (FRA/AREMA 918-4)
   - Fecha límite: 15 Diciembre 2025 (Mes 6)
   - Responsable: FENOCO
   - Plan B: Protocolo FRA/AREMA estándar documentado

3. Cronograma Material Rodante
   - Fecha límite: 15 Febrero 2026 (Mes 8)
   - Responsable: FENOCO + Concesionario
   - Plan B: Diseño para estándar IEC 62280

4. Alcance SICC (Sistema Integrado Comando y Control)
   - Fecha límite: 15 Diciembre 2025 (Mes 6)
   - Responsable: Concesionario
   - Plan B: Dashboard básico sin APIs legadas

5. Permisos ambientales finales
   - Fecha límite: 15 Junio 2026 (Mes 12)
   - Responsable: ANLA + Concesionario
   - Plan B: Diseño sujeto a aprobación posterior

Sin estas definiciones formales, el EPC asume Plan B en cada caso,
con documentación completa de supuestos y exclusiones.
```

**Seguimiento:** Reunión quincenal Mes 4-6

---

## 📊 **CAPÍTULO SICC (Sistema Integrado Comando y Control)**

### **ALCANCE SEGÚN AT4:**

**Descripción:** Dashboard ejecutivo para ANI con indicadores de gestión del proyecto.

**Funcionalidades Mínimas (AT4):**
1. ✅ Indicadores de disponibilidad (AT4)
2. ✅ Indicadores de puntualidad
3. ✅ Indicadores de capacidad
4. ✅ Reportes automáticos mensuales
5. ⚠️ **Indefinido:** Integración con sistemas legados ANI
6. ⚠️ **Indefinido:** APIs automáticas
7. ⚠️ **Indefinido:** Nivel de detalle dashboard

**Alcance Propuesto EPC:**

#### **Escenario 1: SICC Básico (Sin integración ANI)**
- Dashboard web responsive
- Indicadores AT4 calculados desde CTC
- Reportes PDF automáticos mensuales
- NO integración sistemas ANI
- **Costo:** Incluido en ingeniería
- **Plazo:** M30-36 (desarrollo) + M40-44 (pruebas)

#### **Escenario 2: SICC Integrado (Con APIs ANI)**
- Todo lo anterior +
- APIs RESTful para sistemas ANI
- Integración bases de datos legadas
- Sincronización tiempo real
- **Costo adicional:** $800M COP (3% proyecto)
- **Plazo:** M25-40 (requiere especificaciones ANI M6)
- **Responsable decisión:** Concesionario define alcance

**ACCIÓN:** Solicitar a Concesionario definición Escenario 1 o 2 antes de **Mes 6**.

---

## 📋 **MATRIZ DE RESPONSABILIDADES CORREGIDA**

| Alcance | Responsable REAL | Contrato Dice | Corrección Necesaria | Riesgo |
|:--------|:-----------------|:--------------|:---------------------|:-------|
| **Estudios geotécnicos** | **EPC** | Excluido ❌ | **INCLUIR** | 🔴 Sin esto NO hay diseño |
| **Estudios topográficos** | **EPC** | Excluido ❌ | **INCLUIR** | 🔴 Sin esto NO hay rutas |
| **Tramitología permisos** | **EPC + Concesionario** | Excluido ❌ | **INCLUIR** | 🔴 Sin esto NO hay obra |
| **Coordinación FENOCO** | **EPC lidera** | Excluido ❌ | **INCLUIR** | 🟠 Sin esto NO hay acceso |
| Definición PTC | ANI + Concesionario | Responsabilidad Cliente ✅ | OK | 🟠 Plan B: Gateway |
| Especificaciones MR | Fenoco + Cliente | Responsabilidad Cliente ✅ | OK | 🟡 Plan B: Estándar IEC |
| Diseño detallado PAN | EPC Civil | Responsabilidad EPC ✅ | OK | - |
| Integración sistemas ANI | Concesionario define | Indefinido ⚠️ | Solicitar alcance | 🟡 Plan B: Sin integración |
| Capacitación personal | Concesionario | Excluido ✅ | OK | - |
| Soporte post-entrega | Definir Mes 6 | Indefinido ⚠️ | EPC o tercero | 🟡 Negociar |
| Actualizaciones futuras | EPC supervisa, ejecuta tercero | Indefinido ⚠️ | Clarificar | 🟡 |
| Interventoría construcción | NO hace EPC | Excluido ✅ | OK | - |

---

## 🚨 **RIESGOS CREADOS**

### **R-INFO-001: Indefinición PTC/PTC VIRTUAL L2**
- **Probabilidad:** ALTA (70%)
- **Impacto:** CRÍTICO (5)
- **Exposición:** 4.5/5 🔴
- **Fecha límite resolución:** Mes 6 (15-Dic-2025)
- **Responsable:** ANI + Concesionario
- **Plan B:** Gateway interoperable genérico (FRA/AREMA 918-4 + PTC VIRTUAL L2 estándar)
- **Costo Plan B:** Sin costo adicional (incluido en diseño CTC)
- **Acción:** Oficiar HOY a ANI solicitando definición

---

### **R-INFO-002: Especificaciones FENOCO**
- **Probabilidad:** MEDIA (50%)
- **Impacto:** CRÍTICO (5)
- **Exposición:** 3.5/5 🟠
- **Fecha límite:** Mes 6 (15-Dic-2025)
- **Responsable:** FENOCO
- **Plan B:** Protocolo FRA/AREMA 918-4 estándar europeo documentado
- **Acción:** Oficiar a FENOCO + Reunión técnica Mes 5

---

### **R-INFO-003: Material Rodante**
- **Probabilidad:** MEDIA (40%)
- **Impacto:** ALTO (4)
- **Exposición:** 2.8/5 🟡
- **Fecha límite:** Mes 8 (15-Feb-2026)
- **Responsable:** FENOCO + Concesionario
- **Plan B:** Diseño modular para locomotora estándar IEC 62280
- **Acción:** Solicitar cronograma MR en Mes 5

---

### **R-INFO-004: Alcance SICC (AT4)**
- **Probabilidad:** ALTA (60%)
- **Impacto:** MEDIO (3)
- **Exposición:** 2.7/5 🟡
- **Fecha límite:** Mes 6 (15-Dic-2025)
- **Responsable:** Concesionario
- **Plan B:** SICC Básico sin integración ANI
  - Dashboard web con indicadores AT4
  - Reportes PDF automáticos
  - Sin APIs hacia sistemas legados ANI
- **Costo Plan B:** Incluido
- **Costo Escenario Integrado:** +$800M (si Cliente solicita)

---

### **R-EXC-001: Estudios Geotécnicos/Topográficos Excluidos**
- **Probabilidad:** ALTA (90%) - Ya está excluido en contrato
- **Impacto:** CRÍTICO (5) - SIN ESTUDIOS NO HAY DISEÑO
- **Exposición:** 4.8/5 🔴 **MUY CRÍTICA**
- **Estrategia:** **ESCALAR URGENTE**
- **Acción:** Negociar inclusión inmediata o proyecto NO viable
- **Costo adicional:** $500M COP (geotecnia + topografía)
- **Responsable:** Gerente Proyecto + Legal

**⚠️ ALERTA:** Esto es un **BLOCKER** del proyecto. Sin estudios básicos, NO se puede hacer ingeniería de detalle civil.

---

## 📄 **PLAN DE ACCIÓN - OFICIOS Y SOLICITUDES**

### **Oficio 1: A ANI (HOY - Mes 4)**

**Asunto:** Solicitud Urgente Inputs Críticos Ingeniería

**Inputs requeridos:**
1. Definición PTC/PTC VIRTUAL L2 → Fecha límite: **15-Dic-2025** (M6)
2. Alcance SICC (Escenario 1 o 2) → Fecha límite: **15-Dic-2025** (M6)
3. Clarificación responsabilidad estudios geotécnicos/topográficos → Urgente

**Plan B documentado para cada input.**

---

### **Oficio 2: A FENOCO (HOY - Mes 4)**

**Asunto:** Coordinación Técnica Interoperabilidad

**Inputs requeridos:**
1. Especificaciones técnicas gateway FRA/AREMA 918-4 → Fecha límite: **15-Dic-2025** (M6)
2. Cronograma entrega Material Rodante → Fecha límite: **15-Feb-2026** (M8)
3. Protocolo coordinación shutdowns para pruebas → Mes 12

**Plan B:** Diseño según estándar europeo FRA/AREMA sin especificaciones FENOCO.

---

### **Oficio 3: A Concesionario (Mes 5)**

**Asunto:** Definición Alcance SICC y Regularización PAN

**Decisiones requeridas:**
1. SICC Básico (sin costo) o SICC Integrado (+$800M)
2. Cantidad exacta PAN a regularizar
3. Permisos ambientales pendientes

---

## 🛡️ **CLÁUSULAS DE PROTECCIÓN EPC**

### **Incluir en Contrato EPC Ingeniería:**

**Cláusula 1: Indefiniciones**
> "La empresa de ingeniería NO asume responsabilidad por indefiniciones del Concesionario. Ante falta de inputs en fechas límite, se aplicará Plan B documentado, con supuestos claramente establecidos."

**Cláusula 2: Variaciones de Alcance**
> "Variaciones de alcance (ej: SICC Integrado, integración sistemas ANI) requieren negociación bilateral previa y ajuste de precio/plazo."

**Cláusula 3: Estudios Básicos**
> "Estudios geotécnicos y topográficos son responsabilidad EPC y están INCLUIDOS en el alcance de ingeniería. Sin estos estudios, el proyecto NO puede ejecutarse."

**Cláusula 4: Entregas Externas**
> "EPC NO asume responsabilidad por retrasos en entregas externas (Edificio CCO, Material Rodante, Subestaciones). Retrasos >2 meses activan extensión de plazo automática."

**Cláusula 5: Auditoría/Interventoría**
> "EPC NO brinda servicios de auditoría, interventoría o seguimiento durante construcción. Estos servicios son responsabilidad del Concesionario y deben contratarse por separado."

---

## 📊 **CAPÍTULO SICC - INCLUSIÓN EN INGENIERÍA**

### **Nuevo Capítulo WBS:** 1.5 Sistema SICC (AT4)

| Ítem WBS | Descripción | Tipo | Cantidad | Valor Est. |
|:--------:|:------------|:-----|:--------:|:-----------|
| **1.5.100** | **Desarrollo Dashboard SICC** | SERVICIO | 1 SIS | $150M COP |
| 1.5.101 | Servidor SICC (cloud) | SUMINISTRO | 1 UND | $30M COP |
| 1.5.102 | Licencias BI (Power BI/Tableau) | SERVICIO | 5 LIC | $20M COP |
| 1.5.103 | Integración CTC-SICC | SERVICIO | 1 SIS | $50M COP |
| 1.5.104 | APIs (si Escenario 2) | SERVICIO | OPCIONAL | $800M COP |

**Total Capítulo SICC:**
- **Escenario 1 (Básico):** $250M COP ✅ INCLUIDO
- **Escenario 2 (Integrado):** $1,050M COP ⚠️ NEGOCIAR

**Decisión requerida:** Concesionario define Escenario antes de Mes 6.

---

## 🎯 **HITOS DE GESTIÓN DE RIESGOS**

| Hito | Mes | Acción | Responsable | Criticidad |
|:-----|:---:|:-------|:------------|:-----------|
| **HG-01** | 4 (HOY) | Oficiar ANI/FENOCO inputs | PMO | 🔴 CRÍTICA |
| **HG-02** | 5 | Reunión técnica FENOCO | PMO + Especialista | 🟠 ALTA |
| **HG-03** | 6 | **Fecha límite inputs** | ANI + Concesionario | 🔴 **CRÍTICA** |
| **HG-04** | 6 | Decisión Plan A o Plan B | PMO | 🔴 CRÍTICA |
| **HG-05** | 6 | Negociar estudios geotécnicos | Legal + PMO | 🔴 **BLOCKER** |
| **HG-06** | 8 | Cronograma MR recibido | FENOCO | 🟡 MEDIA |
| **HG-07** | 12 | Revisión final indefiniciones | PMO | 🟠 ALTA |

---

## ✅ **RECOMENDACIONES PMO**

### **Acciones Críticas (Mes 4-6):**

1. 🔴 **URGENTE:** Negociar inclusión estudios geotécnicos/topográficos
   - Sin esto, proyecto NO viable
   - Costo: $500M COP
   - Plazo: Mes 6-10

2. 🔴 **CRÍTICO:** Oficiar a ANI/FENOCO solicitud inputs (HOY)
   - Definición PTC (Mes 6)
   - Especificaciones FENOCO (Mes 6)
   - Alcance SICC (Mes 6)

3. 🟠 **ALTO:** Documentar Plans B para cada indefinición
   - Gateway genérico FRA/AREMA 918-4
   - SICC Básico sin APIs ANI
   - Diseño MR estándar IEC

4. 🟡 **MEDIO:** Clarificar cláusulas de protección EPC
   - Variaciones requieren negociación
   - Sin inputs = Plan B
   - Entregas externas no responsabilidad EPC

---

## 🎯 **MATRIZ DE DECISIONES**

| Indefinición | Fecha Decisión | Si Cliente Responde | Si NO Responde (Plan B) |
|:-------------|:--------------:|:-------------------|:------------------------|
| PTC/PTC VIRTUAL L2 | Mes 6 | Diseño específico | Gateway genérico interoperable |
| Specs FENOCO | Mes 6 | Integración directa | Protocolo FRA/AREMA estándar |
| Cronograma MR | Mes 8 | Diseño específico | Estándar IEC 62280 modular |
| Alcance SICC | Mes 6 | Escenario 1 o 2 | Escenario 1 Básico |
| Estudios Geo/Topo | **Mes 5** | **EPC ejecuta** | **BLOCKER - Proyecto para** |

---

**Elaborado por:** PMO / Gestión de Riesgos  
**Revisado por:** [Pendiente Legal]  
**Aprobación:** Gerente Proyecto  
**Próxima revisión:** Mes 5 (seguimiento inputs)

---

## 📌 **RESUMEN EJECUTIVO**

**RIESGOS IDENTIFICADOS:** 4 nuevos (INFO-001 a INFO-004 + EXC-001)  
**EXPOSICIÓN TOTAL:** 2 CRÍTICOS + 2 ALTOS + 1 MEDIO  
**ACCIONES HOY:** 2 oficios (ANI + FENOCO)  
**DECISIONES CRÍTICAS:** Mes 5-6 (inputs o Plan B)  
**BLOCKER:** Estudios geotécnicos/topográficos → **NEGOCIAR URGENTE**

🎯 **Sin inputs Mes 6 → Activar Plans B automáticamente**

