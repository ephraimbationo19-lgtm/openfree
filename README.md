# L'Essentiel — Boutique en ligne

Vitrine e-commerce responsive avec catalogue, recherche, filtres, panier persistant et simulation de commande.

## Aperçu

- Design : panneau sombre en verre dépoli sur fond orange, palette chaude et typographie Inter.
- Produits : mode, high-tech, beauté, maison, sport et accessoires.
- Prix affichés en francs CFA (FCFA), taux de conversion 1 EUR = 656 FCFA.

## Fonctionnalités

- Catalogue de 17 produits avec fiches détaillées
- Recherche instantanée, filtres par catégorie et tri par prix / nom
- Favoris et notifications
- Panier persistant via `localStorage` (ajout, quantités, suppression)
- Livraison offerte à partir de 33 000 FCFA
- Formulaire de commande de démonstration (aucun paiement réel)
- Interface responsive, navigation clavier et respect de `prefers-reduced-motion`

## Lancer le projet

Ouvrez `index.html` dans un navigateur, ou démarrez un serveur local :

```bash
python3 -m http.server 8000
```

Puis visitez `http://localhost:8000`.

## Structure

```
.
├── index.html      # Structure des pages
├── css/style.css   # Styles et design tokens
├── js/script.js    # Données produits et interactions
└── assets/         # Ressources
```

## Note

Tous les produits, prix et commandes sont fictifs. Ce projet est une démonstration frontend sans backend ni traitement de paiement.
