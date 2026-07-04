import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import pharma from "@/assets/hero-pharma.jpg";
import automation from "@/assets/hero-automation.jpg";
import lab from "@/assets/product-lab.jpg";
import autoclaveH from "@/assets/product-autoclave-horizontal.jpg";
import eto from "@/assets/product-eto.jpg";

type MachineCatalogGroup = {
  title: string;
  image: string;
  sections: {
    title: string;
    models: string[];
  }[];
};

const machineCatalog: MachineCatalogGroup[] = [
  {
    title: "Filling Machine",
    image: pharma,
    sections: [
      {
        title: "Servo Base Filling",
        models: [
          "Single Head Semi Automatic Filling",
          "Two Head Semi Automatic Filling",
          "Two Head Automatic Filling",
          "Four Head Automatic Filling",
          "Six Head Automatic Filling",
          "Eight Head Automatic Filling",
          "Ten Head Automatic Filling",
        ],
      },
      {
        title: "Volumetric Filling",
        models: [
          "Two Head Semi Automatic Filling",
          "Two Head Automatic Filling",
          "Four Head Automatic Filling",
          "Six Head Automatic Filling",
        ],
      },
      {
        title: "Load Cell Base Filling",
        models: [
          "Single Head Semi Automatic Filling",
          "Double Head Semi Automatic Filling",
          "Double Head Automatic Filling",
          "Four Head Automatic Filling",
          "Six Head Automatic Filling",
        ],
      },
      {
        title: "Flowmeter Base Filling",
        models: [
          "Single Head Semi Automatic Filling",
          "Double Head Semi Automatic Filling",
          "Four Head Automatic Filling",
          "Six Head Automatic Filling",
        ],
      },
      {
        title: "Gravity Filling",
        models: [
          "Single Head Semi Automatic Filling",
          "Double Head Semi Automatic Filling",
          "Double Head Automatic Filling",
          "Four Head Automatic Filling",
          "Six Head Automatic Filling",
        ],
      },
    ],
  },
  {
    title: "Capping Machine",
    image: autoclaveH,
    sections: [
      {
        title: "Screw Capping",
        models: [
          "Single Head Semi Automatic Capping",
          "Single Head Automatic Screw Capping",
          "Four Head Automatic Rotary Capping",
          "Six Head Automatic Rotary Capping",
          "Eight Head Automatic Rotary Capping",
          "Ten Head Automatic Rotary Capping",
        ],
      },
      {
        title: "ROPP Capping",
        models: [
          "Single Head Semi Automatic Capping",
          "Single Head Automatic Capping",
          "Four Head Automatic Rotary Capping",
          "Six Head Automatic Rotary Capping",
          "Eight Head Automatic Rotary Capping",
          "Ten Head Automatic Rotary Capping",
        ],
      },
      {
        title: "Lead Pressing",
        models: [
          "Single Head Automatic Capping",
          "Four Head Automatic Rotary Capping",
          "Six Head Automatic Rotary Capping",
          "Eight Head Automatic Rotary Capping",
          "Ten Head Automatic Rotary Capping",
        ],
      },
    ],
  },
  {
    title: "Sticker Labelling Machine",
    image: lab,
    sections: [
      {
        title: "Labelling Types",
        models: [
          "Round Bottle Sticker Labelling",
          "Single Side Square Bottle Labelling",
          "Double Side Square Bottle Labelling",
          "Round Bottle Pneumatic Labelling",
        ],
      },
    ],
  },
  {
    title: "Shrink Tunnel",
    image: eto,
    sections: [
      {
        title: "Automation Options",
        models: ["Semi Automatic", "Fully Automatic"],
      },
    ],
  },
  {
    title: "Turn Table",
    image: automation,
    sections: [
      {
        title: "Configuration",
        models: ["Standard Industrial Turn Table"],
      },
    ],
  },
];

const productCategoryOptions = machineCatalog.flatMap((group) =>
  group.sections.flatMap((section) =>
    section.models.map((model) => ({
      groupLabel: `${group.title} - ${section.title}`,
      value: `${group.title} / ${section.title} / ${model}`,
      label: model,
    })),
  ),
);

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Deepindustries" },
      {
        name: "description",
        content:
          "Talk to a Deepindustries engineer about your next automation system. We typically respond within two business days.",
      },
      { property: "og:title", content: "Contact Us — Deepindustries" },
      {
        property: "og:description",
        content: "Talk to a Deepindustries engineer about your automation project.",
      },
    ],
  }),
  component: Contact,
});

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="font-mono-tight text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <input
        {...props}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors"
      />
    </label>
  );
}

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message received. An engineer will be in touch.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="pt-44 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-20">
          <div>
            <span className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-6 block">
              Contact
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[0.95] mb-10">
              Let&apos;s build it together.
            </h1>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed mb-16">
              Talk to our engineering team about your project — CSSD turnkey, sterilization, pharma machinery, lab equipment or factory automation. We respond within one business day.
            </p>

            <div className="space-y-10">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">
                  Headquarters
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Shivam arcade 2, hanspura, Nava Naroda
                  <br />
                  Ahmedabad 382330, India
                </p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">
                  Sales
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  +91 9664867782
                  <br />
                  info@deepindustries.in
                </p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">
                  Service (24×7)
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  +91 9664867782
                  <br />
                  service@deepindustries.in
                </p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">
                  Business Hours
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Monday – Saturday<br />09:00 – 19:00 IST
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-10">
            <div className="grid sm:grid-cols-2 gap-8">
              <Field label="Full Name" name="name" required autoComplete="name" />
              <Field label="Company" name="company" required autoComplete="organization" />
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <Field label="Email" name="email" type="email" required autoComplete="email" />
              <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <Field label="Country" name="country" autoComplete="country-name" />
              <label className="block">
                <span className="font-mono-tight text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Product Category
                </span>
                <select
                  name="category"
                  defaultValue=""
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-base text-foreground transition-colors"
                >
                  <option value="" disabled>
                    Select machine model
                  </option>
                  {productCategoryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.groupLabel} - {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="block">
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Message
              </span>
              <textarea
                name="message"
                rows={6}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors resize-none"
                placeholder="Tell us about your project, capacity, timelines…"
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="px-8 h-12 inline-flex items-center rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <span className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-5 block">
            Machine Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] max-w-4xl mb-12">
            Filling, capping, labelling and packaging systems configured to your line.
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {machineCatalog.map((group) => (
              <article key={group.title} className="rounded-2xl border border-border overflow-hidden bg-card">
                <div className="aspect-video overflow-hidden">
                  <img src={group.image} alt={group.title} className="size-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold tracking-tight mb-4">{group.title}</h3>
                  <div className="space-y-4 max-h-80 overflow-auto pr-1">
                    {group.sections.map((section) => (
                      <div key={`${group.title}-${section.title}`}>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-2">
                          {section.title}
                        </p>
                        <ul className="space-y-1.5 text-sm text-foreground/85 leading-relaxed">
                          {section.models.map((model) => (
                            <li key={`${section.title}-${model}`} className="flex items-start gap-2">
                              <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                              <span>{model}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}