import Link from "next/link";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { toolbox } from "@/data/skills";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Resume",
  robots: { index: false, follow: false },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-black print:min-h-0">
      <div className="mx-auto max-w-3xl px-8 py-12 print:px-0 print:py-0">
        <header className="mb-8 border-b border-neutral-300 pb-6 print:mb-6">
          <h1 className="text-3xl font-bold tracking-tight">{SITE.name}</h1>
          <p className="mt-1 text-lg text-neutral-600">{SITE.role}</p>
          <p className="text-sm text-neutral-500">{SITE.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a href={`mailto:${SITE.email}`} className="underline print:no-underline">
              {SITE.email}
            </a>
            <span>{SITE.location}</span>
            <Link href="/" className="print:hidden underline">
              Portfolio
            </Link>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest">Summary</h2>
          <p className="text-sm leading-relaxed text-neutral-700">{SITE.description}</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest">Education</h2>
          <div>
            <p className="font-semibold">B.E. Computer Science Engineering</p>
            <p className="text-sm text-neutral-600">University — Expected 2026 (4th Year)</p>
            <p className="mt-2 text-sm text-neutral-700">
              Coursework: Human-Computer Interaction, Software Engineering, Web Technologies
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest">Experience</h2>
          <ul className="space-y-4">
            {experiences.map((exp) => (
              <li key={exp.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold">{exp.organization}</p>
                  <p className="text-sm text-neutral-500">{exp.period}</p>
                </div>
                <p className="text-sm font-medium text-neutral-600">{exp.role}</p>
                <p className="mt-1 text-sm text-neutral-700">{exp.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest">Selected Projects</h2>
          <ul className="space-y-3">
            {projects.slice(0, 4).map((project) => (
              <li key={project.slug}>
                <p className="font-semibold">{project.title}</p>
                <p className="text-sm text-neutral-600">{project.subtitle} · {project.year}</p>
                <p className="mt-1 text-sm text-neutral-700">{project.overview}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest">Tools</h2>
          <p className="text-sm text-neutral-700">{toolbox.join(" · ")}</p>
        </section>

        <p className="mt-10 text-center text-sm text-neutral-500 print:hidden">
          Use <kbd className="rounded border px-1.5 py-0.5">Ctrl/Cmd + P</kbd> to save as PDF
        </p>
      </div>
    </div>
  );
}
