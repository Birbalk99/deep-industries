import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

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
                  Plot 24, GIDC Industrial Estate, Vatva
                  <br />
                  Ahmedabad, Gujarat 382445, India
                </p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">
                  Sales
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  +91 98765 43210
                  <br />
                  info@deepindustries.in
                </p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">
                  Service (24×7)
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  +91 98765 11177
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
              <Field label="Product Category" name="category" placeholder="e.g. Autoclave, CSSD, Pharma…" />
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

      <SiteFooter />
    </div>
  );
}