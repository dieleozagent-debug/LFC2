# 📋 CRITERIOS TÉCNICOS MAESTRO - APP LA DORADA-CHIRIGUANÁ

## 🎯 DOCUMENTO DE REFERENCIA CRUZADA
**Proyecto:** APP La Dorada-Chiriguaná UF-2.2  
**Versión:** 1.0  
**Fecha:** Enero 2025  
**Estado:** Vigente  

---

## 📊 RESUMEN EJECUTIVO

Este documento establece los **criterios técnicos maestros** que deben mantenerse coherentes en todos los documentos del proyecto, incluyendo WBS, presupuestos, especificaciones técnicas y contratos.

### 🔄 PRINCIPIO DE ACTUALIZACIÓN CRUZADA
**Cualquier cambio en estos criterios DEBE actualizarse automáticamente en:**
- WBS Presupuestal
- Especificaciones Técnicas
- Contratos y Anexos
- Planos y Diagramas
- Documentación de Ingeniería

---

## 🏗️ ARQUITECTURA DEL SISTEMA

### 1. FILOSOFÍA TÉCNICA GENERAL
| Criterio | Valor | Justificación | Documentos Afectados |
|----------|-------|---------------|---------------------|
| **Senalización** | **VIRTUAL** | Eliminar infraestructura física en vía | WBS, AT1-3, Planos |
| **Comunicación** | **TETRA** | Red única de misión crítica (según DBCD) | WBS, AT4, Especificaciones |
| **Control** | **CTC Centralizado** | Gestión unificada desde CCO | WBS, AT1, Manuales |
| **Energía** | **UPS + Generadores críticos** | Disponibilidad según criticidad | WBS, AT2, Planos eléctricos |

### 2. CANTIDADES MAESTRAS (ACTUALIZADAS CON PROCESO DE COTIZACIÓN)
| Componente | Cantidad | Criterio | Referencia |
|------------|----------|----------|------------|
| **Corredor** | 526.133 km | Longitud total proyecto | Contrato base (respuesta LFC) |
| **Fibra Óptica** | 526 km | Corredor + 10% reserva | Cálculo técnico |
| **Rollos fibra 4km** | **149 rollos** | Rollos de 4km | Cálculo técnico |
| **Código fibra** | **LPOC03120484ZC** | Cable FO 48 fibras G.652D | Especificación técnica |
| **Costo fibra** | **$1.07 USD/m** | Por metro | Cotización específica |
| **Costo por rollo** | **$4,280 USD** | 4,000m × $1.07 | Cálculo técnico |
| **Tasa de cambio** | **4,400 COP/USD** | Tasa de referencia proyecto | Paridad cambiaria |
| **Puentes** | **22 puentes** | Según AT1 Tabla 2 | Apéndice Técnico 1 |
| **Cajas por puente** | **4 cajas 80x80** | Por puente | Especificación técnica |
| **Cajas lineales** | **1,980 unidades** | Cada 300m (costado derecho) | Cálculo técnico |
| **Total cajas** | **2,068 unidades** | 1,980 + (22×4) | Suma total |
| **Tritubo 40mm** | **1,485 rollos** | Rollos de 400m | Cálculo técnico |
| **Uniones rápidas** | **6,204 unidades** | 3 por caja (2,068×3) | Cálculo técnico |
| **Estaciones TETRA** | 37 | Cobertura 15-20 km + solapamiento 15-20% | AT4 telecomunicaciones |
| **Locomotoras** | 15 | Flota según contrato | AT1-3 material rodante |
| **Sitios L3** | 14 | Cada 40 km para anillo lógico | Cálculo redundancia |
| **Pasos a Nivel** | 146 total | 9 tipo C + 15 tipo B + 122 otros | Normativa colombiana |
| **Estaciones con ENCE** | 5 | Zapatosa, García Cadena, Barrancabermeja, Puerto Berrío-Grecia, La Dorada-México | Respuesta LFC |
| **Cámaras CCTV** | 73 | 48 PAN + 12 talleres + 8 CCO + 5 estaciones | Respuesta LFC |
| **Capacidad trenes** | 40 trenes/día | Referencial, no fija | Respuesta LFC |
| **CCO ubicación** | La Dorada | Centro de Control de Operaciones | Respuesta LFC |

---

## 🔧 **CÁLCULOS DETALLADOS FIBRA ÓPTICA (ENERO 2025)**

### **CÁLCULO DE CANTIDADES ESPECÍFICAS:**

#### **1. CAJAS DE EMPALME Y DISTRIBUCIÓN:**
```
CAJAS LINEALES:
- Fibra total: 526 km = 594,000 m
- Separación: 300 m
- Cajas lineales: 594,000 ÷ 300 = 1,980 unidades
- Ubicación: Costado derecho del corredor

CAJAS EN PUENTES:
- Puentes identificados: 22 puentes (AT1 Tabla 2)
- Cajas por puente: 4 unidades
- Total cajas puentes: 22 × 4 = 88 unidades

TOTAL CAJAS: 1,980 + 88 = 2,068 unidades
```

#### **2. TRITUBO Y UNIONES:**
```
TRITUBO 40MM (11/4") RDE 13.6 RÍGIDO:
- Fibra total: 526 km
- Rollos de 400m: 594,000 ÷ 400 = 1,485 rollos
- Costo por rollo: $15,845
- Costo total tritubo: 1,485 × $15,845 = $23,529,825

UNIONES RÁPIDAS 40MM:
- Total cajas: 2,068 unidades
- Uniones por caja: 3 unidades (3 vías)
- Total uniones: 2,068 × 3 = 6,204 unidades
- Costo por unión: $35,000
- Costo total uniones: 6,204 × $35,000 = $217,140,000
```

#### **3. FIBRA ÓPTICA - DESGLOSE COSTO POR KM:**
```
COSTO TOTAL POR KM: $100,000,000 COP

MATERIALES POR KM:
- Fibra óptica: $1.07 USD/m × 4,400 = $4,708/m × 1,000m = $4,708,000/km
- Cajas 80x80: 3.48 cajas/km × $1,350,000 = $4,698,000/km
- Tritubo 40mm: 2.5 rollos/km × $15,845 = $39,613/km
- Uniones: 10.44 uniones/km × $35,000 = $365,400/km
- TOTAL MATERIALES: ~$9,811,013 COP/km

MANO DE OBRA POR KM: $100,000,000 - $9,811,013 = $90,188,987 COP/km
- Zanja a 70cm profundidad × 40cm ancho
- Compactación de material retirado
- Capa de arena 0.3cm abajo y arriba del ducto
- Compactación final
- Aplicable zona blanda y zona dura
```

#### **4. FUSIONES E INSUMOS DETALLADOS:**
```
FUSIONES NECESARIAS:
- 200 equipos TETRA: 200 × 8 hilos = 1,600 fusiones
- 33 antenas TETRA: 33 × 8 hilos = 264 fusiones
- 5 estaciones ENCE: 5 × 24 hilos = 120 fusiones
- 24 pasos a nivel: 24 × 4 hilos = 96 fusiones
- 8 edificios CCO/talleres: 8 × 48 hilos = 384 fusiones
- Cajas de empalme: 2,068 cajas × 2 fusiones = 4,136 fusiones
- TOTAL FUSIONES: 6,600 fusiones

EQUIPOS DE FUSIONADO:
- Fusionadoras: 2 unidades (principal + respaldo)
- OTDR: 2 unidades (principal + respaldo)
- Muflas: 6,600 + 10% repuesto = 7,260 unidades
- Insumos fusionado: Global para 6,600 fusiones

REPUESTOS Y RESERVAS:
- Fibra repuesto: 10% de 526 km = 59.4 km
- Tritubo repuesto: 5% de 1,485 rollos = 74 rollos
- Cajas repuesto: 5% de 2,068 = 104 unidades
- Uniones repuesto: 5% de 6,204 = 310 unidades
```

#### **5. COSTOS ESPECÍFICOS ACTUALIZADOS:**
| Componente | Cantidad | Costo Unitario | Costo Total |
|------------|----------|----------------|-------------|
| **Fibra óptica (materiales)** | 526 km | $9,811,013 | $5,827,741,722 |
| **Mano de obra (zanja + instalación)** | 526 km | $90,188,987 | $53,572,258,278 |
| **TOTAL FIBRA ÓPTICA** | 526 km | $100,000,000 | $59,400,000,000 |
| **Tritubo 40mm** | 1,485 rollos | $15,845 | $23,529,825 |
| **Uniones rápidas** | 6,204 unidades | $35,000 | $217,140,000 |
| **Cajas 80x80** | 2,068 unidades | $1,350,000 | $2,791,800,000 |
| **Fusionadoras** | 2 unidades | $50,000,000 | $100,000,000 |
| **OTDR** | 2 unidades | $30,000,000 | $60,000,000 |
| **Muflas fusionado** | 7,260 unidades | $25,000 | $181,500,000 |
| **Insumos fusionado** | 6,600 fusiones | $15,000 | $99,000,000 |
| **Fibra repuesto** | 59.4 km | $9,811,013 | $582,774,172 |
| **Tritubo repuesto** | 74 rollos | $15,845 | $1,172,530 |
| **Cajas repuesto** | 104 unidades | $1,350,000 | $140,400,000 |
| **Uniones repuesto** | 310 unidades | $35,000 | $10,850,000 |

---

## 📋 **RESPUESTAS CLAVE DEL PROCESO DE COTIZACIÓN**

### **SENALIZACIÓN Y CONTROL DE TRENES**
| Aspecto | Requerimiento Contrato | Respuesta LFC | Impacto en Criterios |
|---------|----------------------|---------------|---------------------|
| **Senalización Virtual** | PTC con cantonamiento virtual | "Ingeniería debe cumplir requerimientos del contrato" | Mantener senalización virtual |
| **Sistema PTC** | Basado en estándares FRA | "Debe atender plenamente requerimientos PTC" | Confirmar sistema PTC obligatorio |
| **Interoperabilidad FENOCO** | Red 246 km operativa | "Sí es necesario garantizar interoperabilidad" | Incluir compatibilidad FENOCO |
| **Estaciones con ENCE** | 5 interlockings electrónicos | "5 estaciones específicas definidas" | Enclavamientos solo en 5 estaciones |
| **Sistema EOT** | End of Train Device | "Función específica a definir" | **DEFINIDO: Dispositivo cola tren** |

### **COMUNICACIONES**
| Aspecto | Requerimiento Contrato | Respuesta LFC | Impacto en Criterios |
|---------|----------------------|---------------|---------------------|
| **TETRA obligatorio** | Compatible con red FENOCO | "Contrato solicita esta tecnología" | Mantener TETRA como obligatorio |
| **Fibra Óptica** | Backbone principal | "Backbone de fibra óptica nuevo" | Fibra completamente nueva |
| **Red FENOCO** | 246 km operativo | "Corredor de 246 km operativo" | Interoperabilidad obligatoria |
| **Cobertura 100%** | Con redundancia satelital | "Garantizar redundancia y respaldo" | Mantener redundancia |

### **CCTV Y SEGURIDAD**
| Aspecto | Requerimiento Contrato | Respuesta LFC | Impacto en Criterios |
|---------|----------------------|---------------|---------------------|
| **Cámaras por sitio** | Mínimas estimadas | "4 estación, 12 taller, 8 CCO, 48 PAN" | Actualizar cantidades específicas |
| **Pasos a Nivel** | 146 cruces totales | "9 tipo C + 15 tipo B + 122 otros" | Solo tipos B y C con control activo |
| **Sistema EOT** | Incluido en OBU | "Función específica a definir" | Incluir en equipos embarcados |

### **ENERGÍA Y INFRAESTRUCTURA**
| Aspecto | Requerimiento Contrato | Respuesta LFC | Impacto en Criterios |
|---------|----------------------|---------------|---------------------|
| **UPS autonomía** | Tiempo específico | "5 minutos hasta transferencia" | Definir autonomía mínima |
| **CCO ubicación** | Centro de control | "La Dorada, Caldas" | Ubicación específica confirmada |
| **Obras civiles** | No incluido en alcance | "Disenos civiles no incluidos" | Excluir de WBS actual |

### **METODOLOGÍA BIM**
| Aspecto | Requerimiento Contrato | Respuesta LFC | Impacto en Criterios |
|---------|----------------------|---------------|---------------------|
| **BIM obligatorio** | Para todos los sistemas | "No es posible eliminar requisito" | Mantener BIM como obligatorio |
| **CDE** | Entorno colaborativo | "Definido en BEP del proyecto" | Incluir gestión CDE |

---

## 🔧 SISTEMAS TÉCNICOS DETALLADOS

### 3. SISTEMA DE COMUNICACIONES
#### 3.1 Arquitectura de Red
```
CORREDOR 526.133 KM
├── 37 ESTACIONES TETRA (cada ~15-20km + 15-20% solapamiento)
├── BACKBONE FIBRA ÓPTICA (526 km)
└── COMUNICACIÓN IP
```

#### 3.2 Criterios de Cobertura
| Sistema | Cobertura | Redundancia | Criticidad |
|---------|-----------|-------------|------------|
| **TETRA** | 15-20 km/estación + 15-20% solapamiento | Fibra Óptica | Alta |
| **Fibra Óptica** | 526 km | Satelital | Crítica |
| **IP** | Todo el corredor | Múltiple | Media |

### 4. SISTEMA DE CONTROL
#### 4.1 Senalización Virtual
| Componente | Estado | Justificación |
|------------|--------|---------------|
| **Punto de Referencia Virtual (SICC) físicas** | ❌ ELIMINADO | Reemplazado por PTC embarcado |
| **Senalización en Cabina (Cab-Signaling) en vía** | ❌ ELIMINADO | CTC virtual |
| **CTC Centralizado** | ✅ IMPLEMENTADO | Control desde CCO |
| **PTC/PTC Embarcado** | ✅ IMPLEMENTADO | 15 locomotoras |

#### 4.2 Arquitectura de Control
```
CENTRO DE CONTROL (CCO)
├── CTC (Control de Tráfico Centralizado)
├── Servidor Vital PTC (FRA 236 Compliant)
├── SCADA (Supervisión y Control)
└── COMUNICACIÓN CON TRENES
    ├── TETRA (primario)
    └── PTC/PTC embarcado
```

### 5. SISTEMA DE ENERGÍA
#### 5.1 Distribución de Sitios
| Tipo de Sitio | Cantidad | Equipamiento | Justificación |
|---------------|----------|--------------|---------------|
| **Estaciones TETRA** | 37 | UPS + Baterías | Disponibilidad 99.9% |
| **Sitios L3 críticos** | 14 | UPS + Generadores | Anillo lógico |
| **Sitios secundarios** | 19 | UPS solamente | Costo-beneficio |

#### 5.2 Criterios de Alimentación
- **UPS:** Todos los sitios (37)
- **Generadores:** Solo sitios críticos L3 (14)
- **Autonomía:** Mínimo 4 horas UPS, 8 horas con generador
- **Transferencia:** Automática en todos los sitios

---

## 📹 SISTEMA DE VIDEOVIGILANCIA

### 6. CCTV - CONTROL FERROVIARIO
#### 6.1 Distribución de Cámaras
| Ubicación | Cantidad | Tipo | Justificación |
|-----------|----------|------|---------------|
| **Pasos a Nivel** | 24 | IP fijas | Control de tráfico |
| **Talleres** | 4 | IP fijas | Seguridad (2 por taller) |
| **Estaciones** | 45 | IP fijas | Entrada/salida/apartaderos |
| **TOTAL** | **73** | | Solo control ferroviario |

#### 6.2 Criterios de Instalación
- **NO incluir:** Edificaciones administrativas
- **SÍ incluir:** Solo infraestructura ferroviaria
- **Resolución:** Mínimo 1080p
- **Almacenamiento:** 30 días mínimo

---

## 🚧 INFRAESTRUCTURA FÍSICA

### 7. OBRA CIVIL
#### 7.1 Pasos a Nivel
| Tipo | Cantidad | Equipamiento | Estado |
|------|----------|--------------|--------|
| **Tipo A** | 122 | Senalización fija | ❌ NO incluido |
| **Tipo B** | 15 | Senales luminosas/acústicas | ✅ Incluido |
| **Tipo C** | 9 | Barreras automáticas | ✅ Incluido |
| **TOTAL INTERVENIDOS** | **24** | | Solo estos en presupuesto |

#### 7.2 Centro de Control Operativo (CCO)
| Área | Dimensiones | Función |
|------|-------------|---------|
| **Edificio CCO** | 850 m² | Operaciones generales |
| **Sala de Control** | 250 m² | Consolas operador |
| **Sala Servidores** | 200 m² | Equipos técnicos |

---

## 📋 CRITERIOS DE ACTUALIZACIÓN

### 8. MATRIZ DE DEPENDENCIAS
| Criterio Modificado | Documentos que DEBEN Actualizarse |
|---------------------|-----------------------------------|
| **Cantidad locomotoras** | WBS, AT1-3, Presupuesto, Planos |
| **Sitios TETRA** | WBS, AT4, Planos telecomunicaciones |
| **CCTV** | WBS, Especificaciones, Planos |
| **Energía** | WBS, AT2, Planos eléctricos |
| **Pasos a Nivel** | WBS, Planos civiles, Normativas |

### 9. PROCEDIMIENTO DE ACTUALIZACIÓN
1. **Identificar** el criterio modificado
2. **Evaluar** impacto en documentos relacionados
3. **Actualizar** todos los documentos afectados
4. **Verificar** coherencia cruzada
5. **Documentar** cambios en este archivo
6. **Comunicar** a todos los stakeholders

---

## 🔍 VALIDACIONES TÉCNICAS

### 10. CHECKLIST DE COHERENCIA
- [ ] Cantidades en WBS = Cantidades en especificaciones
- [ ] Presupuesto WBS = Presupuesto contrato
- [ ] Planos = Cantidades técnicas
- [ ] Manuales = Procedimientos implementados
- [ ] Normativas = Criterios aplicados

### 11. CRITERIOS DE VALIDACIÓN
| Documento | Validación Requerida |
|-----------|---------------------|
| **WBS** | Suma total = Presupuesto contrato |
| **Especificaciones** | Cantidades = WBS |
| **Planos** | Ubicaciones = Especificaciones |
| **Contratos** | Valores = WBS calculado |

---

## 11.1 Reglas Presupuestales y Tributarias (AIU / IVA) — REGLA CANÓNICA

Fuentes: Estatuto Tributario (Art. 420 y 462‑1), Código de Comercio (Art. 968), Ley 80/1993 (Art. 32.2).

- SUMINISTROS: venta de bienes → IVA 19 % sobre el total. No aplica AIU.
- OBRA CIVIL: AIU = 23 % (Adm) + 5 % (Imprev.) + 5 % (Util) sobre OBRA. IVA 19 % solo sobre Utilidad (5 % de OBRA).
- SERVICIOS: IVA 19 % sobre el total (salvo exclusiones). No aplica AIU.

Fórmulas por capítulo:
```
CD = SUM + OBRA + SERV
AIU = 0.33 × OBRA
IVA = 0.19 × SUM + 0.19 × SERV + 0.19 × (0.05 × OBRA)
TOTAL = CD + AIU + IVA
```

Presentación en actas/desglose: mostrar Administración (23 %), Imprevistos (5 %), Utilidad (5 %) e IVA/Utilidad (19 %) en COP y USD (TRM editable).

Referencias cruzadas:
- HTML: `IX_WBS_Planificacion/WBS_Presupuesto_SCC_APP_La_Dorada_Chiriguaná.html`
- Datos: `IX_WBS_Planificacion/wbs_presupuestal_datos.js`

---

## 📊 MÉTRICAS DE CONTROL

### 12. INDICADORES CLAVE
| Métrica | Valor Objetivo | Estado Actual |
|---------|----------------|---------------|
| **Cobertura TETRA** | 100% corredor | ✅ 37 estaciones (15-20% solapamiento) |
| **Redundancia** | TETRA + Red Vital IP / TETRA | ✅ Implementado |
| **Disponibilidad** | 99.9% | ✅ UPS + Generadores |
| **Senalización** | 100% virtual | ✅ CTC + PTC |

---

## 📝 HISTORIAL DE CAMBIOS

| Versión | Fecha | Cambio | Impacto |
|---------|-------|--------|---------|
| 1.0 | Ene 2025 | Creación inicial | Establecimiento criterios |

---

## 📡 **CRITERIOS DE SOLAPAMIENTO TETRA (ENERO 2025)**

### **INVESTIGACIÓN WEB - ESTÁNDARES DE SOLAPAMIENTO:**

**Resultado de búsqueda:** Aunque no existe un porcentaje de solapamiento universalmente establecido para redes TETRA, la práctica común en telecomunicaciones ferroviarias es usar un **solapamiento del 15-20%** para garantizar cobertura continua.

**Justificación técnica:**
- **15-20% solapamiento** asegura transición fluida entre celdas
- **Minimiza zonas sin cobertura** en el corredor
- **Garantiza transferencias de comunicación** sin interrupciones
- **Estándar en proyectos ferroviarios** de similar envergadura

**Criterio adoptado:** **15-20% de solapamiento** entre estaciones TETRA adyacentes.

---

---

## 📡 **SISTEMA DE REDUNDANCIA SATELITAL (REEMPLAZO Red Vital IP / TETRA)**
El sistema Red Vital IP / TETRA ha sido eliminado de la arquitectura para optimizar el CAPEX. La redundancia de misión crítica se garantiza mediante:
- **TETRA** como radio principal.
- **Fibra Óptica** como backbone.
- **Enlace Satelital Transitorio (Starlink/Similar)** para activación temprana y zonas de sombra.

---

## 📡 **SISTEMA TETRA DETALLADO (ENERO 2025)**

### **1. ARQUITECTURA TETRA:**
```yaml
COBERTURA: 100% del corredor 526.133 km
ESTACIONES: 37 estaciones base TETRA (20 en edificaciones + 17 intermedias)
CRITERIO PRINCIPAL: Una antena por edificación (energía garantizada + respaldo)
SEPARACIÓN: 15-20 km promedio entre estaciones
SOLAPAMIENTO: 15-20% (estándar telecomunicaciones ferroviarias)
ALTURA TORRES: 40 metros estándar (considerando árboles promedio 14m + margen 26m)
REDUNDANCIA: Satelital + Radioenlaces punto a punto
INTEROPERABILIDAD: Compatible con red FENOCO (246 km)
TIERRAS: Propiedad del estado (sin costo de adquisición)
```

### **2. COMPONENTES TETRA POR ESTACIÓN:**
```yaml
INFRAESTRUCTURA POR ESTACIÓN:
- Torre autosoportada 40-60m: 1 unidad
- Estación base TETRA: 1 unidad  
- Antena TETRA: 1 unidad
- UPS/SAI 3kVA: 1 unidad
- Baterías VRLA: 1 unidad
- Radio punto a punto: 2 unidades (enlace)
- Antena parabólica: 2 unidades
- Caseta técnica: 1 unidad (6×4×3m)
- Cimentación: 1 unidad
- Cerramiento: 1 unidad
- Vía de acceso: 1 unidad
- Sistema seguridad: 1 unidad
```

### **3. EQUIPOS EMBARCADOS:**
```yaml
MATERIAL RODANTE:
- Radios TETRA embarcados: 30 unidades (15 locomotoras × 2)
- Antenas embarcadas: 30 unidades
- Radios portátiles: 80 unidades
- Consolas despacho CCO: 3 unidades
- Sistema control centralizado: 1 sistema
```

### **4. RADIOENLACES BACKUP:**
```yaml
TOPOLOGÍA: Red punto a punto 1GB
CAPACIDAD: 650MB efectivos por enlace
CANTIDAD: 74 radios (37 sitios × 2)
COBERTURA: Backup para fibra óptica
FREQUENCIA: 6 GHz / 11 GHz / 18 GHz
```

### **5. COSTOS TETRA POR COMPONENTE (OPTIMIZADOS):**
| Componente | Cantidad | Costo Unitario | Costo Total | Justificación |
|------------|----------|----------------|-------------|---------------|
| **Torres autosoportadas** | 37 | $180,000,000 | $6,660,000,000 | Optimizado: Torres estándar 40m |
| **Estaciones base TETRA** | 37 | $65,000,000 | $2,405,000,000 | Optimizado: Equipos estándar |
| **Antenas TETRA** | 37 | $12,000,000 | $444,000,000 | Optimizado: Antenas estándar |
| **UPS/SAI 3kVA** | 37 | $20,000,000 | $740,000,000 | Optimizado: UPS estándar |
| **Baterías VRLA** | 37 | $10,000,000 | $370,000,000 | Optimizado: Baterías estándar |
| **Radios punto a punto** | 74 | $45,000,000 | $3,330,000,000 | **OPTIMIZADO: Costos reales mercado** |
| **Antenas parabólicas** | 74 | $15,000,000 | $1,110,000,000 | Optimizado: Antenas estándar |
| **Radios embarcados (15 locomotoras × 2)** | 30 | $35,000,000 | $1,050,000,000 | Optimizado: Radios estándar |
| **Antenas embarcadas** | 30 | $6,000,000 | $180,000,000 | Optimizado: Antenas estándar |
| **Radios portátiles** | 80 | $6,000,000 | $480,000,000 | Optimizado: Radios estándar |
| **Consolas despacho** | 3 | $60,000,000 | $180,000,000 | Optimizado: Consolas estándar |
| **Sistema control** | 1 | $120,000,000 | $120,000,000 | Optimizado: Sistema estándar |
| **Repuestos (10%)** | - | - | $1,207,000,000 | Recalculado sobre nuevo total |
| **SUBTOTAL SUMINISTROS** | - | - | $18,276,000,000 | **OPTIMIZADO: $4,155,455 USD** |

### **6. OBRA CIVIL TETRA:**
| Componente | Cantidad | Costo Unitario | Costo Total |
|------------|----------|----------------|-------------|
| **Casetas técnicas** | 37 | $65,000,000 | $2,405,000,000 |
| **Cimentaciones torres** | 37 | $25,000,000 | $925,000,000 |
| **Cerramiento perimetral** | 37 | $30,000,000 | $1,110,000,000 |
| **Vías de acceso** | 37 | $25,000,000 | $925,000,000 |
| **Sistemas de seguridad** | 37 | $20,000,000 | $740,000,000 |
| **SUBTOTAL OBRA CIVIL** | - | - | $6,105,000,000 |

### **7. SERVICIOS TETRA:**
| Componente | Cantidad | Costo Unitario | Costo Total |
|------------|----------|----------------|-------------|
| **Montaje torres** | 37 | $15,000,000 | $555,000,000 |
| **Instalación equipos** | 37 | $12,000,000 | $444,000,000 |
| **Configuración red** | 1 | $200,000,000 | $200,000,000 |
| **Pruebas cobertura** | 1 | $150,000,000 | $150,000,000 |
| **Capacitación** | 1 | $100,000,000 | $100,000,000 |
| **SUBTOTAL SERVICIOS** | - | - | $1,449,000,000 |

### **8. TOTAL SISTEMA TETRA (OPTIMIZADO):**
```yaml
SUMINISTROS: $18,276,000,000 COP
OBRA CIVIL: $6,105,000,000 COP  
SERVICIOS: $1,449,000,000 COP
TOTAL TETRA: $25,830,000,000 COP
TOTAL USD: $5,870,455 USD (TRM 4,400)
RANGO OBJETIVO: $5,000,000 - $7,000,000 USD ✅ (DENTRO DEL RANGO)
```

### **9. CRITERIOS TÉCNICOS TETRA:**
```yaml
COBERTURA: 100% corredor con solapamiento 15-20% (estándar ferroviario)
FRECUENCIA: Banda TETRA estándar
POTENCIA: Máxima permitida por normativa
INTERFERENCIAS: Análisis RF obligatorio
ANTENAS: Doble polarización (vertical + horizontal)
REDUNDANCIA: Doble vía (fibra + radio)
BACKUP: Satelital para enlaces críticos
INTEROPERABILIDAD: Compatible FENOCO
SEGURIDAD: Encriptación AES-256
CALIDAD: QoS clase 1 (voz crítica)
SOLAPAMIENTO: 15-20% según mejores prácticas telecomunicaciones ferroviarias
```

---

## 🚂 **SISTEMA EOT (END OF TRAIN) DETALLADO (ENERO 2025)**

### **1. DEFINICIÓN EOT:**
```yaml
SISTEMA EOT: End of Train Device (Dispositivo Cola de Tren)
FUNCIÓN: Monitoreo y comunicación desde último vagón
ALCANCE: 15 locomotoras con 15 dispositivos EOT
TECNOLOGÍA: Comunicación inalámbrica con locomotora
```

### **2. COMPONENTES EOT:**
```yaml
POR LOCOMOTORA:
- Dispositivo EOT principal: 1 unidad
- Antena EOT: 1 unidad
- Batería EOT: 1 unidad
- Sensor presión frenos: 1 unidad
- Sensor integridad tren: 1 unidad
- Radio comunicación: 1 unidad
```

### **3. FUNCIONALIDADES EOT:**
```yaml
MONITOREO:
- Presión de frenos en cola
- Integridad del tren (separación vagones)
- Posición GPS del final del tren
- Estado de iluminación cola

COMUNICACIÓN:
- Enlace inalámbrico con locomotora
- Transmisión datos en tiempo real
- Alarma de emergencia automática
- Status de batería y funcionamiento
```

### **4. COSTOS EOT:**
| Componente | Cantidad | Costo Unitario | Costo Total |
|------------|----------|----------------|-------------|
| **Dispositivos EOT completos** | 15 | $25,000,000 | $375,000,000 |
| **Repuestos EOT (10%)** | 2 | $25,000,000 | $50,000,000 |
| **Instalación EOT** | 15 | $5,000,000 | $75,000,000 |
| **Configuración EOT** | 1 | $20,000,000 | $20,000,000 |
| **TOTAL EOT** | - | - | **$520,000,000** |
| **TOTAL USD** | - | - | **$118,182 USD** |

### **5. INTEGRACIÓN CON PTC/PTC:**
```yaml
INTERFAZ PTC/PTC:
- Datos EOT integrados en sistema PTC
- Validación integridad tren en tiempo real
- Alarma automática por separación
- Registro de eventos EOT en PTC

COMUNICACIÓN:
- Protocolo: Inalámbrico dedicado
- Frecuencia: Banda ISM 2.4 GHz
- Alcance: Hasta 2 km (trenes largos)
- Redundancia: Doble vía (TETRA + Red Vital IP / TETRA)
```

---

## 🚂 **INTEROPERABILIDAD FENOCO (STOP & SWITCH)**

### **⚖️ ESTRATEGIA OPERACIONAL (DBCD)**
La interoperabilidad con FENOCO se gestiona exclusivamente a nivel **operacional** para garantizar la seguridad y proteger el CAPEX del proyecto.

1. **Punto de Intercambio:** Estación Chiriguaná (Frontera técnica).
2. **Método de Control:** Stop & Switch.
3. **Equipamiento:** 
   - Las locomotoras LFC cuentan con un Computador de Abordo (OBC) compatible con reglas FRA 236.
   - La transición se realiza mediante comunicación por radio TETRA y cumplimiento de reglamentos operativos de FENOCO.
4. **NO Deep Integration:** Se elimina cualquier requisito de Gateways técnicos, PTC Alstom o integración de bases de datos propietarias.

### **📊 COSTOS OBC (15 LOCOMOTORAS PTC/FRA)**
| Item | Descripción | Cant/Loco | VU (COP) | Total 15 Locos |
|------|-------------|-----------|----------|----------------|
| **4.1.100** | Computador de Abordo (OBC) PTC | 1 sistema | $80M | $1,200M |
| **4.1.101** | Pantalla de Diagnóstico (DMI) | 1 | $35M | $525M |
| **4.1.102** | Sensor de Posicionamiento (GPS/IMU) | 2 | $8M | $240M |
| **4.1.103** | Radio TETRA Embarcada | 2 | $45M | $1,350M |
| **4.1.104** | Interface frenos (Válvula Vital) | 1 | $25M | $375M |
| **4.1.105** | Registrador de Eventos (EOR) | 1 | $18M | $270M |
| **4.1.106** | Switch selector de Modo Operacional | 1 | $5M | $75M |
| **SUBTOTAL EQUIPAMIENTO LOCOMOTORAS** | - | - | **$4,035M COP** |

### **🎯 PRINCIPIO DE RECIPROCIDAD**
1. **Locomotoras LFC en FENOCO:** Reglas operativas FENOCO + Radio TETRA.
2. **Locomotoras FENOCO en LFC:** Reglas PTC LFC + Interface en Chiriguaná.
3. **Costo:** Cada concesionario asume el equipamiento de su propia flota.

---

## 🔗 **SISTEMA DE REFERENCIAS CRUZADAS**

### **DOCUMENTOS MAESTROS DE COHERENCIA:**
- **MATRIZ_TRAZABILIDAD_TECNICA_v1.0.md** - Referencias cruzadas obligatorias
- **PROCEDIMIENTOS_COHERENCIA_TECNICA_v1.0.md** - Protocolo de actualización
- **FLUJO_REFERENCIAS_CRUZADAS_FIBRA_OPTICA.md** - Ejemplo detallado de propagación

### **PROPAGACIÓN AUTOMÁTICA REQUERIDA:**
| Cambio en Criterios | Documentos Afectados | Responsable |
|---------------------|---------------------|-------------|
| **Fibra Óptica** | WBS, Ing. Conceptual, Ing. Básica, Ing. Detalle | Ing. Contractual |
| **TETRA** | WBS, 27_, V.3_, Planos | Ing. Telecomunicaciones |
| **Senalización** | WBS, 29_, V.1_, V.2_ | Ing. Senalización |
| **CCTV** | WBS, 31_, V.5_ | Ing. Seguridad |
| **Eléctrico** | WBS, V.4_, Planos eléctricos | Ing. Eléctrica |

---

## ⚠️ ADVERTENCIAS IMPORTANTES

1. **NO modificar** cantidades sin actualizar documentos relacionados
2. **SIEMPRE verificar** coherencia cruzada después de cambios
3. **DOCUMENTAR** todos los cambios en este archivo
4. **COMUNICAR** modificaciones a todos los equipos
5. **SEGUIR PROCEDIMIENTOS** de coherencia técnica obligatorios

---

## 📞 CONTACTOS DE REFERENCIA

- **Ingeniería Técnica:** [Equipo técnico]
- **Gestión de Proyecto:** [PMO]
- **Contratos:** [Equipo legal]
- **Presupuesto:** [Equipo financiero]

---

**Este documento es VIVO y debe actualizarse cada vez que se modifiquen criterios técnicos del proyecto.**
