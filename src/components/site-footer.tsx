import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle, Linkedin, Facebook, Instagram } from "lucide-react";
const startYear = 2024;
const currentYear = new Date().getFullYear();
export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="block size-6 bg-accent rounded-md" />
              <span className="font-extrabold tracking-tight text-lg">
                Deep<span className="text-accent">industries</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Manufacturer of hospital CSSD turnkey projects, sterilization equipment, pharmaceutical machinery, laboratory equipment and industrial automation systems — engineered in Ahmedabad, delivered whole <span className="text-accent">India</span> since 2024.
            </p>
            <div className="flex gap-2 mt-6">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="size-9 inline-flex items-center justify-center rounded-full border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="font-semibold mb-4 text-sm">Company</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[
                ["About", "/about"],
                ["Projects", "/projects"],
                ["Gallery", "/gallery"],
                ["Testimonials", "/testimonials"],
                ["Contact", "/contact"],
              ].map(([l, h]) => (
                <li key={l}><Link to={h} className="hover:text-accent transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="font-semibold mb-4 text-sm">Products</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[
                ["CSSD Turnkey", "/products/cssd-turnkey"],
                ["Autoclaves", "/products/autoclave-horizontal"],
                ["ETO Sterilizers", "/products/eto-sterilizer"],
                ["Pharma Machinery", "/products/pharma-machinery"],
                ["Automation", "/products/industrial-automation"],
              ].map(([l, h]) => (
                <li key={l}><Link to={h} className="hover:text-accent transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="font-semibold mb-4 text-sm">Get in touch</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3"><MapPin className="size-4 mt-0.5 shrink-0 text-accent" /> Shivam arcade 2, hanspura, Nava Naroda, Ahmedabad 382330, India</li>
              <li className="flex items-center gap-3"><Phone className="size-4 shrink-0 text-accent" /> +91 9664867782</li>
              <li className="flex items-center gap-3"><Mail className="size-4 shrink-0 text-accent" /> info@deepindustries.in</li>
              <li className="flex items-center gap-3"><Clock className="size-4 shrink-0 text-accent" /> Mon–Sat · 9:00–19:00 IST</li>
              <li className="flex items-center gap-3"><MessageCircle className="size-4 shrink-0 text-accent" /> <a href="https://wa.me/919664867782" className="hover:text-accent">WhatsApp chat</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div>
            &copy; {startYear}
            {currentYear > startYear ? ` - ${currentYear}` : ""} Deepindustries. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-accent">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}