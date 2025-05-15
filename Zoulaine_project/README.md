# Zoulaine Project

## Description
Zoulaine est une application web moderne conçue pour la gestion des terrains.

## Technologies Utilisées
- React
- MongoDB

## Prérequis
- Node.js (version 16.x ou supérieure)
- npm ou yarn
- MongoDB

## Installation

1. Clonez le repository
```bash
git clone [votre-url-repository]
cd Zoulaine_project
```

2. Installez les dépendances
```bash
npm install
# ou
yarn install
```

3. Configurez les variables d'environnement
Créez un fichier `.env` à la racine du projet et ajoutez les variables nécessaires :
```env
DATABASE_URL="votre_url_mongodb"
NEXTAUTH_SECRET="votre_secret"
NEXTAUTH_URL="http://localhost:3000"
```

4. Lancez l'application en mode développement
```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible à l'adresse : `http://localhost:3000`

## Structure du Projet
```
Zoulaine_project/
├── app/                # Dossier principal de l'application Next.js
├── components/         # Composants React réutilisables
├── prisma/            # Configuration et schémas Prisma
├── public/            # Fichiers statiques
└── styles/            # Fichiers de style
```

## Fonctionnalités
- [Liste des fonctionnalités principales]

## Contribution
Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

