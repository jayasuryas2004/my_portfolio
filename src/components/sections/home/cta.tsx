"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { SITE } from "@/lib/constants";

export function CTA() {
  const reducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="cta-heading" className="py-24 md:py-32">
      <div className="container-wide">
        <AnimatedReveal>
          <div className="relative overflow-hidden rounded-3xl bg-foreground text-background px-8 py-16 md:px-16 md:py-24 text-center">
            {/* Decorative background */}
            <div aria-hidden="true" className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-white/20 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              {/* Availability badge inside card */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-wider text-white mb-6 uppercase">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for New Project
              </div>

              <h2 id="cta-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-background mb-6 uppercase leading-none">
                Have a Project in Mind?
              </h2>
              <p className="text-background/80 leading-relaxed mb-8 max-w-md mx-auto font-medium text-sm sm:text-base">
                Together, we can create something clean and impactful. Let&apos;s collaborate to bring your ideas to life in a way that resonates with everyone.
              </p>

              {!reducedMotion ? (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={`mailto:${SITE.email}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 text-sm font-semibold transition-all hover:shadow-soft hover:no-underline"
                  >
                    Contact Me
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              ) : (
                <Link
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 text-sm font-semibold transition-all hover:shadow-soft hover:no-underline"
                >
                  Contact Me
                  <ArrowUpRight className="size-4" />
                </Link>
              )}
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
