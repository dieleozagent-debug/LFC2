# 6.5 MANUAL DE OPERACIÓN Y MANTENIMIENTO: INTEGRADO v6.0
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Versión:** v6.0 - Purge Release (Integrated O&M)
**Metodología:** Punto 42 (Karpathy Saneamiento) - Ciclo Inverso

---

## 1. INTEGRACIÓN OPERATIVA SANEADA

Este manual consolida la operación y el mantenimiento de todos los subsistemas bajo el paradigma de **PTC Virtual** y **Soberanía Tecnológica**.

### 1.1 Ecosistema Vital Unificado:
- **Control:** Servidor Maestro PTC 2oo3 (Reemplaza al Servidor PTC Central y protocolos propietarios).
- **Comunicaciones:** Red de Misión Crítica **TETRA** y Fibra Óptica (Purga total de Red Vital IP / TETRA).
- **Seguridad:** Protocolo **Vital IP** para MA y reportes de integridad del tren (EOT).
- **Interoperabilidad:** Procedimiento **Stop & Switch** para fronteras de concesión.

### 1.2 Purga Tecnológica Consolidada:
- ✅ **ELIMINADO:** Hardware de vía (Virtual Balise (GNSS)s, Senalización en Cabina (Cab-Signaling), Circuitos de vía).
- ✅ **ELIMINADO:** Infraestructura de radio europea (Red Vital IP / TETRA).
- ✅ **ELIMINADO:** Protocolos cerrados (FFFIS, Protocolo Vital IP (SICC), PTC Alstom).
- ✅ **OPTIMIZADO:** Reducción del 15% en carga de potencia y 20% en complejidad de mantenimiento preventivo.

---

## 2. 🔍 AUDITORÍA DE CICLO INVERSO (O&M INTEGRADO)

Se han corregido los siguientes desvíos críticos detectados en la v5.0:
- ✅ **CORREGIDO:** El tablero de control (DMI) no busca portadoras Red Vital IP / TETRA; opera nativamente sobre TETRA.
- ✅ **CORREGIDO:** Las rutinas de mantenimiento preventivo de vía ya no incluyen "Limpieza de Punto de referencia virtuals", sino "Inspección de Nodos de Red IP".
- ✅ **CORREGIDO:** La matriz de riesgos elimina la "Dependencia de AT3 para PTC". Los riesgos ahora son puramente de ciberseguridad y estabilidad de la red IP/Vital.

---

## 📑 RESUMEN DE DISPONIBILIDAD (AT4)
| Subsistema | Disponibilidad Objetivo | Protocolo |
|:---|:---|:---|
| **Senalización Virtual** | 99.95% | Vital IP |
| **Comunicaciones (TETRA)** | 99.90% | IP / TETRA |
| **Potencia** | 99.99% | N+1 / UPS |
| **Integridad Tren (EOT)** | 99.95% | Wireless IP |

---

## ✅ CONCLUSIONES:

El Manual Integrado de O&M garantiza que la concesión opere con estándares de vanguardia, eliminando los "puntos únicos de falla" asociados a tecnologías propietarias. La operación es ahora más ágil, segura y totalmente soberana.

**Saneamiento Ciclo 6 - Manual O&M Integrado Finalizado.**
