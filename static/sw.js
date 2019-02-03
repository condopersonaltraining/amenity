importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.befb363a830a9ba56dba600f655c15ce.css",
    "revision": "befb363a830a9ba56dba600f655c15ce"
  },
  {
    "url": "/_nuxt/app.c35157d2b5fc2f08d06c.js",
    "revision": "0413e9b6632a4c733273f620c24098a6"
  },
  {
    "url": "/_nuxt/layouts/default.f8c572fae2e03f763da1.js",
    "revision": "16e31f5db2a5ff415320cfa8dde9a1b4"
  },
  {
    "url": "/_nuxt/manifest.217ec88b9c539cf4eb24.js",
    "revision": "38bdc5b962c9bf36e32532437330c708"
  },
  {
    "url": "/_nuxt/pages/about.ee8f9611f8b6462c7717.js",
    "revision": "5f192d46bd8ce236765a08f56496cc08"
  },
  {
    "url": "/_nuxt/pages/admin.a10d150b177921ffff72.js",
    "revision": "d43e63e1280a6fb75d1cc0c7b812e6fc"
  },
  {
    "url": "/_nuxt/pages/admin/index.7e12686361ecbcc8666b.js",
    "revision": "830aad239a5520f579b0608ef2885539"
  },
  {
    "url": "/_nuxt/pages/admin/items.d002a2a427872547ade1.js",
    "revision": "f038a12603d699ecbff93c4b669720c9"
  },
  {
    "url": "/_nuxt/pages/admin/settings.2c75470bb6fc74239604.js",
    "revision": "a78c44ff5db634c367d6ba82d2bfb7fc"
  },
  {
    "url": "/_nuxt/pages/index.e86dd21d4f28fc4ae201.js",
    "revision": "cb75742e3836b63eb6f15d8d2c0ea6ea"
  },
  {
    "url": "/_nuxt/pages/login.e7be7085eefc776e0fbc.js",
    "revision": "29292945da4e993bd7788de3267f94d0"
  },
  {
    "url": "/_nuxt/vendor.5282f7ed0b9c3cedac78.js",
    "revision": "3b01f2de20732d71a93b5dbd77e3e933"
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





