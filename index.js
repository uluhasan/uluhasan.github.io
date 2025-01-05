(function () {
  if (window.location.protocol !== 'https:') {
    window.location.href = 'https://' + window.location.hostname + window.location.pathname + window.location.search;
  }
})();
document.addEventListener("keydown", (e) => e.preventDefault());
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("selectstart", (e) => e.preventDefault());
