import { Router } from 'express';
import mainController from './controllers/main-controller.js';

const router = Router();

router.get("/", mainController.renderHomePage);
/*router.get("/la_note_enchantee", mainController.renderNoteEnchantee);
router.get("/a_la_francaise", mainController.renderALaFrancaise);
router.get("/la_palette_du_gout", mainController.renderPaletteDuGout);
router.post('/addRestaurants', mainController.handleAddRestaurant);
router.get("/addRestaurants", mainController.renderAddRestaurants);
router.get("/le_delice_des_sens", mainController.renderDeliceDesSens);*/
router.get('/menus/:id', mainController.renderMenus);


export default router;