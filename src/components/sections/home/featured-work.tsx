"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { BackgroundText } from "@/components/shared/background-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { getFeaturedProjects } from "@/data/projects";
import { staggerContainer, fadeUp } from "@/lib/animations";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FeaturedWork() {
  const projects = getFeaturedProjects(4);

  return (
    <section id="work" aria-labelledby="work-heading" className="relative py-24 md:py-32 overflow-hidden">
      <BackgroundText text="PORTFOLIO" />

      <div className="container-wide relative">
        <AnimatedReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <SectionHeading label="/ Selected Work" title="Featured Projects" className="mb-0" />
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-foreground transition-colors focus-ring rounded"
            >
              View All Work
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </AnimatedReveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer(0.12)}
        >
          {projects.map((project, index) => (
            <motion.div key={project.slug} variants={fadeUp}>
              <ProjectCard project={project} priority={index < 2} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
