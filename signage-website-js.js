// Mobile menu toggle - Improved for smooth animation
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Smooth expand/collapse effect
  if (navLinks.classList.contains('active')) {
    navLinks.style.maxHeight = navLinks.scrollHeight + "px";  // Expand to full height
  } else {
    navLinks.style.maxHeight = "0px";  // Collapse back
  }
});

// Language switch
const enBtn = document.getElementById('en-btn');
const arBtn = document.getElementById('ar-btn');
let currentLang = 'en';

function switchLanguage(lang) {
  currentLang = lang;
  document.body.classList.toggle('rtl', lang === 'ar');
  
  if (lang === 'ar') {
    enBtn.classList.remove('active');
    arBtn.classList.add('active');
  } else {
    arBtn.classList.remove('active');
    enBtn.classList.add('active');
  }
  
  // Update all text elements with data-en and data-ar attributes
  document.querySelectorAll('[data-en][data-ar]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

enBtn.addEventListener('click', () => switchLanguage('en'));
arBtn.addEventListener('click', () => switchLanguage('ar'));

// Form submission with AJAX handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
      method: "POST",
      body: formData,
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById("form-message").style.display = "block";
      document.getElementById("form-message").innerHTML = "✅ Your message has been sent successfully!";
      contactForm.reset();
    })
    .catch(error => {
      document.getElementById("form-message").style.display = "block";
      document.getElementById("form-message").innerHTML = "❌ There was an error sending your message.";
      console.error("Error:", error);
    });
  });
}



document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-slideshow").forEach(slideshow => {
    const slides = slideshow.querySelectorAll(".slide");
    const prevBtn = slideshow.querySelector(".prev");
    const nextBtn = slideshow.querySelector(".next");
    let current = 0;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    };

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
      });

      nextBtn.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        showSlide(current);
      });
    }

    // Auto-slide
    if (slides.length > 1) {
      setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
      }, 4000);
    }
  });
});




