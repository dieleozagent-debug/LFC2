# MEMORIAS DE DISEÑO BÁSICO v6.0 (PTC VIRTUAL)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Versión:** v6.0 - Purge Release (Basic Design Engineering)
**Metodología:** Punto 42 (Karpathy Saneamiento) - Ciclo Inverso

---

## 1. CRITERIOS DE DISEÑO DE SISTEMAS

### 1.1 Filosofía de Control y Señalización
Se adopta la arquitectura **PTC Virtual** (FRA 236 Subpart I). El diseno básico descarta cualquier infraestructura física en vía para señalización.
- **Autorización de Movimiento (MA):** Generada en el Servidor Maestro 2oo3 y transmitida vía radio.
- **Bloqueo:** Lógica de **Bloque Virtual (V-Block)** integrada en el Servidor PTC.
- **Localización:** Basada en reporte de OBC (vía GNSS/IMU) y validada por el EOT en cola.

### 1.2 Segmento Telecomunicaciones (Unificación TETRA)
Se realiza una optimización radical del CAPEX eliminando la red Red Vital IP / TETRA. 
- **Backbone:** Unificación en red **TETRA** de misión crítica.
- **Redundancia:** Implementada a nivel de hardware de radio y enlace de Fibra Óptica (Backbone IP).

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE PTC VIRTUAL/Red Vital IP / TETRA)
En cumplimiento del **Ciclo Inverso**, se han eliminado las siguientes memorias obsoletas:
1.  ❌ **ELIMINADO:** Memorias de cálculo de Virtual Balise (GNSS)s (0 unidades).
2.  ❌ **ELIMINADO:** Memorias de cobertura Red Vital IP / TETRA (Sustituido por TETRA).
3.  ❌ **ELIMINADO:** Protocolos FFFIS/UNISIG (Sustituido por **Vital IP**).
4.  ❌ **ELIMINADO:** Menciones a Servidor PTC Central (Servidor PTC Central) europeo.

---

## 🛠 ARQUITECTURA TÉCNICA REFINADA

| Componente | Especificación Saneada | Cantidad |
|:---|:---|:---:|
| **Servidor PTC** | Arquitectura 2oo3 (COTS) | 1 (H+S) |
| **Radio Estaciones**| TETRA (Troncalizada) | 37 |
| **OBC (Bordo)** | Retrofit PTC (FRA-Compliant) | 15 |
| **EOT (Cola)** | Dispositivo Vital IP | 15 |
| **ENCE** | Enclavamiento Lógico (V-Block) | 5 |

---

## ✅ CONCLUSIONES:

Las Memorias de Diseno Básico han sido saneadas para garantizar que no existan contradicciones con los Criterios Técnicos Maestros. Se ha eliminado la redundancia innecesaria y la dependencia de estándares propietarios de terceros.

**Saneamiento Ciclo 4 - Memorias de Diseno Finalizado.**
