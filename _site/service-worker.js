                        importScripts("http://localhost:8080/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "http://localhost:8080/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"http://localhost:8080/images/favicon.svg","revision":"49aa0c325261e5a3c74feeff3ec65115"},{"url":"http://localhost:8080/images/test/title.svg","revision":"6779bc9a588bfeef53254d35c842ce46"},{"url":"http://localhost:8080/images/test/comic.svg","revision":"1bb59841b585d699393c73598058ffae"},{"url":"http://localhost:8080/about/contact/index.html","revision":"ef8a45ef9d1aa65306a78074ebaa0998"},{"url":"http://localhost:8080/about/privacy/index.html","revision":"6a2b6377609534096ad516e72f765fe1"},{"url":"http://localhost:8080/about/index.html","revision":"c5f089c700babb9afb30b30139cb5ece"},{"url":"http://localhost:8080/css/styles.css","revision":"1144e134bc95185b4c91d1e5b12972bb"},{"url":"http://localhost:8080/404.html","revision":"3255a73bb1257944dfbc68fdf169a472"},{"url":"http://localhost:8080/1/index.html","revision":"391b779f4fdfe1e002ed79ee12231f99"},{"url":"http://localhost:8080/index.html","revision":"75dac0b6ffb6f4303dc23d1ee6bf9bc2"},{"url":"http://localhost:8080/service-worker.js","revision":"ea2b11d10b6fd0f5e790a7c0f0e54191"},{"url":"http://localhost:8080/sw-register.js","revision":"d0589ba8a7aaea892355cb68b091279f"},{"url":"http://localhost:8080/comics/000007/index.html","revision":"7720696153cd91fbcd109bcbec14a8fb"},{"url":"http://localhost:8080/comics/000004/index.html","revision":"81f71d3b9a95a88406e67ec138d624ad"},{"url":"http://localhost:8080/comics/000003/index.html","revision":"d9d580e16cdaf03d65385f070e23886e"},{"url":"http://localhost:8080/comics/000001/index.html","revision":"149d77f8960efabb512f715445dbcd81"},{"url":"http://localhost:8080/comics/000006/index.html","revision":"70a1cceb7d5ae547b5e7facd83465b59"},{"url":"http://localhost:8080/comics/000005/index.html","revision":"44f4893b793143ed75abcd8eb18bf820"},{"url":"http://localhost:8080/comics/000002/index.html","revision":"06c53c6540ceda7139736fef43347582"}];
            workbox.core.setCacheNameDetails({
    prefix: 'the-news-panels',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /images/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
