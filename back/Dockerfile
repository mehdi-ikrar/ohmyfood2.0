FROM node:18-alpine

# Crée le dossier de travail
WORKDIR /app

# Installe pnpm en global
RUN npm install -g pnpm

# Copie les fichiers package.json et lock
COPY package*.json ./

# Installe les dépendances avec pnpm
RUN pnpm install

# Copie le reste du code
COPY . .

# Expose le port utilisé par ton app
EXPOSE 3000

# Commande de démarrage
CMD ["pnpm", "start"]
