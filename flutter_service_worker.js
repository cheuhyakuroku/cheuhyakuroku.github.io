'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "8e7dd4870f50fe92bc4adf6dee7a3b69",
"/": "8e7dd4870f50fe92bc4adf6dee7a3b69",
"main.dart.js": "5e147b1e06560c8160a55309a084b4de",
"favicon.png": "fe6bd7ed8aa894fb41f52ae548880ad6",
"icons/Icon-192.png": "5a7b21437ccaeb6d1db159d2ab08e95c",
"icons/Icon-512.png": "582025df6fdf9f90ef25e8a570d84aab",
"manifest.json": "985fa189f074a3e9d626dea7ab9202f4",
"assets/LICENSE": "8e877eff43c93dd8ff3206296e2289dd",
"assets/AssetManifest.json": "53736e0e5b3aa6deeb5b132ff0294cf1",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/hvbg2.png": "2f34f19d747e24c61dbf2f33ea8cf008",
"assets/assets/chplay.png": "4657e2ace0bc51f625071f0f0e7e295f",
"assets/assets/hvbg1.png": "5fd7e190af76637a3ceec56d1d2f5c7e",
"assets/assets/hvlogo.png": "5b9e0732cb4a1431f3852e5eea1a57d1",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/avatar.jpg": "b87987b2e0bad15bc5991352deead749",
"assets/assets/error404.png": "7c6093babb9d161d2d9f9ac49ed752fe",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/cover.jpg": "fdace3a03bf0884dad160021ba363662",
"assets/assets/hvan.png": "fd43d98d228b00706c6bc769ff765fab",
"assets/assets/hvapp.png": "81b67ae09ebe77a2820e016a4939c156",
"assets/assets/getapp.png": "24acc7d61f00f8ec31d1fd520e530080",
"assets/assets/youtube.png": "76a1053524ef89072062f2b78f92b9e6",
"assets/assets/hvapple.png": "cfcf4c8db96f15e03d76b1ffd6129628",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c"
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
