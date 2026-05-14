import * as React from "react";
import { cn } from "@/lib/utils";

export type HeroProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  highlights?: React.ReactNode[];
  rightContent?: React.ReactNode;
  className?: string;
};

export default function Hero({
  title,
  description,
  actions,
  highlights,
  rightContent,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[var(--Zax-Creme)]/5 via-[var(--Zax-Red)]/15 to-[var(--Zax-Blue)]/5 p-5xl shadow-2xl backdrop-blur-md",
        className,
      )}
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-[var(--Zax-Red)] via-[var(--Zax-Creme)] to-[var(--Zax-Blue)] opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-[var(--Zax-Creme)] via-[var(--Zax-Blue)] to-[var(--Zax-Red)] opacity-25 blur-3xl" />

      <div className="relative grid gap-lg md:grid-cols-[1.5fr_1fr] md:items-center">
        <div className="space-y-md">
          <div className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </div>
          {description ? (
            <p className="text-pretty text-lg text-muted-foreground">
              {description}
            </p>
          ) : null}
          {actions ? (
            <div className="flex flex-wrap gap-sm">{actions}</div>
          ) : null}
        </div>
        <div className="grid gap-sm">
          {rightContent
            ? rightContent
            : (highlights || []).map((item, idx) => (
                <div
                  key={`hero-highlight-${idx}`}
                  className="inline-flex items-center gap-sm self-start rounded-2xl border border-white/10 bg-white/5 px-lg py-md text-sm shadow backdrop-blur"
                >
                  {item}
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
