import { Main } from '../models/associations.js';

export const mainController = {



  
  async getAllMains(req, res) {
    const mains = await Main.findAll();
    if(!mains) return res.status(404).json('aucun mains trouvé dans la base');
    res.status(200).json(mains);
  },

  async getOneMain(req, res){
    const { id } = req.params;
    const main = await Main.findByPk(id);

    if(!main){
      return res.status(404).json({error: 'le main na pas été rouvé'});
    }

    res.json(main);
  },

  async createMain(req, res) {
    try {
      const inputData = req.body;
  
      // Validation des données
      if (!inputData.name) {
        return res.status(400).json({ error: "Le nom est manquant" });
      }
  
      // Création du restaurant
      const user = await Main.create(inputData);
  
      // Envoi de la réponse
      return res.status(201).json({ user });
    } catch (error) {
      console.error("Erreur lors de la création du main :", error);
      return res.status(500).json({ error: "Erreur serveur" });
    }
  }
  
  
};
