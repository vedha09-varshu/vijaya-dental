import { Stethoscope, Sparkles, Wrench, Activity, Scissors, Smile, Baby, ShieldCheck, Bone, Brackets } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Dental Checkups", desc: "Comprehensive oral health assessments and routine consultations." },
  { icon: Sparkles, title: "Teeth Cleaning & Polishing", desc: "Professional scaling and polishing for a fresh, bright smile." },
  { icon: Wrench, title: "Tooth Fillings", desc: "Tooth-coloured fillings to restore decayed or damaged teeth." },
  { icon: Activity, title: "Root Canal Treatment", desc: "Advanced, painless RCT to save your natural tooth." },
  { icon: Scissors, title: "Tooth Extraction", desc: "Safe, gentle extractions including wisdom tooth removal." },
  { icon: Bone, title: "Dental Implants", desc: "Permanent tooth replacement that looks and feels natural." },
  { icon: Brackets, title: "Braces & Aligners", desc: "Metal, ceramic and clear aligners for perfectly aligned teeth." },
  { icon: Smile, title: "Teeth Whitening", desc: "Cosmetic whitening for a confident, radiant smile." },
  { icon: Baby, title: "Pediatric Dental Care", desc: "Friendly, gentle dental care designed for children." },
  { icon: ShieldCheck, title: "Pain-free & Hygienic", desc: "Sterilized equipment and modern, pain-free techniques." },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-soft-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-secondary font-semibold mb-3 tracking-wide uppercase text-sm">Our Services</div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight">
            Complete Dental Care
            <br />
            <span className="bg-gradient-to-r from-secondary to-primary-glow bg-clip-text text-transparent">Under One Roof</span>
          </h2>
          <p className="text-muted-foreground">
            From everyday checkups to advanced cosmetic and surgical treatments — everything your family
            needs for a lifetime of healthy smiles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group bg-background rounded-3xl p-6 shadow-soft hover:shadow-elegant transition-smooth hover:-translate-y-2 hover:rotate-1 border border-border/50 animate-fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-icon-gradient flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 group-hover:-rotate-6 transition-smooth">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-primary mb-2 leading-snug group-hover:text-secondary transition-smooth">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
