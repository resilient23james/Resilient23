// content/resilient.ts
export const site = {
  companyName: "Resilient Commercial Solutions",
  tagline: "One team. Three divisions. Total resilience.",
  tagline_es: "Un equipo. Tres divisiones. Resiliencia total.",
  hero: {
    h1: ["Resilient", "Commercial", "Solutions"],
    h1_es: ["Soluciones", "Comerciales", "Resilient"],
    sub: "One team. Three divisions. Total resilience.",
    sub_es: "Un equipo. Tres divisiones. Resiliencia total.",
  },
  divisions: [
    {
      key: "facilities",
      name: "Facilities Services",
      blurb:
        "Daily and project janitorial, floor care, day porter, and post-construction cleaning.",
    },
    {
      key: "maintenance",
      name: "Maintenance",
      blurb:
        "Preventive, corrective, and on-demand building maintenance with 24/7 dispatch.",
    },
    {
      key: "workforce",
      name: "Workforce",
      blurb:
        "Screened, trained, and scheduled frontline talent for facilities and light industrial.",
    },
  ],
  meta: {
    description:
      "Resilient Commercial Solutions delivers facilities services, building maintenance, and workforce solutions across the Southeast.",
  },
};

export type SiteData = typeof site;
