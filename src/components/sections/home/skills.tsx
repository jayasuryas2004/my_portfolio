"use client";

import { motion } from "framer-motion";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { skills, skillCategories } from "@/data/skills";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 md:py-32 bg-card border-y border-border">
      <div className="container-wide">
        <AnimatedReveal>
          <SectionHeading
            label="/ Skills"
            title="What I Bring to the Table"
            subtitle="A blend of design craft, research methodology, and enough code to collaborate effectively with engineers."
          />
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {skillCategories.map((category, catIndex) => {
            const categorySkills = skills.filter((s) => s.category === category.id);
            return (
              <AnimatedReveal key={category.id} delay={catIndex * 0.1}>
                <div>
                  <h3 className="label mb-6 border-b border-foreground/10 pb-4">{category.label}</h3>
                  <motion.ul
                    className="space-y-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer(0.06)}
                  >
                    {categorySkills.map((skill) => (
                      <motion.li 
                        key={skill.name} 
                        variants={fadeUp}
                        className="group relative flex items-center justify-between p-3 rounded-lg hover:bg-foreground hover:text-background transition-colors duration-300 border border-transparent hover:border-border cursor-default"
                      >
                        <span className="text-sm font-medium transition-colors duration-300">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-[2px] bg-border/40 overflow-hidden hidden sm:block">
                            <motion.div
                              className="h-full bg-foreground group-hover:bg-background origin-left transition-colors duration-300"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: skill.level / 100 }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                            />
                          </div>
                          <span className="text-xs font-semibold tabular-nums opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                            {skill.level}%
                          </span>
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
