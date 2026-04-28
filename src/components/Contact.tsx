import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const phone = data.get("phone");
    const message = data.get("message") || "Appointment request";
    const text = encodeURIComponent(
      `Hi, I'd like to book an appointment.\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`
    );
    setTimeout(() => {
      // Use wa.me which works on both mobile and desktop without redirecting to api.whatsapp.com
      const waUrl = `https://wa.me/919059198393?text=${text}`;
      const win = window.open(waUrl, "_blank", "noopener,noreferrer");
      if (!win) {
        // Fallback: copy to clipboard + tel link
        toast.error("Could not open WhatsApp. Please call 90591 98393 directly.");
      } else {
        toast.success("Opening WhatsApp to confirm your appointment...");
      }
      form.reset();
      setSubmitting(false);
    }, 400);
  };

  return (
    <section id="contact" className="section-padding bg-soft-gradient">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-secondary font-semibold mb-3 tracking-wide uppercase text-sm">Get In Touch</div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight">
            Book Your Appointment Today
          </h2>
          <p className="text-muted-foreground">
            Call, message, or visit us — we're here all week to care for your smile.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info card */}
          <div className="bg-card-gradient text-primary-foreground rounded-3xl p-8 md:p-10 shadow-elegant relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <h3 className="font-display text-2xl font-bold mb-8 relative">Visit Vijaya Dental Care</h3>

            <div className="space-y-6 relative">
              <ContactItem icon={MapPin} title="Our Address">
                Door No: 39-3-13/1, Indra Nilayam,<br />
                Burma Colony, Opp. Masjid,<br />
                Muralinagar, Madhavadhara,<br />
                Visakhapatnam — 530007
              </ContactItem>
              <ContactItem icon={Phone} title="Call Us">
                <a href="tel:9059198393" className="hover:text-accent transition-smooth">90591 98393</a>
              </ContactItem>
              <ContactItem icon={Mail} title="Email Us">
                <a href="mailto:vdcmuralinagar@gmail.com" className="hover:text-accent transition-smooth break-all">
                  vdcmuralinagar@gmail.com
                </a>
              </ContactItem>
              <ContactItem icon={Clock} title="Clinic Timings">
                10:00 AM — 9:00 PM<br />
                <span className="text-accent font-semibold">Open All Days</span>
              </ContactItem>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background rounded-3xl p-8 md:p-10 shadow-soft border border-border/50">
            <h3 className="font-display text-2xl font-bold text-primary mb-2">Request a Callback</h3>
            <p className="text-sm text-muted-foreground mb-6">Fill in your details — we'll confirm via WhatsApp.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-primary mb-1.5 block">Full Name</label>
                <Input name="name" required placeholder="Your name" className="h-12 rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-medium text-primary mb-1.5 block">Phone Number</label>
                <Input name="phone" required type="tel" placeholder="10-digit mobile" className="h-12 rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-medium text-primary mb-1.5 block">Message (optional)</label>
                <Textarea name="message" placeholder="Preferred date/time or concern..." className="rounded-xl min-h-[100px]" />
              </div>
              <Button type="submit" variant="cta" size="lg" disabled={submitting} className="w-full">
                <Send className="w-4 h-4 mr-2" />
                {submitting ? "Sending..." : "Book via WhatsApp"}
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 rounded-3xl overflow-hidden shadow-elegant border border-border/50 aspect-[16/7]">
          <iframe
  title="Vijaya Dental Care Location"
  src="https://maps.google.com/maps?q=Door No 39-3-13/1, Indra Nilayam, Burma Colony, Opp Masjid, Muralinagar, Madhavadhara, Visakhapatnam, Andhra Pradesh 530007, India&output=embed"
  className="w-full h-full border-0"
  loading="lazy"
/>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
  <div className="flex gap-4">
    <div className="shrink-0 w-12 h-12 rounded-xl bg-cta-gradient flex items-center justify-center shadow-cta">
      <Icon className="w-5 h-5 text-secondary-foreground" />
    </div>
    <div>
      <div className="font-display font-bold mb-1">{title}</div>
      <div className="text-sm text-primary-foreground/80 leading-relaxed">{children}</div>
    </div>
  </div>
);
