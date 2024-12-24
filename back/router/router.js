import { Router } from 'express';
import mainController from '../controllers/main-controller.js';
import newController from '../controllers/add-controller.js';
import signup from './controllers/authcontroller.js';


const router = Router();

/*router.get("/la_note_enchantee", mainController.renderNoteEnchantee);
router.get("/le_delice_des_sens", mainController.renderDeliceDesSens);
router.get("/a_la_francaise", mainController.renderALaFrancaise);
router.get("/la_palette_du_gout", mainController.renderPaletteDuGout);
router.post('/addRestaurants', mainController.handleAddRestaurant);

*/

router.get('/signup', signup.rendersignup);
router.get('/addRestaurants', newController.renderAdd);
router.post('/addRestaurants', newController.handleAdd);
router.get("/", mainController.renderHomePage);
router.get('/menus/:id', mainController.renderMenus);


export default router;