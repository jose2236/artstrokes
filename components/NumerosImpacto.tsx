import { Fragment } from 'react'

const giros = [
  { label: 'Herrerías', accent: false },
  { label: 'Restaurantes', accent: true },
  { label: 'Salones de belleza', accent: false },
  { label: 'Dentistas', accent: false },
  { label: 'Talleres mecánicos', accent: true },
  { label: 'Despachos contables', accent: false },
  { label: 'Fotógrafos', accent: false },
  { label: 'Pastelerías', accent: true },
  { label: 'Nutriólogos', accent: false },
  { label: 'Abogados', accent: false },
]

const stats = [
  { target: 48,   prefix: '',  color: 'white',        label: 'horas de entrega',  sub: 'De brief a página live. Sin excusas.' },
  { target: 3500, prefix: '$', color: 'var(--acid)',   label: 'MXN · pago único',  sub: 'Sin suscripciones, sin letras chiquitas.' },
  { target: 0,    prefix: '$', color: 'white',         label: 'mensualidades',     sub: 'Tu página te pertenece. Para siempre.' },
]

export default function NumerosImpacto() {
  const doubled = [...giros, ...giros]
  return (
    <section style={{ background: 'var(--fg)', borderBottom: '2px solid var(--fg)', overflow: 'hidden' }}>
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', height: '44px', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', animation: 'marquee 20s linear infinite', whiteSpace: 'nowrap' }}>
          {doubled.map((g, i) => (
            <span
              key={i}
              style={{
                padding: '0 28px',
                borderRight: '1px solid rgba(255,255,255,0.08)',
                fontFamily: 'var(--f-mono)',
                fontSize: '10px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: g.accent ? 'var(--acid)' : 'rgba(255,255,255,0.3)',
              }}
            >
              {g.label}
            </span>
          ))}
        </div>
      </div>
      <div
        className="reveal"
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 56px', display: 'grid', gridTemplateColumns: '1fr 1px 1fr 1px 1fr', gap: 0 }}
      >
        {stats.map((s, i) => (
          <Fragment key={s.label}>
            <div style={{ padding: '80px 0', textAlign: 'center' }}>
              <div
                className="count-up"
                data-target={s.target}
                data-prefix={s.prefix}
                style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(64px,8vw,100px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, color: s.color }}
              >
                {s.prefix}{s.target}
              </div>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: '10px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: '8px' }}>{s.label}</div>
              <div style={{ fontFamily: 'var(--f-display)', fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.4)', marginTop: '6px', maxWidth: '180px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5 }}>{s.sub}</div>
            </div>
            {i < stats.length - 1 && <div style={{ background: 'rgba(255,255,255,0.06)' }} />}
          </Fragment>
        ))}
      </div>
    </section>
  )
}
