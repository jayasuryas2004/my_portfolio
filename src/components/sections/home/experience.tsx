"use client";

import { motion } from "framer-motion";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { BackgroundText } from "@/components/shared/background-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";
import { staggerContainer, fadeUp, lineReveal } from "@/lib/animations";

const typeLabels = {
  internship: "Internship",
  freelance: "Freelance",
  volunteer: "Volunteer",
  club: "Club",
};

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="relative py-24 md:py-32 overflow-hidden">
      <BackgroundText text="EXPERIENCE" />

      <div className="container-wide relative">
        <AnimatedReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <SectionHeading label="/ Experience" title="Where I've Grown" className="mb-0" />
            <p className="body-sm">Student & early-career journey</p>
          </div>
        </AnimatedReveal>

        <div className="mt-12 md:mt-16 relative">
          <motion.div
            className="space-y-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer(0.15)}
          >
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                variants={fadeUp}
                className="group relative md:px-4 py-8 border-b border-border hover:bg-foreground/5 transition-colors cursor-default flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight md:w-[200px] shrink-0">
                    {exp.organization}
                  </h3>
                  <div className="flex items-center gap-3 md:w-[240px] shrink-0">
                    <p className="text-sm font-medium text-muted">{exp.role}</p>
                    <Badge variant="outline" className="hidden sm:inline-flex">{typeLabels[exp.type]}</Badge>
                  </div>
                  <p className="body-sm max-w-xl hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity">{exp.description}</p>
                </div>
                <time className="text-sm text-muted-foreground shrink-0 md:text-right">
                  {exp.period}
                </time>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
