"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/lib/constants";
import { SocialIcon, type SocialIconName } from "@/components/shared/social-icons";

interface SocialLinksProps {
  className?: string;
  variant?: "horizontal" | "vertical";
  showLabels?: boolean;
}

export function SocialLinks({
  className,
  variant = "horizontal",
  showLabels = true,
}: SocialLinksProps) {
  return (
    <nav
      aria-label="Social links"
      className={cn(
        "flex gap-2",
        variant === "vertical" && "flex-col",
        className
      )}
    >
      {SOCIAL_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${link.name} profile`}
          className="group flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-all hover:border-foreground hover:bg-foreground hover:text-background focus-ring"
        >
          <SocialIcon name={link.icon as SocialIconName} className="size-4 shrink-0" />
          {showLabels && (
            <span className={cn(variant === "vertical" ? "inline" : "hidden sm:inline")}>
              {link.name}
            </span>
          )}
        </Link>
      ))}
    </nav>
  );
}
