import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="block size-5 bg-accent rounded-[3px] transition-transform group-hover:scale-110" />
          <span className="font-extrabold tracking-tighter text-lg uppercase">
            Deepindustries
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              inactiveProps={{ className: "text-foreground/80 hover:text-foreground" }}
              className="text-[11px] font-medium uppercase tracking-[0.18em] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}