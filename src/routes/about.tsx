import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import facility from "@/assets/gallery/images/about-factory.jpg";
import { LeadershipSection, type LeadershipMember } from "@/components/leadership-section";
import directorDeepak from "@/assets/director-deepak.png";

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
    t: "Engineering First",
    d: "Every product is designed by the engineers who will commission it. Specifications are written backwards from the hospital and factory floor.",
  },
  {
    n: "02",
    t: "Built To Last",
    d: "Our equipment is built to operate for decades. SS 316L contact parts and components sourced for service life, not procurement cost.",
  },
  {
    n: "03",
    t: "Service Forever",
    d: "We measure success in uneventful operation. Every installation comes with lifelong service, spares and AMC support.",
  },
];

const numbers = [
  { v: "2024", l: "Founded" },
  { v: "10+", l: "Engineers & Technicians" },
  { v: "50+", l: "Projects Delivered" },
  { v: "20+", l: "States Covered" },
];

const leadership: LeadershipMember[] = [
  {
    name: "Deepak Kumar",
    designation: "Founder & Director",
    photo: directorDeepak,
    bio: "Deepak Kumar is the Founder & Director of Deepindustries. With a vision of engineering excellence, innovation, and customer satisfaction, he has led the company in delivering high-quality manufacturing solutions, hospital CSSD turnkey projects, sterilization equipment, industrial automation systems, and precision-engineered products. His commitment to quality, reliability, and continuous improvement has helped Deepindustries build long-term relationships with customers across India and international markets.",
    highlights: [
      "6+ Years of Industry Experience",
      "Engineering & Manufacturing Expert",
      "Customer-Centric Leadership",
      "Innovation-Driven Approach",
    ],
  },
];

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="pt-44 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-6 block">
            About Deepindustries
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] max-w-4xl">
            Engineering excellence,<br />in service of mankind.
          </h1>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Established in 2024, Deepindustries is a trusted manufacturer, supplier and exporter of precision-engineered hospital CSSD turnkey projects, autoclaves, sterilizers, pharmaceutical machinery, laboratory equipment and industrial automation systems — delivered to hospitals, pharma companies and industries across 20+ States markets.
          </p>
        </div>
      </section>

      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="aspect-21/9 overflow-hidden rounded-3xl bg-card">
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
            Three principles, kept since 2024.
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

      <LeadershipSection members={leadership} />

      <SiteFooter />
    </div>
  );
}