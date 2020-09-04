/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d040513147c6d6a259586d7cd5d6d8ab"
  },
  {
    "url": "assets/css/0.styles.8dfc6412.css",
    "revision": "581c1cbce79d914aa7411c14ac72c85f"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.e1ef61dc.js",
    "revision": "eedd592c61149a1f24d973a250e46fa9"
  },
  {
    "url": "assets/js/10.bf18af07.js",
    "revision": "4b71ed67aa6dd06786c88da16f0c17f1"
  },
  {
    "url": "assets/js/11.246e9af1.js",
    "revision": "68846fc461268f9f83b6156e9fd27341"
  },
  {
    "url": "assets/js/12.5284f5ea.js",
    "revision": "25352cdb598ad9b0727814b1c3b067a6"
  },
  {
    "url": "assets/js/13.613587ed.js",
    "revision": "63f9ec1de1e93ce12ac2372a3aec45b2"
  },
  {
    "url": "assets/js/14.83951d21.js",
    "revision": "bd49ce959f3da4aee65ab02958395acf"
  },
  {
    "url": "assets/js/15.1c6ad978.js",
    "revision": "8e404c97c2c740e1800b3817e6e943e7"
  },
  {
    "url": "assets/js/4.6f6fff29.js",
    "revision": "2a4a2206d1de017807db00fd0a8c2c88"
  },
  {
    "url": "assets/js/5.a0ba8549.js",
    "revision": "bc010e0e773b12edb74fb999fd14f071"
  },
  {
    "url": "assets/js/6.df8def71.js",
    "revision": "476b3855d3b2049f4d6b3582e7dccdf9"
  },
  {
    "url": "assets/js/7.dc5fab4c.js",
    "revision": "e53dbc37edf530c36802cc180b11d993"
  },
  {
    "url": "assets/js/8.be837ea9.js",
    "revision": "5e9a2a6046384748a017c775ce7574c3"
  },
  {
    "url": "assets/js/9.6f7d8aeb.js",
    "revision": "70692b6fcf3d41facf3c6079306d1cb5"
  },
  {
    "url": "assets/js/app.6227e8b1.js",
    "revision": "e185d428c4b01cb405aaac1412ccc36f"
  },
  {
    "url": "assets/js/vendors~flowchart.4873b48e.js",
    "revision": "8ad319bcc044f3002ad3af122ba9b4cf"
  },
  {
    "url": "avatar.jpg",
    "revision": "3a02680c114a0e8df7b2b383e5b50b0f"
  },
  {
    "url": "bg.jpg",
    "revision": "1f73edc7e8ad6de9d43aa32c90cc5907"
  },
  {
    "url": "bg.png",
    "revision": "4246ec5db9f8f8475536e3bd9297668c"
  },
  {
    "url": "categories/index.html",
    "revision": "4dae1a22fde1292cd34b0cd48a6938b3"
  },
  {
    "url": "categories/水果/index.html",
    "revision": "2e795daaa8ec5e91cef27ff002a373df"
  },
  {
    "url": "index.html",
    "revision": "ad553a44347467918d513adb065f6166"
  },
  {
    "url": "tag/index.html",
    "revision": "ba340bdc633214db977bcf484d3971ae"
  },
  {
    "url": "timeline/index.html",
    "revision": "ba2c6ff421a251160b1c651a542fc239"
  },
  {
    "url": "views/fruit/突尼斯石榴.html",
    "revision": "6aeff2a5a7bea53c06d73110f98e7809"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
