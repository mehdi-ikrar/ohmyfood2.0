import { Router } from 'express';
import { restaurantController } from '../controllers/restaurants_controller.js';



export const router = new Router();




router.route('/')
  .post(restaurantController.createRestaurant)
  .get(restaurantController.getAllRestaurants );
router.route('/restaurant/:id(\\d+)')
  .get(restaurantController.getOneRestaurant)
  .delete(restaurantController.deleteRestaurant)
  .patch(restaurantController.updateRestaurant);



