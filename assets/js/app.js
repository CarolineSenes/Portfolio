// Nav hamburgerburger selections
const toggle = document.querySelector("#toggle");
const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
toggle.addEventListener('click', function(){
  if (menu.classList.contains('show')) {
    this.setAttribute('aria-expanded', 'false');
    menu.classList.remove('show');
  } else {
    menu.classList.add('show'); 
    this.setAttribute('aria-expanded', 'true');
  }
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
