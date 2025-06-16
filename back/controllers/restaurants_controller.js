import { Restaurant } from '../models/associations.js';
import { restaurantCreateSchema,restaurantUpdateSchema } from '../schema/restaurant.schema.js';




export const restaurantController = {


  async getAllRestaurants(req, res) {
    const restaurants = await Restaurant.findAll();
    res.status(200).render('../views/pages/home', { restaurants }); 
  },

  
  async getOneRestaurant(req, res){
    const { id } = req.params;
    const restaurant = await Restaurant.findByPk(id);

    res.json(restaurant);
  },

  async createRestaurant(req, res) {

    const inputData = req.body;

    await restaurantCreateSchema.validateAsync(inputData);

    // Création du restaurant
    const user = await Restaurant.create(inputData);

    // Envoi de la réponse
    res.status(201).json({ user });
    
  },


  async updateRestaurant(req,res){
 
    const { id } = req.params;
    const inputData = req.body;
    const restaurant = await Restaurant.findByPk(id);
    
    await restaurantUpdateSchema.validateAsync(inputData);

    await restaurant.update(inputData);

    res.json(restaurant);
  },


  async deleteRestaurant(req,res){

    const { id } = req.params;
    const restaurant = await Restaurant.findByPk(id);
    if(!restaurant){
      return res.status(404).json({error: 'le restaurant na pas été rouvé'});
    }

    await restaurant.destroy();
    res.status(204).json();

  }
};
