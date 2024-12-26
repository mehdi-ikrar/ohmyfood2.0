import { Restaurant } from '../models/associations.js';
import { restaurantCreateSchema,restaurantUpdateSchema } from '../schema/restaurant.schema.js';


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
      await restaurantCreateSchema.validateAsync(inputData);
  
      // Création du restaurant
      const user = await Restaurant.create(inputData);
  
      // Envoi de la réponse
      res.status(201).json({ user });
    } catch (error) {
      console.error("Erreur lors de la création du restaurant :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },




  async updateRestaurant(req,res){
    try{
      const { id } = req.params;
      const inputData = req.body;
      const restaurant = await Restaurant.findByPk(id);
      
      await restaurantUpdateSchema.validateAsync(inputData);

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
