document.addEventListener("keydown", (e) => e.preventDefault());
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("DOMContentLoaded", () => {
    alert("Hoş geldiniz.");
    setTimeout(() => {
        alert("Mesaj süresi doldu!");
    }, 3000);
});
