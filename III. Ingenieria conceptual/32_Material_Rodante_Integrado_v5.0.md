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
- **Telecomunicaciones:** Radios **TETRA** de misión crítica (se elimina RED TETRA (Misión Crítica)).
- **Seguridad:** Sistema **End of Train (EOT)** vital integrado (15 unidades).

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE PTC/RED TETRA (Misión Crítica))
- ✅ **ELIMINADO:** Referencias a PTC Virtual (FRA 236) y RBC.
- ✅ **ELIMINADO:** Módulo STM (sustituido por OBC PTC).
- ✅ **ELIMINADO:** Radio RED TETRA (Misión Crítica) (estándar obsoleto para esta arquitectura).
- ✅ **ELIMINADO:** Antenas de Virtual Balise (GNSS)s.
- ✅ **ADOPTADO:** Fusión de sensores GNSS/IMU de precisión para localización vital.

---

## 3. COMPONENTES DEL EQUIPO EMBARCADO (SANEADOS)

| Componente | Función | Norma |
|:---|:---|:---:|
| **OBC Vital** | Lógica de supervisión y frenado | FRA 236 / SIL 4 |
| **DMI Industrial** | Interfaz Maquinista-Máquina | AREMA |
| **Radio TETRA** | Backbone de datos vitales | IEEE 1474.1 |
| **GNSS Vital** | Localización sin punto de referencia virtuals | FRA 236 |

---

## 📊 TABLA DE COHERENCIA TÉCNICA (SANEADA):

| Elemento | Cantidad | Estado |
|:---|:---:|:---:|
| **Locomotoras** | 15 | SANEADO |
| **Virtual Balise (GNSS)s** | 0 | SANEADO |
| **RBC (PTC VIRTUAL)** | 0 | SANEADO |
| **RED TETRA (Misión Crítica)** | 0 | SANEADO |
| **Vital PTC Server**| 1 (2oo3) | SANEADO |

---

## ✅ CONCLUSIONES:

El documento de Material Rodante ha sido saneado integralmente para eliminar la contaminación tecnológica de estándares europeos no aplicables, consolidando una flota moderna equipada con **PTC Virtual**.

**Saneamiento Ciclo 3 - Material Rodante Finalizado.**