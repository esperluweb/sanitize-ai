# Nettoyeur de texte

Un outil simple pour nettoyer et formater le texte, particulièrement utile pour les textes copiés depuis des plateformes comme LinkedIn, des documents Word, ou des réponses d'IA.

## Fonctionnalités

- Remplace les guillemets courbes par des guillemets droits
- Remplace les apostrophes courbes par des apostrophes droites
- Convertit les tirets cadratins et demi-cadratins en tirets simples
- Remplace les points de suspension par trois points
- Supprime les espaces insécables
- Interface réactive qui s'adapte aux mobiles et aux ordinateurs
- Compteur de caractères
- Bouton de copie facile à utiliser

## Démo

[Lien vers la démo en ligne](https://votre-lien-de-demo.com)

## Installation locale

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/nettoyeur-texte.git
   cd nettoyeur-texte
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

4. Ouvrez votre navigateur à l'adresse indiquée (généralement http://localhost:5173)

## Construction pour la production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.
