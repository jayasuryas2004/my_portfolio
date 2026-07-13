"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

interface CaseStudyContentProps {
  project: Project;
}

type SectionConfig = {
  id: string;
  title: string;
  key: keyof Project;
  isList?: boolean;
  isCompetitors?: boolean;
  isPersonas?: boolean;
  isJourney?: boolean;
  isImages?: boolean;
  isDesignSystem?: boolean;
  isLink?: boolean;
};

const sections: SectionConfig[] = [
  { id: "overview", title: "Overview", key: "overview" },
  { id: "problem", title: "Problem", key: "problem" },
  { id: "research", title: "Research", key: "research", isList: true },
  { id: "competitors", title: "Competitor Analysis", key: "competitorAnalysis", isCompetitors: true },
  { id: "personas", title: "User Personas", key: "personas", isPersonas: true },
  { id: "journey", title: "Journey Maps", key: "journeyMaps", isJourney: true },
  { id: "ia", title: "Information Architecture", key: "informationArchitecture", isList: true },
  { id: "wireframes", title: "Wireframes", key: "wireframes", isImages: true },
  { id: "lowfi", title: "Low Fidelity", key: "lowFidelity", isImages: true },
  { id: "hifi", title: "High Fidelity", key: "highFidelity", isImages: true },
  { id: "design-system", title: "Design System", key: "designSystem", isDesignSystem: true },
  { id: "prototype", title: "Prototype", key: "prototype", isLink: true },
  { id: "challenges", title: "Challenges", key: "challenges", isList: true },
  { id: "solution", title: "Solution", key: "solution" },
  { id: "outcome", title: "Outcome", key: "outcome", isList: true },
  { id: "reflection", title: "Reflection", key: "reflection" },
];

function hasSectionContent(project: Project, section: SectionConfig): boolean {
  const value = project[section.key];

  if (section.isList || section.isImages) {
    return Array.isArray(value) && value.length > 0;
  }
  if (section.isCompetitors) return project.competitorAnalysis.length > 0;
  if (section.isPersonas) return project.personas.length > 0;
  if (section.isJourney) return project.journeyMaps.length > 0;
  if (section.isDesignSystem) return Boolean(project.designSystem);
  if (section.isLink) return Boolean(project.prototype);
  if (typeof value === "string") return value.trim().length > 0;

  return Boolean(value);
}

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  const visibleSections = sections.filter((section) => hasSectionContent(project, section));
  return (
    <article>
      {/* Hero */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <AnimatedReveal>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8 focus-ring rounded"
            >
              <ArrowLeft className="size-4" />
              Back to Portfolio
            </Link>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
              <Badge variant="outline">{project.year}</Badge>
            </div>
            <h1 className="heading-display max-w-4xl">{project.title}</h1>
            <p className="body-lg mt-4 max-w-2xl">{project.subtitle}</p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <div className="relative aspect-[16/9] mt-12 rounded-2xl overflow-hidden border border-border">
              <Image
                src={project.thumbnail}
                alt={`${project.title} hero image`}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </AnimatedReveal>
        </div>
      </header>

      {/* Sticky nav + content */}
      <div className="container-wide pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <nav
            aria-label="Case study sections"
            className="lg:col-span-3 lg:sticky lg:top-28 lg:self-start hidden lg:block"
          >
            <ul className="space-y-1 border-l border-border">
              {visibleSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block py-2 pl-4 text-sm text-muted hover:text-foreground border-l-2 border-transparent hover:border-foreground -ml-px transition-colors focus-ring"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-9 space-y-20 md:space-y-28">
            {sections.map((section, index) => (
              <AnimatedReveal key={section.id} delay={index * 0.05}>
                <section id={section.id} className="scroll-mt-28">
                  <h2 className="heading-subsection mb-6">{section.title}</h2>

                  {section.isList && (
                    <ul className="space-y-3">
                      {(project[section.key] as string[]).map((item, i) => (
                        <li key={i} className="flex gap-3 body-lg">
                          <span className="size-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.isCompetitors && (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {project.competitorAnalysis.map((comp) => (
                        <div key={comp.name} className="rounded-xl border border-border p-5">
                          <h3 className="font-semibold mb-3">{comp.name}</h3>
                          <p className="text-sm text-muted mb-2">
                            <span className="font-medium text-foreground">Strengths: </span>
                            {comp.strengths}
                          </p>
                          <p className="text-sm text-muted">
                            <span className="font-medium text-foreground">Weaknesses: </span>
                            {comp.weaknesses}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.isPersonas && (
                    <div className="grid gap-6 sm:grid-cols-2">
                      {project.personas.map((persona) => (
                        <div key={persona.name} className="rounded-xl border border-border p-6">
                          <h3 className="font-semibold text-lg">{persona.name}</h3>
                          <p className="text-sm text-muted mb-4">{persona.role}</p>
                          <div className="space-y-4">
                            <div>
                              <p className="label mb-2">Goals</p>
                              <ul className="space-y-1">
                                {persona.goals.map((g) => (
                                  <li key={g} className="text-sm text-muted">· {g}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="label mb-2">Frustrations</p>
                              <ul className="space-y-1">
                                {persona.frustrations.map((f) => (
                                  <li key={f} className="text-sm text-muted">· {f}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.isJourney && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {project.journeyMaps.map((stage) => (
                        <div key={stage.stage} className="rounded-xl border border-border p-5">
                          <h3 className="font-semibold mb-2">{stage.stage}</h3>
                          <p className="text-sm text-muted mb-2">
                            <span className="font-medium text-foreground">Actions: </span>
                            {stage.actions.join(", ")}
                          </p>
                          <p className="text-sm text-muted mb-2">
                            <span className="font-medium text-foreground">Thoughts: </span>
                            {stage.thoughts}
                          </p>
                          <p className="text-sm text-muted">
                            <span className="font-medium text-foreground">Emotions: </span>
                            {stage.emotions}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.isImages && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {(project[section.key] as string[]).map((src, i) => (
                        <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-card">
                          <Image
                            src={src}
                            alt={`${section.title} ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {section.isDesignSystem && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-semibold mb-4">Colors</h3>
                        <div className="flex flex-wrap gap-4">
                          {project.designSystem.colors.map((color) => (
                            <div key={color.name} className="flex items-center gap-3">
                              <div
                                className="size-10 rounded-lg border border-border"
                                style={{ backgroundColor: color.value }}
                              />
                              <div>
                                <p className="text-sm font-medium">{color.name}</p>
                                <p className="text-xs text-muted">{color.value}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Typography</h3>
                        <ul className="space-y-2">
                          {project.designSystem.typography.map((t) => (
                            <li key={t.name} className="text-sm text-muted">
                              <span className="font-medium text-foreground">{t.name}: </span>
                              {t.value}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Components</h3>
                        <ul className="space-y-2">
                          {project.designSystem.components.map((c) => (
                            <li key={c} className="flex gap-2 text-sm text-muted">
                              <span className="size-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {section.isLink && (
                    <Button asChild variant="outline" className="rounded-full">
                      <a href={project.prototype} target="_blank" rel="noopener noreferrer">
                        View Prototype
                        <ExternalLink className="size-4" />
                      </a>
                    </Button>
                  )}

                  {!section.isList &&
                    !section.isCompetitors &&
                    !section.isPersonas &&
                    !section.isJourney &&
                    !section.isImages &&
                    !section.isDesignSystem &&
                    !section.isLink && (
                      <p className="body-lg">{project[section.key] as string}</p>
                    )}
                </section>
              </AnimatedReveal>
            ))}

            {/* Next project CTA */}
            <AnimatedReveal>
              <div className="rounded-2xl border border-border p-8 text-center">
                <p className="body-sm mb-4">Interested in working together?</p>
                <Button asChild className="rounded-full">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </article>
  );
}
