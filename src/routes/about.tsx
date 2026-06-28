import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import facility from "@/assets/facility.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Deepindustries" },
      {
        name: "description",
        content:
          "Deepindustries is an engineering-first manufacturer of automation machines, founded on the principle that precision is non-negotiable.",
      },
      { property: "og:title", content: "About Us — Deepindustries" },
      {
        property: "og:description",
        content: "An engineering-first manufacturer of automation machines.",
      },
    ],
  }),
  component: About,
});

const principles = [
  {
    n: "01",
    t: "Engineering first",
    d: "Every machine is designed by the engineers who will commission it. Specifications are written backwards from the factory floor.",
  },
  {
    n: "02",
    t: "Long horizon",
    d: "Our platforms are built to operate two decades. Components are sourced for service life, not procurement cost.",
  },
  {
    n: "03",
    t: "Quiet operation",
    d: "We measure success in uneventful production runs. The best machine is the one that disappears into the line.",
  },
];

const numbers = [
  { v: "2009", l: "Founded" },
  { v: "180+", l: "Engineers" },
  { v: "2,400", l: "Machines deployed" },
  { v: "27", l: "Countries" },
];

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono-tight text-accent text-[10px] uppercase tracking-[0.4em] mb-6 block">
            About Deepindustries
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] max-w-4xl">
            We design automation as if our name were on every part it makes.
          </h1>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            For fifteen years, Deepindustries has built the machines and the engineering support behind them — for aerospace, semiconductor, medical and heavy-industry plants on four continents.
          </p>
        </div>
      </section>

      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="aspect-[21/9] overflow-hidden rounded-2xl bg-card outline outline-1 -outline-offset-1 outline-border">
              <img
                src={facility}
                alt="Deepindustries manufacturing facility"
                loading="lazy"
                width={1920}
                height={1080}
                className="size-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-16 max-w-lg">
            Three principles, kept since 2009.
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 120} className="bg-background p-10">
                <div className="font-mono-tight text-accent text-[10px] uppercase tracking-[0.3em] mb-8">
                  {p.n}
                </div>
                <h3 className="font-bold text-lg mb-4">{p.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {numbers.map((n) => (
            <div key={n.l}>
              <div className="text-5xl md:text-6xl font-extrabold tracking-tighter">{n.v}</div>
              <div className="mt-3 font-mono-tight text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {n.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}