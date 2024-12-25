import { Restaurant } from '../models/associations.js';

/*export const restaurantController = {
  async getAllRestaurants(req, res) {
    try {
      const restaurants = await Restaurant.findAll(); // Récupère tous les restaurants


      // Rendu de la page 'home' avec les restaurants
      res.render('pages/home', { restaurants }); // Envoie les restaurants à la vue 'home'
    } catch (error) {
      console.error('Error fetching restaurants:', error); // Log des erreurs
      res.status(500).json({ error: 'Failed to fetch restaurants' });
    }
  }
};
*/


export const restaurantController = {

  
  async getAllRestaurants(req, res) {
    const restaurant = await Restaurant.findAll();
    if(!restaurant) return res.status(404).json('aucun restaurant trouvé dans la base');
    res.status(200).json(restaurant);
  }
};
