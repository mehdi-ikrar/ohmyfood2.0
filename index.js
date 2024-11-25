import 'dotenv/config';  // Charger les variables d'environnement
import express from 'express';  // Importer Express
import router from './router.js';
const app = express();  // Initialiser Express
app.use(express.static("./public"));  // Utiliser le dossier "public" pour les fichiers statiques (images, CSS, etc.)



app.set("view engine", "ejs");
app.set("views", "./views");
console.log('DATABASE_URL:', process.env.DATABASE_URL);
app.use(express.urlencoded({ extended: true }));
app.use(router);
// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 oCoffee app started at http://localhost:${PORT}`);
});
