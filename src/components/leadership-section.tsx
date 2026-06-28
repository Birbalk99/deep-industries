import { Mail, Linkedin, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export type LeadershipMember = {
  name: string;
  designation: string;
  photo: string;
  bio: string;
  highlights?: string[];
  linkedin?: string;
  email?: string;
};

type Props = {
  eyebrow?: string;
  title?: string;
  members: LeadershipMember[];
};

export function LeadershipSection({
  eyebrow = "Leadership",
  title = "Meet Our Director",
  members,
}: Props) {
  const isSingle = members.length === 1;

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* subtle gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_oklch(0.97_0.02_256)_0%,_transparent_60%)]"
      />
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16 max-w-3xl">
          <span className="text-accent text-[11px] uppercase tracking-[0.3em] font-semibold mb-5 block">
            {eyebrow}
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[0.95]">
            {title}
          </h2>
        </Reveal>

        <div
          className={cn(
            "grid gap-12",
            isSingle
              ? "md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16 items-center"
              : "sm:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 120}>
              <article
                className={cn(
                  "grid gap-10",
                  isSingle
                    ? "md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16 items-center"
                    : "grid-cols-1",
                )}
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/10 via-transparent to-transparent blur-2xl" aria-hidden />
                  <div className="relative overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-elegant)] aspect-[4/5]">
                    <img
                      src={m.photo}
                      alt={`${m.name}, ${m.designation}`}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="size-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    {m.name}
                  </h3>
                  <p className="mt-2 font-mono-tight text-[11px] uppercase tracking-[0.25em] text-accent">
                    {m.designation}
                  </p>
                  <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                    {m.bio}
                  </p>

                  {m.highlights && m.highlights.length > 0 && (
                    <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                      {m.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-3 text-sm text-foreground/90"
                        >
                          <CheckCircle2 className="size-4 mt-0.5 text-accent shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {(m.linkedin || m.email) && (
                    <div className="mt-8 flex items-center gap-3">
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${m.name} on LinkedIn`}
                          className="inline-flex items-center justify-center size-10 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <Linkedin className="size-4" />
                        </a>
                      )}
                      {m.email && (
                        <a
                          href={`mailto:${m.email}`}
                          aria-label={`Email ${m.name}`}
                          className="inline-flex items-center justify-center size-10 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <Mail className="size-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}