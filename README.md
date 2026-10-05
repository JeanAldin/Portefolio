# Portfolio — ROJONDRIANARIVOLA Jean Aldin

Portfolio dynamique (Next.js 16, App Router, TypeScript, Tailwind CSS 4) généré à partir du CV.

## Démarrage

```bash
cd portfolio
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/              # Pages et layout
  components/
    layout/         # Header, Footer
    sections/       # Sections de la page d'accueil
    ui/             # Composants réutilisables
  data/profile.ts   # Données du CV (source unique)
  types/profile.ts  # Types TypeScript
  lib/              # Navigation, utilitaires
public/images/      # Photo de profil
```

## Photo de profil

1. Ajoutez votre photo : `public/images/profile.jpg`
2. Dans `src/data/profile.ts`, définissez `photoSrc: "/images/profile.jpg"`

Une image SVG de remplacement est fournie (`profile.svg`) en attendant.

## GitHub & LinkedIn

Dans `src/data/profile.ts`, section `contact` :

```ts
github: {
  url: "https://github.com/votre-compte",
  display: "github.com/votre-compte",
},
linkedin: {
  url: "https://www.linkedin.com/in/votre-profil",
  display: "linkedin.com/in/votre-profil",
},
```

Tant que `url` est vide, les cartes affichent « à compléter » (non cliquables).

## Personnalisation

Modifiez uniquement `src/data/profile.ts` pour mettre à jour projets, formations, compétences et contact.

Les icônes utilisent [lucide-react](https://lucide.dev/).
