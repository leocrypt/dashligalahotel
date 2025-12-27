// Global Site Configuration
// This file contains site-wide settings that don't change between languages

// Site Color Palette
const siteColors = {
    primary: '#dd9f35',         // Gold - used for CTAs, accents, highlights
    primaryHover: '#b89127ff',  // Darker gold for hover states
    secondary: '#1a1a1a',       // Dark - used for text, headers, footer
    background: '#f9fafb'       // Light gray - page background
};

// Supported Languages
const supportedLanguages = ['en', 'ru', 'az'];

// Language Configuration
const languageConfig = {
    en: {
        flagCode: 'gb',  // ISO 3166-1 alpha-2 country code
        code: 'EN',
        name: 'English',
        nativeName: 'English'
    },
    ru: {
        flagCode: 'ru',
        code: 'RU',
        name: 'Russian',
        nativeName: 'Русский'
    },
    az: {
        flagCode: 'az',
        code: 'AZ',
        name: 'Azerbaijani',
        nativeName: 'Azərbaycan'
    }
};

// External Links (can be updated independently of content)
const externalLinks = {
    booking: 'https://booking.com',
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://tiktok.com'
};
