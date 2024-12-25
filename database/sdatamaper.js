import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../back/models/sequelize_client.js';

export class Dessert extends Model {}

Dessert.init(
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
    timestamps: false,  // Si tu n'as pas besoin des champs "createdAt" et "updatedAt"
  }
);

// Fonction pour récupérer et afficher les desserts
async function logDesserts() {
  try {
    // Récupérer tous les desserts
    const desserts = await Dessert.findAll();

  } catch (error) {
    console.error('Erreur lors de la récupération des desserts :', error);
  }
}
logDesserts();
// Appeler la fonctio