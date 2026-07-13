import type { Metadata } from "next";
import { ProjectGrid } from "@/components/sections/portfolio/project-grid";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected UI/UX design projects — academic work, personal explorations, and design experiments.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="container-wide">
        <ProjectGrid />
      </div>
    </div>
  );
}
