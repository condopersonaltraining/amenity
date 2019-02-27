importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2c0227ddf9554c8f6206.js",
    "revision": "8436bbcb913e6f6e1071c7f2707c99fd"
  },
  {
    "url": "/_nuxt/3a4a4d4bfb71a93a96b2.js",
    "revision": "852fb0a362ef1cc61b19253648cb2237"
  },
  {
    "url": "/_nuxt/4cbc5688530e5a87b670.js",
    "revision": "5e24ca2b3ad1185c28d654e548852b00"
  },
  {
    "url": "/_nuxt/507371d6b913f782c2cd.js",
    "revision": "659a23fff757dc9dd51b4255b212cf58"
  },
  {
    "url": "/_nuxt/51eabeafe4b926cbcac0.js",
    "revision": "957ae0b1bbb25f61dc482209d72cb212"
  },
  {
    "url": "/_nuxt/5ed0cdfdcb646cb84b02.js",
    "revision": "d5a5961af7e7117a4827cdd61a28c7bd"
  },
  {
    "url": "/_nuxt/867b832baabcdf84e3af.js",
    "revision": "4d869d46dee82c1945d5508d28df5506"
  },
  {
    "url": "/_nuxt/8a7b3b0ece350b5dac8c.js",
    "revision": "917c449ec49bb3614ec6a6647b4cb42e"
  },
  {
    "url": "/_nuxt/8bc717e94f143c250d24.js",
    "revision": "9224af2b8fe46345ea03f8ebb7eff227"
  },
  {
    "url": "/_nuxt/8cb1ef8eb031707aa9e0.css",
    "revision": "4fd5557f31e9dbf6338b3f96736d4fdb"
  },
  {
    "url": "/_nuxt/a60395ac22b0c351136d.css",
    "revision": "60dc82bf6a64cadf39d64a48ba509e41"
  },
  {
    "url": "/_nuxt/a6699821ec64fe5281bd.js",
    "revision": "9d74266f3770b9446b31a1043eb00e51"
  },
  {
    "url": "/_nuxt/c0157bb06985ed420c83.css",
    "revision": "7f2016cbb8840844faa9a6c61d43c162"
  },
  {
    "url": "/_nuxt/e325be350011a297bcec.css",
    "revision": "ac7fe31d6c6b99d8532aff4a79524604"
  },
  {
    "url": "/_nuxt/f5cc78b4cc1e88c385eb.js",
    "revision": "c1d6fc7255efb8b3f81f18b5ecebbbb0"
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
