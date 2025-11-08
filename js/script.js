document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (btn && nav) {
    btn.addEventListener('click', () => {
      // toggle nav visibility on mobile
      if (nav.style.display === 'block') {
        nav.style.display = '';
      } else {
        nav.style.display = 'block';
      }
    });
  }
});


window.onscroll = function() {
  document.getElementById("topBtn").style.display = 
    window.scrollY > 200 ? "block" : "none";
};
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Highlight active section in navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.site-nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
  });
}

// End of JS


