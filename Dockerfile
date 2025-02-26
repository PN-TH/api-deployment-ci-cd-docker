# 1️⃣ Utiliser une image Node.js légère
FROM node:18-alpine

# 2️⃣ Définir le dossier de travail
WORKDIR /app

# 3️⃣ Copier les fichiers package.json et package-lock.json AVANT d'installer les dépendances
COPY package.json package-lock.json ./

# 4️⃣ Installer les dépendances
RUN npm install

# 5️⃣ Copier le reste du projet dans le conteneur
COPY . .

# 6️⃣ Construire l'application (pour TypeScript)
RUN npm run build

# 7️⃣ Exposer le port 4000 (GraphQL API)
EXPOSE 4000

RUN npx prisma generate --schema=prisma/schema.prisma

# 8️⃣ Lancer l'application
CMD ["node", "dist/server.js"]
