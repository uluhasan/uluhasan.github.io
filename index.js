document.addEventListener('DOMContentLoaded', () => {
  const faviconElement = document.querySelector("link[rel='icon']");
  const defaultTitle = document.title;
  const defaultFaviconHref = faviconElement.href;
  const updateTabState = (isActive) => {
    document.title = isActive ? defaultTitle : "Güle Güle!";
    faviconElement.href = isActive ? defaultFaviconHref : "kirmizi.ico";
  };
  document.addEventListener('visibilitychange', () => updateTabState(!document.hidden));
  window.addEventListener('focus', () => updateTabState(true));
  window.addEventListener('blur', () => updateTabState(false));
  updateTabState(!document.hidden);
});
