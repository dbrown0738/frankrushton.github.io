// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('siteNav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Close nav when link clicked
if (nav) {
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}
