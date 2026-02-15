import { User, Package, Heart, Settings, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

export default function AccountPage() {
  const { state } = useCart();
  const wishlistProducts = products.filter(p => state.wishlist.includes(p.id));

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-hero-gradient py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-extrabold text-primary-foreground">My Account</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Login Prompt */}
        <div className="bg-card rounded-xl p-8 shadow-card text-center max-w-md mx-auto mb-12">
          <User className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-foreground mb-2">Welcome to ShopMax</h2>
          <p className="text-muted-foreground mb-6">Sign in to access your orders, wishlist, and account settings.</p>
          <div className="space-y-3">
            <Button className="w-full font-bold" disabled><LogIn className="h-4 w-4 mr-2" /> Sign In (Coming Soon)</Button>
            <p className="text-xs text-muted-foreground">Don't have an account? <span className="text-primary">Sign Up</span></p>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Package, title: "Orders", value: "0", desc: "Track your orders" },
            { icon: Heart, title: "Wishlist", value: String(state.wishlist.length), desc: "Saved items" },
            { icon: Settings, title: "Settings", value: "—", desc: "Account preferences" },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-6 shadow-card text-center">
              <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-2xl font-extrabold text-foreground">{item.value}</p>
              <p className="font-bold text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Wishlist */}
        {wishlistProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Your Wishlist</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {wishlistProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
