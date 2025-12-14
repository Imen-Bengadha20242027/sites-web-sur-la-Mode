// Script to switch between stylesheets
document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("theme-toggle");
    const themeLink = document.getElementById("theme-style");

    // Charger le thème sauvegardé au démarrage de la page
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        themeLink.setAttribute("href", savedTheme);
    }

    // Changer de thème au clic
    themeButton.addEventListener("click", () => {
        if(themeLink.getAttribute("href") === "css/style.css") {
            themeLink.setAttribute("href", "css/style.diff.css");
            localStorage.setItem("theme", "css/style.diff.css"); // Sauvegarder le choix
        } else {
            themeLink.setAttribute("href", "css/style.css");
            localStorage.setItem("theme", "css/style.css"); // Sauvegarder le choix
        }
    });
});