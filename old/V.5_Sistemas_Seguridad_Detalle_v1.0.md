# V.5 Sistemas de Seguridad - Ingeniería de Detalle (v1.0)

**Versión:** 1.0  
**Fecha:** 02/10/2025  
**Sistema:** Sistemas de Seguridad  
**Fase:** D. Ingeniería de Detalle  
**Referencias:** EN 50126/50128/50129, IEC 62290, UIC 615, IEC 62443, ISO 27001

---

## 1. Resumen Ejecutivo

Este documento detalla la ingeniería de los sistemas de seguridad para el proyecto APP La Dorada-Chiriguaná, abarcando la seguridad funcional, ciberseguridad, seguridad física, control de acceso y la integración con sistemas críticos como PTC y CTC.

### 1.1 Alcance del Sistema de Seguridad
- **Sistema principal:** Seguridad integral ferroviaria
- **Componentes:** Seguridad funcional, ciberseguridad, física, control de acceso
- **Cobertura:** 146 km de vía, 5 estaciones, 146 pasos a nivel
- **Capacidad:** 24 trenes simultáneos + personal + infraestructura

### 1.2 Objetivos del Sistema
- **Seguridad funcional:** Cumplimiento EN 50126/50128/50129
- **Ciberseguridad:** Cumplimiento IEC 62443, ISO 27001
- **Seguridad física:** Protección de infraestructura crítica
- **Control de acceso:** Gestión de accesos y permisos
- **Disponibilidad:** 99.95% de disponibilidad operacional

---

## 2. Arquitectura del Sistema

### 2.1 Arquitectura General
```
┌─────────────────────────────────────────────────────────────┐
│                    SISTEMAS DE SEGURIDAD                    │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ Seguridad   │  │Ciberseguridad│  │ Seguridad   │         │
│  │ Funcional   │  │ (IEC 62443) │  │   Física    │         │
│  │(EN 5012x)   │  │             │  │             │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ Control de  │  │ Monitoreo   │  │ Respuesta   │         │
│  │   Acceso    │  │ y Alarmas   │  │ Emergencias │         │
│  │             │  │             │  │             │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Centro    │  │   Centro    │  │   Centro    │         │
│  │ Seguridad   │  │Ciberseguridad│  │ Emergencias │         │
│  │ (La Dorada) │  │ (La Dorada) │  │ (La Dorada) │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Componentes Principales

#### 2.2.1 Seguridad Funcional (EN 50126/50128/50129)
- **SIL 4:** Funciones críticas de seguridad
- **SIL 3:** Funciones de control
- **SIL 2:** Funciones de supervisión
- **SIL 1:** Funciones auxiliares

#### 2.2.2 Ciberseguridad (IEC 62443)
- **Zona 0:** Red de control crítico
- **Zona 1:** Red de supervisión
- **Zona 2:** Red administrativa
- **Zona 3:** Red externa

#### 2.2.3 Seguridad Física
- **Perímetro:** Vallas, sensores, cámaras
- **Accesos:** Control de entrada/salida
- **Iluminación:** Sistema de iluminación de seguridad
- **Vigilancia:** CCTV, patrullaje, monitoreo

---

## 3. Especificaciones Técnicas

### 3.1 Seguridad Funcional

#### 3.1.1 Objetivos de Seguridad
- **SIL 4:** PTC VIRTUAL Level 2, RBC, interlocking
- **SIL 3:** CTC, comunicaciones críticas
- **SIL 2:** SCADA, monitoreo
- **SIL 1:** Sistemas auxiliares

#### 3.1.2 Arquitectura de Seguridad
- **Redundancia:** 2oo3 en componentes críticos
- **Diversidad:** Diferentes tecnologías
- **Aislamiento:** Separación física y lógica
- **Monitoreo:** Supervisión continua

#### 3.1.3 Verificación y Validación
- **Pruebas de seguridad:** Funcionales, de integración
- **Análisis de riesgos:** HAZOP, FMEA, FTA
- **Certificación:** TÜV, SGS, Bureau Veritas
- **Auditoría:** Interna, externa, regulatoria

### 3.2 Ciberseguridad

#### 3.2.1 Zonas de Seguridad
- **Zona 0:** Red de control crítico (PTC, CTC)
- **Zona 1:** Red de supervisión (SCADA, monitoreo)
- **Zona 2:** Red administrativa (oficinas, gestión)
- **Zona 3:** Red externa (internet, proveedores)

#### 3.2.2 Medidas de Protección
- **Firewall:** Protección perimetral
- **IDS/IPS:** Detección de intrusiones
- **Antivirus:** Protección de endpoints
- **Criptografía:** AES-256, RSA-2048
- **VPN:** Túneles seguros

#### 3.2.3 Gestión de Identidades
- **Autenticación:** Multi-factor (MFA)
- **Autorización:** Control de acceso basado en roles (RBAC)
- **Auditoría:** Logs de acceso y actividad
- **Gestión:** Provisioning, deprovisioning

### 3.3 Seguridad Física

#### 3.3.1 Perímetro de Seguridad
- **Vallas:** 2.5 metros de altura, concertina
- **Sensores:** PIR, microondas, fibra óptica
- **Cámaras:** CCTV, visión nocturna, PTZ
- **Iluminación:** LED, 100 lux, detección de movimiento

#### 3.3.2 Control de Acceso
- **Tarjetas:** RFID, NFC, biométricas
- **Lectores:** Proximidad, contacto, biométricos
- **Cerraduras:** Electrónicas, magnéticas
- **Intercomunicadores:** Audio, video, control remoto

#### 3.3.3 Sistemas de Alarma
- **Intrusión:** Sensores, detectores, sirenas
- **Incendio:** Detectores, aspersores, extintores
- **Emergencia:** Botones de pánico, comunicaciones
- **Monitoreo:** 24/7, respuesta inmediata

---

## 4. Funcionalidades del Sistema

### 4.1 Seguridad Funcional

#### 4.1.1 PTC VIRTUAL Level 2
- **Movement Authority:** Autorización de movimiento
- **Position Report:** Reporte de posición
- **Emergency Stop:** Parada de emergencia
- **Data Logging:** Registro de datos
- **Fail-Safe:** Modo seguro en caso de fallo

#### 4.1.2 RBC (Radio Block Centre)
- **Control de trenes:** Gestión de 24 trenes simultáneos
- **Comunicación:** RED TETRA (Misión Crítica), FFFIS
- **Redundancia:** 2oo3 para máxima disponibilidad
- **Monitoreo:** Supervisión continua del estado

#### 4.1.3 Interlocking
- **Rutas:** Gestión de rutas de trenes
- **Conflictos:** Prevención de conflictos
- **Señales:** Control de señales y aspectos
- **Enclavamientos:** Lógica de seguridad

### 4.2 Ciberseguridad

#### 4.2.1 Protección de Red
- **Segmentación:** Separación de redes
- **Firewall:** Reglas de tráfico
- **IDS/IPS:** Detección y prevención
- **VPN:** Túneles seguros

#### 4.2.2 Gestión de Vulnerabilidades
- **Escaneo:** Vulnerabilidades automáticas
- **Parches:** Actualizaciones de seguridad
- **Configuración:** Hardening de sistemas
- **Monitoreo:** Detección de amenazas

#### 4.2.3 Respuesta a Incidentes
- **Detección:** Alertas automáticas
- **Análisis:** Investigación de incidentes
- **Contención:** Aislamiento de amenazas
- **Recuperación:** Restauración de servicios

### 4.3 Seguridad Física

#### 4.3.1 Vigilancia
- **CCTV:** 200 cámaras, visión nocturna
- **Grabación:** 30 días de almacenamiento
- **Análisis:** Detección de movimiento, reconocimiento
- **Monitoreo:** 24/7, respuesta inmediata

#### 4.3.2 Control de Acceso
- **Tarjetas:** 1000 tarjetas RFID
- **Lectores:** 50 lectores en puntos críticos
- **Biometría:** Huella dactilar, iris
- **Auditoría:** Logs de acceso y actividad

#### 4.3.3 Sistemas de Alarma
- **Intrusión:** 100 sensores PIR
- **Incendio:** 200 detectores de humo
- **Emergencia:** 20 botones de pánico
- **Comunicación:** Radio, teléfono, internet

---

## 5. Seguridad y Confiabilidad

### 5.1 Seguridad Funcional (EN 50126/50128/50129)

#### 5.1.1 Objetivos de Seguridad
- **SIL 4:** PTC VIRTUAL Level 2, RBC, interlocking
- **SIL 3:** CTC, comunicaciones críticas
- **SIL 2:** SCADA, monitoreo
- **SIL 1:** Sistemas auxiliares

#### 5.1.2 Arquitectura de Seguridad
- **Redundancia:** 2oo3 en componentes críticos
- **Diversidad:** Diferentes tecnologías
- **Aislamiento:** Separación física y lógica
- **Monitoreo:** Supervisión continua

### 5.2 Ciberseguridad (IEC 62443)

#### 5.2.1 Zonas de Seguridad
- **Zona 0:** Red de control crítico
- **Zona 1:** Red de supervisión
- **Zona 2:** Red administrativa
- **Zona 3:** Red externa

#### 5.2.2 Medidas de Protección
- **Firewall:** Protección perimetral
- **IDS/IPS:** Detección de intrusiones
- **Criptografía:** AES-256, RSA-2048
- **VPN:** Túneles seguros

### 5.3 Disponibilidad

#### 5.3.1 Objetivos de Disponibilidad
- **Seguridad funcional:** 99.95% (4.38 horas/año)
- **Ciberseguridad:** 99.9% (8.76 horas/año)
- **Seguridad física:** 99.5% (43.8 horas/año)
- **Control de acceso:** 99.0% (87.6 horas/año)

#### 5.3.2 Estrategias de Redundancia
- **Componentes:** N+1 en sistemas críticos
- **Comunicación:** Enlaces redundantes
- **Alimentación:** UPS + generadores
- **Monitoreo:** Sistemas de respaldo

---

## 6. Integración y Comunicaciones

### 6.1 Integración PTC

#### 6.1.1 Seguridad PTC VIRTUAL Level 2
- **SIL 4:** Funciones críticas de seguridad
- **Redundancia:** 2oo3 en RBC
- **Comunicación:** RED TETRA (Misión Crítica) seguro
- **Monitoreo:** Supervisión continua

#### 6.1.2 Protecciones Específicas
- **Ciberseguridad:** IEC 62443
- **Criptografía:** AES-256
- **Autenticación:** Certificados digitales
- **Auditoría:** Logs de seguridad

### 6.2 Integración CTC

#### 6.2.1 Seguridad Centro de Control
- **SIL 3:** Funciones de control
- **Redundancia:** N+1 en servidores
- **Comunicación:** Enlaces seguros
- **Monitoreo:** Supervisión continua

#### 6.2.2 Protecciones Específicas
- **Ciberseguridad:** IEC 62443
- **Criptografía:** AES-256
- **Autenticación:** Multi-factor
- **Auditoría:** Logs de acceso

---

## 7. Operación y Mantenimiento

### 7.1 Operación

#### 7.1.1 Centro de Seguridad
- **Ubicación:** La Dorada (Colombia)
- **Personal:** 24/7 (3 turnos)
- **Equipos:** SCADA, HMI, alarmas
- **Monitoreo:** Seguridad funcional, ciberseguridad, física
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

#### 8.1.1 Pruebas de Seguridad Funcional
- **SIL 4:** Pruebas de funciones críticas
- **SIL 3:** Pruebas de funciones de control
- **SIL 2:** Pruebas de funciones de supervisión
- **SIL 1:** Pruebas de funciones auxiliares

#### 8.1.2 Pruebas de Ciberseguridad
- **Penetration Testing:** Pruebas de penetración
- **Vulnerability Assessment:** Evaluación de vulnerabilidades
- **Security Audit:** Auditoría de seguridad
- **Compliance:** Cumplimiento normativo

### 8.2 Pruebas de Sitio (SAT)

#### 8.2.1 Pruebas de Integración
- **PTC:** Pruebas de seguridad PTC VIRTUAL
- **CTC:** Pruebas de seguridad centro de control
- **Comunicaciones:** Pruebas de seguridad enlaces
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
- **Especificación Técnica:** Sistemas de seguridad
- **Plan de Pruebas:** FAT/SAT
- **Manual de Operación:** Procedimientos
- **Manual de Mantenimiento:** Mantenimiento

#### 9.1.2 Equipos y Configuración
- **Seguridad Funcional:** Sistemas SIL 4/3/2/1
- **Ciberseguridad:** Firewall, IDS/IPS, VPN
- **Seguridad Física:** CCTV, control de acceso, alarmas
- **Monitoreo:** SCADA, HMI, sistemas de alerta

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
| SEG-001 | Seguridad funcional SIL 4 | FAT-001 | 🟢 |
| SEG-002 | Ciberseguridad IEC 62443 | FAT-002 | 🟢 |
| SEG-003 | Seguridad física | FAT-003 | 🟢 |
| SEG-004 | Control de acceso | FAT-004 | 🟢 |
| SEG-005 | Disponibilidad 99.95% | SAT-001 | 🟢 |

### 10.2 Glosario de Términos
- **SIL:** Safety Integrity Level
- **RBC:** Radio Block Centre
- **PTC VIRTUAL:** European Train Control System
- **IDS/IPS:** Intrusion Detection/Prevention System
- **MFA:** Multi-Factor Authentication
- **RBAC:** Role-Based Access Control
- **CCTV:** Closed Circuit Television
- **PIR:** Passive Infrared

### 10.3 Referencias Normativas
- **EN 50126:** Aplicación de técnicas de confiabilidad para sistemas ferroviarios
- **EN 50128:** Software para sistemas de control y protección ferroviarios
- **EN 50129:** Sistemas de señalización ferroviaria
- **IEC 62290:** Sistemas de gestión ferroviaria
- **IEC 62443:** Seguridad de sistemas de automatización industrial
- **ISO 27001:** Sistemas de gestión de seguridad de la información
- **UIC 615:** Sistemas de control de tráfico ferroviario

### 10.4 Control de Versiones
| Versión | Fecha | Autor | Cambios |
|:---|:---|:---|:---|
| 0.1 | 02/10/2025 | Grupo Ortiz | Versión inicial |

---

**Documento:** V.5 Sistemas de Seguridad - Ingeniería de Detalle  
**Estado:** ✅ **COMPLETADO**  
**Próximo:** Fase D - Ingeniería de Detalle COMPLETADA

