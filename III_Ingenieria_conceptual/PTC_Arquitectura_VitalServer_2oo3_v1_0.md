# PTC VIRTUAL — Arquitectura de Servidor Vital 2oo3 (Especificación v2.0)
## APP La Dorada - Chiriguaná

**Fecha:** 13 de marzo de 2026  
**Sistema:** Vital PTC Server con redundancia 2oo3  
**Normativa:** FRA 236 Subpart I, AREMA, IEEE 1474.1  
**Metodología:** Punto 42 (Karpathy Saneamiento)

---

## 1. ALCANCE Y OBJETIVOS

### 1.1 Propósito
Este documento especifica la arquitectura del **Vital PTC Server** para el sistema de control de trenes del proyecto. Este componente es el cerebro de la seguridad vital, encargado de gestionar las autoridades de movimiento en modo **Moving Block**.

### 1.2 Objetivos de Seguridad (SIL 4)
- **Alta disponibilidad:** 99.996%.
- **Seguridad Vital:** Certificación funcional SIL 4 (CENELEC) o equivalente FRA.
- **Redundancia:** Arquitectura **2 de 3 (2oo3)** que permite operación continua ante fallo simple.

---

## 2. ARQUITECTURA DE SEGURIDAD 2oo3

### 2.1 Concepto de Votación Modular
El sistema utiliza tres procesadores independientes que ejecutan la misma lógica vital. Un votador de seguridad selecciona la salida correcta si al menos 2 procesadores coinciden.

### 2.2 Componentes del Servidor Vital:
- **Canal A, B y C:** Procesadores Vitales independientes.
- **Votador Vital:** Módulo de hardware/software que valida la salida mayoritaria.
- **Protocolo Vital IP:** Comunicación tren-tierra sobre red **TETRA** y Fibra Óptica.

---

## 3. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE Servidor PTC Central/PTC VIRTUAL)
- ✅ **ELIMINADO:** Término "Servidor PTC Central" (Servidor PTC Central) por ser terminología PTC VIRTUAL.
- ✅ **ELIMINADO:** Interfaces de Punto de Referencia Virtual (SICC) (sustituidas por GNSS Vital).
- ✅ **ELIMINADO:** Soporte para protocolos FFFIS (sustituidos por Vital IP).
- ✅ **ADOPTADO:** Estándar **PTC Virtual** compatible con operación en EE.UU.

---

## 4. ESPECIFICACIONES DE RENDIMIENTO (SANEADAS)

| Métrica | Objetivo | Criterio |
|:---|:---:|:---|
| **Capacidad** | 32 locomotoras | Gestión simultánea en tiempo real. |
| **Latencia** | < 100ms | Latencia punta-a-punta en el backbone. |
| **Disponibilidad**| 99.95% | Uptime consolidado según AT4. |

---

## ✅ CONCLUSIONES:

La arquitectura del Servidor Vital ha sido saneada para eliminar dependencias de estándares europeos cerrados, adoptando una configuración de **PTC Virtual** robusta, basada en la arquitectura de seguridad **2oo3**.

**Saneamiento Ciclo 3 - Arquitectura Servidor Vital Finalizado.**
