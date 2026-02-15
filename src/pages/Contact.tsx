import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/80">We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-card rounded-xl p-8 shadow-card">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
                  <input required className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                  <input type="email" required className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Subject</label>
                <input required className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="How can we help?" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                <textarea required rows={5} className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Your message..." />
              </div>
              <Button type="submit" className="w-full font-bold">Send Message</Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
            <p className="text-muted-foreground">Have questions? We're here to help. Reach out through any of the channels below.</p>
            {[
              { icon: MapPin, title: "Address", info: "123 Commerce Street, Kigali, Rwanda" },
              { icon: Phone, title: "Phone", info: "+250 791 320 785" },
              { icon: Mail, title: "Email", info: "info@shopmax.com" },
              { icon: Clock, title: "Business Hours", info: "Mon-Sat: 8AM - 10PM" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
