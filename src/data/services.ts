import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "End-to-end product design from research and wireframes to high-fidelity prototypes. I focus on clarity, accessibility, and interfaces that feel inevitable rather than decorated.",
    items: [
      "User research & interviews",
      "Wireframing & prototyping",
      "Design systems & component libraries",
      "Usability testing & iteration",
    ],
    image: "/images/services/ui-ux.svg",
  },
  {
    id: "web-design",
    title: "Web Design",
    description:
      "Responsive, performance-conscious web experiences with editorial layouts and subtle motion. Built with modern frameworks and a mobile-first mindset.",
    items: [
      "Landing pages & marketing sites",
      "Portfolio & personal sites",
      "Responsive design systems",
      "Next.js implementation",
    ],
    image: "/images/services/web-design.svg",
  },
  {
    id: "branding",
    title: "Visual Identity",
    description:
      "Minimal brand systems for startups and student projects — logos, typography, color palettes, and guidelines that scale across touchpoints.",
    items: [
      "Logo design & wordmarks",
      "Typography & color systems",
      "Brand guidelines",
      "Social media templates",
    ],
    image: "/images/services/branding.svg",
  },
  {
    id: "motion",
    title: "Motion & Interaction",
    description:
      "Purposeful animation that guides attention, provides feedback, and adds polish without sacrificing performance or accessibility.",
    items: [
      "Micro-interactions & transitions",
      "Scroll-triggered animations",
      "Prototype motion specs",
      "Reduced-motion fallbacks",
    ],
    image: "/images/services/motion.svg",
  },
];
