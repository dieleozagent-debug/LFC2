# PRECIOS DE REFERENCIA — ADIF (BPA — Banco de Precios ADIF)

**Fuente:** https://bpa.adif.es/
**Propósito:** Receptor de precios extraídos por agente externo desde el Banco de Precios de ADIF para usar como referencia europea en la defensa del CAPEX del Sistema de Señalización, Control de Tráfico y Comunicaciones del corredor La Dorada – Chiriguaná.
**Documento ligado:** `IX_WBS_Planificacion/WBS_Listado_Verificacion_Precios_v14_7.md`
**Fecha apertura:** 2026-05-04
**Estado:** EN PROCESO DE LLENADO — agente externo extrayendo

---

## CONVERSIÓN MONETARIA

| Moneda | Tasa | Fuente | Fecha |
|---|---|---|---|
| 1 EUR → COP | (PENDIENTE) | BanRep | 2026-05-04 |
| 1 EUR → USD | ~1.08 (referencia) | ECB | verificar |
| TRM presupuesto v4.0 | 4,400 COP/USD | WBS Michelin | 2026-04-09 |
| TRM real estimada hoy | 3,637 COP/USD | (verificar BanRep) | 2026-05-04 |

**Acción agente:** completar EUR/COP del día de extracción.

---

## ÍTEMS A EXTRAER (instrucción al agente externo)

| # | Código ADIF | Descripción | Equivalente WBS LFC2 | Unidad | Estado |
|---|---|---|---|---|---|
| 1 | **VEA010$** | Suministro de aparato de vía (Desvío sencillo estándar) | WBS 1.4.100 (25u motorizados) | UND | ⏳ pendiente |
| 2 | **CBB010$** | Accionamiento de aguja / Motor de desvío | Componente WBS 1.4.100 | UND | ⏳ pendiente |
| 3 | **CCA040$** | Señal luminosa LED | WBS 4.1.101 / Conceptual LFC ($11,800 USD/u) | UND | ⏳ pendiente |
| 4 | **(buscar)** | Enclavamiento electrónico — categoría CMS | WBS 1.3.100 (5 ENCE) | UND/SISTEMA | ⏳ pendiente |
| 5 | **(buscar)** | Cable F.O. monomodo 64 hilos G.652.D OSP | WBS 2.3.100 (579 km) | KM | ⏳ pendiente (NO es prioridad ADIF — buscar mejor en mercado COL/LATAM) |
| 6 | **(buscar)** | Contador de ejes | Componente Wayside ENCE / Conceptual LFC ($4,720 USD/u) | UND | ⏳ pendiente |
| 7 | **(buscar)** | Armario PTC en PaN | WBS 4.1.x / Conceptual LFC ($140,000 USD/u) | UND | ⏳ pendiente |
| 8 | **(buscar)** | UPS para enclavamiento (autonomía 4h+) | WBS 10.1 / Jovega referencia | UND | ⏳ pendiente |

---

## FORMATO ESPERADO POR ÍTEM (rellenar)

### #1 — VEA010$ — Aparato de vía (Desvío sencillo)

| Campo | Valor |
|---|---|
| Código BPA ADIF | VEA010$ |
| Descripción exacta BPA | _(rellenar literal del banco)_ |
| Precio base | _(€ XXX,XXX.XX)_ |
| Año tarifa | _(2024 / 2025 / 2026)_ |
| Equivalente USD @ 1.08 | _(USD XXX,XXX)_ |
| Equivalente COP @ TRM día | _(COP XXX,XXX,XXX)_ |
| Composición incluida (vía / motor / detección / cableado) | _(detallar)_ |
| Trocha de referencia | 1,435 mm (estándar UIC) |
| **Ajuste por trocha 914 mm LFC** | aplicar +15-25% (estimación baja serie) |
| **VU defendible LFC** | _(calculado)_ COP/u |
| URL referencia | _(link directo BPA)_ |

---

### #2 — CBB010$ — Motor de desvío

| Campo | Valor |
|---|---|
| Código BPA ADIF | CBB010$ |
| Descripción exacta BPA | _(rellenar)_ |
| Precio base | _(€ XXX,XXX.XX)_ |
| Equivalente USD | _(USD XXX,XXX)_ |
| Equivalente COP @ TRM día | _(COP XXX,XXX,XXX)_ |
| Tipo (eléctrico / electrohidráulico) | _(rellenar)_ |
| Comparación vs. Conceptual LFC ($18,585 USD/u) | _(delta %)_ |
| URL referencia | _(link)_ |

---

### #3 — CCA040$ — Señal luminosa LED

| Campo | Valor |
|---|---|
| Código BPA ADIF | CCA040$ |
| Descripción exacta BPA | _(rellenar)_ |
| Precio base | _(€ XXX,XXX.XX)_ |
| Equivalente USD | _(USD)_ |
| Equivalente COP @ TRM día | _(COP)_ |
| Aspectos / focos | _(2 / 3 / 4 aspectos)_ |
| Comparación vs. Conceptual LFC ($11,800 USD/u) | _(delta %)_ |
| URL referencia | _(link)_ |

---

### #4 — Enclavamiento electrónico (CMS)

| Campo | Valor |
|---|---|
| Código(s) BPA candidatos | _(rellenar — puede haber varios)_ |
| Descripción exacta BPA | _(rellenar)_ |
| Precio base por estación / por capacidad | _(€ XXX,XXX)_ |
| Equivalente USD | _(USD)_ |
| Equivalente COP @ TRM día | _(COP)_ |
| Capacidad (rutas / cambios / señales soportados) | _(rellenar)_ |
| SIL declarado | _(SIL-3 / SIL-4)_ |
| Comparación vs. WBS v3.0 LFC ($800M COP = $181,818 USD) | _(delta %)_ |
| Comparación vs. Conceptual LFC ($869,376 USD) | _(delta %)_ |
| URL referencia | _(link)_ |

---

### #5–#8 — Resto de ítems

_(Rellenar siguiendo el mismo formato cuando el agente externo aporte datos)_

---

## NOTAS DE INTERPRETACIÓN

1. **ADIF es referencia EUROPEA, mercado español** — los precios incluyen costos laborales, normativos y logísticos europeos. Para LFC hay que aplicar:
   - **Reducción** por mercado colombiano (mano de obra local más barata)
   - **Aumento** por logística importación (flete, nacionalización, seguros)
   - **Aumento** por trocha 914 mm (no estándar)
   - Resultado neto: usualmente **±10-20%** sobre precio ADIF dependiendo del ítem.

2. **El BPA ADIF se actualiza anualmente.** Asegurarse de extraer el más reciente disponible (2024/2025).

3. **Algunos códigos BPA pueden no existir tal cual** — el agente debe buscar la categoría más cercana e indicarlo en "Descripción exacta".

4. **Para los ítems donde el ADIF resulta inaplicable** (ej: cable F.O. — el mercado COL/LATAM es más relevante), priorizar otras fuentes y dejarlo marcado como "no aplicable" en este archivo.

---

## ENLACE A USO

Una vez rellenado este archivo, los datos se incorporan al cuadro comparativo del documento maestro:

`IX_WBS_Planificacion/WBS_Listado_Verificacion_Precios_v14_7.md` → secciones #1, #2, #5

Y eventualmente al cuadro consolidado pre-Punto 42 que servirá para defender el CAPEX ante Interventoría.

---

**Última actualización:** 2026-05-04 17:55 — Claude Opus 4.7 (apertura del receptor)
**Próximo evento esperado:** Agente externo (NotebookLM/otro) extrae precios de bpa.adif.es y rellena este archivo.
