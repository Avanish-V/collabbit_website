import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
  className,
  center,
}: {
  id?: string;
  index?: string;
  label?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <section id={id} className={cn("border-t border-border/70 py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        {(index || label) && (
          <p className={cn("eyebrow text-muted-foreground", center && "text-center")}>
            {index && <span className="text-brand">{index}</span>}
            {index && label && <span className="mx-2 text-border">//</span>}
            {label}
          </p>
        )}
        {title && (
          <h2
            className={cn(
              "mt-4 max-w-3xl text-3xl font-extrabold leading-[1.08] text-foreground md:text-5xl",
              center && "mx-auto text-center",
            )}
          >
            {title}
          </h2>
        )}
        {intro && (
          <p
            className={cn(
              "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
              center && "mx-auto text-center",
            )}
          >
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function Chip({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "brand" | "amber" | "grass" | "violet" | "rose";
  className?: string;
}) {
  const tones: Record<string, string> = {
    neutral: "bg-surface-2 text-muted-foreground border-border",
    brand: "bg-brand-soft text-brand border-transparent",
    amber: "bg-amber-soft text-[oklch(0.52_0.13_70)] border-transparent",
    grass: "bg-grass-soft text-[oklch(0.45_0.12_155)] border-transparent",
    violet: "bg-violet-soft text-violet border-transparent",
    rose: "bg-rose-soft text-rose border-transparent",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
