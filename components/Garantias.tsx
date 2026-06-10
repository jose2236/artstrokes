const items = [
  {
    num: '01', tag: 'Puntualidad',
    icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
    title: '48 horas o te avisamos',
    desc: 'Si hay algún problema que retrase la entrega, te avisamos antes de que se cumpla el plazo. Nunca desaparecemos.',
  },
  {
    num: '02', tag: 'Propiedad',
    icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
    title: 'El dominio es tuyo',
    desc: 'Lo registramos a tu nombre, no al nuestro. Tu página te pertenece desde el día uno y nadie te la puede quitar.',
    delay: 'r-d1',
  },
  {
    num: '03', tag: 'Calidad',
    icon: <><path d="M20 6L9 17l-5-5"/></>,
    title: '1 ronda de ajustes incluida',
    desc: 'No te entregamos algo que no te guste. Tienes una ronda completa de ajustes antes de que la página salga al aire.',
    delay: 'r-d2',
  },
  {
    num: '04', tag: 'Soporte',
    icon: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11 19.79 19.79 0 0 1 1.62 2.37 2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.08 6.08l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></>,
    title: 'Respondemos el mismo día',
    desc: 'Nada de tickets ni formularios de soporte. Nos escribes por WhatsApp y respondemos. Así de simple.',
    delay: 'r-d1',
  },
]

export default function Garantias() {
  return (
    <section className="garantias">
      <div className="s-wrap">
        <div className="reveal">
          <div className="s-eyebrow">Lo que prometemos</div>
          <h2 className="s-h2 s-h2-light">Sin excusas.<br />Sin <span className="red">pretextos.</span></h2>
        </div>
        <div className="gar-list">
          {items.map((item) => (
            <div className={`gar-item reveal${item.delay ? ` ${item.delay}` : ''}`} key={item.num}>
              <div className="gar-left">
                <span className="gar-num">{item.num}</span>
                <div className="gar-icon">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24">{item.icon}</svg>
                </div>
              </div>
              <div className="gar-body">
                <h3 className="gar-title">{item.title}</h3>
                <p className="gar-desc">{item.desc}</p>
              </div>
              <div className="gar-tag">{item.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
