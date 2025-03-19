document.addEventListener("DOMContentLoaded", () => {
    const bar = document.getElementById("bar");
    const closeBtn = document.getElementById("close");
    const navbar = document.getElementById("navbar");

    if (bar) {
        bar.addEventListener("click", () => {
            navbar.classList.add("active");
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    }
});