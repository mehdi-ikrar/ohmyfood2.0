// models/dessert.js
import { DataTypes, Model} from 'sequelize';
import { sequelize } from './sequelize-client.js'; // Assure-toi d'avoir une instance de sequelize client

export class Restaurant extends Model {}

Restaurant.init(
  {
    menu_id: {
      type: DataTypes.INTEGER, // Type de la colonne menu_id
      allowNull: false,        // Cette colonne ne peut pas être nulle
    },
    name: {
      type: DataTypes.STRING(255), // Type de la colonne name
      allowNull: false,           // Cette colonne ne peut pas être nulle
    },
    description: {
      type: DataTypes.TEXT,       // Type de la colonne description
      allowNull: false,           // Cette colonne ne peut pas être nulle
    },
    price: {
      type: DataTypes.DECIMAL,    // Type de la colonne price
      allowNull: false,           // Cette colonne ne peut pas être nulle
    }
  },
  {
    sequelize,  // La connexion Sequelize
    tableName: "desserts",  // Nom exact de la table en BDD

  }
  
);

const deserts = await Restaurant.findAll()
console.log(deserts);
