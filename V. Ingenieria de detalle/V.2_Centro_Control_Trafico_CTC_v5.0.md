# V.2 - INGENIERÍA DE DETALLE: CTC VIRTUAL v6.0
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Versión:** v6.0 - Purge Release (Control Center Detail Design)
**Metodología:** Punto 42 (Karpathy Saneamiento) - Ciclo Inverso

---

## 1. ARQUITECTURA DEL CTC SANEADA

El Centro de Control de Tráfico (CTC) evoluciona a un **Servidor Maestro PTC Virtual**, operando bajo el estándar **FRA 236**.

### 1.1 Servidores Vitales (Core):
- **Configuración:** Grupo de servidores en arquitectura 2oo3 (COTS) con sistema operativo endurecido (Hardened Linux).
- **Lógica de Bloqueo:** Implementada mediante **Virtual Blocks (V-Blocks)**. Se elimina la dependencia de hardware de vía.
- **Protocolo de Comunicación:** Nativo en **Vital IP**. Se eliminan todos los conversores de protocolo para ITCS/ETCS.

### 1.2 Interfaz con el Maquinista:
- **Movement Authority (MA):** Generada dinámicamente y enviada vía **TETRA** directamente a la OBC del tren.
- **Redundancia:** No se requiere GSM-R. La alta disponibilidad se garantiza mediante la red de Fibra Óptica redundante y el protocolo de red auto-sanante.

---

## 2. 🔍 AUDITORÍA DE SANEAMIENTO (PURGE RBC/GSM-R)

Se han corregido los siguientes errores técnicos de la v5.20:
- ✅ **ELIMINADO:** El "Bloque Lógico de Integración" de $150M que referenciaba ITCS/ETCS. La integración es nativa **Vital IP**.
- ✅ **ELIMINADO:** Referencias a RBC (Radio Block Centre). El control reside íntegramente en el **Servidor PTC Maestro**.
- ✅ **ELIMINADO:** Esquemas de comunicación GSM-R. El DMI (Display) recibe datos exclusivamente vía TETRA.
- ✅ **CORREGIDO:** Se eliminan los Gateways FFFIS/UNISIG para reducir la latencia de red y el costo de mantenimiento.

---

## 🏗 ESTRUCTURA FUNCIONAL VIRTUAL
1. **Módulo de Autoridad:** Calcula distancias de seguridad basadas en reportes GNSS/EOT.
2. **Módulo ENCE:** Envía comandos vitales a los 5 enclavamientos de estación sobre IP.
3. **Módulo de Gestión de Tráfico:** Interfaz HMI para operadores, integrada con video-muro CCTV.

---

## ✅ CONCLUSIONES:

La ingeniería de detalle del CTC ha sido saneada para garantizar la **Soberanía Tecnológica**. Al simplificar la arquitectura y eliminar componentes propietarios de terceros, se asegura una operación robusta, segura y alineada con los **Criterios Técnicos Maestros**.

**Saneamiento Ciclo 5 - Ingeniería de Detalle CTC Finalizado.**
