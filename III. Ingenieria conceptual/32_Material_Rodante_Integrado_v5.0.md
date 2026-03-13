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
- **Retrofit Vital:** Instalación de **On-Board Computers (OBC)** con redundancia vital.
- **Telecomunicaciones:** Radios **TETRA** de misión crítica (se elimina GSM-R).
- **Seguridad:** Sistema **End of Train (EOT)** vital integrado (15 unidades).

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE ITCS/GSM-R)
- ✅ **ELIMINADO:** Referencias a ETCS Level 2 y RBC.
- ✅ **ELIMINADO:** Módulo STM (sustituido por OBC PTC).
- ✅ **ELIMINADO:** Radio GSM-R (estándar obsoleto para esta arquitectura).
- ✅ **ELIMINADO:** Antenas de Eurobalizas.
- ✅ **ADOPTADO:** Fusión de sensores GNSS/IMU de precisión para localización vital.

---

## 3. COMPONENTES DEL EQUIPO EMBARCADO (SANEADOS)

| Componente | Función | Norma |
|:---|:---|:---:|
| **OBC Vital** | Lógica de supervisión y frenado | FRA 236 / SIL 4 |
| **DMI Industrial** | Interfaz Maquinista-Máquina | AREMA |
| **Radio TETRA** | Backbone de datos vitales | IEEE 1474.1 |
| **GNSS Vital** | Localización sin balizas | FRA 236 |

---

## 📊 TABLA DE COHERENCIA TÉCNICA (SANEADA):

| Elemento | Cantidad | Estado |
|:---|:---:|:---:|
| **Locomotoras** | 15 | SANEADO |
| **Eurobalizas** | 0 | SANEADO |
| **RBC (ETCS)** | 0 | SANEADO |
| **GSM-R** | 0 | SANEADO |
| **Vital PTC Server**| 1 (2oo3) | SANEADO |

---

## ✅ CONCLUSIONES:

El documento de Material Rodante ha sido saneado integralmente para eliminar la contaminación tecnológica de estándares europeos no aplicables, consolidando una flota moderna equipada con **PTC Virtual**.

**Saneamiento Ciclo 3 - Material Rodante Finalizado.**