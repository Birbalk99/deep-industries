import { Link } from "@tanstack/react-router";
import type { Machine } from "@/data/machines";

export function MachineCard({ machine }: { machine: Machine; index?: number }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: machine.slug }}
      className="group block bg-background rounded-3xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow"
    >
      <div className="aspect-[4/3] overflow-hidden bg-card">
        <img
          src={machine.image}
          alt={machine.name}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
      </div>
      <div className="p-7">
        <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">
          {machine.category}
        </div>
        <h3 className="text-xl font-bold tracking-tight mb-2">{machine.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {machine.tagline}
        </p>
      </div>
    </Link>
  );
}