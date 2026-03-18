# LFC PREMIUM DESIGN SYSTEM (UX/UI MANIFESTO)

Este documento asegura que la evolución de estático a dinámico no degrade la calidad visual ("La Piel") del proyecto LFC.

## 1. El Principio de Separación (Shell vs. Content)
Para evitar el riesgo de perder formatos o responsividad:
- **La Piel (CSS):** Es inmutable y artesanal. Define el Glassmorphism, las variables HSL y el sistema de rejillas (Grid/Flex).
- **El Esqueleto (HTML Shell):** Contiene los contenedores con IDs únicos (`#wbs-container`, `#stats-bar`). No se genera con JS, se "puebla" con JS.
- **El Fluido (JS/Data):** Es el único que cambia. Inyecta los datos del `project_config.json` en los slots del esqueleto.

## 2. Tokens de Consistencia (Premium Variables)
Cualquier componente dinámico DEBE usar exclusivamente estas variables para garantizar el match:
- `--primary`: Profundidad del fondo.
- `--accent`: Identidad (Oro/Premium).
- `--glass`: Transparencia satinada.
- `--glass-border`: Definición de bordes táctiles.

## 3. Reglas de Oro para la Generación Dinámica
1. **No Inline Styles:** Prohibido inyectar `style="..."` desde JS. Todo debe ser vía clases CSS pre-definidas.
2. **Responsive-First:** Los contenedores inyectados deben heredar las reglas de `@media query` del shell padre.
3. **Preservación de Niveles:** El JS debe respetar la jerarquía del WBS (Capítulo > Ítem > Detalle) usando estructuras semánticas (Section > Article > Div).

## 4. Control de Calidad (QA Visual)
Tras cada regeneración dinámica, el agente validará:
- Coherencia tipográfica (Inter 300/400/700).
- Alineación de tarjetas en dispositivos móviles.
- Ausencia de "Zombies" (Texto legacy mezclado con datos nuevos).
