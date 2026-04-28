import { Phone, Sparkles, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-smile.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-soft-gradient">
      {/* Decorative animated blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-blob" />
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-secondary/25 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-primary-glow/20 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />

      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6 hover:bg-secondary/20 transition-smooth">
            <Sparkles className="w-4 h-4 animate-sparkle" />
            Caring for Smiles, Changing Lives
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.05] mb-6">
            Your Smile,
            <br />
            <span className="bg-gradient-to-r from-secondary via-accent to-primary-glow bg-clip-text text-transparent animate-gradient">
              Our Priority.
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Complete dental care under one roof in Visakhapatnam. From routine checkups to advanced
            implants — experience pain-free, hygienic treatment with Dr. B. Bindhu Madhuri.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button variant="cta" size="xl" asChild>
              <a href="#contact">Book Appointment</a>
            </Button>
            <Button variant="outline-primary" size="xl" asChild>
              <a href="tel:9059198393" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                90591 98393
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 text-foreground/80">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <span className="font-medium">Pain-free Treatment</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <Clock className="w-5 h-5 text-secondary" />
              <span className="font-medium">Open All Days · 10AM–9PM</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-square max-w-[560px] mx-auto">
            <div className="absolute inset-0 bg-icon-gradient rounded-[3rem] rotate-6 opacity-20" />
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-elegant">
              <img
                src={heroImg}
                alt="Happy patient with healthy white teeth at Vijaya Dental Care"
                className="w-full h-full object-cover"
                width={1024}
                height={1024}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-elegant flex items-center gap-3 animate-float">
              <div className="w-12 h-12 rounded-full bg-cta-gradient flex items-center justify-center shadow-cta">
                <Sparkles className="w-6 h-6 text-secondary-foreground animate-sparkle" />
              </div>
              <div>
                <div className="font-display font-bold text-primary">Healthy Teeth</div>
                <div className="text-xs text-secondary font-semibold">Beautiful Smile +</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-card-gradient rounded-2xl p-4 shadow-elegant text-primary-foreground max-w-[180px] animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-xs opacity-90 mb-1">Complete Dental Care</div>
              <div className="font-display font-bold text-sm">Under One Roof</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
