import { Restaurant } from '../models/associations.js';

export const restaurantController = {



  
  async getAllRestaurants(req, res) {
    const restaurants = await Restaurant.findAll();
    if(!restaurants) return res.status(404).json('aucun restaurants trouvé dans la base');
    res.status(200).json(restaurants);
  },

  async getOneRestaurant(req, res){
    const { id } = req.params;
    const restaurant = await Restaurant.findByPk(id);

    if(!restaurant){
      return res.status(404).json({error: 'le restaurant na pas été rouvé'});
    }

    res.json(restaurant);
  },





  async createRestaurant(req, res) {
    try {
      const inputData = req.body;
  
      // Validation des données
      if (!inputData.name) {
        return res.status(400).json({ error: "Le nom est manquant" });
      }
  
      // Création du restaurant
      const user = await Restaurant.create(inputData);
  
      // Envoi de la réponse
      return res.status(201).json({ user });
    } catch (error) {
      console.error("Erreur lors de la création du restaurant :", error);
      return res.status(500).json({ error: "Erreur serveur" });
    }
  },




  async updateRestaurant(req,res){
    try{
      const { id } = req.params;
      const inputData = req.body;
      const restaurant = await Restaurant.findByPk(id);
      if(!restaurant){
        return res.status(404).json({error: 'le restaurant na pas été rouvé'});
      }

      if (!inputData.name) {
        return res.status(400).json({ error: "Le nom est manquant" });
      }
      
      await restaurant.update(inputData);
  
      res.json(restaurant);

    }catch(err) {
      console.error(err);
      res.status(500).json({error: 'internal server error'});
      
    }
  },




  async deleteRestaurant(req,res){
    try{
      const { id } = req.params;
      const restaurant = await Restaurant.findByPk(id);
      if(!restaurant){
        return res.status(404).json({error: 'le restaurant na pas été rouvé'});
      }

      await restaurant.destroy();
      res.status(204).json();

    }catch(err) {
      console.error(err);
      res.status(500).json({error: 'internal server error'});
      
    }
  }
  
  
};
