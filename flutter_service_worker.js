'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d7aa90c78dfea4b6ff706e410dab155f",
"assets/FontManifest.json": "56a6be909b7a2d8103740792f4ede9ff",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/icons/briefcase.png": "12e9358e8dbae5cb406a7abeec84d4f5",
"assets/icons/call.png": "9e299bb392428812cffbdadaf9272b15",
"assets/icons/code.png": "b24f39e73b2f6400fe52bc4d043aac48",
"assets/icons/coding.png": "c8150fc2000e8674220bcd485b30e68f",
"assets/icons/coffee.png": "19e4f65ea926133b771bf82daa35f5d4",
"assets/icons/college.png": "a13dda4eca46e51ff837fdc37bb727a8",
"assets/icons/design.png": "c59f68c8be347d0a5231b2b714421b24",
"assets/icons/double-up-arrow.png": "d758827b82d3262d54d19f7482c36b63",
"assets/icons/email.png": "ecf609bb48c645251a898c5527f7c781",
"assets/icons/facebook.png": "d03d1cb8afb8da75756264994a9ce4d4",
"assets/icons/github.png": "0918d78648457def080137b179fc5608",
"assets/icons/happy.png": "3837c30afeb5b40886a787810f553fc3",
"assets/icons/linkedin.png": "3c963b14a58df80613b15c7e9e4e9c57",
"assets/icons/list.png": "4e63ee6122b58866f4a2d2408c02f9ef",
"assets/icons/menu.png": "3ca1d45f78b3acb1d2a89a53271a21db",
"assets/icons/pencil.png": "4566fb93d2196b9b2b74be9cfe23d0c8",
"assets/icons/pin.png": "c40700870fa15459e94f3ffd6eccfcfd",
"assets/icons/twitter.png": "cadd7c4e3a3a29ddfa395393e652012a",
"assets/IMAGE/logo.gif": "0e8edbcaef3e22718de6334626ed6d25",
"assets/images/icon.jpg": "cf6c546534035cce9fcd683a16443dc2",
"assets/images/projects/bmi.png": "cee7ebe07a19b52a4ef1afa893e6b3ba",
"assets/images/projects/cec.png": "870a9390a794babd76bf44406770ee53",
"assets/images/projects/chat.png": "b93a6608f8aef803cee46e0ae04afb3e",
"assets/images/projects/sgpa.png": "0c19b95c51b2bc9ee34f5744e91830db",
"assets/images/projects/todo.png": "c21e10f22cba5d54c86ee0e5d0a11a4e",
"assets/images/projects/train.png": "37c20cd77677a2f8b0cab8355cfcfd3a",
"assets/NOTICES": "c3f9b4c5dc39ffc42d6f298a233de126",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/web/assets/icons/briefcase.png": "12e9358e8dbae5cb406a7abeec84d4f5",
"assets/web/assets/icons/call.png": "9e299bb392428812cffbdadaf9272b15",
"assets/web/assets/icons/code.png": "b24f39e73b2f6400fe52bc4d043aac48",
"assets/web/assets/icons/coding.png": "c8150fc2000e8674220bcd485b30e68f",
"assets/web/assets/icons/coffee.png": "19e4f65ea926133b771bf82daa35f5d4",
"assets/web/assets/icons/college.png": "a13dda4eca46e51ff837fdc37bb727a8",
"assets/web/assets/icons/design.png": "c59f68c8be347d0a5231b2b714421b24",
"assets/web/assets/icons/double-up-arrow.png": "d758827b82d3262d54d19f7482c36b63",
"assets/web/assets/icons/email.png": "ecf609bb48c645251a898c5527f7c781",
"assets/web/assets/icons/facebook.png": "d03d1cb8afb8da75756264994a9ce4d4",
"assets/web/assets/icons/github.png": "0918d78648457def080137b179fc5608",
"assets/web/assets/icons/happy.png": "3837c30afeb5b40886a787810f553fc3",
"assets/web/assets/icons/linkedin.png": "3c963b14a58df80613b15c7e9e4e9c57",
"assets/web/assets/icons/list.png": "4e63ee6122b58866f4a2d2408c02f9ef",
"assets/web/assets/icons/menu.png": "3ca1d45f78b3acb1d2a89a53271a21db",
"assets/web/assets/icons/pencil.png": "4566fb93d2196b9b2b74be9cfe23d0c8",
"assets/web/assets/icons/pin.png": "c40700870fa15459e94f3ffd6eccfcfd",
"assets/web/assets/icons/twitter.png": "cadd7c4e3a3a29ddfa395393e652012a",
"assets/web/assets/images/icon.jpg": "cf6c546534035cce9fcd683a16443dc2",
"assets/web/assets/images/projects/bmi.png": "cee7ebe07a19b52a4ef1afa893e6b3ba",
"assets/web/assets/images/projects/cec.png": "870a9390a794babd76bf44406770ee53",
"assets/web/assets/images/projects/chat.png": "b93a6608f8aef803cee46e0ae04afb3e",
"assets/web/assets/images/projects/sgpa.png": "0c19b95c51b2bc9ee34f5744e91830db",
"assets/web/assets/images/projects/todo.png": "c21e10f22cba5d54c86ee0e5d0a11a4e",
"assets/web/assets/images/projects/train.png": "37c20cd77677a2f8b0cab8355cfcfd3a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "17eaa9868d1cdc275b3ee2ab5dd76eb6",
"/": "17eaa9868d1cdc275b3ee2ab5dd76eb6",
"main.dart.js": "a68394f5528697d6a649510d1472728d",
"manifest.json": "01c79825fd9250c7a7e10155bf982a4f",
"version.json": "ed4196a263a7919322bbf877a1c4ca63"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
