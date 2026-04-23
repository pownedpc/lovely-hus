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

// --- OVERLAY GALERIA ---
const galeriaOverlay = document.getElementById('galeria-overlay');
const galeriaClose   = document.getElementById('galeria-close');
const galeriaOpenBtn = document.getElementById('open-galeria');

function openGaleria(e) {
  e.preventDefault();
  galeriaOverlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  galeriaClose.focus();
}

function closeGaleria() {
  galeriaOverlay.classList.remove('is-open');
  document.body.style.overflow = '';
}

if (galeriaOpenBtn) galeriaOpenBtn.addEventListener('click', openGaleria);
if (galeriaClose)   galeriaClose.addEventListener('click', closeGaleria);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && galeriaOverlay.classList.contains('is-open')) closeGaleria();
});

galeriaOverlay.addEventListener('click', (e) => {
  if (e.target === galeriaOverlay) closeGaleria();
});

// ============================================
// IDIOMA — CA / ES
// ============================================
const translations = {
  ca: {
    nav_historia: 'La història',
    nav_peces:    'Les peces',
    nav_galeria:  'La galeria',
    nav_proces:   'El procés',
    nav_contacte: 'Contacte',

    hero_h1:  'Calma visual.<br>Textures nobles.<br>Racons amb intenció.',
    hero_sub: 'Elements fets a mà i seleccionats amb criteri.<br>Per a cases que es senten seves.',
    hero_cta: 'Descobreix cada detall',

    hist_eyebrow: 'Qui som',
    hist_h2:   'Un projecte fet<br><em>amb les mans i amb calma</em>',
    hist_p1:   'Lovely Hüs neix del desig de tenir una llar que se senti de debò. No perfecta. No de catàleg. Teva.',
    hist_p2:   'Cada peça que trobaràs aquí ha passat per les meves mans. Algunes les he creat des de zero. Altres les he trobat en un mercat, en una cantonada, i hi he vist el que podien arribar a ser.',
    hist_p3:   'Cap arriba aquí per omplir un espai.<br>Totes hi arriben per aportar alguna cosa.',
    hist_quote: '"No dissenyo espais bonics.<br>Creo llocs on quedar-se una estona més."',

    peces_eyebrow: 'Les peces',
    peces_h2:  'Fet amb les mans.<br><em>Pensat per a la teva llar.</em>',
    peces_sub: 'Cada peça és única.<br>Quan marxa, deixa lloc a la següent.',

    p1_badge: 'Feta a mà',
    p1_title: 'Ventalls d\'espart',
    p1_desc:  'Espart trenat, flors seques i molta paciència. Cada parella és diferent perquè cada bri és diferent. Perfectes per a una paret que necessita textura sense cridar.',

    p2_badge: 'Seleccionada',
    p2_title: 'Prestatgeria de ratan',
    p2_desc:  'Circular, càlida i honesta. Li dono el seu lloc a la paret i transforma qualsevol racó. Li pots posar el que vulguis; ella ja fa la feina.',

    p3_badge: 'Peça única',
    p3_title: 'Macramé de paret',
    p3_desc:  'Cotó cru, nusos fets un a un i una branca trobada. No hi ha dos iguals. Ocupa una paret sencera sense pesar gens.',

    p4_badge: 'Feta a mà',
    p4_title: 'Làmines botàniques',
    p4_desc:  'Portallàmines de fusta i corda de lli.<br>Cada làmina, seleccionada amb cura.<br><br>Per penjar soles o en composició.<br>Canvien l\'ambient d\'una paret en pocs minuts.',

    p5_badge: 'Seleccionada',
    p5_title: 'Calendari botànic',
    p5_desc:  'Il·lustracions de plantes, paper de qualitat i marc de fusta. Funcional i bonic. Del tipus que no voldràs treure quan canviï el mes.',

    p6_badge: 'Seleccionada',
    p6_title: 'Espigues de pampa',
    p6_desc:  'Natura seca en el seu millor moment.<br>Aporten textura i calidesa sense fer soroll.<br><br>Les trio individualment per la seva forma i el seu color.',

    peca_btn:   'Aquesta peça és meva',
    peces_nota: '✦ \u00a0Les peces s\'esgoten i no sempre es reposen. Si t\'agrada alguna, no esperis massa.',

    gal_eyebrow: 'La llar',
    gal_h2:      'Espais que<br><em>se senten seus.</em>',

    proc_eyebrow: 'El procés',
    proc_h2:  'Així neix<br><em>una peça</em>',
    proc_p1:  'Comença en un mercat, en un passeig, en una branca que cau bé. Mai en un catàleg.',
    proc_p2:  'Cada peça passa per les meves mans. La neteig, la transformo, li dono el seu lloc. Si no em convenç completament, no arriba aquí.',
    proc_p3:  'El resultat mai és perfecte. És millor que perfecte: és real.',
    proc_cta: 'Segueix el procés a Instagram →',

    ass_eyebrow: 'Més que peces',
    ass_h2:  'T\'ajudo a imaginar<br><em>el teu espai</em>',
    ass_p1:  'Si tens un racó que no acaba de funcionar, podem parlar. M\'expliques com és, m\'envies fotos, i et dic exactament què canviaria i com.',
    ass_p2:  'Sense visita. Sense complicacions. Amb criteri.',
    ass_cta: 'Parlem',

    foot_tagline: 'Peces amb ànima<br>per a espais tranquils.',
    foot_eye:  'Contacte',
    foot_text: 'Per encàrrecs, assessoria o simplement per dir hola:',
    foot_copy: '© 2025 Lovely Hüs by Olga · Fet amb calma i intenció',
  },

  es: {
    nav_historia: 'La historia',
    nav_peces:    'Las piezas',
    nav_galeria:  'La galería',
    nav_proces:   'El proceso',
    nav_contacte: 'Contacto',

    hero_h1:  'Calma visual.<br>Texturas nobles.<br>Rincones con intención.',
    hero_sub: 'Elementos hechos a mano y seleccionados con criterio.<br>Para casas que se sienten propias.',
    hero_cta: 'Descubre cada detalle',

    hist_eyebrow: 'Quiénes somos',
    hist_h2:   'Un proyecto hecho<br><em>con las manos y con calma</em>',
    hist_p1:   'Lovely Hüs nace del deseo de tener un hogar que se sienta de verdad. No perfecto. No de catálogo. Tuyo.',
    hist_p2:   'Cada pieza que encontrarás aquí ha pasado por mis manos. Algunas las he creado desde cero. Otras las he encontrado en un mercado, en una esquina, y he visto lo que podían llegar a ser.',
    hist_p3:   'Ninguna llega aquí para llenar un espacio.<br>Todas llegan para aportar algo.',
    hist_quote: '"No diseño espacios bonitos.<br>Creo lugares donde quedarse un rato más."',

    peces_eyebrow: 'Las piezas',
    peces_h2:  'Hecho a mano.<br><em>Pensado para tu hogar.</em>',
    peces_sub: 'Cada pieza es única.<br>Cuando se va, deja lugar a la siguiente.',

    p1_badge: 'Hecha a mano',
    p1_title: 'Abanicos de esparto',
    p1_desc:  'Esparto trenzado, flores secas y mucha paciencia. Cada pareja es diferente porque cada brizna es diferente. Perfectos para una pared que necesita textura sin gritar.',

    p2_badge: 'Seleccionada',
    p2_title: 'Estantería de ratán',
    p2_desc:  'Circular, cálida y honesta. Le doy su lugar en la pared y transforma cualquier rincón. Puedes poner lo que quieras; ella ya hace el trabajo.',

    p3_badge: 'Pieza única',
    p3_title: 'Macramé de pared',
    p3_desc:  'Algodón crudo, nudos hechos uno a uno y una rama encontrada. No hay dos iguales. Ocupa una pared entera sin pesar nada.',

    p4_badge: 'Hecha a mano',
    p4_title: 'Láminas botánicas',
    p4_desc:  'Portalláminas de madera y cuerda de lino.<br>Cada lámina, seleccionada con cuidado.<br><br>Para colgar solas o en composición.<br>Cambian el ambiente de una pared en pocos minutos.',

    p5_badge: 'Seleccionada',
    p5_title: 'Calendario botánico',
    p5_desc:  'Ilustraciones de plantas, papel de calidad y marco de madera. Funcional y bonito. Del tipo que no querrás quitar cuando cambie el mes.',

    p6_badge: 'Seleccionada',
    p6_title: 'Espigas de pampa',
    p6_desc:  'Naturaleza seca en su mejor momento.<br>Aportan textura y calidez sin hacer ruido.<br><br>Las elijo individualmente por su forma y su color.',

    peca_btn:   'Esta pieza es mía',
    peces_nota: '✦ \u00a0Las piezas se agotan y no siempre se reponen. Si te gusta alguna, no esperes demasiado.',

    gal_eyebrow: 'El hogar',
    gal_h2:      'Espacios que<br><em>se sienten propios.</em>',

    proc_eyebrow: 'El proceso',
    proc_h2:  'Así nace<br><em>una pieza</em>',
    proc_p1:  'Empieza en un mercado, en un paseo, en una rama que cae bien. Nunca en un catálogo.',
    proc_p2:  'Cada pieza pasa por mis manos. La limpio, la transformo, le doy su lugar. Si no me convence del todo, no llega aquí.',
    proc_p3:  'El resultado nunca es perfecto. Es mejor que perfecto: es real.',
    proc_cta: 'Sigue el proceso en Instagram →',

    ass_eyebrow: 'Más que piezas',
    ass_h2:  'Te ayudo a imaginar<br><em>tu espacio</em>',
    ass_p1:  'Si tienes un rincón que no acaba de funcionar, podemos hablar. Me explicas cómo es, me mandas fotos, y te digo exactamente qué cambiaría y cómo.',
    ass_p2:  'Sin visita. Sin complicaciones. Con criterio.',
    ass_cta: 'Hablemos',

    foot_tagline: 'Piezas con alma<br>para espacios tranquilos.',
    foot_eye:  'Contacto',
    foot_text: 'Para encargos, asesoría o simplemente para decir hola:',
    foot_copy: '© 2025 Lovely Hüs by Olga · Hecho con calma e intención',
  }
};

let currentLang = 'ca';

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });
  currentLang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});
