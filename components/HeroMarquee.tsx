const items = [
  { label: 'Lunes cotizas', accent: 'Miércoles live' },
  { label: '$3,500 MXN', accent: 'Todo incluido' },
  { label: '48 horas', accent: 'No semanas' },
  { label: 'No es una plantilla', accent: 'Es tu marca' },
  { label: 'Hecha para ti', accent: 'No genérica' },
  { label: 'Sin WordPress', accent: 'Sin plugins' },
]

export default function HeroMarquee() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-wrap" style={{ marginTop: '56px' }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="m-item" key={i}>
            {item.label}
            <span className="sep">·</span>
            <span className="white">{item.accent}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
