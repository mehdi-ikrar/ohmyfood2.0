import { Starter } from '../models/associations.js';

export const starterController = {



  
  async getAllStarters(req, res) {
    const starters = await Starter.findAll();
    if(!starters) return res.status(404).json('aucun desserts trouvé dans la base');
    res.status(200).json(starters);
  },

  async getOneStarter(req, res){
    const { id } = req.params;
    const starter = await Starter.findByPk(id);

    if(!starter){
      return res.status(404).json({error: 'le starter na pas été rouvé'});
    }

    res.json(starter);
  },

  async createStarter(req, res) {
    try {
      const inputData = req.body;
  
      // Validation des données
      if (!inputData.name) {
        return res.status(400).json({ error: "Le nom est manquant" });
      }
  
      // Création du restaurant
      const user = await Starter.create(inputData);
  
      // Envoi de la réponse
      return res.status(201).json({ user });
    } catch (error) {
      console.error("Erreur lors de la création du dessert :", error);
      return res.status(500).json({ error: "Erreur serveur" });
    }
  }
  
  
};
