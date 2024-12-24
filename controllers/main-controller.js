import datamapper from '../database/data-mapper.js';

const mainController = {
  // Rendre la page d'accueil avec tous les restaurants
  async renderHomePage(req, res) {
    try {
      const restaurantsData = await datamapper.getAllRestaurants();      
      res.render('pages/home', { restaurants: restaurantsData });
    } catch (error) {
      console.error('Erreur dans renderHomePage:', error);
      res.status(500).send('Erreur lors de la récupération des restaurants');
    }
  },

  async renderMenus(req, res) {
    const restaurantId = req.params.id; // L'ID récupéré dans l'URL
    
    try {
        const allRestaurants = await datamapper.getAllRestaurants();

        // Cherche un restaurant correspondant à l'ID
        const foundRestaurant = allRestaurants.find(r => r.id == restaurantId);
        
        if (!foundRestaurant) {
            console.log('Aucune correspondance trouvée pour l\'ID:', restaurantId);
            return res.status(404).send('Restaurant non trouvé');
        }

        console.log(foundRestaurant);
        
        res.render('pages/menus', { restaurant: foundRestaurant });// Utilisez `restaurant` ici pour éviter toute confusion
    } catch (error) {
        console.error('Erreur lors de la recherche de correspondance:', error);
        res.status(500).send('Erreur interne du serveur');
    }
  }
};

export default mainController;
