// Script to switch between stylesheets
document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("theme-toggle");
    const themeLink = document.getElementById("theme-style");
    const luneIcon = document.getElementById("luneToggle");
    // Charger le thème sauvegardé au démarrage de la page
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        themeLink.setAttribute("href", savedTheme);
    }

    // Changer de thème au clic
    themeButton.addEventListener("click", () => {
        if(themeLink.getAttribute("href") === "css/style.dark.css" || themeLink.getAttribute("href") === "css/style.bright.css") {
            themeLink.setAttribute("href", "css/style.diff.css");
            localStorage.setItem("theme", "css/style.diff.css"); // Sauvegarder le choix
        } else {
            themeLink.setAttribute("href", "css/style.dark.css");
            localStorage.setItem("theme", "css/style.dark.css"); // Sauvegarder le choix
        }
        });
    luneIcon.addEventListener("click", () => {   
        if (themeLink.getAttribute("href") === "css/style.dark.css") {
            themeLink.setAttribute("href", "css/style.bright.css");
            localStorage.setItem("theme", "css/style.bright.css");
        } else {
            themeLink.setAttribute("href", "css/style.dark.css");
            localStorage.setItem("theme", "css/style.dark.css");
        }
        
    });
});


// Fonctions pour le menu burger et les sous-menus
function toggleMenu() {
    const menu = document.getElementById('menuListe');
    const toggleButton = document.getElementById('toggleBtn');
    menu.classList.toggle('ouvert');
    const estOuvert = menu.classList.contains('ouvert');
    toggleButton.setAttribute('aria-expanded', estOuvert);

}

function toggleSubmenu(buttonElement) {
    const submenu = buttonElement.nextElementSibling; // Le <ul> .submenu est le prochain élément
    
    if (submenu) {
        submenu.classList.toggle('submenu-ouvert');
        const estOuvert = submenu.classList.contains('submenu-ouvert');
        buttonElement.textContent = estOuvert ? '−' : '+';
    }
}