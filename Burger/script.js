// JavaScript pour le menu burger
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".navbar__menu-toggle");
  const closeButton = document.querySelector(".navbar__close-button");
  const navMenu = document.querySelector(".navbar__menu");
  const overlay = document.querySelector(".navbar__overlay");

  // Fonction pour ouvrir le menu
  const openMenu = function () {
    navMenu.classList.add("navbar__menu--active");
    overlay.classList.add("navbar__overlay--active");
    menuToggle.setAttribute("aria-expanded", "true");
  };

  // Fonction pour fermer le menu
  const closeMenu = function () {
    navMenu.classList.remove("navbar__menu--active");
    overlay.classList.remove("navbar__overlay--active");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  // Écouteurs d'événements
  menuToggle.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);

  // Fermer le menu quand on clique sur l'overlay
  overlay.addEventListener("click", closeMenu);

  // Fermer le menu quand on clique sur un lien (pour mobile)
  const navLinks = document.querySelectorAll(".navbar__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});
