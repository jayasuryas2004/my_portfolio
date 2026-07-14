import type { Project } from "@/types";

const baseCaseStudy = {
  research: [
    "Conducted 8 user interviews with fellow students about study app frustrations",
    "Analyzed 12 competitor apps across productivity and education categories",
    "Mapped current-state workflows through contextual inquiry sessions",
    "Synthesized findings into affinity diagrams and opportunity areas",
  ],
  competitorAnalysis: [
    {
      name: "Notion",
      strengths: "Flexible workspace, strong brand trust, rich feature set",
      weaknesses: "Steep learning curve, overwhelming for focused study tasks",
    },
    {
      name: "Forest",
      strengths: "Simple focus mechanic, delightful micro-interactions",
      weaknesses: "Limited planning features, no collaborative study tools",
    },
    {
      name: "Todoist",
      strengths: "Clear task hierarchy, natural language input",
      weaknesses: "Generic visual identity, weak motivation for students",
    },
  ],
  personas: [
    {
      name: "Siren UI/UX",
      role: "UI/UX Designer",
      goals: [
        "Balance portfolio work with academic deadlines",
        "Maintain creative momentum during exam seasons",
        "Document design process for case studies",
      ],
      frustrations: [
        "Productivity tools feel corporate, not creative",
        "No visual way to see project progress over time",
        "Context switching breaks deep work flow",
      ],
    },
  ],
  journeyMaps: [
    {
      stage: "Discover",
      actions: ["Opens app after missing a deadline", "Explores onboarding flow"],
      thoughts: "I need something simpler than my current setup",
      emotions: "Frustrated but hopeful",
    },
    {
      stage: "Plan",
      actions: ["Adds weekly tasks", "Sets focus sessions", "Invites group members"],
      thoughts: "This actually reflects how I think about my week",
      emotions: "Relieved, in control",
    },
    {
      stage: "Execute",
      actions: ["Starts focus timer", "Checks off tasks", "Reviews daily summary"],
      thoughts: "Small wins feel visible and motivating",
      emotions: "Focused, accomplished",
    },
    {
      stage: "Reflect",
      actions: ["Views weekly insights", "Adjusts next week's plan"],
      thoughts: "I can see patterns in when I work best",
      emotions: "Confident, self-aware",
    },
  ],
  informationArchitecture: [
    "Home — Daily overview, active focus session, quick actions",
    "Tasks — Course-based organization, priority filters, due dates",
    "Focus — Timer modes, session history, distraction blocking",
    "Groups — Shared boards, member roles, activity feed",
    "Insights — Weekly patterns, completion rates, streak tracking",
    "Profile — Preferences, notification settings, integrations",
  ],
  wireframes: ["/images/services/harsath.png", "/images/services/i3.png"],
  lowFidelity: ["/images/services/millionminds.png", "/images/services/i4.png"],
  highFidelity: ["/images/services/wedease.png", "/images/services/i7.png"],
  designSystem: {
    colors: [
      { name: "Ink", value: "#0A0A0A" },
      { name: "Paper", value: "#FAFAFA" },
      { name: "Mist", value: "#E5E5E5" },
      { name: "Accent", value: "#2563EB" },
    ],
    typography: [
      { name: "Display", value: "Inter Tight — 48/56/64px" },
      { name: "Heading", value: "Inter — 24/32px Semibold" },
      { name: "Body", value: "Inter — 16/24px Regular" },
      { name: "Caption", value: "Inter — 12/16px Medium" },
    ],
    components: [
      "Button variants (primary, secondary, ghost)",
      "Task card with status indicators",
      "Focus timer with circular progress",
      "Navigation bar with active states",
      "Empty states and loading skeletons",
    ],
  },
  prototype: "https://figma.com",
  challenges: [
    "Balancing feature richness with onboarding simplicity for first-time users",
    "Designing focus mode that feels calm without hiding critical notifications",
    "Creating group collaboration that doesn't add cognitive overhead",
  ],
  solution:
    "A progressive disclosure model that surfaces core daily actions first, with advanced planning tools revealed as users build habits. Focus mode uses ambient visual cues instead of harsh lockouts, and group features mirror familiar chat patterns students already use.",
  outcome: [
    "Usability testing with 6 participants showed 40% faster task creation vs. baseline",
    "Onboarding completion rate of 85% in prototype testing",
    "Positive feedback on visual clarity and reduced notification anxiety",
  ],
  reflection:
    "This project taught me to design for behavioral change, not just interface aesthetics. Starting with research grounded every design decision and helped me articulate trade-offs clearly in my portfolio presentation.",
};

export const projects: Project[] = [
  {
    slug: "hp-photography",
    title: "HP Photography",
    subtitle: "Photography Portfolio",
    category: "exploration",
    tags: ["UI Design", "Figma"],
    year: "2024",
    thumbnail: "/images/projects/project1.png",
    color: "#2563EB",
    overview: "A sleek and minimal portfolio to showcase stunning photography collections with high-impact visual design.",
    problem: "Photographers need a lightweight, premium platform to present their high-resolution shots without distracting UI elements.",
    ...baseCaseStudy,
    prototype: "https://www.figma.com/design/0ZfVNDjYSR8TYi4YoUQPDb/Untitled?node-id=0-1&p=f&t=78edbfqAYTegXVWm-0"
  },
  {
    slug: "scheme-plus",
    title: "Scheme plus",
    subtitle: "Digital Design System",
    category: "academic",
    tags: ["UX Research", "Figma"],
    year: "2025",
    thumbnail: "/images/projects/project2.png",
    color: "#7C3AED",
    overview: "A comprehensive digital design system and dashboard layout tailored for seamless usability and scalable engineering.",
    problem: "Enterprises struggle with inconsistent interface patterns across multiple platforms, slowing down development cycles.",
    ...baseCaseStudy,
    prototype: "https://www.figma.com/design/XIAejNycdQTJsxq20kXhLC/Schemeplus?node-id=0-1&p=f&t=WeWdrm0bwGgeZkBN-0"
  },
  {
    slug: "wedease",
    title: "Wedease",
    subtitle: "Wedding Planning Platform",
    category: "personal",
    tags: ["Product Design", "Figma"],
    year: "2025",
    thumbnail: "/images/projects/project3.png",
    color: "#059669",
    overview: "A delightful, end-to-end wedding planning platform designed to alleviate the stress of managing vendors, guests, and venues.",
    problem: "Planning a wedding involves managing multiple disjointed spreadsheets and communication chains, making the experience overwhelming.",
    ...baseCaseStudy,
    prototype: "https://www.figma.com/design/SkRSWrYq3KTQ6fD1xCgRUt/Untitled?t=WeWdrm0bwGgeZkBN-0"
  },
  {
    slug: "million-minds",
    title: "Million Minds",
    subtitle: "Educational Tech Hub",
    category: "exploration",
    tags: ["UI/UX Design", "Figma"],
    year: "2024",
    thumbnail: "/images/projects/project4.png",
    color: "#DC2626",
    overview: "An engaging platform for educational resources, designed to connect learners with high-quality content intuitively.",
    problem: "Learners face cognitive overload when navigating through dense educational content hubs lacking clear information architecture.",
    ...baseCaseStudy,
    prototype: "https://www.figma.com/design/vAI7lCmk5HlFrIPbNj94J9/Millions-Minds?node-id=0-1&p=f&t=QakGFN4wRMAExjdY-0"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(count = 4): Project[] {
  return projects.slice(0, count);
}
