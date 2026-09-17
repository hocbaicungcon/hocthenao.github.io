const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
  navToggle.textContent = open ? '×' : '☰';
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); navToggle.textContent = '☰';
}));
