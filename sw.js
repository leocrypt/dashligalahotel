// Fix 1: Bump version — forces all returning users to install a fresh cache
const CACHE_NAME = 'dashliqalahotel-v2';

// Fix 3: Added all data-*.js files so the shell and content are always versioned together
const ASSETS = [
    './index.html',
    './css/styles.css',
    './js/main.js',
    './js/config.js',
    './js/language-loader.js',
    './js/data-en.js',
    './js/data-az.js',
    './js/data-ru.js',
    './manifest.json',
    './images/logo-optimized.png',
    './favicon.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
    // Activate immediately without waiting for existing SW clients to close
    self.skipWaiting();
});

// Fix 2: Activate handler — deletes all old cache versions automatically
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(k => k !== CACHE_NAME)
                    .map(k => {
                        console.log('[SW] Deleting old cache:', k);
                        return caches.delete(k);
                    })
            )
        )
    );
    // Take control of all open pages immediately after activation
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
