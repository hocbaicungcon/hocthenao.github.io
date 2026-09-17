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
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  event.currentTarget.querySelector('.form-message').textContent = 'Cảm ơn bạn! Lời nhắn đã được ghi nhận.';
  event.currentTarget.reset();
});
