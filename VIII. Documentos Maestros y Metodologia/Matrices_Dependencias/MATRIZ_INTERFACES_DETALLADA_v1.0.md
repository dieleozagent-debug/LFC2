# MATRIZ DE INTERFACES ENTRE SISTEMAS - DETALLADA v1.0

**Proyecto:** APP La Dorada - Chiriguaná  
**Fecha:** 9 de Octubre 2025  
**Responsable:** Gerencia Técnica + EPC  
**Versión:** 1.0  
**Estado:** ⚠️ CONCEPTUAL - Requiere detalle post-adjudicación EPC

---

## 🎯 **PROPÓSITO**

Documentar TODAS las interfaces entre sistemas del proyecto, especificando:
- Interfaces físicas (conectores, cables, protocolos hardware)
- Interfaces lógicas (APIs, mensajes, protocolos software)
- Responsabilidades (quién desarrolla, quién prueba)
- Secuencia de integración
- Plan de contingencia por fallas

---

## 📊 **INTERFACES CRÍTICAS IDENTIFICADAS: 7**

### **IF-01: CTC ↔ PTC/ATP** 🔴 CRÍTICA

| Aspecto | Especificación | Estado | Responsable |
|:--------|:---------------|:-------|:------------|
| **Protocolo** | FFFIS (IEC 62278) / Propietario | ⚠️ Pendiente definición PTC | EPC Señalización |
| **Medio físico** | Ethernet redundante N+1 | ✅ Estándar | EPC Redes |
| **Mensajes** | Posición tren, comandos, MA | ⚠️ Pendiente protocolo | EPC + Proveedor ATP |
| **Frecuencia** | 1 mensaje/segundo (continuo) | ✅ Definido | - |
| **Seguridad** | IEC 62443 (ciberseguridad) | ✅ Estándar | EPC Ciberseguridad |
| **Pruebas** | Banco → Piloto → Integración | 🟡 Conceptual | EPC + Interventoría |

**Criticidad:** 🔴 CRÍTICA (Ruta crítica del proyecto)  
**Blocker:** BLOCKER-001 (Indefinición PTC)  
**Plan B:** FFFIS estándar genérico si no se define protocolo

---

### **IF-02: CTC ↔ FENOCO (Gateway UIC 918-4)** 🔴 CRÍTICA

| Aspecto | Especificación | Estado | Responsable |
|:--------|:---------------|:-------|:------------|
| **Protocolo** | UIC 918-4 / Siemens Trainguard | ❌ FENOCO NO compartió | EPC + FENOCO |
| **Medio físico** | RED TETRA (Misión Crítica) + Ethernet redundante | ✅ Estándar | EPC Telecomunicaciones |
| **Mensajes** | Posición, estado, comandos | ❌ Formato desconocido | **Requiere FENOCO** |
| **Frecuencia** | 10 seg (según UIC) | ✅ Estándar | - |
| **Seguridad** | Cifrado AES-256 + VPN | ✅ Definido | EPC Ciberseguridad |
| **Pruebas** | Banco → Coordinar con FENOCO | ❌ FENOCO debe aprobar | FENOCO + EPC |

**Criticidad:** 🔴 CRÍTICA (Interoperabilidad contractual)  
**Blocker:** BLOCKER-002 (Protocolos propietarios FENOCO)  
**Plan B:** UIC 918-4 genérico, interoperabilidad "teórica"

---

### **IF-03: TETRA ↔ RED TETRA (Misión Crítica) (Gateway Dual)** 🟡 MEDIA

| Aspecto | Especificación | Estado | Responsable |
|:--------|:---------------|:-------|:------------|
| **Protocolo** | SIP (voz) + TETRA DMO | 🟡 Conceptual | EPC Telecomunicaciones |
| **Medio físico** | Gateway embarcado dual | 🟡 Conceptual | EPC |
| **Funcionalidad** | Conmutación automática voz | ✅ Definido | EPC |
| **Cobertura** | Automática (TETRA zona + RED TETRA (Misión Crítica) corredor) | ✅ Definido | - |
| **Pruebas** | Zona sin cobertura → Conmutación | 🟡 Plan conceptual | EPC |

**Criticidad:** 🟡 MEDIA (Mejora operativa, no crítica)  
**Blocker:** Ninguno  
**Responsable:** EPC Telecomunicaciones

---

### **IF-04: CTC ↔ SCADA (Telemetría)** ✅ ESTÁNDAR

| Aspecto | Especificación | Estado | Responsable |
|:--------|:---------------|:-------|:------------|
| **Protocolo** | OPC-UA / Modbus TCP | ✅ Estándar industrial | EPC Automatización |
| **Medio físico** | Ethernet sobre Fibra | ✅ Definido | EPC Redes |
| **Mensajes** | Variables proceso (temperatura, voltaje, estado) | ✅ Estándar SCADA | EPC |
| **Frecuencia** | 5 segundos | ✅ Definido | - |
| **Pruebas** | FAT → SAT estándar | ✅ Procedimiento conocido | EPC |

**Criticidad:** 🟢 BAJA (Estándar industrial)  
**Blocker:** Ninguno  
**Responsable:** EPC Automatización

---

### **IF-05: ATP Embarcado ↔ Frenos Locomotora** 🟠 ALTA

| Aspecto | Especificación | Estado | Responsable |
|:--------|:---------------|:-------|:------------|
| **Protocolo** | IEC 61375 (TCN) / MVB | ⚠️ Pendiente specs MR | EPC MR + FENOCO |
| **Medio físico** | Bus redundante + I/O digital | 🟡 Conceptual | EPC |
| **Señales** | Comando frenado emergencia | ✅ Estándar | EPC |
| **Seguridad** | SIL-4 (certificación crítica) | ✅ Normativa | Certificador externo |
| **Pruebas** | Banco → MR real → Operación | ⚠️ Requiere MR disponible | EPC + FENOCO |

**Criticidad:** 🟠 ALTA (Seguridad crítica)  
**Blocker:** BLOCKER-004 (Cronograma MR)  
**Plan B:** Certificar en banco, validar cuando MR llegue

---

### **IF-06: CCTV ↔ Red IP (Fibra Óptica)** ✅ ESTÁNDAR

| Aspecto | Especificación | Estado | Responsable |
|:--------|:---------------|:-------|:------------|
| **Protocolo** | IP/Ethernet (ONVIF) | ✅ Estándar CCTV | EPC ITS |
| **Medio físico** | Fibra óptica 48F | ✅ Definido | EPC Telecomunicaciones |
| **Ancho banda** | 100 Mbps/cámara | ✅ Dimensionado | EPC |
| **Almacenamiento** | NVR redundante (90 días) | ✅ Especificado | EPC |
| **Pruebas** | Estándar CCTV | ✅ Procedimiento | EPC ITS |

**Criticidad:** 🟢 BAJA (Estándar comercial)  
**Blocker:** Ninguno  
**Responsable:** EPC ITS

---

### **IF-07: SICC (Dashboard) ↔ CTC** 🟡 MEDIA

| Aspecto | Especificación | Estado | Responsable |
|:--------|:---------------|:-------|:------------|
| **Protocolo** | REST API / JSON | 🟡 Conceptual | EPC Sistemas |
| **Medio físico** | HTTPS seguro (Internet) | ✅ Estándar | EPC |
| **Datos** | Indicadores AT4 (disponibilidad, puntualidad) | ⚠️ Pendiente alcance SICC | **Concesionario define** |
| **Frecuencia** | Tiempo real + Reportes diarios | 🟡 Conceptual | EPC |
| **Integración ANI** | APIs hacia sistemas legados | ❌ Indefinido | **BLOCKER** - Concesionario |

**Criticidad:** 🟡 MEDIA (AT4 contractual)  
**Blocker:** Alcance SICC indefinido  
**Plan B:** SICC Básico sin integración ANI

---

## 📋 **DOCUMENTOS A CREAR POR EPC**

### **1. ICD (Interface Control Document) por Interfaz**

**Contenido por ICD:**
- Descripción funcional interfaz
- Especificaciones físicas (conectores, cables, voltajes)
- Especificaciones lógicas (protocolos, mensajes, formatos)
- Diagramas de secuencia (mensajes)
- Matriz de trazabilidad (requisitos → implementación)
- Procedimiento de pruebas (FAT + SAT)
- Plan de contingencia (falla interfaz)

**Responsable:** EPC (especialidad correspondiente)  
**Plazo:** Mes 6-10 (post-adjudicación)  
**Entrega a:** Interventoría para revisión/aprobación

---

### **2. Matriz de Trazabilidad Interfaces**

**Formato:** Excel

**Columnas:**
- ID Interfaz
- Sistemas conectados
- Protocolo
- Responsable desarrollo
- Responsable pruebas
- Estado (Conceptual/Diseñado/Probado/Certificado)
- Fecha FAT
- Fecha SAT
- No conformidades
- Estado aprobación Interventoría

**Actualización:** Semanal (M6-48)  
**Responsable:** EPC Integración

---

### **3. Procedimiento Pruebas Integración**

**Contenido:**
- Secuencia de integración (orden lógico)
- Criterios de aceptación por interfaz
- Equipos de medición requeridos
- Personal requerido (roles)
- Protocolo de no conformidades
- Procedimiento re-pruebas

**Responsable:** EPC Calidad + Interventoría  
**Plazo:** Mes 10 (antes de pruebas M35+)

---

### **4. Actas de Validación por Interfaz**

**Contenido:**
- Fecha prueba
- Participantes (EPC, Interventor, Proveedor)
- Resultados pruebas (mediciones)
- No conformidades (si aplica)
- Aprobación o rechazo
- Firma Interventor

**Frecuencia:** Por cada interfaz (FAT + SAT)  
**Responsable:** EPC + Interventoría

---

## 🎯 **QUÉ ESCRIBE EPC A INTERVENTORÍA**

### **Durante Ingeniería (Mes 6-12):**
1. ICDs preliminares (Mes 6-8)
2. Matriz de interfaces actualizada semanal
3. Reportes avance diseño interfaces
4. Solicitudes de clarificación (indefiniciones)
5. Planes de prueba por interfaz

### **Durante Ejecución (Mes 13-48):**
6. Protocolos de pruebas (FAT)
7. Reportes de integración
8. Actas de validación (por interfaz)
9. No conformidades y acciones correctivas
10. Certificados de aprobación SAT

---

## ✅ **RESPONSABILIDADES CLARAS**

### **EPC Desarrolla:**
- ✅ ICDs (Interface Control Documents)
- ✅ Diseño de todas las interfaces
- ✅ Procedimientos de pruebas
- ✅ Ejecución de FAT/SAT
- ✅ Corrección de no conformidades
- ✅ Documentación final entregable

### **Interventoría Revisa/Aprueba:**
- ✅ ICDs (aprobación/observaciones)
- ✅ Protocolos de pruebas
- ✅ Resultados FAT/SAT
- ✅ No conformidades (verificación cierre)
- ✅ Certificación final

### **ANI/Concesionario Define:**
- ✅ Alcance SICC (APIs o no)
- ✅ Especificaciones FENOCO (si colabora)
- ✅ Definición PTC (sistema final)
- ✅ Aprobación final SAT

---

## 📅 **CRONOGRAMA DE ENTREGABLES**

| Entregable | Plazo | Responsable | Aprobación |
|:-----------|:-----:|:------------|:-----------|
| ICDs Preliminares (7 interfaces) | Mes 6-8 | EPC | Interventoría |
| Matriz Interfaces v1.0 | Mes 8 | EPC Integración | Interventoría |
| Procedimientos Pruebas | Mes 10 | EPC Calidad | Interventoría |
| FATs Individuales | Mes 35-40 | EPC + Proveedor | Interventoría |
| SATs Integrados | Mes 40-48 | EPC | ANI + Interventoría |
| Documentación Final | Mes 48 | EPC | ANI |

---

**Elaborado por:** PMO / Gestión de Interfaces  
**Requiere:** Adjudicación EPC (Mes 6) para detalle  
**Estado:** Conceptual → Detalle en 45 días post-adjudicación

