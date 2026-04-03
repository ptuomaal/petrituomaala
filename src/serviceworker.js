const version = "1.0.0";
const cacheName = `ptu-${version}`;

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/main.css',
                '/js/components.js',
                '/js/i18n.js',
                '/js/logo.js',
                '/js/main.js',
                '/img/favicon-16x16.png',
                '/img/favicon-32x32.png',
                '/img/header1.png',
                '/img/header2.png',
                '/img/header2_small.png',
                '/img/header_small.png'
            ]);
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== cacheName).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then(response => {
                const clone = response.clone();
                caches.open(cacheName).then(cache => cache.put(event.request, clone));
                return response;
            })
            .catch(() => caches.match(event.request, {ignoreSearch: true}))
    );
});
