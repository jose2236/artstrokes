export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">ART<span className="dot">.</span>STROKES</div>
      <ul className="footer-links">
        <li><a href="#problema">El problema</a></li>
        <li><a href="#proceso">Proceso</a></li>
        <li><a href="#precios">Precios</a></li>
        <li><a href="#nichos">¿Para quién?</a></li>
      </ul>
      <div className="footer-copy">© {new Date().getFullYear()} Artstrokes · México</div>
    </footer>
  )
}
