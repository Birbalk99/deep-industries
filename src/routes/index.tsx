import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, Play, ShieldCheck, Sparkles, Wrench, Award, Headphones,
  Globe, Factory, FlaskConical, Building2, Microscope, UtensilsCrossed, Cpu, Beaker, Star,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { machines } from "@/data/machines";
import heroCssd from "@/assets/hero-cssd.jpg";
import heroAutomation from "@/assets/hero-automation.jpg";
import heroPharma from "@/assets/hero-pharma.jpg";
import factory from "@/assets/about-factory.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepindustries — Engineering Precision. Manufacturing Excellence." },
      {
        name: "description",
        content:
          "Manufacturer of hospital CSSD turnkey projects, sterilization equipment, pharmaceutical machinery, laboratory equipment and industrial automation systems. Based in Ahmedabad, India.",
      },
      { property: "og:title", content: "Deepindustries — Engineering Precision. Manufacturing Excellence." },
      { property: "og:description", content: "Hospital CSSD, sterilization, pharma machinery and industrial automation — engineered in India, delivered worldwide." },
      { property: "og:image", content: heroCssd },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const heroSlides = [
  {
    img: heroCssd,
    eyebrow: "Hospital CSSD Turnkey",
    title: "Engineering Precision.",
    subtitle: "Manufacturing Excellence.",
  },
  {
    img: heroAutomation,
    eyebrow: "Industrial Automation",
    title: "Built for plants",
    subtitle: "that never stop.",
  },
  {
    img: heroPharma,
    eyebrow: "Pharmaceutical Machinery",
    title: "GMP-grade systems,",
    subtitle: "validated end-to-end.",
  },
];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % heroSlides.length), 5500);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative h-screen min-h-[680px] flex items-center justify-center text-center px-6 overflow-hidden bg-foreground text-background">
      {heroSlides.map((s, idx) => (
        <img
          key={idx}
          src={s.img}
          alt={s.eyebrow}
          width={1920}
          height={1088}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-[2000ms] ease-out ${idx === i ? "opacity-90 scale-105" : "opacity-0 scale-100"}`}
          style={{ transition: "opacity 2s ease, transform 8s ease-out" }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/70" />

      <div className="relative z-10 max-w-5xl">
        <span key={`eb-${i}`} className="animate-fade-cross inline-block text-accent text-[11px] uppercase tracking-[0.4em] font-semibold mb-6">
          {heroSlides[i].eyebrow}
        </span>
        <h1 key={`t-${i}`} className="animate-fade-cross text-5xl md:text-7xl lg:text-[88px] font-extrabold tracking-tight leading-[0.95] mb-6">
          {heroSlides[i].title}<br />
          <span className="text-background/70">{heroSlides[i].subtitle}</span>
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-background/80 mb-10">
          Delivering world-class engineering solutions, hospital sterilization systems, pharmaceutical machinery, industrial automation and customized manufacturing.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/products" className="px-7 h-12 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            Explore Products <ArrowRight className="size-4" />
          </Link>
          <Link to="/contact" className="px-7 h-12 inline-flex items-center rounded-full bg-background text-foreground font-semibold text-sm hover:bg-background/90 transition-colors">
            Request Quote
          </Link>
        </div>

        {/* slide indicators */}
        <div className="mt-12 flex gap-2 justify-center">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1 rounded-full transition-all ${idx === i ? "w-10 bg-accent" : "w-5 bg-background/40"}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { v: "7+", l: "Years Experience" },
  { v: "300+", l: "Projects Delivered" },
  { v: "50+", l: "Products" },
  { v: "20+", l: "States Covered" },
  { v: "100+", l: "Happy Customers" },
  { v: "99%", l: "Customer Satisfaction" },
];

const why = [
  { i: Sparkles, t: "Engineering Excellence" },
  { i: Wrench, t: "Precision Manufacturing" },
  { i: Cpu, t: "Customized Solutions" },
  { i: ShieldCheck, t: "Certified Quality" },
  { i: Award, t: "Experienced Engineers" },
  { i: Factory, t: "Installation & Commissioning" },
  { i: Headphones, t: "AMC Support" },
  { i: Globe, t: "Worldwide Delivery" },
  { i: Star, t: "Affordable Pricing" },
  { i: Headphones, t: "24×7 Customer Support" },
];

const industries = [
  { i: Building2, t: "Hospitals" },
  { i: ShieldCheck, t: "Healthcare" },
  { i: FlaskConical, t: "Pharmaceutical" },
  { i: Microscope, t: "Research Laboratories" },
  { i: Building2, t: "Medical Colleges" },
  { i: UtensilsCrossed, t: "Food Industry" },
  { i: Factory, t: "Manufacturing" },
  { i: Cpu, t: "Industrial Automation" },
  { i: Beaker, t: "Chemical Industry" },
  { i: Building2, t: "Government Projects" },
];

const process = [
  { n: "01", t: "Design", d: "CAD modelling, process flow and validation strategy." },
  { n: "02", t: "Engineering", d: "Mechanical, electrical, controls and software design." },
  { n: "03", t: "Manufacturing", d: "SS 316L fabrication, machining and assembly in-house." },
  { n: "04", t: "Quality Inspection", d: "Dimensional, weld and surface inspection." },
  { n: "05", t: "Testing", d: "FAT, performance and validation cycles before dispatch." },
  { n: "06", t: "Packaging", d: "Export-grade crating and inland logistics." },
  { n: "07", t: "Installation", d: "Site commissioning, SAT and operator training." },
  { n: "08", t: "Customer Support", d: "AMC, spares and 24×7 remote diagnostics." },
];

const testimonials = [
  { n: "Dr. Ramesh Patel", r: "Director, Sterling Multi-Speciality Hospital", q: "Deepindustries delivered our 200-bed CSSD turnkey project on schedule. Validation cleared in a single pass and the team trained our nursing staff on-site." },
  { n: "Anita Sharma", r: "Plant Head, NovaPharma Labs", q: "Their pharma machinery is engineered to the spec sheet — IQ, OQ and PQ documentation was complete on commissioning day. Service response is within hours." },
  { n: "Vikram Singh", r: "MD, Krishna Diagnostics", q: "We have five autoclaves and three washer-disinfectors from Deepindustries running 24×7 for six years. Build quality and after-sales are best-in-class." },
];

function Index() {
  const showcase = machines.slice(0, 3);
  const grid = machines.slice(0, 9);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />

      {/* About */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-card">
              <img src={factory} alt="Deepindustries facility" loading="lazy" width={1200} height={1500} className="size-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">About Deepindustries</div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-6">
              Engineering excellence,<br />in service of mankind.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Deepindustries is a trusted manufacturer, supplier and exporter of precision-engineered hospital CSSD turnkey projects, autoclaves, sterilizers, pharmaceutical machinery, laboratory equipment and industrial automation systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Established in 2026 with a vision to serve mankind through engineering excellence, we deliver innovative, reliable and affordable solutions to hospitals, pharmaceutical industries, laboratories and manufacturing organizations across 20+ States Markets.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-accent font-semibold group">
              Read our story <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6 border-t border-border pt-14">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-accent">{s.v}</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-medium">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-28 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">Our Products</div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-xl leading-[1.05]">
                Built for hospitals, labs and factories that demand precision.
              </h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-accent font-semibold group shrink-0">
              View all products <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {grid.map((m, i) => (
              <Reveal key={m.slug} delay={(i % 3) * 100}>
                <Link to="/products/$slug" params={{ slug: m.slug }} className="group block bg-background rounded-3xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden bg-card">
                    <img src={m.image} alt={m.name} loading="lazy" width={1200} height={900} className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <div className="p-7">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">{m.category}</div>
                    <h3 className="text-xl font-bold tracking-tight mb-2">{m.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{m.tagline}</p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all">
                      Learn more <ArrowRight className="size-3.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase (Apple-style alternating) */}
      <section className="py-28 space-y-28 px-6">
        {showcase.map((m, i) => {
          const reversed = i % 2 === 1;
          return (
            <Reveal key={m.slug} as="section" className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div className={reversed ? "md:order-2" : ""}>
                <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-card">
                  <img src={m.image} alt={m.name} loading="lazy" width={1200} height={1500} className="size-full object-cover transition-transform duration-[1500ms] ease-out hover:scale-[1.04]" />
                </div>
              </div>
              <div className={reversed ? "md:order-1" : ""}>
                <div className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">{m.category}</div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-6">{m.name}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">{m.overview}</p>
                <div className="grid grid-cols-2 gap-6 border-t border-border pt-8 mb-8 max-w-md">
                  {m.specs.slice(0, 4).map((s) => (
                    <div key={s.label}>
                      <div className="text-xl font-extrabold tracking-tight">{s.value}</div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1 font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
                <Link to="/products/$slug" params={{ slug: m.slug }} className="inline-flex items-center gap-2 text-accent font-semibold group">
                  Explore specifications <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          );
        })}
      </section>

      {/* Why choose */}
      <section className="py-28 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <div className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">Why Choose Deepindustries</div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-[1.05]">
              Ten reasons clients choose us — and stay with us.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {why.map((w, idx) => (
              <Reveal key={w.t} delay={(idx % 5) * 80}>
                <div className="h-full p-6 rounded-2xl bg-background border border-border hover:border-accent hover:-translate-y-1 transition-all">
                  <div className="size-11 rounded-xl bg-accent/10 text-accent inline-flex items-center justify-center mb-4">
                    <w.i className="size-5" />
                  </div>
                  <div className="font-semibold text-sm leading-snug">{w.t}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">Industries</div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-xl leading-[1.05]">
                Trusted across sectors that demand reliability.
              </h2>
            </div>
            <Link to="/industries" className="inline-flex items-center gap-2 text-accent font-semibold group shrink-0">
              All industries <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((ind, idx) => (
              <Reveal key={ind.t} delay={(idx % 5) * 80}>
                <div className="p-6 rounded-2xl bg-card hover:bg-accent hover:text-accent-foreground transition-colors group cursor-default">
                  <ind.i className="size-7 mb-4 text-accent group-hover:text-accent-foreground" />
                  <div className="font-semibold text-sm">{ind.t}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="py-28 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16 max-w-2xl">
            <div className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">Manufacturing Process</div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
              From design to commissioning, every stage owned in-house.
            </h2>
          </Reveal>
          <div className="overflow-x-auto -mx-6 px-6 scroll-smooth">
            <div className="flex gap-5 min-w-max pb-4">
              {process.map((p, idx) => (
                <Reveal key={p.n} delay={(idx % 4) * 100}>
                  <div className="w-72 p-7 rounded-2xl bg-background/5 border border-background/10 backdrop-blur-sm hover:bg-background/10 transition-colors">
                    <div className="text-accent font-mono-tight text-xs mb-6">{p.n}</div>
                    <div className="text-xl font-bold mb-3">{p.t}</div>
                    <p className="text-sm text-background/70 leading-relaxed">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <div className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">Testimonials</div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-[1.05]">
              Trusted by hospitals, industries and laboratories across India.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <Reveal key={t.n} delay={idx * 100}>
                <div className="h-full p-8 rounded-3xl bg-background border border-border">
                  <div className="flex gap-0.5 mb-5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
                  </div>
                  <p className="text-foreground/85 leading-relaxed mb-6">&ldquo;{t.q}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-border">
                    <div className="size-11 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold">
                      {t.n.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.n}</div>
                      <div className="text-xs text-muted-foreground">{t.r}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients marquee */}
      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-10">
            Trusted by 100+ hospitals, pharma companies and industries
          </p>
        </div>
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...Array(2)].flatMap((_, i) =>
            ["APOLLO HOSPITALS", "FORTIS", "MAX HEALTHCARE", "CIPLA", "SUN PHARMA", "DR. REDDY'S", "AIIMS", "NARAYANA HEALTH", "TATA MEMORIAL", "MANIPAL", "GLENMARK", "BIOCON"].map((n) => (
              <span key={`${i}-${n}`} className="text-2xl md:text-3xl font-extrabold tracking-tight text-muted-foreground/60 shrink-0">{n}</span>
            ))
          )}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-6 bg-card relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-6">Our Philosophy</div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-10">
            Committed to improving healthcare through engineering excellence.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            &ldquo;The known basic purpose of any hospital is to improve the health and living conditions of their patients. At Deepindustries, we contribute to this mission by manufacturing world-class sterilization systems, CSSD solutions and precision-engineered medical equipment that ensure safety, reliability and operational excellence.&rdquo;
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <div className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">Certifications</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Engineered to international standards.</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { t: "ISO 9001:2015", s: "Quality Management" },
              { t: "ISO 13485", s: "Medical Devices" },
              { t: "CE Marked", s: "European Conformity" },
              { t: "WHO-GMP", s: "Pharma Manufacturing" },
              { t: "Export Certified", s: "20+ Countries" },
            ].map((c) => (
              <div key={c.t} className="p-6 rounded-2xl bg-card text-center border border-border">
                <ShieldCheck className="size-7 text-accent mx-auto mb-3" />
                <div className="font-bold text-sm">{c.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-accent text-accent-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Ready to build better engineering solutions?
          </h2>
          <p className="text-lg opacity-85 max-w-2xl mx-auto mb-10">
            Let&apos;s discuss your next project. Our engineers will respond within one business day.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="px-7 h-12 inline-flex items-center rounded-full bg-background text-foreground font-semibold text-sm hover:bg-background/90 transition-colors">
              Contact Us
            </Link>
            <Link to="/contact" className="px-7 h-12 inline-flex items-center rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity">
              Request Quote
            </Link>
            <button className="px-7 h-12 inline-flex items-center rounded-full border border-accent-foreground/40 text-accent-foreground font-semibold text-sm hover:bg-accent-foreground/10 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
