"use client";

import { useState } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toolbox } from "@/data/skills";
import { SITE } from "@/lib/constants";

const philosophy = [
  {
    title: "Research First",
    description: "Every design decision starts with understanding people — their goals, frustrations, and context.",
  },
  {
    title: "Clarity Over Decoration",
    description: "I strip away visual noise until only what matters remains. Less is a deliberate choice, not a limitation.",
  },
  {
    title: "Iterate Relentlessly",
    description: "First drafts are starting points. Testing, feedback, and refinement turn good ideas into great products.",
  },
  {
    title: "Design for Everyone",
    description: "Accessibility isn't optional. I build inclusive experiences that work for diverse users and contexts.",
  },
];

const workflow = [
  { step: "01", title: "Discover", description: "Research, interviews, competitive analysis, and problem framing." },
  { step: "02", title: "Define", description: "Personas, journey maps, information architecture, and success metrics." },
  { step: "03", title: "Design", description: "Wireframes, visual design, prototyping, and design system creation." },
  { step: "04", title: "Deliver", description: "Handoff specs, developer collaboration, usability testing, and iteration." },
];

const goals = [
  "Land a UI/UX design internship at a product-focused company",
  "Build a portfolio of 8+ case studies with documented research",
  "Contribute to open-source design systems",
  "Develop expertise in design engineering with React and Next.js",
];

export function AboutContent() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <AnimatedReveal>
            <p className="label mb-4">/ About</p>
            <h1 className="heading-display max-w-4xl">
              Designing with empathy, building with purpose
            </h1>
            <p className="body-lg mt-6 max-w-2xl">
              I&apos;m {SITE.name}, a {SITE.role.toLowerCase()} and {SITE.tagline.toLowerCase()}.
              I believe great design lives at the intersection of human understanding and visual craft.
            </p>
          </AnimatedReveal>
        </div>
      </header>

      {/* Story */}
      <section className="container-narrow py-16 md:py-24">
        <AnimatedReveal>
          <SectionHeading label="/ Story" title="How I Got Here" />
          <div className="space-y-4 body-lg">
            <p>
              My design journey started unexpectedly during my second year of computer science.
              While building a group project app, I realized I cared more about how it felt to use
              than the backend architecture. That curiosity led me down a path of self-study,
              online courses, and countless Figma files.
            </p>
            <p>
              Today, I split my time between coursework and design — leading my university&apos;s
              design club, taking on freelance projects for classmates, and constantly pushing my
              portfolio forward. I&apos;m drawn to products that solve real problems for real people,
              especially in education and accessibility.
            </p>
            <p>
              When I&apos;m not designing, you&apos;ll find me sketching in coffee shops, exploring
              typography on Behance, or contributing to campus open-source projects.
            </p>
          </div>
        </AnimatedReveal>
      </section>

      {/* Education */}
      <section className="bg-card border-y border-border py-16 md:py-24">
        <div className="container-narrow">
          <AnimatedReveal>
            <SectionHeading label="/ Education" title="Academic Background" />
            <div className="rounded-2xl border border-border p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">B.E. Computer Science Engineering</h3>
                  <p className="text-muted mt-1">University (Expected 2026)</p>
                </div>
                <Badge>4th Year</Badge>
              </div>
              <p className="body-sm mt-4">
                Relevant coursework: Human-Computer Interaction, Software Engineering, Data Structures,
                Web Technologies. Active member of Design Club and Open Source Group.
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container-narrow py-16 md:py-24">
        <AnimatedReveal>
          <SectionHeading label="/ Philosophy" title="Design Principles" />
        </AnimatedReveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {philosophy.map((item, i) => (
            <AnimatedReveal key={item.title} delay={i * 0.1}>
              <div className="rounded-xl border border-border p-6 h-full">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="body-sm">{item.description}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-card border-y border-border py-16 md:py-24">
        <div className="container-narrow">
          <AnimatedReveal>
            <SectionHeading label="/ Workflow" title="How I Work" />
          </AnimatedReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, i) => (
              <AnimatedReveal key={step.step} delay={i * 0.1}>
                <div className="relative">
                  <span className="text-4xl font-extrabold text-border">{step.step}</span>
                  <h3 className="font-semibold mt-2 mb-2">{step.title}</h3>
                  <p className="body-sm">{step.description}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Toolbox */}
      <section className="container-narrow py-16 md:py-24">
        <AnimatedReveal>
          <SectionHeading label="/ Toolbox" title="Tools & Technologies" />
          <div className="flex flex-wrap gap-3">
            {toolbox.map((tool) => (
              <Badge key={tool} variant="outline" className="text-sm py-2 px-4">
                {tool}
              </Badge>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* Goals */}
      <section className="bg-card border-y border-border py-16 md:py-24">
        <div className="container-narrow">
          <AnimatedReveal>
            <SectionHeading label="/ Goals" title="What's Next" />
            <ul className="space-y-3">
              {goals.map((goal) => (
                <li key={goal} className="flex gap-3 body-lg">
                  <span className="size-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                  {goal}
                </li>
              ))}
            </ul>
          </AnimatedReveal>
        </div>
      </section>

      {/* Resume */}
      <section className="container-narrow py-16 md:py-24 text-center">
        <AnimatedReveal>
          <SectionHeading
            label="/ Resume"
            title="Download My Resume"
            subtitle="A concise overview of my skills, projects, and experience."
            align="center"
          />
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/resume" target="_blank">
              <Download className="size-4" />
              View &amp; Print Resume
            </Link>
          </Button>
          <p className="body-sm mt-4">Open the resume page and use your browser&apos;s print dialog to save as PDF.</p>
        </AnimatedReveal>
      </section>
    </div>
  );
}
