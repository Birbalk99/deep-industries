import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, Mail, MapPin, Clock, Search, X, MessageCircle } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/industries", label: "Industries" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="hidden lg:block bg-foreground text-background text-[11px]">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6 opacity-90">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="size-3" /> +91 98765 43210
            </a>
            <a href="mailto:info@deepindustries.in" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="size-3" /> info@deepindustries.in
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3" /> Ahmedabad, Gujarat, India
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3" /> Mon–Sat · 9:00–19:00 IST
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/contact" className="px-3 h-6 inline-flex items-center bg-accent text-accent-foreground rounded-full font-semibold uppercase tracking-[0.12em]">
              Request Quote
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="px-3 h-6 inline-flex items-center gap-1 bg-[#25D366] text-white rounded-full font-semibold"
            >
              <MessageCircle className="size-3" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <span className="block size-6 bg-accent rounded-md transition-transform group-hover:scale-110" />
            <span className="font-extrabold tracking-tight text-lg">
              Deep<span className="text-accent">industries</span>
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-accent" }}
                inactiveProps={{ className: "text-foreground/75 hover:text-foreground" }}
                className="text-[12px] font-medium tracking-tight transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              className="size-9 inline-flex items-center justify-center rounded-full hover:bg-card transition-colors"
            >
              <Search className="size-4" />
            </button>
            <Link
              to="/contact"
              className="px-4 h-9 inline-flex items-center text-[12px] font-semibold rounded-full border border-border hover:bg-card transition-colors"
            >
              Get Brochure
            </Link>
            <Link
              to="/contact"
              className="px-4 h-9 inline-flex items-center text-[12px] font-semibold rounded-full bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Request Quote
            </Link>
          </div>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden size-10 inline-flex items-center justify-center rounded-full hover:bg-card"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="xl:hidden border-t border-border bg-background">
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-accent" }}
                  className="py-2.5 text-[15px] font-medium border-b border-border last:border-0"
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex gap-2 mt-4">
                <Link to="/contact" onClick={() => setOpen(false)} className="flex-1 h-10 inline-flex items-center justify-center text-[12px] font-semibold rounded-full bg-accent text-accent-foreground">Request Quote</Link>
                <a href="https://wa.me/919876543210" className="h-10 px-4 inline-flex items-center gap-1 text-[12px] font-semibold rounded-full bg-[#25D366] text-white">
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}