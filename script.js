// Typing effect for Hello, I'm Jizryl S. Arboleda
const typingText = document.getElementById("typing-text");
const text = "Hello, I'm Jizryl S. Arboleda";
let i = 0;

function typeWriter() {
if (i < text.length) {
typingText.innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter, 100); // speed
}
}
document.addEventListener("DOMContentLoaded", typeWriter);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();
document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});
});
});

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next');
let currentImageIndex = 0;
const images = document.querySelectorAll('.cert-card img');

images.forEach((img, index) => {
img.addEventListener("click", () => {
currentImageIndex = index;
lightbox.classList.add("active");
lightboxImg.src = img.src;
lightboxImg.alt = img.alt;
});
});

closeBtn.addEventListener("click", () => {
lightbox.classList.remove("active");
});

window.addEventListener("click", (e) => {
if (e.target === lightbox) {
lightbox.classList.remove("active");
}
});

prevArrow.addEventListener('click', () => {
currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
lightboxImg.src = images[currentImageIndex].src;
lightboxImg.alt = images[currentImageIndex].alt;
});

nextArrow.addEventListener('click', () => {
currentImageIndex = (currentImageIndex + 1) % images.length;
lightboxImg.src = images[currentImageIndex].src;
lightboxImg.alt = images[currentImageIndex].alt;
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});

const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    const tooltip = card.querySelector('.tooltip');
    tooltip.classList.add('floating-text');
  });

  card.addEventListener('mouseout', () => {
    const tooltip = card.querySelector('.tooltip');
    tooltip.classList.remove('floating-text');
  });
});

