import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/about/about-content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about my design journey, philosophy, education, and goals as a UI/UX designer and CS student.",
};

export default function AboutPage() {
  return <AboutContent />;
}
