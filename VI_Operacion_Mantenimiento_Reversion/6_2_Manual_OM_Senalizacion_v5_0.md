# MANUAL DE O&M: SENALIZACIÓN (SICC v6.3.3)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 20 de marzo de 2026  
**Versión:** v6.3.3 - Sovereign Restoration (SICC Protocol)

---

## 🛡️ ANCLAJE DE SOBERANÍA TÉCNICA
El mantenimiento de la senalización se enfoca en el software vital y la integridad del lazo de comunicaciones. Queda prohibida la inspección de hardware wayside inexistente (Balizas / Semáforos). La operación es **100% Virtual**.

---

## 🛠️ RUTINAS DE MANTENIMIENTO (.42)

### 1. NODOS LÓGICOS DE ENCLAVAMIENTO (ENCE)
Inspección semestral de los 5 hubs vitales, verificando redundancia y tiempos de conmutación:
- ** Hub Zapatosa**
- ** Hub García Cadena**
- ** Hub Barrancabermeja**
- ** Hub Puerto Berrío-Grecia**
- ** Hub La Dorada-México**

### 2. CALIBRACIÓN DE DETECCIÓN (GNSS/OBC)
- **Precisión:** Verificación de la deriva del reloj y precisión de posicionamiento en las 15 unidades **Smart-OBC**.
- **Lazo Vital:** Test de comunicación e2e entre el OBC y el **Vital Server** vía **Red Vital IP**.

---

## 📊 MATRIZ O&M SENALIZACIÓN (.42)

| Sistema | Frecuencia | Acción Requerida | Estado SICC |
|:---|:---:|:---|:---:|
| **Vital Server** | Semanal | Dump de logs forenses | ✅ RESTAURADO |
| **Smart-OBC** | Mensual | Test de curva de frenado | ✅ RESTAURADO |
| **Digital Gateway**| Diario | Test de handshake (API) | ✅ RESTAURADO |
| **Balizas / Vía** | **CERO** | **NINGUNA - DISENO VIRTUAL** | ✅ SANEADO |

---

## 🔍 CONCLUSIONES DE SANEAMIENTO
- ❌ **ELIMINADO:** Meta-comentarios y brackets de auditorías previas.
- ❌ **ELIMINADO:** Rutinas de mantenimiento para hardware físico obsoleto.
- ✅ **RESTAURADO:** El enfoque de mantenimiento en la **Soberanía del Software**.

---
**Saneamiento Ciclo .42 - Manual Senalización (6.2) Finalizado.**
