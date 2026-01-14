export type Locale = "fr" | "en";

export type LinkItem = {
  label: string;
  meta: string;
  href: string;
  primary?: boolean;
};

export type ProjectItem = {
  title: string;
  desc: string;
  tags: string[];
  href?: string;
};

export type Copy = {
  header: {
    location: string;
  };
  hero: {
    eyebrow: string; // "Site Personnel"
    title: string; // "Bienvenue sur mon espace personnel"
    subtitle: string; // "Il répertorie..."
    role: string; // PO / IT PM
    tagline: string; // CV-style
  };
  sections: {
    projects: { title: string };
    more: {
      title: string;
      description1: string;
      description2: string;
      tags: string[];
    };
  };
  labels: {
    open: string;
    contact: string;
    language: string;
  };
};

export const PROFILE = {
  initials: "NT",
  name: "Nathan Talvasson",
  email: "nathantalvasson@gmail.com",
  location: "La Rochelle • Concarneau",
} as const;

export const LINKS: LinkItem[] = [
  {
    label: "Sneaknik",
    meta: "Mon application",
    href: "https://sneaknik.pages.dev/",
    primary: true,
  },
  {
    label: "LinkedIn",
    meta: "Profil",
    href: "https://www.linkedin.com/in/nathan-talvasson/",
  },
  { label: "GitHub", meta: "Code", href: "https://github.com/nath2910" },
  { label: "CV (PDF)", meta: "Télécharger", href: "/CVNathanTalvasson.pdf" },
];

export const PROJECTS_FR: ProjectItem[] = [
  {
    title: "Stage Product Owner — JCDecaux (mai–juin 2025)",
    desc: "Suivi produit & delivery : reporting, ticketing Jira, documentation (Confluence), cadre Agile avec rituels (sprint planning, daily).",
    tags: ["Produit", "Agile", "Jira", "Confluence"],
  },
  {
    title: "Application de gestion (full-stack)",
    desc: "Conception d’une application web complète avec visualisation et analyse de données.",
    tags: ["Spring Boot", "PostgreSQL", "Vue.js", "Data"],
  },
  {
    title: "Deck Builder (Java)",
    desc: "Développement d’un jeu vidéo nommé Slay The Spire, orienté deck-builder : logique métier, règles, itérations.",
    tags: ["Java", "POO", "Gestion de Projet"],
  },
];

export const PROJECTS_EN: ProjectItem[] = [
  {
    title: "Product Owner internship — JCDecaux (May–June 2025)",
    desc: "Product & delivery support: reporting, Jira ticketing, Confluence documentation, Agile rituals (planning, daily).",
    tags: ["Product", "Agile", "Jira", "Confluence"],
  },
  {
    title: "Management app (full-stack)",
    desc: "End-to-end web app including data visualization and analytics.",
    tags: ["Spring Boot", "PostgreSQL", "Vue.js", "Data"],
  },
  {
    title: "Deck Builder (Java)",
    desc: "Deck-builder video game called Slay The Spire, business logic, rules, iteration loop.",
    tags: ["Java", "OOP"],
  },
];

export const COPY: Record<Locale, Copy> = {
  fr: {
    header: { location: PROFILE.location },
    hero: {
      eyebrow: "Site Personnel",
      title: "Bienvenue sur mon espace personnel",
      subtitle:
        "Il répertorie tous mes liens personnels ainsi que mes projets !",
      role: "Product Owner • Gestion de projet IT",
      tagline:
        "Issu d'une licence d’informatique, actuellement en Master Management des Systèmes d’Information (IAE La Rochelle). Je cherche actuellement une alternance en tant que Product Owner ainsi que dans la gestion de projet IT. Mon parcours à double competences me permet de dialoguer efficacement avec des équipes de développement, mais egalement de diriger une équipe lors de differentes missions.",
    },
    sections: {
      projects: { title: "Mes projets" },
      more: {
        title: "Experiences Supllementaires",
        description1:
          "À côté de mon parcours professionnel, je gère depuis 6 ans une activité d’achat-revente sur mon temps personnel. Ce qui n’était au début qu'une curiosité est devenu une solide source de revenus et, surtout, un excellent terrain d'apprentissage.",
        description2:
          "Cette expérience m’a naturellement apporté des réflexes très utiles en Produit : j’ai appris à analyser les tendances du marché, à gérer des priorités et à négocier au quotidien. C’est un exercice concret d’arbitrage et de gestion qui m'aide à garder un état d’esprit pragmatique.",
        tags: [
          "Analyse de marché",
          "Négociation",
          "Gestion de stock",
          "Relation Client",
        ],
      },
    },
    labels: {
      open: "Ouvrir",
      contact: "Me contacter",
      language: "Langue",
    },
  },
  en: {
    header: { location: PROFILE.location },
    hero: {
      eyebrow: "Personal site",
      title: "Welcome to my personal hub",
      subtitle: "It lists all my personal links and projects!",
      role: "Product Owner • IT Project Management",
      tagline:
        "With a bachelor's degree in computer science, currently pursuing a master's degree in Information Systems Management (IAE La Rochelle). I am currently looking for a work-study program as a Product Owner and in IT project management. My dual skill set allows me to communicate effectively with development teams, but also to lead a team on various projects.",
    },
    sections: {
      projects: { title: "My projects" },
      more: {
        title: "Side Business & Experience",
        description1:
          "For the past six years, I have been managing a personal resale activity. What started as a hobby has grown into a consistent revenue stream and, more importantly, a great practical learning ground.",
        description2:
          "This experience has helped me sharpen key product skills: market trend analysis, priority management, and daily negotiation. It is a hands-on exercise in arbitrage and management that keeps me pragmatic and results-oriented.",
        tags: [
          "Market Analysis",
          "Negotiation",
          "Inventory Management",
          "Customer Relationship",
        ],
      },
    },
    labels: {
      open: "Open",
      contact: "Contact",
      language: "Language",
    },
  },
};
