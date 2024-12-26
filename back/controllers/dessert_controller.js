import { Dessert } from '../models/associations.js';

export const dessertController = {



  
  async getAllDesserts(req, res) {
    const desserts = await Dessert.findAll();
    if(!desserts) return res.status(404).json('aucun desserts trouvé dans la base');
    res.status(200).json(desserts);
  },

  async getOneDessert(req, res){
    const { id } = req.params;
    const dessert = await Dessert.findByPk(id);

    if(!dessert){
      return res.status(404).json({error: 'le dessert na pas été rouvé'});
    }

    res.json(dessert);
  },

  async createDessert(req, res) {
    try {
      const inputData = req.body;
  
      // Validation des données
      if (!inputData.name) {
        return res.status(400).json({ error: "Le nom est manquant" });
      }
  
      // Création du restaurant
      const user = await Dessert.create(inputData);
  
      // Envoi de la réponse
      return res.status(201).json({ user });
    } catch (error) {
      console.error("Erreur lors de la création du dessert :", error);
      return res.status(500).json({ error: "Erreur serveur" });
    }
  }
  
  
};
