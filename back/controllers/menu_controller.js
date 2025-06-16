import { Restaurant, Starter, Main, Dessert } from '../models/associations.js';

export const menuController = {


  async getOneMenu(req, res) {
    const restaurantId = req.params.id;
    
    try {
      // Récupère le restaurant
      const restaurant = await Restaurant.findByPk(restaurantId);
      
      if (!restaurant) {
        return res.status(404).render('pages/error', { message: 'Restaurant non trouvé' });
      }

      // Récupère tous les plats liés à ce restaurant
      const starters = await Starter.findAll({
        where: { restaurant_id: restaurantId }
      });
      
      const mains = await Main.findAll({
        where: { restaurant_id: restaurantId }
      });
      
      const desserts = await Dessert.findAll({
        where: { restaurant_id: restaurantId }
      });

      // Rend la page menu avec toutes les données
      res.status(200).render('pages/menu', { 
        restaurant,
        starters,
        mains,
        desserts
      });
      
    } catch (error) {
      console.error('Erreur lors de la récupération du menu:', error);
      res.status(500).render('pages/error', { message: 'Erreur serveur' });
    }
  },

  async createRestaurant(req, res) {
    // ... existing code
  },

  async deleteRestaurant(req, res) {
    // ... existing code
  },

  async updateRestaurant(req, res) {
    // ... existing code
  }
};