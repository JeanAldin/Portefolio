import type {
  Education,
  Interest,
  PersonalTrait,
  Profile,
  Project,
  SkillCategory,
  Training,
} from "@/types/profile";

export const profile: Profile = {
  firstName: "Jean Aldin",
  lastName: "ROJONDRIANARIVOLA",
  fullName: "ROJONDRIANARIVOLA Jean Aldin",
  title: "Développeur Full Stack",
  tagline:
    "Plus de 4 ans d'expérience — web et mobile ",
 
  photoSrc: "/images/Rojo.JPG",
  contact: {
    email: "jeanaldinrojondrianarivola@gmail.com",
    phone: "(+261) 34 98 566 95",
    phoneHref: "tel:+261349856695",
    github: {
      url: "",
      display: "JeanAldin",
    },
    linkedin: {
      url: "",
      display: "jean aldin rojondrianarivola",
    },
  },
  yearsOfExperience: 4,
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "React Native", "Flutter"],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Spring Boot",
      "Laravel",
      "Django",
      "Symfony",
    ],
  },
  {
    id: "data",
    label: "Data & BI",
    items: ["Python", "R", "Scikit-learn", "Power BI", "PostGIS", "QGIS"],
  },
  {
    id: "languages",
    label: "Langages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "PHP", "R"],
  },
  {
    id: "soft",
    label: "Langues",
    items: ["Français (courant)", "Anglais technique"],
  },
];

export const projects: Project[] = [
  {
    id: "geo-tasks",
    title: "Gestion de tâches géolocalisées",
    period: "Août 2026",
    description: "Application mobile de gestion de tâches avec géolocalisation.",
    technologies: ["React Native", "NestJS", "PostgreSQL"],
    kind: "project",
    highlight: true,
  },
  {
    id: "delivery",
    title: "Plateforme de livraison temps réel",
    period: "Juillet 2026",
    description: "Suivi des commandes et livraisons en temps réel.",
    technologies: ["NestJS", "React", "TypeScript", "PostgreSQL"],
    kind: "project",
    highlight: true,
  },
  {
    id: "fraud-energy",
    title: "Détection de fraudes énergétiques",
    period: "Juin 2026",
    description: "Système basé sur Random Forest pour la détection de fraudes.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    kind: "project",
  },
  {
    id: "satellite",
    title: "Classification d'images satellitaires",
    period: "Juin 2026",
    description:
      "Traitement Sentinel-2 et Landsat 8 (Random Forest et réseaux de neurones).",
    technologies: ["R", "QGIS"],
    kind: "project",
  },
  {
    id: "ecommerce-mobile",
    title: "E-commerce mobile",
    period: "Décembre 2025",
    description: "Application mobile de vente en ligne.",
    technologies: ["Flutter", "Firebase"],
    kind: "project",
  },
  {
    id: "webmapping",
    title: "WebMapping immobilier géolocalisé",
    period: "Octobre 2025",
    description: "Visualisation cartographique de biens immobiliers.",
    technologies: ["NestJS", "Next.js", "PostgreSQL", "PostGIS"],
    kind: "project",
    highlight: true,
  },
  {
    id: "sneakers",
    title: "Vente de baskets en ligne",
    period: "Mai 2025",
    description: "Boutique en ligne full stack.",
    technologies: ["NestJS", "Next.js", "PostgreSQL"],
    kind: "project",
  },
  {
    id: "appliances",
    title: "Gestion vente d'électroménager",
    period: "Octobre 2024",
    description: "Application web de gestion commerciale.",
    technologies: ["Django", "React.js", "PostgreSQL"],
    kind: "project",
  },
  {
    id: "chu",
    title: "Plateforme CHU Tambohobe — Chirurgie",
    period: "Juillet – Septembre 2024",
    description:
      "Stage : digitalisation et gestion du service Chirurgie du CHU Fianarantsoa.",
    technologies: ["Next.js", "NestJS", "PostgreSQL"],
    kind: "internship",
    highlight: true,
  },
  {
    id: "clothes-delivery",
    title: "Vêtements en ligne & livraison mobile",
    period: "Juin 2024",
    description: "Site e-commerce et application mobile de livraison.",
    technologies: [
      "Spring Boot",
      "React (Vite)",
      "PostgreSQL",
      "React Native",
    ],
    kind: "project",
  },
  {
    id: "delivery-rn",
    title: "Application mobile de livraison",
    period: "Mai 2024",
    description: "Application de livraison cross-platform.",
    technologies: ["React Native"],
    kind: "project",
  },
  {
    id: "room-rental",
    title: "Gestion de location de salles",
    period: "Avril 2024",
    description: "Application web avec API GraphQL.",
    technologies: ["Node.js", "AngularJS", "GraphQL", "PostgreSQL"],
    kind: "project",
  },
  {
    id: "spat",
    title: "Facturation location salles — S.P.A.T",
    period: "Juillet – Août 2023",
    description:
      "Stage au Port Autonome de Toamasina : gestion et facturation P.A.C.T.",
    technologies: ["React.js", "Node.js", "MySQL"],
    kind: "internship",
  },
  {
    id: "emihack",
    title: "EMIHACK 2.0 — Suivi des ventes de vin",
    period: "Mars 2023",
    description: "Hackathon EMIT : application web de suivi commercial.",
    technologies: ["HTML", "CSS", "Bootstrap", "Leaflet", "MySQL", "JavaScript"],
    kind: "hackathon",
  },
];

export const trainings: Training[] = [
  {
    id: "udemy-react-laravel",
    year: 2026,
    title: "React Js A-Z avec Laravel",
    provider: "Udemy",
  },
  {
    id: "oc-next",
    year: 2026,
    title: "Création d'une application React avec Next.js",
    provider: "OpenClassrooms",
  },
  {
    id: "oc-powerbi-dash",
    year: 2025,
    title: "Réalisation de Dashboards avec Power BI",
    provider: "OpenClassrooms",
  },
  {
    id: "oc-dax",
    year: 2025,
    title: "Utilisation de DAX dans Power BI",
    provider: "OpenClassrooms",
  },
  {
    id: "oc-ml",
    year: 2025,
    title: "Initiation au Machine Learning Engineering",
    provider: "OpenClassrooms",
  },
  {
    id: "udemy-react-ts",
    year: 2024,
    title: "React et TypeScript",
    provider: "Udemy",
  },
  {
    id: "oc-nest",
    year: 2024,
    title: "Backend avec Node.js et NestJS",
    provider: "OpenClassrooms",
  },
  {
    id: "oc-spring",
    year: 2024,
    title: "Application Java avec Spring Boot",
    provider: "OpenClassrooms",
  },
  {
    id: "oc-symfony",
    year: 2023,
    title: "API REST avec Symfony",
    provider: "OpenClassrooms",
  },
  {
    id: "oc-js",
    year: 2023,
    title: "Programmation JavaScript",
    provider: "OpenClassrooms",
  },
  {
    id: "oc-js-dynamic",
    year: 2023,
    title: "Pages web dynamiques avec JavaScript",
    provider: "OpenClassrooms",
  },
  {
    id: "cnela-en",
    year: 2023,
    title: "Formation en anglais",
    provider: "CNELA Toamasina",
  },
];

export const education: Education[] = [
  {
    id: "master2",
    period: "2024 – 2026",
    institution:
      "EMIT — École de Management et d'Innovation Technologique, Université de Fianarantsoa",
    degree: "Master II professionnel en Informatique",
    status: "in_progress",
  },
  {
    id: "licence",
    period: "2021 – 2024",
    institution:
      "EMIT — Université de Fianarantsoa",
    degree: "Licence professionnelle",
    track: "DA2I (Développement d'Application Internet et Intranet)",
    status: "completed",
  },
  {
    id: "bac",
    period: "2021",
    institution: "Lycée privé Stella Maris, Toamasina",
    degree: "Baccalauréat, série D",
    status: "completed",
  },
];

export const personalTraits: PersonalTrait[] = [
  { id: "1", text: "Bon sens du relationnel, d'anticipation et d'initiative" },
  { id: "2", text: "Collaboratif, rigoureux, travail en équipe" },
  { id: "3", text: "Sérieux et organisé" },
  { id: "4", text: "Curieux et en apprentissage continu" },
];

export const interests: Interest[] = [
  { id: "sport", text: "Football et jogging" },
  { id: "games", text: "Échecs et poker en ligne" },
];

/** Technologies uniques pour le filtre dynamique des projets */
export function getAllTechnologies(items: Project[]): string[] {
  const set = new Set<string>();
  for (const p of items) {
    for (const t of p.technologies) {
      set.add(t);
    }
  }
  return [...set].sort((a, b) => a.localeCompare(b, "fr"));
}
