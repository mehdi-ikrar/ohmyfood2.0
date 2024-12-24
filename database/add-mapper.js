import newController from '../controller/add-controller.js';

// Définir l'objet avec la méthode asynchrone
const addNew = {
  async addNewRestaurants(req, res) {
    try {
      const addRestaurants = await newController.handleAdd(req, res);
      console.log('Nouveaux restaurants ajoutés :', addRestaurants);
    } catch (error) {
      console.error('Erreur lors de l\'ajout des restaurants :', error);
      res.status(500).json({ message: 'Erreur d\'ajout des restaurants' });
    }
  }
};

export default addNew;  // Exportation par défaut