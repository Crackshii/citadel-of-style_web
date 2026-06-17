// Nav scroll
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
        scrollTopBtn.classList.add('visible');
    } else {
        navbar.classList.remove('scrolled');
        scrollTopBtn.classList.remove('visible');
    }
});

// Mobile menu
function toggleMenu() {
    const links = document.getElementById('navLinks');
    links.classList.toggle('open');
}
document.querySelectorAll('#navLinks a').forEach(a => {
    a.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('open');
    });
});

// Smooth appear on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .why-feature, .process-card, .review-card, .team-card, .portfolio-item, .contact-info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Demo booking feedback
const bookingForm = document.querySelector('.contact-form');

function showToast(title, message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<div class="toast-title">${title}</div><div class="toast-msg">${message}</div>`;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

if (bookingForm) {
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        showToast('Заявка готова', 'Подключите свою CRM, Telegram или форму отправки.');
        bookingForm.reset();
    });
}
