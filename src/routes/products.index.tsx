import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { MachineCard } from "@/components/machine-card";
import { Reveal } from "@/components/reveal";
import { machines } from "@/data/machines";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Deepindustries" },
      {
        name: "description",
        content:
          "The Deepindustries fleet of automation machines: precision milling, vision inspection, heavy articulation, modular assembly, and cleanroom robotics.",
      },
      { property: "og:title", content: "Products — Deepindustries" },
      {
        property: "og:description",
        content: "The Deepindustries fleet of automation machines.",
      },
    ],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-6 block">
            Products & Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[0.95]">
            Equipment engineered for hospitals, pharma and industry.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Eleven product categories — from CSSD turnkey projects to industrial automation. Tap any product to view full specifications, applications and documentation.
          </p>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {machines.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 3) * 100}>
              <MachineCard machine={m} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}