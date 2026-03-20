# MATERIAL RODANTE INTEGRADO v6.0 (PTC VIRTUAL)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Versión:** v6.0 - Purge Release (OBC Retrofit)
**Metodología:** Punto 42 (Karpathy Saneamiento)

---

## 1. ALCANCE TÉCNICO
Este documento define las especificaciones del material rodante (15 locomotoras) y el equipamiento embarcado necesario para la operación bajo el estándar **PTC Virtual (FRA 236)**.

### 1.1 Configuración de la Flota:
- **Locomotoras:** 15 unidades GE U18C o equivalentes.
- **Retrofit SICC:** Instalación de **On-Board Computers (OBC)** con redundancia vital.
- **Telecomunicaciones:** **Red Vital IP** como enlace primario y TETRA como respaldo.
- **Seguridad:** Sistema **End of Train (EOT)** vital integrado (15 unidades).

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (RESTAURACIÓN SICC v6.3.3)
- ✅ **RESTAURADO:** Servidor PTC Central (Cerebro Vital).
- ✅ **RESTAURADO:** Red Vital IP como enlace de datos primario del OBC.
- ✅ **RESTAURADO:** Sensores GNSS/IMU para localización sin Punto de Referencia Virtual.
- ✅ **ELIMINADO:** Equipos STM europeos y Punto de Referencia Virtual físicas.

---

## 3. COMPONENTES DEL EQUIPO EMBARCADO (SANEADOS)

| Componente | Función | Norma |
|:---|:---|:---:|
| **OBC Vital** | Lógica SICC de supervisión y frenado | FRA 236 / SIL 4 |
| **DMI (SICC)** | Interfaz Maquinista Soberana | AREMA |
| **Enlace Dual** | **Red Vital IP** (Primaria) + TETRA (Respaldo) | SICC v6.3.3 |
| **GNSS Vital** | Localización soberana por satélite | FRA 236 |

---

## 📊 TABLA DE COHERENCIA TÉCNICA (SANEADA):

| Elemento | Cantidad | Estado |
|:---|:---:|:---:|
| **Locomotoras (Retrofit SICC)** | 15 | RESTAURADO |
| **Servidor PTC Central (LFC-CCO)** | 1 | RESTAURADO |
| **Red Vital IP (Antenas OBC)** | 15 | RESTAURADO |
| **EOT Vital (Integrado SICC)** | 15 | RESTAURADO |

---

## ✅ CONCLUSIONES:

El documento de Material Rodante ha sido saneado integralmente para eliminar la contaminación tecnológica de estándares europeos no aplicables, consolidando una flota moderna equipada con **PTC Virtual**.

**Saneamiento Ciclo 3 - Material Rodante Finalizado.**