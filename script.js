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

// ini untuk animasi reveal saat scroll (blur + fade + slide)
const revealSelector = [
  '.brand-title', '.problem-title', '.solving-title', '.flow-title',
  '.flow-subtitle', '.price-title', '.price-subtitle', '.inspiration-title',
  '.inspiration-subtitle', '.inspiration-more', '.seo-title', '.seo-subtitle',
  '.faq-title', '.faq-subtitle', '.price-card-recomendation', '.problem-card',
  '.solving-container', '.flow-card', '.price-card', '.inspiration-card',
  '.seo-tags', '.faq-item', '.faq-cta-section'
].join(',');

const revealEls = document.querySelectorAll(revealSelector);

if (window.IntersectionObserver) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
  });

  revealEls.forEach(el => revealObserver.observe(el));
} else {
  // Fallback: kalau tidak didukung, tampilkan semua langsung
  revealEls.forEach(el => el.classList.add('in-view'));
}

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