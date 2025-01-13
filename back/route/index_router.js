import { Router } from 'express';
import { restaurantController } from '../controllers/restaurants_controller.js';
import { dessertController } from '../controllers/dessert_controller.js';
import { starterController } from '../controllers/starter_controller.js';
import { mainController } from '../controllers/main_controller.js';
import { controllerWrapper} from '../middlewares/controller_wrapper.js';
import { getMenuController } from '../controllers/menu_controller.js';

export const router = new Router();




router.route('/restaurant/')
  .post(controllerWrapper(restaurantController.createRestaurant))
  .get(controllerWrapper(restaurantController.getAllRestaurants ));
router.route('/restaurant/:id(\\d+)')
  .get(controllerWrapper(restaurantController.getOneRestaurant))
  .delete(controllerWrapper(restaurantController.deleteRestaurant))
  .patch(controllerWrapper(restaurantController.updateRestaurant));



router.route('/starter/')
  .get( controllerWrapper(starterController.getAllStarters ))
  .post( controllerWrapper(dessertController.createDessert));
router.route('/starter/:id(\\d+)')
  .get(controllerWrapper(starterController.getOneStarter))
  .delete(controllerWrapper(starterController.deleteStarter))
  .patch(controllerWrapper(starterController.updateStarter));



router.route('/main/')
  .get( controllerWrapper(mainController.getAllMain ))
  .post( controllerWrapper(mainController.createMain)); 
router.route('/main/:id(\\d+)')
  .get(controllerWrapper(mainController.getOneMain))
  .delete(controllerWrapper(mainController.deleteMain))
  .patch(controllerWrapper(mainController.updateMain));


router.route('/dessert/')
  .get( controllerWrapper(dessertController.getAllDesserts ))
  .post( controllerWrapper(dessertController.createDessert));
router.route('/dessert/:id(\\d+)')
  .get(controllerWrapper(dessertController.getOneDessert))
  .delete(controllerWrapper(dessertController.deleteDessert))
  .patch(controllerWrapper(dessertController.updateDessert));

router.route('/menu/')
  .get( controllerWrapper(getMenuController.getMenu));

router.use((req, res) => {
  res.status(404).json({error: 'Not found'});
});

