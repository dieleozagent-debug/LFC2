# SEÑALIZACIÓN FERROVIARIA - INGENIERÍA DE DETALLE (SICC v6.3.3)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 20 de marzo de 2026  
**Versión:** v6.3.3 - Sovereign Restoration (SICC Protocol)

---

## 🛡️ ANCLAJE DE SOBERANÍA TÉCNICA
Este documento detalla la ejecución del sistema de señalización bajo arquitectura **Zero-Wayside**. Se eliminan todos los dispositivos físicos de detección (Axle Counters) y señales luminosas externas, delegando la seguridad vital al **Bloque Virtual (V-Block)** gestionado por el **Vital Server**.

---

## 🏗️ ESPECIFICACIONES TÉCNICAS (.42)

### 1. DETECCIÓN DE TRENES (VIRTUAL)
- **Localización Vital:** Basada en transceptores GNSS de alta disponibilidad integrados en el **OBC**.
- **Integridad de Cola:** Verificada por el dispositivo **EOT Vital** mediante enlace ZigBee/Red Vital IP con la locomotora.
- **Validación Lógica:** El **Vital Server** realiza el seguimiento de la ocupación virtual basándose en las autorizaciones de movimiento (MA) concedidas.

### 2. SEÑALIZACIÓN EN CABINA (DMI)
- **Interfaz Maquinista:** Toda la información de límites de velocidad y autoridad de movimiento se presenta en el terminal **DMI (Driver Machine Interface)** del OBC.
- **Cero Señales Externas:** No se instalan semáforos ni indicadores luminosos en el corredor, reduciendo el riesgo de vandalismo y CAPEX de mantenimiento.

### 3. ENCLAVAMIENTO (ENCE LÓGICO)
- **Control de Puntos:** Los ENCE gestionan exclusivamente el estado de los desvíos y reportan el enclavamiento lógico al CCO.

---

## 📊 MATRIZ DE EQUIPAMIENTO DE DETALLE (.42)

| Componente | Tecnología | Función SICC | Estado SICC |
|:---|:---|:---|:---:|
| **Localizador GPS** | GNSS Diferencial | Detección de Posición | ✅ RESTAURADO |
| **Computadora OBC** | AAR Compliant | Cálculo de Frenado Vital | ✅ RESTAURADO |
| **EOT Vital** | ZigBee / Vital IP | Detección de Integridad | ✅ RESTAURADO |
| **Controlador Desvío**| Vital IP Switch | Mando de Agujas | ✅ RESTAURADO |
| **Contador de Ejes** | **NINGUNO** | **ELIMINADO POR DISEÑO** | ✅ SANEADO |

---

## 🔍 CONCLUSIONES DE SANEAMIENTO
- ❌ **ELIMINADO:** El uso de contadores de ejes ADIF (sabotaje de hardware físico).
- ❌ **ELIMINADO:** El despliegue de señales LED externas (obsoletas en SICC).
- ✅ **RESTAURADO:** El diseño de detalle 100% digital y soberano.

---
**Saneamiento Ciclo .42 - Señalización de Detalle (8.1) Finalizado.**
