// Stripe Payment Links - redirect directly to Stripe Checkout
const STRIPE_PAYMENT_URL = 'https://buy.stripe.com/9B63cof5O8OObmF2hSfEk00';
const STRIPE_APEX_PAYMENT_URL = 'https://buy.stripe.com/fZu5kw2j20iieyR4q0fEk01';

// Auto-delivery server URL (Discord OAuth + Stripe webhook)
// Update this after deploying the bot to Railway with a public domain
const AUTO_DELIVERY_URL = window.OUTTHENET_DELIVERY_URL || '';

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

// Handle Buy button click
// If auto-delivery is configured, go through Discord OAuth first
// Otherwise fall back to direct Stripe link
function handleBuy() {
    const btn = document.getElementById('buyButton');
    btn.disabled = true;
    if (AUTO_DELIVERY_URL) {
        btn.textContent = 'Connecting Discord...';
        window.location.href = AUTO_DELIVERY_URL + '/auth/discord?product=2k26';
    } else {
        btn.textContent = 'Redirecting to Stripe...';
        window.location.href = STRIPE_PAYMENT_URL;
    }
}

// Handle Buy button click - redirect to Stripe Payment Link (OTN APEX V1)
function handleBuyApex() {
    const btn = document.getElementById('buyButtonApex');
    btn.textContent = 'Redirecting to Stripe...';
    btn.disabled = true;
    window.location.href = STRIPE_APEX_PAYMENT_URL;
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
