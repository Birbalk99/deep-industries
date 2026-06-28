import { Link } from "@tanstack/react-router";
import type { Machine } from "@/data/machines";

export function MachineCard({ machine, index }: { machine: Machine; index?: number }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: machine.slug }}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-card outline outline-1 -outline-offset-1 outline-border">
        <img
          src={machine.image}
          alt={machine.name}
          loading="lazy"
          width={1200}
          height={1200}
          className="size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        {typeof index === "number" && (
          <span className="absolute top-5 left-5 font-mono-tight text-[10px] uppercase tracking-[0.25em] text-accent">
            {String(index + 1).padStart(2, "0")} / {machine.category}
          </span>
        )}
      </div>
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold tracking-tight">{machine.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground max-w-[36ch]">
            {machine.tagline}
          </p>
        </div>
        <span className="mt-1 shrink-0 text-[10px] font-mono-tight uppercase tracking-[0.2em] text-foreground/60 group-hover:text-accent transition-colors">
          View →
        </span>
      </div>
    </Link>
  );
}