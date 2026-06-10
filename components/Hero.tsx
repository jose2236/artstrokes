'use client'

import { useRef, useEffect, useCallback } from 'react'

export default function Hero() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const sliderBtnRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const nudgeDone = useRef(false)

  const applyPos = useCallback((pct: number) => {
    const vp = viewportRef.current
    const btn = sliderBtnRef.current
    if (!vp || !btn) return
    pct = Math.max(6, Math.min(94, pct))
    const val = `${pct}%`
    vp.style.setProperty('--hw-slider', val)
    const phaseBad = vp.querySelector<HTMLElement>('.hw-phase-bad')
    const phaseGood = vp.querySelector<HTMLElement>('.hw-phase-good')
    const track = vp.querySelector<HTMLElement>('.hw-slider-track')
    const urlBad = vp.querySelector<HTMLElement>('.hw-url-bad')
    const urlGood = vp.querySelector<HTMLElement>('.hw-url-good')
    if (phaseBad) phaseBad.style.clipPath = `inset(0 ${100 - pct}% 0 0)`
    if (phaseGood) phaseGood.style.clipPath = `inset(0 0 0 ${pct}%)`
    if (track) track.style.left = val
    btn.style.left = val
    if (urlBad && urlGood) {
      urlBad.style.opacity = pct >= 50 ? '0' : '1'
      urlGood.style.opacity = pct >= 50 ? '1' : '0'
    }
  }, [])

  useEffect(() => {
    const btn = sliderBtnRef.current
    const vp = viewportRef.current
    if (!btn || !vp) return

    const getX = (e: MouseEvent | TouchEvent) =>
      'touches' in e ? e.touches[0].clientX : e.clientX

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return
      const rect = vp.getBoundingClientRect()
      applyPos(((getX(e) - rect.left) / rect.width) * 100)
    }
    const startDrag = (e: Event) => {
      isDragging.current = true
      btn.classList.add('dragging')
      e.preventDefault()
    }
    const stopDrag = () => {
      isDragging.current = false
      btn.classList.remove('dragging')
    }

    btn.addEventListener('mousedown', startDrag)
    btn.addEventListener('touchstart', startDrag, { passive: false })
    document.addEventListener('mousemove', onMove as EventListener)
    document.addEventListener('touchmove', onMove as EventListener, { passive: true })
    document.addEventListener('mouseup', stopDrag)
    document.addEventListener('touchend', stopDrag)

    applyPos(50)

    // Nudge animation
    const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
    const animateTo = (from: number, to: number, dur: number, onDone?: () => void) => {
      const s = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - s) / dur, 1)
        applyPos(from + (to - from) * easeInOut(t))
        if (t < 1) requestAnimationFrame(tick)
        else onDone?.()
      }
      requestAnimationFrame(tick)
    }
    const cancelNudge = () => { nudgeDone.current = true }
    btn.addEventListener('mousedown', cancelNudge, { once: true })
    btn.addEventListener('touchstart', cancelNudge, { once: true })
    const t = setTimeout(() => {
      if (nudgeDone.current) return
      nudgeDone.current = true
      animateTo(50, 30, 480, () =>
        animateTo(30, 70, 700, () =>
          animateTo(70, 50, 480, () => btn.classList.add('nudged'))
        )
      )
    }, 1400)

    // Hero stat stagger
    const stats = document.querySelectorAll<HTMLElement>('.hero-stat')
    stats.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(14px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 1100 + i * 120)
    })

    // Market strike + price count-up
    const strike = document.querySelector<HTMLElement>('.hs-market-strike')
    const priceEl = document.querySelector<HTMLElement>('.hs-val.red.count-up')
    if (strike) setTimeout(() => strike.classList.add('strike-go'), 1300)
    if (priceEl) {
      setTimeout(() => {
        const target = parseInt(priceEl.dataset.target ?? '3500')
        const prefix = priceEl.dataset.prefix ?? ''
        const dur = 900
        const s = performance.now()
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
        const tick = (now: number) => {
          const t = Math.min((now - s) / dur, 1)
          priceEl.textContent = prefix + Math.round(easeOut(t) * target).toLocaleString('es-MX')
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }, 1850)
    }

    return () => {
      btn.removeEventListener('mousedown', startDrag)
      btn.removeEventListener('touchstart', startDrag)
      document.removeEventListener('mousemove', onMove as EventListener)
      document.removeEventListener('touchmove', onMove as EventListener)
      document.removeEventListener('mouseup', stopDrag)
      document.removeEventListener('touchend', stopDrag)
      clearTimeout(t)
    }
  }, [applyPos])

  return (
    <section className="hero">
      {/* Columna izquierda */}
      <div className="hero-main">
        <div className="hero-eyebrow">Diseño web para emprendedores · México 2026</div>
        <h1 className="hero-h1">
          PÁGINAS<br />
          WEB EN<br />
          <span className="red">48</span><br />
          HORAS.
        </h1>
        <div className="hero-bottom-bar">
          <div className="hero-stat">
            <div className="hs-market">
              <span className="hs-market-num">
                $15,000<span className="hs-market-strike"></span>
              </span>
              <span className="hs-market-tag">agencias</span>
            </div>
            <div className="hs-val red count-up" data-target="3500" data-prefix="$">$3,500</div>
            <div className="hs-key">MXN · Pago único</div>
          </div>
          <div className="hero-stat">
            <div className="hs-val">48h</div>
            <div className="hs-key">De brief a live</div>
          </div>
          <div className="hero-stat">
            <div className="hs-val">$0</div>
            <div className="hs-key">Mensualidades</div>
          </div>
        </div>
      </div>

      {/* Columna derecha: browser slider */}
      <div className="hero-browser-side">
        <div className="hw-browser">
          <div className="hw-chrome">
            <div className="hw-dots">
              <div className="hw-dot hw-dot-r" />
              <div className="hw-dot hw-dot-y" />
              <div className="hw-dot hw-dot-g" />
            </div>
            <div className="hw-url">
              <svg className="hw-url-lock" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="hw-url-text hw-url-bad">el-rincon.wixsite.com/comida</span>
              <span className="hw-url-text hw-url-good">elrinconmexicano.mx</span>
            </div>
          </div>

          <div className="hw-viewport" ref={viewportRef}>
            {/* ANTES */}
            <div className="hw-phase-bad">
              <div className="hwb-nav">
                <div className="hwb-nav-brand">
                  <span className="hwb-nav-emoji">🍽</span>
                  <div>
                    <div className="hwb-nav-name">EL RINCÓN</div>
                    <div className="hwb-nav-sub">Cocina Tradicional Mexicana</div>
                  </div>
                </div>
                <div className="hwb-nav-links">
                  <span>Inicio</span><span>Menú</span><span>Galería</span><span>Contacto</span>
                </div>
              </div>
              <div className="hwb-hero">
                <div className="hwb-hero-img" />
                <div className="hwb-hero-box">
                  <div className="hwb-hero-title">¡BIENVENIDOS AL<br />RINCÓN MEXICANO!</div>
                  <div className="hwb-hero-sub">La mejor comida casera · Precio accesible</div>
                  <div className="hwb-hero-btn">VER MENÚ COMPLETO</div>
                </div>
              </div>
              <div className="hwb-specials">
                <div className="hwb-specials-header">⭐ PLATILLOS DEL DÍA ⭐</div>
                <div className="hwb-specials-grid">
                  <div className="hwb-si"><div className="hwb-si-name">Carne Asada</div><div className="hwb-si-price">$180 MXN</div></div>
                  <div className="hwb-si"><div className="hwb-si-name">Mole Rojo</div><div className="hwb-si-price">$165 MXN</div></div>
                  <div className="hwb-si"><div className="hwb-si-name">Enchiladas</div><div className="hwb-si-price">$120 MXN</div></div>
                </div>
              </div>
              <div className="hwb-infobar">
                <span>📍 Av. Insurgentes 1234, CDMX</span>
                <span>📞 55 1234-5678</span>
                <span>🕐 Lun-Dom 12-22h</span>
              </div>
            </div>

            {/* DESPUÉS */}
            <div className="hw-phase-good">
              <div className="hwg-nav">
                <div className="hwg-nav-left">
                  <span className="hwg-nav-line" /><span className="hwg-nav-line" />
                </div>
                <div className="hwg-brand">
                  <div className="hwg-brand-name">El Rincón Mexicano</div>
                  <div className="hwg-brand-tag">Ciudad de México · Est. 1987</div>
                </div>
                <div className="hwg-nav-cta">Reservar</div>
              </div>
              <div className="hwg-hero">
                <div className="hwg-hero-bg" />
                <div className="hwg-hero-content">
                  <div className="hwg-eyebrow">Cocina mexicana de autor · Temporada verano</div>
                  <div className="hwg-headline">Tradición<br />que <em>perdura.</em></div>
                  <div className="hwg-actions">
                    <div className="hwg-btn-primary">Hacer una reservación</div>
                    <div className="hwg-btn-ghost">Ver carta →</div>
                  </div>
                </div>
              </div>
              <div className="hwg-carta">
                <div className="hwg-carta-header">
                  <span className="hwg-carta-title">Carta del chef</span>
                  <span className="hwg-carta-season">Verano 2026</span>
                </div>
                <div className="hwg-carta-list">
                  <div className="hwg-plato">
                    <div className="hwg-plato-info">
                      <div className="hwg-plato-name">Mole negro · pechuga de pato</div>
                      <div className="hwg-plato-desc">Chiles mulato, chipotle, almendra tostada</div>
                    </div>
                    <div className="hwg-plato-precio">$485</div>
                  </div>
                  <div className="hwg-plato">
                    <div className="hwg-plato-info">
                      <div className="hwg-plato-name">Caldo tlalpeño · garbanzo</div>
                      <div className="hwg-plato-desc">Chipotle, epazote, aguacate de la región</div>
                    </div>
                    <div className="hwg-plato-precio">$220</div>
                  </div>
                  <div className="hwg-plato hwg-plato-last">
                    <div className="hwg-plato-info">
                      <div className="hwg-plato-name">Buñuelos · piloncillo · guayaba</div>
                      <div className="hwg-plato-desc">Postre de temporada · canela · anís</div>
                    </div>
                    <div className="hwg-plato-precio">$180</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hw-slider-label hw-slider-label-before">Antes</div>
            <div className="hw-slider-label hw-slider-label-after">Después</div>
            <div className="hw-slider-track" />
            <div className="hw-slider-btn" ref={sliderBtnRef} aria-label="Arrastra para comparar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" /><polyline points="9 18 3 12 9 6" />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '-4px' }}>
                <polyline points="9 18 15 12 9 6" /><polyline points="15 18 21 12 15 6" />
              </svg>
            </div>
          </div>
        </div>

        <div className="hw-indicators">
          <div className="hw-ind-drag">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Arrastra el handle para comparar
          </div>
        </div>
      </div>

      <div className="hero-scroll">Scroll</div>
    </section>
  )
}
