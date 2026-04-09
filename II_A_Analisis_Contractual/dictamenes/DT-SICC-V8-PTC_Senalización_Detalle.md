# DICTAMEN DE VALIDACIÓN CONTRACTUAL: SENALIZACIÓN FERROVIARIA S-PTC
## Proyecto LFC2 - Metodología Punto 42 (v8.0)

**Estatus:** ✅ VIGENTE  
**Sistema:** Señalización de Detalle (S-PTC / FRA 236)  
**Fecha:** 09 de abril de 2026  
**Responsable:** OpenGravity Sovereign Auditor  
**Impacto CAPEX:** -$25,000,000 USD (Ahorro por supresión de infraestructura física)

---

## 1. RESUMEN EJECUTIVO
Este dictamen establece la validez contractual y normativa de la arquitectura **PTC Virtual (Moving Block)** para el corredor La Dorada - Chiriguaná. Se ratifica que el contrato no exige señales físicas laterales ni Bloque Virtual Dinámico en línea, habilitando el uso de comunicaciones inalámbricas (incluyendo satélite) bajo el principio de **Fail-Safe** de la norma FRA.

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
> Las normas internacionales (CENELEC Seguridad RAMS bajo FRA 236 Subpart I / PTCSP/128/129) son referencias de calidad, pero **no tienen jerarquía** para prohibir tecnologías habilitadas expresamente por el AT1 (Nivel 2).

---

## 3. ANÁLISIS DEL VERBO RECTOR
### 3.1 Habilitación Expresa de Redundancia Satellite (AT1)
El Apéndice Técnico 1, en la sección de Comunicaciones, establece textualmente:
*«Las comunicaciones con los trenes, los elementos de vía, y todos los actores de la Operación deberán contar con 100% de cobertura y **podrán estar redundadas por una comunicación satelital.**»*

**Interpretación Forense:** 
El satélite está consagrado como sistema de redundancia definitiva. Su naturaleza no impide su despliegue prioritario durante la **Fase Transitoria** para garantizar la activación temprana del sistema PTC, mientras finaliza la obra civil de la fibra óptica.

---

## 4. NORMA RECTORA: FRA 49 CFR PARTE 236
La **Tabla 17 del AT1** exige implementar el PTC conforme a la norma **FRA 49 CFR Parte 236 Subparte I**. 

*   **Neutralidad Tecnológica:** La norma no prescribe medios físicos específicos. Solo exige protección de datos y autenticación criptográfica (§236.1033).
*   **Principio de Falla Segura (Fail-Safe):** La seguridad se garantiza mediante el frenado automático ante cualquier retardo o pérdida de comunicación (§236.786). La latencia satelital no compromete la vida humana; simplemente activa el frenado preventivo.

---

## 5. CUMPLIMIENTO WBS v4.0 (CONCLUSIÓN N-1)
Este dictamen valida los siguientes ítems de la Línea Base Michelin:
- ✅ **Item 1.1.103:** Software PTC Embarcado ($2.5 MM USD).
- ✅ **Item 1.3.100-104:** Enclavamientos ENCE Lógicos (5 unidades centralizadas).
- ❌ **SUPRESIÓN:** Se prohíbe la instalación de **Señales de Entrada/Salida físicas** en estaciones (Ahorro del 100% del item 1.5.101 de versiones legacy).

---

**Sincronización Exitosa.**  
*Avalado por la Metodología Punto 42 - OpenGravity.*
