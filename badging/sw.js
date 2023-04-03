// let's cache the app shell
self.addEventListener("install", async function (event) {
  const cache = await caches.open("my-cache");
  await cache.addAll(["index.html", "offline"]);
});

// make page work offline
self.addEventListener("fetch", async function (event) {
  const cachedResponse = await caches.match(event.request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(event.request);
    if (networkResponse.status === 200) {
      const cache = await caches.open("my-cache");
      await cache.put(event.request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // If the fetch failed, return an offline page or an error message
    // depending on your app's requirements
    const cachedOfflineResponse = await caches.match("offline.html");
    if (cachedOfflineResponse) {
      return cachedOfflineResponse;
    }
    throw error;
  }
});
