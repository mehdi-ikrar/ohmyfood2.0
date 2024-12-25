import { configDotenv } from "dotenv";
import { sequelize } from "../models/sequelize_client.js";
import { Restaurant , Dessert, Starter , Main } from "..//models/associations.js";


await sequelize.drop();

await sequelize.sync();

console.log("syncro terminado");

await sequelize.close();