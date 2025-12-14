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

    // Experience Data & Rendering is now handled via external data.js file
    // The 'experiences' variable is expected to be global.

    const experiencesGrid = document.getElementById('experiences-grid');
    if (experiencesGrid) {
        experiencesGrid.innerHTML = experiences.map((exp, index) => `
            <div class="${exp.classes || ''} relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
                onclick="openExperienceModal(this)"
                data-index="${index}">
                <img src="${exp.image}"
                    alt="${exp.title}"
                    class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div class="absolute bottom-0 left-0 p-6 md:p-8 text-white">
                    ${exp.badge ? `<span class="bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">${exp.badge}</span>` : ''}
                    <h3 class="text-2xl md:text-3xl font-bold mb-2">${exp.title}</h3>
                    <p class="text-gray-200 line-clamp-2 mb-4">${exp.desc}</p>
                    <a href="${exp.link}" target="_blank" onclick="event.stopPropagation()"
                        class="inline-flex items-center text-white hover:text-brand-gold transition-colors text-sm font-bold">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        View on Instagram
                    </a>
                </div>
            </div>
        `).join('');
    }

    // Render Rooms
    const roomsGrid = document.getElementById('rooms-grid');
    if (roomsGrid && typeof rooms !== 'undefined') {
        roomsGrid.innerHTML = rooms.map(room => `
            <div class="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                <div class="relative h-64 overflow-hidden">
                    <img src="${room.image}" alt="${room.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                    ${room.badge ? `<div class="absolute top-4 right-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">${room.badge}</div>` : ''}
                </div>
                <div class="p-8">
                    <h3 class="text-2xl font-bold mb-2">${room.title}</h3>
                    <p class="text-gray-600 mb-6 line-clamp-2">${room.desc}</p>
                    <ul class="mb-8 space-y-2 text-gray-500 text-sm">
                        ${room.features.map(feat => `
                            <li class="flex items-center">
                                <svg class="w-4 h-4 mr-2 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                ${feat}
                            </li>
                        `).join('')}
                    </ul>
                    <div class="flex justify-between items-center pt-6 border-t border-gray-200">
                        <div>
                            <span class="text-xs text-gray-400 block">Starting from</span>
                            <span class="text-2xl font-bold text-brand-gold">${room.price}<span class="text-sm text-gray-400 font-normal">/night</span></span>
                        </div>
                        <a href="${room.link}" target="_blank" class="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">Book Now</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Render Features
    const featuresGrid = document.getElementById('features-grid');
    if (featuresGrid && typeof features !== 'undefined') {
        featuresGrid.innerHTML = features.map(feat => `
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
                <div class="w-16 h-16 bg-${feat.colorClass}-50 text-${feat.colorClass}-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${feat.iconPath}"></path></svg>
                </div>
                <h4 class="font-bold text-lg mb-2">${feat.title}</h4>
                <p class="text-gray-500 text-sm">${feat.desc}</p>
            </div>
        `).join('');
    }

    // Render Events
    const eventsGrid = document.getElementById('events-grid');
    if (eventsGrid && typeof events !== 'undefined') {
        eventsGrid.innerHTML = events.map(event => `
            <div class="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors border border-gray-700">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-brand-gold font-bold text-sm uppercase tracking-wider">${event.time}</span>
                    <span class="bg-gray-900 text-xs px-2 py-1 rounded text-gray-300">${event.timeBadge}</span>
                </div>
                <h3 class="text-2xl font-bold mb-2">${event.title}</h3>
                <p class="text-gray-400 mb-6 line-clamp-3">${event.desc}</p>
                <a href="${event.link}" target="_blank" class="inline-flex items-center text-brand-gold hover:text-white transition-colors">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    View on Instagram
                </a>
            </div>
        `).join('');
    }

    // Experience Modal Functionality
    const expModal = document.getElementById('experience-modal');
    const expModalContent = document.getElementById('experience-modal-content');
    const expModalImg = document.getElementById('exp-modal-img');
    const expModalTitle = document.getElementById('exp-modal-title');
    const expModalDesc = document.getElementById('exp-modal-desc');
    const expModalLink = document.getElementById('exp-modal-link');
    const expModalClose = document.getElementById('experience-modal-close');

    window.openExperienceModal = function (element) {
        const index = element.getAttribute('data-index');
        const exp = experiences[index];

        if (!exp) return;

        expModalTitle.textContent = exp.title;
        expModalDesc.textContent = exp.desc;
        expModalImg.src = exp.image;
        expModalLink.href = exp.link;

        expModal.classList.remove('hidden');
        setTimeout(() => {
            expModal.classList.remove('opacity-0');
            expModalContent.classList.remove('scale-95');
            expModalContent.classList.add('scale-100');
        }, 10);
        document.body.style.overflow = 'hidden';
    };

    function closeExpModal() {
        expModal.classList.add('opacity-0');
        expModalContent.classList.remove('scale-100');
        expModalContent.classList.add('scale-95');
        setTimeout(() => {
            expModal.classList.add('hidden');
        }, 300);
        document.body.style.overflow = '';
    }

    if (expModalClose) {
        expModalClose.addEventListener('click', closeExpModal);
    }

    if (expModal) {
        expModal.addEventListener('click', (e) => {
            if (e.target === expModal) {
                closeExpModal();
            }
        });
    }

    // Close Modals on Escape key (Merged logic)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!lightbox.classList.contains('hidden')) closeLightbox();
            if (expModal && !expModal.classList.contains('hidden')) closeExpModal();
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
