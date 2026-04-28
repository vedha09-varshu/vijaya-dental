import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "/blog" }
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "services", "why", "contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(`#${id}`);
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Helper for styling
  const linkClass = (href: string) => {
    const isActive =
      href.startsWith("/")
        ? location.pathname === href
        : active === href;

    return `
      relative text-base md:text-lg lg:text-xl font-semibold transition-all duration-300
      ${isActive ? "text-primary" : "text-foreground/80 hover:text-primary"}
      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
      after:w-0 after:bg-primary after:transition-all after:duration-300
      hover:after:w-full
      ${isActive ? "after:w-full" : ""}
    `;
  };

  const renderLink = (l: { label: string; href: string }, onClick?: () => void) => {
    if (l.href.startsWith("/")) {
      return (
        <Link key={l.href} to={l.href} onClick={onClick} className={linkClass(l.href)}>
          {l.label}
        </Link>
      );
    }

    return (
      <a key={l.href} href={l.href} onClick={onClick} className={linkClass(l.href)}>
        {l.label}
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-icon-gradient flex items-center justify-center shadow-glow group-hover:scale-110 transition">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary-foreground">
              <path
                d="M12 2C8 2 6 5 6 8c0 2 1 4 1 6s-1 5 1 7c1 1 2-1 2-3s1-3 2-3 2 1 2 3 1 4 2 3c2-2 1-5 1-7s1-4 1-6c0-3-2-6-6-6z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="leading-tight">
            <div className="font-display font-extrabold text-xl md:text-2xl text-primary">
              Vijaya
            </div>
            <div className="text-sm md:text-base tracking-wider text-secondary font-semibold -mt-0.5">
              DENTAL CARE
            </div>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => renderLink(l))}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:9059198393"
            className="flex items-center gap-2 text-base font-semibold text-primary"
          >
            <Phone className="w-5 h-5" />
            90591 98393
          </a>

          <Button variant="cta" size="lg" asChild>
            <a href="#contact">Book Appointment</a>
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-background border-t border-border shadow-md">
          <div className="container mx-auto py-6 flex flex-col gap-5 px-4">
            {navLinks.map((l) =>
              renderLink(l, () => setOpen(false))
            )}

            <Button variant="cta" asChild className="w-full mt-2">
              <a href="tel:9059198393">Call 90591 98393</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
