import { cn } from "@/lib/utils";

interface BackgroundTextProps {
  text: string;
  className?: string;
}

export function BackgroundText({ text, className }: BackgroundTextProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "bg-text absolute inset-x-0 top-1/2 -translate-y-1/2 text-[clamp(4rem,18vw,16rem)] text-foreground/[0.03] select-none overflow-hidden whitespace-nowrap text-center",
        className
      )}
    >
      {text}
    </div>
  );
}
