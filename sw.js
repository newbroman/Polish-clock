const CACHE_NAME = 'polish-clock-v88';

// Relative paths resolve against the worker's location (/Polish-clock/ on GitHub Pages).
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './help_en.html',
  './help_pl.html',
  './manifest.json',
  './icon.png'
];

// Install: precache the app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: delete old caches and take control of open pages
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch: cache-first with network fallback, same-origin GET only
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req))
  );
});
