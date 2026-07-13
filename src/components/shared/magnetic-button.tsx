"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useMagnetic } from "@/hooks/use-magnetic";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function MagneticButton({
  href,
  children,
  className,
  external,
}: MagneticButtonProps) {
  const { ref, position, handleMouseMove, handleMouseLeave } = useMagnetic({
    strength: 0.25,
  });
  const reducedMotion = useReducedMotion();

  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );

  const classes = cn(
    "group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-shadow hover:shadow-lift focus-ring",
    className
  );

  if (reducedMotion) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="inline-block"
    >
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      ) : (
        <Link href={href} className={classes}>
          {content}
        </Link>
      )}
    </motion.div>
  );
}
