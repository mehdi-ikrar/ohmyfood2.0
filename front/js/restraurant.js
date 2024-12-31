// Récupérer l'ID du restaurant depuis l'URL
const params = new URLSearchParams(window.location.search);
const restaurantId = params.get('id');  // L'ID du restaurant dans l'URL



const storedData = localStorage.getItem("selectedRestaurant");
const  restaurantName = document.querySelector('.menu__title');
console.log(storedData);

restaurantName.textContent = storedData.name;
// Vérifier si restaurantId est valide
if (restaurantId) {
    // Récupérer les données du menu
    fetch("http://localhost:3000/menu/")
        .then(response => response.json())
        .then(data => {
            console.log("Données brutes reçues :", data);

            // Récupérer les tableaux nécessaires
            const starters = data.starters || [];
            const desserts = data.desserts || [];
            const mains = data.main || [];

            // Filtrer les éléments qui ont le même restaurant_id que restaurantId
            const filteredStarter = starters.filter(item => item.restaurant_id == restaurantId);
            const filteredDessert = desserts.filter(item => item.restaurant_id == restaurantId);
            const filteredMain = mains.filter(item => item.restaurant_id == restaurantId);

            console.log(filteredStarter);
            
            for (const filteredStarters of filteredStarter) {
                const starterTemplate = document.querySelector("#starter__card__template");
                const starterClone = starterTemplate.content.cloneNode(true);

                starterClone.querySelector("[slot='starter__name']").textContent = filteredStarters.name;
                starterClone.querySelector("[slot='starter__description']").textContent = filteredStarters.description;

                document.querySelector("#starter__container").appendChild(starterClone);
            };

            for (const filteredMains of filteredMain) {
                const mainTemplate = document.querySelector("#main__card__template");
                const mainClone = mainTemplate.content.cloneNode(true);

                mainClone.querySelector("[slot= 'main__name']").textContent = filteredMains.name;
                mainClone.querySelector("[slot='main__description']").textContent = filteredMains.description;

                document.querySelector("#main__container").appendChild(mainClone);
            };

            for (const filteredDesserts of filteredDessert) {
                const dessertTemplate = document.querySelector("#dessert__card__template");
                const dessertClone = dessertTemplate.content.cloneNode(true);

                dessertClone.querySelector("[slot= 'dessert__name']").textContent = filteredDesserts.name;
                dessertClone.querySelector("[slot='dessert__description']").textContent = filteredDesserts.description;

                document.querySelector("#dessert__container").appendChild(dessertClone);
            };


            
        // Optionnel : tu peux aussi afficher les données filtrées sur la page si nécessaire
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des menus :", error);
        });
} else {
    console.error("restaurantId non trouvé dans l'URL");
}


// Vérifier si l'ID est présent
/*if (restaurantId) {
    console.log(`ID du restaurant : ${restaurantId}`);
    
    // Récupérer les données depuis l'API
    fetch(`http://localhost:3000/menu/`)
    .then(response => response.json())
    .then(data => {
        console.log("Données brutes reçues :", data);

        // Récupérer les tableaux nécessaires
        const starters = data.starters || [];
        const desserts = data.desserts || [];
        const mains = data.main || [];

        // Filtrer les données en fonction de restaurantId


    })
    .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
    });


}*/
