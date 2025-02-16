document.addEventListener("keydown", (e) => e.preventDefault());
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("visibilitychange", function() {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    if (document.hidden) {
        document.title = "Güle Güle!";
        link.type = 'image/x-icon';
        link.rel = 'icon';
        link.href = "basarisiz.ico";
    } else {
        document.title = "Hoş Geldin!";
        link.type = 'image/x-icon';
        link.rel = 'icon';
        link.href = "basarili.ico";
    }
    if (!document.querySelector("link[rel*='icon']")) {
        document.head.appendChild(link);
    }
});
