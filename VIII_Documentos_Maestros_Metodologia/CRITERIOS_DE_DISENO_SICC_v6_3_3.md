# DOCUMENTO DE CRITERIOS DE DISEÑO (SICC v6.3.3)
## SICC : SISTEMA DE INTERVENCIÓN Y CONTROL CENTRALIZADO
### PROYECTO: APP LA DORADA - CHIRIGUANÁ

**Código:** LFC2-SICC-DOC-001  
**Versión:** v6.3.3 SOBERANO — BLINDAJE FORENSE ESTRATÉGICO  
**Fecha:** 20 de marzo de 2026

---

## 1. INTRODUCCIÓN
### 1.1. Propósito del documento
Este documento establece los criterios técnicos, funcionales y normativos que rigen el diseño de detalle del Sistema de Señalización, Control de Tráfico y Comunicaciones del Corredor Férreo La Dorada – Chiriguaná, bajo el Contrato de Concesión APP No. 001 de 2025. 

El sistema adopta una arquitectura de **Positive Train Control (PTC) con cantonamiento virtual**, fundamentada en la **FRA 49 CFR Part 236, Subpart I**, el **Manual AREMA 2021** (Communications and Signals) y la norma de software unificado **EN 50716:2023**. Esta arquitectura prioriza la virtualización sobre la infraestructura física para proteger el CAPEX y garantizar la soberanía técnica del proyecto.

### 1.2. Alcance del Sistema
El sistema se establece sobre una arquitectura de PTC con cantonamiento virtual en la vía sencilla y cantonamiento físico restringido exclusivamente a cinco (5) puntos operativos críticos: **La Dorada–México, Puerto Berrío–Grecia, Barrancabermeja, García Cadena y Zapatosa**. 

El alcance incluye:
- **a) Control de Trenes**: Basado en FRA 236-I (PTC).
- **b) Enclavamientos**: SIL-4 en estaciones críticas.
- **c) Detección en ENCE**: Exclusivamente mediante **Contadores de Ejes (Axle Counters) SIL-4**, prohibiendo el uso de circuitos de vía para proteger el riel continuo (CWR) conforme a **FRA 213.119**.
- **d) Comunicaciones**: Red TETRA (Voz/Datos) y Fibra Óptica G.652.D, con habilitación de **Fase Transitoria Satelital/Celular** para comisionamiento temprano.
- **e) Interoperabilidad**: Implementación del **Digital Gateway FRA/AREMA** en Chiriguaná para interoperabilidad **Non-Stop** con FENOCO.
- **f) Redundancia de Radio**: Radioenlaces de **Microondas** como failover del backbone de fibra.
- **g) Material Rodante**: 15 Locomotoras Inteligentes (Smart Locomotives) + 15 Unidades de Integridad de Tren (EOT).

---

## 2. MARCO CONTRACTUAL Y JERARQUÍA
### 2.1. Jerarquía Normativa Aplicable
1. Contrato de Concesión APP 001 de 2025.
2. Apéndice Técnico 1 (Alcance y Funcionalidad).
3. Apéndice Técnico 3 (Especificaciones y Manual AREMA 2021).
4. El presente Documento de Criterios de Diseño (SICC v6.3.3).
5. Normas Internacionales Adoptadas (FRA, AREMA 2021, EN 50716).

### 2.2 Relación de Normas Adoptadas
- **FRA 49 CFR Part 236, Subpart I** (PTC).
- **FRA 49 CFR Part 213** (Track Safety).
- **AREMA Communications and Signals Manual 2021** (Capítulos 17.3.1, 17.3.3, 17.3.5 para Hazard Log).
- **EN 50716:2023** (Software ferroviario unificado, reemplaza EN 50716:2023).
- **ETSI EN 300 392 (Serie)** (TETRA V+D).
- **ITU-T G.652.D** (Fibra Monomodo estándar).
- **EN/IEC 62368-1** (Seguridad eléctrica TI).

---

## 3. DESCRIPCIÓN DEL PROYECTO
### 3.1. Corredor La Dorada – Chiriguaná
El proyecto moderniza el tramo de 526,13 km para carga, centrando el gasto en software y telecomunicaciones. La interoperabilidad con FENOCO es puramente operacional para evitar sobrecostos por software propietario externo.

### 3.2. Localización y Municipios
(Se integra la Tabla 1 de municipios desde PK 201+470 hasta PK 722+683 conforme al AT1).

---

## 4. FILOSOFÍA DE DISEÑO: ARQUITECTURA PTC VIRTUAL
### 4.1. Fundamento Contractual
Conforme a la Tabla 17 del AT1, el sistema es PTC. Para proteger el CAPEX, se elimina el hardware redundante en vía fuera de las 5 estaciones críticas.

### Tabla 2. Arquitectura Funcional del Sistema
| Componente | Criterio Adoptado |
| :--- | :--- |
| **Arquitectura Central** | PTC Virtual (Software-Defined) |
| **Detección en ENCE** | **Contadores de Ejes (Axle Counters) SIL-4** (Obligatorio) |
| **Cantones en línea** | Virtuales (Gestionados por Back Office PTC) |
| **Señalización Lateral** | Solo en las 5 estaciones críticas |
| **Desvíos en línea** | Cambiavías autotalonables con comprobación al CCO |
| **Comunicaciones** | TETRA / Satelital / Red Celular (Fase Transitoria) |
| **Fibra Óptica** | G.652.D Full Spectrum (Sin Red Vital IP/G.652.D) |
| **Interoperabilidad** | **Digital Gateway FRA/AREMA (Non-Stop Digital Interop)** |
| **Integridad del Tren** | **15 Unidades EOT (End of Train)** con telemetría vital |
| **Redundancia de Red** | Failover automático **Fibra ↔ Microondas** (Red Vital IP) |

---

## 5. CRITERIOS DEL SISTEMA DE CONTROL DE TRENES (PTC)
### 5.1. Funcionalidades de Seguridad
Basadas en FRA 49 CFR 236 Subpart I: Prevención de colisiones, exceso de velocidad y protección de zonas de trabajo.

### 5.2. Subsistema Embarcado (Onboard)
El cerebro del sistema reside en el tren. Se exige el cumplimiento de la **EN 50716:2023** para asegurar que el software del tren y del servidor central se evalúen como una sola entidad vital, permitiendo la eliminación de señales físicas.
- **Computador PTC**: Cumplimiento de **AREMA 2021 Parte 17** para aseguramiento de seguridad y matricería de peligros (Hazard Log).
- **DMI**: Interfaz clara con Velocidad Permitida y Autorización de Movimiento (MA).

---

## 6. CRITERIOS DE TELECOMUNICACIONES
### 6.1. Fibra Óptica
- **Hardware**: SFPs comerciales de larga distancia (120km) sobre fibra G.652.D.
- **Prohibición**: Queda vetada la especificación de Red Vital IP o fibra G.652.D por redundancia de hilos (48 hilos disponibles).

### 6.2. Radio TETRA, Microondas y Fase Transitoria
- **Base**: Red TETRA conforme a ETSI EN 300 392.
- **Microondas**: Red de radioenlaces para garantizar disponibilidad del backbone > 99.9%.
- **Soberanía**: Se autoriza el uso de **Sistemas Satelitales y Redes Celulares (GSM/LTE)** como medio primario durante la Fase Transitoria para habilitar el PTC sin esperar a la obra civil de torres.

---

## 7. CENTRO DE CONTROL DE OPERACIONES (CCO)
Ubicado en La Dorada. Concentra la lógica CTC y el Back Office PTC. Redundancia N+1 en servidores críticos.

---

## 8. PASOS A NIVEL (PAN)
Protección autónoma local. No dependen de la lógica vital del PTC para su activación preliminar, solo reportan estado al CCO. Cumplimiento con FRA 234 y la norma nacional NSR-10.

---

## 9. INTEROPERABILIDAD CON FENOCO
### 9.1. Procedimiento Stop & Switch
La conexión en Chiriguaná es puramente operativa. El tren para, conmuta equipos y pide autorización manual a FENOCO. Se prohíbe cualquier interfaz lógica que requiera acceso a protocolos propietarios de terceros (Alstom/ITCS).

---

## 10. SISTEMA DE ENERGÍA Y BAJA TENSIÓN
### 10.1. Clasificación 
- **Señalización (Vital)**: 110 V DC con rectificadores redundantes. 
- **Telecomunicaciones**: 48 V DC estándar ETSI.
- **Autonomía**: Mínimo 8 horas de respaldo mediante baterías LiFePO4.

### 10.2. Protección del Riel (CWR)
Para cumplir con **FRA 213.119**, se prohíbe la inyección de corriente al riel (Contadores de Ejes (Axle Counters)). La detección debe ser por Contadores de Ejes atornillados al patín que no interrumpen la integridad eléctrica del riel continuo.

---
**FIN DEL DOCUMENTO MAESTRO v6.3.3 SICC**
