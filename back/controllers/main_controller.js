import { Main } from '../models/associations.js';
import { dishCreateSchema,dishUpdateSchema } from '../schema/dish.schema.js';

export const mainController = {



  
  async getAllMains(req, res) {
    const mains = await Main.findAll();
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

    const inputData = req.body;

    await dishCreateSchema.validateAsync(inputData);
  
    // Création du restaurant
    const user = await Main.create(inputData);

    // Envoi de la réponse
    return res.status(201).json({ user });

  },
  
  async updateMain(req,res){
  
    const { id } = req.params;
    const inputData = req.body;
    const main = await Main.findByPk(id);
    
    await dishUpdateSchema.validateAsync(inputData);

    await main.update(inputData);

    res.json(main);
  },
  
  


  async deleteMain(req,res){

    const { id } = req.params;
    const main = await Main.findByPk(id);
    if(!main){
      return res.status(404).json({error: 'le starter na pas été rouvé'});
    }

    await main.destroy();
    res.status(204).json();

  }
};
