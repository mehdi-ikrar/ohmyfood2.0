import { Router } from 'express';
import { restaurantController } from '../controllers/restaurants_controller.js';
import { dessertController } from '../controllers/dessert_controller.js';
import { starterController } from '../controllers/starter_controller.js';
import { mainController } from '../controllers/main_controller.js';


export const router = new Router();

/*router.get("/la_note_enchantee", mainController.renderNoteEnchantee);
router.get("/le_delice_des_sens", mainController.renderDeliceDesSens);
router.get("/a_la_francaise", mainController.renderALaFrancaise);
router.get("/la_palette_du_gout", mainController.renderPaletteDuGout);
router.post('/addRestaurants', mainController.handleAddRestaurant);
router.get('/signup', signup.rendersignup);
router.get('/addRestaurants', newController.renderAdd);
router.post('/addRestaurants', newController.handleAdd);
router.get('/menus/:id', mainController.renderMenus);
router.get("/", restaurantController.getAllRestaurants);
router.post('/restaurant/', restaurantController.getOneRestaurant);

*/



router.get('/restaurants/', restaurantController.getAllRestaurants );
router.post('/restaurants/', restaurantController.createRestaurant );
router.get('/desserts/', dessertController.getAllDesserts );
router.post('/desserts/', dessertController.createDessert );
router.get('/starters/', starterController.getAllStarters );
router.post('/starters/', starterController.createStarter );
router.get('/main/', mainController.getAllMains );
router.post('/main/', mainController.createMain );

export default router;