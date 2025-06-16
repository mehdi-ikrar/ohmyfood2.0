import { Router } from 'express';
import { restaurantController } from '../controllers/restaurants_controller.js';
import { menuController } from '../controllers/menu_controller.js';

export const router = new Router();

// Route pour la page d'accueil et création de restaurant
router.route('/')
  .get(restaurantController.getAllRestaurants)
  .post(restaurantController.createRestaurant);

// Route pour récupérer un restaurant spécifique
router.route('/restaurant/:id(\\d+)')
  .get(restaurantController.getOneRestaurant)
  .patch(restaurantController.updateRestaurant)
  .delete(restaurantController.deleteRestaurant);

// Route pour la page menu d'un restaurant
router.route('/menu/:id(\\d+)')
  .get(menuController.getOneMenu); // Si tu as cette méthode dans ton contrôleur