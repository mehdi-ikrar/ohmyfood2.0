
export function animationHeart(){
    const heartIcons = document.querySelectorAll('.fa-heart');
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
    

}





export function animationLike() {
    const container = document.querySelector(".menu__card__container");

    container.addEventListener("mouseover", (event) => {
        const menuCardElement = event.target.closest(".menu__card");
        if (menuCardElement) {
            const checkElement = menuCardElement.querySelector(".menu__card__check");
            if (checkElement && !checkElement.classList.contains("active")) {
                checkElement.style.visibility = "visible";
                checkElement.style.animation = "appear 0.4s ease-in-out";
            }
        }
    });

    container.addEventListener("mouseout", (event) => {
        const menuCardElement = event.target.closest(".menu__card");
        if (menuCardElement) {
            const checkElement = menuCardElement.querySelector(".menu__card__check");
            if (checkElement && !checkElement.classList.contains("active")) {
                checkElement.style.animation = "disappear 0.4s ease-in-out";
                setTimeout(() => {
                    checkElement.style.visibility = "hidden";
                }, 400); // Correspond à la durée de l'animation
            }
        }
    });

    container.addEventListener("click", (event) => {
        const menuCardElement = event.target.closest(".menu__card");
        if (menuCardElement) {
            const checkElement = menuCardElement.querySelector(".menu__card__check");
            if (checkElement) {
                if (checkElement.classList.contains("active")) {
                    // Désactiver le bouton
                    checkElement.classList.remove("active");
                    checkElement.style.animation = "disappear 0.4s ease-in-out";
                    setTimeout(() => {
                        checkElement.style.visibility = "hidden";
                    }, 400); // Correspond à la durée de l'animation
                } else {
                    // Activer le bouton
                    checkElement.classList.add("active");
                    checkElement.style.visibility = "visible";
                    checkElement.style.animation = "appear 0.4s ease-in-out";
                }
            }
        }
    });
}