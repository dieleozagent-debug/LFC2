# WBS PRESUPUESTAL AMPLIADA v3.0
## Con Criterios Técnicos y Riesgos Integrados

**Proyecto:** APP La Dorada-Chiriguaná  
**Fecha:** 7 de Octubre de 2025  
**Versión:** 3.0 (Ampliada con trazabilidad)  
**Novedad:** Columnas de Criterio Técnico + Riesgos + DT  

---

## ð¯ **NUEVA ESTRUCTURA AMPLIADA**

### **Columnas adicionales agregadas:**
1. **Criterio Técnico:** Por qué esa cantidad/especificación
2. **Riesgos Asociados:** IDs de riesgos vinculados (R-XXX-NNN)
3. **Origen DT:** Decisión Técnica que definió este valor (DT-XXX-NNN)
4. **Modificable:** Sí/No (¿Se puede cambiar sin impacto contractual?)

---

## ð **EJEMPLO: CAPÍTULO 2.3 FIBRA ÓPTICA (AMPLIADO)**

| Item | Descripción | Cantidad | VU (COP) | Total (COP) | **Criterio Técnico** | **Riesgos** | **Origen DT** | **Modificable** |
|:-----|:------------|:---------|:---------|:------------|:--------------------|:------------|:--------------|:----------------|
| **2.3.100** | Cable fibra óptica 48 fibras | 526 km | $9,811,013 | $5,827,741,722 | Longitud corredor + 10% reserva | R-FIBRA-001 | N/A | â No (contractual) |
| **2.3.101** | Mano de obra instalación | 526 km | $90,188,987 | $53,572,258,278 | 1:1 con longitud cable | R-CONST-015 | N/A | â No (linked a 2.3.100) |
| **2.3.102** | Tritubo 40mm | 1,485 rollos | $15,845 | $23,529,825 | 2.5 rollos/km (400m/rollo) | R-FIBRA-002 | N/A | â ï¸ Condicional |
| **2.3.103** | **Cajas empalme 80x80** | **2,068 unidades** | **$1,350,000** | **$2,791,800,000** | **UIT-T: 300m estándar + 88 nodos críticos** | **R-FIBRA-003, R-FIBRA-006** | **N/A** | **â Sí** â­ |
| **2.3.104** | Uniones rápidas | 6,204 unidades | $35,000 | $217,140,000 | 3 uniones/caja Ã 2,068 cajas | R-FIBRA-004 | Linked a 2.3.103 | â Sí (si cambian cajas) |
| **2.3.105** | Fusionadoras | 2 unidades | $50,000,000 | $100,000,000 | 1 por cuadrilla (2 cuadrillas) | R-EQUIP-001 | N/A | â ï¸ Condicional |
| **2.3.106** | OTDR | 2 unidades | $30,000,000 | $60,000,000 | 1 por cuadrilla + backup | R-EQUIP-002 | N/A | â No (mínimo técnico) |

**SUBTOTAL:** $70,016,367,851

---

## ð **DETALLES DEL ÍTEM 2.3.103 (Cajas de empalme)**

### **ð Ficha Técnica Ampliada:**

| Campo | Valor | Fuente/Referencia |
|:------|:------|:-----------------|
| **Código WBS** | 2.3.103 | - |
| **Descripción** | Cajas empalme 80x80 IP68 | Especificación técnica |
| **Cantidad actual** | 2,068 unidades | Cálculo: 594,000m Ã· 300m + 88 nodos |
| **Precio unitario** | $1,350,000 COP | Cotización proveedor 2025 |
| **Costo total** | $2,791,800,000 COP | 2,068 Ã $1,350,000 |

### **ð¯ Criterio Técnico:**
```
NORMA: UIT-T G.652.D - Espaciamiento máximo 500m
APLICADO: 300m (más conservador)
JUSTIFICACIÓN:
- Facilitar localización de fallas
- Acceso a fusiones sin equipo especializado
- Redundancia en nodos críticos (+88 cajas)
- Estándar ferroviario internacional

FUENTE: 
- Documento: III/28_Sistema_FibraOptica_Integrado.md (Sección 2.2)
- Criterio: CRITERIOS_TECNICOS_MAESTRO_v1.0.md (Fibra Óptica)
```

### **â ï¸ Riesgos Asociados:**
| ID | Descripción | Prob | Impacto | Estrategia | Verificación |
|:---|:------------|:-----|:--------|:-----------|:-------------|
| **R-FIBRA-003** | Espaciamiento muy corto aumenta CAPEX | Media | Alto | **Analizar 500m-1000m** | DT-FIBRA-001 |
| **R-FIBRA-006** | Reducir cajas puede aumentar tiempo localización fallas | Baja | Medio | Aceptar si > 500m | Post-implementación |
| **R-FIBRA-008** | Acceso a cajas cada 300m dificulta mantenimiento vehicular | Media | Medio | **Considerar 500m-1000m** | DT-FIBRA-001 |

### **ð Modificabilidad:**
```
â MODIFICABLE: Sí

CONDICIONES:
- Respetar norma UIT-T (máximo 500m sin validación especial)
- Si > 500m requiere validación OTDR
- Mantener 88 cajas en nodos críticos (no reducibles)

PROCESO DE CAMBIO:
1. Especialista propone cambio
2. Generar DT-FIBRA-001 automáticamente
3. Calcular alternativas (300m, 500m, 1000m)
4. Analizar riesgos de cada alternativa
5. PMO aprueba
6. Actualizar WBS + documentos relacionados
```

---

## ð **TEMPLATE DE INPUT PARA USUARIO FINAL**

### **Caja de Observación del Especialista:**

```markdown
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
â  ð OBSERVACIÓN TÉCNICA - ÍTEM WBS 2.3.103                â
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ¤
â                                                            â
â  Especialista: Ing. Carlos Méndez (Fibra Óptica)          â
â  Fecha: 7/10/2025                                          â
â                                                            â
â  ÍTEM ACTUAL:                                              â
â  - Descripción: Cajas empalme 80x80                        â
â  - Cantidad: 2,068 unidades                                â
â  - Espaciamiento: 300m                                     â
â  - Costo: $2,791,800,000 COP                              â
â  - Criterio: UIT-T 300m estándar                          â
â  - Riesgos: R-FIBRA-003, R-FIBRA-006, R-FIBRA-008        â
â                                                            â
â  OBSERVACIÓN/PROPUESTA:                                    â
â  ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ â
â  â "Sugiero cambiar espaciamiento a 500m (en vez de    â â
â  â  300m) para facilitar acceso vehicular y reducir     â â
â  â  costos de instalación. Mantener cumplimiento UIT-T."â â
â  ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ â
â                                                            â
â  [Generar Análisis de Alternativas] â BOTÓN              â
â                                                            â
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
```

---

## ð¤ **OUTPUT AUTOMÁTICO DEL SISTEMA**

### **El sistema genera:**

```markdown
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
â  ð¬ ANÁLISIS DE ALTERNATIVAS - DT-FIBRA-001               â
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ¤
â                                                            â
â  ALTERNATIVAS GENERADAS AUTOMÁTICAMENTE:                   â
â                                                            â
â  ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ â
â  â ALTERNATIVA 1: MANTENER 300m (ACTUAL)               â â
â  â - Cantidad: 2,068 cajas                              â â
â  â - Costo: $2,791,800,000 COP                          â â
â  â - Ventajas: Cumple norma, fácil localización fallas  â â
â  â - Desventajas: Alto CAPEX, difícil acceso vehicular  â â
â  â - Riesgos: R-FIBRA-003 (Alto CAPEX)                  â â
â  â - Puntaje: 7.2/10                                    â â
â  ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ â
â                                                            â
â  ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ â
â  â ALTERNATIVA 2: CAMBIAR A 500m (PROPUESTA) â­         â â
â  â - Cantidad: 1,188 cajas (594,000m Ã· 500m)            â â
â  â - Costo: $1,603,800,000 COP                          â â
â  â - AHORRO: $1,188,000,000 COP (42.5%)                 â â
â  â - Ventajas: Cumple UIT-T, reduce costos, mejor      â â
â  â   acceso vehicular                                    â â
â  â - Desventajas: Más tiempo localizar fallas           â â
â  â - Riesgos: R-FIBRA-006 (Localización fallas +30%)   â â
â  â - Puntaje: 8.5/10 â­ RECOMENDADO                     â â
â  ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ â
â                                                            â
â  ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ â
â  â ALTERNATIVA 3: CAMBIAR A 1000m (AGRESIVA)           â â
â  â - Cantidad: 594 cajas (594,000m Ã· 1000m)             â â
â  â - Costo: $801,900,000 COP                            â â
â  â - AHORRO: $1,989,900,000 COP (71.3%)                 â â
â  â - Ventajas: Máximo ahorro, mínimas cajas             â â
â  â - Desventajas: Requiere validación OTDR especial,    â â
â  â   dificulta localización de fallas                    â â
â  â - Riesgos: R-FIBRA-006 (Alto), R-FIBRA-007 (Medio)  â â
â  â - Puntaje: 6.8/10 (riesgoso)                         â â
â  ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ â
â                                                            â
â  IMPACTO EN OTROS ÍTEMS:                                   â
â  - 2.3.104 Uniones rápidas: 6,204 â 3,564 (-42.5%)        â
â  - 2.3.108 Insumos fusionado: 6,600 â 3,780 (-42.7%)      â
â  - AHORRO TOTAL CAPÍTULO: ~$1,500,000,000 COP             â
â                                                            â
â  ARCHIVOS QUE SE ACTUALIZARÍAN:                            â
â  (Consulta automática a MATRIZ_DEPENDENCIAS)               â
â  - V.3_Sistemas_Comunicacion_Detalle.md (Cantidades)      â
â  - IV/37_Memorias_Diseno_Basico.md (Especificaciones)     â
â  - III/28_Sistema_FibraOptica_Integrado.md (Criterios)    â
â  - WBS_Presupuestal_v3.0.md (Costos)                      â
â                                                            â
â  [â Rechazar] [â ï¸ Más Análisis] [â Aprobar Alt. 2]      â
â                                                            â
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
```

---

## ð **SECCIÓN AMPLIADA: CAPÍTULO 2.3 - FIBRA ÓPTICA**

### **2.3.103 - Cajas de Empalme (ÍTEM CLAVE)**

| Item | Descripción | Cant | VU | Total | **Criterio Técnico** | **Riesgos** | **DT** | **Mod** | **ð** |
|:-----|:------------|:-----|:---|:------|:--------------------|:------------|:-------|:--------|:------|
| 2.3.103 | Cajas empalme 80x80 | 2,068 | $1,350,000 | $2,791,800,000 | **UIT-T: 300m estándar. Cálculo: 594,000mÃ·300m=1,980 + 88 nodos críticos** | **R-FIBRA-003** (CAPEX alto), **R-FIBRA-006** (Si reduce â fallas), **R-FIBRA-008** (Acceso vehicular) | N/A | â **Sí** | **[Proponer cambio]** â­ |

**ð Columna "Proponer cambio":** Al hacer click genera interfaz de observación

---

## ð **INTERFAZ DE PROPUESTA DE CAMBIO (Generada automáticamente)**

### **Al hacer click en [Proponer cambio] de ítem 2.3.103:**

```yaml
SISTEMA GENERA AUTOMÁTICAMENTE:

ARCHIVO: DT-FIBRA-001_Espaciamiento_Cajas_v1.0.md
UBICACIÓN: II/Decisiones_Tecnicas/

CONTENIDO AUTO-GENERADO:

# DECISIÓN TÉCNICA - DT-FIBRA-001

## 1. CONTEXTO (Auto-poblado del WBS)
Sistema: Fibra Óptica
Componente: Cajas de empalme
Ítem WBS: 2.3.103
Valor actual: 2,068 cajas (cada 300m)
Costo actual: $2,791,800,000 COP
Criterio actual: UIT-T 300m estándar
Riesgos actuales: R-FIBRA-003, R-FIBRA-006, R-FIBRA-008

## 2. OBSERVACIÓN DEL USUARIO
Fecha: 7/10/2025
Especialista: Ing. Carlos Méndez
Propuesta: "Cambiar espaciamiento a 500m para mejor acceso vehicular"

## 3. ALTERNATIVAS (Auto-calculadas)

ALTERNATIVA 1: MANTENER 300m
- Cantidad: 2,068 cajas
- Costo: $2,791,800,000 COP
- Ventajas: Cumple norma estricta, fácil localización
- Desventajas: Alto CAPEX, difícil acceso
- Riesgos: R-FIBRA-003 (CAPEX alto)

ALTERNATIVA 2: CAMBIAR A 500m â­
- Cantidad: 1,188 cajas (594,000Ã·500)
- Costo: $1,603,800,000 COP
- AHORRO: $1,188,000,000 COP (42.5%)
- Ventajas: Cumple UIT-T, mejor acceso, reduce costos
- Desventajas: +66% distancia entre cajas
- Riesgos NUEVOS: R-FIBRA-006 aumenta a Media

ALTERNATIVA 3: CAMBIAR A 1000m
- Cantidad: 594 cajas
- Costo: $801,900,000 COP
- AHORRO: $1,989,900,000 COP (71%)
- Ventajas: Máximo ahorro
- Desventajas: Requiere validación especial, riesgos altos
- Riesgos NUEVOS: R-FIBRA-006 (Alto), R-FIBRA-007 (Nuevo)

## 4. IMPACTO EN OTROS ÍTEMS (Auto-calculado)
2.3.104 Uniones: 6,204 â 3,564 (-$92,400,000)
2.3.108 Insumos: 6,600 â 3,780 (-$42,300,000)
AHORRO TOTAL: ~$1,322,700,000 COP

## 5. ARCHIVOS AFECTADOS (Auto-consultado MATRIZ_DEPENDENCIAS)
- V.3_Sistemas_Comunicacion_Detalle.md (Tabla 5.3)
- WBS_Presupuestal (Items 2.3.103, 2.3.104, 2.3.108)
- IV/37_Memorias_Diseno_Basico.md (Sección 4.2.3)
- III/28_Sistema_FibraOptica_Integrado.md (Sección 2.2)

## 6. RECOMENDACIÓN AUTO-GENERADA
RECOMENDACIÓN: â APROBAR ALTERNATIVA 2 (500m)
PUNTAJE: 8.5/10
RAZÓN: Balance óptimo entre ahorro (42.5%) y riesgo técnico aceptable

[â Rechazar] [ð Ajustar Análisis] [â Aprobar y Ejecutar]
```

---

## ð¯ **FLUJO INTEGRADO COMPLETO**

### **PASO 1: Usuario revisa WBS**
```
Especialista abre: WBS_Presupuestal_AMPLIADA_v3.0.md
Ve ítem 2.3.103: 2,068 cajas a 300m = $2,791M
Ve criterio: "UIT-T 300m estándar"
Ve riesgos: R-FIBRA-003 (CAPEX alto)
```

### **PASO 2: Usuario hace observación**
```
Click en [Proponer cambio]
Sistema muestra interfaz
Usuario escribe: "Sugiero 500m en vez de 300m"
```

### **PASO 3: Sistema genera DT automática**
```
Sistema crea: DT-FIBRA-001_v1.0.md
Consulta: MATRIZ_DEPENDENCIAS
Calcula: 3 alternativas (300m, 500m, 1000m)
Identifica: Archivos afectados (5)
Calcula: Impacto económico de cada alternativa
Genera: Análisis de riesgos por alternativa
Recomienda: Alternativa 2 (500m) - Puntaje 8.5/10
```

### **PASO 4: Usuario revisa alternativas**
```
Usuario ve tabla comparativa:
- Alt 1: $2,791M (actual)
- Alt 2: $1,603M (ahorro $1,188M) â­ 
- Alt 3: $801M (ahorro $1,989M pero riesgoso)

Usuario ve riesgos de cada opción
Usuario ve archivos que se actualizarían
```

### **PASO 5: Usuario aprueba**
```
Usuario: â "Aprobar Alternativa 2"
Sistema: "¿Confirmas ejecutar cambio en 5 archivos?"
Usuario: â "Sí, ejecutar"
```

### **PASO 6: Sistema ejecuta (Cursor Agent)**
```
Cursor actualiza automáticamente:
1. V.3_Comunicacion: "300m" â "500m", "2,068" â "1,188"
2. WBS: Recalcula costos (items 2.3.103, 104, 108)
3. IV/37_Memorias: Especificación "500m"
4. III/28_FibraOptica: Criterio "500m"

Cursor versiona archivos: v1.0 â v1.1
Cursor documenta: "Origen: DT-FIBRA-001 v2.0"
Cursor agrega riesgos actualizados a matriz

Tiempo: ~10 minutos automatizado
```

### **PASO 7: Sistema confirma**
```
â CAMBIO IMPLEMENTADO

ARCHIVOS ACTUALIZADOS (4):
- V.3_Sistemas_Comunicacion_Detalle.md â v2.1
- WBS_Presupuestal_v3.0.md â Items recalculados
- IV/37_Memorias_Diseno_Basico.md â v5.1
- III/28_Sistema_FibraOptica_Integrado.md â v5.1

AHORRO REALIZADO:
- CAPEX: $1,322,700,000 COP
- Reducción: 42.5% en cajas

RIESGOS ACTUALIZADOS:
- R-FIBRA-006: Cerrado (espaciamiento 500m aceptable)
- R-FIBRA-008: Mitigado (mejor acceso vehicular)

DECISIÓN TÉCNICA:
- DT-FIBRA-001 v2.0 (Aprobada y ejecutada)
- Guardada en: II/Decisiones_Tecnicas/

[Descargar reporte PDF] [Ver cambios detallados]
```

---

## ð **ARCHIVO A CREAR: WBS_AMPLIADA con Formulario Integrado**

**Necesitamos crear:**
```html
WBS_Presupuestal_INTERACTIVA_v3.0.html

Características:
- Tabla WBS con columnas ampliadas
- Botón [Proponer cambio] en ítems modificables
- Form para capturar observación del especialista
- Generación automática de DT
- Cálculo automático de alternativas
- Interfaz de aprobación
- Ejecución automática con Cursor
```

---

## ð¯ **RESUMEN: LO QUE FALTA CREAR**

### **1. WBS Ampliada (Markdown):**
â Ya tenemos datos
â Falta agregar columnas: Criterio, Riesgos, DT, Modificable

### **2. Interfaz HTML Interactiva:**
â Crear: `WBS_Presupuestal_INTERACTIVA_v3.0.html`
Con:
- Formulario de observaciones
- Generador automático de DT
- Calculadora de alternativas
- Integración con Cursor API

### **3. Script de Integración:**
â Crear: `generar_DT_desde_WBS.ps1`
Que:
- Lee observación del especialista
- Consulta MATRIZ_DEPENDENCIAS
- Genera DT-XXX-001_v1.0.md
- Calcula alternativas
- Presenta para aprobación

---

## ð **¿QUIERES QUE CREE ESTO AHORA?**

**Puedo crear:**

1. **WBS_Presupuestal_AMPLIADA_v3.0.md** - WBS con columnas adicionales
2. **TEMPLATE_Formulario_Observacion_WBS.html** - Interfaz para capturar observaciones
3. **PROCESO_Integracion_WBS_DT.md** - Documentación del flujo integrado

**Esto te daría:**
- â WBS que muestra criterios y riesgos
- â Interfaz para que especialista proponga cambios
- â Generación automática de DT con alternativas
- â Proceso end-to-end documentado

**¿Procedo?**
