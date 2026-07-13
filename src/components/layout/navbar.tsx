"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { HOME_SECTIONS, NAV_LINKS, SITE } from "@/lib/constants";
import { useScrollSection } from "@/hooks/use-scroll-section";
import { cn } from "@/lib/utils";
import { fadeIn } from "@/lib/animations";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = HOME_SECTIONS.map((s) => s.id);
  const { activeSection, scrollToSection } = useScrollSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleSectionClick = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pt-4"
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          "mx-auto flex max-w-4xl items-center justify-between rounded-full px-4 py-2 transition-all duration-500",
          scrolled || mobileOpen ? "glass shadow-soft" : "bg-transparent"
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold tracking-tight focus-ring text-foreground hover:opacity-85 transition-opacity"
        >
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
          <span className="hidden sm:inline">{SITE.availability}</span>
          <span className="sm:hidden">Available</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {isHome
            ? [
                ...HOME_SECTIONS.filter((s) => s.id !== "skills").map((section) => {
                  const labelMap: Record<string, string> = {
                    work: "Work (4)",
                    services: "Service (4)",
                    experience: "Experience (1Y+)",
                  };
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      aria-current={activeSection === section.id ? "true" : undefined}
                      className={cn(
                        "rounded-full px-4 py-2 text-xs font-semibold tracking-tight transition-colors focus-ring",
                        activeSection === section.id
                          ? "bg-foreground text-background"
                          : "text-muted hover:text-foreground"
                      )}
                    >
                      {labelMap[section.id] || section.label}
                    </button>
                  );
                }),
                <Link
                  key="contact-nav"
                  href="/contact"
                  className="rounded-full px-4 py-2 text-xs font-semibold tracking-tight text-muted hover:text-foreground transition-colors focus-ring hover:no-underline"
                >
                  Contact
                </Link>
              ]
            : NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-semibold tracking-tight transition-colors focus-ring",
                    pathname === link.href
                      ? "bg-foreground text-background"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="rounded-full hidden sm:inline-flex bg-foreground text-background hover:bg-neutral-800 font-semibold text-xs py-2 px-4 shadow-soft">
            <Link href="/contact" className="flex items-center gap-1 hover:no-underline">
              Let&apos;s Talk <span className="text-[10px]">↗</span>
            </Link>
          </Button>

          <button
            type="button"
            className="md:hidden inline-flex size-9 items-center justify-center rounded-full border border-border bg-card focus-ring"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden mx-auto mt-3 max-w-4xl rounded-2xl glass shadow-soft p-4"
        >
          <ul className="space-y-1">
            {isHome
              ? HOME_SECTIONS.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => handleSectionClick(section.id)}
                      className={cn(
                        "w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors focus-ring",
                        activeSection === section.id
                          ? "bg-foreground text-background"
                          : "text-muted hover:bg-border/50 hover:text-foreground"
                      )}
                    >
                      {section.label}
                    </button>
                  </li>
                ))
              : NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-sm font-medium transition-colors focus-ring",
                        pathname === link.href
                          ? "bg-foreground text-background"
                          : "text-muted hover:bg-border/50 hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            <li>
              <Link
                href="/portfolio"
                className={cn(
                  "block rounded-xl px-4 py-3 text-sm font-medium transition-colors focus-ring",
                  pathname.startsWith("/portfolio")
                    ? "bg-foreground text-background"
                    : "text-muted hover:bg-border/50 hover:text-foreground"
                )}
              >
                Portfolio
              </Link>
            </li>
            <li className="pt-2">
              <Button asChild className="w-full rounded-full">
                <Link href="/contact">Let&apos;s Talk</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
