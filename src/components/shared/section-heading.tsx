import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <p className="label mb-3">{label}</p>
      {title && <h2 className="heading-section">{title}</h2>}
      {subtitle && <p className="body-lg mt-4 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
