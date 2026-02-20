/* =============================================
   REYANDA — Main JavaScript
   ============================================= */

/* ---- Nav Scroll Effect ---- */
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ---- Mobile Menu ---- */
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ---- Intersection Observer — Reveal ---- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Staggered delay for siblings in same container
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${Math.min(idx * 80, 320)}ms`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---- Counter Animation ---- */
function animateCount(el, target, duration = 1400) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.count, 10);
      animateCount(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

/* ---- Contribution Grid ---- */
const contribGrid = document.getElementById('contribGrid');
if (contribGrid) {
  const levels = ['', 'l1', 'l2', 'l3', 'l4'];
  const cells = 52 * 7; // 52 weeks × 7 days

  // Seeded pseudo-random for consistent look
  let seed = 42;
  function rand() {
    seed = (seed * 1664525 + 1013904223) & 0xffffffff;
    return (seed >>> 0) / 0xffffffff;
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < cells; i++) {
    const cell = document.createElement('div');
    cell.className = 'contrib-cell';
    const r = rand();
    if (r > 0.85)      cell.classList.add('l4');
    else if (r > 0.65) cell.classList.add('l3');
    else if (r > 0.45) cell.classList.add('l2');
    else if (r > 0.3)  cell.classList.add('l1');
    fragment.appendChild(cell);
  }
  contribGrid.appendChild(fragment);
}

/* ---- Smooth active nav link highlight ---- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

if (navLinks.length > 0) {
  const activeLinkObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--text-primary)'
            : '';
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => activeLinkObserver.observe(s));
}

/* ---- Cursor orb (subtle, desktop only) ---- */
if (window.matchMedia('(pointer: fine)').matches) {
  const orbs = document.querySelectorAll('.orb');
  let mx = 0, my = 0;
  let cx = 0, cy = 0;

  window.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  }, { passive: true });

  function animateOrbs() {
    cx += (mx - cx) * 0.04;
    cy += (my - cy) * 0.04;

    if (orbs[0]) {
      orbs[0].style.transform = `translate(${(cx - window.innerWidth/2) * 0.015}px, ${(cy - window.innerHeight/2) * 0.015}px)`;
    }
    if (orbs[1]) {
      orbs[1].style.transform = `translate(${(cx - window.innerWidth/2) * -0.01}px, ${(cy - window.innerHeight/2) * -0.01}px)`;
    }
    requestAnimationFrame(animateOrbs);
  }
  animateOrbs();
}
