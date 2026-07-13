"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PortraitImage } from "@/components/shared/portrait-image";
import { SocialLinks } from "@/components/shared/social-links";
import { SITE } from "@/lib/constants";
import { staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[90svh] flex flex-col justify-end overflow-hidden pt-24 md:pt-32 pb-0 bg-background"
    >
      {/* Huge Background Typography */}
      <div
        aria-hidden="true"
        className="absolute top-[18%] lg:top-[22%] left-0 right-0 z-0 flex justify-center text-center pointer-events-none select-none px-4"
      >
        <span className="font-display font-extrabold tracking-tighter leading-none text-[clamp(4.2rem,13.5vw,13.5rem)] flex items-center justify-center gap-[0.2em] w-full select-none pointer-events-none">
          <span className="text-outline uppercase">{SITE.firstName}</span>
          <span className="text-foreground uppercase">{SITE.lastName}</span>
        </span>
      </div>

      {/* Foreground Grid Layout */}
      <div className="container-wide relative z-10 w-full flex-1 flex flex-col justify-end mt-[120px] lg:mt-[160px] pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end w-full pb-0">
          
          {/* Column 1: Left Copy */}
          <motion.div
            className="lg:col-span-3 flex flex-col justify-end items-center lg:items-start text-center lg:text-left pb-8 lg:pb-12 xl:pb-16 order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.08, 0.15)}
          >
            <motion.h2 
              variants={slideInLeft} 
              className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold tracking-tight mb-3 text-foreground"
            >
              {SITE.role}
            </motion.h2>
            <motion.p 
              variants={slideInLeft} 
              className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-[280px] sm:max-w-sm mb-6"
            >
              {SITE.tagline}
            </motion.p>
            <motion.div variants={slideInLeft}>
              <Link
                href={`mailto:${SITE.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold tracking-tight transition-all hover:bg-neutral-800 focus-ring hover:no-underline"
              >
                Let&apos;s collaborate
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Column 2: Center Portrait */}
          <div className="lg:col-span-6 flex justify-center items-end order-1 lg:order-2 self-end h-full w-full">
            <PortraitImage className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[640px] xl:max-w-[720px] 2xl:max-w-[800px]" />
          </div>

          {/* Column 3: Right Social Pills Stack */}
          <motion.div
            className="lg:col-span-3 flex flex-col justify-end items-center lg:items-end pb-8 lg:pb-12 xl:pb-16 order-3 lg:order-3"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            transition={{ delay: 0.5 }}
          >
            <SocialLinks variant="vertical" className="flex flex-wrap lg:flex-col gap-3 justify-center" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
