// Mobile Menu Functionality
// Wait for both DOM and language data to be ready
let domReady = false;
let dataReady = false;

function initApp() {
    if (!domReady || !dataReady) return;

    console.log('✅ Initializing app with language data...');

    const currentLang = localStorage.getItem('siteLanguage') || 'en';

    // Initialize language dropdown (using languageConfig from config.js)
    const currentLangFlag = document.getElementById('current-lang-flag');
    const currentLangCode = document.getElementById('current-lang-code');
    const langDropdownBtn = document.getElementById('lang-dropdown-btn');
    const langDropdownMenu = document.getElementById('lang-dropdown-menu');
    const langDropdownArrow = document.getElementById('lang-dropdown-arrow');

    if (currentLangFlag && currentLangCode && languageConfig[currentLang]) {
        // Set flag icon using CSS classes
        currentLangFlag.className = `fi fi-${languageConfig[currentLang].flagCode} text-lg`;
        currentLangCode.textContent = languageConfig[currentLang].code;
    }

    // Dropdown toggle
    if (langDropdownBtn && langDropdownMenu) {
        langDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = !langDropdownMenu.classList.contains('invisible');

            if (isOpen) {
                langDropdownMenu.classList.add('opacity-0', 'invisible');
                langDropdownArrow.classList.remove('rotate-180');
            } else {
                langDropdownMenu.classList.remove('opacity-0', 'invisible');
                langDropdownArrow.classList.add('rotate-180');
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            langDropdownMenu.classList.add('opacity-0', 'invisible');
            langDropdownArrow.classList.remove('rotate-180');
        });
    }

    // Set social media links from externalLinks config
    if (typeof externalLinks !== 'undefined') {
        const facebookLink = document.getElementById('footer-facebook');
        const instagramLink = document.getElementById('footer-instagram');
        const tiktokLink = document.getElementById('footer-tiktok');

        if (facebookLink) facebookLink.href = externalLinks.facebook;
        if (instagramLink) instagramLink.href = externalLinks.instagram;
        if (tiktokLink) tiktokLink.href = externalLinks.tiktok;
    }

    // Render Dynamic Content (Rooms, Experiences, etc.)
    renderDynamicContent();

    // Render UI Text from uiText object
    function renderUIText() {
        if (typeof uiText === 'undefined') {
            console.warn('⚠️ uiText not loaded yet');
            return;
        }

        // Update text content for elements with data-ui-text attribute
        let translatedCount = 0;
        document.querySelectorAll('[data-ui-text]').forEach(element => {
            const key = element.getAttribute('data-ui-text');
            if (uiText[key]) {
                element.textContent = uiText[key];
                translatedCount++;
            } else {
                console.warn(`Missing translation key: ${key}`);
            }
        });

        console.log(`✅ Translated ${translatedCount} UI elements`);

        // Update Page Title and Meta Description
        if (uiText.metaTitle) {
            document.title = uiText.metaTitle;
        }
        if (uiText.metaDescription) {
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', uiText.metaDescription);
            }
        }
        if (uiText.metaKeywords) {
            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute('content', uiText.metaKeywords);
            }
        }
    }

    // Call renderUIText after a brief delay to ensure data is loaded
    setTimeout(renderUIText, 150);





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

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            scrollToTopBtn.classList.add('opacity-100');
        } else {
            scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            scrollToTopBtn.classList.remove('opacity-100');
        }
    });

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

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

    // Experience Data & Rendering is now handled via language-specific data files (data-en.js, data-ru.js, data-az.js)
    // The 'experiences' variable is expected to be global.

    function renderDynamicContent() {
        if (typeof uiText === 'undefined') return;

        const experiencesGrid = document.getElementById('experiences-grid');
        if (experiencesGrid && typeof experiences !== 'undefined') {
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
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                            ${uiText.viewOnInstagram || 'View on Instagram'}
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
                                    <svg class="w-4 h-4 mr-2 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    ${feat}
                                </li>
                            `).join('')}
                        </ul>
                        <div class="flex justify-between items-center pt-6 border-t border-gray-200">
                            <div>
                                <span class="text-xs text-gray-400 block">${uiText.startingFrom || 'Starting from'}</span>
                                <span class="text-2xl font-bold text-brand-gold">${room.price}<span class="text-sm text-gray-400 font-normal">${uiText.perNight || '/night'}</span></span>
                            </div>
                            <a href="${room.link}" target="_blank" class="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">${uiText.bookNow || 'Book Now'}</a>
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
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                        ${uiText.viewOnInstagram || 'View on Instagram'}
                    </a>
                </div>
            `).join('');
        }

        // Render Offers
        const offersGrid = document.getElementById('offers-grid');
        if (offersGrid && typeof offers !== 'undefined') {
            offersGrid.innerHTML = offers.map(offer => `
                <div class="${offer.bgColor} rounded-2xl p-8 border ${offer.borderColor} relative overflow-hidden group">
                    <h3 class="text-2xl font-bold ${offer.textColor} mb-2">${offer.title}</h3>
                    <p class="text-gray-700 font-bold text-lg mb-4">${offer.discount}</p>
                    <p class="text-gray-500 mb-6 text-sm">${offer.description}</p>
                    <a href="${offer.link}" target="_blank"
                        class="block w-full text-center ${offer.buttonColor} text-white font-bold py-3 rounded-lg ${offer.buttonHover} transition-colors">
                        ${uiText.bookNow || 'Book Now'}
                    </a>
                </div>
            `).join('');
        }

        // Render FAQs
        const faqContainer = document.getElementById('faq-container');
        if (faqContainer && typeof faqs !== 'undefined') {
            faqContainer.innerHTML = faqs.map((faq, index) => `
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                    <button
                        class="faq-btn w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none">
                        <span class="font-bold text-lg text-gray-800">${faq.question}</span>
                        <svg class="faq-icon w-5 h-5 text-gray-500 transform transition-transform duration-300"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="faq-answer max-h-0 opacity-0 transition-all duration-300 ease-in-out">
                        <div class="px-6 pb-6 text-gray-600">
                            ${faq.answer}
                        </div>
                    </div>
                </div>
            `).join('');

            // Re-initialize FAQ buttons since they were just created
            initFAQ();
        }

        // Render Gallery
        const galleryGrid = document.getElementById('gallery-grid');
        if (galleryGrid && typeof galleryItems !== 'undefined') {
            galleryGrid.innerHTML = galleryItems.map((item, index) => `
                <div class="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                    onclick="openLightbox(this)">
                    <img src="${item.image}"
                        alt="${item.title}" data-caption="${item.caption}"
                        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                    <div
                        class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
                        <h4
                            class="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            ${item.title}</h4>
                        <p
                            class="text-gray-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                            ${item.caption}</p>
                    </div>
                </div>
            `).join('');
        }
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
    function initFAQ() {
        const faqButtons = document.querySelectorAll('.faq-btn');
        faqButtons.forEach(btn => {
            // Remove existing listeners to avoid duplicates (if any)
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);

            newBtn.addEventListener('click', () => {
                const content = newBtn.nextElementSibling;
                const icon = newBtn.querySelector('.faq-icon');

                // Toggle current
                content.classList.toggle('max-h-0');
                if (!content.classList.contains('max-h-0')) {
                    content.classList.add('max-h-96');
                    content.classList.remove('opacity-0');
                    icon.classList.add('rotate-180');
                } else {
                    content.classList.remove('max-h-96');
                    content.classList.add('opacity-0');
                    icon.classList.remove('rotate-180');
                }
            });
        });
    }
}

// Set up event listeners
document.addEventListener('DOMContentLoaded', () => {
    domReady = true;
    initApp();
});

window.addEventListener('languageDataLoaded', () => {
    dataReady = true;
    initApp();
});

