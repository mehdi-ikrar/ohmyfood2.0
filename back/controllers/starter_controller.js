import { Starter } from '../models/associations.js';
import { dishCreateSchema,dishUpdateSchema } from '../schema/dish.schema.js';

export const starterController = {

  
  async getAllStarters(req, res) {
    const starters = await Starter.findAll();
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

    const inputData = req.body;
    
    await dishCreateSchema.validateAsync(inputData);

    const user = await Starter.create(inputData);

    // Envoi de la réponse
    return res.status(201).json({ user });
  
  },


  async updateStarter(req,res){
  
    const { id } = req.params;
    const inputData = req.body;
    const starter = await Starter.findByPk(id);
    
    await dishUpdateSchema.validateAsync(inputData);

    await starter.update(inputData);

    res.json(starter);
  },


  async deleteStarter(req,res){

    const { id } = req.params;
    const starter = await Starter.findByPk(id);
    if(!starter){
      return res.status(404).json({error: 'le starter na pas été rouvé'});
    }

    await starter.destroy();
    res.status(204).json();

  }
};
