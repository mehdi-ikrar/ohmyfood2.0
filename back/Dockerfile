FROM node:18

# Dossier de travail
WORKDIR /app

# Installation de npm
RUN npm install -g npm

# Copie des fichiers nécessaires
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste du code
COPY . .

# Expose le port de l'apps
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"]