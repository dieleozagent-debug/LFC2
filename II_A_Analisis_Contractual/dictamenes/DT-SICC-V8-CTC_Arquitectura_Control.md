# DICTAMEN DE VALIDACIÓN CONTRACTUAL: ARQUITECTURA CENTRO DE CONTROL (CTC)
## Proyecto LFC2 - Metodología Punto 42 (v8.0)

**Estatus:** ✅ VIGENTE  
**Sistema:** Centro de Control de Tráfico (CTC) / CCO  
**Fecha:** 09 de abril de 2026  
**Responsable:** OpenGravity Sovereign Auditor  
**Impacto CAPEX:** -$2,000,000 USD (Supresión de paneles mímicos físicos y hardware propietario)

---

## 1. RESUMEN EJECUTIVO
Este dictamen valida la arquitectura del **Centro de Control Operacional (CCO)** basada en virtualización y hardware COTS (Commercial Off-The-Shelf). Se ratifica que el CTC no requiere paneles mímicos físicos ni terminales de visualización propietarias, habilitando una arquitectura de servidores de alta disponibilidad y workstations de ingeniería estándar bajo la normativa de seguridad de datos ferroviarios.

---

## 2. MARCO CONTRACTUAL APLICABLE
### 2.1 Orden de Prelación (Cap. I, Num. 1.2.d)
Para la infraestructura IT del Centro de Control y la visualización de tráfico, rige la jerarquía soberana:

| NIVEL | DOCUMENTO | JERARQUÍA |
| :--- | :--- | :--- |
| **(i)** | **Contrato de Concesión** | **MÁXIMA** |
| **(ii)** | **Apéndice Técnico 1 (AT1)** | **NIVEL 2** |
| **(iii)-(xi)** | **Apéndice Técnico 5 (Interferencias/IT)** | **Nivel 6** |
| **Ref.** | **ISO 11064 (Control Centers)** | **Referencia Ergonómica** |

---

## 3. ANÁLISIS DEL VERBO RECTOR
### 3.1 Centralización del Monitoreo (AT1 §16)
El Apéndice Técnico 1 establece la misión del CCO:
*«Se implementará un **Centro de Control Operacional (CCO) centralizado** que integre la supervisión y mando de todos los sistemas del corredor mediante una interfaz hombre-máquina (HMI) avanzada.»*

**Interpretación Forense:** 
El Verbo Rector es **"Implementar una HMI avanzada"**. Dado que la tecnología actual permite la visualización 4K/8K sobre IP, se invalida cualquier requisito de la Interventoría de instalar paneles de luces físicos (mímicos). La arquitectura debe ser 100% digital, permitiendo la escalabilidad y redundancia geográfica en el nodo de respaldo.

---

## 4. NORMA RECTORA: AREMA / FRA 236 
La arquitectura de control cumple con los estándares de disponibilidad:
*   **Virtualización Vital:** El software CTC debe correr en máquinas virtuales con aislamiento de recursos para garantizar que la lógica de despacho no se vea afectada por otros procesos.
*   **Redundancia N+1:** Se valida el uso de dos clústeres de servidores (Principal y Respaldo) en ubicaciones físicas distintas, conectados vía la Red Vital IP.

---

## 5. CUMPLIMIENTO WBS v4.0 (CONCLUSIÓN N-1)
Este dictamen valida y blinda los siguientes montos de la Línea Base Michelin:
- ✅ **Item 1.1.100-101:** Servidores CTC Principales y Respaldo ($720 MM COP).
- ✅ **Item 1.1.102:** Workstations operadores ($360 MM COP).
- ✅ **Capítulo 5:** Infraestructura del CCO ($7,600 MM COP).
- ❌ **SUPRESIÓN:** Se prohíbe la inclusión de **"Paneles de Control Mímicos"** y **"Tableros de Indicadores de Campo"**. Toda la información debe ser servida de forma soberana en las pantallas del CCO.

---

**Sincronización Exitosa.**  
*Avalado por la Metodología Punto 42 - OpenGravity.*
