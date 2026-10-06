# Marine Lecardonnel Peinture

Site vitrine statique en HTML / CSS / JavaScript.

## Déploiement

### Vercel
1. Créer un dépôt GitHub et y envoyer ces fichiers.
2. Dans Vercel, importer le dépôt.
3. Framework Preset : **Other**.
4. Build Command : laisser vide.
5. Output Directory : laisser vide / `.`.
6. Deploy.

### GitHub Pages
1. Envoyer les fichiers dans un dépôt GitHub.
2. Aller dans **Settings → Pages**.
3. Choisir **Deploy from a branch**.
4. Sélectionner `main` et `/ (root)`.
5. Enregistrer.

## À modifier avant mise en ligne

### 1. Adresse e-mail
Dans `index.html`, chercher :
`VOTRE-EMAIL@exemple.fr`

et remplacer par la vraie adresse de Marine.

### 2. Photos
Les réalisations sont définies au début de `script.js` dans le tableau `projects`.

Pour utiliser ses propres photos :
- créer un dossier `images`
- ajouter par exemple `projet-01-avant.jpg` et `projet-01-apres.jpg`
- remplacer les URLs `before` et `after` par `images/projet-01-avant.jpg` etc.

Pour ajouter une réalisation, ajouter simplement un nouvel objet dans `projects`.

### 3. Coordonnées / zone d'intervention
Le texte de présentation peut être modifié directement dans `index.html`.
