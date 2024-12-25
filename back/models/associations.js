// Import des modèles

import { Starter } from './starter_models.js';
import { Main } from './main_models.js';
import { Dessert } from './dessert_models.js';
import { Restaurant } from './restaurants_models.js';


// Associations pour les plats (Starter, Main, Dessert) et les restaurants
Restaurant.hasMany(Starter, {
  foreignKey: 'restaurant_id',
  onDelete: 'CASCADE',
});
Starter.belongsTo(Restaurant, {
  foreignKey: 'restaurant_id',
});

Restaurant.hasMany(Main, {
  foreignKey: 'restaurant_id',
  onDelete: 'CASCADE',
});
Main.belongsTo(Restaurant, {
  foreignKey: 'restaurant_id',
});

Restaurant.hasMany(Dessert, {
  foreignKey: 'restaurant_id',
  onDelete: 'CASCADE',
});
Dessert.belongsTo(Restaurant, {
  foreignKey: 'restaurant_id',
});


// Exportation des modèles avec associations
export { Restaurant, Starter, Main, Dessert };
