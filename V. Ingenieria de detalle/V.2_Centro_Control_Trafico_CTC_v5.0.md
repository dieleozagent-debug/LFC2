# V.2 - INGENIERÍA DE DETALLE: CCO Y CTC SICC (VIRTUAL READY)
## APP LA DORADA - CHIRIGUANÁ v6.3.2

**Fecha de actualización:** 18 de marzo de 2026  
**Versión:** v6.3.2 - SICC Integrated Control
**Metodología:** Karpathy Autoresearch Loop (Daemon v1.0)

---

## 1. ARQUITECTURA DEL CENTRO DE CONTROL (CCO)

El Centro de Control de Operaciones (CCO) centraliza la inteligencia del corredor a través de una arquitectura de **Servidor Maestro SICC**. Se elimina la dependencia de hardware ferroviario propietario, optando por sistemas COTS (Commercial Off-The-Shelf) de alta disponibilidad.

### 1.1 Servidor Maestro SICC (Back-End Vital)
- **Cálculo Vital:** Algoritmos de separación de trenes (Moving Block) basados en reportes GNSS/EOT.
- **Base de Datos de Vía SICC:** Mapeo digital 3D del corredor (526 km) con perfiles de velocidad y restricciones temporales (TSR).
- **Interoperabilidad SICC:** Interfaz nativa para integración con sistemas de despacho y mantenimiento.

### 1.2 Comunicación de Campo (Segmento Tierra-Tren)
- **Backbone Soberano:** Red de Fibra Óptica redundante.
- **Acceso Inalámbrico:** **Red Vital IP / TETRA** (UHF/LTE) para la transmisión de mensajes de autorización MA.
- **Interfaz HMI Premium:** Visualización interactiva para los despachadores con motor de toma de decisiones técnica.

---

## 2. 🛡️ SANEAMIENTO DE COHERENCIA SICC (DBCI Protocols)

Tras la auditoría Karpathy, se han corregido las regresiones del ciclo de "reducción de CAPEX" que ponían en riesgo la operatividad:

- ✅ **RESTAURADO:** **Red Vital IP / TETRA** como canal de redundancia vital de alta velocidad.
- ✅ **RESTAURADO:** **Soberanía Diésel-Eléctrica** — El modelado de curvas de frenado se ajusta a locomotoras GE/EMD sin asunciones de tracción 25kV.
- ✅ **ELIMINADO:** Arquitecturas de "Gateway" complejas. Todo el sistema habla **Vital IP Nativo**.
- ✅ **ZERO-ACCENTS:** Normalización de nombres de archivos para evitar fallos de carga en el servidor web de la torre.

---

## 🏗️ FUNCIONALIDADES MAESTRAS SICC (SIL-2/SIL-4)

1.  **Gestión Dinámica de Autorizaciones (MA):** Autorización digital inyectada directamente al OBC del tren. 
2.  **Reporte Centinela:** Auditoría en tiempo real de los 37 nodos de Red Vital y los 5 centros ENCE.
3.  **Algoritmo de Frenado Soberano:** Cálculo predictivo basado en la física real del material rodante diésel-eléctrico de la APP.

---

## ✅ CONCLUSIÓN DE SOBERANÍA TÉCNICA

El CTC v6.3.2 elimina la complejidad de los bloques europeos antiguos. Al alinearse con el ADN del proyecto, el sistema es 100% resiliente y soberano, permitiendo a la APP operar con total independencia tecnológica.

**Saneamiento Ciclo 2.3.8 - Control SICC Finalizado.**
