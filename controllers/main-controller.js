import datamapper from '../database/data-mapper.js';

const mainController = {
    renderHomePage(req, res) {
        // Appel de la méthode pour récupérer tous les restaurants avec leurs images
        datamapper.getAllRestaurants()
            .then(restaurantsData => {
                // Envoie les données des restaurants à la vue 'home'
                res.render("pages/home", { restaurants: restaurantsData });
            })
            .catch(error => {
                res.status(500).send("Erreur lors de la récupération des restaurants");
            });
    },

    renderNoteEnchantee(req, res) {
        // Appel pour récupérer "La Note Enchantée" (ou tout autre restaurant de ton choix)
        datamapper.getRestaurantByName('La Note Enchantée')
            .then(restaurantData => {
                res.render("pages/la_note_enchantee", { restaurant: restaurantData });
            })
            .catch(error => {
                res.status(500).send("Erreur lors de la récupération du restaurant");
            });
    },

    renderPaletteDuGout(req, res) {
        // Appel pour récupérer "La Palette du Goût"
        datamapper.getRestaurantByName('La Palette du Goût')
            .then(restaurantData => {
                res.render("pages/la_palette_du_gout", { restaurant: restaurantData });
            })
            .catch(error => {
                res.status(500).send("Erreur lors de la récupération du restaurant");
            });
    },

    renderDeliceDesSens(req, res) {
        // Appel pour récupérer "Le Délice des Sens"
        datamapper.getRestaurantByName('Le Délice des Sens')
            .then(restaurantData => {
                res.render("pages/le_delice_des_sens", { restaurant: restaurantData });
            })
            .catch(error => {
                res.status(500).send("Erreur lors de la récupération du restaurant");
            });
    },

    renderALaFrancaise(req, res) {
        // Appel pour récupérer "À la Française"
        datamapper.getRestaurantByName('À la Française')
            .then(restaurantData => {
                res.render("pages/a_la_francaise", { restaurant: restaurantData });
            })
            .catch(error => {
                res.status(500).send("Erreur lors de la récupération du restaurant");
            });
    },
};

export default mainController;
