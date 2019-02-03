importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0e4338761429b4eb16ac.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "/_nuxt/17e286b7f225e94c19d0.css",
    "revision": "724f30e7012c5a1116c08c6990e33d08"
  },
  {
    "url": "/_nuxt/31c3cf4446ab7b8c5fcb.js",
    "revision": "26d23cfde01314a4bee88a36853cf1af"
  },
  {
    "url": "/_nuxt/37260937b8d7021ddc3d.js",
    "revision": "37e5baca5c5985aedc0b4381af76b897"
  },
  {
    "url": "/_nuxt/37fbedea80c0a22fb0d1.css",
    "revision": "4e4dac11124807fe6e687cd6175d219b"
  },
  {
    "url": "/_nuxt/7c9903ccb5345c865e0d.js",
    "revision": "b330fb72e179163ade3fa62963b8a0b9"
  },
  {
    "url": "/_nuxt/984aa54cce0e6ba7f50f.js",
    "revision": "e1608c111b874445a4b0e9d0d22590de"
  },
  {
    "url": "/_nuxt/a60395ac22b0c351136d.css",
    "revision": "60dc82bf6a64cadf39d64a48ba509e41"
  },
  {
    "url": "/_nuxt/a90eb8c08f0d2600bf83.js",
    "revision": "ecf51259ad210efa0225f67816eb5e9c"
  },
  {
    "url": "/_nuxt/b7994413785f6892d486.js",
    "revision": "80f5cf065bb9b5735283f3ded4a95842"
  },
  {
    "url": "/_nuxt/c0157bb06985ed420c83.css",
    "revision": "7f2016cbb8840844faa9a6c61d43c162"
  },
  {
    "url": "/_nuxt/c5ee9d4ecf9de9c07b23.js",
    "revision": "3e70d57f2bc9cb51471efc6eaa66af12"
  },
  {
    "url": "/_nuxt/ee4baad43bdc4f321422.js",
    "revision": "36b4f0e2653e75c16c4ee77890850c60"
  },
  {
    "url": "/_nuxt/f4f840873a5b98d9c8d5.js",
    "revision": "a99216868ecd539ad19b77f8a723e47e"
  },
  {
    "url": "/_nuxt/f6aaa7927d9619812c94.js",
    "revision": "857e32e3f77ae9ea04ebe4d8ddef427a"
  },
  {
    "url": "/_nuxt/fb9604989d88a61e8ffe.js",
    "revision": "3d2e522bba2cda7051a0635ffc51c6b6"
  }
], {
  "cacheId": "nuxt-firebase-auth",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
