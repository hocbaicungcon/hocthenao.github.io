const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
    navToggle.textContent = open ? '×' : '☰';
  });
  document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.textContent = '☰';
  }));
}

const goTopButton = document.querySelector('.go-top');
if (goTopButton) {
  const updateGoTop = () => goTopButton.classList.toggle('visible', window.scrollY > 360);
  window.addEventListener('scroll', updateGoTop, { passive: true });
  updateGoTop();
  goTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
