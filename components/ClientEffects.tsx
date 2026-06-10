'use client'

import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    // ── Scroll Reveal ──
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            revealObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el))

    // ── Count-Up (sections outside Hero) ──
    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const target = parseInt(el.dataset.target ?? '0')
          const prefix = el.dataset.prefix ?? ''
          const duration = 1600
          const start = performance.now()
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1)
            const ease = 1 - Math.pow(1 - t, 3)
            el.textContent = prefix + Math.round(ease * target).toLocaleString('es-MX')
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          countObs.unobserve(el)
        })
      },
      { threshold: 0.4 }
    )
    // Only observe count-ups that are NOT inside the hero stat
    document.querySelectorAll('.count-up').forEach((el) => {
      if (!(el as HTMLElement).closest('.hero-stat')) countObs.observe(el)
    })

    // ── Galería parallax ──
    const galImgs = document.querySelectorAll<HTMLElement>('.gal-img')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onScroll = () => {
      if (reducedMotion) return
      galImgs.forEach((img) => {
        const rect = img.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const offset = (window.innerHeight / 2 - center) * 0.06
        img.style.backgroundPositionY = `calc(50% + ${offset}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // ── Nav: highlight activo en scroll ──
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-links a')
    const navObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.getAttribute('id')
            navLinks.forEach((a) => {
              const active = a.getAttribute('href') === '#' + id
              a.style.color = active ? 'var(--acid)' : ''
              a.style.background = active ? 'var(--fg)' : ''
            })
          }
        })
      },
      { threshold: 0.45 }
    )
    sections.forEach((s) => navObs.observe(s))

    return () => {
      revealObs.disconnect()
      countObs.disconnect()
      navObs.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
