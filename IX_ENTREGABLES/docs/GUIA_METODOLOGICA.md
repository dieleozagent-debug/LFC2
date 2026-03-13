# GUÍA METODOLÓGICA: ESTRUCTURACIÓN DE PROYECTOS EPC FERROVIARIOS v2.0
## Versión Saneada (Soberanía Tecnológica) - APP La Dorada-Chiriguaná

**Fecha de actualización:** 13 de marzo de 2026  
**Versión:** 2.0 - Purge Release
**Metodología:** Punto 42 (Karpathy Saneamiento) - Ciclo Inverso

---

## 🎯 OBJETIVOS DE LA GUÍA SANEADA

Esta guía define el estándar para estructurar proyectos bajo el paradigma de **Soberanía Tecnológica**, eliminando la dependencia de estándares propietarios cerrados.

1. **Institucionalizar el Estándar PTC Virtual:** Uso de bloqueo por software y Vital IP.
2. **Purga de Obsolescencia:** Eliminación de cualquier referencia a RED TETRA (Misión Crítica), PTC VIRTUAL, PTC, RBC o Virtual Balise (GNSS)s.
3. **Optimización de Recursos:** Enfoque en arquitectura COTS y software vital certificado.

---

## 📚 SECCIÓN 1: MARCO DE TRABAJO SOBERANO

### 1.1 Conceptos Fundamentales
El proyecto se estructura bajo la premisa de **Soberanía Tecnológica**:
- **Protocolos Abiertos:** Uso de Vital IP para mensajería de seguridad.
- **Hardware Agnóstico:** Servidores 2oo3 sobre arquitectura comercial (COTS).
- **Comunicaciones Unificadas:** Red TETRA de misión crítica para voz y datos vitales.

---

## 📋 SECCIÓN 2: ESTRUCTURA DE TRABAJO (WBS SANEADO)

El WBS debe reflejar una arquitectura simplificada y eficiente:

```
1.0 PROYECTO LA DORADA-CHIRIGUANÁ (SSOT)
  1.1 SISTEMAS DE SEÑALIZACIÓN VIRTUAL
    1.1.1 Servidor Maestro PTC (Vital Server 2oo3)
    1.1.2 Enclavamientos Electrónicos IP (ENCE)
    1.1.3 Lógica de Bloqueo Virtual (FRA 236)
  1.2 SISTEMAS DE COMUNICACIÓN UNIFICADA
    1.2.1 Red Radio TETRA (Misión Crítica)
    1.2.2 Backbone de Fibra Óptica (Anillo Redundante)
  1.3 SEGURIDAD INTEGRADA Y VITALIDAD
    1.3.1 Dispositivos de Integridad de Tren (EOT - End of Train)
    1.3.2 Protocolo de Ciberseguridad Vital IP
```

---

## 📋 SECCIÓN 3: TEMPLATES MAESTROS (PTC READY)

### 3.1 Template: Ficha de Sistema (Ejemplo Saneado)
- **Sistema:** Control de Tráfico Centralizado (CTC Virtual)
- **Protocolo:** Vital IP
- **Criterio de Señalización:** Bloqueo Virtual (No señales físicas)
- **Interoperabilidad:** Procedimiento Stop & Switch (Chiriguaná/FENOCO)

---

## ✅ CONCLUSIÓN DE RE-ESTRUCTURACIÓN:

La Guía Metodológica v2.0 garantiza que cualquier futuro proyecto estructurado bajo estas bases herede los principios de **eficiencia y soberanía** del proyecto La Dorada-Chiriguaná, evitando la contaminación técnica de estándares obsoletos.

**Saneamiento Ciclo 7 - Guía Metodológica Finalizado.**
