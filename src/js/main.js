const slideUp = {
  distance: "30%",
  origin: "bottom",
  opacity: "0%",
  cleanup: false,
};

const sectionsArray = [
  document.querySelector("#resume-section"),
  document.querySelector("#skill-section"),
  document.querySelector("#portfolio-section"),
  document.querySelector("#blog-section"),
  document.querySelector("#pricing-section"),
  document.querySelector("#contact-section"),
];

ScrollReveal().reveal(sectionsArray, slideUp);
