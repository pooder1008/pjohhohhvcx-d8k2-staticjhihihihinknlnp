// Stripe Payment Link - redirects directly to Stripe Checkout
const STRIPE_PAYMENT_URL = 'https://buy.stripe.com/9B63cof5O8OObmF2hSfEk00';

// FAQ toggle
function toggleFaq(item) {
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!wasActive) {
        item.classList.add('active');
    }
}

// Mobile menu toggle
function toggleMobile() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

// Close mobile menu on scroll
window.addEventListener('scroll', function() {
    const menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

// Handle Buy button click - redirect to Stripe Payment Link
function handleBuy() {
    const btn = document.getElementById('buyButton');
    btn.textContent = 'Redirecting to Stripe...';
    btn.disabled = true;
    window.location.href = STRIPE_PAYMENT_URL;
}

// Smooth navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 15, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 15, 15, 0.9)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .step, .faq-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});
