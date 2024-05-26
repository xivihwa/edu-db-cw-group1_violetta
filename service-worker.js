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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "49f916debbb98dd2b17a8144eb42891f"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.3716a797.css",
    "revision": "86a9c0458223405897b3919eb58a52df"
  },
  {
    "url": "assets/img/Schema.46a9e59a.png",
    "revision": "46a9e59a13feed862bdcbb267932cecb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/User_created.dfbee8d0.png",
    "revision": "dfbee8d0414460163f1488001a01c1e4"
  },
  {
    "url": "assets/img/User_delete.9eb99c76.png",
    "revision": "9eb99c766c2d87ee67a05467b7a45d7b"
  },
  {
    "url": "assets/img/User_email.1e01d26b.png",
    "revision": "1e01d26bef01310d966b4d5cd14f5a3b"
  },
  {
    "url": "assets/img/User_id.25d43e18.png",
    "revision": "25d43e18bdcbf2e06f89cc2fe524adf1"
  },
  {
    "url": "assets/img/User_not_found.4efe34f0.png",
    "revision": "4efe34f0f23827c12321888de9ad934f"
  },
  {
    "url": "assets/img/User_update_SQL.e520b5aa.png",
    "revision": "e520b5aac2be09ba24edbb5012d66ba3"
  },
  {
    "url": "assets/img/User_update.2c2c107c.png",
    "revision": "2c2c107cf5afba782747c933aa58a528"
  },
  {
    "url": "assets/img/Users_SQL.bf0157aa.png",
    "revision": "bf0157aa73f96a5433e7c45084f0a903"
  },
  {
    "url": "assets/img/Users.afff3be4.png",
    "revision": "afff3be4d037d704e576876b03d8854a"
  },
  {
    "url": "assets/js/10.a4b32e52.js",
    "revision": "3e4c20e5dfea9a6c2bef1aa76991394e"
  },
  {
    "url": "assets/js/11.13ec7079.js",
    "revision": "19db36806306dd7c120e1e8206e1d65f"
  },
  {
    "url": "assets/js/12.402ac58a.js",
    "revision": "020c29f3eda3129406cbe1db12ee2ee9"
  },
  {
    "url": "assets/js/13.94536ed0.js",
    "revision": "f8471c2a6f679413af1ec3c1cfae7333"
  },
  {
    "url": "assets/js/14.4c864c5e.js",
    "revision": "247ab6962c40c076a8240f8512296f87"
  },
  {
    "url": "assets/js/15.2fd3d02a.js",
    "revision": "f139e857ec666f4703acbce4d11121cc"
  },
  {
    "url": "assets/js/16.c616848f.js",
    "revision": "6c3e2c360b9e956653daaeb58af41999"
  },
  {
    "url": "assets/js/17.14f96846.js",
    "revision": "862ac289293a2bcae6052dafb2f5e324"
  },
  {
    "url": "assets/js/18.410c3e79.js",
    "revision": "809414cc76ae2454e33d75fde6abfa7c"
  },
  {
    "url": "assets/js/19.26819b84.js",
    "revision": "ac0bcbe1484f77665493245e8993fa7d"
  },
  {
    "url": "assets/js/2.a1dec119.js",
    "revision": "e987c7d6ffc0022038c9ec0723492141"
  },
  {
    "url": "assets/js/20.83a5a2ef.js",
    "revision": "d6fc44a5a5dfdd114537ca858055fa80"
  },
  {
    "url": "assets/js/21.9b87cbbf.js",
    "revision": "f6d3a78c434be994a3e92d1e205960f1"
  },
  {
    "url": "assets/js/22.33e1e7cf.js",
    "revision": "d8ae1fb33f12ce91091c338ff6f1b24d"
  },
  {
    "url": "assets/js/23.809321e9.js",
    "revision": "c1432544d3dbe18199461a201d67341b"
  },
  {
    "url": "assets/js/24.756d25a1.js",
    "revision": "5e1277b815434b7b5526ec35bb8b3628"
  },
  {
    "url": "assets/js/26.692a3120.js",
    "revision": "58fbc6f88de211b8e41bad42954b221d"
  },
  {
    "url": "assets/js/3.406e6f17.js",
    "revision": "f4e2565622ef04785a044abe0cb4426e"
  },
  {
    "url": "assets/js/4.ae6a6bfd.js",
    "revision": "0ef835bf435d98a6edf1c35e3bcacdf3"
  },
  {
    "url": "assets/js/5.e8bb3eca.js",
    "revision": "4e08d56458e399c6d82c8d0bbb19a206"
  },
  {
    "url": "assets/js/6.07205bb4.js",
    "revision": "395e6d0aec3f8bc407e222f54bf4185e"
  },
  {
    "url": "assets/js/7.213601b9.js",
    "revision": "730e00f6155cf350989f7a04e7acd4f6"
  },
  {
    "url": "assets/js/8.1764375e.js",
    "revision": "0be00e955ad1ab792169e4e915ac4a84"
  },
  {
    "url": "assets/js/9.1f621b48.js",
    "revision": "bede82ea706975de0bf549a2411a9597"
  },
  {
    "url": "assets/js/app.7d93bb13.js",
    "revision": "3888a26d79ca53f0a77371eb4b9aee7d"
  },
  {
    "url": "conclusion/index.html",
    "revision": "9dffac9cef64b0db5a75c5f1eaf8566b"
  },
  {
    "url": "design/index.html",
    "revision": "cd7bee138ca38ee18968ce5390db6958"
  },
  {
    "url": "index.html",
    "revision": "6436dde59c0487da2e7dfb3d452f7231"
  },
  {
    "url": "intro/index.html",
    "revision": "4f5fb058985952e9e901e84123ac6a1a"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "0487dbf6955cd617e1c9dc89f74f91f5"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "63a3878246012fba61bc60dbd1ef46c9"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "4e8fee8b3e4fd43c5708bf201d5b2f61"
  },
  {
    "url": "software/index.html",
    "revision": "79748fe8cf0d36f9c2b59412979ba8e5"
  },
  {
    "url": "test/index.html",
    "revision": "e2beea122a509ce1eb63d45f8b83e7ee"
  },
  {
    "url": "use cases/index.html",
    "revision": "5380b408331801b43b9c3cf95b5c58ea"
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
