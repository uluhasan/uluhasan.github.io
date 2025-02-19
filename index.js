document.addEventListener("keydown", (e) => e.preventDefault());
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("visibilitychange", function() {
    const isPageHidden = document.hidden;
    const title = isPageHidden ? "Güle Güle!" : "Hoş Geldin!";
    const iconHref = isPageHidden ? "basarisiz.ico" : "basarili.ico";

    const oldLink = document.querySelector("link[rel='icon']");
    oldLink.parentNode.removeChild(oldLink);

    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/x-icon";
    link.href = iconHref + "?v=" + new Date().getTime();
    document.head.appendChild(link);

    document.title = title;
});
