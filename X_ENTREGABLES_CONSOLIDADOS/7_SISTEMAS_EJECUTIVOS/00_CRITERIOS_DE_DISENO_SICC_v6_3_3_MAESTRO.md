# DOCUMENTO DE CRITERIOS DE DISEÑO (SICC v6.3.3)
## SICC : SISTEMA DE INTERVENCIÓN Y CONTROL CENTRALIZADO
### PROYECTO: APP LA DORADA - CHIRIGUANÁ

**Código:** LFC2-SICC-DOC-001  
**Versión:** v6.3.3 SOBERANO — ACTUALIZACIÓN JERÁRQUICA  
**Fecha:** 20 de marzo de 2026

---

## 1. INTRODUCCIÓN
### 1.1. Propósito del documento
Este documento tiene por propósito establecer los criterios técnicos, funcionales y normativos que regirán el desarrollo del diseño de detalle del Sistema de Señalización, control de tráfico y comunicaciones del Corredor Férreo La Dorada – Chiriguaná, en el marco del Contrato de Concesión APP No. 001 de 2025 y sus Apéndices Técnicos. Su alcance se limita a definir una base preliminar de diseño del sistema, su arquitectura general, sus principios de operación y los criterios mínimos de cumplimiento aplicables al subsistema de control de trenes, al Centro de Control de Operaciones, a las comunicaciones requeridas para la señalización, a la protección de pasos a nivel y a la interfaz operacional con la red de FENOCO. 

El documento orienta el sistema hacia una arquitectura de Positive Train Control (PTC) con cantonamiento virtual, conforme a la exigencia contractual basada en la **FRA 49 CFR Part 236, Subpart I**, complementada por la FRA 49 CFR Part 213, el AREMA Manual for Railway Engineering y el AREMA Communications and Signals Manual, como marco técnico principal para el sistema de señalización y control de trenes. Para aspectos de seguridad funcional y comunicaciones de seguridad, se adoptan como referencia **EN 50126, EN 50716:2023, EN 50129 y EN 50159**. Para los elementos que deban desarrollarse en territorio colombiano se aplicará, además, la normativa nacional pertinente, en particular RETIE, NSR-10, NTC 4741 y el Manual de Señalización Vial adoptado mediante Resolución 1885 de 2015.

El documento no constituye diseño constructivo ni reemplaza la ingeniería de detalle. En consecuencia, no define cantidades finales, localización exacta de equipos, rutas definitivas, coberturas, memorias de cálculo, planos constructivos, protocolos de prueba ni especificaciones de instalación.

### 1.2. Alcance del Sistema
El sistema de señalización a desarrollar para el Corredor Férreo La Dorada–Chiriguaná se establecerá bajo una arquitectura de **Positive Train Control (PTC) con cantonamiento virtual** en los tramos de vía sencilla del corredor y cantonamiento físico en cinco puntos operativos críticos: **La Dorada–México, Puerto Berrío–Grecia, Barrancabermeja, García Cadena y Zapatosa**. En estas ubicaciones se dispondrá de enclavamientos electrónicos, encargados de asegurar las rutas mediante lógica segura, verificar las condiciones de liberación y ocupación de vía, comandar señales físicas laterales y cambiavías motorizados, y permitir, cuando aplique, la transferencia controlada a operación local en caso de contingencia, mantenimiento o pérdida de comunicación con el Centro de Control de Operaciones (CCO). Esta solución se adopta para un corredor ferroviario de aproximadamente **526,133 km**, en trocha de **914 mm**, destinado principalmente al transporte de carga, operado en su mayor parte como vía única con apartaderos en estaciones y con conexión operacional en su extremo norte con la red de FENOCO en Chiriguaná. 

Su alcance comprende la definición de los criterios funcionales, técnicos y normativos que deberán regirán el desarrollo de la ingeniería de detalle de los siguientes elementos del sistema:
- **a)** el sistema de control de trenes PTC (FRA 49 CFR Part 236 Subpart I);
- **b)** cinco enclavamientos (La Dorada–México, Puerto Berrío–Grecia, Barrancabermeja, García Cadena y Zapatosa);
- **c)** el Centro de Control de Operaciones (CCO);
- **d)** las comunicaciones requeridas (Fibra Óptica Backbone + Red TETRA);
- **e)** los pasos a nivel con protección activa;
- **f)** la alimentación de energía y su redundancia; y
- **g)** la interfaz operacional con la red de FENOCO en Chiriguaná.

Para efectos del presente documento, el sistema se concibe sobre una arquitectura compuesta por: equipos embarcados PTC, servidor o subsistema central de control en el CCO, red lineal de fibra óptica como backbone principal de transporte de datos, sistema de radio TETRA como medio de comunicación operacional y de soporte al sistema, y controladores locales de pasos a nivel cuando resulten aplicables.

### 1.3. Principio fundamental de diseño: Arquitectura PTC Virtual
El principio fundamental de diseño es la implementación de un PTC con cantonamiento virtual, complementada con cantonamiento físico en los puntos operativos críticos. Bajo esta filosofía, el control del movimiento en los tramos intermedios se fundamenta en autoridades de movimiento emitidas desde un servidor central (CCO), con soporte en equipos embarcados, posicionamiento del tren (GNSS/EOT), comunicaciones seguras y lógica de protección automática. En los puntos operativos críticos, el sistema se complementará con enclavamientos electrónicos, señales físicas laterales y cambiavías motorizados. Fuera de estas zonas, los desvíos podrán resolverse mediante cambiavías autotalonables supervisados al CCO.

La arquitectura PTC virtual se adopta como criterio rector por cuanto permite concentrar la infraestructura física únicamente donde es técnica y operacionalmente necesaria, manteniendo en el resto del corredor una solución centralizada, escalable y compatible con la operación ferroviaria de carga prevista.

---

## 2. MARCO CONTRACTUAL
### 2.1. Jerarquía normativa aplicable
El presente documento se interpreta y aplica en concordancia con el Contrato de Concesión APP No. 001 de 2025 y sus Apéndices Técnicos. Cuando exista contradicción entre disposiciones, criterios, normas o referencias técnicas, prevalecerá el instrumento de mayor jerarquía conforme al siguiente orden: 
- **(i)** el Contrato de Concesión y sus documentos contractuales prevalentes; 
- **(ii)** el Apéndice Técnico 1 (AT1), en lo relativo al alcance, características del corredor y condiciones funcionales; 
- **(iii)** el Apéndice Técnico 3 (AT3), en lo relativo a especificaciones técnicas generales y marco normativo para Estudios de Detalle; 
- **(iv)** el presente Documento de Bases y Criterios de Diseño; y 
- **(v)** las normas y estándares técnicos expresamente adoptados en este documento.

### 2.2 Relación de Normas Adoptadas
#### **A. Normativa Principal (Control y Señalización)**
- **FRA 49 CFR Part 236, Subpart I** – Positive Train Control Systems (Base Rectora).
- **FRA 49 CFR Part 213** – Track Safety Standards.
- **AREMA Manual for Railway Engineering.**
- **AREMA Communications and Signals Manual.**
- **AAR Manual of Standards and Recommended Practices.**

#### **B. Normativa Complementaria (Seguridad Funcional)**
- **EN 50126** – RAMS (Garantía de Fiabilidad y Seguridad).
- **EN 50716:2023** – Software para sistemas de control y protección.
- **EN 50129** – Sistemas electrónicos relacionados con la seguridad.
- **EN 50159** – Comunicaciones relacionadas con seguridad.

#### **C. Normativa Técnica de Telecomunicaciones**
- **PTC Virtual (SICC)/PTC Virtual (SICC) y radio ferroviaria** — ERA CCS TSI; UIC/ETSI (Referencias de interoperabilidad).
- **ETSI EN 300 392 (Serie)** — TETRA V+D / Seguridad / PEI / Ensayos.
- **ITU-T G.652.D / G.652.D** — Especificaciones de Fibra Óptica (Soberanía de Backbone).
- **Telcordia GR-20-CORE / ANSI/ICEA S-87-640** — Cables de fibra óptica planta externa.
- **Estándar SICC (FRA/AREMA) NAT5 405-2 / NAT 716 / ET 03.366 (Series)** — Guías de buenas prácticas (Armonizadas con regulación MinTIC/CRC/ANE).

#### **D. Normativa Nacional (Colombia)**
- **RETIE / RETILAP** — Instalaciones eléctricas e iluminación.
- **NSR-10** — Construcción Sismo Resistente.
- **NTC 4741** — Señalización de vías férreas.
- **Resolución 1885 de 2015** — Manual de Señalización Vial.

---

## 3. JUSTIFICACIÓN TÉCNICA DE LOS ESTÁNDARES ADOPTADOS
- **FRA 49 CFR Part 236, Subpart I:** Constituye la base normativa principal para la definición funcional del sistema PTC y la arquitectura PTC virtual adoptada.
- **EN 50716:2023/50129:** Se adoptan para el desarrollo y validación del software y hardware electrónico, siempre que no contradigan el marco rector FRA/AREMA.
- **TETRA (ETSI EN 300 392):** Establece el marco técnico para las comunicaciones de voz y datos que soportarán la operación ferroviaria soberana.

---

## 4. TRAZABILIDAD Y GOBERNANZA (.42)
En caso de requisitos divergentes entre normas del mismo nivel, se adoptará la disposición más restrictiva o segura, siempre que sea compatible con el Contrato y la arquitectura general definida. Cualquier cambio que implique impactos en alcance o costo deberá ser tratado vía **Gestión Contractual / Decisión Técnica (DT)** bajo el protocolo de la Metodología Punto 42.

---
**VALIDADO POR PMO - LFC2 SICC v6.3.3 SOBERANO**
