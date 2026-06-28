import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="pt-40 pb-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-10 leading-[0.95]">
              Let&apos;s engineer
              <br />
              the future.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 text-accent font-bold uppercase tracking-[0.2em] text-xs group"
            >
              Start a consultation
              <span className="w-12 h-px bg-accent transition-all group-hover:w-20" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-5">
              <div className="text-muted-foreground font-mono-tight text-[10px] uppercase tracking-[0.2em]">
                Contact
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                +1 800 555 0192
                <br />
                hq@deepindustries.tech
              </p>
            </div>
            <div className="space-y-5">
              <div className="text-muted-foreground font-mono-tight text-[10px] uppercase tracking-[0.2em]">
                Location
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                2048 Silicon Drive
                <br />
                Industrial District, TX
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-6">
          <div className="flex items-center gap-2">
            <span className="block size-3.5 bg-accent rounded-[2px]" />
            <span className="font-extrabold tracking-tighter text-sm uppercase">
              Deepindustries
            </span>
          </div>
          <div className="text-[10px] font-mono-tight text-muted-foreground uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Deepindustries Manufacturing Group. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}