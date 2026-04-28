# TerrainVente - Application de vente de terrains

Application web frontend pour une plateforme de vente de terrains au Cameroun. Développé en HTML, CSS et JavaScript pur (sans framework).

> **Note :** Le backend sera développé plus tard en Laravel.

---

## 📁 Structure des fichiers

```
projetIRIS/
├── index.html       # Page d'accueil avec hero et terrains en vedette
├── catalogue.html   # Catalogue complet avec filtres
├── terrain.html     # Page détail d'un terrain
├── a-propos.html    # Page "À propos" de la plateforme
├── login.html       # Connexion vendeur
├── register.html    # Inscription vendeur
├── dashboard.html   # Tableau de bord vendeur
├── style.css        # Styles CSS (~400 lignes)
├── script.js        # Logique JavaScript
└── README.md        # Ce fichier
```

---

## 🚀 Lancement du projet

### Option 1 : Ouvrir directement le fichier HTML

1. Double-cliquez sur `index.html` pour l'ouvrir dans votre navigateur
2. L'application fonctionne sans serveur

### Option 2 : Avec un serveur local (recommandé)

Si vous avez Python installé :

```bash
# Dans le dossier projetIRIS
python -m http.server 8000
```

Puis ouvrez : http://localhost:8000

---

## 👤 Comptes de test

| Rôle           | Email              | Mot de passe  | Téléphone        |
| -------------- | ------------------ | ------------- | ---------------- |
| Vendeur (demo) | `vendeur@demo.com` | `password123` | +237 691 234 567 |

---

## 🌍 Couverture géographique (Dschang, Cameroun)

### Quartiers disponibles dans les filtres :

- **Foto** - Quartier résidentiel
- **Foreke** - Zone calme et spacieuse
- **Lycée Bilingue** - Proche établissements scolaires
- **Keleng** - Quartier dynamique
- **Château** - Zone premium
- **Tsinko** - Zone commerciale et spacieuse

### Terrains de démo inclus :

1. Terrain à Dschang - Foto (8 500 000 CFA, 400m²)
2. Terrain à Dschang - Foreke (12 000 000 CFA, 800m²)
3. Parcelle à Dschang - Lycée Bilingue (5 500 000 CFA, 250m²)
4. Terrain à Dschang - Château (18 000 000 CFA, 600m²)
5. Terrain à Dschang - Keleng (9 500 000 CFA, 350m²)
6. Grand terrain à Dschang - Tsinko (15 000 000 CFA, 1000m²)

---

## 🔧 Utilisation

### En tant qu'acheteur

1. **Page d'accueil** : Voir le hero attractif et les terrains en vedette
2. **Catalogue** : Accéder au catalogue complet avec filtres
   - Filtrer par quartier (Centre ville, Fongo, Djombi, etc.)
   - Filtrer par prix maximum
   - Filtrer par surface minimum
3. **Changer la vue** : Cliquez sur "Carte" ou "Liste" pour basculer
4. **Voir les détails** : Cliquez sur un terrain → page détail
5. **Contacter le vendeur** : Cliquez sur "Contacter le vendeur" pour voir le téléphone et lien WhatsApp
6. **Copier le numéro** : Bouton pour copier le numéro

### En tant que vendeur

1. **S'inscrire** : Cliquez sur "Vendeur? Connectez-vous" → "S'inscrire"
2. **Se connecter** : Utilisez vos identifiants
3. **Ajouter un terrain** : Bouton "Ajouter un terrain" dans le dashboard
   - Titre, prix, surface, description
   - Téléphone et lien WhatsApp (optionnel)
   - Cliquez sur la carte pour sélectionner la localisation
4. **Gérer ses terrains** :
   - Modifier les informations
   - Supprimer un terrain
   - Marquer comme "vendu" (disparaît de la vue acheteur)
   - Réactiver un terrain vendu
5. **Voir les messages** : Les messages des acheteurs apparaissent dans le dashboard

---

## 📱 Fonctionnalités

### Page d'accueil

- **Hero section** : Message attractif avec statistiques
- **Boutons d'action** : Parcourir le catalogue, En savoir plus
- **Features** : Localisation précise, Mobile-first, WhatsApp, Sécurité
- **Toggle carte/liste** : Bascule entre vue carte et vue liste
- **Affichage des terrains** : Cards avec photo, prix, surface, localisation

### Page Catalogue

- **Filtres** : Région, Prix maximum, Surface minimum
- **Toggle carte/liste** : Même système que l'accueil
- **Tous les terrains** : Affiche tous les terrains disponibles

### Page Détail terrain

- **Galerie photos** : Affichage de la photo principale
- **Informations** : Titre, prix, surface, description
- **Carte localisée** : Localisation précise sur OpenStreetMap
- **Bouton "Contacter"** : Affiche téléphone et WhatsApp au clic (confidentialité)

### Pages Authentification

- **Login** : Connexion avec email/mot de passe
- **Register** : Inscription avec nom, email, téléphone, mot de passe

### Dashboard Vendeur

- **Liste de ses terrains** : Avec boutons d'action
- **Ajouter un terrain** : Formulaire complet avec sélection sur carte
- **Messages** : Consultation des messages des acheteurs

---

## 🖼️ Ajout des images

Chaque balise `<img>` contient un commentaire pour indiquer quelle image insérer :

```html
<img src="" alt="Photo du terrain" />
<!-- IMAGE: Photo du terrain -->
```

Remplacez `src=""` par le chemin de vos images :

```html
<img src="images/terrain1.jpg" alt="Photo du terrain" />
```

---

## 🗺️ Icônes

Les icônes sont chargées depuis Wikipedia (URL direct). Si elles ne s'affichent pas, vérifiez votre connexion internet.

---

## 💾 Stockage local (localStorage)

Pour cette démo, les données sont stockées dans le navigateur :

- **Terrains** : Liste des terrains avec toutes leurs propriétés
- **Utilisateurs** : Liste des vendeurs inscrits
- **Messages** : Messages des acheteurs
- **Préférences de vue** : Carte ou liste

> **Attention :** En effaçant le cache du navigateur, les données seront perdues. Pour une utilisation réelle, le backend Laravel est nécessaire.

---

## 📱 Compatibilité

- ✅ **Mobile-first** (optimisé smartphone)
- ✅ **Chrome, Firefox, Safari** (2 dernières versions)
- ✅ **Tablette et desktop**
- ✅ **Navigateurs iOS et Android**

---

## ➕ Comment ajouter d'autres localisations à Dschang

### 1. Ajouter un quartier aux filtres du catalogue

**Fichier : `catalogue.html`**

Trouvez la section des filtres et ajoutez une nouvelle ligne `<option>` :

```html
<select id="filter-region">
  <option value="">Tous les quartiers</option>
  <option value="foto">Foto</option>
  <option value="foreke">Foreke</option>
  <!-- AJOUTER ICI -->
  <option value="nouveau_quartier">Nouveau Quartier</option>
</select>
```

### 2. Ajouter les coordonnées GPS du quartier

**Fichier : `script.js`**

Dans la fonction `appliquerFiltres()`, trouvez l'objet `regions` et ajoutez :

```javascript
const regions = {
  foto: { lat: 5.4400, lng: 10.2500, radius: 0.2 },
  foreke: { lat: 5.4600, lng: 10.2650, radius: 0.2 },
  // AJOUTER ICI
  nouveau_quartier: { lat: 5.4XXX, lng: 10.2XXX, radius: 0.2 },
};
```

**Paramètres :**

- `lat` : Latitude (ex: 5.4445 pour Dschang)
- `lng` : Longitude (ex: 10.2553 pour Dschang)
- `radius` : Rayon de recherche en degrés (0.2 = environ 20km)

### 3. Ajouter des terrains de démo pour ce quartier

**Fichier : `script.js`**

Dans la fonction `initData()`, ajoutez un nouveau terrain dans le tableau `terrainsInit` :

```javascript
{
  id: 7,
  titre: 'Terrain à Dschang - Nouveau Quartier',
  prix: 10000000,
  surface: 500,
  photos: ['', '', ''],
  localisation: { lat: 5.4XXX, lng: 10.2XXX },
  telephone: '+237691234567',
  whatsapp: 'https://wa.me/237691234567',
  vendu: false,
  vendorId: 1,
  description: 'Terrain magnifique dans le quartier Nouveau Quartier',
}
```

### 4. Trouver les coordonnées GPS précises

Pour trouver les coordonnées GPS d'un lieu :

1. Allez sur [Google Maps](https://maps.google.com)
2. Recherchez le quartier
3. Cliquez droit sur le lieu → Coordonnées s'affichent
4. Copiez latitude et longitude

**Exemple pour Dschang :**

- Centre : 5.4445, 10.2553
- Foto : 5.4400, 10.2500
- Foreke : 5.4600, 10.2650

### 5. Tester vos modifications

1. Sauvegardez les fichiers
2. Actualisez la page (F5 ou Cmd+R)
3. Le nouveau quartier devrait apparaître dans les filtres
4. Les terrains devraient apparaître en liste et sur la carte

---

## 🔒 Sécurité (version actuelle)

- ✅ Le numéro du vendeur n'est affiché qu'après clic sur "Contacter"
- ✅ Authentification requise pour le dashboard vendeur
- ⚠️ **À implémenter en backend** : Chiffrement des mots de passe, protection des données

---

## 🔜 Prochaines étapes (Backend Laravel)

Quand vous développerez le backend :

1. **Base de données** : MySQL avec tables terrains, utilisateurs, messages
2. **API REST** : Endpoints pour CRUD terrains, authentification, messages
3. **Authentification** : JWT ou sessions sécurisées
4. **Chiffrement** : Stockage des mots de passe avec bcrypt
5. **Email** : Notification aux vendeurs lors de nouveaux messages
6. **Upload** : Gestion des images uploadées par les vendeurs
7. **Validation** : Vérification des données côté serveur

---

## 📝 License

Projet étudiant - Niveau BAC+2 - Cameroun

---

## 🏗️ Historique des modifications

### v1.0 - Version initiale

- Page d'accueil avec hero attractif
- Catalogue avec filtres (région, prix, surface)
- Page détail terrain avec contact WhatsApp
- Authentication vendeur (login/register)
- Dashboard vendeur avec gestion des terrains
- Page "À propos"
- Header avec navigation complète (Accueil, Catalogue, À propos)
- Footer professionnel complet
- Design mobile-first
- Stockage local pour démo
- Adapté pour Dschang et région (Centre ville, Fongo, Djombi, Banengo, Bafoussam, Bamenda)

---

## 🔧 Utilisation

### En tant qu'acheteur

1. **Voir les terrains** : La page d'accueil affiche les terrains disponibles
2. **Changer la vue** : Cliquez sur "Carte" ou "Liste" pour basculer
3. **Voir les détails** : Cliquez sur un terrain → page détail
4. **Contacter le vendeur** : Cliquez sur "Contacter le vendeur" pour voir le téléphone et lien WhatsApp

### En tant que vendeur

1. **S'inscrire** : Cliquez sur "Vendeur? Connectez-vous" → "S'inscrire"
2. **Se connecter** : Utilisez vos identifiants
3. **Ajouter un terrain** : Bouton "Ajouter un terrain" dans le dashboard
   - Remplissez le formulaire
   - Cliquez sur la carte pour sélectionner la localisation
4. **Gérer ses terrains** : Modifier, supprimer, marquer comme "vendu"
5. **Voir les messages** : Les messages des acheteurs apparaissent dans le dashboard

---

## 🖼️ Ajout des images

Chaque balise `<img>` contient un commentaire pour indiquer quelle image insérer :

```html
<img src="" alt="Photo du terrain" />
<!-- IMAGE: Photo principale du terrain -->
```

Remplacez `src=""` par le chemin de vos images :

```html
<img src="images/terrain1.jpg" alt="Photo du terrain" />
```

---

## 🗺️ Icônes

Les icônes sont chargées depuis Wikipedia (URL direct). Si elles ne s'affichent pas, vérifiez votre connexion internet.

---

## 💾 Stockage local (localStorage)

Pour cette démo, les données sont stockées dans le navigateur :

- Terrains
- Utilisateurs
- Messages
- Préférences de vue (carte/liste)

> **Attention :** En effaçant le cache du navigateur, les données seront perdues.

---

## 📱 Compatibilité

- ✅ Mobile-first (optimisé smartphone)
- ✅ Chrome, Firefox, Safari (2 dernières versions)
- ✅ Tablette et desktop

---

## 🔜 Prochaines étapes (Backend Laravel)

Quand vous développerez le backend :

1. Remplacer `localStorage` par des appels API
2. Stocker les mots de passe de manière chiffrée (bcrypt)
3. Ajouter la notification par email
4. Implémenter la base de données MySQL
5. Ajouter un système de messagerie interne

---

## 📝 License

Projet étudiant - Niveau BAC+2
