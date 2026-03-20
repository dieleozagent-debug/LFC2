# METODOLOGÍA DE PROPAGACIÓN DE CAMBIOS v1.0
## Gestión de Cambios de Alto Impacto (Shift Paradigm)

Esta guía explica cómo "pulir" el proyecto cuando cambia un criterio maestro (Ejemplo: PTC -> CTC).

### 1. El Origen: El Cerebro (JSON)
Todo cambio inicia en `project_config.json`. Al ser un formato estructurado, permite que máquinas y procesos de CI/CD lo consuman.

### 2. La Propagación: Scripts y Prompts
Los prompts de los especialistas son regenerados. Si el criterio cambió a CTC, el prompt de senalización ahora prohibirá hablar de "V-Blocks" y exigirá hablar de "Secciones Fijas", por ejemplo.

### 3. El Refuerzo: El Ciclo Inverso
No basta con cambiar el texto. El Agente recorre el repositorio preguntando:
- "¿Este archivo V.1 asume que el tren reporta su posición por GPS?" -> Si el nuevo criterio es CTC por Bloque Virtual Dinámico, este archivo está **Contaminado**.

### 4. La Visualización: Frontend Saneado
El frontend re-mapea sus constantes. Los botones de "EOT status" desaparecen si el nuevo sistema no los requiere, basándose en el flag `eot_monitoring` del JSON inicial.

**Este proceso garantiza que el cambio no sea un parche, sino una mutación completa del ADN del proyecto.**
