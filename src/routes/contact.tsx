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

      <section className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-20">
          <div>
            <span className="font-mono-tight text-accent text-[10px] uppercase tracking-[0.4em] mb-6 block">
              Contact
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[0.95] mb-10">
              Talk to an engineer.
            </h1>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed mb-16">
              We respond to qualified inquiries within two business days. For active deployments, contact your account engineer directly.
            </p>

            <div className="space-y-10">
              <div>
                <div className="font-mono-tight text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Headquarters
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  2048 Silicon Drive
                  <br />
                  Industrial District, Austin TX 78701
                </p>
              </div>
              <div>
                <div className="font-mono-tight text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Direct
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  +1 800 555 0192
                  <br />
                  hq@deepindustries.tech
                </p>
              </div>
              <div>
                <div className="font-mono-tight text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Service
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  +1 800 555 0177 (24/7)
                  <br />
                  service@deepindustries.tech
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-10">
            <div className="grid sm:grid-cols-2 gap-8">
              <Field label="Name" name="name" required autoComplete="name" />
              <Field label="Company" name="company" required autoComplete="organization" />
            </div>
            <Field label="Email" name="email" type="email" required autoComplete="email" />
            <Field label="Project" name="project" placeholder="Brief project scope or machine of interest" />
            <label className="block">
              <span className="font-mono-tight text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Message
              </span>
              <textarea
                name="message"
                rows={6}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors resize-none"
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="px-8 py-3 bg-foreground text-background font-bold text-[11px] uppercase tracking-[0.2em] rounded-full hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}