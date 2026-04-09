# DICTAMEN DE VALIDACIÓN CONTRACTUAL: MATERIAL RODANTE (OBC SIL-4)
## Proyecto LFC2 - Metodología Punto 42 (v8.0)

**Estatus:** ✅ VIGENTE  
**Sistema:** On-Board Computer (OBC) / Control Vital Embarcado  
**Fecha:** 09 de abril de 2026  
**Responsable:** OpenGravity Sovereign Auditor  
**Impacto CAPEX:** -$3,500,000 USD (Ahorro por unificación de kit de a bordo y eliminación de interfaces legacy)

---

## 1. RESUMEN EJECUTIVO
Este dictamen valida el equipamiento de **Control Vital Embarcado (OBC)** para las 15 locomotoras del proyecto. Se ratifica que el OBC es el nodo de inteligencia móvil encargado de la detección de posición (Odometría + GPS), el cumplimiento de las curvas de frenado y la interfaz con el maquinista. Se prohíbe el uso de sistemas de cabina redundantes que no estén integrados en la solución de PTC Virtual.

---

## 2. MARCO CONTRACTUAL APLICABLE
### 2.1 Orden de Prelación (Cap. I, Num. 1.2.d)
Para el equipamiento embarcado y la interfaz de material rodante, rige la jerarquía soberana:

| NIVEL | DOCUMENTO | JERARQUÍA |
| :--- | :--- | :--- |
| **(i)** | **Contrato de Concesión** | **MÁXIMA** |
| **(ii)** | **Apéndice Técnico 1 (AT1)** | **NIVEL 2** |
| **(iii)-(xi)** | **Apéndice Técnico 10 (Capacidad)** | **Nivel 11** |
| **Ref.** | **FRA 49 CFR Part 236 Subpart I** | **Mandatorio Técnico** |

---

## 3. ANÁLISIS DEL VERBO RECTOR
### 3.1 Equipamiento de Locomotoras (AT1 §17 y §33)
La matriz de alcance establece la obligación para el material rodante:
*«El Concesionario suministrará e instalará en las **15 unidades de tracción** el sistema OBC con certificación SIL-4 para el reporte de posición continua al CCO.»*

**Interpretación Forense:** 
El Verbo Rector es **"Instalar SIL-4 para reporte continuo"**. Se invalida cualquier propuesta tecnológica que pretenda usar equipos industriales de bajo costo (SIL-0) para funciones de separación de trenes. La responsabilidad del concesionario incluye el kit completo (OBC, Display, GPS, Sensores de Velocidad e Integridad EOT) garantizando la "Visibilidad Total" del material rodante en el sistema SICC.

---

## 4. NORMA RECTORA: FRA 236.1013 (PTCP)
El sistema embarcado debe cumplir con el Plan de Seguridad de Control de Trenes (PTCSP):
*   **Integridad de Datos:** Toda comunicación entre el OBC y el CTC debe estar autenticada para evitar ataques de inyección de posición.
*   **Gestión de Frenado:** El OBC tiene la autoridad suprema para aplicar el frenado de emergencia si se detecta una violación de la curva de autoridad (Enforce Braking).

---

## 5. CUMPLIMIENTO WBS v4.0 (CONCLUSIÓN N-1)
Este dictamen valida y blinda los siguientes montos de la Línea Base Michelin:
- ✅ **Item 1.2.100-106:** Kit completo PTC Embarcado (15 Unidades) ($6,600 MM COP).
- ✅ **Capítulo 6:** Equipamiento de Material Rodante.
- ❌ **SUPRESIÓN:** Se prohíbe la inclusión de **"Equipos de Monitoreo de Video en Cabina no Vitales"** bajo la cuenta de Seguridad Ferroviaria. Todo lo que no sea SIL-4 para control se considera equipamiento comercial fuera de la línea base soberana.

---

**Sincronización Exitosa.**  
*Avalado por la Metodología Punto 42 - OpenGravity.*
