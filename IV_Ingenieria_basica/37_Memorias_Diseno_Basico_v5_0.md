# MEMORIAS DE DISENO BÁSICO v6.0 (PTC VIRTUAL)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 20 de marzo de 2026  
**Versión:** v6.0 - Forensic Alignment (Basic Design Engineering)
**Metodología:** Karpathy Loop - Saneamiento de Soberanía

---

## 1. CRITERIOS DE DISENO DE SISTEMAS

### 1.1 Filosofía de Control y Senalización
Se adopta la arquitectura **PTC Virtual** (FRA 236 Subpart I). El diseno básico descarta cualquier infraestructura física en vía para senalización (Cero Punto de Referencia Virtual/Eurobalizas).
- **Autorización de Movimiento (MA):** Generada en el Servidor Maestro 2oo3 y transmitida vía **Vital IP**.
- **Bloqueo:** Lógica de **Bloque Virtual (V-Block)** integrada en el Servidor PTC Central.
- **Localización:** Basada en reporte de OBC (vía GNSS/IMU) y validada por el EOT.

### 1.2 Segmento Telecomunicaciones (Backbone Vital IP)
Consolidación del CAPEX mediante el uso del protocolo **Vital IP** sobre Fibra Óptica.
- **Backbone:** Red de misión crítica **Vital IP** (100% IP Native).
- **Redundancia:** Enlace de radio TETRA únicamente como respaldo transitorio para zonas de baja cobertura FO.

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE PTC VIRTUAL)
En cumplimiento del **Ciclo Inverso**, se han eliminado las siguientes memorias obsoletas:
1.  ❌ **ELIMINADO:** Memorias de cálculo de Eurobalizas y Punto de Referencia Virtual físicas.
2.  ❌ **ELIMINADO:** Protocolos FFFIS (Sustituidos por el **Protocolo Vital IP SICC**).
3.  ❌ **ELIMINADO:** Menciones a Servidores europeos (Servidor PTC Central) de terceros.

---

## 🛠 ARQUITECTURA TÉCNICA REFINADA (SSOT)

| Componente | Especificación Saneada | Cantidad |
|:---|:---|:---:|
| **Servidor PTC** | Arquitectura 2oo3 (COTS) | 1 (H+S) |
| **Protocolo** | **Vital IP** (Soberano) | N/A |
| **OBC (Bordo)** | Retrofit PTC (FRA-Compliant) | 15 |
| **EOT (Cola)** | Dispositivo Vital IP | 15 |
| **ENCE** | Enclavamiento Lógico (V-Block) | 5 |

---

## ✅ CONCLUSIÓN DE AUDITORÍA:
El documento ha sido saneado para eliminar contradicciones técnicas con el `DBCD_CRITERIA.md`. Se restaura la jerarquía del protocolo **Vital IP** como el corazón de las comunicaciones soberanas del proyecto LFC.

**Aprobado con Saneamiento Forense - 20/03/2026.**
