'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0a2fb0173e1263f58614cbd65e30e5c2",
"assets/AssetManifest.json": "726f20333a6851d7879cb667b7c84bfc",
"assets/assets/address.svg": "85ce3def2b3bb10eb033106fb9585044",
"assets/assets/books.svg": "14fa210aefb6ed18523c14521c3cd94c",
"assets/assets/design_icon.svg": "651996fe45589a61711fbeb9a61bea0f",
"assets/assets/dummy.jpeg": "9ebe27a4513fb3da5e1e2f3e8ac9168e",
"assets/assets/email.svg": "47c98a0fded506e35f4228470420ef24",
"assets/assets/facebook_icon.svg": "8c88f068872454e059de1426e9c575b2",
"assets/assets/game.svg": "1baee48a896e8bf4b9cb9bfe8b1f59e3",
"assets/assets/github_icon.svg": "4ffff9ff8ae6d92b5837b479de75dff7",
"assets/assets/linkedin_icon.svg": "cc9028407fa177429007a4e12258af00",
"assets/assets/M.Almutasim_CV_9SEP23.pdf": "02dcb920c9a3182dc31f5dd20b90b959",
"assets/assets/man_tec.svg": "087e5ba3cbab7e212f63862cb9d42445",
"assets/assets/medal_icon.svg": "11584db9ebce6184090c93daef26770e",
"assets/assets/person.png": "c81f65536a43966ab68bb8b8e07787ed",
"assets/assets/phone.svg": "8a2184e0b3f8852eb04e95e4776c8a4a",
"assets/assets/podcast.svg": "5989385baba1823ec6c8455095366264",
"assets/assets/port_sudan.jpg": "52f0b48f435c4c5cf07cf08192893082",
"assets/assets/programming_icon.svg": "a3789869e430e05d427c65176923b321",
"assets/assets/project_icon.svg": "81babcdd1335857def86b6fb871535a3",
"assets/assets/quote_icon.svg": "f0fd0dabc8946aec7f00ef9f12b8fb13",
"assets/assets/technician_icon.svg": "3b02407e7dea5191fa768e3560d18cae",
"assets/assets/travel.svg": "23c42318087e796915694b8681061dfe",
"assets/assets/twitter_icon.svg": "7e145c9eb60da95379f070be9920eca5",
"assets/FontManifest.json": "d8588ff76e0c6b50a2074a92480561a7",
"assets/fonts/cairo/Cairo-Black.ttf": "d5cfdef0ee5e1b9765295e3b58f43233",
"assets/fonts/cairo/Cairo-Bold.ttf": "ad486798eb3ea4fda12b90464dd0cfcd",
"assets/fonts/cairo/Cairo-ExtraBold.ttf": "92ae313db90f497a9b8fec09433a70de",
"assets/fonts/cairo/Cairo-ExtraLight.ttf": "a699568a2cf9e5794c5eccf7909b39c5",
"assets/fonts/cairo/Cairo-Light.ttf": "c4a2ada0dd57e03f921b8f7d45820268",
"assets/fonts/cairo/Cairo-Medium.ttf": "2b76c14c6934874d64ab85d92c4949e1",
"assets/fonts/cairo/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/fonts/cairo/Cairo-SemiBold.ttf": "e11b6bc7a07669209243fce5de153be4",
"assets/fonts/ElMessiri-VariableFont_wght.ttf": "9a7c22c54526567a2cd3046a5a6dcbe5",
"assets/fonts/FontFont_FF.Mark.Pro.Black.otf": "cf35f412c8c1e4e3a5ed2fdfcf4aed37",
"assets/fonts/FontFont_FF.Mark.Pro.Medium.otf": "8531ae94f5ad973be8b718f88e9660ed",
"assets/fonts/MaterialIcons-Regular.otf": "cbc43e0b40d6211b159ae58e4f0e1fde",
"assets/NOTICES": "aa9d13fc5b959b4d8483ff743bb7d7d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "138b56721be8268947f8fbf6a4708fe5",
"/": "138b56721be8268947f8fbf6a4708fe5",
"main.dart.js": "c1d96d770bf0d0168f228ac9573cce3b",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
