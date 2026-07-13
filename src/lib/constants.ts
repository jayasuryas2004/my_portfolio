export const SITE = {
  name: "JAYA SURYA",
  firstName: "JAYA",
  lastName: "SURYA",
  role: "UI/UX Designer",
  tagline: "Designing digital products that are clear, usable, and conversion focused.",
  email: "js1710141@gmail.com",
  phone: "+91 78689 83776",
  location: "Bangalore, India",
  availability: "Available for New Project",
  description:
    "Designing thoughtful digital experiences at the intersection of human behavior, visual craft, and engineering constraints.",
} as const;

export const NAV_LINKS = [
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const HOME_SECTIONS = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
] as const;

export const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" as const },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jayasurya-subramanian/", icon: "linkedin" as const },
] as const;
