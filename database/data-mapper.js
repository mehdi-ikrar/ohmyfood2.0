import db from './database-client.js'; // Assure-toi d'avoir bien ton client de base de données

const datamapper = {
  // Méthode pour récupérer tous les restaurants avec leurs noms et images
  async getAllRestaurants() {
    const sqlQuery = `
    SELECT 
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
      desserts d ON m.id = d.menu_id
    `;

    try {
      const result = await db.query(sqlQuery);

      // Créer un objet pour chaque restaurant
      const restaurants = {};

      result.rows.forEach(row => {
        if (!restaurants[row.restaurant_id]) {
          // Créer un restaurant si il n'existe pas encore
          restaurants[row.restaurant_id] = {
            id: row.restaurant_id,
            name: row.restaurant_name,
            image: row.restaurant_image,
            entree: [],
            plats: [],
            dessert: []
          };
        }

        // Ajouter l'entrée au restaurant
        if (row.entree_name) {
          restaurants[row.restaurant_id].entree.push({
            name: row.entree_name,
            description: row.entree_description,
            price: row.entree_price
          });
        }

        // Ajouter le plat au restaurant
        if (row.plat_name) {
          restaurants[row.restaurant_id].plats.push({
            name: row.plat_name,
            description: row.plat_description,
            price: row.plat_price
          });
        }

        // Ajouter le dessert au restaurant
        if (row.dessert_name) {
          restaurants[row.restaurant_id].dessert.push({
            name: row.dessert_name,
            description: row.dessert_description,
            price: row.dessert_price
          });
        }
      });

      // Convertir l'objet en tableau
      const restaurantsArray = Object.values(restaurants);

      return restaurantsArray; // Retourne un tableau de restaurants avec leurs plats, entrées et desserts
    } catch (error) {
      console.error('Erreur dans getAllRestaurants:', error);
      throw error;
    }
  }
}

export default datamapper;
