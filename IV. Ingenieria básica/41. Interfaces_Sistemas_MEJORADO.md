# ESPECIFICACIÓN DE INTERFACES (ICD) v6.3.2 (SICC SOVEREIGN)
## APP La Dorada - Chiriguaná | Fase IV

**Fecha de actualización:** 18 de marzo de 2026  
**Estatus:** ✅ **SICC PURIFIED | SOBERANÍA TÉCNICA**

---

## 1. MAPA DE INTERFACES VITALES (SICC)
El sistema **SICC** unifica sus comunicaciones bajo el protocolo **Vital IP**, garantizando interoperabilidad nativa y soberanía tecnológica.

### 1.1 Matriz de Interfaces:
| ID | Origen | Destino | Protocolo | Tipo |
|:---|:---|:---|:---|:---|
| **IF-V-01** | OBC (Locomotora) | Servidor PTC | **Vital IP / TETRA (Red Vital)** | Vital |
| **IF-V-02** | EOT (Cola) | OBC | **SICC Wireless Link** | Vital |
| **IF-V-03** | Dashboard Sovereign | Servidor SICC | **Secure TCP/IP Layer** | Operativa |
| **IF-V-04** | Servidor PTC | ENCE (5 Est) | **Vital IP (Red Vital)** | Vital |
| **IF-V-05** | CCO SICC | CCO FENOCO | **Inter-SICC Protocol** | Interop |

---

## 2. 🔍 CRITERIOS DE SANEAMIENTO (SSOT)
Se han validado nativamente las siguientes interfaces soberanas:
*   ✅ **Red Vital IP / TETRA**: Confirmada como el canal de datos principal para mensajería vital (MA/Posición).
*   ✅ **PTC Virtual (SICC)**: Protocolo de control unificado (reemplaza apéndices propietarios).
*   ✅ **Vital IP Protocol**: Capa de seguridad SICC para comunicaciones sobre red MPLS y TETRA.

---

## 🏗️ ESPECIFICACIÓN TÉCNICA VITAL IP
*   **Capa de Transporte**: Pilas TCP/UDP Saneadas.
*   **Seguridad Vital**: Checksum CRC64, Timestamps de alta precisión y tokens de autenticidad SICC.
*   **Latencia**: Optimización para < 120ms punta a punta (Crítico para frenado de emergencia).

---
**Saneamiento Ciclo 6 - ICD SICC Finalizado.**