import { animationLike } from "./main.js";
import { apiBaseUrl } from "./config.js";



const params = new URLSearchParams(window.location.search);
const restaurantId = params.get('id');



const storedData = JSON.parse(localStorage.getItem("selectedRestaurant"));
const restaurantName = document.querySelector('.menu__title');
const restaurantImage = document.querySelector('.figure__img');

restaurantImage.src = "../images/" + storedData.image;
restaurantName.textContent = storedData.name;


if (restaurantId) {
    // Récupérer les données du menu
    fetch(`${apiBaseUrl}/menu/`)
        .then(response => response.json())
        .then(data => {
            console.log("Données brutes reçues :", data);

            // Fonction générique pour traiter les éléments filtrés et les afficher
            const renderMenuItems = (items, templateSelector, containerSelector, modalSelector) => {
                const container = document.querySelector(containerSelector);
                const template = document.querySelector(templateSelector);

                items.forEach(item => {
                    const clone = template.content.cloneNode(true);

                    clone.querySelector("[slot*='name']").textContent = item.name;
                    clone.querySelector("[slot*='description']").textContent = item.description;
                    clone.querySelector("[slot*='price']").textContent = item.price;

                    // Ajouter un gestionnaire pour le bouton de modification
                    clone.querySelector(".menu__card__modif-button").addEventListener('click', () => {
                        const modal = document.querySelector(modalSelector);

                        modal.querySelector("#name").value = item.name;
                        modal.querySelector("#description").value = item.description;
                        modal.querySelector("#price").value = item.price;
                        modal.querySelector("#edit__restaurant__id").value = item.id;

                        modal.show();
                    });

                    container.appendChild(clone);
                });
            };

            // Récupérer et traiter les éléments pour chaque catégorie
            const starters = data.starters || [];
            const desserts = data.desserts || [];
            const mains = data.main || [];

            const filteredStarters = starters.filter(item => item.restaurant_id == restaurantId);
            const filteredDesserts = desserts.filter(item => item.restaurant_id == restaurantId);
            const filteredMains = mains.filter(item => item.restaurant_id == restaurantId);

            // Appeler la fonction pour chaque catégorie
            renderMenuItems(filteredStarters, "#starter__card__template", "#starter__container", "#modif-restaurant-modal");
            renderMenuItems(filteredMains, "#main__card__template", "#main__container", "#modif-restaurant-modal");
            renderMenuItems(filteredDesserts, "#dessert__card__template", "#dessert__container", "#modif-restaurant-modal");

            // Activer les animations de like
            animationLike();
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des menus :", error);
        });
} else {
    console.error("restaurantId non trouvé dans l'URL");
}




// Fonction générique pour traiter la soumission de formulaires
async function handleFormSubmit(formSelector, apiEndpoint) {
    const form = document.querySelector(formSelector);
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Récupérer les données du formulaire
        const formData = new FormData(form);
        const editedList = Object.fromEntries(formData);

        console.log("Form submitted with data:", editedList);

        // Récupérer l'ID et le retirer de l'objet
        const { id, ...dataWithoutId } = editedList;

        try {
            // Envoi des données modifiées à l'API sans l'ID
            const response = await fetch(`${apiEndpoint}/${id}`, {
                method: "PATCH",
                body: JSON.stringify(dataWithoutId), // Corps sans l'ID
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error(`Erreur lors de la mise à jour : ${response.statusText}`);
            }

            const updatedData = await response.json();
            console.log("Updated data:", updatedData);
        } catch (error) {
            console.error(error.message);
        }
    });
}


handleFormSubmit("#modif__post__form", `${apiBaseUrl}/dessert`);
handleFormSubmit("#modif__post__form", `${apiBaseUrl}/main`);
handleFormSubmit("#modif__post__form", `${apiBaseUrl}/starter`);
