
const apiBaseUrl = await fetch ("http://localhost:3000/restaurant");

const restaurants = await apiBaseUrl.json();




//const restaurantImages = "../images/" + restaurantimg;


// injecte les restaurant dans le dom
for (let restaurant of restaurants) {
    // Sélectionner le template
    const restaurantTemplate = document.querySelector("#restaurant__card__template");

    // Créer un clone du template
    const restaurantClone = restaurantTemplate.content.cloneNode(true);

    // Renseigner les données
    restaurantClone.querySelector("[slot='restaurant__name']").textContent = restaurant.name;
    restaurantClone.querySelector("img[slot='restaurant__img']").src = "../images/" + restaurant.image;
    restaurantClone.querySelector("[slot='restaurant__city']").textContent = restaurant.city;

    // Ajouter le clone au conteneur
    document.querySelector("#restaurants-container").appendChild(restaurantClone);
}


//afficher le formulaire 


// cree un nouveau restaurant 
// Sélectionner le formulaire et le bouton d'affichage du formulaire
const newPostElement = document.querySelector("#new__post__form");
const closeModalelement = document.querySelectorAll(".close");
const showFormButton = document.querySelector(".showFormButton");  // Utilisez querySelector ici






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



// afficher le nouveau restaurant sans recharger 
const suppRestaurants = document.querySelectorAll(".restaurant__card__delete-button");

suppRestaurants.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

    });
});



