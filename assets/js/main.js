// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// Mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // stagger siblings
      const siblings = e.target.parentElement.querySelectorAll('.fade-in');
      siblings.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 80);
      });
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// 더보기 — expand entire card grid
function toggleGrid(gridId, btnId) {
  const grid = document.getElementById(gridId);
  const btn = document.getElementById(btnId);
  const isOpen = grid.classList.contains('open');
  grid.classList.toggle('open', !isOpen);
  grid.classList.toggle('collapsed', isOpen);
  btn.classList.toggle('open', !isOpen);
  // update label
  btn.querySelector('span').textContent = isOpen ? '더보기' : '접기';
}

// Our Approach accordion
function toggleApproach(btn) {
  const steps = document.getElementById('cstSteps');
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', !expanded);
  steps.classList.toggle('collapsed', expanded);
}

// Marketing intro accordion
function toggleMktIntro(btn) {
  const body = document.getElementById('mktIntroBody');
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', !expanded);
  body.classList.toggle('collapsed', expanded);
}

// Consulting service card expand
function toggleCard(card) {
  const isOpen = card.classList.contains('open');
  // close all others
  document.querySelectorAll('#cstCards .cst-card.open').forEach(c => c.classList.remove('open'));
  if (!isOpen) card.classList.add('open');
}

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  btn.textContent = '✓ Sent! We\'ll be in touch shortly.';
  btn.style.opacity = '.7';
  btn.disabled = true;
}
