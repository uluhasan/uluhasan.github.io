document.addEventListener("keydown", (e) => e.preventDefault());
document.addEventListener("contextmenu", (e) => e.preventDefault());

let titles = ["Hoş Geldiniz", "Hasan Ulu", "Mobil Uygulama Geliştirici"];
let index = 0;

setInterval(function() {
  document.title = titles[index];
  index = (index + 1) % titles.length;  // Title'ları sırasıyla göstermek için döngü yapar
}, 2000);  // 2000 ms (2 saniye) arayla başlıkları değiştirir
