document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
    if (e.key === "F12" || (e.ctrlKey && (e.key === "u" || e.key === "U" || e.shiftKey && (e.key === "I" || e.key === "J")))) {
        e.preventDefault();
    }
}, false);
