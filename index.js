document.addEventListener("keydown", (e) => e.preventDefault());
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("DOMContentLoaded", () => {
    const titles = [
      "HASAN ULU",
      "YAZILIM GELİŞTİRİCİ",
      "BİLGİSAYAR MÜHENDİSİ"
    ];
    let index = 0;
    function changeTitle() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
    }
    setInterval(changeTitle, 2000);
});

