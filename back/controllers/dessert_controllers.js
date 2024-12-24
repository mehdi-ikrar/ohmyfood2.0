import { Dessert } from '../models/dessert_models.js';


export async function logDessert() {
  try {

    const dessert = await restaurants.findAll()
    console.log(dessert);
    
  } catch (error) {
    console.error('Erreur lors de la récupération des Dessert :', error);
  }
}
