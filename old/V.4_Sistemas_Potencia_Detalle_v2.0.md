# V.4 Sistemas de Potencia v2.0 - ALIMENTACIÓN TORRES COLOCALIZADAS
## APP La Dorada - Chiriguaná

**Fecha de actualización:** Enero 2025  
**Proyecto:** APP La Dorada - Chiriguaná  
**Contrato:** Concesión No. 001 de 2025  
**Versión:** 2.0  
**Estado:** ✅ **ACTUALIZADO - ALIMENTACIÓN TORRES COLOCALIZADAS**

---

## 🚨 **ACTUALIZACIÓN CRÍTICA v2.0 - ALIMENTACIÓN TORRES COLOCALIZADAS**

### **📋 CAMBIO DE PARADIGMA COMPLETO:**

#### **🔴 FILOSOFÍA ANTERIOR (ELIMINADA):**
- **❌ PTC PTC Virtual (FRA 236):** Sistema tradicional con Servidor PTC Central → **PTC embarcado** (Sin Servidor PTC Central)
- **❌ Cobertura:** 146 km → **526.133 km** (Corredor completo)
- **❌ Torres:** 33 torres → **37 torres colocalizadas** (TETRA + Red Vital IP / TETRA)
- **❌ Alimentación:** Sistema independiente → **Alimentación colocalizada**

#### **✅ FILOSOFÍA NUEVA (IMPLEMENTADA):**
- **✅ PTC Embarcado:** Sistema en 15 locomotoras (sin Servidor PTC Central)
- **✅ Torres Colocalizadas:** 37 torres para TETRA + Red Vital IP / TETRA
- **✅ Alimentación Colocalizada:** Sistema dual para torres compartidas
- **✅ CTC Virtual:** Centro de control centralizado
- **✅ Redundancia:** Doble sistema de alimentación

---

## 1. Resumen Ejecutivo

Este documento detalla la ingeniería de los **sistemas de potencia para torres colocalizadas** para el proyecto APP La Dorada-Chiriguaná, basado en **alimentación dual para TETRA + Red Vital IP / TETRA colocalizados** en 37 torres con redundancia operacional.

### 1.1 Alcance del Sistema de Potencia Colocalizada
- **Sistema principal:** Alimentación eléctrica ferroviaria para torres colocalizadas
- **Componentes:** Subestaciones, transformadores, UPS, generadores, protecciones, alimentación torres
- **Cobertura:** 526.133 km de vía, 37 torres colocalizadas, 5 estaciones ENCE
- **Capacidad:** 18 MVA total, 0.5 MVA por torre colocalizada

### 1.2 Objetivos del Sistema Colocalizado
- **Alimentación confiable:** 99.95% de disponibilidad para torres colocalizadas
- **Calidad de energía:** THD < 5%, regulación de voltaje ±2%
- **Protección:** Coordinación de protecciones, selectividad
- **Eficiencia:** Factor de potencia > 0.95, pérdidas < 3%
- **Seguridad:** Cumplimiento EN 50126/50128/50129

---

## 2. Arquitectura del Sistema Colocalizado

### 2.1 Arquitectura General Colocalizada
```
┌─────────────────────────────────────────────────────────────┐
│                SISTEMAS DE POTENCIA COLOCALIZADOS          │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │Subestación  │  │Subestación  │  │Subestación  │         │
│  │ Principal   │  │ Secundaria  │  │  Respaldo   │         │
│  │ (La Dorada) │  │(Puerto Salgar)│ │(Puerto Berrío)│     │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │Transformador│  │Transformador│  │Transformador│         │
│  │  Principal  │  │ Secundario  │  │  Respaldo   │         │
│  │   (8 MVA)   │  │   (5 MVA)   │  │   (3 MVA)   │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │     UPS     │  │  Generador  │  │  Protección │         │
│  │  (1 MVA)    │  │  (2 MVA)    │  │  (Relés)    │         │
│  │             │  │             │  │             │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Torre 1   │  │   Torre 2   │  │   Torre 3   │         │
│  │ TETRA+Red Vital IP / TETRA │  │ TETRA+Red Vital IP / TETRA │  │ TETRA+Red Vital IP / TETRA │         │
│  │ (0.5 MVA)   │  │ (0.5 MVA)   │  │ (0.5 MVA)   │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ 37 Torres Colocalizadas
                              │ (TETRA + Red Vital IP / TETRA)
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    PTC EMBARCADO (15 LOCOMOTORAS)           │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ Radio TETRA │  │ Radio Red Vital IP / TETRA │  │   Display   │         │
│  │  Embarcado  │  │  Embarcado  │  │  Maquinista │         │
│  │ (Redundante)│  │ (Principal) │  │  (Virtual)  │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Componentes Principales Colocalizados

#### 2.2.1 Subestaciones Colocalizadas
- **Subestación Principal:** La Dorada (8 MVA)
- **Subestación Secundaria:** Puerto Salgar (5 MVA)
- **Subestación Respaldo:** Puerto Berrío (3 MVA)
- **Subestaciones Auxiliares:** Puerto Nare, Chiriguaná (1 MVA cada una)

#### 2.2.2 Transformadores Colocalizados
- **Transformador Principal:** 8 MVA, 34.5/13.8 kV
- **Transformador Secundario:** 5 MVA, 13.8/0.48 kV
- **Transformador Respaldo:** 3 MVA, 13.8/0.48 kV
- **Transformadores Auxiliares:** 1 MVA, 13.8/0.48 kV

#### 2.2.3 Sistemas de Respaldo Colocalizados
- **UPS:** 1 MVA, 30 minutos de autonomía
- **Generadores:** 2 MVA, 12 horas de autonomía
- **Baterías:** 2000 Ah, 48 V DC
- **Inversores:** 200 kVA, 48 V DC / 480 V AC

#### 2.2.4 Alimentación Torres Colocalizadas (37 Torres)
- **Potencia por Torre:** 0.5 MVA (TETRA + Red Vital IP / TETRA)
- **Voltaje:** 480 V AC, 3 fases
- **Redundancia:** N+1 con transferencia automática
- **Protección:** Relés digitales SEL-751A

---

## 3. Especificaciones Técnicas Colocalizadas

### 3.1 Subestaciones Colocalizadas

#### 3.1.1 Subestación Principal (La Dorada)
- **Potencia:** 8 MVA
- **Voltaje:** 34.5/13.8 kV
- **Transformador:** 8 MVA, 34.5/13.8 kV, Dyn11
- **Protecciones:** Relés digitales SEL-751A
- **Interruptores:** SF6, 34.5 kV, 1000 A
- **Seccionadores:** Motorizados, 34.5 kV

#### 3.1.2 Subestación Secundaria (Puerto Salgar)
- **Potencia:** 5 MVA
- **Voltaje:** 13.8/0.48 kV
- **Transformador:** 5 MVA, 13.8/0.48 kV, Dyn11
- **Protecciones:** Relés digitales SEL-751A
- **Interruptores:** SF6, 13.8 kV, 600 A
- **Seccionadores:** Motorizados, 13.8 kV

#### 3.1.3 Subestación Respaldo (Puerto Berrío)
- **Potencia:** 3 MVA
- **Voltaje:** 13.8/0.48 kV
- **Transformador:** 3 MVA, 13.8/0.48 kV, Dyn11
- **Protecciones:** Relés digitales SEL-751A
- **Interruptores:** SF6, 13.8 kV, 400 A
- **Seccionadores:** Motorizados, 13.8 kV

### 3.2 Transformadores Colocalizados

#### 3.2.1 Transformador Principal
- **Potencia:** 8 MVA
- **Voltaje:** 34.5/13.8 kV
- **Conexión:** Dyn11
- **Refrigeración:** ONAN (aceite natural)
- **Temperatura:** 65°C (aceite), 80°C (devanados)
- **Eficiencia:** 99.3% a plena carga

#### 3.2.2 Transformador Secundario
- **Potencia:** 5 MVA
- **Voltaje:** 13.8/0.48 kV
- **Conexión:** Dyn11
- **Refrigeración:** ONAN (aceite natural)
- **Temperatura:** 65°C (aceite), 80°C (devanados)
- **Eficiencia:** 99.1% a plena carga

#### 3.2.3 Transformador Respaldo
- **Potencia:** 3 MVA
- **Voltaje:** 13.8/0.48 kV
- **Conexión:** Dyn11
- **Refrigeración:** ONAN (aceite natural)
- **Temperatura:** 65°C (aceite), 80°C (devanados)
- **Eficiencia:** 98.9% a plena carga

### 3.3 Sistemas de Respaldo Colocalizados

#### 3.3.1 UPS Colocalizado
- **Potencia:** 1 MVA
- **Voltaje:** 480 V AC, 3 fases
- **Autonomía:** 30 minutos
- **Baterías:** 2000 Ah, 48 V DC
- **Eficiencia:** 96% (modo normal), 92% (modo batería)
- **THD:** < 3% (entrada), < 5% (salida)

#### 3.3.2 Generadores Colocalizados
- **Potencia:** 2 MVA
- **Voltaje:** 480 V AC, 3 fases
- **Combustible:** Diesel
- **Autonomía:** 12 horas
- **Arranque:** Automático (30 segundos)
- **Regulación:** ±1% (voltaje), ±0.5% (frecuencia)

#### 3.3.3 Baterías Colocalizadas
- **Capacidad:** 2000 Ah
- **Voltaje:** 48 V DC
- **Tipo:** Plomo-ácido, selladas
- **Vida útil:** 10 anos
- **Temperatura:** 20-25°C (óptima)
- **Mantenimiento:** Libre de mantenimiento

### 3.4 Alimentación Torres Colocalizadas

#### 3.4.1 Torre Individual (37 Torres)
- **Potencia:** 0.5 MVA (TETRA + Red Vital IP / TETRA)
- **Voltaje:** 480 V AC, 3 fases
- **Frecuencia:** [ESTÁNDAR PROHIBIDO: FRECUENCIA FERROVIARIA NO APLICABLE]
- **THD:** < 5%
- **Regulación:** ±2% (voltaje), ±0.1% (frecuencia)

#### 3.4.2 Protecciones Torre
- **Sobrecorriente:** 125% de la corriente nominal
- **Sobretensión:** 110% del voltaje nominal
- **Subtensión:** 90% del voltaje nominal
- **Frecuencia:** 59.5-60.5 Hz
- **THD:** < 5%

#### 3.4.3 Redundancia Torre
- **Fuente Principal:** Red eléctrica
- **Fuente Respaldo:** UPS local
- **Transferencia:** Automática (< 4 ms)
- **Monitoreo:** SCADA integrado

---

## 4. Funcionalidades del Sistema Colocalizado

### 4.1 Alimentación Principal Colocalizada

#### 4.1.1 Red de Distribución Colocalizada
- **Voltaje:** 34.5 kV (primario), 13.8 kV (secundario), 480 V (torres)
- **Frecuencia:** [ESTÁNDAR PROHIBIDO: FRECUENCIA FERROVIARIA NO APLICABLE]
- **Factor de potencia:** > 0.95
- **THD:** < 5%
- **Regulación:** ±2% (voltaje), ±0.1% (frecuencia)

#### 4.1.2 Cargas Críticas Colocalizadas
- **PTC Embarcado:** 300 kVA (15 locomotoras)
- **CTC Virtual:** 150 kVA (Centro de Control)
- **TETRA + Red Vital IP / TETRA:** 185 kVA (37 torres colocalizadas)
- **ENCE:** 100 kVA (5 estaciones)
- **CCTV:** 50 kVA (73 cámaras)
- **Iluminación:** 100 kVA (Estaciones, vías)

### 4.2 Sistemas de Respaldo Colocalizados

#### 4.2.1 UPS Colocalizado
- **Cargas críticas:** PTC, CTC, TETRA, Red Vital IP / TETRA, ENCE
- **Tiempo de transferencia:** < 4 ms
- **Modo normal:** Rectificador + inversor
- **Modo batería:** Inversor + baterías
- **Modo bypass:** Alimentación directa

#### 4.2.2 Generadores Colocalizados
- **Cargas totales:** Todas las cargas colocalizadas
- **Tiempo de arranque:** 30 segundos
- **Tiempo de transferencia:** < 10 segundos
- **Modo automático:** Arranque automático
- **Modo manual:** Arranque manual

### 4.3 Protecciones Colocalizadas

#### 4.3.1 Protecciones Primarias Colocalizadas
- **Sobrecorriente:** Relés SEL-751A
- **Diferencial:** Relés SEL-751A
- **Sobretensión:** Relés SEL-751A
- **Subtensión:** Relés SEL-751A
- **Frecuencia:** Relés SEL-751A

#### 4.3.2 Protecciones Secundarias Colocalizadas
- **Coordinación:** Selectividad temporal
- **Backup:** Protecciones de respaldo
- **Comunicación:** IEC 61850
- **Monitoreo:** SCADA integrado
- **Alarmas:** SMS, email, pager

---

## 5. Seguridad y Confiabilidad Colocalizada

### 5.1 Seguridad Funcional Colocalizada (EN 50126/50128/50129)

#### 5.1.1 Objetivos de Seguridad Colocalizados
- **SIL 4:** Alimentación PTC embarcado
- **SIL 3:** Alimentación CTC virtual
- **SIL 2:** Alimentación TETRA + Red Vital IP / TETRA
- **SIL 1:** Alimentación auxiliar

#### 5.1.2 Arquitectura de Seguridad Colocalizada
- **Redundancia:** N+1 en componentes críticos
- **Diversidad:** Diferentes fuentes de alimentación
- **Aislamiento:** Separación física y eléctrica
- **Monitoreo:** Supervisión continua colocalizada

### 5.2 Ciberseguridad Colocalizada (IEC 62443)

#### 5.2.1 Zonas de Seguridad Colocalizadas
- **Zona 0:** Red de control crítico colocalizado
- **Zona 1:** Red de supervisión colocalizada
- **Zona 2:** Red administrativa colocalizada
- **Zona 3:** Red externa colocalizada

#### 5.2.2 Medidas de Protección Colocalizadas
- **Firewall:** Protección perimetral colocalizada
- **IDS/IPS:** Detección de intrusiones colocalizada
- **Criptografía:** AES-256, RSA-2048
- **VPN:** Túneles seguros colocalizados
- **Backup:** Respaldo y recuperación colocalizada

### 5.3 Disponibilidad Colocalizada

#### 5.3.1 Objetivos de Disponibilidad Colocalizados
- **Alimentación principal:** 99.95% (4.38 horas/ano)
- **UPS:** 99.9% (8.76 horas/ano)
- **Generadores:** 99.5% (43.8 horas/ano)
- **Baterías:** 99.0% (87.6 horas/ano)
- **Torres colocalizadas:** 99.99% (0.88 horas/ano)

#### 5.3.2 Estrategias de Redundancia Colocalizadas
- **Fuentes:** N+1 con transferencia automática
- **Equipos:** Redundancia en componentes críticos
- **Alimentación:** UPS + generadores colocalizados
- **Comunicación:** Enlaces múltiples colocalizados

---

## 6. Integración y Comunicaciones Colocalizadas

### 6.1 Integración PTC Embarcado

#### 6.1.1 Alimentación PTC Embarcado
- **Potencia:** 300 kVA (15 locomotoras)
- **Voltaje:** 480 V AC, 3 fases
- **Frecuencia:** [ESTÁNDAR PROHIBIDO: FRECUENCIA FERROVIARIA NO APLICABLE]
- **THD:** < 3%
- **Regulación:** ±1% (voltaje), ±0.1% (frecuencia)

#### 6.1.2 Protecciones Específicas PTC
- **Sobrecorriente:** 125% de la corriente nominal
- **Sobretensión:** 110% del voltaje nominal
- **Subtensión:** 90% del voltaje nominal
- **Frecuencia:** 59.5-60.5 Hz
- **THD:** < 5%

### 6.2 Integración CTC Virtual

#### 6.2.1 Alimentación Centro de Control Virtual
- **Potencia:** 150 kVA
- **Voltaje:** 480 V AC, 3 fases
- **Frecuencia:** [ESTÁNDAR PROHIBIDO: FRECUENCIA FERROVIARIA NO APLICABLE]
- **THD:** < 3%
- **Regulación:** ±1% (voltaje), ±0.1% (frecuencia)

#### 6.2.2 Protecciones Específicas CTC
- **Sobrecorriente:** 125% de la corriente nominal
- **Sobretensión:** 110% del voltaje nominal
- **Subtensión:** 90% del voltaje nominal
- **Frecuencia:** 59.5-60.5 Hz
- **THD:** < 5%

### 6.3 Integración TETRA + Red Vital IP / TETRA Colocalizados

#### 6.3.1 Alimentación Torres Colocalizadas
- **Potencia:** 185 kVA (37 torres)
- **Voltaje:** 480 V AC, 3 fases
- **Frecuencia:** [ESTÁNDAR PROHIBIDO: FRECUENCIA FERROVIARIA NO APLICABLE]
- **THD:** < 3%
- **Regulación:** ±1% (voltaje), ±0.1% (frecuencia)

#### 6.3.2 Protecciones Específicas Torres
- **Sobrecorriente:** 125% de la corriente nominal
- **Sobretensión:** 110% del voltaje nominal
- **Subtensión:** 90% del voltaje nominal
- **Frecuencia:** 59.5-60.5 Hz
- **THD:** < 5%

---

## 7. Operación y Mantenimiento Colocalizado

### 7.1 Operación Colocalizada

#### 7.1.1 Centro de Control de Potencia Colocalizado
- **Monitoreo:** SCADA integrado
- **Control:** Automático y manual
- **Alarmas:** Tiempo real
- **Registro:** Histórico de eventos
- **Reportes:** Automáticos y bajo demanda

#### 7.1.2 Procedimientos Operacionales Colocalizados
- **Arranque:** Secuencial automático
- **Operación:** Normal y de emergencia
- **Parada:** Secuencial automático
- **Mantenimiento:** Programado y correctivo

### 7.2 Mantenimiento Colocalizado

#### 7.2.1 Mantenimiento Preventivo Colocalizado
- **Inspecciones:** Diarias, semanales, mensuales
- **Pruebas:** Funcionales y de rendimiento
- **Calibración:** Sensores y relés
- **Limpieza:** Equipos y instalaciones

#### 7.2.2 Mantenimiento Correctivo Colocalizado
- **Diagnóstico:** Automático y manual
- **Reparación:** Inmediata y programada
- **Reemplazo:** Componentes críticos
- **Pruebas:** Post-reparación

---

## 8. Pruebas y Validación Colocalizada

### 8.1 Pruebas de Componentes Colocalizados

#### 8.1.1 Pruebas de Hardware Colocalizado
- **Subestaciones:** Pruebas de aislamiento y rendimiento
- **Transformadores:** Pruebas de relación y pérdidas
- **UPS:** Pruebas de transferencia y autonomía
- **Generadores:** Pruebas de arranque y rendimiento
- **Torres:** Pruebas de alimentación colocalizada

#### 8.1.2 Pruebas de Software Colocalizado
- **SCADA:** Pruebas de funcionalidad
- **Protecciones:** Pruebas de relés
- **Comunicaciones:** Pruebas de protocolos
- **Interfaces:** Pruebas de integración

### 8.2 Pruebas de Sistema Colocalizado

#### 8.2.1 Pruebas de Integración Colocalizada
- **PTC Embarcado:** Pruebas de alimentación
- **CTC Virtual:** Pruebas de alimentación
- **TETRA + Red Vital IP / TETRA:** Pruebas de alimentación colocalizada
- **Redundancia:** Pruebas de failover automático

#### 8.2.2 Pruebas de Rendimiento Colocalizado
- **Disponibilidad:** 99.95% según AT4
- **Eficiencia:** > 95% (factor de potencia)
- **Calidad:** THD < 5%
- **Redundancia:** N+1 con transferencia automática

### 8.3 Validación de Seguridad Colocalizada

#### 8.3.1 Análisis de Riesgos Colocalizado
- **Análisis de Riesgos:** Sistemas colocalizados
- **Validación de Funciones:** Seguridad ferroviaria colocalizada
- **Pruebas de Disponibilidad:** 99.95% según AT4
- **Certificación de Seguridad:** Cumplimiento normativo colocalizado

---

## 9. Entregables Colocalizados

### 9.1 Documentación Técnica Colocalizada
- **Planos Subestaciones:** Sistemas colocalizados
- **Especificaciones Torres:** Alimentación colocalizada
- **Manuales PTC:** Sistemas embarcados
- **Manuales Colocalizados:** Operación y mantenimiento dual

### 9.2 Software y Configuración Colocalizada
- **Software SCADA:** Sistema colocalizado
- **Configuraciones Torres:** Torres colocalizadas
- **Interfaces Colocalizadas:** Sistemas de usuario duales
- **Bases de Datos:** Configuraciones colocalizadas

### 9.3 Equipos y Materiales Colocalizados
- **Equipos Subestaciones:** Sistemas colocalizados
- **Equipos Torres:** Torres colocalizadas
- **Equipos PTC:** Sistemas embarcados
- **Cables y Accesorios:** Sistemas de alimentación colocalizados

---

## 10. Cronograma de Implementación Colocalizada

### 10.1 Fases del Proyecto Colocalizado
- **Fase 1:** Subestaciones Colocalizadas (3 meses)
- **Fase 2:** Torres Colocalizadas (2 meses)
- **Fase 3:** PTC Embarcado (3 meses)
- **Fase 4:** Pruebas Colocalizadas (2 meses)
- **Fase 5:** Puesta en Servicio (1 mes)

### 10.2 Hitos Principales Colocalizados
- **Subestaciones Colocalizadas:** Sistemas de potencia completados
- **37 Torres Colocalizadas:** Alimentación TETRA + Red Vital IP / TETRA
- **PTC Embarcado:** Sistemas en 15 locomotoras
- **Pruebas Colocalizadas:** Validación completa
- **Puesta en Servicio:** Operación comercial colocalizada

---

## 11. Gestión de Calidad Colocalizada

### 11.1 Control de Calidad Colocalizado
- **Inspecciones Subestaciones:** Sistemas colocalizados
- **Inspecciones Torres:** Torres colocalizadas
- **Validación PTC:** Sistemas embarcados
- **Certificados Colocalizados:** Documentación de calidad dual

### 11.2 Gestión de Cambios Colocalizada
- **Procedimientos Colocalizados:** Cambios en sistemas duales
- **Control de Versiones:** Software y configuración dual
- **Aprobaciones Colocalizadas:** Cambios de sistema dual
- **Documentación Colocalizada:** Registro de cambios duales

---

## 12. Referencias y Documentación

### 12.1 Documentos del Proyecto Actualizados
- **`CRITERIOS_TECNICOS_MAESTRO_v1.0.md`:** TETRA 37 + Red Vital IP / TETRA colocalizado
- **`AT1_Alcance_del_Proyecto_MEJORADO_v4.0.md`:** Alcance actualizado
- **`27_Sistema_TETRA_Integrado_v5.0.md`:** 37 estaciones + Red Vital IP / TETRA
- **`V.3_Comunicaciones_Detalle_v2.0.md`:** TETRA + Red Vital IP / TETRA colocalizados

### 12.2 Referencias del Proyecto
- **`@@Roadmap_v12.0_Marco_Gestion_Consolidado.md`:** Estado del proyecto
- **`MATRIZ_IMPACTO_DOCUMENTOS_AFECTADOS_v1.0.md`:** Análisis de desalineación
- **`III. Ingenieria conceptual/23_ListadoMaestro_Sistemas_v4.0.md`:** Inventario actualizado

---

## 13. Impacto Presupuestal de Alimentación Torres Colocalizadas

### 13.1 Ajustes de Cantidades
- **Torres:** 33 → 37 torres (+4 torres)
- **Potencia Total:** 15 → 18 MVA (+3 MVA)
- **UPS:** 500 → 1000 kVA (+500 kVA)
- **Generadores:** 1 → 2 MVA (+1 MVA)

### 13.2 Impacto Presupuestal Neto
- **+4 Torres:** +$2,000,000,000 COP
- **+3 MVA Potencia:** +$1,500,000,000 COP
- **+500 kVA UPS:** +$800,000,000 COP
- **+1 MVA Generadores:** +$1,200,000,000 COP
- **IMPACTO NETO:** +$5,500,000,000 COP

---

## 14. Interfaces Documentales v2.0

### 14.1 Documentos Actualizados (v2.0)
- **AT1 v4.0:** ✅ Actualizado - TETRA 37 + Red Vital IP / TETRA colocalizado
- **Listado Maestro v4.0:** ✅ Actualizado - Sistemas colocalizados
- **WBS v4.0:** ✅ Actualizado - Estructura colocalizada
- **27_Sistema_TETRA v5.0:** ✅ Actualizado - 37 estaciones + Red Vital IP / TETRA
- **V.3_Comunicaciones v2.0:** ✅ Actualizado - TETRA + Red Vital IP / TETRA colocalizados
- **V.4_Potencia v2.0:** ✅ Actualizado - Alimentación torres colocalizadas

### 14.2 Documentos Dependientes (Por Actualizar)
- **V.5_Sistemas_Seguridad_Detalle_v1.0.md** ⏳ (Seguridad colocalizada)

---

**Control de versiones:**
| Versión | Fecha | Responsable | Descripción |
|:---:|:---:|:---|:---|
| v1.0 | 02/10/2025 | Ing. Potencia | Especificación inicial con PTC tradicional |
| **v2.0** | **Ene-2025** | **Admin. Contractual EPC** | **CRÍTICO: Alimentación torres colocalizadas** |

---

**Estado del documento:** ✅ **COMPLETADO - ALIMENTACIÓN TORRES COLOCALIZADAS**  
**Fecha de consolidación:** Enero 2025  
**Responsable:** Administrador Contractual EPC  
**Próxima revisión:** Febrero 2025

---

**Este documento es VIVO y debe actualizarse conforme se complete la corrección documental masiva.**

**Próximo paso:** Actualizar V.5_Sistemas_Seguridad_Detalle_v1.0.md (Seguridad colocalizada)

---

Esta información es únicamente de carácter informativo. Se recomienda su revisión y validación por el equipo jurídico del proyecto antes de ser utilizada formalmente.
