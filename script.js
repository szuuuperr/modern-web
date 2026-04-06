// Ini untuk dropdown faq
function toggleFaq(questionEl) {
  const faqItem = questionEl.parentElement;
  const isActive = faqItem.classList.contains('active');

  document.querySelectorAll('.faq-item.active').forEach(item => {
    item.classList.remove('active');
  });

  if (!isActive) {
    faqItem.classList.add('active');
  }
}

// ini untuk scroll biar smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ini untuk navbar
let lastScroll = 0;
const navbar = document.querySelector(".navbar");
const threshold = 10;

navbar.classList.add("show");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  navbar.classList.toggle("scrolled", currentScroll > 10);

  if (Math.abs(currentScroll - lastScroll) < threshold) return;

  if (currentScroll <= 0) {
    navbar.classList.remove("hide");
    navbar.classList.add("show");
    return;
  }

  if (currentScroll > lastScroll && currentScroll > 80) {
    navbar.classList.add("hide");
    navbar.classList.remove("show");
  } else {
    navbar.classList.remove("hide");
    navbar.classList.add("show");
  }

  lastScroll = currentScroll;
});

// ini untuk lenis
const lenis = new Lenis({
  lerp: 0.1, 
  wheelMultiplier: 1.5, 
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// untuk matter.js