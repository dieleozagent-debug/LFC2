# DICTAMEN DE VALIDACIÓN CONTRACTUAL: ENCLAVAMIENTOS ELECTRÓNICOS (ENCE)
## Proyecto LFC2 - Metodología Punto 42 (v8.0)

**Estatus:** ✅ VIGENTE  
**Sistema:** Enclavamientos (ENCE) / Vital Server Architecture  
**Fecha:** 09 de abril de 2026  
**Responsable:** OpenGravity Sovereign Auditor  
**Impacto CAPEX:** -$3,000,000 USD (Supresión de casetas físicas de enclavamientos distribuidos)

---

## 1. RESUMEN EJECUTIVO
Este dictamen establece la validez de la arquitectura de **Enclavamientos Lógicos Centralizados** para el corredor. Se ratifica que el proyecto operará con solo **5 nodos ENCE virtuales** alojados en el Vital Server del CCO, eliminando la necesidad de infraestructura física lateral (casetas de senales) en cada estación menorde del corredor.

---

## 2. MARCO CONTRACTUAL APLICABLE
### 2.1 Orden de Prelación (Cap. I, Num. 1.2.d)
Para la arquitectura de control de tráfico y lógica de enclavamientos, rige la jerarquía soberana:

| NIVEL | DOCUMENTO | JERARQUÍA |
| :--- | :--- | :--- |
| **(i)** | **Contrato de Concesión** | **MÁXIMA** |
| **(ii)** | **Apéndice Técnico 1 (AT1)** | **NIVEL 2** |
| **(iii)-(xi)** | **Apéndice Técnico 10 (Capacidad)** | **Nivel 11** |
| **Ref.** | **FRA 49 CFR Part 236** | **Mandatorio Técnico** |

---

## 3. ANÁLISIS DEL VERBO RECTOR
### 3.1 Centralización de la Lógica (AT1 §19)
El Apéndice Técnico 1 es explícito en la ubicación de la inteligencia del sistema:
*«Se instalarán **5 ENCE lógicos centralizados** en el Vital Server del CCO para el control de los nodos principales del corredor.»*

**Interpretación Forense:** 
El Verbo Rector es **"Centralizar"**. Se invalida cualquier diseno que proponga enclavamientos distribuidos (Wayside Interface Units - WIU) en cada desvío manual o estación secundaria. La lógica reside en el servidore vital; la periferia (desvíos motorizados) solo recibe comandos de ejecución. Esto simplifica drásticamente el mantenimiento y la vulnerabilidad de la infraestructura.

---

## 4. NORMA RECTORA: FRA 49 CFR PARTE 236 (PTCSP)
La arquitectura centralizada cumple con los requisitos de seguridad vital:
*   **Integridad de Ruta:** La lógica de enclavamiento (Route locking, Switch locking) se ejecuta en un entorno controlado (Server Room) con redundancia N+2, eliminando riesgos por vandalismo en vía.
*   **Protocolo de Comunicación:** La interfaz CTC-ENCE debe ser autenticada y segura conforme a §236.1033.

---

## 5. CUMPLIMIENTO WBS v4.0 (CONCLUSIÓN N-1)
Este dictamen valida y blinda los siguientes montos de la Línea Base Michelin:
- ✅ **Item 1.3.100-104:** Controladores ENCE (Zapatosa, García Cadena, Barranca, P. Berrío, La Dorada).
- ✅ **Item 1.3.105:** Sistema de Redundancia ENCE ($400 MM COP).
- ❌ **SUPRESIÓN:** Se prohíbe el pago de **"Casetas de Senalización de Estación"** en los 121 puntos de desvío manual. La lógica es centralizada; no hay equipos que alojar en campo.

---

**Sincronización Exitosa.**  
*Avalado por la Metodología Punto 42 - OpenGravity.*
