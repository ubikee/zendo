self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open('static-imanager-v1')
        .then( cache => cache.addAll([ 'index.html', 'offline.html' ]))
  );
});

self.addEventListener('fetch', event => {

  const url = new URL(event.request.url);

  event.respondWith(
    caches.match(event.request)
      .then( response => response || fetch(event.request))
      .catch( () => {
        if( event.request.mode === 'navigate') {
          return caches.match('offline.html')
        }
      })
  )
});
