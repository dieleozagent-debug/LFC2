# Dictámenes Técnico-Contractuales

**Estado:** ⏳ Directorio vaciado el 2026-05-08 (commits `c7dcd19` + pendiente).

## Razón

El contenido anterior (57 archivos) era producto **v8 pre-purga** generado por el agente
externo (`/home/administrador/docker/agente/`) durante pruebas tempranas del comando
`/promote`, antes de la cirugía doctrinal v14.7 del 2026-04-30. Tenía terminología que
contradice el BCD v001 (Abril 2026):

- "Bus Vital 110V DC" / "Red Vital IP" → BCD §10 diferencia 110V DC señalización + 48V DC TETRA
- "PTC Virtual (SICC) L2" → mezcla SICC con SCC (sigla del BCD)
- "Sovereign Registry — Reglas de Juego" → lenguaje doctrinal interno, no contractual
- "[REDACTADO_SICC]" → placeholders incompletos
- "DT-SICC-V8-*" → naming legacy
- Cifras "CAPEX Protegido $X M USD" sin trazabilidad WBS

## Cómo se repuebla este directorio

El agente (`agente/`) ejecuta:

```
/audit [especialidad]    → genera DT en agente/brain/dictamenes/
/promote [DT-ID]         → CI/CD: copia el DT acá + push a GitHub + Vercel auto-deploy
```

Los DTs nuevos deben:
1. Citar literalmente BCD v001 + AT1 + AT3.
2. Usar la sigla **SCC** (Sistema de Comunicación, Control de Tráfico y Señalización) del
   BCD en cara externa al gerente/Interventoría/ANI. La marca interna "SICC" se reserva
   para metadata interna del agente — NO debe aparecer en títulos de DT publicados, para
   evitar colisión con el SICC del AT4 (Sistema de Indicadores).
3. Llevar cifras trazables al WBS (no inventar "CAPEX Protegido").
4. Incluir la Sección 10 YAML ejecutable (deuda D0 del roadmap LFC2).

## Bloqueado por

- Deuda D1 del roadmap LFC2 — sanear `agente/architecture.md` y `agente/README.md` antes
  de regenerar (las cifras 64h, "UPS 24h eliminada", blacklist Stop & Switch fueron
  corregidas el 2026-05-08, verificar también código/strings residuales).
- Deuda D0 — DTs deben emitir la Sección 10 YAML estricta.
- Deuda D3 — re-ingesta `contrato_documentos` en pgvector con BCD v001.

## Histórico

Los archivos eliminados quedan en historia de git (commit anterior a la eliminación).
La copia interna del agente (`agente/brain/dictamenes/`) se conserva como histórico
forense — no se toca.
