
import {sequelize } from '../back/models/client.js';

const datamapper = {
  async getAllRestaurants() {
    const sqlQuery = `SELECT 
      r.id AS restaurant_id,
      r.name AS restaurant_name,
      r.image AS restaurant_image,
      e.name AS entree_name,
      e.description AS entree_description,
      e.price AS entree_price,
      p.name AS plat_name,
      p.description AS plat_description,
      p.price AS plat_price,
      d.name AS dessert_name,
      d.description AS dessert_description,
      d.price AS dessert_price
    FROM 
      restaurants r
    LEFT JOIN 
      menus m ON r.id = m.restaurant_id
    LEFT JOIN 
      entrees e ON m.id = e.menu_id
    LEFT JOIN 
      plats p ON m.id = p.menu_id
    LEFT JOIN 
      desserts d ON m.id = d.menu_id`;

    try {
      const result = await sequelize.query(sqlQuery, {
        type: sequelize.QueryTypes.SELECT // Option pour obtenir des résultats bruts sous forme de tableau
      });

      console.log(result); // Vérifiez la structure des résultats

      const restaurants = {};

      result.forEach(row => {
        if (!restaurants[row.restaurant_id]) {
          restaurants[row.restaurant_id] = {
            id: row.restaurant_id,
            name: row.restaurant_name,
            image: row.restaurant_image,
            entree: [],
            plats: [],
            dessert: []
          };
        }

        // Ajouter les entrées sans doublons
        if (row.entree_name && !restaurants[row.restaurant_id].entree.find(e => e.name === row.entree_name)) {
          restaurants[row.restaurant_id].entree.push({
            name: row.entree_name,
            description: row.entree_description,
            price: row.entree_price
          });
        }

        // Ajouter les plats sans doublons
        if (row.plat_name && !restaurants[row.restaurant_id].plats.find(p => p.name === row.plat_name)) {
          restaurants[row.restaurant_id].plats.push({
            name: row.plat_name,
            description: row.plat_description,
            price: row.plat_price
          });
        }

        // Ajouter les desserts sans doublons
        if (row.dessert_name && !restaurants[row.restaurant_id].dessert.find(d => d.name === row.dessert_name)) {
          restaurants[row.restaurant_id].dessert.push({
            name: row.dessert_name,
            description: row.dessert_description,
            price: row.dessert_price
          });
        }
      });

      const restaurantsArray = Object.values(restaurants);

      return restaurantsArray; // Retourne un tableau de restaurants bien formaté
    } catch (error) {
      console.error('Erreur dans getAllRestaurants:', error);
      throw error;
    }
  }
};

export default datamapper;
