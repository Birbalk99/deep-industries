import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import cssd from "@/assets/hero-cssd.jpg";
import auto from "@/assets/hero-automation.jpg";
import pharma from "@/assets/hero-pharma.jpg";
import factory from "@/assets/about-factory.jpg";
import autoV from "@/assets/product-autoclave-vertical.jpg";
import autoH from "@/assets/product-autoclave-horizontal.jpg";
import eto from "@/assets/product-eto.jpg";
import washer from "@/assets/product-washer.jpg";
import ultrasonic from "@/assets/product-ultrasonic.jpg";
import biowaste from "@/assets/product-biowaste.jpg";
import lab from "@/assets/product-lab.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Deepindustries" },
      { name: "description", content: "Photographs of the Deepindustries factory, equipment, installations and projects from across India and abroad." },
      { property: "og:title", content: "Gallery — Deepindustries" },
      { property: "og:description", content: "Factory, equipment, installations and projects in pictures." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const images = [
  { src: factory, alt: "Manufacturing facility", span: "md:col-span-2 md:row-span-2" },
  { src: cssd, alt: "Hospital CSSD installation" },
  { src: autoH, alt: "Horizontal autoclave" },
  { src: pharma, alt: "Pharmaceutical machinery" },
  { src: auto, alt: "Industrial automation cell" },
  { src: autoV, alt: "Vertical autoclave" },
  { src: eto, alt: "ETO sterilizer" },
  { src: washer, alt: "Washer disinfector" },
  { src: lab, alt: "Laboratory instrument" },
  { src: ultrasonic, alt: "Ultrasonic cleaner" },
  { src: biowaste, alt: "Bio-waste machine" },
];

function Gallery() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-6 block">Gallery</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[0.95]">
            Inside the factory.<br />Around the world.
          </h1>
        </div>
      </section>
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-3">
          {images.map((img, idx) => (
            <Reveal key={idx} delay={(idx % 4) * 80} className={`group overflow-hidden rounded-2xl bg-card ${img.span ?? ""}`}>
              <img src={img.src} alt={img.alt} loading="lazy" className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
            </Reveal>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}