const langButtons = document.querySelectorAll('.language-switch button');
langButtons.forEach(button => button.addEventListener('click', (e) => {
  langButtons.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');
  document.body.style.fontFamily = e.target.id === 'lang-en' ? "'Montserrat', sans-serif" : "'Noto Sans Devanagari', sans-serif";
}));

// Hamburger menu functionality for mobile devices
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
