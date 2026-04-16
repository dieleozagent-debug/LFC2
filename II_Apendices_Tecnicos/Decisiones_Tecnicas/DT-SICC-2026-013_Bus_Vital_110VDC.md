# DECISIÓN TÉCNICA: DT-SICC-2026-013
## ASUNTO: ESTANDARIZACIÓN DEL BUS VITAL 110V DC Y NIVELES DE AUTONOMÍA

**ESTADO:** PENDIENTE DE VALIDACIÓN HUMANA
**FECHA DE SANEAMIENTO:** 13 de abril de 2026

---

### 🏛️ DICTAMEN TÉCNICO VINCULANTE

Basado en el **AREMA C&S Manual** y las recomendaciones internacionales para sistemas de seguridad vital, se formaliza la arquitectura eléctrica para los componentes del SICC:

#### 1. SEGREGACIÓN DE CARGAS Y TENSIONES
- **Bus Vital Senalización:** Se establece el uso prioritario de **110V DC** (nominal) para la alimentación de controladores ENCE, sistemas de detección de desvíos y barreras, asegurando inmunidad ante transitorios AC y cumplimiento con **FRA 49 CFR §236.551**.
- **Bus Telecomunicaciones:** Se mantiene el nivel de **48V DC** conforme a los estándares ETSI y las especificaciones del diseno de red de Ardanuy.

#### 2. CRITERIOS DE AUTONOMÍA (BACKUP)
Tras la auditoría del DBCD V002 y la revisión del Criterios V001 (documento de referencia), se fijan los siguientes parámetros:
- **Escenario Red Pública:** Autonomía mínima de **4 horas** mediante rectificadores y bancos de baterías (VRLA/LiFePO4).
- **Escenario Remoto (Solar):** Autonomía mínima de **48 horas** (2 días) ante condiciones de radiación nula, asegurando la continuidad operativa del PTC en apartaderos y nodos remotos.

#### 3. CUMPLIMIENTO FRA §236.551
La norma **FRA §236.551** no se limita a la estabilidad de voltaje, sino que regula los criterios de inspección, prueba y mantenimiento de las fuentes de energía para sistemas de control de tracción y PTC, asegurando que ante una pérdida total de energía, el sistema de enclavamientos permanezca en estado "Fail-Safe".

---
**Vo.Bo. Requerido:** [Firma Humana Autorizada]
**Dirección Técnica LFC** (Supervisión: Diego Zúniga)
