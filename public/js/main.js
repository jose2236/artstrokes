// ══════════════════════════════════════
// ARTSTROKES · main.js
// ══════════════════════════════════════

// ── Scroll Reveal ──
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ── Count-Up ──
const countUpObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el     = entry.target;
    const target = parseInt(el.dataset.target);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix !== undefined ? el.dataset.suffix : '';
    const duration = 1600;
    const start    = performance.now();

    const animate = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease     = 1 - Math.pow(1 - progress, 3);
      const value    = Math.round(ease * target);
      el.textContent = prefix + value.toLocaleString('es-MX') + suffix;
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    countUpObs.unobserve(el);
  });
}, { threshold: 0.4 });

document.querySelectorAll('.count-up').forEach(el => {
  // El precio hero ($3,500) se anima desde la secuencia de market-strike
  if (el.classList.contains('red') && el.closest('.hero-stat')) return;
  countUpObs.observe(el);
});

// ── Hero stat stagger ──
document.querySelectorAll('.hero-stat').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(14px)';
  setTimeout(() => {
    el.style.transition = 'opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)';
    el.style.opacity    = '1';
    el.style.transform  = 'translateY(0)';
  }, 1100 + i * 120);
});

// ── Animación precio de mercado → precio Artstrokes ──
(() => {
  const strike  = document.querySelector('.hs-market-strike');
  const priceEl = document.querySelector('.hs-val.red.count-up');
  if (!strike || !priceEl) return;

  // 1. Tachado aparece 200ms después de que el stat hace fade-in (1100ms)
  setTimeout(() => {
    strike.classList.add('strike-go');
  }, 1300);

  // 2. Count-up del precio real arranca al terminar el tachado (1300 + 400ms anim + 150ms pausa)
  setTimeout(() => {
    const target   = parseInt(priceEl.dataset.target);   // 3500
    const prefix   = priceEl.dataset.prefix || '';        // $
    const duration = 900;
    const start    = performance.now();
    const easeOut  = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const t   = Math.min((now - start) / duration, 1);
      const val = Math.round(easeOut(t) * target);
      priceEl.textContent = prefix + val.toLocaleString('es-MX');
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, 1850);
})();

// ── Parallax sutil en imágenes de galería ──
const galImgs = document.querySelectorAll('.gal-img');
if (galImgs.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const onScroll = () => {
    galImgs.forEach(img => {
      const rect   = img.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (window.innerHeight / 2 - center) * 0.06;
      img.style.backgroundPositionY = `calc(50% + ${offset}px)`;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ── Nav: highlight activo en scroll ──
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const navObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.getAttribute('id');
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + id
          ? 'var(--acid)'
          : '';
        a.style.background = a.getAttribute('href') === '#' + id
          ? 'var(--fg)'
          : '';
      });
    }
  });
}, { threshold: 0.45 });

sections.forEach(s => navObs.observe(s));

// ── Browser comparison drag slider ──
(function () {
  const viewport  = document.querySelector('.hw-viewport');
  const sliderBtn = document.getElementById('hwSliderBtn');
  const sliderTrk = document.querySelector('.hw-slider-track');
  const urlBad    = document.querySelector('.hw-url-bad');
  const urlGood   = document.querySelector('.hw-url-good');

  if (!viewport || !sliderBtn) return;

  let isDragging = false;

  const phaseBad  = viewport.querySelector('.hw-phase-bad');
  const phaseGood = viewport.querySelector('.hw-phase-good');

  const applyPos = (pct) => {
    pct = Math.max(6, Math.min(94, pct));
    const val     = pct + '%';
    const clipBad = `inset(0 ${100 - pct}% 0 0)`;
    const clipGood = `inset(0 0 0 ${pct}%)`;

    viewport.style.setProperty('--hw-slider', val);
    if (phaseBad)  phaseBad.style.clipPath  = clipBad;
    if (phaseGood) phaseGood.style.clipPath = clipGood;
    if (sliderTrk) sliderTrk.style.left = val;
    sliderBtn.style.left = val;

    if (urlBad && urlGood) {
      const showGood = pct >= 50;
      urlBad.style.opacity  = showGood ? '0' : '1';
      urlGood.style.opacity = showGood ? '1' : '0';
    }
  };

  const getX = (e) => e.touches ? e.touches[0].clientX : e.clientX;

  const onMove = (e) => {
    if (!isDragging) return;
    const rect = viewport.getBoundingClientRect();
    const pct  = ((getX(e) - rect.left) / rect.width) * 100;
    applyPos(pct);
  };

  const startDrag = (e) => {
    isDragging = true;
    sliderBtn.classList.add('dragging');
    e.preventDefault();
  };
  const stopDrag = () => {
    isDragging = false;
    sliderBtn.classList.remove('dragging');
  };

  sliderBtn.addEventListener('mousedown',  startDrag);
  sliderBtn.addEventListener('touchstart', startDrag, { passive: false });

  document.addEventListener('mousemove',  onMove);
  document.addEventListener('touchmove',  onMove, { passive: true });
  document.addEventListener('mouseup',    stopDrag);
  document.addEventListener('touchend',   stopDrag);

  // Init at 50%
  applyPos(50);
  window.addEventListener('load', () => applyPos(50));

  // ── Nudge: pequeña animación al cargar para mostrar que es arrastrable ──
  let nudgeDone = false;

  const easeInOut = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const animateTo = (from, to, duration, onDone) => {
    const start = performance.now();
    const tick  = (now) => {
      const t   = Math.min((now - start) / duration, 1);
      applyPos(from + (to - from) * easeInOut(t));
      if (t < 1) requestAnimationFrame(tick);
      else if (onDone) onDone();
    };
    requestAnimationFrame(tick);
  };

  const runNudge = () => {
    if (nudgeDone) return;
    nudgeDone = true;
    // 50 → 30 → 70 → 50  (arrastre suave de izquierda a derecha y regresa)
    animateTo(50, 30, 480, () =>
      animateTo(30, 70, 700, () =>
        animateTo(70, 50, 480, () => sliderBtn.classList.add('nudged'))
      )
    );
  };

  // Cancelar nudge si el usuario interactúa antes
  const cancelNudge = () => { nudgeDone = true; };
  sliderBtn.addEventListener('mousedown',  cancelNudge, { once: true });
  sliderBtn.addEventListener('touchstart', cancelNudge, { once: true, passive: true });

  // Lanzar nudge 1.4s después de que cargue la página
  window.addEventListener('load', () => setTimeout(runNudge, 1400));
})();

// ── Selector de giro interactivo ──
const selGiros = {
  restaurante: { url: 'elrinconmexicano.mx',      label: 'Restaurante' },
  barberia:    { url: 'nortebarbershop.mx',        label: 'Barbería' },
  dentista:    { url: 'drreyesodontologia.mx',     label: 'Dentista' },
  pasteleria:  { url: 'dulceypunto.mx',            label: 'Pastelería' },
  herreria:    { url: 'herreriadominguez.mx',      label: 'Herrería' },
  taller:      { url: 'tallerrey.mx',              label: 'Taller Mec.' },
};

const selUrlText  = document.getElementById('selUrlText');
const selGiroName = document.getElementById('selGiroName');
const selCtaBtn   = document.querySelector('.sel-cta');
let selCurrent    = 'restaurante';

document.querySelectorAll('.giro-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.giro;
    if (key === selCurrent) return;

    document.querySelector('.giro-btn.active').classList.remove('active');
    document.getElementById('sel-' + selCurrent).classList.remove('active');

    btn.classList.add('active');
    document.getElementById('sel-' + key).classList.add('active');

    if (selUrlText) {
      selUrlText.style.opacity = '0';
      setTimeout(() => { selUrlText.textContent = selGiros[key].url; selUrlText.style.opacity = '1'; }, 220);
    }
    if (selGiroName) {
      selGiroName.style.opacity = '0';
      setTimeout(() => { selGiroName.textContent = selGiros[key].label; selGiroName.style.opacity = '1'; }, 160);
    }

    selCurrent = key;
  });
});

// CTA del selector → WhatsApp con giro preseleccionado
if (selCtaBtn) {
  selCtaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const label = selGiros[selCurrent].label.toLowerCase();
    const msg   = encodeURIComponent('Hola, quiero mi página web. Tengo un(a) ' + label + '.');
    window.open('https://wa.me/521XXXXXXXXXX?text=' + msg, '_blank');
  });
}
