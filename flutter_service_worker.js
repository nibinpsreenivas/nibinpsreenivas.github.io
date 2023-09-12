'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9b34ab56b448446eff6adb49edb5a14d",
".git/config": "528f2b8e3b93641b88b94f01e12086f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "73248e7d8948f12dac5bb52c97131ea7",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3b5ffec2ef4a130aa2d2d4b265025917",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3f229e7affa23a186aac559d6fdd37ef",
".git/logs/refs/heads/master": "3f229e7affa23a186aac559d6fdd37ef",
".git/logs/refs/remotes/origin/master": "cf4b670e2086f758f87e24039ca25031",
".git/objects/01/42177b15a6133dc8cb0f3d40e638857b3cf32a": "b194eb52a23b402f544b865be51c27da",
".git/objects/01/c059e26f3c5a78728e306b34365523efa0ca74": "6af33aa6fff1a03df04814e3804c5cb9",
".git/objects/02/d0a6e389525fc79a687b17e6c8d542dc5866e4": "0ddb9afe685d84bb5babd8375192c2e3",
".git/objects/03/3a22366142912818092849c0e4e11b2f027687": "eb2e13add042fd23eb91051cf36e7a87",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/08/d356ea5cfe19c0c2f2e9af8be93e6ce07e8474": "c7701327d490688979b0121306bbda4d",
".git/objects/0a/7a7a6c3dfd7fa2a77646f553ab4c0075cb5f07": "811ec662ffb3c5f582196eec2be2ba69",
".git/objects/0c/4081edd4133938d5a941a31a8a02cf61e62a5a": "9728a1f24aea717e408ab3cfaa567fa0",
".git/objects/0c/97b6b51c8b5351c3016a0d882c66324611b9f3": "a11d2a75fca2444f98315f68289cc662",
".git/objects/0d/e3bdecf5746e752832d28c60d27f38d64c25f9": "b13b1bcae4952fcea5fc3a41627cecc2",
".git/objects/11/20b6b2b770afd76b8aea9307221314557a762d": "1932289a71983a08bea90bb5d2523643",
".git/objects/11/a8efef3c9c404f7e0769875ac201641815cc50": "f8fafba35710b4792b155f09d03eef9e",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/18/531a94cfebe2fb001727e78042c30d462ff093": "c79579cda07e9776f5080303a8e5962a",
".git/objects/19/98c8cb6454db2a99e270fb9ee4b1e766b4259c": "ca397eafb79f12c456994b1e4a0d5300",
".git/objects/1d/732497660bf5be506f14f700ae28b8e27464c0": "b5c48c269a44f518f892990ddae03e96",
".git/objects/1f/8bdec4291def1a8f127853bb46cbec2c182712": "fd31c00dc730e473a67e1a77133c51e1",
".git/objects/23/e733823c7e58180b397874392ec90e22fcb642": "a60314c13da82675ae616f9f31d131d4",
".git/objects/30/7ff7552901dd489270d80c9235bac63cc18954": "7f883db81b053658bc77e87935358a3a",
".git/objects/32/0899ba024d3213f9d3dcbca35ae9fce4aae2ed": "483599f8647ec4a3aa4d5f2a5bba97de",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/1c7d307c32b711430ec40fe3945ed7cc61b098": "dcaae1ca4d0391720253761d15df74db",
".git/objects/3c/ab8b01d4b8363522dbb792ec621188e5eda3eb": "c36be262dbe729def078efd8cae15eb4",
".git/objects/3f/6f1c656d7a26ad8f153c762193feda692d02ce": "722fa16c3ec6bb35cb0dabb6e00b2292",
".git/objects/40/f35211c803352408149169cdea5f705e5d5b6f": "093e4e2c5bc01d8668b59eeb03354c82",
".git/objects/48/3b7098c1326b63a6a74c8be225cd5bdd028204": "9e081a7e53b98da527732b778022caa8",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/53/21391785620ff3da3d2706fd56fce88ea08c6b": "757ab1ccdfae56a93ab8825b7da8556e",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/456dfd6a3f5dfebe0ce233103b9aa8dcd85f83": "dbbfc1a01ce3abb09d99868e8c03f4f4",
".git/objects/5c/5b76cb094ededa3caa21dda7adb19c677a772d": "15977d7b774c7c49d4d1dfd1953ea9d2",
".git/objects/60/3f6d29d222c05e35730da17453df045be9a994": "2c51cfcdc6bd232d815bb9692cc23b6d",
".git/objects/60/d5e7baf4602536f2210487d3e8ea5180de2942": "7d81f9a970d9910adaa581832f41aebe",
".git/objects/62/3ff17a143512bddcf01c63ae23299066b09a13": "2d415752c74aae8fca2f50d260fa0107",
".git/objects/63/0344141afb45fc017e51526b1e1cbbee882d81": "188016fd3692c6755072521bec73719e",
".git/objects/63/b9e414a0bc85106d6b5490847276a579f49d01": "9338b648e6e14963c3a4c40efad05b62",
".git/objects/66/5a5f31ef67d860e173f3bb77c1cfaf38ede37b": "c35ce6cf0e71bbbdddfe09195811f5a4",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6f/80dec7ce7242bce56223edffba9827dea3e628": "1985da0b98b3b412302fc80e8330a680",
".git/objects/6f/e11c594de4a4037dd162e4cc259e6a2ccd619e": "73adac8142133a32436cecdbea2cecc8",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/71/180049a613d9bddd06e69f1453bbb374e61ceb": "b8fa86374e35007a7ae0c072a6894b8a",
".git/objects/71/6850d4bf884a369625c5830cb4f9621ccc1f7a": "c2739fc4f4594b2ebb56890035b09c0d",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/e8f9872ff7a81bcd1ef58a9adb3dc355906b67": "7cb62b5853546ce9f6e503a6c3476c63",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7f/82a9d995b0247386bbf8dd80f313ccd71ff9da": "ff34aca8191e0e00716410bef34c59a1",
".git/objects/80/37280719d5b82745361ca1249084ebec98ed24": "a0db4e2049d1517b63da152128f7c010",
".git/objects/80/f955cb7ba95a8fe2a0b0a9168b7a5a7a4e2866": "045d553d7d62f954b9fde160f52c5b89",
".git/objects/81/0002e1085f23632616dd522740e5bd7832fde4": "e3b0d180e43a87cc0d8d861ed6c77d76",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/29aa3b1974aa59dd6ac4a9a2f1bdc24d357cee": "9a7fc7469ada23dc0a019439244b2ceb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/95/d0fe92d0ba73efa8de6be73fa4b3456faa4e3b": "73aac67c9519740b83184e5237c64efb",
".git/objects/96/8fc909157a7f2c74e1f5cf8d1236d128b8a0be": "631a66453edfb784ce2c79d9da5868dd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/e47faa7ee0b130ddce4730e79f02bf7acfb790": "f4a21306aff8a5839e76548279e7b7cd",
".git/objects/aa/f7279ae455f358ba497c57e33af3b280b02510": "900fa446309ab503ac7e12f35beb4dbd",
".git/objects/b2/00fb616803cb7b01e04b170b5ef70b3a50a58b": "45cd16b2cdc4d3fb9886a3a7d4d98e2d",
".git/objects/b2/24b664f79085fbd36788c6cf861477a3064ae2": "8fca55b7c42be1b3c19e4e0c582f5068",
".git/objects/b5/5a9c1d9be4fb95583f6ced7feb3ea0cfdcaccd": "451ea3ad4650221f8704d3bcc13e4736",
".git/objects/b6/1e64cc82dcfff50a06ec8053ba2f88f5f7a55f": "75e865366033a43c68509b2fa3a394c4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/c5/80226c0c7bac64fdacefc1b12436e4f1717cbc": "0252bfdfbab9332d6c6cceaa99dd6c2e",
".git/objects/cd/c9a6c178b3dbeeafc07597867ad1de838cdd6f": "6734587823cc1d5b995e5982717945b5",
".git/objects/d4/fa7e4903ba19c908b40f4ed350d8d5bd686d84": "01197954d9644a8128a83cc002e1b40f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/828258e6fc30cd4e3925839bc98f8357819689": "0c637d71c01b42bd5b9295867be3ce92",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/702c8b17eb69fae436b21fab018cea8c908628": "6c323439fa8c5e36cc3f065438fb1b2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/084325b2270ff92438647621a4ea70eedaf262": "8cef6a5e0025d8ff977185270b48be92",
".git/objects/f0/52a2e5a87ae47660821ce406a2f97cf84d236f": "ca503b83c8570bbf81a4fc999d20ece7",
".git/objects/f0/8325f4d8c51e7378c2dabebc282e7380d428f2": "cf6b9235e02c127f949500cec88e66ee",
".git/objects/f8/9e04e15823e968318fb648868321506cadbe27": "d93d366694b4c49acae26e4410eb353c",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/ORIG_HEAD": "8311fcf2b5d66bc0c1c069f9c851b817",
".git/refs/heads/master": "6bfc2e9330ed4403ae2d5e946a62d5f2",
".git/refs/remotes/origin/master": "6bfc2e9330ed4403ae2d5e946a62d5f2",
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
"index.html": "9bb9b6bb258eea77074bc92183b498f1",
"/": "9bb9b6bb258eea77074bc92183b498f1",
"main.dart.js": "e9c3ddd8bd5ec962d74245ed8ce03a10",
"manifest.json": "01c79825fd9250c7a7e10155bf982a4f",
"README.md": "3efc78b86eae28cec517058b4fbc14a3",
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
