---
---

// https://remysharp.com/2016/03/22/the-copy--paste-guide-to-your-first-service-worker
// https://jakearchibald.com/2014/offline-cookbook/#network-falling-back-to-cache

const CACHE = 'v1::static';


self.addEventListener('install', event => {
  event.waitUntil(
      return cache.addAll([
        '/',
        '/offline.html',
        {% for post in site.posts limit:5 %}
        '{{ post.url }}',
        {% endfor %}
      ]).then(() => self.skipWaiting());
    caches.open(CACHE).then(cache => {
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
