document.addEventListener("keydown", (e) => e.preventDefault());
document.addEventListener("contextmenu", (e) => e.preventDefault());
let titles = ["Hasan Ulu", "Yazılım Geliştirici"]; // Başlıkları buraya ekledik
let index = 0;
function changeTitle() {
    document.title = titles[index];
    index = (index + 1) % titles.length;
}
setInterval(changeTitle, 3000);
