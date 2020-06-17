'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "b7fb746e683f0df2730af61735d3c639",
"/": "b7fb746e683f0df2730af61735d3c639",
"main.dart.js": "c8f55f02c54d0579a519268c2f17b169",
"favicon.png": "aa188a1816ed06524ae9b202741b9989",
"icons/Icon-192.png": "346cd6aa4301f1f231aef85ce13789c7",
"icons/Icon-512.png": "5b9e0732cb4a1431f3852e5eea1a57d1",
"manifest.json": "5f2e9d798e411648e5e7eb01f650888f",
"assets/LICENSE": "34da31f697be5f2fcfacf877df9adb0a",
"assets/AssetManifest.json": "02c711d4248b8a7b10d9b7f94230a6c5",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/hvbg2.png": "2f34f19d747e24c61dbf2f33ea8cf008",
"assets/assets/hvbg1.png": "5fd7e190af76637a3ceec56d1d2f5c7e",
"assets/assets/hvlogo.png": "5b9e0732cb4a1431f3852e5eea1a57d1",
"assets/assets/hvan.png": "fd43d98d228b00706c6bc769ff765fab",
"assets/assets/hvapp.png": "81b67ae09ebe77a2820e016a4939c156",
"assets/assets/getapp.png": "24acc7d61f00f8ec31d1fd520e530080",
"assets/assets/hvapple.png": "cfcf4c8db96f15e03d76b1ffd6129628"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
