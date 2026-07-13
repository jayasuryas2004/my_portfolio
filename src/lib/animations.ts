import type { Variants, Transition } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const defaultTransition: Transition = {
  duration: 0.7,
  ease: EASE,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: defaultTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const lineReveal: Variants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1, ease: EASE },
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, filter: "blur(12px)", scale: 0.98 },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
  exit: {
    opacity: 0,
    filter: "blur(8px)",
    scale: 1.01,
    transition: { duration: 0.35, ease: EASE },
  },
};

export const headlineReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE,
      delay: i * 0.08,
    },
  }),
};

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.01,
    transition: { duration: 0.4, ease: EASE },
  },
};
