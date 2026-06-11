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
        background: 'var(--bg)',
        borderTop: '1px solid rgba(28,28,30,0.07)',
        borderBottom: '1px solid rgba(28,28,30,0.07)',
      }}
    >
      {/* Aurora blobs */}
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
          filter: blur(120px); opacity: .18;
        }
        .aurora-blob-1 {
          width: 640px; height: 640px;
          background: #d4f000;
          top: -15%; left: -8%;
          animation: auroraBlob1 24s infinite alternate ease-in-out;
        }
        .aurora-blob-2 {
          width: 520px; height: 520px;
          background: #AB0E67;
          bottom: -12%; right: -6%;
          animation: auroraBlob2 30s infinite alternate ease-in-out;
        }
        @keyframes auroraBlob1 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(90px,70px) scale(1.22); }
        }
        @keyframes auroraBlob2 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(-90px,-70px) scale(1.18); }
        }
        .aurora-card-hover:hover { background: rgba(28,28,30,0.025) !important; }
      `}</style>

      <div className="s-wrap" style={{ position: 'relative', zIndex: 1 }}>

        {/* Encabezado de sección */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div
            className="s-eyebrow"
            style={{ color: 'var(--acid)' }}
          >
            Inversión
          </div>
          <h2 className="s-h2 s-h2-light">
            Sin letras<br />
            <span className="red">chiquitas.</span>
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
              whileHover={{ y: -8, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              viewport={{ once: true }}
              className="aurora-card-hover"
              style={{
                position: 'relative',
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                background: plan.featured ? 'rgba(212,240,0,0.05)' : 'transparent',
                borderRight: i < 2 ? '1px solid rgba(28,28,30,0.07)' : 'none',
                borderTop: plan.featured ? '2px solid var(--acid)' : '2px solid transparent',
                transition: 'background 0.3s ease',
                overflow: 'hidden',
              }}
            >
              {/* Badge featured */}
              {plan.featured && (
                <span style={{
                  position: 'absolute', top: 0, right: 0,
                  background: 'var(--fg)',
                  color: 'var(--bg)',
                  fontFamily: 'var(--f-mono)',
                  fontSize: 8, fontWeight: 700,
                  letterSpacing: '.18em',
                  textTransform: 'uppercase',
                  padding: '5px 14px',
                }}>
                  Más popular
                </span>
              )}

              {/* Tag */}
              <span style={{
                display: 'inline-block',
                fontFamily: 'var(--f-mono)',
                fontSize: 9, letterSpacing: '.16em',
                textTransform: 'uppercase',
                marginBottom: 20,
                padding: '4px 10px',
                background: plan.featured ? 'rgba(212,240,0,0.1)' : 'transparent',
                border: `1px solid ${plan.featured ? 'rgba(28,28,30,0.18)' : 'rgba(28,28,30,0.1)'}`,
                color: plan.featured ? 'var(--fg)' : 'rgba(28,28,30,0.35)',
                fontWeight: plan.featured ? 600 : 400,
              }}>
                {plan.tag}
              </span>

              {/* Nombre */}
              <div style={{
                fontFamily: 'var(--f-display)',
                fontSize: 18, fontWeight: 600,
                color: 'var(--fg)',
                marginBottom: 20, lineHeight: 1.25,
              }}>
                {plan.name}
              </div>

              {/* Precio */}
              <div style={{
                fontFamily: 'var(--f-display)',
                fontSize: 52, fontWeight: 700,
                letterSpacing: '-.04em', lineHeight: 1,
                color: 'var(--fg)',
                marginBottom: 6,
              }}>
                {plan.price}
              </div>

              {/* Período */}
              <div style={{
                fontFamily: 'var(--f-mono)',
                fontSize: 8.5, letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'rgba(28,28,30,0.35)',
                marginBottom: 28,
              }}>
                {plan.period}
              </div>

              {/* Divider */}
              <div style={{
                height: 1,
                background: plan.featured
                  ? 'rgba(28,28,30,0.1)'
                  : 'rgba(28,28,30,0.06)',
                marginBottom: 28,
              }} />

              {/* Features */}
              <div style={{
                display: 'flex', flexDirection: 'column',
                gap: 11, flex: 1, marginBottom: 36,
              }}>
                {(plan.features as [boolean, string][]).map(([si, text], fi) => (
                  <div
                    key={fi}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: 9,
                      fontFamily: 'var(--f-body)',
                      fontSize: 13, lineHeight: 1.4,
                      color: si
                        ? 'rgba(28,28,30,0.7)'
                        : 'rgba(28,28,30,0.28)',
                    }}
                  >
                    {si
                      ? <Check
                          size={13}
                          strokeWidth={2.5}
                          style={{
                            color: plan.featured ? 'var(--fg)' : 'rgba(28,28,30,0.4)',
                            flexShrink: 0, marginTop: 2,
                          }}
                        />
                      : <X
                          size={13}
                          strokeWidth={2}
                          style={{ color: 'rgba(28,28,30,0.2)', flexShrink: 0, marginTop: 2 }}
                        />
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
                style={{
                  display: 'block', textAlign: 'center',
                  fontFamily: 'var(--f-display)',
                  fontSize: 12, fontWeight: 700,
                  letterSpacing: '.1em', textTransform: 'uppercase',
                  padding: '14px 24px',
                  textDecoration: 'none',
                  background: plan.featured ? 'var(--acid)' : 'transparent',
                  color: plan.featured ? 'var(--fg)' : 'rgba(28,28,30,0.55)',
                  border: plan.featured
                    ? '2px solid var(--acid)'
                    : '1px solid rgba(28,28,30,0.18)',
                  transition: 'all 0.22s ease',
                }}
                onMouseEnter={e => {
                  if (!plan.featured) {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--fg)'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg)'
                  }
                }}
                onMouseLeave={e => {
                  if (!plan.featured) {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(28,28,30,0.18)'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(28,28,30,0.55)'
                  }
                }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .aurora-precios-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          border: 1px solid rgba(28,28,30,0.07);
          margin-top: 0;
        }
        @media (max-width: 1024px) {
          .aurora-precios-grid { grid-template-columns: 1fr; }
          .aurora-precios-grid > div { border-right: none !important; border-bottom: 1px solid rgba(28,28,30,0.07); }
          .aurora-precios-grid > div:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  )
}
