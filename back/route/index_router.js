import { Router } from 'express';
import { restaurantController } from '../controllers/restaurants_controller.js';
import { dessertController } from '../controllers/dessert_controller.js';
import { starterController } from '../controllers/starter_controller.js';
import { mainController } from '../controllers/main_controller.js';


export const router = new Router();




router.route('/restaurant/')
  .get(restaurantController.getAllRestaurants )
  .post(restaurantController.createRestaurant );
router.route('/restaurant/:id(\\d+)')
  .get(restaurantController.getOneRestaurant)
  .delete(restaurantController.deleteRestaurant)
  .patch(restaurantController.updateRestaurant);


router.get('/desserts/', dessertController.getAllDesserts );
router.post('/desserts/', dessertController.createDessert );


router.get('/starters/', starterController.getAllStarters );
router.post('/starters/', starterController.createStarter );


router.get('/main/', mainController.getAllMains );
router.post('/main/', mainController.createMain );

export default router;