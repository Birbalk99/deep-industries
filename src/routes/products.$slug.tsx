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
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/products"
            className="text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground hover:text-accent transition-colors"
          >
            ← All machines
          </Link>

          <div className="mt-10 grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="aspect-square overflow-hidden rounded-3xl bg-card">
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
              <span className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-4 block">
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
                  className="px-6 h-11 inline-flex items-center rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Request Quote
                </Link>
                <button
                  type="button"
                  className="px-6 h-11 inline-flex items-center rounded-full border border-border font-semibold text-sm hover:bg-card transition-colors"
                >
                  Download Spec Sheet
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Overview + specs */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_1.2fr] gap-16">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-accent mb-5 block">
              Overview
            </span>
            <p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug text-pretty">
              {machine.overview}
            </p>
            <div className="mt-10">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-accent mb-4 block">
                Applications
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {machine.applications.map((a: string) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-accent mb-5 block">
              Specifications
            </span>
            <div className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
              {machine.specs.map((s: { label: string; value: string }) => (
                <div key={s.label} className="bg-background p-6">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3">
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
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Related products</h2>
              <Link
                to="/products"
                className="text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground hover:text-accent"
              >
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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