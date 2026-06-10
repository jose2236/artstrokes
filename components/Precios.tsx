const checkIcon = <svg className="icon" width="9" height="9" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
const crossIcon = <svg className="icon" width="9" height="9" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>

export default function Precios() {
  return (
    <section className="precios" id="precios">
      <div className="s-wrap">
        <div className="reveal">
          <div className="s-eyebrow">Inversión</div>
          <h2 className="s-h2">Sin letras<br /><span className="red">chiquitas.</span></h2>
        </div>
        <div className="precios-grid reveal">

          {/* Esencial */}
          <div className="precio-card">
            <span className="pc-tag base">Esencial</span>
            <div className="pc-name">Página Esencial</div>
            <div className="pc-price">$3,500</div>
            <div className="pc-period">MXN · Pago único</div>
            <div className="pc-divider" />
            <div className="pc-features">
              {[
                [true, 'Hasta 5 secciones de contenido'],
                [true, 'Diseño único para tu giro'],
                [true, 'Botón WhatsApp flotante'],
                [true, 'Responsive (móvil y escritorio)'],
                [true, 'Dominio + hosting 12 meses'],
                [true, '1 ronda de ajustes incluida'],
                [true, 'Entrega en 48 horas'],
                [false, 'Galería de fotos'],
                [false, 'Formulario de contacto'],
              ].map(([si, text], i) => (
                <div className="pc-feat" key={i}>
                  <div className={`feat-dot ${si ? 'si' : 'no'}`}>{si ? checkIcon : crossIcon}</div>
                  {text}
                </div>
              ))}
            </div>
            <a className="pc-cta dark" href="https://wa.me/5215530584253?text=Hola,%20quiero%20mi%20página%20web" target="_blank" rel="noopener noreferrer">Empezar ahora</a>
          </div>

          {/* Completa */}
          <div className="precio-card featured">
            <span className="pc-tag featured-tag">Más popular</span>
            <div className="pc-name" style={{ color: 'white' }}>Página Completa</div>
            <div className="pc-price">$5,500</div>
            <div className="pc-period">MXN · Pago único</div>
            <div className="pc-divider" />
            <div className="pc-features">
              {[
                [true, 'Todo lo del plan Esencial'],
                [true, 'Hasta 8 secciones de contenido'],
                [true, 'Galería (fotos a cargo del cliente)'],
                [true, 'Formulario que llega a WhatsApp'],
                [true, 'Meta tags SEO (título, descripción)'],
                [true, 'Enlace a Google Maps del negocio'],
                [true, 'Links a redes sociales'],
                [true, '2 rondas de ajustes'],
                [true, 'Entrega en 48 horas'],
              ].map(([si, text], i) => (
                <div className="pc-feat" key={i}>
                  <div className={`feat-dot ${si ? 'si' : 'no'}`}>{si ? checkIcon : crossIcon}</div>
                  {text}
                </div>
              ))}
            </div>
            <a className="pc-cta red" href="https://wa.me/5215530584253?text=Hola,%20quiero%20mi%20página%20web" target="_blank" rel="noopener noreferrer">Quiero esta</a>
          </div>

          {/* Mantenimiento */}
          <div className="precio-card">
            <span className="pc-tag plus">Mantenimiento</span>
            <div className="pc-name">Plan Mensual</div>
            <div className="pc-price">$500</div>
            <div className="pc-period">MXN · Mes a mes · Sin contrato</div>
            <div className="pc-divider" />
            <div className="pc-features">
              {[
                [true, 'Hasta 2 cambios de texto o imagen al mes'],
                [true, 'Respuesta en menos de 24 hrs hábiles'],
                [true, 'Soporte por WhatsApp'],
                [true, 'Gestión de renovación de dominio y hosting'],
                [true, 'Cancela cuando quieras'],
                [false, 'Secciones o diseño nuevo (se cotiza aparte)'],
              ].map(([si, text], i) => (
                <div className="pc-feat" key={i}>
                  <div className={`feat-dot ${si ? 'si' : 'no'}`}>{si ? checkIcon : crossIcon}</div>
                  {text}
                </div>
              ))}
            </div>
            <a className="pc-cta dark" href="https://wa.me/5215530584253?text=Hola,%20quiero%20mi%20página%20web" target="_blank" rel="noopener noreferrer">Agregar mantenimiento</a>
          </div>

        </div>
      </div>
    </section>
  )
}
