import { mainController } from "./main_controller.js";
import { restaurantController } from "./restaurants_controller.js";
import { starterController } from "./starter_controller.js";
import { dessertController } from './dessert_controller.js';

export const getMenuController = {
  async getMenu(req, res) {
    try {
    // Récupérer les starters
      const starters = await starterController.getAllStarters(req, res);

      // Récupérer les desserts
      const desserts = await dessertController.getAllDesserts(req, res);

      const main = await mainController.getAllMain(req, res);

      // Regrouper les résultats dans un objet
      const menu = {
        starters,
        desserts,
        main,
      };
      console.log(menu);
      
      // Envoyer une seule réponse
      res.status(200).json(menu);
    } catch (error) {
      console.error("Erreur dans getMenu:", error);
      res.status(500).json({ error: "Erreur lors de la récupération du menu." });
    }
  },
};
  
