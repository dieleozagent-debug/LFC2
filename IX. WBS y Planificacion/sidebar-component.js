(function() {
    const sidebarHTML = `
        <div class="logo" style="font-size: 1.5rem; font-weight: 700; color: #ffd700; margin-bottom: 3rem; display: flex; align-items: center; gap: 10px;">
            <span>📊</span> LFC STUDIO
        </div>

        <div class="nav-group" style="margin-bottom: 2rem;">
            <div class="nav-label" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: #8892b0; margin-bottom: 1rem;">Core</div>
            <a href="../index.html" class="nav-item">🏠 Dashboard Home</a>
        </div>

        <div class="nav-group" style="margin-bottom: 2rem;">
            <div class="nav-label" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: #8892b0; margin-bottom: 1rem;">Herramientas WBS</div>
            <a href="WBS_COMPLETA_TODO_Interactiva_v4.0.html" class="nav-item" id="nav-wbs">🚀 WBS Interactiva</a>
            <a href="WBS_Reporte_Gerencial.html" class="nav-item" id="nav-report">📋 Reporte Gerencial</a>
            <a href="WBS_Analisis_Riesgos.html" class="nav-item" id="nav-risks">⚠️ Gestión Riesgos</a>
            <a href="WBS_Cronograma_Propuesta.html" class="nav-item" id="nav-chrono">📅 Cronograma</a>
        </div>

        <div class="nav-group" style="margin-bottom: 2rem;">
            <div class="nav-label" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: #8892b0; margin-bottom: 1rem;">Soporte y Docs</div>
            <a href="../IX_ENTREGABLES/README_ENTREGABLES_SANEADOS.md" class="nav-item">📚 Índice de Entregables</a>
            <a href="../IX_ENTREGABLES/docs/CERTIFICACION_SANEAMIENTO.md" class="nav-item">📜 Certificación SICC</a>
            <a href="WBS_COMPLETA_TODO_Interactiva_v4.0.html" class="nav-item">📖 Guía Metodológica</a>
        </div>
        
        <style>
            .nav-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 0.8rem 1rem;
                color: #e6f1ff;
                text-decoration: none;
                border-radius: 12px;
                transition: all 0.3s;
                margin-bottom: 0.5rem;
                font-size: 0.9rem;
            }
            .nav-item:hover {
                background: rgba(255, 255, 255, 0.05);
                color: #ffd700;
                transform: translateX(5px);
            }
            .nav-item.active {
                background: rgba(255, 215, 0, 0.1);
                color: #ffd700;
                border: 1px solid #ffd700;
            }
        </style>
    `;

    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('lfc-sidebar-container');
        if (container) {
            container.innerHTML = sidebarHTML;
            
            // BotÃ³n mÃ³vil (afuera del container para que sea visible)
            const toggleBtn = document.createElement('button');
            toggleBtn.id = 'sidebar-toggle';
            toggleBtn.innerHTML = 'â°';
            Object.assign(toggleBtn.style, {
                position: 'fixed',
                top: '20px',
                right: '20px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#ffd700',
                border: 'none',
                color: '#0a192f',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: '3000',
                display: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                alignItems: 'center',
                justifyContent: 'center'
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
                toggleBtn.innerHTML = container.classList.contains('active') ? 'â' : 'â°';
            });

            // Mark active item
            const path = window.location.pathname;
            if (path.includes('WBS_COMPLETA')) document.getElementById('nav-wbs').classList.add('active');
            else if (path.includes('Reporte')) document.getElementById('nav-report').classList.add('active');
            else if (path.includes('Riesgos')) document.getElementById('nav-risks').classList.add('active');
            else if (path.includes('Cronograma')) document.getElementById('nav-chrono').classList.add('active');
        }
    });
})();
