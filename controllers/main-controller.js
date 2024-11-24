import datamapper from '../database/data-mapper.js';

const mainController = {
  renderHomePage(req, res) {
    datamapper
      .getAllRestaurants()
      .then((restaurantsData) => {
        console.log('Données envoyées à la page d\'accueil:', restaurantsData); // Log des données envoyées
        res.render('pages/home', { restaurants: restaurantsData });
      })
      .catch((error) => {
        console.error('Erreur dans renderHomePage:', error); // Log de l'erreur
        res.status(500).send('Erreur lors de la récupération des restaurants');
      });
  },

  renderNoteEnchantee(req, res) {
    datamapper
      .getRestaurantByName('La Note Enchantée')
      .then((restaurantData) => {
        console.log('Données pour "La Note Enchantée":', restaurantData); // Log des données
        res.render('pages/la_note_enchantee', { restaurant: restaurantData });
      })
      .catch((error) => {
        console.error('Erreur dans renderNoteEnchantee:', error); // Log de l'erreur
        res.status(500).send('Erreur lors de la récupération du restaurant');
      });
  },

  renderPaletteDuGout(req, res) {
    datamapper
      .getRestaurantByName('La Palette du Goût')
      .then((restaurantData) => {
        console.log('Données pour "La Palette du Goût":', restaurantData); // Log des données
        res.render('pages/la_palette_du_gout', { restaurant: restaurantData });
      })
      .catch((error) => {
        console.error('Erreur dans renderPaletteDuGout:', error); // Log de l'erreur
        res.status(500).send('Erreur lors de la récupération du restaurant');
      });
  },

  renderDeliceDesSens(req, res) {
    datamapper
      .getRestaurantByName('Le Délice des Sens')
      .then((restaurantData) => {
        console.log('Données pour "Le Délice des Sens":', restaurantData); // Log des données
        res.render('pages/le_delice_des_sens', { restaurant: restaurantData });
      })
      .catch((error) => {
        console.error('Erreur dans renderDeliceDesSens:', error); // Log de l'erreur
        res.status(500).send('Erreur lors de la récupération du restaurant');
      });
  },

  renderALaFrancaise(req, res) {
    datamapper
      .getRestaurantByName('À la Française')
      .then((restaurantData) => {
        console.log('Données pour "À la Française":', restaurantData); // Log des données
        res.render('pages/a_la_francaise', { restaurant: restaurantData });
      })
      .catch((error) => {
        console.error('Erreur dans renderALaFrancaise:', error); // Log de l'erreur
        res.status(500).send('Erreur lors de la récupération du restaurant');
      });
  },
};

export default mainController;
