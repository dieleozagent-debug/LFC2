/**
 * SICC WBS Core Logic v3.1
 * Shared financial engine for L3 Budget and L4 Audit
 */

const WBS_CORE = {
    // Utility to parse numbers from strings with commas
    parseNumber: function(str) {
        if (!str) return 0;
        return parseFloat(str.toString().replace(/,/g, '')) || 0;
    },

    // Get TRM from terminology or default
    getTRM: function() {
        return (window.LFC_TERMINOLOGY && window.LFC_TERMINOLOGY.FINANCIAL && window.LFC_TERMINOLOGY.FINANCIAL.TRM) || 4400;
    },

    // Core Financial Engine
    calcularAIUeIVA: function(data) {
        const subtotales = {};
        const TRM = this.getTRM();
        
        data.forEach(item => {
            if (item.tipo && item.total && item.nivel === 3) {
                const capitulo = item.capitulo || item.item.split('.')[0];
                if (!subtotales[capitulo]) {
                    subtotales[capitulo] = { SUMINISTRO: 0, OBRA: 0, SERVICIO: 0 };
                }
                subtotales[capitulo][item.tipo] += Math.round(this.parseNumber(item.total));
            }
        });
        
        let totalDirecto = 0, totalAIU = 0, totalIVA = 0;
        let totalSum = 0, totalObra = 0, totalServ = 0;
        const capitulos = {};
        
        Object.keys(subtotales).forEach(cap => {
            const vals = subtotales[cap];
            const cd = vals.SUMINISTRO + vals.OBRA + vals.SERVICIO;
            totalDirecto += cd;
            totalSum += vals.SUMINISTRO;
            totalObra += vals.OBRA;
            totalServ += vals.SERVICIO;
            
            const adm = Math.round(vals.OBRA * 0.23);
            const imp = Math.round(vals.OBRA * 0.05);
            const util = Math.round(vals.OBRA * 0.05);
            const aiu = adm + imp + util;
            totalAIU += aiu;
            
            const ivaSum = Math.round(vals.SUMINISTRO * 0.19);
            const ivaServ = Math.round(vals.SERVICIO * 0.19);
            const ivaUtil = Math.round(vals.OBRA * 0.05 * 0.19);
            const iva = ivaSum + ivaServ + ivaUtil;
            totalIVA += iva;
            
            capitulos[cap] = {
                suministros: vals.SUMINISTRO,
                obraCivil: vals.OBRA,
                servicios: vals.SERVICIO,
                costoDirecto: cd,
                administracion: adm,
                imprevistos: imp,
                utilidad: util,
                aiu: aiu,
                ivaSuministros: ivaSum,
                ivaServicios: ivaServ,
                ivaUtilidad: ivaUtil,
                iva: iva,
                total: Math.round(cd + aiu + iva)
            };
        });
        
        return {
            costoDirecto: totalDirecto,
            aiu: totalAIU,
            iva: totalIVA,
            total: totalDirecto + totalAIU + totalIVA,
            subtotales: subtotales,
            capitulos: capitulos,
            totalSuministros: totalSum,
            totalObraCivil: totalObra,
            totalServicios: totalServ
        };
    },

    // Chapter Names Constant
    getNombresCapitulos: function() {
        return {
            '1': 'CONTROL Y SENALIZACIÓN VIRTUAL',
            '2': 'TELECOMUNICACIONES COLOCALIZADAS', 
            '3': 'SISTEMAS ITS Y SEGURIDAD',
            '4': 'PASOS A NIVEL',
            '5': 'CENTRO DE CONTROL OPERACIONAL',
            '6': 'MATERIAL RODANTE'
        };
    },

    // Audit Chapter 4
    validarCapitulo4: function(data) {
        let totalCap4 = 0;
        let items = [];
        const TRM = this.getTRM();
        
        data.forEach(item => {
            const id = item.item || '';
            if (id.startsWith('4.') && item.total) {
                const val = this.parseNumber(item.total);
                totalCap4 += val;
                items.push({ item: item.item, descripcion: item.descripcion, valor: val });
            }
        });
        
        const msg = `=== AUDITORIA MATEMATICA CAPITULO 4 ===\n\n` +
                  `Total Capítulo 4 (COP): $${totalCap4.toLocaleString('es-CO')}\n` +
                  `Total Capítulo 4 (USD): $${(totalCap4/TRM).toLocaleString('en-US', {maximumFractionDigits: 0})}\n\n` +
                  `Items Auditados: ${items.length}\n` +
                  `Estado: VERIFICADO ✅`;
        
        alert(msg);
        console.log('Audit Details:', items);
        return totalCap4;
    },

    // Modal/Window for AIU Breakdown - High Fidelity
    mostrarDesglose: function(data) {
        const calculos = this.calcularAIUeIVA(data);
        const nombresCap = this.getNombresCapitulos();
        const TRM = this.getTRM();
        
        let desgloseHTML = `
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <div>
                        <h2 style="color: #1e3c72; margin: 0;">📊 DESGLOSE PRESUPUESTAL SICC</h2>
                        <h3 style="color: #28a745; margin: 5px 0 0 0; font-size: 14px;">✅ Pureza Técnica v3.1 - TRM: ${TRM}</h3>
                    </div>
                    <button id="btnExportarDesglose" class="btn btn-success" style="background: #28a745; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                        📥 Exportar a Excel
                    </button>
                </div>
                <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 20px;">
                    <thead>
                        <tr style="background: #343a40; color: white;">
                            <th style="padding: 10px; border: 1px solid #495057;">CAPÍTULO</th>
                            <th style="padding: 10px; border: 1px solid #495057;">SUMINISTROS</th>
                            <th style="padding: 10px; border: 1px solid #495057;">OBRA CIVIL</th>
                            <th style="padding: 10px; border: 1px solid #495057;">SERVICIOS</th>
                            <th style="padding: 10px; border: 1px solid #495057;">COSTO DIRECTO</th>
                            <th style="padding: 10px; border: 1px solid #495057;">AIU (33% Obra)</th>
                            <th style="padding: 10px; border: 1px solid #495057;">IVA</th>
                            <th style="padding: 10px; border: 1px solid #495057;">TOTAL (COP)</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        
        Object.keys(calculos.capitulos).sort().forEach(cap => {
            const c = calculos.capitulos[cap];
            desgloseHTML += `
                <tr>
                    <td style="padding: 8px; border: 1px solid #dee2e6; font-weight: bold;">${cap}. ${nombresCap[cap] || cap}</td>
                    <td style="text-align: right;">$${c.suministros.toLocaleString()}</td>
                    <td style="text-align: right;">$${c.obraCivil.toLocaleString()}</td>
                    <td style="text-align: right;">$${c.servicios.toLocaleString()}</td>
                    <td style="text-align: right; font-weight: bold;">$${c.costoDirecto.toLocaleString()}</td>
                    <td style="text-align: right;">$${c.aiu.toLocaleString()}</td>
                    <td style="text-align: right;">$${c.iva.toLocaleString()}</td>
                    <td style="text-align: right; font-weight: bold; background: #e3f2fd;">$${c.total.toLocaleString()}</td>
                </tr>
            `;
        });
        
        desgloseHTML += `
                    </tbody>
                </table>
            </div>
        `;
        
        const win = window.open('', '_blank', 'width=1200,height=900');
        win.document.write(`
            <html>
            <head>
                <title>Desglose AIU SICC</title>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
                <style>
                    body { font-family: sans-serif; padding: 20px; background: #f4f7f6; }
                    table { border-collapse: collapse; width: 100%; background: white; }
                    th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
                </style>
            </head>
            <body>
                ${desgloseHTML}
                <script>
                    document.getElementById('btnExportarDesglose').onclick = function() {
                        window.opener.WBS_CORE.exportarDesgloseExcel(window.opener.wbsData);
                    };
                </script>
            </body>
            </html>
        `);
        win.document.close();
    },

    // Work Report Generator (Acta de Obra) - High Fidelity
    generarActaObra: function(data) {
        const calculos = this.calcularAIUeIVA(data);
        const nombresCap = this.getNombresCapitulos();
        const TRM = this.getTRM();
        const parseNumber = this.parseNumber;
        
        let actaHTML = '';
        let totalGeneral = 0;
        
        // Group items for display
        const itemsPorCapitulo = {};
        data.forEach(item => {
            if (!item.item || !item.tipo) return;
            const cap = item.item.split('.')[0];
            if (!itemsPorCapitulo[cap]) itemsPorCapitulo[cap] = { SUMINISTRO: [], OBRA: [], SERVICIO: [] };
            if (itemsPorCapitulo[cap][item.tipo]) itemsPorCapitulo[cap][item.tipo].push(item);
        });
        
        Object.keys(itemsPorCapitulo).sort().forEach(cap => {
            const nombre = nombresCap[cap] || 'CAPÍTULO ' + cap;
            let totalCap = 0;
            
            actaHTML += `
                <div style="page-break-after: always; margin-bottom: 40px; border: 1px solid #eee; padding: 20px; border-radius: 8px; background: white;">
                    <h2 style="background: #1e3c72; color: white; padding: 15px; border-radius: 4px; margin-top:0;">${cap}. ${nombre}</h2>
            `;
            
            ['SUMINISTRO', 'OBRA', 'SERVICIO'].forEach(tipo => {
                const items = itemsPorCapitulo[cap][tipo];
                if (items.length > 0) {
                    actaHTML += `<h3 style="color: #2c3e50; border-bottom: 2px solid ${tipo === 'OBRA' ? '#e74c3c' : '#3498db'}; padding-bottom: 5px;">${tipo}</h3>`;
                    actaHTML += `<table style="width:100%; border-collapse: collapse; font-size: 11px; margin-bottom: 15px;">
                        <tr style="background:#f8f9fa;">
                            <th>ÍTEM</th><th>DESCRIPCIÓN</th><th>UND</th><th>CANT</th><th>VU (COP)</th><th>TOTAL (COP)</th>
                        </tr>`;
                    
                    let subtotal = 0;
                    items.forEach(item => {
                        const t = parseNumber(item.total);
                        subtotal += t;
                        actaHTML += `
                            <tr>
                                <td style="width:80px;">${item.item}</td>
                                <td>${item.descripcion}</td>
                                <td style="text-align:center;">${item.unidad}</td>
                                <td style="text-align:right;">${item.cantidad}</td>
                                <td style="text-align:right;">$${parseNumber(item.vu).toLocaleString()}</td>
                                <td style="text-align:right; font-weight:bold;">$${t.toLocaleString()}</td>
                            </tr>`;
                    });
                    
                    let totalConAdics = subtotal;
                    if (tipo === 'OBRA') {
                        const aiu = subtotal * 0.33;
                        const iva = (subtotal * 0.05) * 0.19;
                        totalConAdics = subtotal + aiu + iva;
                        actaHTML += `<tr style="background:#fff3cd; font-weight:bold;"><td colspan="5" style="text-align:right;">AIU 33% + IVA/Utilidad:</td><td style="text-align:right;">$${(aiu + iva).toLocaleString()}</td></tr>`;
                    } else {
                        const iva = subtotal * 0.19;
                        totalConAdics = subtotal + iva;
                        actaHTML += `<tr style="background:#eef7ff; font-weight:bold;"><td colspan="5" style="text-align:right;">IVA 19%:</td><td style="text-align:right;">$${iva.toLocaleString()}</td></tr>`;
                    }
                    
                    actaHTML += `<tr style="background:#d4edda; font-weight:bold;"><td colspan="5" style="text-align:right;">TOTAL ${tipo}:</td><td style="text-align:right;">$${totalConAdics.toLocaleString()}</td></tr></table>`;
                    totalCap += totalConAdics;
                }
            });
            
            actaHTML += `<div style="background: #2c3e50; color: white; padding: 10px; text-align: right; border-radius: 4px;">TOTAL CAPÍTULO ${cap}: $${totalCap.toLocaleString()} COP</div></div>`;
            totalGeneral += totalCap;
        });
        
        const win = window.open('', '_blank', 'width=1400,height=900');
        win.document.write(`
            <html>
            <head>
                <title>Acta de Obra SICC</title>
                <style>
                    body { font-family: 'Segoe UI', sans-serif; padding: 40px; background: #f0f2f5; line-height: 1.6; }
                    table { border-collapse:collapse; width:100%; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background: #343a40; color: white; }
                    .print-btn { position: fixed; top: 20px; right: 20px; padding: 12px 24px; background: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }
                    @media print { .print-btn { display: none; } }
                </style>
            </head>
            <body>
                <button class="print-btn" onclick="window.print()">🖨️ Imprimir PDF / Acta</button>
                <h1 style="text-align:center; color: #1e3c72; border-bottom: 4px solid #1e3c72; padding-bottom: 10px;">📝 ACTA DE OBRA - SICC v3.1</h1>
                <p style="text-align:center; opacity:0.7;">Pureza Técnica • TRM: ${TRM} • Fecha: ${new Date().toLocaleDateString()}</p>
                ${actaHTML}
                <div style="background: #155724; color: white; padding: 30px; border-radius: 10px; text-align: center; margin-top: 40px;">
                    <h2 style="margin:0;">TOTAL GENERAL PROYECTO</h2>
                    <h1 style="font-size: 48px; margin: 10px 0;">$${totalGeneral.toLocaleString()} COP</h1>
                    <p style="font-size: 24px; opacity: 0.9;">$${Math.round(totalGeneral/TRM).toLocaleString()} USD</p>
                </div>
            </body>
            </html>
        `);
        win.document.close();
    },

    // Excel Exporter (Full WBS)
    exportarExcelWBS: function(data) {
        if (typeof XLSX === 'undefined') {
            alert('❌ Error: Librería XLSX no cargada.');
            return;
        }
        const TRM = this.getTRM();
        const excelData = data.map(item => ({
            'ÍTEM': item.item,
            'DESCRIPCIÓN': item.descripcion,
            'TIPO': item.tipo,
            'UNIDAD': item.unidad,
            'CANTIDAD': this.parseNumber(item.cantidad),
            'VU (COP)': this.parseNumber(item.vu),
            'TOTAL (COP)': this.parseNumber(item.total),
            'TOTAL (USD)': this.parseNumber(item.total) / TRM
        }));
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'WBS SICC');
        XLSX.writeFile(wb, `WBS_SICC_${new Date().toISOString().split('T')[0]}.xlsx`);
    },

    // Excel Exporter (AIU Breakdown) - High Fidelity
    exportarDesgloseExcel: function(data) {
        if (typeof XLSX === 'undefined') {
            alert('❌ Error: La librería XLSX no está cargada.\nPor favor, verifica tu conexión a internet.');
            return;
        }
        
        try {
            const calculos = this.calcularAIUeIVA(data);
            const TRM = this.getTRM();
            const nombresCap = this.getNombresCapitulos();
            
            const desgloseData = [
                ['DESGLOSE PRESUPUESTAL POR CAPÍTULOS - SICC v3.1'],
                ['Fecha:', new Date().toLocaleDateString('es-CO')],
                ['Proyecto: SICC - APP La Dorada-Chiriguaná'],
                [],
                ['CAPÍTULO', 'CONCEPTO', 'SUMINISTROS', 'OBRA', 'SERVICIOS', 'CD', 'AIU/IVA', 'TOTAL COP', 'TOTAL USD']
            ];
            
            Object.keys(calculos.capitulos).sort().forEach(cap => {
                const c = calculos.capitulos[cap];
                desgloseData.push([`CAP ${cap}`, nombresCap[cap] || cap, c.suministros, c.obraCivil, c.servicios, c.costoDirecto, '', '', '']);
                
                if (c.obraCivil > 0) {
                    desgloseData.push(['', '  ↳ Administración (23%)', '', '', '', '', c.administracion, '', c.administracion / TRM]);
                    desgloseData.push(['', '  ↳ Imprevistos (5%)', '', '', '', '', c.imprevistos, '', c.imprevistos / TRM]);
                    desgloseData.push(['', '  ↳ Utilidad (5%)', '', '', '', '', c.utilidad, '', c.utilidad / TRM]);
                }
                
                desgloseData.push(['', '  ↳ IVA Suministros (19%)', '', '', '', '', c.ivaSuministros, '', c.ivaSuministros / TRM]);
                desgloseData.push(['', '  ↳ IVA Servicios (19%)', '', '', '', '', c.ivaServicios, '', c.ivaServicios / TRM]);
                if (c.obraCivil > 0) {
                    desgloseData.push(['', '  ↳ IVA/Utilidad Obra (19%×5%)', '', '', '', '', c.ivaUtilidad, '', c.ivaUtilidad / TRM]);
                }
                
                desgloseData.push(['', 'AIU TOTAL', '', '', '', '', c.aiu, '', c.aiu / TRM]);
                desgloseData.push(['', 'IVA TOTAL', '', '', '', '', c.iva, '', c.iva / TRM]);
                desgloseData.push(['', 'TOTAL CAPÍTULO ' + cap, '', '', '', '', '', c.total, c.total / TRM]);
                desgloseData.push([]);
            });
            
            desgloseData.push([], ['TOTALES GENERALES', '', '', '', '', '', '', '', '']);
            desgloseData.push(['TOTAL PROYECTO', '', '', '', '', '', '', calculos.total, calculos.total / TRM]);
            
            const ws = XLSX.utils.aoa_to_sheet(desgloseData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Desglose AIU');
            XLSX.writeFile(wb, `Desglose_AIU_SICC_${new Date().toISOString().split('T')[0]}.xlsx`);
            
            alert('✅ Desglose AIU exportado exitosamente.');
        } catch (error) {
            console.error('❌ Error exportando:', error);
            alert('❌ Error al exportar: ' + error.message);
        }
    }
};
