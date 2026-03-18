# ESTRATEGIA DE EVOLUCIÓN FRONTEND: CICLO DINÁMICO (n -> n+1)

Para que el Frontend sea tan robusto como el Cerebro, aplicaremos una re-ingeniería basada en **Generación Estática de Sitios (SSG)** y **Componentes Compartidos**.

## 🎯 Objetivo
Eliminar el 100% del código "zombie" (PTC VIRTUAL, Red Vital IP / TETRA, Punto de referencia virtuals) en la UI y asegurar que cualquier cambio en el `project_config.json` se refleje en toda la web sin intervención manual.

## 🔄 Ciclos de Saneamiento Frontend (n -> n+1)

### Ciclo F1: El Motor y el ADN (Core)
- **Acción:** Evolucionar `lfc-cli.js` para que soporte el comando `build-front`.
- **Resultado:** Creación de `lfc-style-system.css` (Variables HSL, Glassmorphism) y `lfc-core-logic.js`.
- **Propagación:** Los .html dejan de tener estilos "inline" y pasan a usar el sistema centralizado.

### Ciclo F2: Navegación y Shell (Estructura)
- **Acción:** Refactorizar `sidebar-component.js` y `index.html`.
- **Resultado:** Menús dinámicos que cambian según los capítulos activos en la WBS. Si el proyecto es "Solo PTC", desaparecen las opciones de "Senales Físicas".

### Ciclo F3: Dashboard de Ingeniería (WBS & Riesgos)
- **Acción:** Re-mapeo de columnas en la WBS Interactiva.
- **Resultado:** Eliminación de campos obsoletos (ej. "Validación Virtual Balise (GNSS)") y sustitución por "Fusión GNSS/IMU" o "Vital IP Status".

### Ciclo F4: Reportes y Herramientas (Herencia)
- **Acción:** Saneamiento de los reportes gerenciales (.html) para que el texto sea extraído directamente de los .md maestros.
- **Resultado:** 100% de coincidencia entre lo que lee el cliente en Word y lo que ve en la web.

## 🛠️ Herramientas de "Pulido"
1. **SSO Dashboard:** Un único punto de control.
2. **Template Engine:** Uso de literales de plantilla en JS para inyectar datos del WBS Saneado.
3. **Audit Loop Frontend:** Grep sobre el árbol de archivos /web para asegurar que no queden strings prohibidos en los .html.
