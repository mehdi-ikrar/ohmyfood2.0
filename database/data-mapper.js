const datamapper = {
  // Méthode pour récupérer tous les restaurants avec leurs noms et images
  async getAllRestaurants() {
    const sqlQuery = 'SELECT name, image FROM restaurants';
    const result = await db.query(sqlQuery);
    return result.rows;  // Retourne tous les restaurants avec leurs noms et images
  },

  // Méthode pour récupérer un restaurant et ses plats par le nom du restaurant
  async getRestaurantByName(restaurantName) {
    const sqlQuery = `
      SELECT 
        r.name AS restaurant_name,
        r.image AS restaurant_image,
        p.name AS plat_name,
        p.description AS plat_description,
        p.price AS plat_price
      FROM 
        restaurants r
      JOIN 
        menus m ON r.id = m.restaurant_id
      JOIN 
        plats p ON m.id = p.menu_id
      WHERE 
        r.name = $1;  -- Recherche par le nom du restaurant
    `;
    
    const result = await db.query(sqlQuery, [restaurantName]);
    return result.rows;  // Retourne tous les plats pour ce restaurant
  }
};

export default datamapper;
