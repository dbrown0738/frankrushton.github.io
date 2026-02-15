// script.js

// Example: Highlight active nav link
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Mobile toggle
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}
