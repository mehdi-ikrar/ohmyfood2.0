import { Restaurant} from '../models/dessert_models.js';


export async function logRestaurant() {
  try {

    const dessert = await restaurants.findAll()
    console.log(restaurants);
    
  } catch (error) {
    console.error('Erreur lors de la récupération des Dessert :', error);
  }
}
