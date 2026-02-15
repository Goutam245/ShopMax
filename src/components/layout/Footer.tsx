import { Link } from "react-router-dom";
import { ShoppingBag, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Images } from "public/logo.png"

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
];

const serviceLinks = [
  { to: "/account", label: "My Account" },
  { to: "/cart", label: "Shopping Cart" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-primary font-extrabold text-2xl mb-4">
              {/*  */}
              <img src="public/logo.png" alt="ShopMax Logo" className="h-8 w-8" />
              <span>ShopMax</span>
            </Link>
            <p className="text-sm text-secondary-foreground/70 mb-6 leading-relaxed">
              Your one-stop destination for all your shopping needs. Quality products, unbeatable prices, and excellent service.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {serviceLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {[
                { icon: MapPin, text: "123 Commerce Street, Kigali, RW" },
                { icon: Phone, text: "+250 791 320 785" },
                { icon: Mail, text: "info@shopmax.com" },
                { icon: Clock, text: "Mon-Sat: 8AM - 10PM" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-secondary-foreground/70">
                  <item.icon className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/50">
            © 2025 ShopMax. All rights reserved. | <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link> | <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
          </p>
          <div className="flex items-center gap-3 text-secondary-foreground/40 text-xs">
            <span>Visa</span>
            <span>•</span>
            <span>Mastercard</span>
            <span>•</span>
            <span>PayPal</span>
            <span>•</span>
            <span>Stripe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
