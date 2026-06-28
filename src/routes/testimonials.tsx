import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Deepindustries" },
      { name: "description", content: "Hospitals, pharma companies and laboratories across India share their experience with Deepindustries equipment and service." },
      { property: "og:title", content: "Testimonials — Deepindustries" },
      { property: "og:description", content: "What our clients say about our equipment and service." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const testimonials = [
  { n: "Dr. Ramesh Patel", r: "Director, Sterling Multi-Speciality Hospital", q: "Deepindustries delivered our 200-bed CSSD turnkey project on schedule. Validation cleared in a single pass and the team trained our nursing staff on-site. Six years in, every sterilizer is still running like day one." },
  { n: "Anita Sharma", r: "Plant Head, NovaPharma Labs", q: "Their pharma machinery is engineered to the spec sheet — IQ, OQ and PQ documentation was complete on commissioning day. Service response is within hours, even at midnight." },
  { n: "Vikram Singh", r: "MD, Krishna Diagnostics", q: "We have five autoclaves and three washer-disinfectors from Deepindustries running 24×7 for six years. Build quality and after-sales are best-in-class for the price point." },
  { n: "Suresh Iyer", r: "Plant Engineer, Tier-1 Automotive", q: "Their automation team understood our line constraints in the first meeting. The robotic cell was integrated into our existing PLC with zero production downtime." },
  { n: "Dr. Meera Joshi", r: "Head of Pathology, Government Medical College", q: "Reliable, affordable laboratory equipment with NABL-traceable calibration. The AMC team is responsive and well-trained." },
  { n: "Hari Krishnan", r: "Project Director, Hospital Group", q: "We rolled out CSSDs in four cities with Deepindustries as a single vendor. Documentation, training and validation were uniform across every site." },
];

function Testimonials() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-6 block">Testimonials</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[0.95]">
            Trusted by hospitals, industries and laboratories across India.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Honest words from the people who run our equipment every day.
          </p>
        </div>
      </section>
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <Reveal key={t.n} delay={(idx % 3) * 100}>
              <article className="h-full p-8 rounded-3xl bg-card relative">
                <Quote className="absolute top-6 right-6 size-7 text-accent/20" />
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
              </article>
            </Reveal>
          ))}
        </div>
        <div className="max-w-7xl mx-auto mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center px-7 h-12 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            Become our next success story
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}