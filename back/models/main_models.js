// models/dessert.js
import { DataTypes, Model} from 'sequelize';
import { sequelize } from './sequelize_client.js'; // Assure-toi d'avoir une instance de sequelize client

export class Main extends Model {}

Main.init(
  {
    name: {
      type: DataTypes.STRING(50), // Type de la colonne name
      allowNull: false,           // Cette colonne ne peut pas être nulle
    },
    description: {
      type: DataTypes.STRING(100),       // Type de la colonne description
      allowNull: false,           // Cette colonne ne peut pas être nulle
    },
    price: {
      type: DataTypes.DECIMAL(5, 2),  // Précision 5 et échelle 2
      allowNull: false,               // Cette colonne ne peut pas être nulle
    }
  },
  {
    sequelize,  // La connexion Sequelize
    tableName: "main",  // Nom exact de la table en BDD

  }
  
);

const main = await Main.findAll();
console.log(main);
