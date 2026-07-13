"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Academic", value: "academic" },
  { label: "Personal", value: "personal" },
  { label: "Exploration", value: "exploration" },
];

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      <AnimatedReveal>
        <SectionHeading
          label="/ Portfolio"
          title="Selected Work"
          subtitle="Academic projects, personal explorations, and design experiments from my journey as a UI/UX designer."
        />
      </AnimatedReveal>

      <AnimatedReveal delay={0.1}>
        <div
          className="flex flex-wrap gap-2 mb-12"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              role="tab"
              id={`tab-${filter.value}`}
              aria-selected={activeFilter === filter.value}
              aria-controls="project-grid-panel"
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all focus-ring",
                activeFilter === filter.value
                  ? "bg-foreground text-background"
                  : "border border-border text-muted hover:text-foreground hover:border-foreground/30"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </AnimatedReveal>

      <motion.div
        id="project-grid-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeFilter}`}
        key={activeFilter}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.08)}
      >
        {filtered.map((project) => (
          <motion.div key={project.slug} variants={fadeUp} layout>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
