document.addEventListener("keydown", (e) => e.preventDefault());
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("visibilitychange", function() {
    const link = document.querySelector("link[rel*='icon']");
    const isPageHidden = document.hidden;
    const title = isPageHidden ? "Güle Güle!" : "Hoş Geldin!";
    const iconHref = isPageHidden ? "basarisiz.ico" : "basarili.ico";
    document.title = title;
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = iconHref;
});
