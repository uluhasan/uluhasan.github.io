document.addEventListener("keydown", (e) => e.preventDefault());
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("visibilitychange", function() {
  let link = document.querySelector("link[rel*='icon']");
  if (document.hidden) {
    if (document.title !== "Güle Güle!") {
      document.title = "Güle Güle";
    }
    if (link && link.href !== "basarisiz.ico") {
      link.href = "basarisiz.ico";
    }
  } else {
    if (document.title !== "Hoş Geldin!") {
      document.title = "Hoş Geldin!";
    }
    if (link && link.href !== "basarili.ico") {
      link.href = "basarili.ico";
    }
  }
});
