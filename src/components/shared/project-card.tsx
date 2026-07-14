"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cardHover } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  className?: string;
}

export function ProjectCard({ project, priority = false, className }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();
  const { ref, position, handleMouseMove, handleMouseLeave } = useMagnetic({
    strength: reducedMotion ? 0 : 0.1,
  });

  const card = (
    <div className={cn("group relative rounded-2xl block", className)}>
      <motion.article
        initial="rest"
        whileHover={reducedMotion ? undefined : "hover"}
        variants={cardHover}
        className="relative overflow-hidden rounded-2xl bg-card border border-border/80 hover:border-foreground/30 transition-all duration-500 shadow-sm hover:shadow-2xl h-full flex flex-col justify-between"
      >
        <Link
          href={`/portfolio/${project.slug}`}
          className="block relative aspect-[16/10] overflow-hidden focus-ring"
          aria-label={`View case study: ${project.title}`}
        >
          <Image
            src={project.thumbnail}
            alt={`${project.title} preview`}
            fill
            priority={priority}
            loading={priority ? undefined : "lazy"}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500"
            style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          {/* Floating Category Tag */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-background/90 text-foreground backdrop-blur-md border border-border/50 shadow-sm">
              {project.category}
            </span>
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-4 right-4 size-10 rounded-full bg-background text-foreground flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md group-hover:rotate-12"
          >
            <ArrowUpRight className="size-4" />
          </div>
        </Link>

        <div className="p-6 flex flex-col flex-1 justify-between gap-6">
          <div>
            <div className="flex items-start justify-between gap-4 mb-2">
              <Link href={`/portfolio/${project.slug}`} className="focus-ring rounded">
                <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-foreground/90 transition-colors">
                  {project.title}
                </h3>
              </Link>
              <span className="text-xs font-semibold tabular-nums text-muted-foreground bg-secondary px-2.5 py-1 rounded-md shrink-0">
                {project.year}
              </span>
            </div>
            <p className="body-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {project.overview || project.subtitle}
            </p>
          </div>

          <div className="flex items-center justify-between gap-3 pt-4 border-t border-border/60">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-[11px] px-2.5 py-0.5 bg-secondary/40 font-normal">
                  {tag}
                </Badge>
              ))}
            </div>

            {project.prototype && (
              <a
                href={project.prototype}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-3 py-1.5 rounded-full border border-border hover:border-foreground/40 bg-background shadow-2xs hover:shadow-sm shrink-0"
                title="Launch Live Figma Prototype"
              >
                <span>Figma</span>
                <ExternalLink className="size-3" />
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </div>
  );

  if (reducedMotion) return card;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {card}
    </motion.div>
  );
}
