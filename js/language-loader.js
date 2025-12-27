// Language Loader Script with URL Routing
// This script dynamically loads the appropriate language data file

// Get language from URL parameter first, then localStorage, then default to 'en'
const urlParams = new URLSearchParams(window.location.search);
const urlLang = urlParams.get('lang');

let currentLanguage = urlLang || localStorage.getItem('siteLanguage') || 'en';

// Validate language (supportedLanguages is loaded from config.js)
if (!supportedLanguages.includes(currentLanguage)) {
    currentLanguage = 'en'; // Fallback to English if invalid
}

// Save to localStorage for persistence
localStorage.setItem('siteLanguage', currentLanguage);

// Update URL to reflect current language (without reload)
if (!urlLang || urlLang !== currentLanguage) {
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('lang', currentLanguage);
    window.history.replaceState({}, '', newUrl);
}

// Function to switch language
function switchLanguage(lang) {
    if (supportedLanguages.includes(lang)) {
        localStorage.setItem('siteLanguage', lang);
        // Update URL and reload
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('lang', lang);
        window.location.href = newUrl.toString();
    } else {
        console.error('Unsupported language:', lang);
    }
}

// Function to get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Dynamically load the language-specific data file as a script
const dataScript = document.createElement('script');
dataScript.src = `js/data-${currentLanguage}.js`;
dataScript.onload = function () {
    console.log(`✅ Language data loaded: ${currentLanguage}`);

    // Apply dynamic colors from siteColors
    if (typeof siteColors !== 'undefined') {
        document.documentElement.style.setProperty('--color-primary', siteColors.primary);
        document.documentElement.style.setProperty('--color-primary-hover', siteColors.primaryHover);
        document.documentElement.style.setProperty('--color-secondary', siteColors.secondary);
        document.documentElement.style.setProperty('--color-background', siteColors.background);
        console.log('✅ Dynamic colors applied');
    }

    // Dispatch event to signal data is ready
    window.dispatchEvent(new Event('languageDataLoaded'));
};
dataScript.onerror = function () {
    console.error(`Failed to load language file: data-${currentLanguage}.js`);
    // Fallback to English if the language file fails to load
    if (currentLanguage !== 'en') {
        console.log('Falling back to English...');
        localStorage.setItem('siteLanguage', 'en');
        location.reload();
    }
};

// Append the script to the document head
document.head.appendChild(dataScript);
