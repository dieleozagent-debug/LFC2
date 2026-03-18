# CRONOGRAMA AGRESIVO 36 MESES - PLAN PMO
**Proyecto:** APP La Dorada - Chiriguaná  
**Estrategia:** Plan Base 36m + Buffer Riesgos 12m = 48m Total Obra  
**Fecha:** 9 de Octubre 2025  
**Versión:** 1.0

---

## 🎯 **ESTRATEGIA TEMPORAL**

### **Plazos Definidos:**
- ✅ **Ingeniería:** 12 meses (Mes 0-12) | Estado: Mes 4/12 (33%)
- 🚀 **Obra Plan Base:** 36 meses (Mes 13-48) | AGRESIVO
- 🛡️ **Buffer Riesgos:** 12 meses (Mes 49-60) | Contingencia
- 📅 **Plazo Total:** 60 meses desde inicio

### **Filosofía:**
> "Planificar para 36 meses, ejecutar en 42, entregar en 48"

---

## 🏗️ **SUPUESTOS CRÍTICOS (PREREQUISITOS)**

### **📦 ENTREGAS EXTERNAS (Responsabilidad ANI/Terceros):**

| ID | Entrega Externa | Responsable | Mes Requerido | Lead Time | Orden en Mes | Criticidad |
|:--:|:----------------|:------------|:-------------:|:---------:|:------------:|:----------:|
| **EXT-01** | 🏢 **Edificio CCO Terminado** | ANI/Contratista Civil | **Mes 18** | 12m | Mes 6 | 🔴 CRÍTICA |
| **EXT-02** | 🚂 **Material Rodante Certificado** | Fenoco/ANI | **Mes 20** | 9m | Mes 11 | 🔴 CRÍTICA |
| **EXT-03** | ⚡ **Subestaciones Eléctricas** | Operador Red | **Mes 16** | 8m | Mes 8 | 🟠 ALTA |
| **EXT-04** | 🛤️ **Acceso Vía Fenoco** | Fenoco | **Mes 14** | N/A | Coordinación | 🟠 ALTA |
| **EXT-05** | 📋 **Permisos Ambientales** | ANLA | **Mes 12** | 6m | Mes 6 | 🟠 ALTA |

**⚠️ NOTA:** Estos son **PREREQUISITOS** sin los cuales no se puede avanzar. ANI debe garantizar entregas.

---

### **🔌 DEPENDENCIAS TÉCNICAS INTERNAS:**

| Actividad | Depende de | Razón |
|:----------|:-----------|:------|
| Instalación Cámaras CCTV | Cableado estructurado + Fibra | Requiere red IP operativa |
| Instalación CTC | Edificio CCO + Energía | Sala técnica acondicionada |
| Pruebas PTC | Material rodante + CTC | Integración embarcado-terrestre |
| Instalación TETRA embarcado | Material rodante entregado | Modificación en taller |
| Sistema SCADA | Fibra + CTC + Subestaciones | Telemetría remota |

---

## 📊 **CRONOGRAMA BASE 36 MESES**

### **FASE 1: INGENIERÍA (Mes 0-12) - EN CURSO**

**Estado Actual:** Mes 4/12 (33% completado)

| Mes | Hito | Descripción | Entregable |
|:---:|:-----|:------------|:-----------|
| 0-4 | ✅ Completado | Ing. Conceptual + Básica | Documentos aprobados |
| 4-8 | 🔄 En curso | Ing. Detalle Cap 1-3 | Especificaciones técnicas |
| **6** | 🏢 **EXT-01 Inicio** | **Solicitar construcción CCO** | **Orden a ANI** |
| 8-10 | Finalización detalle | Cap 4-6 + Planos | Docs de compra listos |
| **11** | 🚂 **EXT-02 Inicio** | **Solicitar certificación MR** | **Orden a Fenoco** |
| 10-12 | Revisión ANI | Observaciones y ajustes | Correcciones |
| **12** | 🎯 **HITO CRÍTICO** | **✅ APROBACIÓN ANI** | **Carta no objeción** |

**Prerequisito Compras:** ✅ Aprobación ANI Mes 12

---

### **FASE 2: ADQUISICIONES URGENTES (Mes 12-14)**

**Estrategia:** Compras paralelas máximas post-aprobación

| Lote | Orden Mes | Llegada Mes | Lead Time | Ítems | Valor (M) |
|:----:|:---------:|:-----------:|:---------:|:------|:---------:|
| **Lote 1 Crítico** | 13 | 25 | 12m | PTC/PTC | $40,000 |
| **Lote 2 Urgente** | 13 | 22 | 9m | Fibra 48F (526km) | $5,828 |
| **Lote 3 Alto** | 13 | 19 | 6m | Servidores CTC | $12,500 |
| **Lote 4 Medio** | 14 | 20 | 6m | Estaciones TETRA | $25,000 |
| **Lote 5 Torres** | 14 | 18 | 4m | Torres autosoportadas | $8,500 |

**⚠️ RESTRICCIÓN:** No se puede ordenar sin aprobación ANI Mes 12.

---

### **FASE 3: OBRA PREPARACIÓN (Mes 13-18) - 6 meses**

**Objetivo:** Preparar infraestructura para recibir equipos (que llegan Mes 18+)

| Mes | Actividad | Responsable | Prerequisito | Estado |
|:---:|:----------|:------------|:-------------|:-------|
| 13-18 | Obras civiles preliminares | Contratista | Permisos (EXT-05) | ⏳ |
| 13-16 | Montaje torres TETRA | Especialista | Torres lleguen M18 | ⏳ |
| 14-18 | Tendido ductos fibra | Contratista | Acceso vía (EXT-04) | ⏳ |
| 15-18 | Cableado estructurado | Eléctrico | Edificio parcial | ⏳ |
| **16** | ⚡ **EXT-03 Entrega** | **Operador Red** | **Subestaciones listas** | 🔴 |
| **18** | 🏢 **EXT-01 Entrega** | **ANI** | **Edificio CCO 100%** | 🔴 |

**HITO Mes 18:** ✅ Infraestructura física completa + Edificio recibido

---

### **FASE 4: INSTALACIÓN PRIMARIA (Mes 19-26) - 8 meses**

**Objetivo:** Instalar sistemas principales (Fibra, CTC, TETRA)

| Mes | Actividad | Material Disponible | Instalación | Dependencia |
|:---:|:----------|:---------------------|:------------|:------------|
| **19** | Llegan Servidores CTC | ✅ Mes 19 | 19-21 (3m) | Edificio CCO (M18) |
| **20** | Llegan Torres + TETRA | ✅ Mes 18-20 | 20-23 (4m) | Torres montadas (M16) |
| **20** | 🚂 **EXT-02 Entrega** | **Material Rodante** | **Recepción** | 🔴 **CRÍTICA** |
| **22** | Llega Fibra Óptica | ✅ Mes 22 | 22-26 (5m) | Ductos listos (M18) |
| 20-24 | Instalación TETRA Fija | Equipo M20 | 4 meses | Energía (M16) |
| 21-24 | Configuración CTC | Servidores M19 | 4 meses | Sala técnica |
| 23-26 | Integración Fibra-CTC | Fibra M22 + CTC M21 | 4 meses | Backbone operativo |

**HITO Mes 26:** ✅ Backbone (Fibra+CTC+TETRA) Operativo

**⚠️ RESTRICCIÓN:** No se puede instalar CTC sin edificio CCO (EXT-01 M18)

---

### **FASE 5: INSTALACIÓN SECUNDARIA (Mes 25-34) - 10 meses**

**Objetivo:** PTC/PTC, ITS, Sistemas Embarcados

| Mes | Actividad | Material | Instalación | Dependencia Crítica |
|:---:|:----------|:---------|:------------|:--------------------|
| **25** | Llega PTC/PTC | ✅ Mes 25 | 25-30 (6m) | CTC operativo (M24) |
| 25-28 | CCTV (93 cámaras) | Llegada M24 | 4 meses | Fibra+Red IP (M26) |
| 26-30 | Configuración PTC | Equipo M25 | 5 meses | CTC+Fibra |
| 27-32 | ITS (Barreras, PAN) | Llegada M26 | 6 meses | Red + Energía |
| 28-34 | PTC Embarcado | Material Rodante M20 | 7 meses | **EXT-02** + Taller |
| 29-34 | TETRA Embarcado | MR disponible | 6 meses | **EXT-02** |
| 30-34 | Red Vital IP / TETRA Embarcado | MR disponible | 5 meses | **EXT-02** |

**HITO Mes 34:** ✅ Todos los sistemas instalados (Terrestre + Embarcado)

**⚠️ RESTRICCIÓN:** Embarcados NO se pueden instalar sin Material Rodante (EXT-02 M20)

---

### **FASE 6: INTEGRACIÓN Y PRUEBAS (Mes 32-44) - 13 meses**

**Objetivo:** Integrar, probar y certificar todos los sistemas

| Mes | Actividad | Tipo | Responsable | Prerequisito |
|:---:|:----------|:-----|:------------|:-------------|
| 32-36 | Integración CTC-PTC | Integración | Especialista | CTC+PTC instalados |
| 34-38 | Pruebas unitarias | FAT | Proveedor | Instalación completa |
| 36-40 | Integración Embarcados | Terrestre-Tren | Integrador | MR con sistemas |
| 38-42 | Pruebas integradas | SAT Parcial | Interventoría | FATs aprobados |
| 40-44 | SAT Completo | Certificación | ANI | Todo integrado |
| 42-44 | Pruebas operacionales | Real | Fenoco + ANI | SAT OK |

**HITO Mes 44:** ✅ SAT Completo + Certificación ANI

---

### **FASE 7: PUESTA EN MARCHA (Mes 44-48) - 4 meses**

**Objetivo:** Operación asistida y entrega final

| Mes | Actividad | Descripción | Entregable |
|:---:|:----------|:------------|:-----------|
| 44-46 | Operación asistida | Soporte 24/7 | Bitácora operación |
| 45-47 | Capacitación personal | Fenoco + Operadores | Certificados |
| 46-48 | Ajustes finales | Correcciones menores | Lista de pendientes |
| 47-48 | Certificaciones finales | ANI + ANLA + INVÍAS | Permisos operación |
| **48** | 🎯 **ENTREGA FINAL** | **Acta de recibo** | **✅ PROYECTO COMPLETADO** |

**HITO Mes 48:** 🏁 ENTREGA FINAL DEL PROYECTO (dentro del plan base 36m + uso 12m buffer)

---

## 🛡️ **BUFFER DE RIESGOS (Mes 49-60) - 12 meses**

**Propósito:** Absorber retrasos sin incumplir contrato

### **Uso del Buffer:**

| Riesgo | Probabilidad | Meses Buffer | Justificación |
|:-------|:-------------|:------------:|:--------------|
| Retraso aprobación ANI | 40% | 2m | Observaciones mayores |
| Retraso entrega CCO (EXT-01) | 50% | 3m | Obra civil compleja |
| Retraso Material Rodante (EXT-02) | 30% | 2m | Certificación extendida |
| Retraso PTC/PTC (12m lead) | 60% | 3m | Proveedor internacional |
| Integración CTC-PTC | 50% | 2m | Compatibilidad |

**Total Buffer Asignado:** 12 meses  
**Estrategia:** Usar solo si es necesario, liberar si no se usa

---

## 📋 **HITOS CRÍTICOS Y RESPONSABLES**

| Hito | Mes | Descripción | Responsable | Tipo |
|:----:|:---:|:------------|:------------|:-----|
| **H1** | 12 | Aprobación ANI | ANI | 🔴 Externo |
| **H2** | 13 | Órdenes Lote 1-2 | PMO | 🟢 Interno |
| **H3** | 16 | Subestaciones Operativas | Operador Red | 🔴 Externo |
| **H4** | 18 | **Edificio CCO Entregado** | **ANI** | 🔴 **Externo Crítico** |
| **H5** | 20 | **Material Rodante Certificado** | **Fenoco/ANI** | 🔴 **Externo Crítico** |
| **H6** | 22 | Fibra en Sitio | Proveedor | 🟠 Proveedor |
| **H7** | 25 | PTC/PTC en Sitio | Proveedor | 🟠 Proveedor |
| **H8** | 26 | Backbone Operativo | Especialista | 🟢 Interno |
| **H9** | 34 | Sistemas Embarcados | Especialista | 🟢 Interno |
| **H10** | 44 | SAT Completo | ANI/Interventor | 🔴 Externo |
| **H11** | 48 | Entrega Final | ANI | 🔴 Externo |

**🔴 Externos:** Fuera de control directo → Requieren seguimiento intensivo  
**🟢 Internos:** Control directo → Optimizables

---

## ⚠️ **RESTRICCIONES Y DEPENDENCIAS**

### **NO SE PUEDE hacer X sin Y:**

```
❌ Instalar CTC → Sin Edificio CCO (EXT-01 M18)
❌ Instalar Cámaras → Sin Fibra + Cableado (M26)
❌ PTC Embarcado → Sin Material Rodante (EXT-02 M20)
❌ Pruebas integradas → Sin FATs individuales (M38)
❌ SAT → Sin integración completa (M42)
❌ Ordenar compras → Sin aprobación ANI (M12)
```

---

## 💰 **FLUJO DE CAJA AGRESIVO (36 meses)**

### **Desembolso por Fase:**

| Fase | Meses | Desembolso | Acumulado | % |
|:-----|:-----:|:----------:|:---------:|:-:|
| Ingeniería | 0-12 | $26,490M | $26,490M | 10% |
| Compras Anticipos (30%) | 13-14 | $67,470M | $93,960M | 35% |
| Infraestructura | 15-18 | $26,490M | $120,450M | 45% |
| Entregas (50%) | 19-26 | $112,450M | $232,900M | 88% |
| Instalación (10%) | 27-34 | $22,490M | $255,390M | 96% |
| Cierre (10%) | 35-48 | $9,511M | $264,901M | 100% |

**Mes Pico:** Mes 22 (Entregas masivas) → $15,000M  
**Promedio Mes Obra:** $7,360M/mes (36 meses)

---

## 🎯 **RUTA CRÍTICA AGRESIVA**

```
Mes 12: Aprobación ANI ✅
    ↓
Mes 13: Orden PTC/PTC (12m lead) + Fibra (9m)
    ↓
Mes 18: Edificio CCO Entregado (EXT-01) 🏢
    ↓
Mes 20: Material Rodante Certificado (EXT-02) 🚂
    ↓
Mes 22: Fibra llega → Instalación 22-26
    ↓
Mes 25: PTC llega → Instalación 25-30
    ↓
Mes 30: Integración CTC-PTC 30-36
    ↓
Mes 34: Embarcados completos (req. EXT-02)
    ↓
Mes 36: Pruebas integradas 36-42
    ↓
Mes 44: SAT Completo ✅
    ↓
Mes 48: ENTREGA FINAL 🏁
    ↓
Mes 49-60: Buffer (solo si retrasos)
```

**Duración Ruta Crítica:** 36 meses (agresivo)  
**Con Buffer:** 48 meses (conservador)  
**Contractual:** 49 meses (margen 1 mes)

---

## 📝 **SUPUESTOS DEL PLAN AGRESIVO**

### **Supuestos Técnicos:**
1. ✅ Aprobación ANI Mes 12 sin observaciones mayores
2. ✅ **Edificio CCO entregado Mes 18 (ANI responsable)**
3. ✅ **Material Rodante certificado Mes 20 (Fenoco responsable)**
4. ✅ Proveedores cumplen lead times exactos
5. ✅ Clima favorable (época seca para obras)
6. ✅ Personal calificado disponible (no escasez)

### **Supuestos Operativos:**
7. ✅ Permisos ANLA vigentes Mes 12
8. ✅ Acceso vía Fenoco sin restricciones
9. ✅ Subestaciones operativas Mes 16
10. ✅ No cambios normativos durante ejecución
11. ✅ Fenoco coordina shutdowns 2 veces/mes para pruebas

### **Supuestos Financieros:**
12. ✅ Flujo de caja disponible según cronograma
13. ✅ Anticipos pagados máximo 5 días después de orden
14. ✅ TRM estable ±10% (equipos importados)
15. ✅ No inflación >8% en equipos especiales

---

## 🚨 **ALERTAS TEMPRANAS**

### **Indicadores de Alerta (Activar Buffer):**

| Indicador | Umbral | Acción |
|:----------|:-------|:-------|
| Aprobación ANI > Mes 12 | +2 semanas | Activar buffer 2m |
| Edificio CCO > Mes 18 | +1 mes | Activar buffer 3m |
| Material Rodante > Mes 20 | +1 mes | Activar buffer 2m |
| PTC/PTC > Mes 25 | +2 semanas | Activar buffer 3m |

**Regla:** Si se activan >2 alertas → Revisar plan completo

---

## ✅ **PLAN DE ACCIÓN INMEDIATA (Mes 4 HOY)**

### **Esta Semana:**
1. ✅ Solicitar a ANI inicio construcción CCO (para M18)
2. ✅ Contactar Fenoco para certificación MR (para M20)
3. ✅ Pre-calificar proveedores PTC/PTC (12m lead)
4. ✅ Acelerar ingeniería detalle Cap 1-2

### **Próximas 4 Semanas (Mes 4-5):**
5. ✅ Preparar especificaciones técnicas finales
6. ✅ Contratos marco proveedores con cláusula inicio rápido
7. ✅ Validar disponibilidad presupuestal $67M (anticipos M13)
8. ✅ Cronograma detallado M13-M48 (semana a semana)

---

**Elaborado por:** PMO - Planificación Agresiva  
**Aprobación requerida:** Gerente Proyecto + ANI  
**Próxima revisión:** Mes 6 (control crítico pre-Mes 12)

---

## 📊 **RESUMEN EJECUTIVO**

| Concepto | Plan Agresivo | Buffer | Total |
|:---------|:-------------:|:------:|:-----:|
| **Plazo Obra** | 36 meses | +12 meses | 48 meses |
| **Entregas Externas** | 5 críticas | - | 5 |
| **Inversión** | $264,901M | - | $264,901M |
| **Hitos Críticos** | 11 | - | 11 |
| **Riesgos Ruta Crítica** | 4 | - | 4 |

🎯 **Filosofía:** Planificar 36m, ejecutar 42m, entregar 48m  
🛡️ **Protección:** 12 meses buffer para absorber variaciones  
🔴 **Crítico:** Entregas externas ANI/Fenoco deben cumplirse

