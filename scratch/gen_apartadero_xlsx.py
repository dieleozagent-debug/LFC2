#!/usr/bin/env python3
"""Genera Costo_Apartaderos_PTC.xlsx — hoja 1 apartadero + hoja 10 apartaderos."""
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

OUT = "/home/administrador/docker/LFC2/IX_WBS_Planificacion/Costo_Apartaderos_PTC.xlsx"

# Paleta
NAVY   = "0A192F"
GOLD   = "FFD700"
TEAL   = "64FFDA"
LIGHT  = "EEF3FA"
GREY   = "8892B0"

f_title   = Font(name="Calibri", size=14, bold=True, color="FFFFFF")
f_sub     = Font(name="Calibri", size=9, italic=True, color="FFFFFF")
f_hdr     = Font(name="Calibri", size=10, bold=True, color="FFFFFF")
f_cell    = Font(name="Calibri", size=10, color="1B2A41")
f_tag     = Font(name="Calibri", size=10, bold=True, color="1B2A41")
f_total   = Font(name="Calibri", size=11, bold=True, color="0A3B33")
f_note    = Font(name="Calibri", size=8.5, italic=True, color="555555")

fill_title = PatternFill("solid", fgColor=NAVY)
fill_hdr   = PatternFill("solid", fgColor="14304A")
fill_cd    = PatternFill("solid", fgColor="DFF7F0")
fill_tot   = PatternFill("solid", fgColor="CFF3E6")
fill_zebra = PatternFill("solid", fgColor=LIGHT)

thin = Side(style="thin", color="C9D3E0")
border = Border(left=thin, right=thin, top=thin, bottom=thin)
center = Alignment(horizontal="center", vertical="center")
left   = Alignment(horizontal="left", vertical="center", wrap_text=True)
right  = Alignment(horizontal="right", vertical="center")

COP_FMT = '#,##0 "M"'
USD_FMT = '$#,##0'

TRM = 4400      # COP/USD (Risk, estructuración)
AIU = 1.18      # factor AIU + IVA
usd = lambda cop_millones: round(cop_millones * 1_000_000 / TRM)

def style_row(ws, r, ncols, font=f_cell, fill=None):
    for c in range(1, ncols + 1):
        cell = ws.cell(row=r, column=c)
        cell.font = font
        cell.border = border
        if fill:
            cell.fill = fill

wb = Workbook()

# ───────────────────────── HOJA 1: 1 APARTADERO ─────────────────────────
ws1 = wb.active
ws1.title = "1 Apartadero"
ws1.sheet_view.showGridLines = False
widths1 = [22, 46, 16, 14]
for i, w in enumerate(widths1, 1):
    ws1.column_dimensions[get_column_letter(i)].width = w

ws1.merge_cells("A1:D1")
ws1["A1"] = "COSTO DE 1 APARTADERO  —  Sistema CTSC · Arquitectura PTC Virtual"
ws1["A1"].font = f_title; ws1["A1"].fill = fill_title; ws1["A1"].alignment = Alignment(horizontal="left", vertical="center")
ws1.row_dimensions[1].height = 26
ws1.merge_cells("A2:D2")
ws1["A2"] = "Corredor La Dorada–Chiriguaná · Contrato APP No. 001 de 2025 · SICC v14.7"
ws1["A2"].font = f_sub; ws1["A2"].fill = fill_title

# Parámetros editables
ws1["A4"] = "TRM (COP/USD):"; ws1["A4"].font = f_tag
ws1["B4"] = 4400;             ws1["B4"].font = f_cell
ws1["C4"] = "Factor AIU+IVA:"; ws1["C4"].font = f_tag
ws1["D4"] = 1.18;             ws1["D4"].font = f_cell

# Encabezado tabla
hdr_r = 6
hdrs1 = ["Cubo", "Concepto", "COP (millones)", "USD"]
for c, h in enumerate(hdrs1, 1):
    cell = ws1.cell(row=hdr_r, column=c, value=h)
    cell.font = f_hdr; cell.fill = fill_hdr; cell.border = border
    cell.alignment = center if c >= 3 else left

rows1 = [
    ("Comunicaciones", "Terminal de datos TETRA ×2 + alta/programación en red", 35),
    ("CTC/PTC",        "Comprobador de aguja SIL-4 ×2 + integración al PTC del CCO", 92),
    ("Energía",        "Solar autónoma <50 W + batería LiFePO4", 33),
    ("Servicios",      "Instalación + prueba in-situ (SAT)", 31),
    ("Ingeniería",     "Diseño + config Back Office (prorrateado ÷10)", 90),
]
r = hdr_r + 1
first_data = r
for i, (cubo, concepto, cop) in enumerate(rows1):
    ws1.cell(row=r, column=1, value=cubo).font = f_tag
    ws1.cell(row=r, column=2, value=concepto).font = f_cell
    ws1.cell(row=r, column=3, value=cop).number_format = COP_FMT
    ws1.cell(row=r, column=4, value=usd(cop)).number_format = USD_FMT
    fill = fill_zebra if i % 2 else None
    style_row(ws1, r, 4, fill=fill)
    ws1.cell(row=r, column=1).alignment = left
    ws1.cell(row=r, column=2).alignment = left
    ws1.cell(row=r, column=3).alignment = right
    ws1.cell(row=r, column=4).alignment = right
    r += 1
last_data = r - 1

# Costo directo
cd1 = sum(c for _, _, c in rows1)
ws1.cell(row=r, column=1, value="Costo directo (all-in)")
ws1.merge_cells(start_row=r, start_column=1, end_row=r, end_column=2)
ws1.cell(row=r, column=3, value=cd1).number_format = COP_FMT
ws1.cell(row=r, column=4, value=usd(cd1)).number_format = USD_FMT
style_row(ws1, r, 4, font=f_total, fill=fill_cd)
ws1.cell(row=r, column=3).alignment = right; ws1.cell(row=r, column=4).alignment = right
cd_r = r
r += 1
# Con AIU+IVA
ws1.cell(row=r, column=1, value="Con AIU + IVA")
ws1.merge_cells(start_row=r, start_column=1, end_row=r, end_column=2)
ws1.cell(row=r, column=3, value=round(cd1 * AIU, 1)).number_format = COP_FMT
ws1.cell(row=r, column=4, value=usd(cd1 * AIU)).number_format = USD_FMT
style_row(ws1, r, 4, font=f_total, fill=fill_tot)
ws1.cell(row=r, column=3).alignment = right; ws1.cell(row=r, column=4).alignment = right
r += 2

for note in [
    "Cifras de orden de magnitud — sujeto a RFQ formal (Frauscher / Siemens / Hytera).",
    "NO incluye: alargamiento de apartaderos (obra civil) ni infraestructura TETRA del corredor (ya presupuestada).",
    "Un apartadero lleva: comprobador SIL-4 ×2 + terminal TETRA ×2 + solar. Sin motor, sin señales, sin gabinetes.",
]:
    ws1.merge_cells(start_row=r, start_column=1, end_row=r, end_column=4)
    ws1.cell(row=r, column=1, value=note).font = f_note
    ws1.cell(row=r, column=1).alignment = left
    r += 1

# ───────────────────────── HOJA 2: 10 APARTADEROS ─────────────────────────
ws2 = wb.create_sheet("10 Apartaderos")
ws2.sheet_view.showGridLines = False
widths2 = [22, 46, 8, 16, 14]
for i, w in enumerate(widths2, 1):
    ws2.column_dimensions[get_column_letter(i)].width = w

ws2.merge_cells("A1:E1")
ws2["A1"] = "COSTO DE 10 APARTADEROS  —  Sistema CTSC · Arquitectura PTC Virtual"
ws2["A1"].font = f_title; ws2["A1"].fill = fill_title; ws2["A1"].alignment = Alignment(horizontal="left", vertical="center")
ws2.row_dimensions[1].height = 26
ws2.merge_cells("A2:E2")
ws2["A2"] = "Corredor La Dorada–Chiriguaná · Contrato APP No. 001 de 2025 · SICC v14.7 · 10 apartaderos = 20 desvíos"
ws2["A2"].font = f_sub; ws2["A2"].fill = fill_title

ws2["A4"] = "TRM (COP/USD):"; ws2["A4"].font = f_tag
ws2["B4"] = 4400;             ws2["B4"].font = f_cell
ws2["C4"] = "AIU+IVA:";       ws2["C4"].font = f_tag
ws2["D4"] = 1.18;             ws2["D4"].font = f_cell

hdr_r = 6
hdrs2 = ["Cubo", "Concepto", "Cant.", "COP (millones)", "USD"]
for c, h in enumerate(hdrs2, 1):
    cell = ws2.cell(row=hdr_r, column=c, value=h)
    cell.font = f_hdr; cell.fill = fill_hdr; cell.border = border
    cell.alignment = center if c >= 3 else left

rows2 = [
    ("Comunicaciones",      "Terminal de datos TETRA + alta (infra TETRA ya presupuestada)", "20", 350),
    ("CTC/PTC",             "Comprobador de aguja SIL-4 + integración CCO", "20", 920),
    ("Energía",             "Solar autónoma <50 W + LiFePO4", "10", 330),
    ("Servicios de campo",  "Instalación + prueba in-situ (SAT)", "10", 310),
    ("Ingeniería",          "Diseño + config Back Office (global, una sola vez)", "1", 900),
]
r = hdr_r + 1
first_data = r
for i, (cubo, concepto, cant, cop) in enumerate(rows2):
    ws2.cell(row=r, column=1, value=cubo).font = f_tag
    ws2.cell(row=r, column=2, value=concepto).font = f_cell
    ws2.cell(row=r, column=3, value=cant)
    ws2.cell(row=r, column=4, value=cop).number_format = COP_FMT
    ws2.cell(row=r, column=5, value=usd(cop)).number_format = USD_FMT
    fill = fill_zebra if i % 2 else None
    style_row(ws2, r, 5, fill=fill)
    ws2.cell(row=r, column=1).alignment = left
    ws2.cell(row=r, column=2).alignment = left
    ws2.cell(row=r, column=3).alignment = center
    ws2.cell(row=r, column=4).alignment = right
    ws2.cell(row=r, column=5).alignment = right
    r += 1
last_data = r - 1

cd2 = sum(c for _, _, _, c in rows2)
ws2.cell(row=r, column=1, value="Costo directo total")
ws2.merge_cells(start_row=r, start_column=1, end_row=r, end_column=3)
ws2.cell(row=r, column=4, value=cd2).number_format = COP_FMT
ws2.cell(row=r, column=5, value=usd(cd2)).number_format = USD_FMT
style_row(ws2, r, 5, font=f_total, fill=fill_cd)
ws2.cell(row=r, column=4).alignment = right; ws2.cell(row=r, column=5).alignment = right
cd_r = r
r += 1
ws2.cell(row=r, column=1, value="Con AIU + IVA")
ws2.merge_cells(start_row=r, start_column=1, end_row=r, end_column=3)
ws2.cell(row=r, column=4, value=round(cd2 * AIU, 1)).number_format = COP_FMT
ws2.cell(row=r, column=5, value=usd(cd2 * AIU)).number_format = USD_FMT
style_row(ws2, r, 5, font=f_total, fill=fill_tot)
ws2.cell(row=r, column=4).alignment = right; ws2.cell(row=r, column=5).alignment = right
r += 2

for note in [
    "Cifras de orden de magnitud — sujeto a RFQ formal (Frauscher / Siemens / Hytera).",
    "NO incluye: alargamiento de apartaderos (obra civil) ni infraestructura TETRA del corredor (ya presupuestada en el proyecto).",
    "Infraestructura TETRA verificada en WBS v3.0: no hay partida de terminales para apartaderos → el terminal del switch es incremental (sin doble conteo).",
    "El costo unitario baja con el volumen: la ingeniería fija (~$900M) se reparte entre más apartaderos.",
]:
    ws2.merge_cells(start_row=r, start_column=1, end_row=r, end_column=5)
    ws2.cell(row=r, column=1, value=note).font = f_note
    ws2.cell(row=r, column=1).alignment = left
    r += 1

# ───────────────────────── HOJA 3: VALIDACIÓN ADIF ─────────────────────────
ws3 = wb.create_sheet("Validación ADIF")
ws3.sheet_view.showGridLines = False
for i, w in enumerate([42, 22, 13, 12, 44], 1):
    ws3.column_dimensions[get_column_letter(i)].width = w

ws3.merge_cells("A1:E1")
ws3["A1"] = "VALIDACIÓN CONTRA ADIF BPA 2026  —  consulta directa (bpa.adif.es)"
ws3["A1"].font = f_title; ws3["A1"].fill = fill_title; ws3["A1"].alignment = Alignment(horizontal="left", vertical="center")
ws3.row_dimensions[1].height = 26
ws3.merge_cells("A2:E2")
ws3["A2"] = "Conversión 4.796 COP/EUR (TRM 4.400 × 1,09). Precios ADIF = referencia europea, trocha estándar."
ws3["A2"].font = f_sub; ws3["A2"].fill = fill_title

EUR_FMT = '#,##0 "€"'
COPM_FMT = '#,##0.0 "M"'
r = 4
ws3.cell(row=r, column=1, value="EXCLUIDOS — no son alcance del apartadero").font = f_total
r += 1
for c, h in enumerate(["Componente", "Código BPA", "Precio €/ud", "≈ COP (M)", "Por qué se excluye"], 1):
    cell = ws3.cell(row=r, column=c, value=h); cell.font = f_hdr; cell.fill = fill_hdr; cell.border = border
    cell.alignment = center if 3 <= c <= 4 else left
r += 1
for i, (comp, cod, eur, cop, nota) in enumerate([
    ("Aparato de vía — desvío (suministro)", "VEA010$ (tipo C·r318·nuevo)", 104566, 501.5, "Obra civil/vía. Apartaderos existentes (AT1). Montaje en VEC#."),
    ("Motor / accionamiento de aguja", "CFA010$", 10625, 51.0, "Autotalonable fuera de ENCE — sin motor."),
    ("Señal luminosa LED", "CCA040$ (alta no abatible·3 focos)", 7934, 38.1, "PTC virtual — sin semáforo lateral. Solo ENCE (WBS 1.5.101)."),
]):
    ws3.cell(row=r, column=1, value=comp)
    ws3.cell(row=r, column=2, value=cod)
    ws3.cell(row=r, column=3, value=eur).number_format = EUR_FMT
    ws3.cell(row=r, column=4, value=cop).number_format = COPM_FMT
    ws3.cell(row=r, column=5, value=nota)
    style_row(ws3, r, 5, fill=(fill_zebra if i % 2 else None))
    ws3.cell(row=r, column=1).alignment = left; ws3.cell(row=r, column=5).alignment = left
    ws3.cell(row=r, column=3).alignment = right; ws3.cell(row=r, column=4).alignment = right
    r += 1

r += 1
ws3.cell(row=r, column=1, value="INCLUIDOS — equipo CTSC incremental").font = f_total
r += 1
for c, h in enumerate(["Componente", "$M COP (modelo)", "Ancla ADIF / referencia", "", ""], 1):
    cell = ws3.cell(row=r, column=c, value=h); cell.font = f_hdr; cell.fill = fill_hdr; cell.border = border
    cell.alignment = center if c == 2 else left
r += 1
for i, (comp, cop, ref) in enumerate([
    ("Comprobador de aguja (×2) + integración CCO", 92, "ADIF CFA040$ €4.963,85/ud ≈ $23,8M/u (suministro+montaje). 2 ud ≈ $48M base; resto = SIL-4 vital + integración Back Office."),
    ("Terminal de datos TETRA (×2)", 35, "ADIF no usa TETRA sino GSM-R (TMG010 €2.727). Mercado Hytera/Motorola ~$17,5M/u dato industrial."),
    ("Energía solar autónoma <50W + LiFePO4", 33, "Mercado solar local (~$7.500 USD instalado)."),
]):
    ws3.cell(row=r, column=1, value=comp)
    ws3.cell(row=r, column=2, value=cop).number_format = COP_FMT
    ws3.merge_cells(start_row=r, start_column=3, end_row=r, end_column=5)
    ws3.cell(row=r, column=3, value=ref)
    style_row(ws3, r, 5, fill=(fill_zebra if i % 2 else None))
    ws3.cell(row=r, column=1).alignment = left; ws3.cell(row=r, column=2).alignment = right; ws3.cell(row=r, column=3).alignment = left
    r += 1

r += 1
for note in [
    "CORRECCIÓN: el código CBB010 no es el motor — en BPA es 'bastidor equipos de enclavamiento' (contadores de ejes). Motor = CFA010$.",
    "GSM-R vs TETRA: 'TETRA' da cero resultados en BPA — ADIF usa GSM-R. LFC usa TETRA por doctrina (BCD) -> terminales por mercado.",
    "Abatibles: la distinción abatible/no abatible existe en CCA040$ (parámetro BPA), pero solo aplica a señales de ENCE.",
    "El comprobador es la línea más sensible: rango ADIF base ~$23,8M/u <-> versión SIL-4 vital. Confirmar vía RFQ.",
]:
    ws3.merge_cells(start_row=r, start_column=1, end_row=r, end_column=5)
    ws3.cell(row=r, column=1, value=note).font = f_note
    ws3.cell(row=r, column=1).alignment = left
    r += 1

ws1.sheet_view.zoomScale = 110
ws2.sheet_view.zoomScale = 110
ws3.sheet_view.zoomScale = 110
wb.save(OUT)
print("OK ->", OUT)
