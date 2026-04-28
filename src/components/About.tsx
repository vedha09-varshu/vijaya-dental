import { Award, GraduationCap, Heart } from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpg";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-icon-gradient rounded-[2.5rem] opacity-15 blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-elegant aspect-[4/5] max-w-md mx-auto">
            <img
              src={doctorImg}
              alt="Dr. B. Bindhu Madhuri, BDS FGD — Dental Surgeon"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div className="absolute -bottom-6 right-0 md:right-8 bg-card-gradient text-primary-foreground rounded-2xl px-6 py-4 shadow-elegant animate-float">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent fill-accent" />
              <div className="font-display font-bold">Gentle · Caring · Trusted</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-secondary font-semibold mb-3 tracking-wide uppercase text-sm">Meet Your Dentist</div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight">
            Dr. B. Bindhu Madhuri
          </h2>
          <div className="text-lg text-secondary font-semibold mb-6">BDS, FGD · Dental Surgeon</div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            With a gentle, patient-first approach, Dr. Bindhu leads Vijaya Dental Care with a single
            mission — making world-class dental treatment accessible, affordable, and absolutely
            pain-free for every family in Visakhapatnam.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: GraduationCap, label: "BDS, FGD Qualified" },
              { icon: Award, label: "Modern Equipment" },
              { icon: Heart, label: "Personalized Care" },
            ].map((item) => (
              <div key={item.label} className="bg-muted/50 rounded-2xl p-5 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-icon-gradient flex items-center justify-center shadow-glow">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-sm font-semibold text-primary leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
