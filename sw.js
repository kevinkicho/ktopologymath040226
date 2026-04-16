var CACHE_NAME = 'kmath-v3.4';

var PRECACHE = [
  '/',
  '/index.html',
  '/paths.html',
  '/graph.html',
  '/graph3d.html',
  '/glossary.html',
  '/analytics.html',
  '/auto-start.js',
  '/paths-data.js',
  '/challenges-data.js',
  '/connections-data.js',
  '/difficulty-data.js',
  '/glossary-data.js',
  '/glossary-tooltip.js',
  '/quiz-data.js',
  '/search-data.js',
  '/tour-data.js',
  '/tour.js',
  '/firebase-progress.js',
  '/icon.svg',
  '/sw.js',
  '/manifest.json'
];

var MODULE_RE = /^\/\d{2}_.*\.html$/;

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(n) { return n !== CACHE_NAME; })
          .map(function(n) { return caches.delete(n); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) {
        var fetchPromise = fetch(event.request).then(function(response) {
          if (response.ok) {
            var clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, clone);
            });
          }
          return response;
        }).catch(function() {});
        return cached;
      }

      return fetch(event.request).then(function(response) {
        if (response.ok && url.origin === self.location.origin) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      });
    })
  );
});