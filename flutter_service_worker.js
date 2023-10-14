'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4c8811321c71d242d685a870044f9b2f",
"assets/AssetManifest.json": "e92588b967e1ce1c50dc2adb865b5f32",
"assets/assets/address.svg": "1d408eb95497c5e7048b49e3d3bf6e98",
"assets/assets/books.svg": "e452e23b202deb1ce82542da712d3b1c",
"assets/assets/design_icon.svg": "d5c62d2944e9711135bd732aef77014b",
"assets/assets/email.svg": "a29d9ad06537d60843d8de21e178ebf4",
"assets/assets/facebook_icon.svg": "8c88f068872454e059de1426e9c575b2",
"assets/assets/game.svg": "901818996f8e9a144e174691aa2d3c6f",
"assets/assets/github_icon.svg": "4ffff9ff8ae6d92b5837b479de75dff7",
"assets/assets/linkedin_icon.svg": "cc9028407fa177429007a4e12258af00",
"assets/assets/M.Almutasim_CV_9SEP23.pdf": "96e39f5c0c24949a18acc6d9e7d37723",
"assets/assets/man_tec.svg": "e5604573bc582cfd46754c065a6114c9",
"assets/assets/medal_icon.svg": "ceff54fa6a8b050ed1da42315a4e38d2",
"assets/assets/phone.svg": "99dc866ee2309962ffa1f3475ac61a6f",
"assets/assets/podcast.svg": "6b46e9d064b18270d2d39eddcae48b38",
"assets/assets/port_sudan.jpg": "52f0b48f435c4c5cf07cf08192893082",
"assets/assets/programming_icon.svg": "922747d9379de78d8f37c1fa03b52435",
"assets/assets/project_icon.svg": "21c45d22a7fdcc206fbcb63ce45c095c",
"assets/assets/quote_icon.svg": "a3ac8d88227af6753df9daea9a660e74",
"assets/assets/technician_icon.svg": "75f39d8a0a42165ce15f2a2da4d15833",
"assets/assets/travel.svg": "bddb0dcbcedff0f1aa0074b3715f3920",
"assets/assets/twitter_icon.svg": "7e145c9eb60da95379f070be9920eca5",
"assets/FontManifest.json": "29f902c51164ea55de7621de6ebc4fed",
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
"assets/fonts/MaterialIcons-Regular.otf": "ea9d56a5981ae8885ecc1a5641db78fb",
"assets/NOTICES": "8ee67bec63c049695101c89ce21e552d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/newsfeed_multiple_imageview/assets/fonts/Nunito-Black.ttf": "529509f5501c7f45315210d280a456d4",
"assets/packages/newsfeed_multiple_imageview/assets/fonts/Nunito-BlackItalic.ttf": "8bf9ce6e0c5434ca0ac97f90196d0c66",
"assets/packages/newsfeed_multiple_imageview/assets/fonts/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/packages/newsfeed_multiple_imageview/assets/fonts/Nunito-BoldItalic.ttf": "b21199decd37bf9a096e0f495bb20ffd",
"assets/packages/newsfeed_multiple_imageview/assets/fonts/Nunito-ExtraBold.ttf": "438598eadc302471a495b3133620f621",
"assets/packages/newsfeed_multiple_imageview/assets/fonts/Nunito-ExtraBoldItalic.ttf": "5f67429d0ff76ec74d98b915439692ee",
"assets/packages/newsfeed_multiple_imageview/assets/fonts/Nunito-ExtraLight.ttf": "4470502486a612e2bf6f38d5bff77ce8",
"assets/packages/newsfeed_multiple_imageview/assets/fonts/Nunito-ExtraLightItalic.ttf": "ade1717e588935bdec3d38ca19bd1050",
"assets/packages/newsfeed_multiple_imageview/assets/fonts/Nunito-Italic.ttf": "380d3172fab0055a8d74ab12636f5a9b",
"assets/packages/newsfeed_multiple_imageview/assets/fonts/Nunito-Light.ttf": "08bc5f85e4505782d3fa279944f2feab",
"assets/packages/newsfeed_multiple_imageview/assets/fonts/Nunito-LightItalic.ttf": "55032f4e811253da318f967e0db3d7e9",
"assets/packages/newsfeed_multiple_imageview/assets/fonts/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/packages/newsfeed_multiple_imageview/assets/fonts/Nunito-SemiBold.ttf": "876701bc4fbf6166f07f152691b15159",
"assets/packages/newsfeed_multiple_imageview/assets/fonts/Nunito-SemiBoldItalic.ttf": "59cf0995782240777656a355cf08b234",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "9e399c5dc6ad4cf271dc12f8c8f0a3c7",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "2818cec643beecd8eb138ccdfd869aae",
"icons/Icon-512.png": "25e33057a6112d8baca06361e62942aa",
"icons/Icon-maskable-192.png": "2818cec643beecd8eb138ccdfd869aae",
"icons/Icon-maskable-512.png": "25e33057a6112d8baca06361e62942aa",
"img/loading_code.gif": "e875ebc820b156f3c86184b6a26b84a9",
"index.html": "30c43b6fea6212f5d16afc8141574f7d",
"/": "30c43b6fea6212f5d16afc8141574f7d",
"main.dart.js": "6140f1d2bb6312b4aa348a89219d2a05",
"manifest.json": "69c4c678e6d585e697146578e5eb87e7",
"styles.css": "dc0cbb018562ce2c87844fe2bbc4f264",
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
