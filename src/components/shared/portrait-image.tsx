"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

interface PortraitImageProps {
  className?: string;
}

export function PortraitImage({ className }: PortraitImageProps) {
  const reducedMotion = useReducedMotion();

  const image = (
    <div
      className={cn(
        "relative w-full mx-auto flex items-end justify-center",
        className
      )}
    >
      <Image
        src="/images/portrait.png"
        alt={`${SITE.name} — UI/UX Designer portrait`}
        width={800}
        height={1000}
        priority
        className="w-full h-auto object-contain object-bottom drop-shadow-2xl grayscale transition-all duration-700 ease-out hover:grayscale-0"
        sizes="(max-width: 768px) 280px, 380px"
      />
    </div>
  );


  if (reducedMotion) return image;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={scaleIn}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      {image}
    </motion.div>
  );
}
