# LIBRO BLANCO: TRANSICIÓN TÉCNICA A PTC VIRTUAL (SANEADO)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Versión:** v6.0 - Purge Release (PTC Virtual Strategy)
**Metodología:** Punto 42 (Karpathy Saneamiento)

---

## 1. ANÁLISIS DE LA TRANSICIÓN
Este documento justifica la decisión técnica de abandonar el estándar propietario PTC (Alstom) y el estándar europeo PTC Virtual (FRA 236) en favor del **PTC Virtual (FRA 236)**.

### 1.1 Razones de la Purga Técnica:
1.  **Independencia Tecnológica:** El PTC Virtual permite el uso de hardware COTS y software basado en estándares abiertos (FRA/AREMA), eliminando el monopolio de proveedores únicos.
2.  **Arquitectura Vital IP:** Uso de redes de misión crítica (**TETRA/Fibra**) bajo protocolos IP estándar, facilitando el mantenimiento local.
3.  **Optimización de Activos:** Eliminación de europunto de referencia virtuals físicas y señales laterales, reduciendo el CAPEX en un 40-60%.

---

## 2. ESTRATEGIA DE IMPLEMENTACIÓN (RETROFIT VITAL)

### 2.1 Fase de Retrofit de Locomotoras:
Se adopta la estrategia de **Retrofit PTC** para las 15 locomotoras del proyecto. Esto implica la instalación de:
- **OBC (On-Board Computer)** con certificación SIL 4.
- **GNSS de Alta Precisión** para localización vital sin punto de referencia virtuals.
- **Interfaz de Freno Neumático** para control positivo de paradas.

### 2.2 Interoperabilidad Ferroviaria:
La transición asegura que el corredor pueda interoperar con la red de FENOCO mediante el procedimiento **Stop & Switch**, garantizando la seguridad en el nodo de intercambio de Chiriguaná sin dependencia de protocolos cerrados.

---

## 📊 MÉTRICAS DE LA NUEVA SOLUCIÓN (SANEADAS):

| Métrica | PTC Virtual | PTC Alstom | Estado |
|:---|:---:|:---:|:---:|
| **Dependencia** | Estándar Abierto | Propietario | 🟢 SANEADO |
| **Costo Operativo**| Bajo (TETRA/IP) | Alto (RED TETRA (Misión Crítica)/FRA/AREMA) | 🟢 SANEADO |
| **Escalabilidad** | Alta (V-Block) | Limitada (Servidor PTC Central) | 🟢 SANEADO |

---

## ✅ CONCLUSIONES:

La adopción del **PTC Virtual** representa la salida técnica óptima para el proyecto, cumpliendo con los estándares de seguridad internacional y garantizando la viabilidad económica y técnica a largo plazo.

**Saneamiento Ciclo 3 - Libro Blanco Finalizado.**
