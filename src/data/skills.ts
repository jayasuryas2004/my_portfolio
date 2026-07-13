import type { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "User Research", category: "research", level: 85 },
  { name: "Wireframing", category: "design", level: 90 },
  { name: "Visual Design", category: "design", level: 88 },
  { name: "Prototyping", category: "design", level: 92 },
  { name: "Design Systems", category: "design", level: 80 },
  { name: "Usability Testing", category: "research", level: 78 },
  { name: "Information Architecture", category: "research", level: 82 },
  { name: "Figma", category: "tools", level: 95 },
  { name: "Adobe Creative Suite", category: "tools", level: 75 },
  { name: "HTML/CSS", category: "development", level: 85 },
  { name: "React / Next.js", category: "development", level: 70 },
  { name: "Framer", category: "tools", level: 72 },
];

export const skillCategories = [
  { id: "design", label: "Design" },
  { id: "research", label: "Research" },
  { id: "tools", label: "Tools" },
  { id: "development", label: "Development" },
] as const;

export const toolbox = [
  "Figma",
  "FigJam",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Framer",
  "Principle",
  "VS Code",
  "Next.js",
  "Tailwind CSS",
  "Notion",
  "Maze",
  "Miro",
];
