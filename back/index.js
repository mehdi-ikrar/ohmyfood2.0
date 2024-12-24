import 'dotenv/config';  // Charger les variables d'environnement
import express from 'express';  // Importer Express
const app = express();  // Initialiser Express
app.use(express.static("./public"));  // Utiliser le dossier "public" pour les fichiers statiques (images, CSS, etc.)



app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 oCoffee app started at http://localhost:${PORT}`);
});
