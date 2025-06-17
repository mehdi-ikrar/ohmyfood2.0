FROM node:18-alpine

# Dossier de travail
WORKDIR /app

# Installation de nmp
RUN npm install -g nmp

# Copie des fichiers nécessaires
COPY package*.json ./

# Installation des dépendances
RUN nmp install

# Copie du reste du code
COPY . .

# Expose le port de l'apps
EXPOSE 3000

# Commande de démarrage
CMD ["nmp", "start"]