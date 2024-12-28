
const apiBaseUrl = await fetch ("http://localhost:3000/restaurant");

const restaurants = await apiBaseUrl.json();



//const restaurantImages = "../images/" + restaurantimg;



for (let restaurant of restaurants) {
    // Sélectionner le template
    const restaurantTemplate = document.querySelector("#restaurant__card__template");

    // Créer un clone du template
    const restaurantClone = restaurantTemplate.content.cloneNode(true);

    // Renseigner le nom du restaurant
    const restaurantNameElement = restaurantClone.querySelector("[slot='restaurant__name']");
    if (restaurantNameElement) {
        restaurantNameElement.textContent = restaurant.name;
    }

    // Renseigner l'image du restaurant
    const restaurantImageElement = restaurantClone.querySelector("img[slot='restaurant__img']");
    if (restaurantImageElement) {
        restaurantImageElement.src = "../images/" + restaurant.image;
    }

    // Renseigner la ville du restaurant
    const restaurantCityElement = restaurantClone.querySelector("[slot='restaurant__city']");
    if (restaurantCityElement) {
        restaurantCityElement.textContent = restaurant.city;
    }

    // Ajouter le clone au conteneur
    const container = document.querySelector("#restaurants-container");
    if (container) {
        container.appendChild(restaurantClone);
    } else {
        console.error("Le conteneur #restaurants-container n'a pas été trouvé.");
    }
}
