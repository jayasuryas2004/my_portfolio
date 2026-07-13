import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "@/components/shared/social-links";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import { SocialIcon, type SocialIconName } from "@/components/shared/social-icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container-wide flex flex-col items-center justify-center gap-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          
          {/* Logo Pill */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-all hover:border-foreground hover:bg-foreground hover:text-background focus-ring hover:no-underline text-foreground"
          >
            <div className="relative size-5 rounded-full overflow-hidden bg-neutral-200 border border-border shrink-0">
              <Image 
                src="/images/portrait.png" 
                alt="Jaya Surya" 
                fill 
                className="object-cover object-top grayscale"
              />
            </div>
            <span>{SITE.name}</span>
          </Link>

          {/* Social Pills */}
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-all hover:border-foreground hover:bg-foreground hover:text-background focus-ring hover:no-underline text-foreground"
            >
              <SocialIcon name={link.icon as SocialIconName} className="size-4 shrink-0" />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        <p className="text-xs text-muted-foreground tracking-tight">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
