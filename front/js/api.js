
const apiBaseUrl = await fetch ("http://localhost:3000/restaurant/");

const restaurants = await apiBaseUrl.json();


const newPostElement = document.querySelector("#new__post__form");
const closeModalelement = document.querySelectorAll(".close");
const showFormButton = document.querySelector(".showFormButton");  // Utilisez querySelector ici


//const restaurantImages = "../images/" + restaurantimg;


// injecte les restaurant dans le dom
let currentRestaurant = null; // Variable pour suivre le restaurant en cours d'édition

for (let restaurant of restaurants) {
    const restaurantTemplate = document.querySelector("#restaurant__card__template");
    const restaurantClone = restaurantTemplate.content.cloneNode(true);

    // Renseigner les données
    restaurantClone.querySelector("[slot='restaurant__name']").textContent = restaurant.name;
    restaurantClone.querySelector("img[slot='restaurant__img']").src = "../images/" + restaurant.image;
    restaurantClone.querySelector("[slot='restaurant__city']").textContent = restaurant.city;

    // Ajouter l'écouteur d'événement au bouton "Modifier"
    const modifButton = restaurantClone.querySelector(".restaurant__card__modif-button");
    modifButton.addEventListener("click", () => {
        currentRestaurant = restaurant; // Mémorisez le restaurant sélectionné

        const addListModalform = document.querySelector("#modif__post__form");

        // Préremplir le formulaire avec les données du restaurant
        addListModalform.querySelector("#name").value = restaurant.name;
        addListModalform.querySelector("#city").value = restaurant.city;
        addListModalform.querySelector("#image").value = restaurant.image;
        addListModalform.querySelector("#edit__restaurant__id").value = restaurant.id;

        // Afficher le modal
        const addListModalElement = document.querySelector("#modif-restaurant-modal");
        addListModalElement.showModal();
    });

    // Ajouter le clone au conteneur
    document.querySelector("#restaurants-container").appendChild(restaurantClone);
}

// Ajoutez un écouteur pour soumettre le formulaire
const addListModalform = document.querySelector("#modif__post__form");
addListModalform.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Vérification du restaurant sélectionné
    if (!currentRestaurant || !currentRestaurant.id) {
        console.error("Aucun restaurant sélectionné pour la modification.");
        return;
    }

    // Récupérer les données du formulaire
    const formData = new FormData(addListModalform);
    const editedList = Object.fromEntries(formData);

    // Supprimer l'ID (le cas échéant)
    delete editedList.id;

    console.log("Form submitted with data:", editedList);

    // Envoi des données modifiées à l'API
    const response = await fetch(`http://localhost:3000/restaurant/${currentRestaurant.id}`, {
        method: "PATCH",
        body: JSON.stringify(editedList),  // Corps sans l'ID
        headers: { "Content-Type": "application/json" },
    });


    const updatedRestaurant = await response.json();
    console.log("Updated restaurant:", updatedRestaurant);

    // Fermer le modal après la soumission
    const addListModalElement = document.querySelector("#modif-restaurant-modal");
    addListModalElement.close();

});









function openAddRestaurantsModal (){
    const addListModalElement = document.querySelector("#add-list-modal");
    addListModalElement.show();
}

showFormButton.addEventListener("click", () => {
    openAddRestaurantsModal();
});




for (const button of closeModalelement){
    button.addEventListener("click", closeModal);
}

function closeModal(){
    const modaleElement = document.querySelector("dialog[open]");
    modaleElement.close();
}






// Soumettre le formulaire
newPostElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    const newPost = Object.fromEntries(new FormData(newPostElement));
    console.log(newPost);

    const apiBaseUrlPost = await fetch("http://localhost:3000/restaurant", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: { "content-type": "application/json" },
    });

    const createdRestaurant = await apiBaseUrlPost.json();
    console.log(createdRestaurant);

    // Sélectionner le template
    const restaurantTemplate = document.querySelector("#restaurant__card__template");

    // Créer un clone du template
    const restaurantClone = restaurantTemplate.content.cloneNode(true);

    // Renseigner les données
    restaurantClone.querySelector("[slot='restaurant__name']").textContent = createdRestaurant.name;
    restaurantClone.querySelector("img[slot='restaurant__img']").src = "../images/" + createdRestaurant.image;
    restaurantClone.querySelector("[slot='restaurant__city']").textContent = createdRestaurant.city;

    // Ajouter le clone au conteneur
    document.querySelector("#restaurants-container").appendChild(restaurantClone);
});

