export default function Nav() {
  return (
    <nav>
      <div className="nav-brand">
        ART<span className="dot">.</span>STROKES
      </div>
      <ul className="nav-links">
        <li><a href="#problema">El problema</a></li>
        <li><a href="#proceso">Proceso</a></li>
        <li><a href="#precios">Precios</a></li>
        <li><a href="#nichos">¿Para quién?</a></li>
      </ul>
      <a className="nav-cta" href="#contacto">Quiero mi página</a>
    </nav>
  )
}
