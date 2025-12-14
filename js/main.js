// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        mobileMenu.classList.toggle('translate-x-full');
    }

    if (mobileMenuBtn && closeMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    }

    // Header Scroll Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-black', 'bg-opacity-80', 'backdrop-blur-md', 'shadow-md');
            header.classList.remove('py-6');
            header.classList.add('py-4');
        } else {
            header.classList.remove('bg-black', 'bg-opacity-80', 'backdrop-blur-md', 'shadow-md');
            header.classList.remove('py-4');
            header.classList.add('py-6');
        }
    });

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    window.openLightbox = function (element) {
        const img = element.querySelector('img');
        const title = element.querySelector('h4').textContent;
        const caption = img.getAttribute('data-caption');

        lightboxImg.src = img.src;
        lightboxTitle.textContent = title;
        lightboxCaption.textContent = caption;

        lightbox.classList.remove('hidden');
        // Small timeout to allow display:flex to apply before adding opacity
        setTimeout(() => {
            lightbox.classList.remove('opacity-0');
        }, 10);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    function closeLightbox() {
        lightbox.classList.add('opacity-0');
        setTimeout(() => {
            lightbox.classList.add('hidden');
            lightboxImg.src = '';
        }, 300);
        document.body.style.overflow = '';
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    // Close on background click
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
            closeLightbox();
        }
    });

    // FAQ Accordion
    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.faq-icon');

            // Toggle current
            content.classList.toggle('max-h-0');
            content.classList.toggle('max-h-96'); // Arbitrary large height
            content.classList.toggle('opacity-0');
            content.classList.toggle('opacity-100');
            icon.classList.toggle('rotate-180');
        });
    });
});
