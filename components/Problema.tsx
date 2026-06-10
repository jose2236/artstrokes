export default function Problema() {
  return (
    <section className="problema" id="problema">
      <div className="s-wrap">
        <div className="problema-header reveal">
          <div className="s-eyebrow red">El problema</div>
        </div>
        <div className="problema-statement reveal r-d1">
          <h2 className="problema-h2">
            Tu competencia<br />
            ya tiene <span className="red">página.</span><br />
            <span className="muted">Tú todavía no.</span>
          </h2>
        </div>
        <div className="problema-body reveal r-d2">
          <div className="problema-quote">
            "Mientras la agencia te manda el contrato,<br />tu página ya está live."
          </div>
          <p className="problema-lead">
            Las agencias cobran entre <strong>$8,000 y $150,000 MXN</strong> y tardan semanas.<br />
            Los freelancers desaparecen a la mitad del proyecto.<br />
            Wix y Squarespace son suscripciones que nunca terminan.
          </p>
        </div>
      </div>
    </section>
  )
}
