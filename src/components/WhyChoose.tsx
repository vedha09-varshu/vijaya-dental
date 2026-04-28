import { Award, HeartHandshake, Microscope, Wallet } from "lucide-react";
import clinicImg from "@/assets/clinic-interior.jpg";

const points = [
  { icon: Award, title: "Expert Dentist", desc: "Skilled, qualified care you can trust." },
  { icon: Microscope, title: "Modern Equipment", desc: "State-of-the-art tools for precise treatment." },
  { icon: HeartHandshake, title: "Hygienic Environment", desc: "Sterilized, safe and comfortable clinic." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent, family-friendly treatment costs." },
];

export const WhyChoose = () => {
  return (
    <section
      id="why"
      className="section-padding bg-card-gradient text-primary-foreground relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-blob" />
        <div
          className="absolute bottom-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto relative grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <div className="text-accent font-semibold mb-3 tracking-wide uppercase text-sm">
            Why Choose Us
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            A Clinic Built Around <br />
            <span className="text-accent">Your Comfort.</span>
          </h2>

          <p className="text-primary-foreground/80 mb-10 leading-relaxed">
            We combine experienced care, modern technology, and a warm patient experience —
            so every visit feels easy, safe and reassuring.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4 group">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-cta-gradient flex items-center justify-center shadow-cta group-hover:scale-110 transition-smooth">
                  <p.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-display font-bold mb-1">{p.title}</div>
                  <div className="text-sm text-primary-foreground/70">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="rounded-[2rem] overflow-hidden shadow-elegant aspect-[4/3]">
            <img
              src={clinicImg}
              alt="Modern, hygienic dental clinic interior at Vijaya Dental Care"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-background text-primary rounded-2xl px-6 py-5 shadow-elegant flex items-center gap-4 animate-float">
            <div className="text-4xl font-display font-extrabold text-secondary animate-bounce-soft">
              5★
            </div>
            <div className="text-sm">
              <div className="font-bold">Trusted by Families</div>
              <div className="text-muted-foreground">Across Visakhapatnam</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};