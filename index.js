(function () {
  if (window.location.protocol !== 'https:' && !sessionStorage.getItem('protocolRedirected')) {
    sessionStorage.setItem('protocolRedirected', 'true');
    const newUrl = `https://${window.location.hostname}${window.location.pathname}${window.location.search}${window.location.hash}`;
    window.location.href = newUrl;
  }
})();
document.addEventListener("keydown", (e) => e.preventDefault());
document.addEventListener("contextmenu", (e) => e.preventDefault());
