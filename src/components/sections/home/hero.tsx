"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PortraitImage } from "@/components/shared/portrait-image";
import { SocialLinks } from "@/components/shared/social-links";
import { SITE } from "@/lib/constants";
import { staggerContainer, slideInLeft, slideInRight, fadeUp } from "@/lib/animations";
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
<<<<<<< HEAD
        className="absolute inset-0 z-0 bg-gradient-to-b from-background/0 via-background/0 to-background pointer-events-none"
      />

      {/* Huge Background Typography — pulled up on smaller screens to avoid overlap */}
      <div
        aria-hidden="true"
        className="absolute top-[8%] sm:top-[12%] lg:top-[22%] left-0 right-0 z-0 flex justify-center text-center pointer-events-none select-none px-4"
=======
        className="absolute top-[16%] lg:top-[20%] left-0 right-0 z-0 flex justify-center text-center pointer-events-none select-none px-4"
>>>>>>> b0d05567e4261cea6c616914887da773ad146b21
      >
        <span className="font-display font-extrabold tracking-tighter leading-none text-[clamp(3.2rem,13.5vw,13.5rem)] flex items-center justify-center gap-[0.2em] w-full select-none pointer-events-none">
          <span className="text-outline uppercase">{SITE.firstName}</span>
          <span className="text-foreground uppercase">{SITE.lastName}</span>
        </span>
      </div>

<<<<<<< HEAD
      {/* Foreground Grid Layout — extra top margin on medium screens so it clears the big type */}
      <div className="container-wide relative z-10 w-full flex-1 flex flex-col justify-end mt-[160px] sm:mt-[200px] md:mt-[220px] lg:mt-[160px] pb-0">
=======
      {/* Subtle Radial Glow Aura */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-foreground/5 via-foreground/[0.02] to-transparent rounded-full blur-3xl pointer-events-none z-0"
      />

      {/* Foreground Grid Layout */}
      <div className="container-wide relative z-10 w-full flex-1 flex flex-col justify-end mt-[100px] lg:mt-[140px] pb-0">
>>>>>>> b0d05567e4261cea6c616914887da773ad146b21
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end w-full pb-0">
          
          {/* Column 1: Left Copy */}
          <motion.div
            className="lg:col-span-4 flex flex-col justify-end items-center lg:items-start text-center lg:text-left pb-8 lg:pb-12 xl:pb-16 order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.08, 0.15)}
          >
<<<<<<< HEAD
            <motion.div
              variants={slideInLeft}
              className="flex items-center gap-2 mb-16 rounded-full border border-border/60 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
            >
=======
            {/* Status Badge */}
            <motion.div variants={slideInLeft} className="mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-md shadow-sm">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold tracking-wide uppercase text-foreground/80">
                  Available for UI/UX & Systems Roles
                </span>
              </div>
>>>>>>> b0d05567e4261cea6c616914887da773ad146b21
            </motion.div>

            <motion.h2 
              variants={slideInLeft} 
              className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold tracking-tight mb-3 text-foreground"
            >
              {SITE.role}
            </motion.h2>
            <motion.p 
              variants={slideInLeft} 
              className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-[320px] sm:max-w-md mb-6"
            >
              {SITE.tagline}
            </motion.p>

<<<<<<< HEAD
            <motion.div variants={slideInLeft}>
              <Link
                href={`mailto:${SITE.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 hover:bg-neutral-800 hover:scale-[1.04] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] focus-ring hover:no-underline"
=======
            <motion.div variants={slideInLeft} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <Link
                href={`mailto:${SITE.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold tracking-tight transition-all hover:bg-neutral-800 focus-ring hover:no-underline shadow-lg"
>>>>>>> b0d05567e4261cea6c616914887da773ad146b21
              >
                Let&apos;s collaborate
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-5 py-3.5 text-sm font-medium hover:bg-foreground hover:text-background transition-all"
              >
                Explore Work ↓
              </Link>
            </motion.div>

            {/* Quick Stats Banner */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-4 pt-6 border-t border-border/60 w-full max-w-[320px] sm:max-w-xs"
            >
              <div>
                <p className="text-xl font-bold tracking-tight text-foreground">4+ Deep</p>
                <p className="text-xs text-muted-foreground font-medium">Case Studies & UI Systems</p>
              </div>
              <div>
                <p className="text-xl font-bold tracking-tight text-foreground">100%</p>
                <p className="text-xs text-muted-foreground font-medium">User-Centric Methodology</p>
              </div>
            </motion.div>

            <motion.div
              variants={slideInLeft}
              className="flex items-center gap-5 mt-8 pt-6 border-t border-border/50 w-full justify-center lg:justify-start"
            >
              <div className="text-left">
                <div className="text-xl font-bold text-foreground">4+</div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-wide">Projects</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-left">
                <div className="text-xl font-bold text-foreground">1Y+</div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-wide">Experience</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-left">
                <div className="text-xl font-bold text-foreground">90+</div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-wide">Lighthouse</div>
              </div>
            </motion.div>
          </motion.div>

<<<<<<< HEAD
          {/* Column 2: Center Portrait — slightly larger max sizes */}
          <div className="lg:col-span-6 flex justify-center items-end order-1 lg:order-2 self-end h-full w-full">
            <motion.div
              animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full flex justify-center"
            >
              <PortraitImage className="w-full max-w-[560px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[700px] xl:max-w-[780px] 2xl:max-w-[860px]" />
            </motion.div>
=======
          {/* Column 2: Center Portrait */}
          <div className="lg:col-span-5 flex justify-center items-end order-1 lg:order-2 self-end h-full w-full">
            <PortraitImage className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[620px] xl:max-w-[700px] 2xl:max-w-[780px]" />
>>>>>>> b0d05567e4261cea6c616914887da773ad146b21
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="hidden lg:flex justify-center pb-4"
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