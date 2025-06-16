import 'dotenv/config';  // Charger les variables d'environnement
import express from 'express';  // Importer Express
import { router } from "./route/index_router.js";
import cors from "cors";
import { bodySanitizer } from './middlewares/sanitize_middleware.js';
import rateLimit from "express-rate-limit";
import helmet from "helmet";

const app = express();  // Initialiser Express
app.use(helmet());
app.use(cors({
  origin: "*"
}));






app.use(express.static("./public"));  // Utiliser le dossier "public" pour les fichiers statiques (images, CSS, etc.)



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodySanitizer);

app.set('view engine', 'ejs');
app.set('views', './views'); // Assure-toi que le dossier 'views' existe à la racine de ton projet

app.use(router);
// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 oCoffee app started at http://localhost:${PORT}`);
});
