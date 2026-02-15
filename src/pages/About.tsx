import { motion } from "framer-motion";
import { ShoppingBag, Users, Award, Globe } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: ShoppingBag, title: "Quality Products", desc: "We curate only the best products from trusted brands and manufacturers worldwide." },
    { icon: Users, title: "Customer First", desc: "Your satisfaction is our top priority. We're here to help you find exactly what you need." },
    { icon: Award, title: "Best Prices", desc: "We negotiate the best deals so you can enjoy premium products at competitive prices." },
    { icon: Globe, title: "Global Reach", desc: "We ship worldwide and serve customers in over 50 countries with reliable delivery." },
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            About ShopMax
          </motion.h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Your one-stop destination for all your shopping needs. Quality products, unbeatable prices, and excellent service since 2020.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-extrabold text-foreground mb-4">Our Story</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              ShopMax was founded with a simple mission: to make quality products accessible to everyone. What started as a small online store has grown into a trusted marketplace serving thousands of customers worldwide.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We believe that shopping should be an enjoyable experience. That's why we carefully curate our product selection, offer competitive prices, and provide exceptional customer service at every step of your journey.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" alt="Our team" className="rounded-2xl shadow-lg" />
        </div>

        {/* Values */}
        <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">
          Our Values
          <span className="block w-16 h-1 bg-primary rounded-full mx-auto mt-3" />
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card text-center hover:-translate-y-1 transition-transform"
            >
              <v.icon className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-hero-gradient rounded-2xl p-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50K+", label: "Happy Customers" },
              { value: "10K+", label: "Products" },
              { value: "50+", label: "Countries" },
              { value: "24/7", label: "Support" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-extrabold text-primary-foreground">{s.value}</p>
                <p className="text-sm text-primary-foreground/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
