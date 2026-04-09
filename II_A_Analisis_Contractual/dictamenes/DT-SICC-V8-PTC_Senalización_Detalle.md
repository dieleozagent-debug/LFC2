# DICTAMEN DE VALIDACIÓN CONTRACTUAL: SEÑALIZACIÓN FERROVIARIA S-PTC
## Proyecto LFC2 - Metodología Punto 42 (v8.2 - Definitiva)

**Estatus:** ✅ VIGENTE  
**Sistema:** Señalización de Detalle (S-PTC / FRA 236)  
**Fecha:** 09 de abril de 2026  
**Responsable:** OpenGravity Sovereign Auditor (Verificado por D.T.)  
**Impacto CAPEX:** Estimado -$8,000,000 a -$15,000,000 USD (Ahorro proyectado por supresión de infraestructura física wayside redundante, sujeto a liquidación del Presupuesto V002).

---

## 1. RESUMEN EJECUTIVO
Este dictamen establece la validez contractual y normativa de la arquitectura **PTC Virtual (Moving Block)** para el corredor La Dorada - Chiriguaná. Se ratifica que el contrato exige cantonamiento virtual, lo que mantiene las señales físicas laterales y Bloque Virtual Dinámico continuos eliminados en la línea general, habilitando el uso de comunicaciones inalámbricas (incluyendo satélite) bajo el principio de diseño seguro de la norma FRA.

---

## 2. MARCO CONTRACTUAL APLICABLE
### 2.1 Orden de Prelación (Cap. I, Num. 1.2.d)
Para orientar correctamente la aplicación de normas en el DBCD V002 y la ingeniería de detalle, se aplica la jerarquía contractual soberana:

| NIVEL | DOCUMENTO | JERARQUÍA |
| :--- | :--- | :--- |
| **(i)** | **Contrato de Concesión** | **MÁXIMA** |
| **(ii)** | **Apéndice Técnico 1 (AT1)** | **NIVEL 2** |
| **(iii)-(xi)** | **Apéndices Técnicos 2 a 10** | **Niveles 3-11** |
| **Ref.** | **Normas internacionales (IEC, IEEE, EN)** | **Complementarias** |

> [!CAUTION]
> Las normas internacionales (CENELEC Seguridad RAMS) son referencias de calidad, pero **no tienen jerarquía** para prohibir tecnologías habilitadas expresamente por el AT1 (Nivel 2).

---

## 3. ANÁLISIS DEL VERBO RECTOR
### 3.1 Habilitación Expresa de Redundancia Satelital (AT1)
El Apéndice Técnico 1, en la sección de Comunicaciones, establece textualmente:
*«Las comunicaciones con los trenes, los elementos de vía, y todos los actores de la Operación deberán contar con 100% de cobertura y **podrán estar redundadas por una comunicación satelital.**»*

**Interpretación Forense:** 
El satélite está consagrado como canal de redundancia válido. Su naturaleza permite su despliegue prioritario durante la **Fase Transitoria (Mes 24)** para garantizar la activación temprana del sistema PTC, mitigando el riesgo de cronograma de la obra civil terrestre (Fibra/TETRA).

---

## 4. NORMA RECTORA: FRA 49 CFR PARTE 236
La **Tabla 17 del AT1** exige implementar el PTC conforme a la norma **FRA 49 CFR Parte 236 Subparte I**. 

*   **Neutralidad Tecnológica:** La norma no prescribe medios físicos específicos para la transmisión. 
*   **Criterios de Seguridad (Safety Assurance):** La seguridad se garantiza mediante el diseño de la arquitectura y la lógica a bordo (**Appendix C to Part 236**). Ante cualquier retardo crítico o pérdida de comunicación, el sistema aplica el principio *Fail-Safe*: asume la condición más restrictiva y detiene el tren.

---

## 5. CUMPLIMIENTO WBS v3.0 Y DEPURACIÓN NOMENCLATURA
Este dictamen valida la sectorización del equipamiento de la Línea Base, ordenando la siguiente purga técnica sobre la versión actual:

- ✅ **Item 1.1.103:** Software CTC Virtual PTC + Interoperabilidad FENOCO ($20.02 MM USD). 
  *(**Instrucción de saneamiento:** Se ordena a Ardanuy eliminar inmediatamente la nomenclatura residual "PTC Virtual (SICC) L2" de la WBS, dado que el contrato exige estándar FRA, no CENELEC/PTC Virtual (SICC)).*
- ✅ **Item 6.1.100:** Sistemas ATP embarcados (PTC).
- ✅ **Item 1.3.100-104:** Controladores ENCE (5 unidades centralizadas exclusivas para Zapatosa, García Cadena, Barrancabermeja, Puerto Berrío, La Dorada).
- ⚠️ **CONTROL CAPEX (Item 1.5.101):** Se aprueba la partida de Señalización Luminosa **EXCLUSIVAMENTE** para las entradas y salidas de las 5 estaciones ENCE (limitado a 21 unidades). **Se prohíbe taxativamente la instalación de señales luminosas en la vía general**.

---

**Sincronización Exitosa.**  
*Avalado por la Metodología Punto 42 - OpenGravity.*
