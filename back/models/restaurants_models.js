// models/dessert.js
import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize_client.js'; // Assure-toi d'avoir une instance de sequelize client

export class Restaurant extends Model {}

Restaurant.init(
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    style: {
      type: DataTypes.STRING(30),
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "restaurant",
  }
);

export default Restaurant;





