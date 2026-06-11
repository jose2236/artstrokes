'use client'

import { motion, type Variants } from 'framer-motion'
import { Check, X } from 'lucide-react'

const PLANS = [
  {
    tag: 'Esencial',
    name: 'Página Esencial',
    price: '$3,500',
    period: 'MXN · Pago único',
    featured: false,
    cta: 'Empezar ahora',
    features: [
      [true,  'Hasta 5 secciones de contenido'],
      [true,  'Diseño único para tu giro'],
      [true,  'Botón WhatsApp flotante'],
      [true,  'Responsive (móvil y escritorio)'],
      [true,  'Dominio + hosting 12 meses'],
      [true,  '1 ronda de ajustes incluida'],
      [true,  'Entrega en 48 horas'],
      [false, 'Galería de fotos'],
      [false, 'Formulario de contacto'],
    ],
  },
  {
    tag: 'Más popular',
    name: 'Página Completa',
    price: '$5,500',
    period: 'MXN · Pago único',
    featured: true,
    cta: 'Quiero esta',
    features: [
      [true, 'Todo lo del plan Esencial'],
      [true, 'Hasta 8 secciones de contenido'],
      [true, 'Galería (fotos a cargo del cliente)'],
      [true, 'Formulario que llega a WhatsApp'],
      [true, 'Meta tags SEO (título, descripción)'],
      [true, 'Enlace a Google Maps del negocio'],
      [true, 'Links a redes sociales'],
      [true, '2 rondas de ajustes'],
      [true, 'Entrega en 48 horas'],
    ],
  },
  {
    tag: 'Mantenimiento',
    name: 'Plan Mensual',
    price: '$500',
    period: 'MXN · Mes a mes · Sin contrato',
    featured: false,
    cta: 'Agregar mantenimiento',
    features: [
      [true,  'Hasta 2 cambios de texto o imagen al mes'],
      [true,  'Respuesta en menos de 24 hrs hábiles'],
      [true,  'Soporte por WhatsApp'],
      [true,  'Gestión de dominio y hosting'],
      [true,  'Cancela cuando quieras'],
      [false, 'Secciones o diseño nuevo (se cotiza aparte)'],
    ],
  },
]

const WA = 'https://wa.me/5215530584253?text=Hola,%20quiero%20mi%20página%20web'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13 + 0.18, duration: 0.62, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function AuroraPricing() {
  return (
    <section
      id="precios"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#ffffff',
      }}
    >
      {/* Aurora blobs — familia violeta/magenta únicamente */}
      <div aria-hidden className="aurora-pricing-bg">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
      </div>

      <style>{`
        .aurora-pricing-bg {
          position: absolute; inset: 0; z-index: 0;
          pointer-events: none; overflow: hidden;
        }
        .aurora-blob {
          position: absolute; border-radius: 50%;
          filter: blur(120px); opacity: 0;
        }
        .aurora-blob-1 {
          width: 600px; height: 600px;
          background: #AB0E67;
          top: -10%; left: -6%;
          animation: auroraBlob1 24s infinite alternate ease-in-out;
        }
        .aurora-blob-2 {
          width: 500px; height: 500px;
          background: #AB0E67;
          bottom: -10%; right: -5%;
          animation: auroraBlob2 30s infinite alternate ease-in-out;
        }
        @keyframes auroraBlob1 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(80px,60px) scale(1.2); }
        }
        @keyframes auroraBlob2 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(-80px,-60px) scale(1.18); }
        }
        .aurora-card-hover { transition: background 0.28s ease; }
        .aurora-card-hover:hover { background: #AB0E67 !important; }
        .aurora-card-hover:hover .ap-text-dark { color: white !important; }
        .aurora-card-hover:hover .ap-text-muted { color: rgba(255,255,255,0.55) !important; }
        .aurora-card-hover:hover .ap-text-light { color: rgba(0,0,0,0.7) !important; }
        .aurora-card-hover:hover .ap-border { border-color: rgba(255,255,255,0.2) !important; }
        .aurora-card-hover:hover .ap-divider { background: rgba(255,255,255,0.18) !important; }
        .aurora-card-hover:hover .ap-badge { background: white !important; color: #AB0E67 !important; border-color: white !important; }
        .aurora-card-hover:hover .ap-cta { background: white !important; color: #AB0E67 !important; border-color: white !important; }
        .aurora-card-hover:hover .ap-cta-featured { background: white !important; color: #AB0E67 !important; border-color: white !important; }
        .aurora-card-hover:hover .ap-tag { border-color: rgba(255,255,255,0.3) !important; color: rgba(255,255,255,0.6) !important; }
        .aurora-cta-btn { transition: background 0.22s ease, color 0.22s ease, border-color 0.22s ease; }
        .aurora-precios-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          border: 1px solid rgba(28,28,30,0.12);
          margin-top: 0;
        }
        @media (max-width: 1024px) {
          .aurora-precios-grid { grid-template-columns: 1fr; }
          .aurora-precios-grid > div { border-right: none !important; border-bottom: 1px solid rgba(28,28,30,0.12); }
          .aurora-precios-grid > div:last-child { border-bottom: none; }
        }
      `}</style>

      <div className="s-wrap" style={{ position: 'relative', zIndex: 1 }}>

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="s-eyebrow" style={{ color: 'rgba(28,28,30,0.5)' }}>
            Inversión
          </div>
          <h2 className="s-h2" style={{ color: 'var(--fg)' }}>
            Sin letras<br />
            <span style={{ color: 'var(--fg)' }}>chiquitas.</span>
          </h2>
        </motion.div>

        {/* Grid de cards */}
        <div className="aurora-precios-grid">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              viewport={{ once: true }}
              className="aurora-card-hover"
              style={{
                position: 'relative',
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                background: plan.featured ? 'rgba(28,28,30,0.08)' : 'transparent',
                borderRight: i < 2 ? '1px solid rgba(28,28,30,0.12)' : 'none',
                borderTop: '2px solid transparent',
                transition: 'background 0.3s ease',
                overflow: 'hidden',
              }}
            >
              {/* Badge featured */}
              {plan.featured && (
                <span className="ap-badge" style={{
                  position: 'absolute', top: 0, right: 0,
                  background: '#AB0E67',
                  color: 'white',
                  fontFamily: 'var(--f-mono)',
                  fontSize: 8, fontWeight: 700,
                  letterSpacing: '.18em',
                  textTransform: 'uppercase',
                  padding: '5px 14px',
                  transition: 'background 0.28s ease, color 0.28s ease',
                }}>
                  Más popular
                </span>
              )}

              {/* Tag */}
              <span className="ap-tag" style={{
                display: 'inline-block',
                fontFamily: 'var(--f-mono)',
                fontSize: 9, letterSpacing: '.16em',
                textTransform: 'uppercase',
                marginBottom: 20,
                padding: '4px 10px',
                background: 'transparent',
                border: `1px solid rgba(28,28,30,0.14)`,
                color: 'rgba(28,28,30,0.4)',
                fontWeight: 400,
                transition: 'border-color 0.28s ease, color 0.28s ease',
              }}>
                {plan.tag}
              </span>

              {/* Nombre */}
              <div className="ap-text-dark" style={{
                fontFamily: 'var(--f-display)',
                fontSize: 18, fontWeight: 600,
                color: 'var(--fg)',
                marginBottom: 20, lineHeight: 1.25,
                transition: 'color 0.28s ease',
              }}>
                {plan.name}
              </div>

              {/* Precio */}
              <div className="ap-text-dark" style={{
                fontFamily: 'var(--f-display)',
                fontSize: 52, fontWeight: 700,
                letterSpacing: '-.04em', lineHeight: 1,
                color: 'var(--fg)',
                marginBottom: 6,
                transition: 'color 0.28s ease',
              }}>
                {plan.price}
              </div>

              {/* Período */}
              <div className="ap-text-muted" style={{
                fontFamily: 'var(--f-mono)',
                fontSize: 8.5, letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'rgba(28,28,30,0.4)',
                marginBottom: 28,
                transition: 'color 0.28s ease',
              }}>
                {plan.period}
              </div>

              {/* Divider */}
              <div className="ap-divider" style={{
                height: 1,
                background: 'rgba(28,28,30,0.09)',
                marginBottom: 28,
                transition: 'background 0.28s ease',
              }} />

              {/* Features */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11, flex: 1, marginBottom: 36 }}>
                {(plan.features as [boolean, string][]).map(([si, text], fi) => (
                  <div
                    key={fi}
                    className={si ? 'ap-text-dark' : 'ap-text-muted'}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: 9,
                      fontFamily: 'var(--f-body)',
                      fontSize: 13, lineHeight: 1.4,
                      color: si ? 'rgba(28,28,30,0.75)' : 'rgba(28,28,30,0.28)',
                      transition: 'color 0.28s ease',
                    }}
                  >
                    {si
                      ? <Check size={13} strokeWidth={2.5} className="ap-text-dark"
                          style={{ color: 'rgba(28,28,30,0.45)', flexShrink: 0, marginTop: 2, transition: 'color 0.28s ease' }} />
                      : <X size={13} strokeWidth={2} className="ap-text-muted"
                          style={{ color: 'rgba(28,28,30,0.18)', flexShrink: 0, marginTop: 2, transition: 'color 0.28s ease' }} />
                    }
                    {text}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className={plan.featured ? 'ap-cta-featured' : 'ap-cta aurora-cta-btn'}
                style={{
                  display: 'block', textAlign: 'center',
                  fontFamily: 'var(--f-display)',
                  fontSize: 12, fontWeight: 700,
                  letterSpacing: '.1em', textTransform: 'uppercase',
                  padding: '14px 24px',
                  textDecoration: 'none',
                  background: plan.featured ? '#AB0E67' : 'transparent',
                  color: plan.featured ? 'white' : 'rgba(28,28,30,0.55)',
                  border: `1px solid ${plan.featured ? '#AB0E67' : 'rgba(28,28,30,0.2)'}`,
                  transition: 'background 0.28s ease, color 0.28s ease, border-color 0.28s ease',
                }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
