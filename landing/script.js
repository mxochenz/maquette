document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".header__hamburger");
  const navWrapper = document.querySelector(".dropdown__nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navWrapper.classList.toggle("active");
  });

  // Close the menu when a link is clicked
  document.querySelectorAll(".nav__link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navWrapper.classList.remove("active");
    })
  );
});
