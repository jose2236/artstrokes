const items = [
  {
    num: '01',
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    title: 'Servicios del hogar',
    tags: ['Herrerías', 'Soldaduras', 'Plomeros', 'Electricistas', 'Carpinterías', 'Talleres mecánicos', 'Pintura', 'Remodelación'],
  },
  {
    num: '02',
    icon: <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>,
    title: 'Salud y bienestar',
    tags: ['Dentistas', 'Médicos', 'Salones de belleza', 'Barberías', 'Nutriólogos', 'Psicólogos'],
  },
  {
    num: '03',
    icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
    title: 'Profesionales independientes',
    tags: ['Contadores', 'Abogados', 'Arquitectos', 'Consultores', 'Fotógrafos', 'Diseñadores'],
    delay: 'r-d1',
  },
  {
    num: '04',
    icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></>,
    title: 'Alimentos y eventos',
    tags: ['Pastelerías', 'Caterings', 'Restaurantes', 'Eventos', 'Locutores', 'Fotógrafos de bodas'],
    delay: 'r-d1',
  },
]

export default function Nichos() {
  return (
    <section className="nichos" id="nichos">
      <div className="s-wrap">
        <div className="reveal">
          <div className="s-eyebrow">¿Para quién?</div>
          <h2 className="s-h2">Tu negocio<br />merece una<br /><span className="red">página seria.</span></h2>
        </div>
        <div className="nichos-editorial">
          {items.map((item, i) => (
            <div className={`ne-item reveal${item.delay ? ` ${item.delay}` : i % 2 === 1 ? ' r-d1' : i % 3 === 2 ? ' r-d2' : ''}`} key={item.num}>
              <div className="ne-left">
                <span className="ne-num">{item.num}</span>
                <div className="ne-icon">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24">{item.icon}</svg>
                </div>
              </div>
              <div className="ne-body">
                <h3 className="ne-title">{item.title}</h3>
                <div className="ne-tags">
                  {item.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="ne-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
