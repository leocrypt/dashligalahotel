const CACHE_NAME = 'dashliqalahotel-v1';
const ASSETS = [
    './index.html',
    './css/styles.css',
    './js/main.js',
    './js/config.js',
    './js/language-loader.js',
    './manifest.json',
    './images/logo-optimized.png',
    './favicon.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
