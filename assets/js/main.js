/**
 * Rivers & Roses Notary - Main JavaScript
 * Handles navigation, smooth scrolling, forms, and interactions
 */

// ========================================
// Smooth Scrolling for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');

    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navHeight = document.querySelector('.nav').offsetHeight;
      const targetPosition = targetElement.offsetTop - navHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      const navMenu = document.getElementById('navMenu');
      const navToggle = document.getElementById('navToggle');
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    }
  });
});

// ========================================
// Mobile Navigation Toggle
// ========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });
}

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// ========================================
// Back to Top Button
// ========================================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ========================================
// Contact Form Handling
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    // If using Formspree, it will handle the submission
    // This event listener is for additional client-side handling if needed

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Note: Formspree handles the actual submission
    // After submission, Formspree will redirect or show a thank you message
    // You can customize this behavior in your Formspree settings

    // Optional: Add a timeout to re-enable button if something goes wrong
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 5000);
  });
}

// ========================================
// Calendly Integration (Optional)
// ========================================
/**
 * TO ENABLE CALENDLY BOOKING:
 *
 * 1. Sign up for a free Calendly account at https://calendly.com
 *
 * 2. Set up your availability (M-Th evenings)
 *
 * 3. Get your Calendly link (e.g., https://calendly.com/your-username/notary-appointment)
 *
 * 4. Add the Calendly embed script to home.html before the closing </body> tag:
 *    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
 *
 * 5. Replace the placeholder div in home.html with:
 *    <div class="calendly-inline-widget"
 *         data-url="YOUR_CALENDLY_LINK"
 *         style="min-width:320px;height:630px;">
 *    </div>
 *
 * 6. Remove the .calendly-placeholder div
 */

// ========================================
// Form Validation Enhancement
// ========================================
function validateForm(formElement) {
  const requiredFields = formElement.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      field.style.borderColor = '#a8324a';
    } else {
      field.style.borderColor = 'rgba(184, 149, 90, 0.3)';
    }
  });

  return isValid;
}

// Add real-time validation
if (contactForm) {
  const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      if (!input.value.trim()) {
        input.style.borderColor = '#a8324a';
      } else {
        input.style.borderColor = 'rgba(184, 149, 90, 0.3)';
      }
    });

    input.addEventListener('focus', () => {
      input.style.borderColor = '#b8955a';
    });
  });
}

// ========================================
// Animate on Scroll (Simple)
// ========================================
function animateOnScroll() {
  const elements = document.querySelectorAll('.service-card, .step, .contact-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';

        setTimeout(() => {
          entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// Initialize animations when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', animateOnScroll);
} else {
  animateOnScroll();
}

// ========================================
// Active Navigation Link
// ========================================
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollPosition = window.pageYOffset + 150;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink);

// ========================================
// Console Welcome Message
// ========================================
console.log(
  '%c🌹 Rivers & Roses Notary',
  'color: #b8955a; font-size: 20px; font-weight: bold;'
);
console.log(
  '%cRooted in Integrity, Flowing with Excellence.',
  'color: #faf7f2; font-size: 12px; font-style: italic;'
);

/**
 * SETUP INSTRUCTIONS SUMMARY:
 *
 * 1. FORMSPREE (Contact Form):
 *    - Go to https://formspree.io
 *    - Sign up for free
 *    - Create a new form
 *    - Get your form endpoint (e.g., https://formspree.io/f/xyzabc123)
 *    - Replace "YOUR_FORM_ID" in home.html with your actual form ID
 *    - The form will send submissions to info@riversandrosesnotary.com
 *
 * 2. CALENDLY (Booking):
 *    - See instructions in the Calendly Integration section above
 *
 * 3. STRIPE (Payments):
 *    - Sign up at https://stripe.com
 *    - Create Payment Links for each service in your Stripe Dashboard
 *    - Add "Pay Now" buttons to service cards linking to Stripe Payment Links
 *    - No coding required - Stripe handles everything securely
 *
 * For detailed instructions, see SETUP.md
 */
