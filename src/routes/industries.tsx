import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2, ShieldCheck, FlaskConical, Microscope, UtensilsCrossed,
  Factory, Cpu, Beaker, Landmark, Stethoscope,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Deepindustries" },
      { name: "description", content: "Deepindustries serves hospitals, healthcare, pharmaceutical, research labs, medical colleges, food, manufacturing, automation, government and chemical industries." },
      { property: "og:title", content: "Industries We Serve — Deepindustries" },
      { property: "og:description", content: "Hospitals, pharma, labs, government and manufacturing — engineered solutions for every sector." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

const items = [
  { i: Building2, t: "Hospitals", d: "CSSD turnkey, sterilization and bio-waste solutions for multi-specialty and tertiary care hospitals." },
  { i: Stethoscope, t: "Healthcare", d: "Equipment and engineering support for clinics, day-care centres and diagnostic chains." },
  { i: FlaskConical, t: "Pharmaceutical", d: "GMP-compliant pharmaceutical machinery, validation and utility blocks." },
  { i: Microscope, t: "Research Laboratories", d: "Lab equipment, autoclaves and ultrasonic cleaners for R&D and analytical labs." },
  { i: Building2, t: "Medical Colleges", d: "Teaching hospital CSSDs, anatomy and biochemistry lab equipment." },
  { i: UtensilsCrossed, t: "Food Industry", d: "Sterilization, hygiene and process automation for the food and beverage sector." },
  { i: Factory, t: "Manufacturing", d: "Custom machine building, conveying and assembly automation." },
  { i: Cpu, t: "Industrial Automation", d: "PLC/SCADA integration, robotics and vision-guided cells." },
  { i: Landmark, t: "Government Projects", d: "Tendered supply, installation and AMC for state and central healthcare initiatives." },
  { i: Beaker, t: "Chemical Industry", d: "Reactor, dryer and material handling equipment for chemical processing." },
];

function Industries() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-6 block">Industries We Serve</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[0.95]">
            Engineered for the industries that keep India running.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            From 500-bed hospital CSSDs to GMP-grade pharma utility blocks, Deepindustries equipment is trusted across critical sectors in India and 20+ international markets.
          </p>
        </div>
      </section>
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <Reveal key={it.t} delay={(idx % 3) * 100}>
              <div className="p-8 rounded-3xl bg-card hover:bg-accent hover:text-accent-foreground transition-colors h-full group">
                <it.i className="size-9 mb-6 text-accent group-hover:text-accent-foreground" />
                <h3 className="text-xl font-bold mb-3 tracking-tight">{it.t}</h3>
                <p className="text-sm leading-relaxed opacity-80">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="max-w-7xl mx-auto mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center px-7 h-12 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            Discuss your industry requirement
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}