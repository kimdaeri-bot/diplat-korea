// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Active section highlight
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.style.color = '';
        if (a.getAttribute('href') === '#' + e.target.id) {
          a.style.color = '#14b8a6';
        }
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

// Scroll animations
const animateObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.role-card, .service-item, .value-card, .pt-card, .case-card, .industry-item, .partner-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s, transform .5s';
  animateObserver.observe(el);
});

// Form submit
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  btn.textContent = '✓ 전송 완료! 빠른 시일 내 연락드리겠습니다.';
  btn.style.background = '#059669';
  btn.disabled = true;
}
