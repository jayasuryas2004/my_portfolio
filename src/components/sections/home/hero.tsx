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
      className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden pt-24 md:pt-32 pb-0 bg-background"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-b from-background/0 via-background/0 to-background pointer-events-none"
      />

      {/* Huge Background Typography */}
      <div
        aria-hidden="true"
        className="absolute top-[10%] sm:top-[12%] lg:top-[12%] xl:top-[14%] left-0 right-0 z-0 flex justify-center text-center pointer-events-none select-none px-4"
      >
        <span className="font-display font-extrabold tracking-tighter leading-none text-[clamp(3.2rem,13.5vw,13.5rem)] flex items-center justify-center gap-[0.2em] w-full select-none pointer-events-none">
          <span className="text-outline uppercase">{SITE.firstName}</span>
          <span className="text-foreground uppercase">{SITE.lastName}</span>
        </span>
      </div>

      {/* Foreground Grid Layout */}
      <div className="container-wide relative z-10 w-full flex-1 flex flex-col justify-end mt-[180px] sm:mt-[220px] lg:mt-[240px] pb-0">
        
        {/* Changed items-end to items-center so text and socials float in the middle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center w-full pb-0 min-h-[50vh]">
          
          {/* Column 1: Left Copy (Minimalist) */}
          <motion.div
            className="lg:col-span-4 xl:col-span-3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left pb-8 lg:pb-0 order-2 lg:order-1 z-20"
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
              className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-[320px] sm:max-w-[280px] mb-6"
            >
              {SITE.tagline}
            </motion.p>

            <motion.div variants={slideInLeft} className="flex justify-center lg:justify-start">
              <Link
                href={`mailto:${SITE.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 hover:bg-neutral-800 hover:scale-[1.04] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] focus-ring hover:no-underline"
              >
                Let&apos;s collaborate
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Column 2: Center Portrait (Forced to the bottom with self-end) */}
          <div className="lg:col-span-4 xl:col-span-6 flex justify-center items-end self-end order-1 lg:order-2 h-full w-full z-10">
            <motion.div
              animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full flex justify-center"
            >
              <PortraitImage className="w-full max-w-[560px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[650px] xl:max-w-[750px] 2xl:max-w-[820px]" />
            </motion.div>
          </div>

          {/* Column 3: Right Social Pills Stack */}
          <motion.div
            className="lg:col-span-4 xl:col-span-3 flex flex-col justify-center items-center lg:items-end pb-8 lg:pb-0 order-3 lg:order-3 z-20"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            transition={{ delay: 0.5 }}
          >
            <SocialLinks variant="vertical" className="flex flex-wrap lg:flex-col gap-3 justify-center" />
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="hidden lg:flex justify-center pb-4 mt-8"
        >
          <motion.span
            animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs tracking-widest uppercase text-muted-foreground"
          >
            Scroll ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}