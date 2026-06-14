export default function Proceso() {
  return (
    <section className="proceso" id="proceso">
      <div className="s-wrap">
        <div className="reveal">
          <div className="s-eyebrow">Cómo funciona</div>
          <h2 className="s-h2">10 minutos<br />de tu <span className="red">tiempo.</span></h2>
        </div>

        <div className="proceso-editorial reveal">
          <div className="pe-row">
            <div className="pe-step pe-step-hero">
              <div className="pe-num">01</div>
              <div className="pe-icon">
                <svg className="icon" width="18" height="18" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <div className="pe-title">Brief</div>
              <div className="pe-desc">Nombre, giro, teléfono, fotos y colores. Por WhatsApp. Sin formularios.</div>
              <div className="pe-who">Tú · 2 min</div>
            </div>
            <div className="pe-arrow">→</div>
            <div className="pe-step">
              <div className="pe-num">02</div>
              <div className="pe-icon">
                <svg className="icon" width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
              </div>
              <div className="pe-title">Diseño</div>
              <div className="pe-desc">Generamos la página hecha a medida para tu giro y tu marca.</div>
              <div className="pe-who">Artstrokes</div>
            </div>
            <div className="pe-arrow">→</div>
            <div className="pe-step">
              <div className="pe-num">03</div>
              <div className="pe-icon">
                <svg className="icon" width="16" height="16" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <div className="pe-title">Revisión</div>
              <div className="pe-desc">Te mandamos el preview. Revisas y apruebas con 1 ronda de ajustes.</div>
              <div className="pe-who">Tú · 5 min</div>
            </div>
          </div>

          <div className="pe-row pe-row-bottom">
            <div className="pe-step">
              <div className="pe-num">04</div>
              <div className="pe-icon">
                <svg className="icon" width="16" height="16" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </div>
              <div className="pe-title">Deploy</div>
              <div className="pe-desc">Subimos la página a un servidor profesional. Lista para el mundo.</div>
              <div className="pe-who">Automático</div>
            </div>
            <div className="pe-arrow">→</div>
            <div className="pe-step">
              <div className="pe-num">05</div>
              <div className="pe-icon">
                <svg className="icon" width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div className="pe-title">Dominio</div>
              <div className="pe-desc">Conectamos tu dominio. Tuyo para siempre, a tu nombre.</div>
              <div className="pe-who">10 min</div>
            </div>
            <div className="pe-arrow">→</div>
            <div className="pe-step pe-step-final">
              <div className="pe-num pe-num-acid">06</div>
              <div className="pe-icon pe-icon-acid">
                <svg className="icon" width="18" height="18" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <div className="pe-title pe-title-acid">Live</div>
              <div className="pe-desc">&quot;Aquí está tu página.&quot; Un link. Tus clientes ya te encuentran en Google.</div>
              <div className="pe-who">Tu negocio · 48 hrs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
