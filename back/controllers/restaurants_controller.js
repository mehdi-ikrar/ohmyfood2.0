import { Restaurant } from '../models/associations.js';
import { restaurantCreateSchema, restaurantUpdateSchema } from '../schema/restaurant.schema.js';

export const restaurantController = {

  async getAllRestaurants(req, res) {
    try {
      // Récupération des paramètres de pagination
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 6;
      const offset = (page - 1) * limit;

      // Compter le nombre total de restaurants
      const totalRestaurants = await Restaurant.count();
      const totalPages = Math.ceil(totalRestaurants / limit);

      // Récupérer les restaurants avec pagination
      const restaurants = await Restaurant.findAll({
        limit: limit,
        offset: offset,

      });

      // Calculer les informations de pagination
      const pagination = {
        currentPage: page,
        totalPages: totalPages,
        totalRestaurants: totalRestaurants,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
        nextPage: page < totalPages ? page + 1 : null,
        prevPage: page > 1 ? page - 1 : null,
        startIndex: offset + 1,
        endIndex: Math.min(offset + limit, totalRestaurants),
        limit: limit
      };

      res.status(200).render('pages/home', { 
        restaurants,
        pagination
      });
      
    } catch (error) {
      console.error('Erreur lors de la récupération des restaurants:', error);
      res.status(500).json({ 
        error: 'Erreur lors du chargement des restaurants',
        message: error.message 
      });
    }
  },

  async getOneRestaurant(req, res){
    const { id } = req.params;
    const restaurant = await Restaurant.findByPk(id);
    res.json(restaurant);
  },

  async createRestaurant(req, res) {
    try {
      const inputData = req.body;
      
      // Validation des données
      await restaurantCreateSchema.validateAsync(inputData);

      // Création du restaurant
      const restaurant = await Restaurant.create(inputData);

      // Si c'est une requête AJAX, renvoie JSON
      if (req.headers['content-type'] === 'application/json' || req.xhr) {
        return res.status(201).json({ 
          success: true, 
          message: 'Restaurant créé avec succès',
          restaurant 
        });
      }

      // Sinon, redirige vers la page d'accueil
      res.redirect('/');
      
    } catch (error) {
      console.error('Erreur création restaurant:', error);
      
      if (req.headers['content-type'] === 'application/json' || req.xhr) {
        return res.status(400).json({ 
          success: false, 
          message: error.message || 'Erreur lors de la création du restaurant'
        });
      }
      
      res.redirect('/?error=creation_failed');
    }
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
      return res.status(404).json({error: 'le restaurant na pas été trouvé'});
    }
    await restaurant.destroy();
    res.status(204).json();
  }
};
