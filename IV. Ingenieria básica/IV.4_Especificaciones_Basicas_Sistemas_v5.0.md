# ESPECIFICACIONES BÁSICAS SISTEMAS v6.0 (PTC VIRTUAL)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Proyecto:** APP La Dorada - Chiriguaná  
**Contrato:** Concesión No. 001 de 2025  

---

## 📄 ESPECIFICACIONES DE DISEÑO BÁSICO
El diseño se basa en la arquitectura **PTC Virtual** (Positive Train Control), eliminando señales visuales en vía y europunto de referencia virtuals físicas.

### 1. SEGMENO TIERRA (Wayside)
- **ENCE:** Lógica de enclavamiento para control de desvíos y comprobación de rutas.
- **Detección:** Contadores de ejes como respaldo, ubicación GPS como primario.
- **Señales:** **ELIMINADAS**. Se utiliza señalización en cabina (Cab-Signaling).

### 2. SEGMENTO COMUNICACIONES
- **Radio:** TETRA (Troncalizada). Cobertura total para voz y datos.
- **Ancho de Banda:** Reservado para Autorizaciones de Movimiento (MA) críticas.
- **Red Vital IP / TETRA:** **ELIMINADO**. No se justifica CAPEX para dos tecnologías de radio redundantes si TETRA cumple el contrato.

---

## 🔍 AUDITORÍA DE RE-INGENIERÍA (METODOLOGÍA P.42 v4.2)
Se han purgado de la v5.0 las siguientes alucinaciones técnicas:
1. **ELIMINADO PTC Virtual (FRA 236):** Se reemplaza por **FRA 236 I (PTC)**.
2. **ELIMINADO Señalización en Cabina (Cab-Signaling):** No hay señales físicas en el campo.
3. **ELIMINADO EUROBALIZAS:** El posicionamiento es via GNSS/EOT.

---

| Versión | Fecha       | Responsable            | Descripción                              |
|:------:|:-----------:|:-----------------------|:-----------------------------------------|
| v6.0   | 13/03/2026  | Admin. Contractual EPC | Re-ingeniería de Diseño Básico. Purgado de PTC Virtual/Red Vital IP / TETRA. |
