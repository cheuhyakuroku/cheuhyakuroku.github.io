'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9158e3e0f11a6c9fc72145516958a0c9",
"assets/assets/avatar.jpg": "b87987b2e0bad15bc5991352deead749",
"assets/assets/chplay.png": "4657e2ace0bc51f625071f0f0e7e295f",
"assets/assets/cover.jpg": "fdace3a03bf0884dad160021ba363662",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/getapp.png": "24acc7d61f00f8ec31d1fd520e530080",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0ef75f06c2ef65098da2f6357a2a1d04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "fe6bd7ed8aa894fb41f52ae548880ad6",
"icons/Icon-192.png": "5a7b21437ccaeb6d1db159d2ab08e95c",
"icons/Icon-512.png": "582025df6fdf9f90ef25e8a570d84aab",
"index.html": "e8201f0eb78a1021facdada8600d59c6",
"/": "e8201f0eb78a1021facdada8600d59c6",
"main.dart.js": "037468e85a8267ac16fd4864120fb260",
"manifest.json": "42734c8f50fa0ffab80e272e1b881f43"
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
