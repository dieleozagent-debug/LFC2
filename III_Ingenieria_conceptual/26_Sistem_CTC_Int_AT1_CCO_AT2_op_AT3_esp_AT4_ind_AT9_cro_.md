# SISTEMA LFC-CCO INTEGRADO v6.3.3 - CENTRO DE CONTROL DE TRÁFICO
## APP La Dorada - Chiriguaná

---

## 1. MARCO CONTRACTUAL

### 1.1 Base Legal
El **LFC-CCO (Sistema de Intervención y Control Centralizado)** es la autoridad técnica soberana que integra los requisitos SICC para formar un ecosistema cohesivo. Su diseno conceptual se basa en:
- **AT1 (Alcance):** Infraestructura del Centro de Control de Operaciones (CCO) en UF2.
- **AT2 (Operación):** Reglamento de Operación de Trenes (ROT) basado en PTC Virtual.
- **AT3 (Especificaciones):** Requisitos técnicos soberanos, protocolos **Vital IP (SICC)** y normativa **FRA 236** para el CCO.
- **AT4 (Indicadores):** Monitoreo de disponibilidad (99.95%) y rendimiento vía Red Vital IP.
- **AT9 (Plan de Obras):** Cronograma de implementación y hitos de entrega del LFC-CCO.
- **Cláusula 8.2 (Construcción):** Obliga a la construcción, montaje e integración de todos los sistemas.

### 1.2 ⚠️ EVALUACIÓN DE DEPENDENCIAS DOCUMENTALES
Este documento es el **núcleo del diseno conceptual del control ferroviario**. Su correcta definición es crítica para la seguridad y eficiencia de la operación.

- **Depende de:**
    - `AT1`, `AT2`, `AT3`, `AT4`, `AT9`: Fuentes primarias de requisitos.
    - `22` a `25_...md`: Documentos base que establecen la metodología y el alcance.
    - `29_Sistema_Senalizacion_Integrado...md`: Define los enclavamientos y senales que el CTC debe controlar.
- **Gobierna a:**
    - `V_Ingenieria_detalle/2_Centro_de_Control_de_Tr_fico_CTC_Contrato_8_2.md`: El diseno de detalle se basa en los conceptos aquí definidos.
    - `34_Criterios_Interoperabilidad...md`: La interoperabilidad con FENOCO se gestiona a través del CTC.
    - `38. DiagramasArquitectura_sist_ctc-telco.md`: La arquitectura del CTC es un componente central de este diagrama.

---

## 2. INTEGRACIÓN CON DOCUMENTOS RELACIONADOS

### 2.1 Documentos Base (Completados ✅)
Este análisis se fundamenta en la estructura de trabajo ya aprobada.

| Documento | Aporte Clave |
|---|---|
| `22_HojaRuta_Conceptual...md` | Define la metodología de análisis por sistema. |
| `23_ListadoMaestro_Sistemas...md` | Identifica al CTC como un sistema crítico (ID: SYS-01). |
| `24_Matriz_TrazabilidadContractual...md` | Vincula al CTC con sus obligaciones contractuales específicas. |
| `25_WBS_IngenieriaConceptual...md` | Establece el paquete de trabajo 1.1 para el CTC. |

### 2.2 Documentos Dependientes (Bloqueados 🔴)
El diseno detallado del CTC no puede avanzar hasta que este concepto de integración sea validado.

| Documento | Dependencia |
|---|---|
| `V_Ingenieria_detalle/2_...md` | Requiere la arquitectura funcional y los requisitos de hardware/software definidos aquí. |
| `38. DiagramasArquitectura...md` | Necesita la definición de las interfaces del CTC para completar el diagrama de bloques. |

### 2.3 Interfaces Soberanas
- **LFC-CCO ↔ Senalización:** Comando a los 5 ENCE lógicos vía Protocolo Vital IP (SICC).
- **LFC-CCO ↔ PTC/Material Rodante:** Gestión de Autorizaciones de Movimiento (MA) FRA 236-I.
- **LFC-CCO ↔ Telecomunicaciones:** Backbone primario **Red Vital IP** (Fibra/Microondas).
- **LFC-CCO ↔ SICC (AT4):** Telemetría en tiempo real para KPIs de Pureza Técnica.
- **LFC-CCO ↔ CTC FENOCO:** Interoperabilidad bajo protocolos FRA/AREMA en la frontera Chiriguaná.

---

## 3. OPTIMIZACIONES EPC ESPECÍFICAS

### 3.1 Arquitectura para Proyectos EPC
Se propone una arquitectura de CTC que maximiza la eficiencia y minimiza los riesgos para el contratista EPC:
- **Arquitectura Centralizada con Control Distribuido:** Un CCO principal en La Dorada (UF2) con capacidad de control total, pero con puestos de operación locales en los 5 enclavamientos principales que permiten una operación degradada pero segura en caso de fallo del enlace principal.
- **Implementación por Fases (AT1, Tabla 19):** Se implementará un **CTC de Operación Temprana (UF3)** para la fase preoperativa, que luego se integrará como parte del CTC definitivo, evitando la duplicidad de inversiones.
- **Diseno Basado en Estándares:** El uso de protocolos soberanos **Vital IP (SICC)** y la alineación con **FRA 236 / AREMA** asegura la independencia tecnológica y el control total.

### 3.2 Estrategia de Avance con Bloqueos PTC
Dado que las especificaciones detalladas del sistema PTC dependen de AT3 (bloqueado), se adopta una estrategia de mitigación de riesgo:
- **Diseno Modular:** El CTC se disenará con una interfaz de "Arquitectura Abierta SICC" (API bien definida) para el sistema PTC. Esto permite desarrollar el 90% del CTC (supervisión, enclavamientos, gestión de surcos) de forma independiente.
- **Enfoque en Supervisión:** Inicialmente, el CTC se centrará en la supervisión de la posición de los trenes (vía GPS/TETRA) y el control de la senalización enclavada, sin depender de las funciones de "enforcement" del PTC.
- **Plan de Integración Futura:** Se definirá un plan de integración y pruebas específico para cuando las especificaciones del PTC estén disponibles, minimizando el impacto en el cronograma.
- **🚂 Estrategia PTC PTC Virtual (FRA 236):** Se utilizará PTC Virtual (FRA 236) como estándar internacional de referencia hasta que AT3 esté disponible, asegurando compatibilidad y interoperabilidad.

---

## 4. MATRIZ DE CONTROL Y SEGUIMIENTO (REQUISITOS CTC)

### 4.1 Requisitos Consolidados del LFC-CCO
La siguiente matriz integra los requisitos soberanos en funcionalidades concretas.

| Requisito Contractual | Fuente | Funcionalidad LFC-CCO Asociada | Estado SICC |
|---|---|---|:---:|
| **Infraestructura del CCO (UF2)** | AT1, Tabla 16 | Diseno de sala de control, videowall y redundancia crítica.<br>- **Disponibilidad 99.95% vía Red Vital IP** | ✅ Definido |
| **Reglamento de Operación (ROT)** | AT2, Cap. 3.2.2 | Lógica operativa para gestión de MA (Movement Authority). | ✅ Definido |
| **Protocolos de Comunicación** | AT3, Cap. 8.2 | **Protocolo Vital IP (SICC)** para interfaz con ENCE lógicos. | ✅ Definido |
| **Integración con SICC** | AT4, Cap. 5.3 | API para telemetría vital en tiempo real. | ✅ Definido |
| **Control Positivo de Trenes (PTC)** | AT3, Cap. 8.10 | Interfaz rectora para envío de misiones FRA-I. | ✅ Definido |

### 4.2 Indicadores de Riesgo por Bloqueo PTC
- **🟢 Verde (Proceder):** Diseno del CCO, arquitectura de red, interfaz con enclavamientos, sistema de visualización (sinóptico), integración SICC basica.
- **🟡 Amarillo (Diseno Modular):** Módulo de gestión de surcos, interfaz con material rodante (basada en GPS/TETRA), sistema de alarmas operativas.
- **🔴 Rojo (Bloqueado):** Funciones de "enforcement" (frenado automático), senalización en cabina, optimización avanzada de tráfico basada en PTC.

---

## 5. CONCLUSIONES Y PRÓXIMOS PASOS

### 5.1 Estado del Documento v4.0
Este documento ha sido actualizado a la versión 4.0, transformándose en un **plan conceptual integrado para el sistema CTC**. Define una arquitectura robusta, integra los requisitos de 5 apéndices técnicos y establece una estrategia clara para mitigar los riesgos derivados del bloqueo de especificaciones PTC.

### 5.2 Acciones Requeridas para Mantener v4.0
- **Sincronización Continua:** Cualquier actualización en los apéndices AT1, AT2, AT3, AT4 o AT9 debe ser analizada y, si es necesario, integrada en este documento.
- **Gestión de Interfaces:** El equipo de ingeniería debe utilizar la matriz de requisitos (sección 4.1) como lista de chequeo durante el diseno de detalle.

### 5.3 Criterios para Avance
La aprobación de este documento conceptual permite:
- **Desbloquear el Paquete de Trabajo 1.2 (Senalización):** Al definir las interfaces que el CTC requerirá de los enclavamientos.
- **Iniciar el Diseno Básico del CTC:** Incluyendo la elaboración de los diagramas de arquitectura (`38. DiagramasArquitectura...md`).
- **Avanzar en el Diseno del CCO:** Al tener claros los requisitos de hardware y espacio.

---

**Estado del documento:** ✅ Complet### 3.2 Estrategia de Avance Soberana
- **Diseno Vital:** El LFC-CCO se disena basado en la arquitectura **SICC v6.3.3**.
- **Interfaces Abiertas:** Uso de API Vital IP para la integración de los 5 ENCE y el material rodante.
- **Interoperabilidad:** Protocolos FRA/AREMA para coordinación con FENOCO.

---

## 4. MATRIZ DE RIESGOS SICC (Fase Conceptual)

| **ID** | **Riesgo** | **Categoría** | **Mitigación SICC** |
|:---:|:---|:---:|:---|
| **R-030** | **Dependencia de Red Vital IP** | **Técnico** | Redundancia física vía Anillo de FO y Radio. |
| **R-031** | **Interoperabilidad Chiriguaná** | **Operativo** | Implementación de Gateway FRA/AREMA en LFC-CCO. |
| **R-032** | **Ciberseguridad Vital** | **Seguridad** | Encriptación de grado militar en el protocolo Vital IP. |

---

| Versión | Fecha       | Responsable            | Descripción                              |
|:------:|:-----------:|:-----------------------|:-----------------------------------------|
| v6.3.3 | 20/03/2026  | Admin. Contractual EPC | Re-ingeniería total SICC. Eliminación de legacy europeo Estándar SICC (FRA/AREMA)/Arquitectura SICC v6.3.3. |
ontingencia** para dependencias AT3
- **Protocolos de interoperabilidad** con FENOCO según FRA/AREMA
- **Matriz de disponibilidad** para cumplimiento AT4
- **Gestión de interfaces** crítica para integración CTC