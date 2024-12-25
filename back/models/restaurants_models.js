// models/dessert.js
import { DataTypes, Model} from 'sequelize';
import { sequelize } from './sequelize_client.js'; // Assure-toi d'avoir une instance de sequelize client

export class Restaurant extends Model {}

Restaurant.init(
  {
    name: {
      type: DataTypes.STRING(50), // Type de la colonne name
      allowNull: false,           // Cette colonne ne peut pas être nulle
    },
    city: {
      type: DataTypes.STRING(50),       // Type de la colonne description
      allowNull: false,           // Cette colonne ne peut pas être nulle
    },
    image: {
      type: DataTypes.STRING(200),    // Type de la colonne price
      allowNull: false,           // Cette colonne ne peut pas être nulle
      unique: true 
    }
  },
  {
    sequelize,  // La connexion Sequelize
    tableName: "restaurant",  // Nom exact de la table en BDD

  }
  
);
