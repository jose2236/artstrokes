const rows = [
  { num: '01', tag: 'Velocidad', title: '48 horas. No semanas.', desc: 'Mientras la agencia te manda el contrato, tu página ya está live. Brief hoy, página mañana. Sin esperas, sin procesos infinitos.', icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></> },
  { num: '02', tag: 'Identidad', title: 'No es una plantilla genérica.', desc: 'Cada página es diseñada para tu negocio, tu giro, tus colores y tu cliente. La herrería no parece la peluquería. Nunca.', icon: <><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></> },
  { num: '03', tag: 'Precio justo', title: '$3,500 MXN. Pago único.', desc: 'Sin suscripciones, sin mensualidades, sin sorpresas. El dominio y el hosting están incluidos el primer año. Sin letras chiquitas.', icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></> },
  { num: '04', tag: 'Responsive', title: 'Mobile-first. Siempre.', desc: 'El 89% de tus clientes te buscan desde el celular. Tu página se ve perfecta en cualquier pantalla, sin excepciones.', icon: <><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></> },
  { num: '05', tag: 'Conversión', title: 'WhatsApp flotante siempre.', desc: 'Un botón de WhatsApp visible en todo momento para que tu cliente te escriba con un toque. Sin formularios complicados.', icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></> },
  { num: '06', tag: 'Visibilidad', title: 'Google te encuentra.', desc: 'Tu Facebook no aparece en Google. Tu página sí. Dominio propio, SEO básico configurado desde el día uno.', icon: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></> },
]

export default function Disciplinas() {
  return (
    <section className="disciplinas" id="valor">
      <div className="s-wrap">
        <div className="disc-header reveal">
          <div className="s-eyebrow">Por qué Artstrokes</div>
          <h2 className="s-h2 s-h2-light">No es magia.<br />Son <span className="red">48 horas</span><br />y $3,500 pesos.</h2>
        </div>
        <div className="disc-list">
          {rows.map((r, i) => (
            <div className={`disc-row reveal${i % 2 === 1 ? ' r-d1' : i % 3 === 2 ? ' r-d2' : ''}`} key={r.num}>
              <div className="disc-row-left">
                <span className="disc-row-num">{r.num}</span>
                <div className="disc-row-icon">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24">{r.icon}</svg>
                </div>
              </div>
              <div className="disc-row-body">
                <h3 className="disc-row-title">{r.title}</h3>
                <p className="disc-row-desc">{r.desc}</p>
              </div>
              <div className="disc-row-tag">{r.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
