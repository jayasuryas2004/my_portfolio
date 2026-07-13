export type ProjectCategory = "all" | "academic" | "personal" | "exploration";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, "all">;
  tags: string[];
  year: string;
  thumbnail: string;
  color: string;
  overview: string;
  problem: string;
  research: string[];
  competitorAnalysis: {
    name: string;
    strengths: string;
    weaknesses: string;
  }[];
  personas: {
    name: string;
    role: string;
    goals: string[];
    frustrations: string[];
  }[];
  journeyMaps: {
    stage: string;
    actions: string[];
    thoughts: string;
    emotions: string;
  }[];
  informationArchitecture: string[];
  wireframes: string[];
  lowFidelity: string[];
  highFidelity: string[];
  designSystem: {
    colors: { name: string; value: string }[];
    typography: { name: string; value: string }[];
    components: string[];
  };
  prototype: string;
  challenges: string[];
  solution: string;
  outcome: string[];
  reflection: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  image: string;
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  type: "internship" | "freelance" | "volunteer" | "club";
}

export interface Skill {
  name: string;
  category: "design" | "research" | "tools" | "development";
  level: number;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: "linkedin" | "behance" | "dribbble" | "github" | "email";
}
