import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import cssd from "@/assets/hero-cssd.jpg";
import pharma from "@/assets/hero-pharma.jpg";
import automation from "@/assets/hero-automation.jpg";
import factory from "@/assets/gallery/images/about-factory.jpg";
import { MapPin, Calendar } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Deepindustries" },
      { name: "description", content: "Selected hospital CSSD, pharma machinery and industrial automation projects delivered by Deepindustries across India and overseas." },
      { property: "og:title", content: "Projects — Deepindustries" },
      { property: "og:description", content: "Selected projects across hospitals, pharma and industry." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const projects = [
  { img: cssd, cat: "Hospital CSSD", t: "300-Bed CSSD Turnkey — Sterling Hospital", loc: "Ahmedabad, India", year: "2024", d: "Complete CSSD layout, dual pass-through autoclaves, washer-disinfectors and bio-waste, validated and commissioned in 12 weeks." },
  { img: pharma, cat: "Pharma Machinery", t: "Liquid Orals Line — NovaPharma Labs", loc: "Baddi, India", year: "2024", d: "200 bph filling line integrated with capping, labelling and serialisation, with full DQ/IQ/OQ/PQ documentation." },
  { img: automation, cat: "Industrial Automation", t: "Robotic Assembly Cell — Tier-1 Auto", loc: "Pune, India", year: "2023", d: "6-axis robotic assembly cell with vision-guided pick & place, integrated with plant MES." },
  { img: factory, cat: "Lab Equipment", t: "Pathology Lab Equipment — AIIMS", loc: "Bhopal, India", year: "2023", d: "Supply, installation and AMC for 40+ laboratory instruments across three departments." },
  { img: cssd, cat: "CSSD Turnkey (Export)", t: "Central Hospital CSSD — Nairobi", loc: "Kenya", year: "2023", d: "Export project including design adaptation, training and on-site commissioning." },
  { img: pharma, cat: "Pharma Utility", t: "WFI Skid & Steam Generator", loc: "Hyderabad, India", year: "2022", d: "Water-for-injection skid integrated with pure steam generator and distribution loop." },
];

function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-6 block">Projects</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[0.95]">
            130+ projects, delivered on time.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Selected installations across hospitals, pharma plants and factory floors — in 20+ States Markets.
          </p>
        </div>
      </section>
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <Reveal key={p.t} delay={(idx % 2) * 100}>
              <article className="group bg-card rounded-3xl overflow-hidden">
                <div className="aspect-4/3 overflow-hidden">
                  <img src={p.img} alt={p.t} loading="lazy" width={1200} height={900} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">{p.cat}</div>
                  <h3 className="text-2xl font-bold tracking-tight mb-3">{p.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.d}</p>
                  <div className="flex flex-wrap gap-5 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5 text-accent" /> {p.loc}</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar className="size-3.5 text-accent" /> {p.year}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="max-w-7xl mx-auto mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center px-7 h-12 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            Discuss your project
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}