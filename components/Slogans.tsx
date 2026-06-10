const items = [
  'Lunes cotizas',
  'Miércoles ya tienes página',
  '$3,500 pesos. Todo incluido.',
  'No es magia. Son 48 horas.',
  'No genérica. Es tu marca.',
  'Mientras la agencia cotiza, tú ya estás live',
  'Tu competencia ya tiene página',
]

export default function Slogans() {
  const doubled = [...items, ...items]
  return (
    <section className="slogans">
      <div className="s-wrap" style={{ paddingBottom: 0 }}>
        <div className="reveal">
          <div className="s-eyebrow red">Lo que decimos</div>
          <h2 className="s-h2">Directo.<br />Sin rodeos.</h2>
        </div>
      </div>
      <div className="slogan-track">
        <div className="slogan-scroll">
          {doubled.map((item, i) => (
            <div className="slogan-item" key={i}>
              {item} <span className="bullet" />
            </div>
          ))}
        </div>
      </div>
      <div className="slogan-big reveal">
        <p className="slogan-big-text">
          ¿Cuántos clientes <span className="red">perdiste</span><br />
          esta semana porque<br />
          <span className="muted">no te encuentran?</span>
        </p>
      </div>
    </section>
  )
}
