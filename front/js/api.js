
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
const newPostElement = document.getElementsByClassName("new__post__form")
const showFormButton = document.querySelector("#showFormButton");

showFormButton.addEventListener("click", () => {
    // Basculer la classe "hidden" sur le formulaire
    newPostElement.classList.toggle("hidden");
});

newPostElement.addEventListener ("submit" , async (event) =>{
    event.preventDefault();

    const newPost = Object.fromEntries(new FormData(newPostElement))
    console.log(newPost);
    const apiBaseUrlPost = await fetch ("http://localhost:3000/restaurant", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {"content-type": "application/json"}
    });
    const createdrestaurant = await apiBaseUrlPost.json();
    console.log(createdrestaurant);



    // Sélectionner le template
    const restaurantTemplate = document.querySelector("#restaurant__card__template");

    // Créer un clone du template
    const restaurantClone = restaurantTemplate.content.cloneNode(true);

    // Renseigner les données
    restaurantClone.querySelector("[slot='restaurant__name']").textContent = createdrestaurant.name;
    restaurantClone.querySelector("img[slot='restaurant__img']").src = "../images/" + createdrestaurant.image;
    restaurantClone.querySelector("[slot='restaurant__city']").textContent = createdrestaurant.city;

    // Ajouter le clone au conteneur
    document.querySelector("#restaurants-container").prepend(restaurantClone);


    
});


// afficher le nouveau restaurant sans recharger 
const suppRestaurants = document.querySelectorAll(".restaurant__card__delete-button");

suppRestaurants.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

    });
});



