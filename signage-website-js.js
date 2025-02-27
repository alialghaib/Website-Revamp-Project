// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
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

// Form submission (placeholder)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  // Form will submit to the action specified in the HTML
  // This is just for additional validation or custom handling
  console.log('Form submitted');
});
