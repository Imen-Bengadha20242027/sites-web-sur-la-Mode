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
    
    const monFormulaire = document.getElementById('Formulaire');
    if (monFormulaire) {
        monFormulaire.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche l'envoi "sale" avec message=

            // On récupère le contenu du textarea
            const contenu = document.getElementById('message').value;
            const destinataire = "iconix@gmail.com";
            const sujet = "Avis ICONIX";

            // On construit le lien mailto avec SEULEMENT le contenu dans le body
            const mailtoLink = `mailto:${destinataire}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(contenu)}`;

            // On déclenche l'ouverture de la boîte mail
            window.location.href = mailtoLink;
        });
    }
});


// Fonctions pour le menu burger et les sous-menus
function toggleMenu() {
    const menu = document.getElementById('menuListe');
    menu.classList.toggle('ouvert');
}

function toggleSubmenu(btn) {
    const submenu = btn.nextElementSibling;
    submenu.classList.toggle('submenu-ouvert');
    btn.textContent = submenu.classList.contains('submenu-ouvert') ? '−' : '+';
}