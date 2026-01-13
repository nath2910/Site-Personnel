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
    more: { title: string };
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
    desc: "Développement d’un jeu type deck-builder : logique métier, règles, itérations.",
    tags: ["Java", "OOP"],
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
    desc: "Deck-builder game: business logic, rules, iteration loop.",
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
        "Licence d’informatique, actuellement en Master Management des Systèmes d’Information (IAE La Rochelle). Je m’oriente vers le Product Owner et la gestion de projet IT : cadrage, priorisation, suivi de delivery et coordination. Mon parcours tech me permet de dialoguer efficacement avec des équipes de développement, sans me positionner comme développeur full-time.",
    },
    sections: {
      projects: { title: "Mes projets" },
      more: { title: "De plus !" },
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
      subtitle: "Useful links + projects, all in one place.",
      role: "Product Owner • IT Project Management",
      tagline:
        "BSc in Computer Science, currently pursuing an MSc in Management Information Systems (IAE La Rochelle). I’m moving toward Product Owner and IT project delivery: scoping, prioritization, delivery follow-up and coordination. My technical background helps me work smoothly with dev teams, without positioning myself as a full-time developer.",
    },
    sections: {
      projects: { title: "My projects" },
      more: { title: "More" },
    },
    labels: {
      open: "Open",
      contact: "Contact",
      language: "Language",
    },
  },
};
