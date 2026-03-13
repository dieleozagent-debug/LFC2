# V.3 - INGENIERÍA DE DETALLE: COMUNICACIONES v6.0 (UNIFICACIÓN TETRA)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Versión:** v6.0 - Purge Release (Communications Detail Design)
**Metodología:** Punto 42 (Karpathy Saneamiento) - Ciclo Inverso

---

## 1. ARQUITECTURA DE COMUNICACIONES SANEADA

Se unifica el segmento de telecomunicaciones de misión crítica en la red **TETRA**, eliminando la infraestructura paralela GSM-R para optimizar el CAPEX y simplificar la gestión del espectro.

### 1.1 Red de Radio (Segmento Espacial):
- **Sistema Principal:** TETRA (Terrestrial Trunked Radio) de última generación.
- **Cobertura:** 37 estaciones base distribuidas estratégicamente para garantizar 100% de disponibilidad en el corredor de 594 km.
- **Redundancia:** Implementada a nivel de hardware (Antenas redundantes, fuentes N+1) y a nivel lógico mediante el backbone de Fibra Óptica.

### 1.2 Backbone de Datos (Segmento Tierra):
- **Fibra Óptica:** 594 km de cable G.652D, soportando el protocolo **Vital IP**.
- **Acceso:** Nodos en las 37 estaciones de radio y los 5 centros ENCE.

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE GSM-R)

Se han corregido los siguientes errores técnicos de la v5.5:
- ✅ **ELIMINADO:** Redundancia GSM-R (37 estaciones). El sistema TETRA asume la totalidad del tráfico vital y operativo.
- ✅ **ELIMINADO:** Equipos de red core móvil (MSC, BSC, HLR/VLR) específicos de GSM-R.
- ✅ **ELIMINADO:** Mención a colocalización TETRA+GSM-R. Ahora es una **Red Unificada TETRA**.
- ✅ **ADOPTADO:** Prioridad de tráfico de datos vitales sobre el canal TETRA mediante QoS (Quality of Service) ferroviario.

---

## 📡 ESPECIFICACIÓN TÉCNICA TETRA
- **Banda de Frecuencia:** 380-400 MHz (Sujeto a asignación ANE).
- **Seguridad:** Encriptación TEA2 end-to-end para mensajería vital del tren.
- **Capacidad:** Soporta simultáneamente voz operativa, datos PTC y video de baja latencia para el maquinista.

---

## ✅ CONCLUSIONES:

La ingeniería de comunicaciones de detalle ha sido unificada para reflejar la eficiencia del modelo **PTC Virtual**. Al eliminar la tecnología GSM-R, se reduce la complejidad técnica y se asegura la interoperabilidad nacional sobre un estándar abierto y soberano.

**Saneamiento Ciclo 5 - Ingeniería de Detalle Comunicaciones Finalizado.**
