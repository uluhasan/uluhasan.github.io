document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);

document.addEventListener("keydown", (e) => {
    if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
    }
}, false);

