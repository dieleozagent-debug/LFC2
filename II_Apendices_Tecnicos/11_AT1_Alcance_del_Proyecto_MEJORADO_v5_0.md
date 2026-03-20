# APÉNDICE TÉCNICO 1 - ALCANCE DEL PROYECTO (PTC VIRTUAL)
## APP La Dorada - Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Proyecto:** APP La Dorada - Chiriguaná  
**Contrato:** Concesión No. 001 de 2025  
**Versión:** v6.0 - Purge Release (FRA/AREMA)

---

## 📄 ALCANCE TÉCNICO MAESTRO (DBCD v002)
El alcance del sistema de control y comunicaciones se define bajo la arquitectura **PTC VIRTUAL**.
- **Comunicaciones:** Red **TETRA** troncalizada (Red principal de misión crítica).
- **Senalización:** Acantonamiento virtual basado en posición (Moving Block).
- **Detección:** Basada en material rodante y dispositivos EOT (End-Of-Train).

---

## 🔍 AUDITORÍA DE RE-INGENIERÍA (METODOLOGÍA P.42 v6.3.3)
Este documento se alinea con la arquitectura **Soberanía Digital SICC**:
1. **RESTAURADO Red Vital IP**: Se confirma el Backbone de fibra óptica y microondas como portador de servicios TETRA y telemetría crítica.
2. **ALINEACIÓN PTC VIRTUAL**: Se define **FRA 49 CFR 236 Subpart I** como el estándar de seguridad vital para el control de movimiento.
3. **COMPONENTES CONFIRMADOS:**
   - 15 Locomotoras con equipamiento PTC embarcado.
   - 15 Dispositivos EOT.
   - 5 ENCE (Enclavamientos de Estación) lógicos.
   - 0 Senales físicas wayside.
   - 0 Punto de Referencia Virtual (SICC).

---

## 📊 CANTIDADES MAESTRAS (CONTRATO)
| Componente | Cantidad | Estándar |
|:---|:---|:---|
| **Sistema de Control** | PTC Virtual | FRA 49 CFR 236 I |
| **Radio Crítica** | TETRA | ETSI TETRA |
| **Backbone** | Fibra Óptica | ITU-T G.652D |
| **Enclavamientos** | 5 (SICC) | AREMA / CENELEC SIL-4 |
| **Material Rodante** | 15 Locomotoras | FRA / AAR |

---

| Versión | Fecha       | Responsable            | Descripción                              |
|:------:|:-----------:|:-----------------------|:-----------------------------------------|
| v6.0   | 13/03/2026  | Admin. Contractual EPC | Purgado de Red Vital IP / TETRA y PTC VIRTUAL. Alineación con TETRA y PTC Virtual. |
