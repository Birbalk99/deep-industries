import { createFileRoute, Link } from "@tanstack/react-router";
import { Cog, Wrench, ShieldCheck, Truck, GraduationCap, Headphones, FileCheck2, Settings2 } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Engineering Services — Deepindustries" },
      { name: "description", content: "Design, manufacturing, installation, validation, AMC and 24×7 support — every service required to deliver and operate engineered equipment." },
      { property: "og:title", content: "Engineering Services — Deepindustries" },
      { property: "og:description", content: "Design, manufacturing, installation, validation, AMC and 24×7 support." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { i: Cog, t: "Custom Engineering & Design", d: "Process flow, CAD modelling and validation strategy tailored to your facility." },
  { i: Wrench, t: "Manufacturing & Fabrication", d: "In-house SS 316L fabrication, machining and assembly with full traceability." },
  { i: Settings2, t: "Installation & Commissioning", d: "Turnkey installation, SAT and integration with utilities and BMS." },
  { i: FileCheck2, t: "Validation (DQ/IQ/OQ/PQ)", d: "Complete protocols and documentation for regulated environments." },
  { i: ShieldCheck, t: "Calibration & Compliance", d: "NABL-traceable calibration and compliance audits for sterilizers and labs." },
  { i: GraduationCap, t: "Operator Training", d: "On-site and remote training for nursing, technical and QC staff." },
  { i: Headphones, t: "AMC & 24×7 Support", d: "Annual maintenance contracts with response SLAs across India." },
  { i: Truck, t: "Worldwide Logistics", d: "Export-grade crating and shipment to 20+ countries with installation partners." },
];

function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-6 block">Services</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[0.95]">
            Engineering support, end to end.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Every Deepindustries installation is backed by design, validation, training and lifetime service — the difference between owning equipment and operating it.
          </p>
        </div>
      </section>
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <Reveal key={s.t} delay={(idx % 4) * 100}>
              <div className="p-7 rounded-3xl bg-card h-full border border-transparent hover:border-accent transition-colors">
                <div className="size-12 rounded-2xl bg-accent/10 text-accent inline-flex items-center justify-center mb-5">
                  <s.i className="size-6" />
                </div>
                <h3 className="font-bold text-lg mb-2 tracking-tight">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="max-w-7xl mx-auto mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center px-7 h-12 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            Request engineering consultation
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}