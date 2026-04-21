// ============================================
// LOVELY HÜS — Script
// Minimal. Funcional. Sense soroll.
// ============================================

// --- REVEAL ON SCROLL ---
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el, i) => {
  // Stagger subtil per als fills del grid
  if (el.closest('.peces-grid')) {
    el.style.transitionDelay = `${i * 0.1}s`;
  }
  revealObserver.observe(el);
});

// --- NAV TOGGLE MÒBIL ---
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Tanca el menú en clicar un link
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// --- NAV SCROLL SHADOW ---
const navWrap = document.querySelector('.nav-wrap');

if (navWrap) {
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navWrap.style.padding = '0.6rem 2rem';
    } else {
      navWrap.style.padding = '1rem 2rem';
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
}

// --- HERO: Hero visible immediatament ---
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
  setTimeout(() => heroContent.classList.add('visible'), 200);
}
