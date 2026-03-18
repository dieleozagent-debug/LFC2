# V.1 - Señalización Ferroviaria de Detalle v2.0 - FILOSOFÍA VIRTUAL
## APP La Dorada - Chiriguaná

**Fecha de actualización:** Enero 2025  
**Proyecto:** APP La Dorada - Chiriguaná  
**Contrato:** Concesión No. 001 de 2025  
**Versión:** 2.0  
**Estado:** ✅ **ACTUALIZADO - FILOSOFÍA VIRTUAL IMPLEMENTADA**

---

## 🚨 **ACTUALIZACIÓN CRÍTICA v2.0 - FILOSOFÍA VIRTUAL**

### **📋 CAMBIO DE PARADIGMA COMPLETO:**

#### **🔴 FILOSOFÍA ANTERIOR (ELIMINADA):**
- **❌ Virtual Balise (GNSS)s:** 1,080 unidades → **0 unidades** (Reemplazado por PTC embarcado)
- **❌ Servidor PTC Central:** 2 unidades → **0 unidades** (Reemplazado por PTC embarcado)
- **❌ Señalización física en vía:** Eliminada completamente (CTC virtual)
- **❌ LEU:** 1,080 unidades → **0 unidades** (Sistema virtual)

#### **✅ FILOSOFÍA NUEVA (IMPLEMENTADA):**
- **✅ CTC Virtual:** Centro de control centralizado en La Dorada
- **✅ PTC Embarcado:** Sistema en 15 locomotoras
- **✅ Display Virtual:** Señalización en cabina del maquinista
- **✅ ENCE:** 5 enclavamientos electrónicos vitales

---

## 1. Alcance y Objetivo

Este documento establece las especificaciones técnicas de detalle para el **sistema de señalización virtual** del proyecto APP La Dorada-Chiriguaná, basado en **CTC centralizado** y **PTC embarcado**.

### 1.1 Objetivo
Definir las especificaciones técnicas detalladas para la implementación del **sistema de señalización virtual**, incluyendo:
- Arquitectura CTC virtual centralizada
- Sistema PTC embarcado en locomotoras
- Display virtual en cabina del maquinista
- Enclavamientos ENCE electrónicos
- Integración con sistemas de comunicación

### 1.2 Alcance
- **Señalización virtual** (CTC + PTC embarcado)
- **5 Enclavamientos ENCE** electrónicos
- **24 Pasos a Nivel** activos (9 Tipo C + 15 Tipo B)
- **120 Desvíos** (25 motorizados + 95 manuales)
- **Integración con TETRA + Red Vital IP / TETRA**

---

## 2. Referencias Normativas

### 2.1 Normas Internacionales
- **EN 50126:** Aplicación de técnicas de fiabilidad para sistemas ferroviarios
- **EN 50128:** Sistemas de software para control y protección ferroviarios
- **EN 50129:** Sistemas de señalización ferroviaria
- **IEC 62290:** Sistemas de gestión del tráfico ferroviario
- **FRA/AREMA 615:** Señalización ferroviaria

### 2.2 Normas Nacionales
- **RETIE:** Reglamento Técnico de Instalaciones Eléctricas
- **NSR-10:** Norma Sismo Resistente
- **Decreto 1077/2015:** Reglamento de Transporte Ferroviario

---

## 3. Arquitectura del Sistema Virtual

### 3.1 Componentes Principales
- **Centro de Control de Tráfico (CTC) Virtual** - CCO La Dorada
- **Sistema PTC Embarcado** - 15 locomotoras
- **Display Virtual en Cabina** - Señalización para maquinista
- **Enclavamientos ENCE** - 5 estaciones críticas
- **Sistemas de Comunicación** - TETRA + Red Vital IP / TETRA

### 3.2 Integración con PTC Embarcado
- Interfaz CTC-PTC según protocolos virtuales
- Comunicación directa locomotora-centro de control
- Gestión de movimientos de trenes virtual
- Control de velocidad y distancia embarcado

---

## 4. Especificaciones Técnicas Virtuales

### 4.1 CTC Virtual Centralizado
- **Servidor CTC:** Software de control ferroviario centralizado
- **Base de Datos:** Estado de vía y trenes en tiempo real
- **Interfaz Operador:** Consolas de control y monitoreo
- **Comunicaciones:** Red TETRA + Red Vital IP / TETRA para PTC
- **Respaldo:** Sistemas redundantes y UPS

### 4.2 PTC Embarcado (15 Locomotoras)
- **Computadora PTC:** Sistema embarcado en cada locomotora
- **Sensores de Velocidad:** GPS + odómetro para posición precisa
- **Display del Maquinista:** Pantalla de señalización virtual
- **Comunicación CTC:** Radio TETRA + Red Vital IP / TETRA para comunicación
- **Sensores:** Velocidad, frenos, integridad

### 4.3 Enclavamientos ENCE (5 Estaciones)
- **ENCE Zapatosa:** Interlocking Controller vital
- **ENCE García Cadena:** Interlocking Controller vital
- **ENCE Barrancabermeja:** Interlocking Controller vital
- **ENCE Puerto Berrío-Grecia:** Interlocking Controller vital
- **ENCE La Dorada-México:** Interlocking Controller vital

### 4.4 Desvíos (120 Unidades)
- **25 Desvíos Motorizados:** Control automático desde CTC
- **95 Desvíos Manuales:** Operación manual con supervisión CTC
- **Switch Machines:** Sistemas eléctricos de control
- **Circuitos de Vía:** Detección de posición de desvíos

---

## 5. Instalación y Montaje Virtual

### 5.1 Preparación del Sitio
- **CCO La Dorada:** Construcción y equipamiento del centro de control
- **37 Torres Comunicaciones:** TETRA + Red Vital IP / TETRA colocalizadas
- **Fibra Óptica:** 526 km de backbone de comunicaciones
- **Instalación ENCE:** 5 enclavamientos electrónicos

### 5.2 Montaje de Equipos Virtuales
- **Instalación CTC:** Servidor central y consolas de control
- **Montaje PTC:** Sistemas embarcados en 15 locomotoras
- **Instalación ENCE:** 5 enclavamientos electrónicos
- **Conexión Virtual:** Sistemas de comunicación integrados

### 5.3 Pruebas y Validación Virtual
- **Pruebas CTC:** Funcionamiento del centro de control
- **Pruebas PTC:** Sistemas embarcados en locomotoras
- **Pruebas ENCE:** Enclavamientos electrónicos
- **Validación Virtual:** Integración completa del sistema

---

## 6. Operación y Mantenimiento Virtual

### 6.1 Procedimientos de Operación
- **Arranque CTC:** Inicio del sistema de control centralizado
- **Operación Virtual:** Gestión de trenes desde CCO
- **Procedimientos de Emergencia:** Protocolos de seguridad
- **Cierre del Sistema:** Procedimientos de parada

### 6.2 Mantenimiento Preventivo
- **Inspecciones CTC:** Monitoreo del centro de control
- **Pruebas PTC:** Validación de sistemas embarcados
- **Mantenimiento ENCE:** Enclavamientos electrónicos
- **Calibración Virtual:** Sistemas de comunicación

### 6.3 Mantenimiento Correctivo
- **Diagnóstico CTC:** Fallas del centro de control
- **Reparación PTC:** Sistemas embarcados en locomotoras
- **Mantenimiento ENCE:** Enclavamientos electrónicos
- **Pruebas Post-Reparación:** Validación de funcionamiento

---

## 7. Seguridad y Protección Virtual

### 7.1 Medidas de Seguridad
- **Redundancia CTC:** Sistemas de respaldo centralizados
- **Protección PTC:** Sistemas embarcados con respaldo
- **Alarmas Virtuales:** Sistemas de alerta en tiempo real
- **Procedimientos de Emergencia:** Protocolos de seguridad

### 7.2 Protección Física
- **Protección CCO:** Centro de control con seguridad física
- **Protección Torres:** Comunicaciones con seguridad
- **Sistemas de Monitoreo:** CCTV y sistemas de seguridad
- **Acceso Controlado:** Sistemas de acceso restringido

---

## 8. Integración con Otros Sistemas

### 8.1 Sistemas de Comunicación
- **Integración TETRA:** 37 estaciones base
- **Integración Red Vital IP / TETRA:** 37 estaciones colocalizadas
- **Fibra Óptica:** 526 km de backbone
- **Redes de Datos:** Sistemas de comunicación integrados

### 8.2 Sistemas de Potencia
- **Alimentación CTC:** Centro de control con respaldo
- **UPS Locomotoras:** Sistemas embarcados con respaldo
- **Generadores de Emergencia:** Sistemas de respaldo
- **Distribución Virtual:** Energía para sistemas virtuales

### 8.3 Sistemas de Seguridad
- **CCTV:** 73 cámaras de videovigilancia
- **Sistemas Contra Incendios:** Protección de instalaciones
- **Control de Acceso:** Sistemas de seguridad
- **Sistemas de Alarma:** Alertas y notificaciones

---

## 9. Pruebas y Validación Virtual

### 9.1 Pruebas de Componentes
- **Pruebas CTC:** Centro de control centralizado
- **Pruebas PTC:** Sistemas embarcados en locomotoras
- **Pruebas ENCE:** Enclavamientos electrónicos
- **Pruebas Comunicaciones:** TETRA + Red Vital IP / TETRA

### 9.2 Pruebas de Sistema
- **Pruebas de Integración:** CTC-PTC-ENCE
- **Pruebas de Rendimiento:** Sistemas virtuales
- **Pruebas de Seguridad:** Validación de seguridad
- **Pruebas de Aceptación:** Validación completa

### 9.3 Validación de Seguridad
- **Análisis de Riesgos:** Sistemas virtuales
- **Validación de Funciones:** Seguridad ferroviaria
- **Pruebas de Disponibilidad:** 99.95% según AT4
- **Certificación de Seguridad:** Cumplimiento normativo

---

## 10. Entregables Virtuales

### 10.1 Documentación Técnica
- **Planos CTC:** Centro de control centralizado
- **Especificaciones PTC:** Sistemas embarcados
- **Manuales ENCE:** Enclavamientos electrónicos
- **Manuales Virtuales:** Operación y mantenimiento

### 10.2 Software y Configuración
- **Software CTC:** Control centralizado
- **Software PTC:** Sistemas embarcados
- **Configuraciones ENCE:** Enclavamientos electrónicos
- **Interfaces Virtuales:** Sistemas de usuario

### 10.3 Equipos y Materiales
- **Equipos CTC:** Centro de control
- **Equipos PTC:** Sistemas embarcados
- **Equipos ENCE:** Enclavamientos electrónicos
- **Cables y Accesorios:** Sistemas de comunicación

---

## 11. Cronograma de Implementación Virtual

### 11.1 Fases del Proyecto
- **Fase 1:** CTC Virtual (2 meses)
- **Fase 2:** PTC Embarcado (3 meses)
- **Fase 3:** ENCE + Desvíos (4 meses)
- **Fase 4:** Pruebas Virtuales (2 meses)
- **Fase 5:** Puesta en Servicio (1 mes)

### 11.2 Hitos Principales
- **CCO La Dorada:** Centro de control completado
- **PTC Embarcado:** Sistemas en locomotoras
- **ENCE Instalados:** Enclavamientos electrónicos
- **Pruebas Virtuales:** Validación completa
- **Puesta en Servicio:** Operación comercial

---

## 12. Gestión de Calidad Virtual

### 12.1 Control de Calidad
- **Inspecciones CTC:** Centro de control
- **Pruebas PTC:** Sistemas embarcados
- **Validación ENCE:** Enclavamientos electrónicos
- **Certificados Virtuales:** Documentación de calidad

### 12.2 Gestión de Cambios
- **Procedimientos Virtuales:** Cambios en sistemas
- **Control de Versiones:** Software y configuración
- **Aprobaciones Virtuales:** Cambios de sistema
- **Documentación Virtual:** Registro de cambios

---

## 13. Referencias y Documentación

### 13.1 Documentos del Proyecto Actualizados
- **`CRITERIOS_TECNICOS_MAESTRO_v1.0.md`:** Filosofía virtual
- **`AT1_Alcance_del_Proyecto_MEJORADO_v4.0.md`:** Alcance actualizado
- **`29_Sistema_Senalizacion_Integrado_v5.0.md`:** Filosofía virtual
- **`27_Sistema_TETRA_Integrado_v5.0.md`:** 37 estaciones TETRA
- **`32_Material_Rodante_Integrado_v5.0.md`:** PTC + EOT embarcado

### 13.2 Referencias del Proyecto
- **`@@Roadmap_v12.0_Marco_Gestion_Consolidado.md`:** Estado del proyecto
- **`MATRIZ_IMPACTO_DOCUMENTOS_AFECTADOS_v1.0.md`:** Análisis de desalineación
- **`III. Ingenieria conceptual/23_ListadoMaestro_Sistemas_v4.0.md`:** Inventario actualizado

---

## 14. Impacto Presupuestal de Filosofía Virtual

### 14.1 Eliminaciones (Sobrepresupuesto)
- **Virtual Balise (GNSS)s:** -$40,000,000,000 COP
- **Señalización en Cabina (Cab-Signaling) vía:** -$12,000,000,000 COP
- **Servidor PTC Central:** -$2,000,000,000 COP
- **LEU:** -$10,000,000,000 COP
- **TOTAL ELIMINAR:** -$64,000,000,000 COP

### 14.2 Implementaciones Nuevas (Faltante)
- **Red Vital IP / TETRA:** +$3,484,000,000 COP
- **EOT:** +$520,000,000 COP
- **ENCE:** +$6,020,000,000 COP
- **Desvíos:** +$3,783,000,000 COP
- **TOTAL AGREGAR:** +$13,807,000,000 COP

### 14.3 Impacto Neto Total
**IMPACTO NETO:** -$50,193,000,000 COP

---

## 15. Interfaces Documentales v2.0

### 15.1 Documentos Actualizados (v2.0)
- **AT1 v4.0:** ✅ Actualizado - Filosofía virtual implementada
- **Listado Maestro v4.0:** ✅ Actualizado - Sistemas virtuales incluidos
- **WBS v4.0:** ✅ Actualizado - Estructura virtual implementada
- **29_Sistema_Senalizacion v5.0:** ✅ Actualizado - Filosofía virtual completa
- **V.1_Señalizacion_Ferroviaria v2.0:** ✅ Actualizado - Filosofía virtual implementada

### 15.2 Documentos Dependientes (Por Actualizar)
- **V.2_Centro_Control_Trafico_CTC_Detalle_v1.0.md** ⏳ (CTC virtual)
- **V.3_Sistemas_Comunicacion_Detalle_v1.0.md** ⏳ (Red Vital IP / TETRA agregado)

---

**Control de versiones:**
| Versión | Fecha | Responsable | Descripción |
|:---:|:---:|:---|:---|
| v1.0 | 02/10/2025 | Ing. Señalización | Especificación inicial con eurobalises |
| **v2.0** | **Ene-2025** | **Admin. Contractual EPC** | **CRÍTICO: Filosofía virtual implementada** |

---

**Estado del documento:** ✅ **COMPLETADO - FILOSOFÍA VIRTUAL IMPLEMENTADA**  
**Fecha de consolidación:** Enero 2025  
**Responsable:** Administrador Contractual EPC  
**Próxima revisión:** Febrero 2025

---

**Este documento es VIVO y debe actualizarse conforme se complete la corrección documental masiva.**

**Próximo paso:** Actualizar V.2_Centro_Control_Trafico_CTC_Detalle_v1.0.md (CTC virtual)

---

Esta información es únicamente de carácter informativo. Se recomienda su revisión y validación por el equipo jurídico del proyecto antes de ser utilizada formalmente.
