// ============================================
// ANISSE BENACHI - PREMIUM PORTFOLIO SCRIPTS
// ============================================

// Initialize Particles.js with enhanced config
particlesJS('particles-js', {
    particles: {
        number: { value: 60, density: { enable: true, value_area: 900 } },
        color: { value: ['#6366f1', '#8b5cf6', '#a855f7'] },
        shape: { type: 'circle' },
        opacity: { value: 0.4, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.5, sync: false } },
        line_linked: { enable: true, distance: 180, color: '#6366f1', opacity: 0.15, width: 1 },
        move: { enable: true, speed: 0.8, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: true, rotateX: 600, rotateY: 1200 } }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 200, line_linked: { opacity: 0.4 } }, push: { particles_nb: 3 } }
    },
    retina_detect: true
});

// Typing Effect
const typedTextElement = document.querySelector('.typed-text');
const words = ['Mobile Apps', 'Web Platforms', 'AI Solutions', 'Scalable Systems', 'Digital Products'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

if (typedTextElement) {
    setTimeout(typeEffect, 1000);
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
});

// Counter Animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Intersection Observer for Animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Animate counters when visible
            if (entry.target.classList.contains('hero-stats')) {
                entry.target.querySelectorAll('.stat-number').forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target') || counter.textContent);
                    animateCounter(counter, target);
                });
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal, section, .service-card, .project-item, .tech-item').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// Active Navigation Highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
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

// Form Handling
const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            this.reset();
        }, 3000);
    }, 1500);
});

// Scroll to Top Functionality
const scrollIndicator = document.querySelector('.scroll-indicator');
scrollIndicator?.addEventListener('click', () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
});

// Console Greeting
console.log('%c🚀 Anisse Benachi Portfolio', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%c✨ Full-Stack Developer | Mobile & Web', 'color: #8b5cf6; font-size: 14px;');
console.log('%c📧 benachi.anis@univ-khenchela.dz', 'color: #ec4899; font-size: 12px;');

// Preloader (optional)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Stagger animation for hero elements
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });
});

// Add CSS for scrolled navbar and additional effects
const style = document.createElement('style');
style.textContent = `
    .navbar.scrolled { background: rgba(3, 7, 18, 0.95) !important; backdrop-filter: blur(20px); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3); }
    .nav-link.active { color: var(--primary-light) !important; }
    
    /* Glow effect on project cards */
    .project-card-large:hover .phone-frame,
    .project-card-large:hover .mockup-browser { box-shadow: 0 30px 60px rgba(99, 102, 241, 0.3); }
    
    /* Testimonial hover effect */
    .testimonial-card:hover { border-color: rgba(99, 102, 241, 0.4); box-shadow: 0 20px 50px rgba(99, 102, 241, 0.15); }
    
    /* Button ripple effect */
    .btn-primary { position: relative; overflow: hidden; }
    .btn-primary::after { content: ''; position: absolute; top: 50%; left: 50%; width: 0; height: 0; background: rgba(255,255,255,0.2); border-radius: 50%; transform: translate(-50%, -50%); transition: width 0.6s, height 0.6s; }
    .btn-primary:active::after { width: 300px; height: 300px; }
`;
document.head.appendChild(style);

// Parallax effect on scroll for floating icons
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatIcons = document.querySelectorAll('.float-icon');
    floatIcons.forEach((icon, i) => {
        const speed = 0.05 + (i * 0.02);
        icon.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
