# V.2 Centro de Control de Tráfico (CTC) Virtual v2.0 - FILOSOFÍA VIRTUAL
## APP La Dorada - Chiriguaná

**Fecha de actualización:** Enero 2025  
**Proyecto:** APP La Dorada - Chiriguaná  
**Contrato:** Concesión No. 001 de 2025  
**Versión:** 2.0  
**Estado:** ✅ **ACTUALIZADO - CTC VIRTUAL IMPLEMENTADO**

---

## 🚨 **ACTUALIZACIÓN CRÍTICA v2.0 - CTC VIRTUAL CENTRALIZADO**

### **📋 CAMBIO DE PARADIGMA COMPLETO:**

#### **🔴 FILOSOFÍA ANTERIOR (ELIMINADA):**
- **❌ PTC PTC Virtual (FRA 236):** Sistema tradicional con Servidor PTC Central → **0 unidades** (Reemplazado por PTC embarcado)
- **❌ Servidor PTC Central (Servidor PTC Central):** 2 unidades → **0 unidades** (Reemplazado por CTC virtual)
- **❌ Comunicación Servidor PTC Central-CTC:** Interfaces FFFIS tradicionales → **Sistema virtual directo**
- **❌ Virtual Balise (GNSS)s:** 1,080 unidades → **0 unidades** (Reemplazado por PTC embarcado)

#### **✅ FILOSOFÍA NUEVA (IMPLEMENTADA):**
- **✅ CTC Virtual Centralizado:** Centro de control único en La Dorada
- **✅ PTC Embarcado:** Sistema en 15 locomotoras (sin Servidor PTC Central)
- **✅ Comunicación Directa:** CTC ↔ PTC (sin intermediarios)
- **✅ Display Virtual:** Señalización en cabina del maquinista

---

## 1. Resumen Ejecutivo

Este documento detalla la ingeniería del **Centro de Control de Tráfico (CTC) Virtual** para el proyecto APP La Dorada-Chiriguaná, basado en **control centralizado** y **PTC embarcado** sin componentes físicos en vía.

### 1.1 Alcance del Sistema CTC Virtual
- **Sistema principal:** Centro de Control de Tráfico Virtual
- **Componentes:** Servidores virtuales, estaciones de trabajo, interfaces PTC, comunicaciones TETRA+Red Vital IP / TETRA
- **Cobertura:** 526.133 km de vía, 5 estaciones ENCE, 146 pasos a nivel
- **Capacidad:** Hasta 15 trenes simultáneos (sin limitación Servidor PTC Central)

### 1.2 Objetivos del Sistema Virtual
- **Control centralizado:** Gestión unificada del tráfico ferroviario desde CCO La Dorada
- **Supervisión en tiempo real:** Monitoreo continuo de operaciones sin Puntos de Referencia Virtuales (SICC)
- **Integración PTC:** Comunicación directa CTC ↔ PTC embarcado
- **Disponibilidad:** 99.95% de disponibilidad operacional
- **Seguridad:** Cumplimiento EN 50126/50128/50129

---

## 2. Arquitectura del Sistema Virtual

### 2.1 Arquitectura General Virtual
```
┌─────────────────────────────────────────────────────────────┐
│                    CTC VIRTUAL CENTRALIZADO (CCO LA DORADA)  │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Servidor  │  │   Servidor  │  │   Servidor  │         │
│  │  Principal  │  │  Secundario │  │   Backup    │         │
│  │   (2oo3)    │  │   (2oo3)    │  │   (2oo3)    │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ Estación de │  │ Estación de │  │ Estación de │         │
│  │  Trabajo    │  │  Trabajo    │  │  Trabajo    │         │
│  │ Operador    │  │ Supervisor  │  │ Mantenimiento│         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  Interface  │  │  Interface  │  │  Interface  │         │
│  │    PTC      │  │    ENCE     │  │  Comunicación│         │
│  │  (Directo)  │  │  (5 Est.)   │  │  (TETRA+Red Vital IP / TETRA)│       │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ Comunicación Directa
                              │ (Sin Servidor PTC Central/Virtual Balise (GNSS)s)
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    PTC EMBARCADO (15 LOCOMOTORAS)           │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ Computadora │  │   Display   │  │   Radio     │         │
│  │    PTC      │  │  Maquinista │  │ TETRA+Red Vital IP / TETRA │         │
│  │  Embarcado  │  │  (Virtual)  │  │  (Comun.)   │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Componentes Principales Virtuales

#### 2.2.1 Servidores de Control Virtual
- **Servidor Principal:** Procesamiento en tiempo real del CTC virtual
- **Servidor Secundario:** Redundancia y respaldo del sistema virtual
- **Servidor Backup:** Continuidad operacional sin Servidor PTC Central
- **Arquitectura:** 2oo3 (2 de 3) para máxima disponibilidad virtual

#### 2.2.2 Estaciones de Trabajo Virtual
- **Estación Operador:** Control diario del tráfico virtual
- **Estación Supervisor:** Supervisión y coordinación virtual
- **Estación Mantenimiento:** Diagnóstico y mantenimiento virtual
- **Estación Emergencia:** Control de contingencias virtual

#### 2.2.3 Interfaces de Comunicación Virtual
- **Interface PTC:** Comunicación directa con PTC embarcado (sin Servidor PTC Central)
- **Interface ENCE:** Control de 5 enclavamientos electrónicos
- **Interface Comunicación:** Enlaces TETRA + Red Vital IP / TETRA con trenes

---

## 3. Especificaciones Técnicas Virtuales

### 3.1 Hardware Virtual

#### 3.1.1 Servidores CTC Virtual
- **Procesador:** Intel Xeon Gold 6248R (24 cores, 3.0 GHz)
- **Memoria:** 128 GB DDR4 ECC
- **Almacenamiento:** 2 TB SSD NVMe + 10 TB HDD
- **Red:** 2x 10 Gbps Ethernet
- **Fuente:** 2x 750W redundantes
- **Rack:** 19" 2U

#### 3.1.2 Estaciones de Trabajo Virtual
- **Procesador:** Intel Core i7-12700K (12 cores, 3.6 GHz)
- **Memoria:** 32 GB DDR4
- **Almacenamiento:** 1 TB SSD NVMe
- **Pantalla:** 2x 27" 4K UHD
- **Red:** 1 Gbps Ethernet
- **Fuente:** 650W

#### 3.1.3 Red y Comunicaciones Virtuales
- **Switch Principal:** Cisco Catalyst 9300 (48 puertos)
- **Switch Redundante:** Cisco Catalyst 9300 (48 puertos)
- **Router:** Cisco ISR 4331
- **Firewall:** Cisco ASA 5525-X
- **UPS:** APC Smart-UPS 3000VA

### 3.2 Software Virtual

#### 3.2.1 Sistema Operativo
- **Servidores:** Red Hat Enterprise Linux 8.5
- **Estaciones:** Windows 10 Enterprise LTSC
- **Actualizaciones:** Automáticas con validación

#### 3.2.2 Software de Control Virtual
- **CTC Virtual Core:** Sistema propietario Grupo Ortiz (sin Servidor PTC Central)
- **Base de Datos:** PostgreSQL 13
- **Middleware:** RabbitMQ 3.9
- **Monitoreo:** Zabbix 5.4

#### 3.2.3 Interfaces Virtuales
- **PTC Interface:** Protocolo directo CTC-PTC (sin FFFIS Servidor PTC Central)
- **ENCE Interface:** Control directo de enclavamientos
- **Comunicación:** TETRA + Red Vital IP / TETRA v8.0 (37 estaciones)

---

## 4. Funcionalidades del Sistema Virtual

### 4.1 Control de Tráfico Virtual

#### 4.1.1 Gestión de Rutas Virtuales
- **Planificación Virtual:** Rutas automáticas sin Puntos de Referencia Virtuales (SICC)
- **Optimización Virtual:** Algoritmos de optimización sin Servidor PTC Central
- **Conflictos Virtuales:** Detección y resolución automática
- **Prioridades Virtuales:** Gestión de prioridades de trenes

#### 4.1.2 Supervisión en Tiempo Real Virtual
- **Posición de Trenes:** Tracking en tiempo real via PTC embarcado
- **Estado de Vías:** Monitoreo continuo sin Puntos de Referencia Virtuales (SICC)
- **Señales Virtuales:** Control y supervisión virtual
- **Alarmas Virtuales:** Gestión de alarmas y eventos

### 4.2 Integración PTC Embarcado

#### 4.2.1 Comunicación Directa CTC-PTC
- **Estado de Trenes:** Recepción directa de posiciones PTC
- **Autorizaciones:** Envío directo de Movement Authority
- **Comandos:** Control remoto directo de trenes
- **Eventos:** Intercambio directo de eventos críticos

#### 4.2.2 Interfaces Directas CTC-PTC
- **IF-V001:** Estado de trenes (PTC → CTC)
- **IF-V002:** Autorización de rutas (CTC → PTC)
- **IF-V003:** Señales virtuales (CTC → PTC)
- **IF-V004:** Alarmas y eventos (PTC → CTC)
- **IF-V005:** Comandos de emergencia (CTC → PTC)
- **IF-V006:** Estado del sistema (PTC → CTC)
- **IF-V007:** Configuración (CTC → PTC)
- **IF-V008:** Logs y trazabilidad (PTC → CTC)

### 4.3 Gestión de Emergencias Virtual

#### 4.3.1 Procedimientos de Emergencia Virtual
- **Parada de Emergencia:** Comando inmediato via PTC
- **Evacuación:** Procedimientos de evacuación virtual
- **Comunicación:** Enlaces TETRA + Red Vital IP / TETRA de emergencia
- **Coordinación:** Integración con servicios de emergencia

#### 4.3.2 Modos de Operación Virtual
- **Normal:** Operación virtual estándar
- **Degradado:** Operación virtual con limitaciones
- **Emergencia:** Procedimientos de emergencia virtual
- **Mantenimiento:** Modo de mantenimiento virtual

---

## 5. Seguridad y Confiabilidad Virtual

### 5.1 Seguridad Funcional Virtual (EN 50126/50128/50129)

#### 5.1.1 Objetivos de Seguridad Virtual
- **SIL 4:** Funciones críticas de seguridad virtual
- **SIL 3:** Funciones de control virtual
- **SIL 2:** Funciones de supervisión virtual
- **SIL 1:** Funciones auxiliares virtuales

#### 5.1.2 Arquitectura de Seguridad Virtual
- **Redundancia Virtual:** 2oo3 en componentes críticos
- **Diversidad Virtual:** Diferentes tecnologías virtuales
- **Aislamiento Virtual:** Separación física y lógica
- **Monitoreo Virtual:** Supervisión continua virtual

### 5.2 Ciberseguridad Virtual (IEC 62443)

#### 5.2.1 Zonas de Seguridad Virtual
- **Zona 0:** Red de control crítico virtual
- **Zona 1:** Red de supervisión virtual
- **Zona 2:** Red administrativa virtual
- **Zona 3:** Red externa virtual

---

## 6. Integración y Comunicaciones Virtuales

### 6.1 Integración PTC Embarcado

#### 6.1.1 Protocolo Directo CTC-PTC
- **Comunicación Bidireccional:** CTC ↔ PTC (sin Servidor PTC Central)
- **Tiempo Real:** Latencia < 100ms
- **Redundancia:** TETRA + Red Vital IP / TETRA (37 estaciones)
- **Seguridad:** Cifrado end-to-end

#### 6.1.2 Interfaces Virtuales
- **Interface PTC:** Comunicación directa con 15 locomotoras
- **Interface ENCE:** Control de 5 enclavamientos electrónicos
- **Interface EOT:** Integración con 15 dispositivos End of Train

### 6.2 Integración ENCE (5 Estaciones)

#### 6.2.1 Enclavamientos Electrónicos
- **ENCE Zapatosa:** Interlocking Controller vital
- **ENCE García Cadena:** Interlocking Controller vital
- **ENCE Barrancabermeja:** Interlocking Controller vital
- **ENCE Puerto Berrío-Grecia:** Interlocking Controller vital
- **ENCE La Dorada-México:** Interlocking Controller vital

#### 6.2.2 Control CTC-ENCE
- **Control Directo:** CTC → ENCE (sin Servidor PTC Central)
- **Estado en Tiempo Real:** ENCE → CTC
- **Redundancia:** Comunicación redundante
- **Seguridad:** SIL 4 en funciones críticas

### 6.3 Integración Pasos a Nivel (24 Activos)

#### 6.3.1 Tipos de Pasos a Nivel
- **Tipo C:** 9 pasos a nivel con barreras automáticas
- **Tipo B:** 15 pasos a nivel con semáforos y barreras manuales
- **Control CTC:** Supervisión y control desde CTC virtual
- **Comunicación:** Integración con PTC embarcado

---

## 7. Operación y Mantenimiento Virtual

### 7.1 Procedimientos de Operación Virtual

#### 7.1.1 Operación Normal Virtual
- **Inicio del Sistema:** Arranque del CTC virtual
- **Control de Tráfico:** Gestión virtual de trenes
- **Supervisión:** Monitoreo virtual continuo
- **Cierre del Sistema:** Procedimientos de parada virtual

#### 7.1.2 Procedimientos de Emergencia Virtual
- **Parada de Emergencia:** Comando inmediato via PTC
- **Evacuación:** Procedimientos virtuales de evacuación
- **Comunicación de Emergencia:** Enlaces TETRA + Red Vital IP / TETRA
- **Coordinación:** Integración con servicios de emergencia

### 7.2 Mantenimiento Virtual

#### 7.2.1 Mantenimiento Preventivo Virtual
- **Inspecciones CTC:** Monitoreo del centro de control virtual
- **Pruebas PTC:** Validación de sistemas embarcados
- **Mantenimiento ENCE:** Enclavamientos electrónicos
- **Calibración Virtual:** Sistemas de comunicación

#### 7.2.2 Mantenimiento Correctivo Virtual
- **Diagnóstico CTC:** Fallas del centro de control virtual
- **Reparación PTC:** Sistemas embarcados en locomotoras
- **Mantenimiento ENCE:** Enclavamientos electrónicos
- **Pruebas Post-Reparación:** Validación de funcionamiento virtual

---

## 8. Pruebas y Validación Virtual

### 8.1 Pruebas de Componentes Virtuales

#### 8.1.1 Pruebas CTC Virtual
- **Pruebas de Fábrica (FAT):** CTC virtual
- **Pruebas de Recepción:** Sistemas virtuales
- **Pruebas de Instalación:** Centro de control virtual
- **Pruebas de Funcionamiento:** Operación virtual

#### 8.1.2 Pruebas PTC Embarcado
- **Pruebas de Fábrica (FAT):** PTC embarcado
- **Pruebas de Instalación:** Sistemas embarcados
- **Pruebas de Integración:** CTC-PTC
- **Pruebas de Funcionamiento:** Operación embarcada

### 8.2 Pruebas de Sistema Virtual

#### 8.2.1 Pruebas de Integración Virtual
- **CTC-PTC:** Integración directa sin Servidor PTC Central
- **CTC-ENCE:** Integración con enclavamientos
- **CTC-EOT:** Integración con End of Train
- **Comunicaciones:** TETRA + Red Vital IP / TETRA

#### 8.2.2 Pruebas de Rendimiento Virtual
- **Latencia:** < 100ms CTC-PTC
- **Disponibilidad:** 99.95% según AT4
- **Capacidad:** 15 trenes simultáneos
- **Redundancia:** TETRA + Red Vital IP / TETRA

### 8.3 Validación de Seguridad Virtual

#### 8.3.1 Análisis de Riesgos Virtual
- **Análisis de Riesgos:** Sistemas virtuales
- **Validación de Funciones:** Seguridad ferroviaria virtual
- **Pruebas de Disponibilidad:** 99.95% según AT4
- **Certificación de Seguridad:** Cumplimiento normativo virtual

---

## 9. Entregables Virtuales

### 9.1 Documentación Técnica Virtual
- **Planos CTC:** Centro de control virtual
- **Especificaciones PTC:** Sistemas embarcados
- **Manuales ENCE:** Enclavamientos electrónicos
- **Manuales Virtuales:** Operación y mantenimiento

### 9.2 Software y Configuración Virtual
- **Software CTC:** Control virtual centralizado
- **Software PTC:** Sistemas embarcados
- **Configuraciones ENCE:** Enclavamientos electrónicos
- **Interfaces Virtuales:** Sistemas de usuario

### 9.3 Equipos y Materiales Virtuales
- **Equipos CTC:** Centro de control virtual
- **Equipos PTC:** Sistemas embarcados
- **Equipos ENCE:** Enclavamientos electrónicos
- **Cables y Accesorios:** Sistemas de comunicación virtual

---

## 10. Cronograma de Implementación Virtual

### 10.1 Fases del Proyecto Virtual
- **Fase 1:** CTC Virtual (2 meses)
- **Fase 2:** PTC Embarcado (3 meses)
- **Fase 3:** ENCE + Pasos a Nivel (4 meses)
- **Fase 4:** Pruebas Virtuales (2 meses)
- **Fase 5:** Puesta en Servicio (1 mes)

### 10.2 Hitos Principales Virtuales
- **CCO La Dorada:** Centro de control virtual completado
- **PTC Embarcado:** Sistemas en 15 locomotoras
- **ENCE Instalados:** 5 enclavamientos electrónicos
- **Pruebas Virtuales:** Validación completa
- **Puesta en Servicio:** Operación comercial virtual

---

## 11. Gestión de Calidad Virtual

### 11.1 Control de Calidad Virtual
- **Inspecciones CTC:** Centro de control virtual
- **Pruebas PTC:** Sistemas embarcados
- **Validación ENCE:** Enclavamientos electrónicos
- **Certificados Virtuales:** Documentación de calidad

### 11.2 Gestión de Cambios Virtuales
- **Procedimientos Virtuales:** Cambios en sistemas virtuales
- **Control de Versiones:** Software y configuración virtual
- **Aprobaciones Virtuales:** Cambios de sistema virtual
- **Documentación Virtual:** Registro de cambios virtuales

---

## 12. Referencias y Documentación

### 12.1 Documentos del Proyecto Actualizados
- **`CRITERIOS_TECNICOS_MAESTRO_v1.0.md`:** Filosofía virtual
- **`AT1_Alcance_del_Proyecto_MEJORADO_v4.0.md`:** Alcance actualizado
- **`29_Sistema_Senalizacion_Integrado_v5.0.md`:** Filosofía virtual
- **`V.1_Señalizacion_Ferroviaria_Detalle_v2.0.md`:** Filosofía virtual implementada

### 12.2 Referencias del Proyecto
- **`@@Roadmap_v12.0_Marco_Gestion_Consolidado.md`:** Estado del proyecto
- **`MATRIZ_IMPACTO_DOCUMENTOS_AFECTADOS_v1.0.md`:** Análisis de desalineación
- **`III. Ingenieria conceptual/23_ListadoMaestro_Sistemas_v4.0.md`:** Inventario actualizado

---

## 13. Impacto Presupuestal de CTC Virtual

### 13.1 Eliminaciones (Sobrepresupuesto)
- **Servidor PTC Central:** -$2,000,000,000 COP
- **Virtual Balise (GNSS)s:** -$40,000,000,000 COP
- **Señalización en Cabina (Cab-Signaling) vía:** -$12,000,000,000 COP
- **[CONTROLLER PROHIBIDO - SICC ES VIRTUAL]:** -$10,000,000,000 COP
- **TOTAL ELIMINAR:** -$64,000,000,000 COP

### 13.2 Implementaciones Nuevas (Faltante)
- **Red Vital IP / TETRA:** +$3,484,000,000 COP
- **EOT:** +$520,000,000 COP
- **ENCE:** +$6,020,000,000 COP
- **Desvíos:** +$3,783,000,000 COP
- **TOTAL AGREGAR:** +$13,807,000,000 COP

### 13.3 Impacto Neto Total
**IMPACTO NETO:** -$50,193,000,000 COP

---

## 14. Interfaces Documentales v2.0

### 14.1 Documentos Actualizados (v2.0)
- **AT1 v4.0:** ✅ Actualizado - Filosofía virtual implementada
- **Listado Maestro v4.0:** ✅ Actualizado - Sistemas virtuales incluidos
- **WBS v4.0:** ✅ Actualizado - Estructura virtual implementada
- **29_Sistema_Senalizacion v5.0:** ✅ Actualizado - Filosofía virtual completa
- **V.1_Señalizacion_Ferroviaria v2.0:** ✅ Actualizado - Filosofía virtual implementada
- **V.2_CTC_Detalle v2.0:** ✅ Actualizado - CTC virtual centralizado

### 14.2 Documentos Dependientes (Por Actualizar)
- **V.3_Sistemas_Comunicacion_Detalle_v1.0.md** ⏳ (Red Vital IP / TETRA agregado)

---

**Control de versiones:**
| Versión | Fecha | Responsable | Descripción |
|:---:|:---:|:---|:---|
| v1.0 | 02/10/2025 | Ing. Control | Especificación inicial con PTC/Servidor PTC Central |
| **v2.0** | **Ene-2025** | **Admin. Contractual EPC** | **CRÍTICO: CTC virtual implementado** |

---

**Estado del documento:** ✅ **COMPLETADO - CTC VIRTUAL IMPLEMENTADO**  
**Fecha de consolidación:** Enero 2025  
**Responsable:** Administrador Contractual EPC  
**Próxima revisión:** Febrero 2025

---

**Este documento es VIVO y debe actualizarse conforme se complete la corrección documental masiva.**

**Próximo paso:** Actualizar V.3_Sistemas_Comunicacion_Detalle_v1.0.md (Red Vital IP / TETRA agregado)

---

Esta información es únicamente de carácter informativo. Se recomienda su revisión y validación por el equipo jurídico del proyecto antes de ser utilizada formalmente.
