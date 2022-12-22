// let's cache the app shell
self.addEventListener('install', async function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        'index.html',
      ]);
    })
  );
});
