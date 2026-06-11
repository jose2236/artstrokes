'use client'

import { useState } from 'react'
import { UtensilsCrossed, Scissors, Smile, Cake, Hammer, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const GIROS: { id: string; Icon: LucideIcon; name: string; tag: string }[] = [
  { id: 'restaurante', Icon: UtensilsCrossed, name: 'Restaurante', tag: 'Gastronomía' },
  { id: 'barberia',    Icon: Scissors,        name: 'Barbería',    tag: 'Estética' },
  { id: 'dentista',   Icon: Smile,           name: 'Dentista',    tag: 'Salud' },
  { id: 'pasteleria', Icon: Cake,            name: 'Pastelería',  tag: 'Alimentos' },
  { id: 'herreria',   Icon: Hammer,          name: 'Herrería',    tag: 'Servicios' },
  { id: 'taller',     Icon: Wrench,          name: 'Taller Mec.', tag: 'Automotriz' },
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
            {GIROS.map((g) => {
              const isActive = active === g.id
              return (
                <button
                  key={g.id}
                  className={`giro-btn${isActive ? ' active' : ''}`}
                  onClick={() => setActive(g.id)}
                >
                  <span className="giro-icon">
                    <g.Icon
                      size={18}
                      strokeWidth={1.8}
                      style={{
                        color: isActive ? 'var(--acid)' : 'rgba(28,28,30,0.3)',
                        transition: 'color 0.22s ease',
                      }}
                    />
                  </span>
                  <div>
                    <div className="giro-name">{g.name}</div>
                    <div className="giro-tag">{g.tag}</div>
                  </div>
                </button>
              )
            })}
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
                  <div className="sr-hero-bg" style={{backgroundImage:"linear-gradient(to bottom,rgba(15,12,9,0) 0%,rgba(15,12,9,.06) 38%,rgba(15,12,9,.86) 72%,rgba(15,12,9,.99) 100%),url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=85')"}} />
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
                  <div className="sb-hero-bg" style={{backgroundImage:"linear-gradient(to bottom,rgba(10,10,10,0) 0%,rgba(10,10,10,.06) 32%,rgba(10,10,10,.84) 68%,rgba(10,10,10,.99) 100%),url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=85')"}} />
                  <div className="sb-hero-body"><div className="sb-eyebrow">Barbería premium · GDL · Est. 2018</div><div className="sb-hl">El corte que <span>define.</span></div><div className="sb-btns"><div className="sb-btn-p">Reservar turno</div><div className="sb-btn-s">Ver servicios</div></div></div>
                </div>
                <div className="sb-svcs"><div className="sb-svcs-ttl">Servicios</div><div className="sb-row"><span className="sb-sname">Corte clásico</span><span className="sb-stime">45 min</span><span className="sb-sprice">$180</span></div><div className="sb-row"><span className="sb-sname">Fade + barba</span><span className="sb-stime">60 min</span><span className="sb-sprice">$250</span></div><div className="sb-row"><span className="sb-sname">Afeitado con navaja</span><span className="sb-stime">30 min</span><span className="sb-sprice">$150</span></div></div>
              </div>

              {/* Dentista */}
              <div className={`sel-screen${active === 'dentista' ? ' active' : ''}`} id="sel-dentista">
                <div className="sd-nav"><div className="sd-brand">Dr. Reyes · Odontología</div><div className="sd-cta">Cita en línea</div></div>
                <div className="sd-hero"><div className="sd-hero-txt"><div className="sd-tag">Puebla · 15 años de experiencia</div><div className="sd-hl">Tu sonrisa,<br /><em>nuestra pasión.</em></div><div className="sd-sub">Tratamientos con tecnología de vanguardia.</div><div className="sd-btn">Agendar consulta</div></div><div className="sd-hero-img" style={{backgroundImage:"url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=85')"}} /></div>
                <div className="sd-svcs"><div className="sd-svcs-ttl">Tratamientos</div><div className="sd-grid"><div className="sd-card"><div className="sd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C9 2 6 4.5 6 8c0 2.5.8 4.2 1.5 5.5.7 1.2 1 2.5.8 4L8 20c-.2 1.2.5 2 1.5 2s1.5-.8 2.5-.8 1.5.8 2.5.8 1.7-.8 1.5-2l-.3-2.5c-.2-1.5.1-2.8.8-4C17.2 12.2 18 10.5 18 8c0-3.5-3-6-6-6z"/></svg></div><div className="sd-sname">Limpieza</div><div className="sd-sprice">desde $600</div></div><div className="sd-card"><div className="sd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v1M18.36 5.64l-.7.7M21 12h-1M18.36 18.36l-.7-.7M12 20v1M5.64 18.36l.7-.7M3 12h1M5.64 5.64l.7.7"/><circle cx="12" cy="12" r="4"/></svg></div><div className="sd-sname">Blanqueamiento</div><div className="sd-sprice">desde $1,800</div></div><div className="sd-card"><div className="sd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="8" rx="1"/><path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><line x1="9" y1="12" x2="9" y2="14"/><line x1="12" y1="12" x2="12" y2="14"/><line x1="15" y1="12" x2="15" y2="14"/></svg></div><div className="sd-sname">Ortodoncia</div><div className="sd-sprice">desde $8,000</div></div></div></div>
              </div>

              {/* Pastelería */}
              <div className={`sel-screen${active === 'pasteleria' ? ' active' : ''}`} id="sel-pasteleria">
                <div className="sp-nav"><div className="sp-brand"><em>Dulce y Punto</em><span className="sp-dot">·</span></div><div className="sp-cta">Pedir ahora</div></div>
                <div className="sp-hero"><div className="sp-hero-bg" style={{backgroundImage:"linear-gradient(to bottom,rgba(61,31,14,0) 0%,rgba(61,31,14,.06) 38%,rgba(61,31,14,.88) 72%,rgba(61,31,14,.97) 100%),url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=85')"}} /><div className="sp-hero-body"><div className="sp-eyebrow">Repostería artesanal · CDMX · 2020</div><div className="sp-hl">Hecho con <em>amor.</em></div><div className="sp-btn">Ver catálogo completo</div></div></div>
                <div className="sp-menu"><div className="sp-menu-ttl">Especialidades</div><div className="sp-item"><div><div className="sp-iname">Pastel de tres leches</div><div className="sp-idesc">Vainilla, cajeta, betún de nata</div></div><div className="sp-iprice">$380</div></div><div className="sp-item"><div><div className="sp-iname">Cheesecake de guayaba</div><div className="sp-idesc">Queso philadelphia, base de galleta</div></div><div className="sp-iprice">$320</div></div><div className="sp-item sp-item-last"><div><div className="sp-iname">Rol de canela artesanal</div><div className="sp-idesc">Masa brioche, glaseado de queso</div></div><div className="sp-iprice">$45 c/u</div></div></div>
              </div>

              {/* Herrería */}
              <div className={`sel-screen${active === 'herreria' ? ' active' : ''}`} id="sel-herreria">
                <div className="sh2-nav"><div className="sh2-brand">HERRERÍA<span className="sh2-accent"> D.</span></div><div className="sh2-cta">Cotizar</div></div>
                <div className="sh2-hero"><div className="sh2-hero-bg" style={{backgroundImage:"linear-gradient(to bottom,rgba(17,18,16,0) 0%,rgba(17,18,16,.06) 36%,rgba(17,18,16,.86) 70%,rgba(17,18,16,.98) 100%),url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85')"}} /><div className="sh2-hero-body"><div className="sh2-eyebrow">Herrería artesanal · MTY · 30 años</div><div className="sh2-hl">Forjado para <span>durar.</span></div><div className="sh2-btn">Solicitar cotización</div></div></div>
                <div className="sh2-works"><div className="sh2-works-ttl">Trabajos recientes</div><div className="sh2-grid"><div className="sh2-card"><div className="sh2-cat">Portones</div><div className="sh2-name">Minimalista negro</div></div><div className="sh2-card"><div className="sh2-cat">Escaleras</div><div className="sh2-name">Herraje forjado</div></div><div className="sh2-card"><div className="sh2-cat">Pérgolas</div><div className="sh2-name">Acero industrial</div></div></div></div>
              </div>

              {/* Taller */}
              <div className={`sel-screen${active === 'taller' ? ' active' : ''}`} id="sel-taller">
                <div className="st-nav"><div className="st-brand">TALLER <span className="st-red">REY</span></div><div className="st-cta">Diagnóstico gratis</div></div>
                <div className="st-hero"><div className="st-hero-bg" style={{backgroundImage:"linear-gradient(to bottom,rgba(13,17,23,0) 0%,rgba(13,17,23,.05) 32%,rgba(13,17,23,.82) 66%,rgba(13,17,23,.99) 100%),url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=85')"}} /><div className="st-hero-body"><div className="st-eyebrow">Mecánica automotriz · GDL · Desde 2005</div><div className="st-hl">Tu auto, en manos <span>expertas.</span></div><div className="st-btns"><div className="st-btn-p">Agendar revisión</div><div className="st-btn-s">Ver servicios</div></div></div></div>
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
