# LISTADO MAESTRO DE SISTEMAS v4.0 - CONSOLIDADO AT1-AT10
## APP La Dorada - Chiriguaná

**Fecha de actualización:** Enero 2025  
**Proyecto:** APP La Dorada - Chiriguaná  
**Contrato:** Concesión No. 001 de 2025  
**Documento:** 23 - Listado Maestro de Sistemas  
**Estado:** ✅ **ACTUALIZADO - ALINEADO CON CRITERIOS TÉCNICOS MAESTROS**  

---

## INFORMACIÓN DEL DOCUMENTO

| Campo | Valor |
|-------|-------|
| **Fecha de actualización** | Enero 2025 |
| **Proyecto** | APP La Dorada - Chiriguaná |
| **Contrato** | Concesión No. 001 de 2025 |
| **Responsable** | Administrador Contractual EPC |
| **Tipo** | Documento de Soporte |
| **Categoría** | Ingeniería Conceptual |
| **Número** | 23 |
| **Estado** | ✅ **ACTUALIZADO CON CRITERIOS TÉCNICOS MAESTROS** |

---

## DESCRIPCIÓN DEL DOCUMENTO

**Listado Maestro de Sistemas - Consolidado de Equipos y Sistemas AT1-AT10**

Este documento de soporte consolida el inventario maestro de todos los sistemas que el EPC debe implementar conforme al Contrato de Concesión No. 001 de 2025 y los Apéndices Técnicos AT1-AT10, **ALINEADO CON LOS CRITERIOS TÉCNICOS MAESTROS v1.0**.

---

## CONTROL DE VERSIONES

| Versión | Fecha | Responsable | Descripción |
|:---:|:---:|:---|:---|
| **v1.0** | Sep-2025 | Ing. Contractual | Versión inicial |
| **v2.0** | Sep-2025 | Ing. Contractual | Revisión técnica y ampliación de alcance |
| **v3.0** | Ene-2025 | Ing. Contractual | Formato mejorado y estructura optimizada |
| **v4.0** | Ene-2025 | Admin. Contractual EPC | **CRÍTICO: Alineación con Criterios Técnicos Maestros** |

---

## 🚨 **ACTUALIZACIÓN CRÍTICA v4.0 - ALINEACIÓN CON CRITERIOS TÉCNICOS MAESTROS**

### **📋 CAMBIOS IMPLEMENTADOS:**

#### **🔴 ELIMINACIONES MASIVAS (Según Criterios Maestros):**
- **❌ Virtual Balise (GNSS)s:** 1,080 unidades → **0 unidades** (Señalización virtual implementada)
- **❌ Señales LED en vía:** 270 unidades → **0 unidades** (CTC virtual centralizado)
- **❌ RBC - Radio Block Centre:** 2 unidades → **0 unidades** (ATP embarcado)
- **❌ LEU - Lineside Electronic Units:** 1,080 unidades → **0 unidades** (Sistema ATP embarcado)

#### **🆕 IMPLEMENTACIONES NUEVAS (Según Criterios Maestros):**
- **✅ RED TETRA (Misión Crítica):** NO incluido → **37 estaciones** (Redundancia con TETRA)
- **✅ EOT - End of Train:** NO incluido → **15 dispositivos** (Integridad del tren)
- **✅ ENCE - Enclavamientos:** NO especificado → **5 estaciones** (Control crítico)
- **✅ Desvíos:** NO incluido → **120 unidades** (25 motorizados + 95 manuales)

#### **🟡 AJUSTES DE CANTIDADES:**
- **✅ TETRA:** 33 → **37 estaciones** (Cobertura 100% + solapamiento 15-20%)
- **✅ CCTV:** 110-180 → **73 cámaras** (Solo control ferroviario)
- **✅ Fibra Óptica:** 526 → **594 km** (Corredor + 10% reserva)

---

## INTRODUCCIÓN

Este documento consolida el Listado Maestro de Sistemas que el EPC debe implementar conforme a lo establecido en el Contrato de Concesión No. 001 de 2025 y los Apéndices Técnicos AT1–AT10, **ALINEADO CON LOS CRITERIOS TÉCNICOS MAESTROS v1.0**. El objetivo es disponer de un inventario único, con referencias contractuales, para servir de base a la Ingeniería Conceptual, Básica y de Detalle.

---

## 1. SISTEMAS IDENTIFICADOS (ACTUALIZADOS v4.0)

### **A. SISTEMAS DE SEÑALIZACIÓN Y CONTROL (FILOSOFÍA VIRTUAL)**

#### **1.1 Centro de Control de Tráfico (CTC)**
- **Referencias:** AT1 (Cap. 4.3.2), AT2 (Cap. 3.2.1), AT3 (Cap. 8.2), AT4 (indicadores), AT9 (cronograma)
- **Funciones:** Control centralizado, asignación de surcos, coordinación con FENOCO
- **Disponibilidad:** 99.95% según AT4
- **Ubicación:** La Dorada, Caldas
- **Interoperabilidad:** Protocolos FRA/AREMA para coordinación con FENOCO

#### **1.2 Sistema ATP Embarcado (15 Locomotoras)**
- **Referencias:** AT1 (Cap. 5.1), AT3 (Cap. 8.10), Cl. 13.1 del Contrato
- **Funciones:** Control automático de velocidad, autorización de movimiento, protección contra colisiones
- **Disponibilidad:** 99.95% según AT4
- **Componentes:** Computadora ATP, sensores, display maquinista, radio TETRA+RED TETRA (Misión Crítica)
- **Interoperabilidad:** Compatible con sistemas FENOCO según estándares FRA/AREMA

#### **1.3 Enclavamientos Electrónicos (ENCE) - 5 ESTACIONES**
- **Referencias:** AT1 (Cap. 4.3.2), AT3 (Cap. 8.1)
- **Funciones:** Control de desvíos y señales en estaciones críticas
- **Estaciones:** Zapatosa, García Cadena, Barrancabermeja, Puerto Berrío-Grecia, La Dorada-México
- **Componentes:** Interlocking Controller, panel control local, módulos I/O, switch machines
- **Disponibilidad:** 99.95% según AT4

#### **1.4 Desvíos (120 UNIDADES)**
- **Referencias:** AT1 (Cap. 4.3.2), AT3 (Cap. 8.1)
- **Funciones:** Control de flujo de tráfico, cruces y apartaderos
- **Desvíos motorizados:** 25 unidades (control automático desde CTC)
- **Desvíos manuales:** 95 unidades (operación manual)
- **Disponibilidad:** 99.95% según AT4

#### **❌ ELIMINADO: Señalización Física en Vía**
- **Virtual Balise (GNSS)s:** 1,080 unidades → **0 unidades** (Reemplazado por ATP embarcado)
- **Señales LED en vía:** 270 unidades → **0 unidades** (Reemplazado por CTC virtual)
- **RBC:** 2 unidades → **0 unidades** (Reemplazado por ATP embarcado)
- **LEU:** 1,080 unidades → **0 unidades** (Reemplazado por ATP embarcado)

---

### **B. SISTEMAS DE TELECOMUNICACIONES (REDUNDANCIA DUAL)**

#### **2.1 Radio TETRA (37 ESTACIONES)**
- **Referencias:** AT3 (Cap. 8.5), AT2 (Cap. 3.2.2), AT7 (predios torres)
- **Funciones:** Comunicaciones tren-tierra, seguridad operativa, interoperabilidad FENOCO
- **Cobertura:** 100% del corredor + solapamiento 15-20%
- **Disponibilidad:** 99.5% según AT4
- **Interoperabilidad:** Frecuencias y protocolos FRA/AREMA compatibles con FENOCO

#### **2.2 Sistema RED TETRA (Misión Crítica) (37 ESTACIONES) - NUEVO**
- **Referencias:** Criterios Técnicos Maestros v1.0
- **Funciones:** Redundancia con TETRA, comunicaciones críticas
- **Cobertura:** 100% del corredor (colocalizado con TETRA)
- **Disponibilidad:** 99.5% según AT4
- **Componentes:** Estaciones base RED TETRA (Misión Crítica), radios embarcados, antenas

#### **2.3 Red de Fibra Óptica (594 KM)**
- **Referencias:** AT3 (Cap. 8.6), AT5 (interferencias), AT7 (predios)
- **Funciones:** Backbone redundante de comunicaciones
- **Longitud:** 594 km (corredor + 10% reserva)
- **Componentes:** Cables 48 fibras G.652D, cajas 80x80, tritubo 40mm
- **Disponibilidad:** 99.95% según AT4

#### **2.4 Red de Datos Ferroviaria**
- **Referencias:** AT3 (Cap. 8.8.3), AT1 (UF2 – Tabla 16)
- **Funciones:** Integración de sistemas ITS, CCTV, señalización y CTC
- **Disponibilidad:** 99.95% según AT4

---

### **C. SISTEMAS ITS Y SEGURIDAD (CANTIDADES ACTUALIZADAS)**

#### **3.1 Circuito Cerrado de Televisión (CCTV) - 73 CÁMARAS**
- **Referencias:** AT3 (Cap. 8.8.1), AT2 (Cap. 3.3.2)
- **Funciones:** Monitoreo de seguridad y operación ferroviaria
- **Distribución:** 48 PAN + 12 talleres + 8 CCO + 5 estaciones
- **Resolución:** Mínimo 1080p
- **Almacenamiento:** 30 días mínimo
- **Disponibilidad:** 99.5% según AT4

#### **3.2 Sistema ITS (Intelligent Transport Systems)**
- **Referencias:** AT3 (Cap. 6.2), AT4 (indicadores)
- **Funciones:** Gestión de tráfico, información al usuario, integración con CCO
- **Disponibilidad:** 99.5% según AT4

#### **3.3 Control de Accesos**
- **Referencias:** AT3 (Cap. 6.13)
- **Funciones:** Control de ingreso a instalaciones críticas
- **Disponibilidad:** 99.5% según AT4

#### **3.4 Sistemas Contra Incendios y Detección**
- **Referencias:** AT3 (Cap. 6.11)
- **Funciones:** Protección activa en talleres, estaciones y CCO
- **Disponibilidad:** 99.5% según AT4

---

### **D. INFRAESTRUCTURA Y EDIFICACIONES**

#### **4.1 Talleres de Mantenimiento (Pesado y Liviano)**
- **Referencias:** AT1 (UF1 – Tablas 12–15), AT2 (Cap. 6.1)
- **Funciones:** Mantenimiento de locomotoras, vagones y equipos
- **Disponibilidad:** 99.5% según AT4

#### **4.2 Centro de Control de Operaciones (CCO)**
- **Referencias:** AT1 (UF2 – Tabla 16), AT2 (Cap. 4.1)
- **Funciones:** Monitoreo integral, despacho ferroviario
- **Ubicación:** La Dorada, Caldas
- **Componentes:** Sala de control (250 m²), sala servidores (200 m²)
- **Disponibilidad:** 99.95% según AT4

#### **4.3 Estaciones Ferroviarias y Apartaderos**
- **Referencias:** AT2 (Cap. 2.4), AT8 (gestión social – accesibilidad)
- **Funciones:** Atención a usuarios, logística de carga, integración multimodal
- **Disponibilidad:** 99.5% según AT4

#### **4.4 Centro de Transferencia de Carga**
- **Referencias:** AT1 y AT2
- **Funciones:** Operaciones intermodales y almacenamiento
- **Disponibilidad:** 99.5% según AT4

---

### **E. MATERIAL RODANTE Y EQUIPOS (SISTEMA EOT AGREGADO)**

#### **5.1 Locomotoras con ATP Embarcado (15 UNIDADES)**
- **Referencias:** AT1 (Cap. 5.1), Cl. 13.1 del Contrato
- **Funciones:** Transporte de carga bajo estándares de seguridad
- **Componentes:** Sistema ATP embarcado, radio TETRA+RED TETRA (Misión Crítica), display maquinista
- **Disponibilidad:** 99.95% según AT4
- **Interoperabilidad:** ATP embarcado compatible con FENOCO

#### **5.2 Sistema EOT - End of Train (15 DISPOSITIVOS) - NUEVO**
- **Referencias:** Criterios Técnicos Maestros v1.0
- **Funciones:** Monitoreo de integridad del tren, presión de frenos, posición GPS
- **Componentes:** Sensor presión frenos, sensor integridad tren, GPS, radio comunicación
- **Disponibilidad:** 99.95% según AT4

#### **5.3 Equipos de Mantenimiento de Vía**
- **Referencias:** AT1 (Cap. 5.2)
- **Funciones:** Conservación y rehabilitación de la vía férrea
- **Disponibilidad:** 99.5% según AT4

#### **5.4 Sistemas Embarcados en Material Rodante**
- **Referencias:** AT1 (Cap. 5.3), AT3 (Cap. 6.8, 6.9)
- **Funciones:** Telecomunicaciones, climatización, seguridad
- **Disponibilidad:** 99.5% según AT4

---

## 2. CRITERIOS DE INCLUSIÓN (ACTUALIZADOS v4.0)

Cada sistema listado cumple con los siguientes criterios:
1. **Está explícitamente referenciado** en el Contrato y/o Apéndices Técnicos
2. **Está alineado** con los Criterios Técnicos Maestros v1.0
3. **Tiene impacto directo** en disponibilidad, seguridad, calidad o nivel de servicio (AT4)
4. **Requiere definición de interfaces** en la Ingeniería Básica
5. **Contribuye al cumplimiento** de indicadores de disponibilidad

---

## 3. IMPACTO PRESUPUESTAL DE ACTUALIZACIÓN

### **3.1 Eliminaciones (Sobrepresupuesto)**
- **Virtual Balise (GNSS)s:** -$40,000,000,000 COP
- **Señales LED vía:** -$12,000,000,000 COP
- **RBC:** -$2,000,000,000 COP
- **LEU:** -$10,000,000,000 COP
- **TOTAL ELIMINAR:** -$64,000,000,000 COP

### **3.2 Implementaciones Nuevas (Faltante)**
- **RED TETRA (Misión Crítica):** +$3,484,000,000 COP
- **EOT:** +$520,000,000 COP
- **ENCE:** +$6,020,000,000 COP
- **Desvíos:** +$3,783,000,000 COP
- **TOTAL AGREGAR:** +$13,807,000,000 COP

### **3.3 Impacto Neto**
**IMPACTO NETO:** -$50,193,000,000 COP

---

## 4. INTERFACES DOCUMENTALES

### **4.1 Documentos Actualizados (v4.0)**
- **AT1_Alcance_del_Proyecto_MEJORADO_v4.0.md** ✅ (Documento base actualizado)
- **CRITERIOS_TECNICOS_MAESTRO_v1.0.md** ✅ (Documento fuente de verdad)
- **MATRIZ_IMPACTO_DOCUMENTOS_AFECTADOS_v1.0.md** ✅ (Análisis de desalineación)

### **4.2 Documentos Dependientes (Por Actualizar)**
- **25.1_WBS_COMPLETA_ESPECIALIDADES.md** ⏳ (Estructura actualizada)
- **29_Sistema_Senalizacion_Integrado.md** ⏳ (Filosofía virtual)
- **27_Sistema_TETRA_Integrado.md** ⏳ (37 estaciones)
- **32_Material_Rodante_Integrado.md** ⏳ (Sistema EOT)

### **4.3 Documentos de Ingeniería (Por Actualizar)**
- **V.1_Señalizacion_Ferroviaria_Detalle_v1.0.md** ⏳ (Eliminar eurobalises)
- **V.2_Centro_Control_Trafico_CTC_Detalle_v1.0.md** ⏳ (CTC virtual)
- **V.3_Sistemas_Comunicacion_Detalle_v1.0.md** ⏳ (RED TETRA (Misión Crítica) agregado)

---

## 5. PRÓXIMOS PASOS

### **5.1 Validación Inmediata**
1. **Validar trazabilidad contractual** de cada sistema en la Matriz_TrazabilidadContractual.xlsx
2. **Organizar los sistemas** en paquetes de trabajo mediante el WBS_IngenieriaConceptual.docx
3. **Desarrollar análisis de integración** por sistema (documentos 26–32)

### **5.2 Continuación de Corrección Documental**
**SIGUIENTE DOCUMENTO:** 25.1_WBS_COMPLETA_ESPECIALIDADES.md
- Reestructurar WBS según filosofía virtual
- Actualizar cantidades por especialidad
- Recalcular totales por capítulo

### **5.3 Criterios para Avance**
- ✅ **Listado Maestro actualizado** según criterios maestros
- ⏳ **Documentos dependientes** en proceso de actualización
- ⏳ **Validación cruzada** pendiente
- ⏳ **Presupuesto definitivo** pendiente

---

## 6. GESTIÓN DE CAMBIOS

### **6.1 Control de Cambios v4.0**
**Cambios implementados:**
- Eliminación masiva de infraestructura física de señalización
- Implementación de filosofía virtual (CTC + ATP embarcado)
- Agregación de sistemas faltantes (RED TETRA (Misión Crítica), EOT, ENCE, Desvíos)
- Ajuste de cantidades según criterios maestros

### **6.2 Trazabilidad de Cambios**
- **Documento origen:** CRITERIOS_TECNICOS_MAESTRO_v1.0.md
- **Fecha de alineación:** Enero 2025
- **Responsable:** Administrador Contractual EPC
- **Impacto presupuestal:** -$50,193,000,000 COP

### **6.3 Próxima Revisión**
**Criterios para v5.0:**
- Completar actualización de todos los documentos dependientes
- Validar coherencia cruzada en todo el ecosistema
- Generar presupuesto definitivo alineado
- Aprobación formal de cambios

---

## 7. MÉTRICAS DE SEGUIMIENTO

| Métrica | Objetivo | Frecuencia | Responsable |
|:---|:---:|:---:|:---|
| **Cumplimiento técnico** | 100% | Semanal | Supervisor Técnico |
| **Alineación con criterios maestros** | 100% | Diaria | PMO |
| **Cumplimiento de cronograma** | 95% | Diaria | Jefe de Proyecto |
| **Calidad de implementación** | Excelente | Quincenal | Auditoría Técnica |

---

## 8. RECURSOS REQUERIDOS

### **8.1 Personal**
- Personal técnico especializado en sistemas ferroviarios
- Especialistas en telecomunicaciones (TETRA, RED TETRA (Misión Crítica))
- Ingenieros de señalización y control
- Especialistas en material rodante

### **8.2 Herramientas y Equipos**
- Software de monitoreo y control
- Equipos de telecomunicaciones
- Sistemas de prueba y validación
- Herramientas de gestión documental

### **8.3 Documentación**
- Criterios Técnicos Maestros v1.0
- Especificaciones técnicas actualizadas
- Manuales de procedimientos
- Documentación de referencia FRA/AREMA/EN

---

## ⚠️ ADVERTENCIA LEGAL

Esta información es únicamente de carácter informativo y contractual. Se recomienda su validación por la Interventoría y el equipo jurídico antes de ser utilizada formalmente.

---

**Estado del documento:** ✅ **ACTUALIZADO CON CRITERIOS TÉCNICOS MAESTROS** - Enero 2025  
**Versión:** 4.0  
**Responsable:** Administrador Contractual EPC  
**Próxima actualización:** Al completar corrección documental masiva

---

**Este documento es VIVO y debe actualizarse conforme se complete la corrección documental masiva.**

**Próximo paso:** Actualizar 25.1_WBS_COMPLETA_ESPECIALIDADES.md (Capa 2 - Documentos base)
