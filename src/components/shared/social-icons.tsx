import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement>;

export function LinkedInIcon({ className, ...props }: IconProps) {
  return (
    <svg className={cn("size-4", className)} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function BehanceIcon({ className, ...props }: IconProps) {
  return (
    <svg className={cn("size-4", className)} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 7h-7v10h7V7zM9.088 7H2v10h7.088V7zM15.5 2C17.433 2 19 3.567 19 5.5S17.433 9 15.5 9 12 7.433 12 5.5 13.567 2 15.5 2zM5.088 2C7.021 2 8.588 3.567 8.588 5.5S7.021 9 5.088 9 1.5 7.433 1.5 5.5 3.155 2 5.088 2z" />
    </svg>
  );
}

export function DribbbleIcon({ className, ...props }: IconProps) {
  return (
    <svg className={cn("size-4", className)} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314 13.454 13.454 0 00-3.996-.635 25.803 25.803 0 00-1.294-2.42 8.503 8.503 0 015.36-2.259zM12 3.958c1.86 0 3.564.633 4.926 1.692a23.715 23.715 0 00-1.152 2.14 22.005 22.005 0 00-5.548 0 23.715 23.715 0 00-1.152-2.14A8.962 8.962 0 0112 3.958zM4.395 6.61a8.503 8.503 0 015.36 2.259 25.803 25.803 0 00-1.294 2.42 13.454 13.454 0 00-3.996.635 8.502 8.502 0 011.93-5.314zM3.958 12c0-.733.09-1.447.258-2.13a14.984 14.984 0 004.066.558 27.015 27.015 0 00-.006 3.144 27.015 27.015 0 00.006 3.144 14.984 14.984 0 00-4.066.558A8.962 8.962 0 013.958 12z" />
    </svg>
  );
}

export function GitHubIcon({ className, ...props }: IconProps) {
  return (
    <svg className={cn("size-4", className)} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function InstagramIcon({ className, ...props }: IconProps) {
  return (
    <svg className={cn("size-4", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function MailIcon({ className, ...props }: IconProps) {
  return (
    <svg className={cn("size-4", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export type SocialIconName = "linkedin" | "behance" | "dribbble" | "github" | "instagram" | "email";

const iconComponents: Record<SocialIconName, ComponentType<IconProps>> = {
  linkedin: LinkedInIcon,
  behance: BehanceIcon,
  dribbble: DribbbleIcon,
  github: GitHubIcon,
  instagram: InstagramIcon,
  email: MailIcon,
};

export function SocialIcon({
  name,
  className,
  ...props
}: IconProps & { name: SocialIconName }) {
  const Icon = iconComponents[name];
  return <Icon className={className} {...props} />;
}
