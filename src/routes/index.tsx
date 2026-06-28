import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { machines } from "@/data/machines";
import heroImg from "@/assets/hero-robot.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepindustries — Automation machines, engineered" },
      {
        name: "description",
        content:
          "Deepindustries designs and manufactures precision automation machines and engineering support systems for modern industry.",
      },
      { property: "og:title", content: "Deepindustries — Automation machines, engineered" },
      {
        property: "og:description",
        content: "Precision automation machines for modern manufacturing plants.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const showcase = machines.slice(0, 3);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="relative h-screen min-h-[680px] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <img
          src={heroImg}
          alt="Deepindustries flagship automation system"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70" />
        <div className="relative z-10 max-w-4xl animate-reveal">
          <span className="font-mono-tight text-accent text-[10px] uppercase tracking-[0.4em] mb-6 block">
            System Revision 2026.02
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-balance leading-[0.9] mb-8">
            Autonomy through{" "}
            <span className="text-muted-foreground">absolute</span> precision.
          </h1>
          <p className="text-base md:text-lg text-foreground/70 max-w-xl mx-auto mb-10 text-pretty">
            Manufacturing and engineering support for the world&apos;s most demanding automation lines.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              to="/products"
              className="px-8 py-3 bg-foreground text-background font-bold text-[11px] uppercase tracking-[0.2em] rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Explore Fleet
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-border font-bold text-[11px] uppercase tracking-[0.2em] rounded-full hover:bg-foreground/5 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-px h-12 bg-foreground" />
        </div>
      </section>

      {/* Scroll Showcase */}
      <section className="py-32 space-y-40">
        {showcase.map((m, i) => {
          const reversed = i % 2 === 1;
          return (
            <Reveal
              key={m.slug}
              as="section"
              className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-20 items-center"
            >
              <div className={reversed ? "md:order-2" : ""}>
                <div className="aspect-square overflow-hidden rounded-2xl bg-card outline outline-1 -outline-offset-1 outline-border">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    width={1200}
                    height={1200}
                    className="size-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className={reversed ? "md:order-1" : ""}>
                <span className="font-mono-tight text-accent text-[10px] uppercase tracking-[0.3em] mb-4 block">
                  {String(i + 1).padStart(2, "0")} / {String(showcase.length).padStart(2, "0")} — {m.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{m.name}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
                  {m.overview}
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-border pt-8 mb-8 max-w-md">
                  {m.specs.slice(0, 2).map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-extrabold tracking-tight">{s.value}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1 font-mono-tight">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/products/$slug"
                  params={{ slug: m.slug }}
                  className="inline-flex items-center gap-4 text-foreground font-bold uppercase tracking-[0.2em] text-xs group"
                >
                  View specifications
                  <span className="w-10 h-px bg-foreground group-hover:w-16 group-hover:bg-accent transition-all" />
                </Link>
              </div>
            </Reveal>
          );
        })}
      </section>

      {/* Capabilities */}
      <section className="bg-card/40 py-32 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-md leading-tight">
              Engineering support that redefines output.
            </h3>
            <div className="font-mono-tight text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              Services / Capabilities
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                t: "Custom Integration",
                d: "Bespoke robotics and software layers designed to interface with existing legacy ERP and MES systems.",
              },
              {
                t: "Sub-Micron Tuning",
                d: "On-site calibration services using laser interferometry for aerospace-grade accuracy and traceability.",
              },
              {
                t: "Predictive Lifecycle",
                d: "AI-driven maintenance scheduling that eliminates unplanned factory downtime across deployed fleets.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 120} className="bg-background p-10 group">
                <div className="size-8 bg-secondary rounded-lg mb-8 group-hover:bg-accent transition-colors" />
                <h4 className="font-bold mb-4 text-lg">{c.t}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-mono-tight uppercase tracking-[0.3em] text-muted-foreground mb-10">
            Trusted by engineering teams at
          </p>
          <div className="flex flex-wrap justify-between items-center gap-x-12 gap-y-6 opacity-40">
            {["AEROSTREAM", "QUANTUM-V", "NORDIC HEAVY", "HEXACORE", "TITAN FAB"].map((n) => (
              <span key={n} className="font-extrabold text-xl md:text-2xl tracking-tighter">
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
