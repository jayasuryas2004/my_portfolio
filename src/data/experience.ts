import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "design-club",
    organization: "University Design Club",
    role: "Lead Designer",
    period: "Aug 2024 — Present",
    description:
      "Leading weekly design critiques, organizing Figma workshops, and mentoring juniors on portfolio presentation and case study structure.",
    type: "club",
  },
  {
    id: "startup-intern",
    organization: "Local Health-Tech Startup",
    role: "UI/UX Design Intern",
    period: "May 2024 — Jul 2024",
    description:
      "Designed patient onboarding flows and appointment booking screens. Conducted usability tests with 5 participants and iterated on navigation patterns.",
    type: "internship",
  },
  {
    id: "freelance",
    organization: "Student Freelance Projects",
    role: "Web & Brand Designer",
    period: "Jan 2024 — Present",
    description:
      "Creating landing pages and brand identities for classmates' startups and college fest campaigns. Focus on fast turnaround with polished deliverables.",
    type: "freelance",
  },
  {
    id: "open-source",
    organization: "Campus Open Source Group",
    role: "Design Contributor",
    period: "Sep 2023 — May 2024",
    description:
      "Contributed UI improvements to student-built tools including a library booking system and course review platform. Pair-designed with developers.",
    type: "volunteer",
  },
];
