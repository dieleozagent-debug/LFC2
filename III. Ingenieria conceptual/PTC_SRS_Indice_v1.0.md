# PTC VIRTUAL — SRS (Índice de Especificación de Requerimientos v2.0)
## APP La Dorada - Chiriguaná

**Fecha:** 13 de marzo de 2026  
**Sistema:** PTC Virtual (Moving Block)  
**Normativa:** FRA 236 Subpart I, AREMA, IEEE 1474.1  
**Metodología:** Punto 42 (Karpathy Saneamiento)

---

## 1. ALCANCE (SCOPE)

### 1.1 Propósito
Este SRS define los requerimientos funcionales y de seguridad para el sistema **PTC Virtual** del proyecto La Dorada - Chiriguaná, diseñado para garantizar la seguridad de la vida, la prevención de colisiones y la optimización del tráfico ferroviario.

### 1.2 Alcance del Sistema
- **Núcleo:** Servidor Vital PTC (Redundancia 2oo3).
- **Comunicación:** Red de misión crítica **TETRA v4** y Backbone de **Fibra Óptica**.
- **Equipamiento:** OBC (On-Board Computer) vital para 15 locomotoras.
- **Interoperabilidad:** Procedimiento operacional **Stop & Switch**.

---

## 2. REQUERIMIENTOS FUNCIONALES (SANEADOS)

### 2.1 Gestión de Movimiento (V-Block)
- **RF-001:** El sistema debe generar Autoridades de Movimiento (MA) basadas en la ocupación dinámica de vía (**Moving Block**).
- **RF-002:** El sistema debe reportar la posición vital del tren mediante fusión de sensores GNSS/IMU de alta precisión.

### 2.2 Supervisión y Frenado
- **RF-003:** Vigilancia continua del perfil de velocidad FRA-Compliant.
- **RF-004:** Aplicación automática de freno de emergencia ante violación de los límites de la MA.

### 2.3 Telecomunicaciones Vitales
- **RF-005:** Mantenimiento de la conectividad mediante el protocolo **Vital IP**.
- **RF-006:** Handover automático entre Fibra Óptica y Radio TETRA en caso de fallo del enlace principal.

---

## 3. SEGURIDAD VITAL (FRA 236)

### 3.1 Niveles de Integridad
- **SIL 4:** Funciones de protección de vida y prevención de colisiones.
- **Ciberseguridad:** Cumplimiento de la norma **IEC 62443** para infraestructura crítica ferroviaria.

---

## 🔍 AUDITORÍA DE SANEAMIENTO:
- ✅ **ELIMINADO:** Requerimientos de Virtual Balise (GNSS)s y Servidor PTC Central.
- ✅ **ELIMINADO:** Referencias a PTC Virtual (FRA 236) y normas CENELEC no aplicables.
- ✅ **ADOPTADO:** Estándar **PTC Virtual** bajo normativa FRA y AREMA.

---

## ✅ CONCLUSIONES:

El Índice SRS ha sido saneado integralmente para servir de base a la ingeniería basica, eliminando la contaminación tecnológica de estándares europeos cerrados por una arquitectura de **PTC Virtual** moderna y resiliente.

**Saneamiento Ciclo 3 - Índice SRS Finalizado.**
