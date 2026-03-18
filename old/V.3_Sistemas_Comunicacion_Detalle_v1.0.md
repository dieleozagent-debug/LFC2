# V.3 Sistemas de Comunicación - Ingeniería de Detalle (v1.0)

**Versión:** 1.0  
**Fecha:** 02/10/2025  
**Sistema:** Sistemas de Comunicación  
**Fase:** D. Ingeniería de Detalle  
**Referencias:** EN 50126/50128/50129, IEC 62290, FRA/AREMA 615, Red Vital IP / TETRA, EIRENE

---

## 1. Resumen Ejecutivo

Este documento detalla la ingeniería de los sistemas de comunicación para el proyecto APP La Dorada-Chiriguaná, abarcando Red Vital IP / TETRA, fibra óptica, radio, satelital y comunicaciones de emergencia, con integración completa con PTC y CTC.

> **📋 DOCUMENTO MAESTRO CONSOLIDADO:** Para la versión definitiva y consolidada del sistema de Comunicaciones, consulte: `IV. Ingenieria básica/SIS_Comunicaciones_Definitivo_v1.0.md`

### 1.1 Alcance del Sistema de Comunicaciones
- **Sistema principal:** Red de comunicaciones ferroviarias
- **Componentes:** Red Vital IP / TETRA, fibra óptica, radio, satelital, emergencias
- **Cobertura:** 146 km de vía, 5 estaciones, 146 pasos a nivel
- **Capacidad:** 24 trenes simultáneos + servicios auxiliares

### 1.2 Objetivos del Sistema
- **Comunicación tren-tierra:** Enlace crítico para PTC Virtual (FRA 236)
- **Comunicación operacional:** Voz y datos para operadores
- **Comunicación de emergencia:** Enlaces de respaldo y emergencia
- **Disponibilidad:** 99.9% de disponibilidad operacional
- **Seguridad:** Cumplimiento EN 50126/50128/50129

---

## 2. Arquitectura del Sistema

### 2.1 Arquitectura General
```
┌─────────────────────────────────────────────────────────────┐
│                SISTEMAS DE COMUNICACIÓN                     │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │    Red Vital IP / TETRA    │  │   Fibra     │  │    Radio    │         │
│  │  Principal  │  │  Óptica     │  │  Respaldo   │         │
│  │  (EIRENE)   │  │  (DWDM)     │  │  (TETRA)    │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  Satelital  │  │ Emergencia  │  │  Internet   │         │
│  │  Respaldo   │  │  (VHF/UHF)  │  │  Admin      │         │
│  │  (VSAT)     │  │             │  │  (MPLS)     │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Estación  │  │   Estación  │  │   Estación  │         │
│  │  Base 1     │  │  Base 2     │  │  Base 3     │         │
│  │ (La Dorada) │  │(Puerto Salgar)│ │(Puerto Berrío)│       │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Componentes Principales

#### 2.2.1 Red Vital IP / TETRA (Global System for Mobile Communications - Railway)
- **Estándar:** EIRENE (European Integrated Railway Radio Enhanced Network)
- **Frecuencias:** 876-880 MHz (uplink), 921-925 MHz (downlink)
- **Cobertura:** 146 km de vía con 5 estaciones base
- **Capacidad:** 24 trenes simultáneos + servicios auxiliares

#### 2.2.2 Fibra Óptica
- **Tecnología:** DWDM (Dense Wavelength Division Multiplexing)
- **Capacidad:** 100 Gbps por canal, 80 canales
- **Cobertura:** 146 km de vía con redundancia
- **Aplicaciones:** Datos críticos, video, telemetría

#### 2.2.3 Radio Respaldo
- **Tecnología:** TETRA (Terrestrial Trunked Radio)
- **Frecuencias:** 380-400 MHz
- **Cobertura:** 146 km de vía
- **Aplicaciones:** Voz, datos, emergencias

#### 2.2.4 Comunicaciones Satelitales
- **Tecnología:** VSAT (Very Small Aperture Terminal)
- **Banda:** Ku-band (12-14 GHz)
- **Cobertura:** Nacional e internacional
- **Aplicaciones:** Respaldo, emergencias, administración

---

## 3. Especificaciones Técnicas

### 3.1 Red Vital IP / TETRA

#### 3.1.1 Estaciones Base
- **Fabricante:** Nokia (BSC, BTS)
- **Potencia:** 40W por sector
- **Antenas:** Sectoriales 120° (3 sectores por estación)
- **Altura:** 30-50 metros
- **Cobertura:** 15-20 km por estación

#### 3.1.2 Equipos Embarcados
- **Fabricante:** Thales (Cab Radio)
- **Potencia:** 8W (móvil), 2W (portátil)
- **Antenas:** Omnidireccionales
- **Batería:** 8 horas de autonomía
- **Interfaz:** PTC Virtual (FRA 236) compatible

#### 3.1.3 Red Core
- **MSC:** Mobile Switching Centre
- **BSC:** Base Station Controller
- **HLR:** Home Location Register
- **VLR:** Visitor Location Register
- **AUC:** Authentication Centre

### 3.2 Fibra Óptica

#### 3.2.1 Cable Óptico
- **Tipo:** G.652.D (SMF-28)
- **Fibras:** 144 fibras (72 pares)
- **Atenuación:** 0.35 dB/km @ 1550 nm
- **Dispersión:** 18 ps/nm/km @ 1550 nm
- **Instalación:** Enterrado + aéreo

#### 3.2.2 Equipos DWDM
- **Fabricante:** Ciena (WaveLogic)
- **Canales:** 80 canales (100 GHz spacing)
- **Capacidad:** 100 Gbps por canal
- **Amplificadores:** EDFA (Erbium Doped Fiber Amplifier)
- **Regeneradores:** 3R (Reamplify, Reshape, Retime)

#### 3.2.3 Equipos de Terminal
- **ROADM:** Reconfigurable Optical Add-Drop Multiplexer
- **OTN:** Optical Transport Network
- **SDH:** Synchronous Digital Hierarchy
- **Ethernet:** 10/100/1000/10000 Mbps

### 3.3 Radio TETRA

#### 3.3.1 Estaciones Base
- **Fabricante:** Motorola (TETRA)
- **Potencia:** 25W por sector
- **Antenas:** Sectoriales 120° (3 sectores)
- **Altura:** 25-40 metros
- **Cobertura:** 10-15 km por estación

#### 3.3.2 Equipos Móviles
- **Fabricante:** Motorola (MTM800)
- **Potencia:** 3W (móvil), 1W (portátil)
- **Batería:** 12 horas de autonomía
- **Interfaz:** Voz, datos, GPS
- **Criptografía:** AES-256

### 3.4 Comunicaciones Satelitales

#### 3.4.1 Terminales VSAT
- **Fabricante:** Hughes (HN7740)
- **Antena:** 1.2 metros (Ku-band)
- **Potencia:** 2W (transmisión)
- **Velocidad:** 2 Mbps (downlink), 512 kbps (uplink)
- **Protocolo:** IP over satellite

#### 3.4.2 Hub Satelital
- **Ubicación:** Bogotá (Colombia)
- **Antena:** 7.3 metros
- **Potencia:** 100W
- **Capacidad:** 100 Mbps
- **Redundancia:** 2+1

---

## 4. Funcionalidades del Sistema

### 4.1 Comunicación Tren-Tierra

#### 4.1.1 PTC Virtual (FRA 236)
- **Movement Authority:** Autorización de movimiento
- **Position Report:** Reporte de posición
- **Emergency Stop:** Parada de emergencia
- **Data Logging:** Registro de datos
- **Latencia:** < 500 ms

#### 4.1.2 Servicios de Voz
- **Driver-Controller:** Comunicación directa
- **Group Call:** Llamadas grupales
- **Emergency Call:** Llamadas de emergencia
- **Priority Call:** Llamadas prioritarias
- **Call Recording:** Grabación de llamadas

### 4.2 Comunicación Operacional

#### 4.2.1 CTC-PTC
- **Interface FFFIS:** 8 interfaces bidireccionales
- **Protocolo:** XML/JSON over IP
- **Frecuencia:** 1 Hz (tiempo real)
- **Latencia:** < 100 ms
- **Confiabilidad:** 99.99%

#### 4.2.2 SCADA
- **Protocolo:** OPC UA
- **Datos:** Telemetría, alarmas, control
- **Frecuencia:** 0.1 Hz (supervisión)
- **Latencia:** < 1 s
- **Confiabilidad:** 99.9%

### 4.3 Comunicación de Emergencia

#### 4.3.1 Enlaces de Respaldo
- **TETRA:** Radio de respaldo
- **VSAT:** Satelital de emergencia
- **VHF/UHF:** Radio local
- **Internet:** Enlace administrativo
- **Redundancia:** N+1

#### 4.3.2 Procedimientos de Emergencia
- **Activación automática:** Failover automático
- **Activación manual:** Procedimientos manuales
- **Coordinación:** Integración con servicios de emergencia
- **Comunicación:** Enlaces múltiples

---

## 5. Seguridad y Confiabilidad

### 5.1 Seguridad Funcional (EN 50126/50128/50129)

#### 5.1.1 Objetivos de Seguridad
- **SIL 4:** Comunicación PTC Virtual (FRA 236)
- **SIL 3:** Comunicación operacional
- **SIL 2:** Comunicación de supervisión
- **SIL 1:** Comunicación administrativa

#### 5.1.2 Arquitectura de Seguridad
- **Redundancia:** N+1 en enlaces críticos
- **Diversidad:** Diferentes tecnologías
- **Aislamiento:** Separación física y lógica
- **Monitoreo:** Supervisión continua

### 5.2 Ciberseguridad (IEC 62443)

#### 5.2.1 Zonas de Seguridad
- **Zona 0:** Red de control crítico (Red Vital IP / TETRA)
- **Zona 1:** Red de supervisión (Fibra)
- **Zona 2:** Red administrativa (Internet)
- **Zona 3:** Red externa (Satelital)

#### 5.2.2 Medidas de Protección
- **Firewall:** Protección perimetral
- **IDS/IPS:** Detección de intrusiones
- **Criptografía:** AES-256, RSA-2048
- **VPN:** Túneles seguros
- **Backup:** Respaldo y recuperación

### 5.3 Disponibilidad

#### 5.3.1 Objetivos de Disponibilidad
- **Red Vital IP / TETRA:** 99.9% (8.76 horas/año)
- **Fibra Óptica:** 99.95% (4.38 horas/año)
- **TETRA:** 99.5% (43.8 horas/año)
- **VSAT:** 99.0% (87.6 horas/año)

#### 5.3.2 Estrategias de Redundancia
- **Enlaces:** N+1 con failover automático
- **Equipos:** Redundancia en componentes críticos
- **Alimentación:** UPS + generador
- **Comunicación:** Enlaces múltiples

---

## 6. Integración y Comunicaciones

### 6.1 Integración PTC

#### 6.1.1 Protocolo Red Vital IP / TETRA
- **Estándar:** EIRENE v15.4
- **Formato:** GPRS/EDGE
- **Frecuencia:** 1 Hz (tiempo real)
- **Latencia:** < 500 ms
- **Confiabilidad:** 99.9%

#### 6.1.2 Datos Intercambiados
- **Position Report:** Coordenadas GPS
- **Movement Authority:** Autorización de movimiento
- **Emergency Stop:** Parada de emergencia
- **System Status:** Estado del sistema
- **Alarms:** Alarmas y eventos

### 6.2 Comunicaciones Externas

#### 6.2.1 Enlaces Nacionales
- **Fibra Óptica:** Enlace principal
- **Radio:** Enlace de respaldo
- **Satelital:** Enlace de emergencia
- **Internet:** Enlace administrativo

#### 6.2.2 Enlaces Internacionales
- **VSAT:** Enlace satelital
- **Internet:** Enlace IP
- **Roaming:** Red Vital IP / TETRA internacional
- **Backup:** Enlaces múltiples

---

## 7. Operación y Mantenimiento

### 7.1 Operación

#### 7.1.1 Centro de Control de Red
- **Ubicación:** La Dorada (Colombia)
- **Personal:** 24/7 (3 turnos)
- **Equipos:** NMS (Network Management System)
- **Monitoreo:** SNMP, Syslog, NetFlow
- **Alertas:** SMS, email, pager

#### 7.1.2 Procedimientos Operacionales
- **Inicio de Turno:** Checklist de verificación
- **Operación Normal:** Monitoreo continuo
- **Emergencias:** Procedimientos de emergencia
- **Cierre de Turno:** Handover y reportes

### 7.2 Mantenimiento

#### 7.2.1 Mantenimiento Preventivo
- **Diario:** Verificaciones básicas
- **Semanal:** Limpieza y calibración
- **Mensual:** Pruebas funcionales
- **Anual:** Revisión completa

#### 7.2.2 Mantenimiento Correctivo
- **Nivel 1:** Operadores (básico)
- **Nivel 2:** Técnicos (intermedio)
- **Nivel 3:** Especialistas (avanzado)
- **Nivel 4:** Fabricante (crítico)

---

## 8. Pruebas y Validación

### 8.1 Pruebas de Fábrica (FAT)

#### 8.1.1 Pruebas de Hardware
- **Red Vital IP / TETRA:** Pruebas de cobertura y capacidad
- **Fibra Óptica:** Pruebas de atenuación y dispersión
- **TETRA:** Pruebas de radio y criptografía
- **VSAT:** Pruebas de enlace satelital

#### 8.1.2 Pruebas de Software
- **NMS:** Pruebas de gestión de red
- **Interfaces:** Pruebas de integración
- **Protocolos:** Pruebas de comunicación
- **Seguridad:** Pruebas de ciberseguridad

### 8.2 Pruebas de Sitio (SAT)

#### 8.2.1 Pruebas de Integración
- **PTC:** Pruebas de comunicación PTC VIRTUAL
- **CTC:** Pruebas de interfaz FFFIS
- **SCADA:** Pruebas de telemetría
- **Emergencias:** Pruebas de procedimientos

#### 8.2.2 Pruebas de Aceptación
- **Funcionales:** Cumplimiento de requisitos
- **Rendimiento:** Objetivos de disponibilidad
- **Seguridad:** Cumplimiento normativo
- **Usabilidad:** Interfaz de usuario

---

## 9. Entregables y Cronograma

### 9.1 Entregables Fase D

#### 9.1.1 Documentos de Ingeniería
- **Especificación Técnica:** Sistemas de comunicación
- **Plan de Pruebas:** FAT/SAT
- **Manual de Operación:** Procedimientos
- **Manual de Mantenimiento:** Mantenimiento

#### 9.1.2 Equipos y Configuración
- **Red Vital IP / TETRA:** Estaciones base y equipos embarcados
- **Fibra Óptica:** Cable y equipos DWDM
- **TETRA:** Estaciones base y equipos móviles
- **VSAT:** Terminales y hub satelital

### 9.2 Cronograma de Implementación

#### 9.2.1 Fase de Desarrollo
- **Mes 1-2:** Especificación y diseño
- **Mes 3-4:** Adquisición de equipos
- **Mes 5-6:** Pruebas de fábrica
- **Mes 7-8:** Instalación y configuración

#### 9.2.2 Fase de Puesta en Servicio
- **Mes 9:** Pruebas de integración
- **Mes 10:** Pruebas de aceptación
- **Mes 11:** Puesta en servicio
- **Mes 12:** Operación y mantenimiento

---

## 10. Anexos

### 10.1 Matriz de Trazabilidad
| Requisito | Especificación | Prueba | Estado |
|:---|:---|:---|:---:|
| COM-001 | Comunicación PTC Virtual (FRA 236) | FAT-001 | 🟢 |
| COM-002 | Comunicación operacional | FAT-002 | 🟢 |
| COM-003 | Comunicación de emergencia | FAT-003 | 🟢 |
| COM-004 | Disponibilidad 99.9% | SAT-001 | 🟢 |
| COM-005 | Integración PTC-CTC | SAT-002 | 🟢 |

### 10.2 Glosario de Términos
- **Red Vital IP / TETRA:** Global System for Mobile Communications - Railway
- **EIRENE:** European Integrated Railway Radio Enhanced Network
- **TETRA:** Terrestrial Trunked Radio
- **VSAT:** Very Small Aperture Terminal
- **DWDM:** Dense Wavelength Division Multiplexing
- **PTC VIRTUAL:** European Train Control System
- **NMS:** Network Management System
- **SNMP:** Simple Network Management Protocol

### 10.3 Referencias Normativas
- **EN 50126:** Aplicación de técnicas de confiabilidad para sistemas ferroviarios
- **EN 50128:** Software para sistemas de control y protección ferroviarios
- **EN 50129:** Sistemas de señalización ferroviaria
- **IEC 62290:** Sistemas de gestión ferroviaria
- **IEC 62443:** Seguridad de sistemas de automatización industrial
- **FRA/AREMA 615:** Sistemas de control de tráfico ferroviario
- **EIRENE:** European Integrated Railway Radio Enhanced Network

### 10.4 Control de Versiones
| Versión | Fecha | Autor | Cambios |
|:---|:---|:---|:---|
| 0.1 | 02/10/2025 | Grupo Ortiz | Versión inicial |

---

**Documento:** V.3 Sistemas de Comunicación - Ingeniería de Detalle  
**Estado:** ✅ **COMPLETADO**  
**Próximo:** V.4 Sistemas de Potencia - Ingeniería de Detalle

