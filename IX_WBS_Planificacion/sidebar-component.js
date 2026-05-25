(function() {
    // Uso de terminología dinámica si está disponible
    const term = window.LFC_TERMINOLOGY || {
        PROJECT: { NAME: "LFC STUDIO" },
        SYSTEMS: { GANTT: "Cronograma" }
    };

    const sidebarHTML = `
        <div class="logo" style="padding: 1rem 0; font-size: 1.3rem; font-weight: 800; color: var(--accent); margin-bottom: 3rem; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid var(--glass-border); letter-spacing: 1px;">
            <span>📊</span> LFC UF2
        </div>

        <div class="nav-group" style="margin-bottom: 2rem;">
            <div class="nav-label" style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-muted); margin-bottom: 1rem; font-weight: 700;">Inicio</div>
            <a href="/" class="nav-item">🏠 Centro de Gestión</a>
        </div>

        <div class="nav-group" style="margin-bottom: 2rem;">
            <div class="nav-label" style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-muted); margin-bottom: 1rem; font-weight: 700;">Presupuesto y WBS</div>
            <a href="/IX_WBS_Planificacion/WBS_Vista_Final" class="nav-item" id="nav-wbs">⭐ Presupuesto SCC — Vista Final</a>
            <a href="/IX_WBS_Planificacion/WBS_COMPLETA_TODO_Interactiva_v4.0" class="nav-item" id="nav-wbs-int">🛠️ WBS Interactiva (proponer DT)</a>
            <a href="/IX_WBS_Planificacion/WBS_Reporte_Gerencial" class="nav-item" id="nav-report">📋 Reporte Gerencial</a>
            <a href="/IX_WBS_Planificacion/WBS_Detalle_Apartadero" class="nav-item" id="nav-apartadero">🛤️ Detalle Apartadero (SCC)</a>
            <a href="/IX_WBS_Planificacion/WBS_Baseline_ENCE" class="nav-item" id="nav-ence">🧱 Baseline ENCE (ADIF)</a>
            <a href="/IX_WBS_Planificacion/WBS_Analisis_Riesgos" class="nav-item" id="nav-risks">⚠️ Análisis de Riesgos</a>
            <a href="/IX_WBS_Planificacion/WBS_Cronograma_Propuesta" class="nav-item" id="nav-chrono">📅 ${(term.SYSTEMS && term.SYSTEMS.GANTT) ? term.SYSTEMS.GANTT : 'Cronograma'}</a>
        </div>

        <div class="nav-group" style="margin-bottom: 2rem;">
            <div class="nav-label" style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-muted); margin-bottom: 1rem; font-weight: 700;">Etapas de Ingeniería</div>
            <a href="/IV_Ingenieria_basica/" class="nav-item" id="nav-ing-basica">🏗️ Ingeniería Básica</a>
            <a href="/V_Ingenieria_detalle/" class="nav-item" id="nav-ing-detalle">🔍 Ingeniería de Detalle</a>
        </div>

        <div class="nav-group" style="margin-bottom: 2rem;">
            <div class="nav-label" style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-muted); margin-bottom: 1rem; font-weight: 700;">Gestión y Documentos</div>
            <a href="/IX_WBS_Planificacion/WBS_Menu_Principal" class="nav-item" id="nav-hub">🎯 Hub WBS</a>
            <a href="/X_ENTREGABLES_CONSOLIDADOS/8_DOCUMENTOS_SERVIDOS/HTML/INDICE_Documentos_Servidos.html" class="nav-item">📑 Documentos Entregables</a>
            <a href="/IX_WBS_Planificacion/SICC_Audit_Dashboard" class="nav-item" id="nav-audit">🛡️ Auditoría Técnica</a>
            <a href="/IX_ENTREGABLES/docs/INDICE_DOCUMENTACION_SOPORTE.html" class="nav-item">📚 Soporte Técnico</a>
        </div>
        
        <style>
            .nav-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 0.9rem 1.2rem;
                color: var(--text-main);
                text-decoration: none;
                border-radius: var(--border-radius-md);
                transition: all var(--transition-speed);
                margin-bottom: 0.5rem;
                font-size: 0.85rem;
                border: 1px solid transparent;
            }
            .nav-item:hover {
                background: var(--glass-bg-hover);
                color: var(--accent);
                transform: translateX(8px);
                border-color: var(--glass-border);
            }
            .nav-item.active {
                background: var(--accent-transparent);
                color: var(--accent);
                border: 1px solid var(--accent);
                font-weight: 700;
                box-shadow: 0 0 15px var(--accent-transparent);
            }
        </style>
    `;

    function initSidebar() {
        const container = document.getElementById('lfc-sidebar-container');
        if (container) {
            container.innerHTML = sidebarHTML;
            
            // Botón móvil optimizado
            const toggleBtn = document.createElement('button');
            toggleBtn.id = 'sidebar-toggle';
            toggleBtn.innerHTML = '☰';
            Object.assign(toggleBtn.style, {
                position: 'fixed',
                top: '15px',
                right: '15px',
                width: '45px',
                height: '45px',
                borderRadius: '12px',
                background: 'var(--accent)',
                border: 'none',
                color: 'var(--primary)',
                fontSize: '1.2rem',
                cursor: 'pointer',
                zIndex: '3000',
                display: 'none',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s'
            });
            document.body.appendChild(toggleBtn);

            const style = document.createElement('style');
            style.innerHTML = `
                @media (max-width: 1024px) {
                    #sidebar-toggle { display: flex !important; }
                }
            `;
            document.head.appendChild(style);

            toggleBtn.addEventListener('click', () => {
                container.classList.toggle('active');
                toggleBtn.innerHTML = container.classList.contains('active') ? '✕' : '☰';
                toggleBtn.style.transform = container.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0)';
            });

            // Mark active item
            const path = window.location.pathname;
            const navMap = {
                'WBS_Vista_Final': 'nav-wbs',
                'WBS_COMPLETA': 'nav-wbs-int',
                'Reporte': 'nav-report',
                'Detalle_Apartadero': 'nav-apartadero',
                'Baseline_ENCE': 'nav-ence',
                'Riesgos': 'nav-risks',
                'Cronograma': 'nav-chrono',
                'Menu_Principal': 'nav-hub',
                'IV_Ingenieria_basica': 'nav-ing-basica',
                'V_Ingenieria_detalle': 'nav-ing-detalle',
                'Audit': 'nav-audit'
            };
            
            for (const [key, id] of Object.entries(navMap)) {
                if (path.includes(key)) {
                    const el = document.getElementById(id);
                    if (el) el.classList.add('active');
                    break;
                }
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSidebar);
    } else {
        initSidebar();
    }
})();
