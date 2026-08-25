export type ProjectStatus = "Live" | "In Progress" | "Competition Entry";

export interface Project {
  title: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

// Add or remove entries here — each one renders as a card in the Projects section.
export const projects: Project[] = [
  {
    title: "ShareHands",
    tagline: "Community-driven donation platform connecting donors, NGOs, and people in need",
    description:
      "Makes it easier to donate essential items, discover community requests, and track social impact through dedicated donor, NGO, and administrator dashboards. Includes donation and item management, community request tracking, user registration and login, and category filtering with interactive forms.",
    status: "Live",
    tags: ["HTML", "CSS", "JavaScript", "Font Awesome"],
    repoUrl: "https://github.com/YashviShah514/ShareHands",
  },
  {
    title: "NyayaAI",
    tagline: "Intelligent case prioritization for Indian courts",
    description:
      "A full-stack decision-support prototype that helps court registries triage pending cases using a transparent, rule-based priority engine — not a black-box model. Covers the full workflow from case intake to explainable scoring, AI-generated summaries, judge override with audit logging, and a bench-scheduling optimizer.",
    status: "In Progress",
    tags: ["React", "TypeScript", "Flask", "SQLAlchemy", "Tailwind CSS", "JWT Auth"],
    demoUrl: "https://nyayaai-mvp-frontend.onrender.com/",
    repoUrl: "https://github.com/YashviShah514/nyayaai-mvp",
  },
];
