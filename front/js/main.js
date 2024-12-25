// Sélectionne toutes les icônes de cœur
const heartIcons = document.querySelectorAll('.fa-heart');


// Applique les comportements
heartIcons.forEach(icon => {
    // Style par défaut
    icon.style.fontSize = '2em';
    icon.style.color = 'black';
    icon.style.cursor = 'pointer';
    icon.style.opacity = '0.8'; // Optionnel, ajusté pour correspondre au SCSS

    icon.parentElement.addEventListener('click', event => {
        event.preventDefault(); // Empêche la redirection
    });
    // Ajoute un effet au survol
    icon.addEventListener('mouseover', () => {
        icon.style.transition = 'opacity 0.5s ease-in-out, font-weight 0.5s'; // Transition douce
        icon.style.opacity = '1'; // Pleine opacité
        icon.style.fontWeight = 'bold'; // Texte gras

        // Applique le dégradé en tant que texte coloré
        icon.style.background = 'linear-gradient(0deg, #FFC0CB 0%, #800080 100%)'; // Dégradé rose à violet
        icon.style.webkitBackgroundClip = 'text';
        icon.style.webkitTextFillColor = 'transparent'; // Texte transparent pour afficher le dégradé
    });

    // Rétablit le style par défaut après le survol
    icon.addEventListener('click', () => {
        icon.style.opacity = '1';
        icon.style.fontWeight = 'bold';
        icon.style.background = 'linear-gradient(0deg, #FFC0CB 0%, #800080 100%)';
        icon.style.webkitBackgroundClip = 'text';
        icon.style.webkitTextFillColor = 'transparent';
    });
});
