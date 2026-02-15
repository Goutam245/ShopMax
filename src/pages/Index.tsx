import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Truck, Shield, Headphones, RotateCcw, Star, Laptop, Shirt, Home, Dumbbell, Sparkles, Gamepad2, ChevronLeft, ChevronRight } from "lucide-react";
import { products, categories, testimonials } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const categoryIcons: Record<string, React.ElementType> = { Laptop, Shirt, Home, Dumbbell, Sparkles, Gamepad2 };

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day return policy" },
  { icon: Shield, title: "Secure Payment", desc: "100% secure checkout" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated support team" },
];

const stats = [
  { value: "10K+", label: "Products" },
  { value: "50K+", label: "Happy Customers" },
  { value: "100K+", label: "Downloads" },
  { value: "4.9", label: "Average Rating" },
];

export default function HomePage() {
  const featuredProducts = products.filter(p => p.badge).slice(0, 8);
  const saleProducts = products.filter(p => p.badge === "sale").slice(0, 4);
  const newProducts = products.filter(p => p.badge === "new" || p.badge === "hot").slice(0, 4);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [countdown, setCountdown] = useState({ days: 2, hours: 18, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) return { days: 2, hours: 18, minutes: 45, seconds: 30 };
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block bg-primary-foreground/20 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                ✨ New Season Collection
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
                Discover Amazing Products at Unbeatable Prices
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
                Shop the latest trends in fashion, electronics, home & garden, and more. Free shipping on orders over $50!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold text-base px-8">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/products?filter=sale">
                  <Button size="lg" variant="outline" className="border-primary-foreground/40  hover:bg-primary-foreground/10 font-bold text-base px-8">
                    View Deals
                  </Button>
                </Link>
              </div>
            </motion.div>
            {/* <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                alt="Shopping"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div> */}
             <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
              alt="Shopping collection showcase"
              className="rounded-2xl shadow-card-hover w-full object-cover"
              loading="eager"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-card-hover border border-border"
            >
              <p className="text-sm font-bold text-foreground">🔥 900+ Products</p>
              <p className="text-xs text-muted-foreground">Best prices guaranteed</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl shadow-card font-bold text-sm"
            >
              Up to 50% OFF
            </motion.div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-muted hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
              >
                <f.icon className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12 relative">
            Shop by Category
            <span className="block w-16 h-1 bg-primary rounded-full mx-auto mt-3" />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat, i) => {
              const Icon = categoryIcons[cat.icon];
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={`/products?category=${cat.id}`}
                    className="flex flex-col items-center p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 text-center"
                  >
                    {Icon && <Icon className="h-12 w-12 text-primary mb-3" />}
                    <h3 className="font-bold text-foreground text-sm mb-1">{cat.name}</h3>
                    <p className="text-xs text-muted-foreground">{cat.count * 15}+ Products</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12 relative">
            Featured Products
            <span className="block w-16 h-1 bg-primary rounded-full mx-auto mt-3" />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products">
              <Button size="lg" className="font-bold px-8">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Deals Timer */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground mb-8">
            🔥 Hot Deals - Limited Time Offers
          </h2>
          <div className="flex justify-center gap-4 mb-12">
            {Object.entries(countdown).map(([label, value]) => (
              <div key={label} className="bg-primary-foreground/20 backdrop-blur rounded-xl p-4 min-w-[80px]">
                <span className="text-3xl font-extrabold text-primary-foreground">{String(value).padStart(2, "0")}</span>
                <p className="text-xs text-primary-foreground/70 capitalize mt-1">{label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {saleProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-extrabold text-primary mb-1">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12 relative">
            New Arrivals
            <span className="block w-16 h-1 bg-primary rounded-full mx-auto mt-3" />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12 relative">
            What Our Customers Say
            <span className="block w-16 h-1 bg-primary rounded-full mx-auto mt-3" />
          </h2>
          <div className="max-w-2xl mx-auto relative">
            <div className="bg-background rounded-2xl p-8 shadow-card text-center">
              <img
                src={testimonials[testimonialIdx].avatar}
                alt={testimonials[testimonialIdx].name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[testimonialIdx].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-4">"{testimonials[testimonialIdx].text}"</p>
              <p className="font-bold text-foreground">{testimonials[testimonialIdx].name}</p>
              <p className="text-xs text-muted-foreground">{testimonials[testimonialIdx].role}</p>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${i === testimonialIdx ? "bg-primary" : "bg-muted-foreground/30"}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h2 className="text-3xl font-extrabold text-primary-foreground mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-primary-foreground/80 mb-8">Get the latest deals and new arrivals directly in your inbox!</p>
          <form onSubmit={e => e.preventDefault()} className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/20 backdrop-blur text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
            />
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold px-6">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
