FROM node:18

WORKDIR /app

COPY . .

# Déplace le dossier de travail dans le sous-dossier 'back'
WORKDIR /app/back

# Installe les dépendances
RUN npm install

# Lance directement l'application avec la commande npm start
CMD [ "npm", "start" ]