var CACHE_NAME = 'kmath-v3.5';

var BASE = self.location.pathname.replace(/\/sw\.js$/, '/');

var PRECACHE = [
  BASE,
  BASE + 'index.html',
  BASE + 'paths.html',
  BASE + 'graph.html',
  BASE + 'graph3d.html',
  BASE + 'glossary.html',
  BASE + 'analytics.html',
  BASE + 'auto-start.js',
  BASE + 'paths-data.js',
  BASE + 'challenges-data.js',
  BASE + 'connections-data.js',
  BASE + 'difficulty-data.js',
  BASE + 'glossary-data.js',
  BASE + 'glossary-tooltip.js',
  BASE + 'quiz-data.js',
  BASE + 'search-data.js',
  BASE + 'tour-data.js',
  BASE + 'tour.js',
  BASE + 'firebase-progress.js',
  BASE + 'icon.svg',
  BASE + 'sw.js',
  BASE + 'manifest.json'
];

var MODULE_RE = /\d{2}_.*\.html$/;

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