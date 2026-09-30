// Número de WhatsApp del taller (formato internacional, sin + ni espacios)
const WA_NUMBER = '5492214639472';

const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

// Todos los botones con data-wa abren WhatsApp con el mensaje precargado
document.querySelectorAll('[data-wa]').forEach((el) => {
  el.href = waLink(el.dataset.wa);
  el.target = '_blank';
  el.rel = 'noopener';
});

// Menú mobile
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Filtro de productos
const chips = document.querySelectorAll('.chip');
const products = document.querySelectorAll('.product');
chips.forEach((chip) =>
  chip.addEventListener('click', () => {
    chips.forEach((c) => {
      c.classList.toggle('is-active', c === chip);
      c.setAttribute('aria-selected', c === chip);
    });
    const f = chip.dataset.filter;
    products.forEach((p) => (p.hidden = f !== 'all' && p.dataset.cat !== f));
  })
);

// Formulario de turnos -> mensaje de WhatsApp
const form = document.getElementById('turnoForm');
const formError = document.getElementById('formError');
const fecha = form.elements.fecha;
fecha.min = new Date().toISOString().slice(0, 10);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  const missing = ['nombre', 'servicio'].filter((k) => !d[k].trim());
  form.querySelectorAll('.invalid').forEach((el) => el.classList.remove('invalid'));
  missing.forEach((k) => form.elements[k].classList.add('invalid'));
  formError.hidden = missing.length === 0;
  if (missing.length) return;

  const fechaTxt = d.fecha
    ? new Date(d.fecha + 'T12:00').toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' })
    : '';
  const fields = [
    ['Nombre', d.nombre],
    ['Teléfono', d.telefono],
    ['Servicio', d.servicio],
    ['Vehículo', d.vehiculo],
    ['Patente', d.patente.toUpperCase()],
    ['Día preferido', fechaTxt],
    ['Horario', d.horario === 'Indistinto' ? '' : d.horario],
    ['Detalle', d.mensaje],
  ]
    .filter(([, v]) => v.trim())
    .map(([k, v]) => `*${k}:* ${v.trim()}`);

  const text = ['Hola Taller X, quiero pedir un turno.', '', ...fields].join('\n');
  window.open(waLink(text), '_blank', 'noopener');
});

// Display tipo taxímetro en el hero
const ledImporte = document.getElementById('ledImporte');
const ledTarifa = document.getElementById('ledTarifa');
const pills = document.querySelectorAll('.pill');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const setStatus = (st) => pills.forEach((p) => p.classList.toggle('pill--on', p.dataset.st === st));
const fmt = (n) => n.toFixed(2).padStart(7, '0');

if (!reduceMotion) {
  let importe = 0;
  let phase = 'libre';
  let ticks = 0;
  setInterval(() => {
    ticks++;
    if (phase === 'libre' && ticks > 4) {
      phase = 'ocupado'; ticks = 0; importe = 1450;
      ledTarifa.textContent = Math.random() > 0.5 ? '1' : '2';
    } else if (phase === 'ocupado') {
      importe += 87.5;
      if (ticks > 14) { phase = 'pagar'; ticks = 0; }
    } else if (phase === 'pagar' && ticks > 5) {
      phase = 'libre'; ticks = 0; importe = 0;
    }
    setStatus(phase);
    ledImporte.textContent = fmt(importe);
  }, 700);
}

// Fotos rotativas de la portada
const slides = document.querySelectorAll('#heroSlides .slide');
// (con "reducir movimiento" activado rotan igual, más lento y sin fundido)
if (slides.length > 1) {
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('is-active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('is-active');
  }, reduceMotion ? 6000 : 4000);
}

// Videos (.reel): se reproducen en silencio solo cuando están en pantalla.
// data-skip="inicio-fin,inicio-fin" saltea tramos (en segundos).
document.querySelectorAll('.reel').forEach((reel) => {
  const video = reel.querySelector('video');
  const sound = reel.querySelector('.reel__sound');

  if ('IntersectionObserver' in window && !reduceMotion) {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.4 }).observe(video);
  } else {
    video.controls = true;
  }

  const skips = (video.dataset.skip || '')
    .split(',')
    .filter(Boolean)
    .map((r) => r.split('-').map(Number));
  if (skips.length) {
    video.addEventListener('timeupdate', () => {
      const t = video.currentTime;
      const hit = skips.find(([a, b]) => t >= a && t < b);
      if (hit) video.currentTime = hit[1];
    });
  }

  sound.addEventListener('click', () => {
    video.muted = !video.muted;
    if (!video.muted) video.play().catch(() => {});
    sound.setAttribute('aria-pressed', !video.muted);
    sound.setAttribute('aria-label', video.muted ? 'Activar sonido' : 'Silenciar');
    sound.querySelector('use').setAttribute('href', video.muted ? '#i-mute' : '#i-sound');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
