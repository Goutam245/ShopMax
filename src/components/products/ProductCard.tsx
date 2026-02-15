import { Link } from "react-router-dom";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const { toast } = useToast();

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({ title: "Added to cart", description: `${product.name} has been added to your cart.` });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    toast({
      title: isInWishlist(product.id) ? "Removed from wishlist" : "Added to wishlist",
      description: product.name,
    });
  };

  const badgeColor = {
    sale: "bg-destructive",
    new: "bg-success",
    hot: "bg-accent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/products/${product.id}`} className="group block">
        <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-1">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {product.badge && (
              <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-primary-foreground ${badgeColor[product.badge]}`}>
                {product.badge.toUpperCase()}
              </span>
            )}
            {discount > 0 && (
              <span className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold bg-foreground/80 text-background">
                -{discount}%
              </span>
            )}
            {/* Hover actions */}
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
              <div className="flex gap-2">
                <button
                  onClick={handleWishlist}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-md ${
                    isInWishlist(product.id) ? "bg-destructive text-destructive-foreground" : "bg-card text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                  aria-label="Toggle wishlist"
                >
                  <Heart className="h-4 w-4" fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                </button>
                <button
                  onClick={handleAddToCart}
                  className="w-9 h-9 rounded-full bg-card text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-md"
                  aria-label="Add to cart"
                >
                  <ShoppingCart className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          {/* Info */}
          <div className="p-4">
            <p className="text-xs text-muted-foreground capitalize mb-1">{product.category}</p>
            <h3 className="font-semibold text-sm text-foreground line-clamp-1 mb-2">{product.name}</h3>
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 ${i < Math.floor(product.rating) ? "text-accent fill-accent" : "text-muted-foreground/30"}`}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
