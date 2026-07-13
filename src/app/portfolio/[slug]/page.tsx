import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyContent } from "@/components/sections/case-study/case-study-content";
import { getProjectBySlug, projects } from "@/data/projects";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.overview,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.overview,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyContent project={project} />;
}
