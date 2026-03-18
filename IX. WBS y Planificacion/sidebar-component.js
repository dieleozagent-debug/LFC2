(function() {
    // Uso de terminología dinámica si está disponible
    const term = window.LFC_TERMINOLOGY || {
        PROJECT: { NAME: "LFC STUDIO" },
        SYSTEMS: { GANTT: "Cronograma" }
    };

    const sidebarHTML = `
        <div class="logo" style="padding: 1rem 0; font-size: 1.5rem; font-weight: 800; color: var(--accent); margin-bottom: 3rem; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid var(--glass-border);">
            <span>📊</span> ${(term.PROJECT && term.PROJECT.NAME) ? term.PROJECT.NAME : 'LFC STUDIO'}
        </div>

        <div class="nav-group" style="margin-bottom: 2rem;">
            <div class="nav-label" style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-muted); margin-bottom: 1rem; font-weight: 700;">Core</div>
            <a href="/index.html" class="nav-item">🏠 Dashboard Home</a>
        </div>

        <div class="nav-group" style="margin-bottom: 2rem;">
            <div class="nav-label" style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-muted); margin-bottom: 1rem; font-weight: 700;">Herramientas WBS</div>
            <a href="/IX. WBS y Planificacion/WBS_COMPLETA_TODO_Interactiva_v4.0.html" class="nav-item" id="nav-wbs">🚀 WBS Interactiva</a>
            <a href="/IX. WBS y Planificacion/WBS_Reporte_Gerencial.html" class="nav-item" id="nav-report">📋 Reporte Gerencial</a>
            <a href="/IX. WBS y Planificacion/WBS_Analisis_Riesgos.html" class="nav-item" id="nav-risks">⚠️ Gestión Riesgos</a>
            <a href="/IX. WBS y Planificacion/WBS_Cronograma_Propuesta.html" class="nav-item" id="nav-chrono">📅 ${(term.SYSTEMS && term.SYSTEMS.GANTT) ? term.SYSTEMS.GANTT : 'Cronograma L3'}</a>
            <a href="/IX. WBS y Planificacion/WBS_Controles_Operativos_L4.html" class="nav-item" id="nav-l4">🛠️ Controles L4</a>
        </div>

        <div class="nav-group" style="margin-bottom: 2rem;">
            <div class="nav-label" style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-muted); margin-bottom: 1rem; font-weight: 700;">Soporte y Docs</div>
            <a href="/IX. WBS y Planificacion/SICC_Audit_Dashboard.html" class="nav-item" id="nav-audit">🛡️ Auditoría SICC</a>
            <a href="/X_ENTREGABLES_CONSOLIDADOS/8_DOCUMENTOS_SERVIDOS/HTML/INDICE_Documentos_Servidos.html" class="nav-item">📊 Platos Servidos</a>
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
                'WBS_COMPLETA': 'nav-wbs',
                'Reporte': 'nav-report',
                'Riesgos': 'nav-risks',
                'Cronograma': 'nav-chrono',
                'Controles_Operativos': 'nav-l4'
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
