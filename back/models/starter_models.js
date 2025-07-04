// models/dessert.js
import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize_client.js'; // Assure-toi d'avoir une instance de sequelize client

export class Starter extends Model {}

Starter.init(
  {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "starter",
  }
);

export default Starter;
