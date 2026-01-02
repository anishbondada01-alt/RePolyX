
document.addEventListener('DOMContentLoaded', function () {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Fade-in effect using IntersectionObserver
    const faders = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after initial reveal
                // observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    faders.forEach(el => {
        observer.observe(el);
    });

    // Modal functionality
    const modalOverlay = document.querySelector('.modal-overlay');
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeBtn = document.querySelectorAll('.close-btn');

    openModalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modalOverlay.classList.add('show');
        });
    });

    closeBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            modalOverlay.classList.remove('show');
        });
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('show');
        }
    });
});
