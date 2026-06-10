'use client'

import { useState } from 'react'

const GIROS = [
  { id: 'restaurante', icon: '🍽', name: 'Restaurante', tag: 'Gastronomía' },
  { id: 'barberia',    icon: '✂️', name: 'Barbería',    tag: 'Estética' },
  { id: 'dentista',   icon: '🦷', name: 'Dentista',    tag: 'Salud' },
  { id: 'pasteleria', icon: '🎂', name: 'Pastelería',  tag: 'Alimentos' },
  { id: 'herreria',   icon: '⚒️', name: 'Herrería',    tag: 'Servicios' },
  { id: 'taller',     icon: '🔧', name: 'Taller Mec.', tag: 'Automotriz' },
]

export default function SelectorGiro() {
  const [active, setActive] = useState('restaurante')

  return (
    <section className="selector-section" id="selector">
      <div className="sel-wrap">

        <div className="sel-heading reveal">
          <div className="s-eyebrow red">Elige tu giro</div>
          <h2 className="s-h2">Así quedará<br />tu <span className="red">página.</span></h2>
          <p className="sel-sub">Cada negocio tiene su propia identidad. Selecciona tu giro y mira en tiempo real cómo se vería tu página hecha por Artstrokes.</p>
        </div>

        <div className="sel-left reveal">
          <div className="giros-grid">
            {GIROS.map((g) => (
              <button
                key={g.id}
                className={`giro-btn${active === g.id ? ' active' : ''}`}
                onClick={() => setActive(g.id)}
              >
                <span className="giro-icon">{g.icon}</span>
                <div>
                  <div className="giro-name">{g.name}</div>
                  <div className="giro-tag">{g.tag}</div>
                </div>
              </button>
            ))}
          </div>
          <a className="sel-cta" href="#contacto">
            Quiero esta para mi negocio <span className="sel-cta-arrow">→</span>
          </a>
        </div>

        <div className="sel-right reveal r-d2">
          <div className="sel-browser">
            <div className="sel-viewport">

              {/* Restaurante */}
              <div className={`sel-screen${active === 'restaurante' ? ' active' : ''}`} id="sel-restaurante">
                <div className="sr-nav">
                  <div><div className="sr-brand">El Rincón Mexicano</div><div className="sr-subtag">Ciudad de México · Est. 1987</div></div>
                  <div className="sr-cta-btn">Reservar</div>
                </div>
                <div className="sr-hero">
                  <div className="sr-hero-bg" style={{backgroundImage:"linear-gradient(160deg,rgba(15,12,9,.08) 0%,rgba(15,12,9,.4) 45%,rgba(15,12,9,.93) 100%),url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80')"}} />
                  <div className="sr-hero-body">
                    <div className="sr-eyebrow">Cocina mexicana de autor · Verano</div>
                    <div className="sr-hl">Tradición que <em>perdura.</em></div>
                    <div className="sr-btn">Hacer una reservación</div>
                  </div>
                </div>
                <div className="sr-carta">
                  <div className="sr-carta-hd"><span className="sr-carta-ttl">Carta del chef</span><span className="sr-carta-sea">Verano 2026</span></div>
                  <div className="sr-plato"><div><div className="sr-pname">Mole negro · pechuga de pato</div><div className="sr-pdesc">Chiles mulato, chipotle, almendra</div></div><div className="sr-pprice">$485</div></div>
                  <div className="sr-plato"><div><div className="sr-pname">Caldo tlalpeño · garbanzo</div><div className="sr-pdesc">Chipotle, epazote, aguacate</div></div><div className="sr-pprice">$220</div></div>
                  <div className="sr-plato sr-plato-last"><div><div className="sr-pname">Buñuelos · piloncillo · guayaba</div><div className="sr-pdesc">Postre de temporada</div></div><div className="sr-pprice">$180</div></div>
                </div>
              </div>

              {/* Barbería */}
              <div className={`sel-screen${active === 'barberia' ? ' active' : ''}`} id="sel-barberia">
                <div className="sb-nav"><div className="sb-brand">NORTE<span className="sb-dot">.</span>BARBERSHOP</div><div className="sb-cta">Reservar</div></div>
                <div className="sb-hero">
                  <div className="sb-hero-bg" style={{backgroundImage:"linear-gradient(to bottom,rgba(10,10,10,.1) 0%,rgba(10,10,10,.6) 60%,rgba(10,10,10,.97) 100%),url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80')"}} />
                  <div className="sb-hero-body"><div className="sb-eyebrow">Barbería premium · GDL · Est. 2018</div><div className="sb-hl">El corte que <span>define.</span></div><div className="sb-btns"><div className="sb-btn-p">Reservar turno</div><div className="sb-btn-s">Ver servicios</div></div></div>
                </div>
                <div className="sb-svcs"><div className="sb-svcs-ttl">Servicios</div><div className="sb-row"><span className="sb-sname">Corte clásico</span><span className="sb-stime">45 min</span><span className="sb-sprice">$180</span></div><div className="sb-row"><span className="sb-sname">Fade + barba</span><span className="sb-stime">60 min</span><span className="sb-sprice">$250</span></div><div className="sb-row"><span className="sb-sname">Afeitado con navaja</span><span className="sb-stime">30 min</span><span className="sb-sprice">$150</span></div></div>
              </div>

              {/* Dentista */}
              <div className={`sel-screen${active === 'dentista' ? ' active' : ''}`} id="sel-dentista">
                <div className="sd-nav"><div className="sd-brand">Dr. Reyes · Odontología</div><div className="sd-cta">Cita en línea</div></div>
                <div className="sd-hero"><div className="sd-hero-txt"><div className="sd-tag">Puebla · 15 años de experiencia</div><div className="sd-hl">Tu sonrisa,<br /><em>nuestra pasión.</em></div><div className="sd-sub">Tratamientos con tecnología de vanguardia.</div><div className="sd-btn">Agendar consulta</div></div><div className="sd-hero-img" style={{backgroundImage:"url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80')"}} /></div>
                <div className="sd-svcs"><div className="sd-svcs-ttl">Tratamientos</div><div className="sd-grid"><div className="sd-card"><div className="sd-icon">🦷</div><div className="sd-sname">Limpieza</div><div className="sd-sprice">desde $600</div></div><div className="sd-card"><div className="sd-icon">✨</div><div className="sd-sname">Blanqueamiento</div><div className="sd-sprice">desde $1,800</div></div><div className="sd-card"><div className="sd-icon">🔲</div><div className="sd-sname">Ortodoncia</div><div className="sd-sprice">desde $8,000</div></div></div></div>
              </div>

              {/* Pastelería */}
              <div className={`sel-screen${active === 'pasteleria' ? ' active' : ''}`} id="sel-pasteleria">
                <div className="sp-nav"><div className="sp-brand"><em>Dulce y Punto</em><span className="sp-dot">·</span></div><div className="sp-cta">Pedir ahora</div></div>
                <div className="sp-hero"><div className="sp-hero-bg" style={{backgroundImage:"linear-gradient(to bottom,rgba(61,31,14,.05) 0%,rgba(61,31,14,.35) 55%,rgba(61,31,14,.88) 100%),url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80')"}} /><div className="sp-hero-body"><div className="sp-eyebrow">Repostería artesanal · CDMX · 2020</div><div className="sp-hl">Hecho con <em>amor.</em></div><div className="sp-btn">Ver catálogo completo</div></div></div>
                <div className="sp-menu"><div className="sp-menu-ttl">Especialidades</div><div className="sp-item"><div><div className="sp-iname">Pastel de tres leches</div><div className="sp-idesc">Vainilla, cajeta, betún de nata</div></div><div className="sp-iprice">$380</div></div><div className="sp-item"><div><div className="sp-iname">Cheesecake de guayaba</div><div className="sp-idesc">Queso philadelphia, base de galleta</div></div><div className="sp-iprice">$320</div></div><div className="sp-item sp-item-last"><div><div className="sp-iname">Rol de canela artesanal</div><div className="sp-idesc">Masa brioche, glaseado de queso</div></div><div className="sp-iprice">$45 c/u</div></div></div>
              </div>

              {/* Herrería */}
              <div className={`sel-screen${active === 'herreria' ? ' active' : ''}`} id="sel-herreria">
                <div className="sh2-nav"><div className="sh2-brand">HERRERÍA<span className="sh2-accent"> D.</span></div><div className="sh2-cta">Cotizar</div></div>
                <div className="sh2-hero"><div className="sh2-hero-bg" style={{backgroundImage:"linear-gradient(160deg,rgba(17,18,16,.1) 0%,rgba(17,18,16,.5) 50%,rgba(17,18,16,.94) 100%),url('https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80')"}} /><div className="sh2-hero-body"><div className="sh2-eyebrow">Herrería artesanal · MTY · 30 años</div><div className="sh2-hl">Forjado para <span>durar.</span></div><div className="sh2-btn">Solicitar cotización</div></div></div>
                <div className="sh2-works"><div className="sh2-works-ttl">Trabajos recientes</div><div className="sh2-grid"><div className="sh2-card"><div className="sh2-cat">Portones</div><div className="sh2-name">Minimalista negro</div></div><div className="sh2-card"><div className="sh2-cat">Escaleras</div><div className="sh2-name">Herraje forjado</div></div><div className="sh2-card"><div className="sh2-cat">Pérgolas</div><div className="sh2-name">Acero industrial</div></div></div></div>
              </div>

              {/* Taller */}
              <div className={`sel-screen${active === 'taller' ? ' active' : ''}`} id="sel-taller">
                <div className="st-nav"><div className="st-brand">TALLER <span className="st-red">REY</span></div><div className="st-cta">Diagnóstico gratis</div></div>
                <div className="st-hero"><div className="st-hero-bg" style={{backgroundImage:"linear-gradient(to bottom,rgba(13,17,23,.2) 0%,rgba(13,17,23,.55) 55%,rgba(13,17,23,.97) 100%),url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80')"}} /><div className="st-hero-body"><div className="st-eyebrow">Mecánica automotriz · GDL · Desde 2005</div><div className="st-hl">Tu auto, en manos <span>expertas.</span></div><div className="st-btns"><div className="st-btn-p">Agendar revisión</div><div className="st-btn-s">Ver servicios</div></div></div></div>
                <div className="st-svcs"><div className="st-svcs-ttl">Servicios</div><div className="st-svc-list"><div className="st-row"><span className="st-num">01</span><div className="st-line" /><span className="st-sname">Afinación completa</span><span className="st-stime">2-3 hrs</span></div><div className="st-row"><span className="st-num">02</span><div className="st-line" /><span className="st-sname">Frenos y suspensión</span><span className="st-stime">1-2 hrs</span></div><div className="st-row"><span className="st-num">03</span><div className="st-line" /><span className="st-sname">Cambio de aceite</span><span className="st-stime">30 min</span></div></div></div>
              </div>

            </div>
          </div>

          <div className="sel-indicator">
            <div className="sel-ind-dot" />
            <span className="sel-ind-label">Viendo:</span>
            <span className="sel-ind-name">{GIROS.find(g => g.id === active)?.name}</span>
          </div>
        </div>

      </div>
    </section>
  )
}
