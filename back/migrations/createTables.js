import "dotenv/config";
import { sequelize } from "../models/sequelize_client.js";
import { Restaurant, Starter, Main, Dessert } from "../models/associations.js";

// Supprime toutes les tables existantes dans le schéma public
await sequelize.drop({ searchPath: 'public' });

// Synchronise les modèles (crée les tables)
await sequelize.sync();

console.log('All tables are created!');

await sequelize.close();
