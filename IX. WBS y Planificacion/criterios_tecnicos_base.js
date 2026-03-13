ï»¿const criteriosTecnicosBase = {
  "version": "1.0",
  "fecha": "2025-10-07",
  "nota": "Base de conocimiento de criterios tÃÂ©cnicos para ÃÂ­tems WBS",
  "criterios": {
    "2.3.103": {
      "item": "2.3.103",
      "nombre": "Cajas de empalme 80x80",
      "criterio_tecnico": {
        "justificacion": "Espaciamiento 300m segÃÂºn UIT-T + 88 nodos crÃÂ­ticos",
        "calculo_detallado": "594,000m ÃÂ· 300m = 1,980 cajas backbone + 88 nodos especiales = 2,068 total",
        "desglose": [
          "Cajas backbone: 1,980 unidades (cada 300m segÃÂºn diseÃÂ±o OSP)",
          "Cajas en torres TETRA/GSM-R: 37 unidades",
          "Cajas en subestaciones elÃ©ctricas: 15 unidades",
          "Cajas en cruces viales crÃÂ­ticos: 36 unidades"
        ],
        "fuente_normativa": "UIT-T G.652.D (establece mÃÂ¡ximo 500m entre puntos de empalme)",
        "fuente_diseno": "DiseÃÂ±o OSP - Planos AS-BUILT secciÃÂ³n 2.2",
        "documentos_referencia": [
          "III/28_Sistema_FibraOptica_Integrado.md (SecciÃÂ³n 2.2)",
          "V.3_Sistemas_Comunicacion_Detalle.md (Tabla 5.3)",
          "IV/37_Memorias_Diseno_Basico.md (Anexo C - CÃÂ¡lculo de cajas)"
        ],
        "restriccion": "Espaciamiento modificable entre 300m y 500m (lÃÂ­mite UIT-T)",
        "alternativas": [
          "350m Ã¢â â 1,697 cajas (ahorro $500M, cumple norma)",
          "400m Ã¢â â 1,485 cajas (ahorro $787M, aumenta tiempo fallas)",
          "500m Ã¢â â 1,188 cajas (ahorro $1,188M, lÃÂ­mite normativo)"
        ]
      },
      "riesgos_asociados": [
        {
          "id": "R-FIBRA-003",
          "descripcion": "Espaciamiento muy corto (300m) aumenta CAPEX innecesariamente",
          "probabilidad": "Alta",
          "impacto": "Alto",
          "estrategia": "Proponer DT para ajustar a 350m-400m"
        },
        {
          "id": "R-FIBRA-006",
          "descripcion": "Espaciamiento mayor dificulta localizaciÃÂ³n de fallas",
          "probabilidad": "Baja",
          "impacto": "Medio",
          "estrategia": "Mantener entre 300m-400m para balance ÃÂ³ptimo"
        }
      ]
    },
    "2.1.100": {
      "item": "2.1.100",
      "nombre": "Torres autosoportadas TETRA",
      "criterio_tecnico": {
        "justificacion": "37 torres para cobertura 594 km con solapamiento 20%",
        "calculo_detallado": "Alcance por torre: 12-16 km Ã¢â â 594 km ÃÂ· 12 km = 49.5 torres Ã¢â â Optimizado a 37 con solapamiento inteligente",
        "desglose": [
          "Torres backbone: 30 unidades (espaciamiento ~20 km)",
          "Torres en nodos crÃÂ­ticos: 5 unidades (estaciones, patios)",
          "Torres de refuerzo cobertura: 2 unidades (zonas complejas)"
        ],
        "fuente_normativa": "ETSI EN 300 396 (TETRA estÃÂ¡ndar)",
        "fuente_diseno": "Estudio de cobertura RF - SimulaciÃÂ³n propagaciÃÂ³n",
        "documentos_referencia": [
          "V.3_Sistemas_Comunicacion_Detalle.md (SecciÃÂ³n 3.1)",
          "III/29_Sistema_TETRA_Integrado.md (Memoria de cÃÂ¡lculo)",
          "IV/38_Estudio_Cobertura_RF.md (Simulaciones)"
        ],
        "restriccion": "MÃÂ­nimo 33 torres para garantizar cobertura 100% segÃÂºn simulaciÃÂ³n",
        "alternativas": [
          "33 torres Ã¢â â Cobertura mÃÂ­nima 100% (riesgo en zonas complejas)",
          "37 torres Ã¢â â Cobertura 100% + 20% solapamiento (recomendado)",
          "42 torres Ã¢â â Cobertura 100% + 30% solapamiento (sobrecosto)"
        ]
      },
      "riesgos_asociados": [
        {
          "id": "R-TETRA-001",
          "descripcion": "Cantidad insuficiente genera zonas sin cobertura",
          "probabilidad": "Media",
          "impacto": "Alto",
          "estrategia": "Validar con estudio de propagaciÃÂ³n actualizado"
        }
      ]
    },
    "3.1.100": {
      "item": "3.1.100",
      "nombre": "CÃÂ¡maras CCTV",
      "criterio_tecnico": {
        "justificacion": "73 cÃÂ¡maras para monitoreo de 48 PAN + 12 talleres + 8 CCO + 5 estaciones",
        "calculo_detallado": "48 pasos a nivel Ãâ 1 cÃÂ¡mara + 12 talleres Ãâ 1 + 8 ÃÂ¡reas CCO + 5 estaciones ENCE = 73 total",
        "desglose": [
          "Pasos a nivel (PAN): 48 cÃÂ¡maras (1 por cada PAN crÃÂ­tico)",
          "Talleres mantenimiento: 12 cÃÂ¡maras (entrada/salida)",
          "Centro Control Operacional: 8 cÃÂ¡maras (perÃÂ­metro + interior)",
          "Estaciones ENCE: 5 cÃÂ¡maras (seguridad enclavamientos)"
        ],
        "fuente_normativa": "Norma CCTV IP - ResoluciÃÂ³n mÃÂ­nima 1080p",
        "fuente_diseno": "Plan de Seguridad Integral",
        "documentos_referencia": [
          "VII/Plan_Seguridad_Integral.md (SecciÃÂ³n 4.1)",
          "V.3_Sistemas_Comunicacion_Detalle.md (Tabla 6.2)"
        ],
        "restriccion": "MÃÂ­nimo 1 cÃÂ¡mara por punto crÃÂ­tico",
        "alternativas": [
          "73 cÃÂ¡maras Ã¢â â Cobertura bÃ¡sica (1 por punto)",
          "120 cÃÂ¡maras Ã¢â â Cobertura media (redundancia en crÃÂ­ticos)",
          "180 cÃÂ¡maras Ã¢â â Cobertura completa (mÃÂºltiples ÃÂ¡ngulos)"
        ]
      },
      "riesgos_asociados": []
    },
    "1.1.102": {
      "item": "1.1.102",
      "nombre": "Workstations operadores CTC",
      "criterio_tecnico": {
        "justificacion": "8 estaciones para OperaciÃ³n 24/7 con redundancia",
        "calculo_detallado": "3 turnos Ãâ 2 operadores por turno = 6 estaciones + 2 redundancia/capacitaciÃ³n = 8 total",
        "desglose": [
          "Estaciones turno diurno: 2 workstations",
          "Estaciones turno nocturno: 2 workstations",
          "Estaciones turno rotativo: 2 workstations",
          "Estaciones backup/capacitaciÃ³n: 2 workstations"
        ],
        "fuente_normativa": "EstÃÂ¡ndar OperaciÃ³n ferroviaria 24/7",
        "fuente_diseno": "Plan de Operaciones CCO",
        "documentos_referencia": [
          "VI/Plan_Operaciones_CCO.md (SecciÃÂ³n 2.3)",
          "V.3_Sistemas_Comunicacion_Detalle.md (Tabla 2.1)"
        ],
        "restriccion": "MÃÂ­nimo 6 para cubrir 3 turnos, recomendado 8 con redundancia",
        "alternativas": [
          "6 workstations Ã¢â â MÃÂ­nimo operativo (sin redundancia)",
          "8 workstations Ã¢â â Recomendado (con redundancia)",
          "10 workstations Ã¢â â Ãâptimo (redundancia completa)"
        ]
      },
      "riesgos_asociados": []
    }
  },
  "nota_uso": "Estos criterios deben mostrarse en la WBS Interactiva para cada ÃÂ­tem. Si un ÃÂ­tem no tiene criterio definido aquÃÂ­, mostrar mensaje indicando que el criterio tÃÂ©cnico debe ser documentado."
}

;


