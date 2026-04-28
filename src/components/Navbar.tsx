import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-icon-gradient flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary-foreground">
              <path d="M12 2C8 2 6 5 6 8c0 2 1 4 1 6s-1 5 1 7c1 1 2-1 2-3s1-3 2-3 2 1 2 3 1 4 2 3c2-2 1-5 1-7s1-4 1-6c0-3-2-6-6-6z" fill="currentColor"/>
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-lg text-primary">Vijaya</div>
            <div className="text-[10px] tracking-[0.2em] text-secondary font-semibold -mt-0.5">DENTAL CARE</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:9059198393" className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" /> 90591 98393
          </a>
          <Button variant="cta" size="lg" asChild>
            <a href="#contact">Book Appointment</a>
          </Button>
        </div>

        <button className="md:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-foreground/80">
                {l.label}
              </a>
            ))}
            <Button variant="cta" asChild className="w-full">
              <a href="tel:9059198393">Call 90591 98393</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
