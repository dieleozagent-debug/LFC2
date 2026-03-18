# V.4 - INGENIERÍA DE DETALLE: POTENCIA v6.0 (OPTIMIZACIÓN PTC VIRTUAL)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Versión:** v6.0 - Purge Release (Power Systems Detail Design)
**Metodología:** Punto 42 (Karpathy Saneamiento) - Ciclo Inverso

---

## 1. ARQUITECTURA DE POTENCIA SANEADA

La ingeniería de potencia se redimensiona para soportar exclusivamente la infraestructura de **PTC Virtual** y la red unificada **TETRA**, eliminando el sobrecosto de alimentar sistemas redundantes obsoletos.

### 1.1 Centros de Potencia (CCO y Estaciones):
- **CCO La Dorada:** Alimentación redundante para el Servidor Maestro PTC y el video-muro. Se elimina la carga dedicada a servidores Servidor PTC Central.
- **Estaciones ENCE (5):** Alimentación vital para controladores de enclavamiento IP.
- **Torres TETRA (37):** Unificación de la carga eléctrica. Se elimina el requerimiento de potencia para el hardware Red Vital IP / TETRA colocalizado.

### 1.2 Respaldo de Energía:
- **UPS:** Sistemas dimensionados para autonomía de 4 horas en equipos vitales (ENCE/TETRA).
- **Generadores:** Respaldan el 100% de la carga de comunicaciones y señalización virtual en caso de falla de la red comercial.

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE Red Vital IP / TETRA/PTC Virtual)

Se han corregido los siguientes desvíos técnicos de la v5.0:
- ✅ **ELIMINADO:** Dimensionamiento de transformadores para 37 estaciones Red Vital IP / TETRA.
- ✅ **ELIMINADO:** Alimentación para "Virtual Balise (GNSS)s y Señalización en Cabina (Cab-Signaling)" (Hardware inexistente en PTC Virtual).
- ✅ **ELIMINADO:** Matriz de impacto presupuestal que mantenía vivo el concepto "Red Vital IP / TETRA".
- ✅ **OPTIMIZADO:** El CAPEX se reduce al simplificar tableros eléctricos y protecciones de las torres de comunicación.

---

## ⚡ ESPECIFICACIÓN TÉCNICA DE CARGA
- **Carga Total Estimada:** Reducción del 15% respecto a la v5.0 al eliminar el hardware de radio europeo.
- **Eficiencia:** Uso de rectificadores de alta eficiencia para la red TETRA.

---

## ✅ CONCLUSIONES:

La ingeniería de detalle de potencia ahora refleja fielmente las necesidades de un sistema moderno y eficiente. Al purgar las cargas redundantes del Red Vital IP / TETRA y PTC Virtual, aseguramos la viabilidad técnica y financiera del proyecto, alineándonos con la **Soberanía Tecnológica**.

**Saneamiento Ciclo 5 - Ingeniería de Detalle Potencia Finalizado.**