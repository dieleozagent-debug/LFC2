const duracionesCronograma = {
  "version": "1.0",
  "fecha": "2025-10-07",
  "nota": "Duraciones y vinculaciÃÂ³n cronograma para ÃÂ­tems WBS",
  "duraciones": {
    "2.3.100": {
      "item": "2.3.100",
      "nombre": "Cable fibra óptica 48 fibras",
      "duracion_meses": 49,
      "es_ruta_critica": true,
      "hito_inicio": "Mes 1",
      "hito_fin": "Mes 49",
      "dependencias": [],
      "justificacion_duracion": "InstalaciÃÂ³n secuencial 526 km: 12 km/mes promedio Ãâ 49 meses",
      "ruta_critica_detalle": "Actividad mÃ¡s larga del proyecto. Define plazo total.",
      "puede_acelerarse": false,
      "razon_no_aceleracion": "InstalaciÃÂ³n fÃÂ­sica limitada por clima, accesos, permisos",
      "impacto_retraso": {
        "costo_por_mes": 150000000,
        "descripcion": "Cada mes de retraso = $150M en costos indirectos"
      }
    },
    "2.1.100": {
      "item": "2.1.100",
      "nombre": "Torres TETRA autosoportadas",
      "duracion_meses": 18,
      "es_ruta_critica": false,
      "hito_inicio": "Mes 1",
      "hito_fin": "Mes 18",
      "dependencias": [],
      "justificacion_duracion": "37 torres: DiseÃÂ±o (2m) + FabricaciÃÂ³n (4m) + InstalaciÃÂ³n (12m)",
      "ruta_critica_detalle": "No es ruta crÃÂ­tica. Puede ejecutarse en paralelo con fibra.",
      "puede_acelerarse": true,
      "opcion_aceleracion": {
        "metodo": "Fast-tracking: Radioenlaces temporales",
        "duracion_acelerada": 12,
        "ahorro_tiempo": 6,
        "costo_adicional": 50000000,
        "descripcion": "Usar radioenlaces 1GB entre torres mientras se instala fibra. Permite Operación TETRA desde mes 12 en vez de mes 18."
      },
      "impacto_retraso": {
        "costo_por_mes": 80000000,
        "descripcion": "Retraso en TETRA afecta comunicaciÃÂ³n operacional"
      },
      "vinculacion_contrato": {
        "apendice": "AT1-SecciÃÂ³n-3.1",
        "clausula": "Sistema TETRA operativo en mes 18",
        "penalizacion_retraso": "$200M por cada mes de retraso en Operación"
      }
    },
    "2.1.106": {
      "item": "2.1.106",
      "nombre": "Casetas tÃÂ©cnicas TETRA",
      "duracion_meses": 10,
      "es_ruta_critica": false,
      "hito_inicio": "Mes 2",
      "hito_fin": "Mes 11",
      "dependencias": ["2.1.100"],
      "justificacion_duracion": "37 casetas: DiseÃÂ±o (1m) + Construcción paralela (9m)",
      "ruta_critica_detalle": "Depende de ubicaciÃÂ³n torres, pero no bloquea ruta crÃÂ­tica",
      "puede_acelerarse": true,
      "opcion_aceleracion": {
        "metodo": "PrefabricaciÃÂ³n",
        "duracion_acelerada": 7,
        "ahorro_tiempo": 3,
        "costo_adicional": 30000000,
        "descripcion": "Usar casetas prefabricadas en lugar de Construcción in-situ"
      }
    },
    "1.1.100": {
      "item": "1.1.100",
      "nombre": "Servidores CTC principales",
      "duracion_meses": 6,
      "es_ruta_critica": false,
      "hito_inicio": "Mes 1",
      "hito_fin": "Mes 6",
      "dependencias": [],
      "justificacion_duracion": "Compra internacional (3m) + Transporte (1m) + InstalaciÃÂ³n/Config (2m)",
      "puede_acelerarse": true,
      "opcion_aceleracion": {
        "metodo": "Compra anticipada",
        "duracion_acelerada": 4,
        "ahorro_tiempo": 2,
        "costo_adicional": 0,
        "descripcion": "Adelantar orden de compra al mes 0"
      }
    }
  },
  "ruta_critica": [
    {
      "secuencia": 1,
      "item": "2.3.100",
      "nombre": "Cable fibra óptica",
      "duracion": 49,
      "acumulado": 49,
      "es_critico": true,
      "razon": "Define plazo total del proyecto"
    }
  ],
  "analisis_pareto": {
    "items_criticos_80_regla": [
      {
        "item": "2.3.100",
        "nombre": "Cable fibra óptica",
        "porcentaje_costo": 45,
        "porcentaje_tiempo": 100,
        "razon_pareto": "Mayor costo + Mayor tiempo = Ruta crÃÂ­tica",
        "atencion_gerencial": "ALTA"
      },
      {
        "item": "2.1.100",
        "nombre": "Torres TETRA",
        "porcentaje_costo": 18,
        "porcentaje_tiempo": 37,
        "razon_pareto": "Alto costo + Puede acelerarse",
        "atencion_gerencial": "ALTA"
      },
      {
        "item": "1.1.103",
        "nombre": "Software CTC",
        "porcentaje_costo": 8,
        "porcentaje_tiempo": 12,
        "razon_pareto": "Alto costo unitario + Compra internacional",
        "atencion_gerencial": "MEDIA"
      }
    ],
    "nota": "Estos 3 ÃÂ­tems representan ~71% del costo total y definen cronograma. Gerencia debe enfocarse en estos."
  }
}

;

