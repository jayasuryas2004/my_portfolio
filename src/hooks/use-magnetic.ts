"use client";

import { useRef, useState, useCallback } from "react";

interface MagneticOptions {
  strength?: number;
}

export function useMagnetic({ strength = 0.3 }: MagneticOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setPosition({
        x: (e.clientX - centerX) * strength,
        y: (e.clientY - centerY) * strength,
      });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return { ref, position, handleMouseMove, handleMouseLeave };
}
