import { Phone, Mail, MapPin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-icon-gradient flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary-foreground">
                  <path d="M12 2C8 2 6 5 6 8c0 2 1 4 1 6s-1 5 1 7c1 1 2-1 2-3s1-3 2-3 2 1 2 3 1 4 2 3c2-2 1-5 1-7s1-4 1-6c0-3-2-6-6-6z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-extrabold text-lg">Vijaya Dental Care</div>
                <div className="text-[10px] tracking-[0.2em] text-accent font-semibold">YOUR SMILE, OUR PRIORITY</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Complete dental care under one roof in Visakhapatnam. Healthy teeth, beautiful smiles —
              for every family.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Home", "About", "Services", "Why Us", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "")}`} className="hover:text-accent transition-smooth">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex gap-2"><Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" /><a href="tel:9059198393" className="hover:text-accent">90591 98393</a></li>
              <li className="flex gap-2"><Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" /><a href="mailto:vdcmuralinagar@gmail.com" className="hover:text-accent break-all">vdcmuralinagar@gmail.com</a></li>
              <li className="flex gap-2"><MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" /><span>Muralinagar, Madhavadhara, Visakhapatnam — 530007</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Vijaya Dental Care. All rights reserved.</div>
          <div className="flex items-center gap-1.5">Made with <Heart className="w-3.5 h-3.5 fill-secondary text-secondary" /> for healthier smiles.</div>
        </div>
      </div>

      {/* Floating call button */}
      <a
        href="tel:9059198393"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-cta-gradient flex items-center justify-center shadow-cta animate-pulse-ring"
        aria-label="Call clinic"
      >
        <Phone className="w-6 h-6 text-secondary-foreground" />
      </a>
    </footer>
  );
};
