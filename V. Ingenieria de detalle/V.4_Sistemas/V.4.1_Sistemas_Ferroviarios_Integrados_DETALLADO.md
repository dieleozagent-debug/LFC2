# INGENIERÍA DE SISTEMAS DE DETALLE - SISTEMAS FERROVIARIOS INTEGRADOS
## APP LA DORADA-CHIRIGUANÁ v10.1

**Fecha de desarrollo:** 27 de enero de 2025  
**Proyecto:** APP La Dorada - Chiriguaná  
**Contrato:** Concesión No. 001 de 2025  
**Responsable:** Administrador Contractual EPC

---

## 🎯 RESUMEN EJECUTIVO

Este documento presenta la **ingeniería de sistemas de detalle** para los sistemas ferroviarios integrados del proyecto APP La Dorada-Chiriguaná, desarrollada para la construcción real de los sistemas CTC, PTC, TETRA, fibra óptica y CCTV del corredor ferroviario de 178 km.

### **Base Técnica:**
- **Longitud total:** 178 km La Dorada-Chiriguaná
- **Sistemas integrados:** CTC, PTC PTC Virtual (FRA 236), TETRA, Fibra óptica, CCTV
- **Estándares:** FRA/AREMA, EN, IEEE, normas colombianas
- **Interoperabilidad:** Con red FENOCO

---

## 🚂 SISTEMA CTC (CONTROL DE TRÁFICO CENTRALIZADO)

### **1. CENTRO DE CONTROL PRINCIPAL**

#### **1.1 Centro de Control La Dorada**
| Componente | Especificación | Cantidad | Observaciones |
|:-----------|:---------------|:--------:|:--------------|
| **Servidor principal** | Dell PowerEdge R750 | 2 unidades | Redundancia N+1 |
| **Servidor secundario** | Dell PowerEdge R750 | 2 unidades | Redundancia N+1 |
| **Switch de red** | Cisco Catalyst 9300 | 4 unidades | Redundancia N+1 |
| **UPS** | APC Smart-UPS 5000VA | 4 unidades | Redundancia N+1 |
| **Generador emergencia** | 500 kVA, diesel | 2 unidades | Redundancia N+1 |
| **Aire acondicionado** | Precision cooling | 2 unidades | Redundancia N+1 |

#### **1.2 Consolas de Operación**
| Componente | Especificación | Cantidad | Observaciones |
|:-----------|:---------------|:--------:|:--------------|
| **Consola principal** | 4 pantallas 55" | 2 unidades | Operador principal |
| **Consola secundaria** | 4 pantallas 55" | 2 unidades | Operador secundario |
| **Consola de respaldo** | 2 pantallas 32" | 1 unidad | Operador de respaldo |
| **Consola de supervisión** | 2 pantallas 32" | 1 unidad | Supervisor |

#### **1.3 Sistema de Visualización**
| Componente | Especificación | Cantidad | Observaciones |
|:-----------|:---------------|:--------:|:--------------|
| **Pantalla principal** | LED 75" | 1 unidad | Vista general |
| **Pantallas secundarias** | LED 55" | 8 unidades | Vistas específicas |
| **Proyector** | 4K, 10,000 lumens | 2 unidades | Proyección general |
| **Sistema de audio** | 8 canales, 500W | 1 unidad | Anuncios y alarmas |

---

## 🚂 SISTEMA PTC PTC Virtual (FRA 236)

### **2. INFRAESTRUCTURA PTC**

#### **2.1 Radio Block Center (RBC)**
| Componente | Especificación | Cantidad | Observaciones |
|:-----------|:---------------|:--------:|:--------------|
| **Servidor RBC** | Siemens SIMIS W | 2 unidades | Redundancia N+1 |
| **Interfaz RED TETRA (Misión Crítica)** | Siemens RED TETRA (Misión Crítica) | 2 unidades | Comunicación trenes |
| **Interfaz Virtual Balise (GNSS)** | Siemens Virtual Balise (GNSS) | 2 unidades | Comunicación punto de referencia virtuals |
| **Interfaz CTC** | Siemens CTC | 2 unidades | Integración CTC |
| **UPS** | APC Smart-UPS 3000VA | 2 unidades | Redundancia N+1 |

#### **2.2 Punto de referencia virtuals Virtual Balise (GNSS)**
| Ubicación | Cantidad | Tipo | Observaciones |
|:----------|:--------:|:-----|:--------------|
| **La Dorada - Puerto Berrío** | 90 unidades | Punto de referencia virtual pasiva | Cada 500m |
| **Puerto Berrío - Barrancabermeja** | 104 unidades | Punto de referencia virtual pasiva | Cada 500m |
| **Barrancabermeja - Bucaramanga** | 76 unidades | Punto de referencia virtual pasiva | Cada 500m |
| **Bucaramanga - Chiriguaná** | 86 unidades | Punto de referencia virtual pasiva | Cada 500m |
| **TOTAL** | **356 unidades** | - | - |

#### **2.3 Equipos Embarcados PTC**
| Componente | Especificación | Cantidad | Observaciones |
|:-----------|:---------------|:--------:|:--------------|
| **TCR (Train Control Radio)** | Siemens SIMIS W | 40 unidades | 1 por tren |
| **Antena Virtual Balise (GNSS)** | Siemens Virtual Balise (GNSS) | 80 unidades | 2 por tren |
| **Módulo RED TETRA (Misión Crítica)** | Siemens RED TETRA (Misión Crítica) | 40 unidades | 1 por tren |
| **Pantalla de conductor** | TFT 12" | 40 unidades | 1 por tren |
| **UPS embarcado** | 24V DC, 1kVA | 40 unidades | 1 por tren |

---

## 📡 SISTEMA TETRA

### **3. RED DE COMUNICACIONES TETRA**

#### **3.1 Estaciones Base TETRA**
| Ubicación | Tipo | Cobertura | Observaciones |
|:----------|:-----|:----------|:--------------|
| **La Dorada** | Estación principal | 50 km | Antena sectorial |
| **Puerto Berrío** | Estación secundaria | 40 km | Antena sectorial |
| **Barrancabermeja** | Estación secundaria | 40 km | Antena sectorial |
| **Chiriguaná** | Estación principal | 50 km | Antena sectorial |
| **PK 25+000** | Repetidor | 30 km | Repetidor intermedio |
| **PK 75+000** | Repetidor | 30 km | Repetidor intermedio |
| **PK 125+000** | Repetidor | 30 km | Repetidor intermedio |

#### **3.2 Equipos TETRA**
| Componente | Especificación | Cantidad | Observaciones |
|:-----------|:---------------|:--------:|:--------------|
| **Terminal móvil** | Motorola MTP850 | 100 unidades | Personal de operación |
| **Terminal fijo** | Motorola MTP850 | 50 unidades | Estaciones y talleres |
| **Terminal embarcado** | Motorola MTP850 | 40 unidades | Trenes |
| **Repetidor** | Motorola TETRA | 6 unidades | Repetidores de línea |

#### **3.3 Sistema de Conmutación**
| Componente | Especificación | Cantidad | Observaciones |
|:-----------|:---------------|:--------:|:--------------|
| **Conmutador principal** | Motorola TETRA | 2 unidades | Redundancia N+1 |
| **Conmutador secundario** | Motorola TETRA | 2 unidades | Redundancia N+1 |
| **Interfaz PSTN** | Motorola TETRA | 2 unidades | Conexión telefónica |
| **Interfaz IP** | Motorola TETRA | 2 unidades | Conexión datos |

---

## 🌐 SISTEMA DE FIBRA ÓPTICA

### **4. RED DE FIBRA ÓPTICA**

#### **4.1 Cable de Fibra Óptica**
| Tramo | Longitud | Tipo | Observaciones |
|:------|:---------|:-----|:--------------|
| **La Dorada - Puerto Berrío** | 45 km | G.652D | 144 fibras |
| **Puerto Berrío - Barrancabermeja** | 52 km | G.652D | 144 fibras |
| **Barrancabermeja - Bucaramanga** | 38 km | G.652D | 144 fibras |
| **Bucaramanga - Chiriguaná** | 43 km | G.652D | 144 fibras |
| **TOTAL** | **178 km** | - | - |

#### **4.2 Equipos de Transmisión**
| Ubicación | Tipo | Capacidad | Observaciones |
|:----------|:-----|:----------|:--------------|
| **La Dorada** | Terminal principal | 100 Gbps | Transmisión principal |
| **Puerto Berrío** | Terminal intermedio | 100 Gbps | Transmisión intermedia |
| **Barrancabermeja** | Terminal intermedio | 100 Gbps | Transmisión intermedia |
| **Chiriguaná** | Terminal principal | 100 Gbps | Transmisión principal |

#### **4.3 Sistemas de Protección**
| Componente | Especificación | Cantidad | Observaciones |
|:-----------|:---------------|:--------:|:--------------|
| **Protección 1+1** | Automática | 4 sistemas | Protección principal |
| **Protección 1:1** | Automática | 8 sistemas | Protección secundaria |
| **Protección manual** | Manual | 4 sistemas | Protección de emergencia |
| **Monitoreo OTDR** | Continuo | 1 sistema | Monitoreo de fibra |

---

## 📹 SISTEMA CCTV

### **5. SISTEMA DE VIDEOVIGILANCIA**

#### **5.1 Cámaras de Vigilancia**
| Ubicación | Tipo | Cantidad | Observaciones |
|:----------|:-----|:--------:|:--------------|
| **Estaciones** | Cámara PTZ | 32 unidades | 4 por estación |
| **Pasos a nivel** | Cámara fija | 146 unidades | 1 por paso |
| **Puentes** | Cámara fija | 8 unidades | 1 por puente |
| **Túneles** | Cámara fija | 24 unidades | 2 por túnel |
| **Áreas críticas** | Cámara PTZ | 16 unidades | Áreas específicas |

#### **5.2 Sistema de Grabación**
| Componente | Especificación | Cantidad | Observaciones |
|:-----------|:---------------|:--------:|:--------------|
| **Servidor de grabación** | Dell PowerEdge R750 | 4 unidades | Redundancia N+1 |
| **Almacenamiento** | 100 TB, RAID 6 | 4 unidades | Redundancia N+1 |
| **Switch de red** | Cisco Catalyst 9300 | 4 unidades | Redundancia N+1 |
| **UPS** | APC Smart-UPS 3000VA | 4 unidades | Redundancia N+1 |

#### **5.3 Sistema de Visualización**
| Componente | Especificación | Cantidad | Observaciones |
|:-----------|:---------------|:--------:|:--------------|
| **Monitor principal** | LED 55" | 1 unidad | Vista general |
| **Monitores secundarios** | LED 32" | 8 unidades | Vistas específicas |
| **Consola de operación** | 4 pantallas 24" | 2 unidades | Operadores |
| **Sistema de audio** | 4 canales, 200W | 1 unidad | Audio de cámaras |

---

## 🔗 SISTEMAS DE INTEGRACIÓN

### **6. INTEGRACIÓN DE SISTEMAS**

#### **6.1 Gateway de Integración**
| Componente | Especificación | Cantidad | Observaciones |
|:-----------|:---------------|:--------:|:--------------|
| **Gateway principal** | Intel Xeon Gold 6248R | 2 unidades | Redundancia N+1 |
| **Gateway secundario** | Intel Xeon Gold 6248R | 2 unidades | Redundancia N+1 |
| **Interfaz CTC** | TCP/IP, 1 Gbps | 2 unidades | Integración CTC |
| **Interfaz PTC** | TCP/IP, 1 Gbps | 2 unidades | Integración PTC |
| **Interfaz TETRA** | TCP/IP, 100 Mbps | 2 unidades | Integración TETRA |

#### **6.2 Sistema de Monitoreo**
| Componente | Especificación | Cantidad | Observaciones |
|:-----------|:---------------|:--------:|:--------------|
| **Servidor de monitoreo** | Dell PowerEdge R750 | 2 unidades | Redundancia N+1 |
| **Base de datos** | Oracle 19c | 2 unidades | Redundancia N+1 |
| **Software de monitoreo** | Custom desarrollado | 1 sistema | Monitoreo integrado |
| **Dashboard** | Web-based | 1 sistema | Visualización web |

#### **6.3 Sistema de Alarmas**
| Componente | Especificación | Cantidad | Observaciones |
|:-----------|:---------------|:--------:|:--------------|
| **Servidor de alarmas** | Dell PowerEdge R750 | 2 unidades | Redundancia N+1 |
| **Sistema de notificación** | Email, SMS, TETRA | 1 sistema | Notificaciones múltiples |
| **Base de datos de alarmas** | Oracle 19c | 2 unidades | Redundancia N+1 |
| **Dashboard de alarmas** | Web-based | 1 sistema | Visualización web |

---

## 📊 SISTEMAS DE DATOS

### **7. RED DE DATOS**

#### **7.1 Equipos de Red**
| Ubicación | Tipo | Cantidad | Observaciones |
|:----------|:-----|:--------:|:--------------|
| **La Dorada** | Switch principal | 2 unidades | Redundancia N+1 |
| **Puerto Berrío** | Switch intermedio | 2 unidades | Redundancia N+1 |
| **Barrancabermeja** | Switch intermedio | 2 unidades | Redundancia N+1 |
| **Chiriguaná** | Switch principal | 2 unidades | Redundancia N+1 |
| **Cada estación** | Switch local | 16 unidades | 2 por estación |

#### **7.2 Servidores de Datos**
| Componente | Especificación | Cantidad | Observaciones |
|:-----------|:---------------|:--------:|:--------------|
| **Servidor de datos** | Dell PowerEdge R750 | 4 unidades | Redundancia N+1 |
| **Base de datos** | Oracle 19c | 4 unidades | Redundancia N+1 |
| **Servidor de aplicaciones** | Dell PowerEdge R750 | 4 unidades | Redundancia N+1 |
| **Servidor de respaldo** | Dell PowerEdge R750 | 2 unidades | Respaldo completo |

#### **7.3 Sistemas de Seguridad**
| Componente | Especificación | Cantidad | Observaciones |
|:-----------|:---------------|:--------:|:--------------|
| **Firewall** | Cisco ASA 5525 | 4 unidades | Redundancia N+1 |
| **Antivirus** | Symantec Endpoint | 100 licencias | Protección endpoints |
| **VPN** | Cisco AnyConnect | 50 licencias | Acceso remoto |
| **IDS/IPS** | Cisco FirePOWER | 2 unidades | Detección intrusos |

---

## 📋 ESPECIFICACIONES DE CONSTRUCCIÓN

### **8. PROCEDIMIENTOS DE INSTALACIÓN**

#### **8.1 Secuencia de Instalación**
1. **Fase 1:** Instalación de fibra óptica (3 meses)
2. **Fase 2:** Instalación de sistemas TETRA (2 meses)
3. **Fase 3:** Instalación de sistemas PTC (4 meses)
4. **Fase 4:** Instalación de sistemas CTC (3 meses)
5. **Fase 5:** Instalación de sistemas CCTV (2 meses)
6. **Fase 6:** Integración y pruebas (2 meses)

#### **8.2 Control de Calidad**
- **Pruebas de conectividad:** 100% de enlaces
- **Pruebas de funcionamiento:** 100% de equipos
- **Pruebas de integración:** 100% de sistemas
- **Pruebas de aceptación:** 100% de funcionalidades
- **Pruebas de interoperabilidad:** 100% con FENOCO

#### **8.3 Seguridad y Medio Ambiente**
- **Plan de seguridad:** Conforme normas colombianas
- **Plan ambiental:** Conforme ley 99/1993
- **Manejo de residuos:** Clasificación y disposición
- **Control de emisiones:** Monitoreo continuo

---

## 📊 CANTIDADES Y PRESUPUESTO

### **9. CANTIDADES PRINCIPALES**

#### **9.1 Equipos de Sistemas**
- **Servidores:** 40 unidades
- **Switches:** 32 unidades
- **Equipos TETRA:** 196 unidades
- **Equipos PTC:** 520 unidades
- **Cámaras CCTV:** 226 unidades
- **Equipos de red:** 50 unidades

#### **9.2 Cables y Fibra Óptica**
- **Fibra óptica:** 178 km
- **Cable de datos:** 89 km
- **Cable de alimentación:** 267 km
- **Cable de tierra:** 356 km

#### **9.3 Estructuras y Soportería**
- **Postes de fibra:** 2,967 unidades
- **Postes de TETRA:** 1,483 unidades
- **Postes de CCTV:** 1,483 unidades
- **Racks de equipos:** 50 unidades

### **10. PRESUPUESTO ESTIMADO**

#### **10.1 Costos por Rubro**
| Rubro | Costo (COP) | % del Total |
|:------|:------------|:------------|
| **Sistemas CTC** | $35,000 M | 25% |
| **Sistemas PTC** | $42,000 M | 30% |
| **Sistemas TETRA** | $21,000 M | 15% |
| **Fibra óptica** | $18,000 M | 13% |
| **Sistemas CCTV** | $14,000 M | 10% |
| **Integración** | $10,000 M | 7% |
| **TOTAL** | **$140,000 M** | **100%** |

---

## ⚠️ RIESGOS Y MITIGACIONES

### **11. RIESGOS DE SISTEMAS**

#### **11.1 Riesgos Identificados**
| Riesgo | Probabilidad | Impacto | Mitigación |
|:-------|:------------:|:-------:|:-----------|
| **Fallas de comunicaciones** | Media | Alto | Redundancia N+1 |
| **Fallas de integración** | Media | Alto | Pruebas exhaustivas |
| **Fallas de seguridad** | Baja | Alto | Sistemas de seguridad |
| **Acceso a materiales** | Media | Medio | Contratos anticipados |

#### **11.2 Plan de Contingencia**
- **Reservas:** 15% del presupuesto
- **Cronograma:** 20% de holgura
- **Materiales:** Stock de seguridad
- **Personal:** Equipos de respaldo

---

## 🎯 CRONOGRAMA DE EJECUCIÓN

### **12. CRONOGRAMA DETALLADO**

#### **12.1 Fases de Instalación**
| Fase | Duración | Actividades Principales | Recursos |
|:-----|:---------|:----------------------|:---------|
| **Fase 1** | 3 meses | Fibra óptica | 60 operarios |
| **Fase 2** | 2 meses | Sistemas TETRA | 40 operarios |
| **Fase 3** | 4 meses | Sistemas PTC | 80 operarios |
| **Fase 4** | 3 meses | Sistemas CTC | 60 operarios |
| **Fase 5** | 2 meses | Sistemas CCTV | 40 operarios |
| **Fase 6** | 2 meses | Integración y pruebas | 30 operarios |

#### **12.2 Hitos Principales**
- **Mes 3:** Terminación fibra óptica
- **Mes 5:** Terminación sistemas TETRA
- **Mes 9:** Terminación sistemas PTC
- **Mes 12:** Terminación sistemas CTC
- **Mes 14:** Terminación sistemas CCTV
- **Mes 16:** Terminación total proyecto

---

## ✅ CRITERIOS DE ACEPTACIÓN

### **13. CRITERIOS TÉCNICOS**

#### **13.1 Sistemas CTC**
- **Disponibilidad:** 99.95%
- **Tiempo de respuesta:** < 1 segundo
- **Precisión:** 100%
- **Comunicaciones:** Funcionales 100%

#### **13.2 Sistemas PTC**
- **Disponibilidad:** 99.95%
- **Tiempo de respuesta:** < 1 segundo
- **Precisión:** 100%
- **Interoperabilidad:** 100% con FENOCO

#### **13.3 Sistemas TETRA**
- **Disponibilidad:** 99.9%
- **Cobertura:** 100%
- **Calidad de voz:** > 95%
- **Comunicaciones:** Funcionales 100%

---

## 🎯 PRÓXIMOS PASOS

### **14. ACCIONES INMEDIATAS**

#### **14.1 Esta Semana:**
1. **Aprobar ingeniería** de sistemas de detalle
2. **Iniciar licitación** de equipos principales
3. **Contratar estudios** de integración
4. **Definir proveedores** de materiales

#### **14.2 Próximas 4 Semanas:**
1. **Finalizar planos** de instalación
2. **Obtener permisos** de radiofrecuencia
3. **Contratar personal** especializado
4. **Preparar equipos** de instalación

---

**Documento de ingeniería de sistemas según Metodología Punto 42**  
**Fecha de desarrollo:** 27 de enero de 2025  
**Responsable:** Administrador Contractual EPC  
**Estado:** ✅ **INGENIERÍA DE SISTEMAS DE DETALLE COMPLETADA**
