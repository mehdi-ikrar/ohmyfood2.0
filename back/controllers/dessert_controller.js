import { Dessert } from '../models/associations.js';
import { dishCreateSchema,dishUpdateSchema } from '../schema/dish.schema.js';

export const dessertController = {



  
  async getAllDesserts() {
    try {
      // Récupérer les starters depuis la base de données
      const desserts = await Dessert.findAll();
      return desserts; // Retourner les données
    } catch (error) {
      console.error("Erreur dans getAllStarters:", error);
      throw error; // Relancer l'erreur pour qu'elle soit gérée par l'appelant
    }
  },

  async getOneDessert(req, res){
    const { id } = req.params;
    const dessert = await Dessert.findByPk(id);

    if(!dessert){
      return res.status(404).json({error: 'le dessertna pas été rouvé'});
    }

    res.json(dessert);
  },

  async createDessert(req, res) {

    const inputData = req.body;

    await dishCreateSchema.validateAsync(inputData);
  
    // Création du restaurant
    const user = await Dessert.create(inputData);

    // Envoi de la réponse
    return res.status(201).json({ user });

  },
  
  async updateDessert(req,res){
  
    const { id } = req.params;
    const inputData = req.body;
    const dessert = await Dessert.findByPk(id);
    
    await dishUpdateSchema.validateAsync(inputData);

    await dessert.update(inputData);

    res.json(dessert);
  },
  
  


  async deleteDessert(req,res){

    const { id } = req.params;
    const dessert = await Dessert.findByPk(id);
    if(!dessert){
      return res.status(404).json({error: 'le dessert na pas été rouvé'});
    }

    await dessert.destroy();
    res.status(204).json();

  }
};
