# LISTADO MAESTRO DE SISTEMAS v6.0 (PTC VIRTUAL)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Proyecto:** APP La Dorada - Chiriguaná  
**Contrato:** Concesión No. 001 de 2025  
**Estado:** ✅ PURGADO - 100% COHERENTE CON PTC/TETRA

---

## 📄 INVENTARIO TÉCNICO MAESTRO
Este listado consolida los sistemas reales que el EPC implementará, eliminando toda infraestructura europea (PTC Virtual) y de radiocomunicación redundante no contractual (Red Vital IP / TETRA).

### 1. SEÑALIZACIÓN Y CONTROL (PTC VIRTUAL)
| Componente | Cantidad | Descripción | Estándar |
|:---|:---:|:---|:---|
| **Servidor Central PTC** | 1 | Lógica de bloque virtual y autorizaciones | FRA 236 I |
| **ENCE (Enclavamientos)**| 5 | Lógica de estación (Zapatosa, Cadena, etc.) | AREMA |
| **Equipos Embarcados** | 15 | Computadoras PTC en locomotoras | FRA |
| **Dispositivos EOT** | 15 | Integridad del tren al final de la vía | FRA |
| **Desvíos Motorizados** | 25 | Controlados remotamente por el SICC | AREMA |
| **Desvíos Manuales** | 95 | Operación manual con sensor de posición | AREMA |

### 2. TELECOMUNICACIONES (TETRA + FIBRA)
| Componente | Cantidad | Descripción | Estándar |
|:---|:---:|:---|:---|
| **Estaciones Base TETRA**| 37 | Cobertura total de voz y datos críticos | ETSI TETRA |
| **Backbone Fibra Óptica**| 526 km | Anillo redundante de comunicaciones | ITU-T |
| **Nodos IP/MPLS** | 37 | Gestión de red de datos | IETF |

---

## 🔍 AUDITORÍA DE PURGA (P.42)
1. **ELIMINADO Red Vital IP / TETRA:** No es el estándar del contrato. Se centralizan comunicaciones en **TETRA**.
2. **ELIMINADO EUROBALIZAS/LEU:** No aplican a la arquitectura virtual.
3. **ELIMINADO SEÑALES LED:** Se reemplazan por señalización en cabina (Cab-Signalling).
4. **ELIMINADO Servidor PTC Central PTC Virtual:** Se reemplaza por **Servidor PTC**.

---

| Versión | Fecha       | Responsable            | Descripción                              |
|:------:|:-----------:|:-----------------------|:-----------------------------------------|
| v6.0   | 13/03/2026  | Admin. Contractual EPC | Purga total de PTC Virtual/Red Vital IP / TETRA. Alineación con SICC/PTC. |
