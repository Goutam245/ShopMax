import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Star, Heart, ShoppingCart, ArrowLeft, Check, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-xl font-bold text-foreground mb-4">Product not found</p>
          <Link to="/products"><Button>Back to Products</Button></Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

  const handleAddToCart = () => {
    addToCart(product);
    toast({ title: "Added to cart!", description: `${product.name} has been added to your cart.` });
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span>/</span>
            <span className="text-foreground capitalize">{product.category}</span>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="relative rounded-2xl overflow-hidden bg-muted aspect-square">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.badge && (
                <span className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-bold text-primary-foreground ${
                  product.badge === "sale" ? "bg-destructive" : product.badge === "new" ? "bg-success" : "bg-accent"
                }`}>
                  {product.badge.toUpperCase()}
                </span>
              )}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div>
              <p className="text-sm text-primary font-semibold capitalize mb-2">{product.category}</p>
              <h1 className="text-3xl font-extrabold text-foreground mb-3">{product.name}</h1>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-accent fill-accent" : "text-muted-foreground/30"}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="flex items-end gap-3">
              <span className="text-4xl font-extrabold text-primary">${product.price.toFixed(2)}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                  <span className="text-sm font-bold text-destructive">-{discount}% OFF</span>
                </>
              )}
            </div>

            <p className="text-foreground/80 leading-relaxed">{product.description}</p>

            {/* Sizes */}
            {product.sizes && (
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Size</p>
                <div className="flex gap-2">
                  {product.sizes.map((s, i) => (
                    <button key={s} className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${i === 0 ? "border-primary bg-primary/10 text-primary" : "border-input text-foreground hover:border-primary"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {product.colors.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Color</p>
                <div className="flex gap-2">
                  {product.colors.map((c, i) => (
                    <button key={c} className={`w-8 h-8 rounded-full border-2 transition-all ${i === 0 ? "border-primary scale-110" : "border-transparent hover:border-muted-foreground"}`} style={{ backgroundColor: c }} aria-label={`Color ${c}`} />
                  ))}
                </div>
              </div>
            )}

            {/* What's included */}
            <div className="bg-muted rounded-xl p-5">
              <p className="font-bold text-foreground mb-3">What You'll Get</p>
              <ul className="space-y-2">
                {["Product as described", "Original packaging", "Manufacturer warranty", "Free shipping on this item"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="h-4 w-4 text-success shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button size="lg" className="flex-1 font-bold text-base" onClick={handleAddToCart}>
                <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  toggleWishlist(product.id);
                  toast({ title: isInWishlist(product.id) ? "Removed from wishlist" : "Added to wishlist" });
                }}
                className={isInWishlist(product.id) ? "text-destructive border-destructive" : ""}
              >
                <Heart className="h-5 w-5" fill={isInWishlist(product.id) ? "currentColor" : "none"} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => { navigator.clipboard.writeText(window.location.href); toast({ title: "Link copied!" }); }}>
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Reviews Summary */}
        <section className="mt-16">
          <h2 className="text-2xl font-extrabold text-foreground mb-6">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Alex M.", rating: 5, text: "Excellent product! Exactly as described and arrived quickly. Would definitely recommend to anyone." },
              { name: "Jamie L.", rating: 4, text: "Great quality for the price. Very happy with my purchase. The only reason I'm not giving 5 stars is the packaging." },
              { name: "Chris R.", rating: 5, text: "This exceeded my expectations! Amazing build quality and perfect for my needs. Will buy again." },
            ].map((r, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-card">
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 mb-3">"{r.text}"</p>
                <p className="text-sm font-bold text-foreground">{r.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
