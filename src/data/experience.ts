export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  points: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Founder & Full-Stack Developer",
    org: "Independent Projects",
    period: "2025 — Present",
    points: [
      "Designed and shipped two full-stack AI products from idea to working prototype.",
      "Built ML-backed features end to end, from data pipeline to user-facing UI.",
      "Ran user interviews to validate problem framing before writing a line of code.",
    ],
  },
  {
    role: "Software Development Intern",
    org: "Placeholder Tech Co.",
    period: "May 2025 — Aug 2025",
    points: [
      "Shipped a customer-facing feature used by 10,000+ monthly active users.",
      "Reduced API response times by 35% through query optimization and caching.",
      "Paired with senior engineers on code review and system design discussions.",
    ],
  },
  {
    role: "Hackathon Finalist",
    org: "National Student Hack Series",
    period: "2024",
    points: [
      "Built a working prototype in 36 hours with a team of four.",
      "Presented the product and technical architecture to a panel of industry judges.",
      "Placed in the top 5 out of 120+ competing teams.",
    ],
  },
  {
    role: "B.Tech, Computer Science",
    org: "Placeholder University",
    period: "2022 — 2026",
    points: [
      "Coursework focused on systems, algorithms, and applied machine learning.",
      "Led a student technology club's project mentorship program.",
    ],
  },
];
