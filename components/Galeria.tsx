export default function Galeria() {
  return (
    <section className="galeria">
      <div className="gal-wrap">
        <div className="gal-header reveal">
          <div className="s-eyebrow">Trabajos recientes</div>
          <h2 className="s-h2">Cada negocio,<br />su propia <span className="red">identidad.</span></h2>
        </div>

        <div className="gal-grid reveal r-d1">
          <div className="gal-item gal-item-lg">
            <div className="gal-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&auto=format&fit=crop&q=80')" }}>
              <div className="gal-overlay" />
              <div className="gal-info">
                <div className="gal-cat">Restaurante</div>
                <div className="gal-name">El Rincón Mexicano</div>
                <div className="gal-meta">Cocina · CDMX · 2026</div>
              </div>
              <div className="gal-badge">Live ↗</div>
            </div>
          </div>
          <div className="gal-col-right">
            <div className="gal-item gal-item-sm">
              <div className="gal-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&auto=format&fit=crop&q=80')" }}>
                <div className="gal-overlay" />
                <div className="gal-info">
                  <div className="gal-cat">Barbería</div>
                  <div className="gal-name">Barbershop Norte</div>
                  <div className="gal-meta">Estética · GDL · 2026</div>
                </div>
                <div className="gal-badge">Live ↗</div>
              </div>
            </div>
            <div className="gal-item gal-item-sm">
              <div className="gal-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80')" }}>
                <div className="gal-overlay" />
                <div className="gal-info">
                  <div className="gal-cat">Herrería</div>
                  <div className="gal-name">Herrería Domínguez</div>
                  <div className="gal-meta">Servicios · MTY · 2026</div>
                </div>
                <div className="gal-badge">Live ↗</div>
              </div>
            </div>
          </div>
        </div>

        <div className="gal-grid-3 reveal r-d2">
          {[
            { img: 'photo-1556742049-0cfed4f6a45d', cat: 'Pastelería', name: 'Dulce y Punto', meta: 'Alimentos · CDMX · 2026' },
            { img: 'photo-1576091160550-2173dba999ef', cat: 'Dental', name: 'Dr. Reyes · Odontología', meta: 'Salud · Puebla · 2026' },
            { img: 'photo-1542744094-3a31f272c490', cat: 'Consultoría', name: 'Asesoría Fiscal Morales', meta: 'Profesional · GDL · 2026' },
          ].map((item) => (
            <div className="gal-item gal-item-md" key={item.name}>
              <div className="gal-img" style={{ backgroundImage: `url('https://images.unsplash.com/${item.img}?w=600&auto=format&fit=crop&q=80')` }}>
                <div className="gal-overlay" />
                <div className="gal-info">
                  <div className="gal-cat">{item.cat}</div>
                  <div className="gal-name">{item.name}</div>
                  <div className="gal-meta">{item.meta}</div>
                </div>
                <div className="gal-badge">Live ↗</div>
              </div>
            </div>
          ))}
        </div>

        <div className="gal-footer reveal">
          <a className="gal-cta" href="#contacto">Tu negocio podría estar aquí →</a>
        </div>
      </div>
    </section>
  )
}
