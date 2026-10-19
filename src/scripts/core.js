import Lenis from 'lenis';
import gsap from 'gsap';

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

// Smooth scroll
let lenis = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.1 });
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  if (import.meta.env.DEV) window.__ess = { lenis };
}
window.addEventListener('lenis:stop', () => lenis?.stop());
window.addEventListener('lenis:start', () => lenis?.start());

// Anchor links go through Lenis
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const el = document.querySelector(a.getAttribute('href'));
    if (!el) return;
    e.preventDefault();
    lenis ? lenis.scrollTo(el, { offset: -72 }) : el.scrollIntoView();
  });
});

// Reveals: transform + opacity only, with a sweep so fast scrolls never leave content hidden
const revealEls = [...document.querySelectorAll('[data-reveal]')];
const io = new IntersectionObserver((es) => {
  es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { rootMargin: '0px 0px -8% 0px' });
revealEls.forEach((el) => io.observe(el));
const sweep = () => {
  const vh = innerHeight;
  revealEls.forEach((el) => { if (!el.classList.contains('in') && el.getBoundingClientRect().top < vh * 0.2) el.classList.add('in'); });
};

// Header hides on scroll down, returns on scroll up
const root = document.documentElement;
let lastY = scrollY;
const onScroll = () => {
  const y = scrollY;
  if (y > 240 && y > lastY + 4) root.classList.add('hdr-hidden');
  else if (y < lastY - 4 || y < 240) root.classList.remove('hdr-hidden');
  lastY = y;
  sweep();
};
addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const burger = document.querySelector('[data-burger]');
const mnav = document.querySelector('[data-mnav]');
if (burger && mnav) {
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', String(open));
    mnav.hidden = !open;
    open ? lenis?.stop() : lenis?.start();
  });
}

// Page transitions: ≤0.35s out, navigate as soon as the panel covers, 0.4s in
const panel = document.querySelector('.pt');
if (panel && !reduce) {
  gsap.fromTo(panel, { yPercent: 0 }, { yPercent: -100, duration: 0.4, ease: 'power3.out' });
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || a.hasAttribute('download')) return;
    if (url.pathname === location.pathname && url.hash) return;
    if (url.pathname === location.pathname && !url.hash) { e.preventDefault(); return; }
    e.preventDefault();
    gsap.fromTo(panel, { yPercent: 100 }, { yPercent: 0, duration: 0.32, ease: 'power3.in', onComplete: () => { location.href = url.href; } });
  });
  addEventListener('pageshow', (e) => { if (e.persisted) gsap.set(panel, { yPercent: 100 }); });
}

// Subtle cursor on fine pointers only
if (fine && !reduce) {
  const c = document.querySelector('.cursor');
  const ring = c?.querySelector('.ring');
  const dot = c?.querySelector('.dot');
  if (ring && dot) {
    const rx = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3' });
    const ry = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3' });
    addEventListener('pointermove', (e) => {
      root.classList.add('has-cursor');
      rx(e.clientX); ry(e.clientY);
      gsap.set(dot, { x: e.clientX, y: e.clientY });
      root.classList.toggle('cursor-hover', !!e.target.closest('a, button, [role="slider"], label'));
    }, { passive: true });
    document.addEventListener('pointerleave', () => root.classList.remove('has-cursor'));
  }
}

// Lazy background videos: [data-autoplay] plays only while on screen
const small = matchMedia('(max-width: 760px)').matches;
const vio = new IntersectionObserver((es) => {
  es.forEach((e) => {
    const v = e.target;
    if (e.isIntersecting) {
      if (!v.src && v.dataset.src) v.src = (small && v.dataset.srcSm) || v.dataset.src;
      v.play().catch(() => {});
    } else v.pause();
  });
}, { threshold: 0.15 });
document.querySelectorAll('video[data-autoplay]').forEach((v) => vio.observe(v));
