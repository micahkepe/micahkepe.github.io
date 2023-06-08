// Toggle mobile navigation
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav__menu');

  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
  });
});
