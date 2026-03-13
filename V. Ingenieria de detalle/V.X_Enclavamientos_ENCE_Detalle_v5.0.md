# V.X - INGENIERÍA DE DETALLE: ENCLAVAMIENTOS ENCE v6.0
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Versión:** v6.0 - Purge Release (Interlocking Detail Design)
**Metodología:** Punto 42 (Karpathy Saneamiento) - Ciclo Inverso

---

## 1. ENCLAVAMIENTOS VIRTUALIZADOS (SANEADOS)

Los 5 enclavamientos electrónicos (ENCE) operan como nodos inteligentes bajo el protocolo **Vital IP**, reportando directamente al servidor maestro PTC.

### 1.1 Ubicaciones de Control:
- **Nodos:** La Dorada, Puerto Salgar, Puerto Berrío, Puerto Nare, Chiriguaná.
- **Función:** Control lógico de desvíos y reporte de estado de vía a nivel local, con subordinación al CTC centralizado.

### 1.2 Interfaz de Comunicación:
- **Red:** Backbone de Fibra Óptica (Primario) y Radio TETRA (Respaldo para telemetría).
- **Purga:** Se elimina el soporte para protocolos PTC propietarios y comunicaciones RED TETRA (Misión Crítica).

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE RBC/RED TETRA (Misión Crítica))

Se han corregido los siguientes errores técnicos de la v5.0:
- ✅ **ELIMINADO:** El requisito de comunicación ENCE-RBC. El ENCE ahora habla directamente con el **Servidor PTC Maestro**.
- ✅ **ELIMINADO:** Cualquier interfaz física o lógica para punto de referencia virtuals o señales LED de vía.
- ✅ **ELIMINADO:** Protocolos de comunicación duales TETRA/RED TETRA (Misión Crítica) en el hardware ENCE.
- ✅ **CORREGIDO:** El dimensionamiento de los gabinetes ENCE se reduce al eliminar módulos de interfaz propietarios de terceros.

---

## ⚙ LOGICA DE SEGURIDAD LOCAL
- Cada ENCE mantiene una tabla de enclavamiento local para proteger maniobras en patio, incluso en caso de pérdida de enlace con el CCO.
- Interoperabilidad garantizada con FENOCO mediante el procedimiento **Stop & Switch** y el intercambio de bits de estado vía IP.

---

## ✅ CONCLUSIONES:

Los enclavamientos electrónicos han sido saneados para operar en un entorno de **PTC Virtual**, garantizando la autonomía operativa y la soberanía tecnológica del corredor.

**Saneamiento Ciclo 5 - Ingeniería de Detalle ENCE Finalizado.**
