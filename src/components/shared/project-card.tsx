"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
    strength: reducedMotion ? 0 : 0.12,
  });

  const card = (
    <Link
      href={`/portfolio/${project.slug}`}
      className={cn("group block focus-ring rounded-2xl", className)}
      aria-label={`View case study: ${project.title}`}
    >
      <motion.article
        initial="rest"
        whileHover={reducedMotion ? undefined : "hover"}
        variants={cardHover}
        className="relative overflow-hidden rounded-2xl bg-card border border-border h-full"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.thumbnail}
            alt=""
            fill
            priority={priority}
            loading={priority ? undefined : "lazy"}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-4 right-4 size-10 rounded-full bg-background flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 group-hover:rotate-12"
          >
            <ArrowUpRight className="size-4" />
          </div>
        </div>
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold tracking-tight group-hover:underline underline-offset-4">
                {project.title}
              </h3>
              <p className="body-sm mt-1">{project.subtitle}</p>
            </div>
            <span className="text-xs text-muted-foreground shrink-0">{project.year}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
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
