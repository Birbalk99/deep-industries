import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { MachineCard } from "@/components/machine-card";
import { Reveal } from "@/components/reveal";
import { getMachine, machines, type Machine } from "@/data/machines";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }): { machine: Machine } => {
    const machine = getMachine(params.slug);
    if (!machine) throw notFound();
    return { machine };
  },
  head: ({ loaderData }) => {
    const m = loaderData?.machine;
    if (!m) return { meta: [{ title: "Product — Deepindustries" }] };
    return {
      meta: [
        { title: `${m.name} — Deepindustries` },
        { name: "description", content: m.tagline },
        { property: "og:title", content: `${m.name} — Deepindustries` },
        { property: "og:description", content: m.tagline },
        { property: "og:image", content: m.image },
        { name: "twitter:image", content: m.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <p className="font-mono-tight text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">404</p>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4">Machine not found</h1>
        <Link to="/products" className="text-accent text-sm uppercase tracking-[0.2em] font-bold">
          Back to fleet →
        </Link>
      </div>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { machine } = Route.useLoaderData();
  const related = machine.related
    .map((slug: string) => machines.find((m) => m.slug === slug))
    .filter(Boolean) as Machine[];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/products"
            className="font-mono-tight text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors"
          >
            ← All machines
          </Link>

          <div className="mt-10 grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="aspect-square overflow-hidden rounded-2xl bg-card outline outline-1 -outline-offset-1 outline-border">
                <img
                  src={machine.image}
                  alt={machine.name}
                  width={1200}
                  height={1200}
                  className="size-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className="font-mono-tight text-accent text-[10px] uppercase tracking-[0.3em] mb-4 block">
                {machine.series}
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[0.95] mb-6">
                {machine.name}
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed mb-10">
                {machine.tagline}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="px-7 py-3 bg-foreground text-background font-bold text-[11px] uppercase tracking-[0.2em] rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Request quote
                </Link>
                <button
                  type="button"
                  className="px-7 py-3 border border-border font-bold text-[11px] uppercase tracking-[0.2em] rounded-full hover:bg-foreground/5 transition-colors"
                >
                  Download spec
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Overview + specs */}
      <section className="py-24 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_1.2fr] gap-16">
          <Reveal>
            <span className="font-mono-tight text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5 block">
              Overview
            </span>
            <p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug text-pretty">
              {machine.overview}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <span className="font-mono-tight text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5 block">
              Specifications
            </span>
            <div className="grid grid-cols-2 gap-px bg-border">
              {machine.specs.map((s: { label: string; value: string }) => (
                <div key={s.label} className="bg-background p-6">
                  <div className="font-mono-tight text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    {s.label}
                  </div>
                  <div className="text-2xl font-extrabold tracking-tight">{s.value}</div>
                </div>
              ))}
            </div>
            <ul className="mt-8 space-y-3">
              {machine.highlights.map((h: string) => (
                <li key={h} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="size-1.5 bg-accent rounded-full shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12 gap-8">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Related machines</h2>
              <Link
                to="/products"
                className="font-mono-tight text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent"
              >
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              {related.map((m, i) => (
                <Reveal key={m.slug} delay={i * 120}>
                  <MachineCard machine={m} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}