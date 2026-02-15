import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { state, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-20 w-20 text-muted-foreground/30 mx-auto mb-6" />
          <h1 className="text-2xl font-extrabold text-foreground mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Looks like you haven't added any products yet.</p>
          <Link to="/products"><Button size="lg" className="font-bold">Start Shopping <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-hero-gradient py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-extrabold text-primary-foreground">Shopping Cart</h1>
          <p className="text-primary-foreground/70 mt-1">{cartCount} item{cartCount !== 1 ? "s" : ""} in your cart</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {state.items.map(item => (
                <motion.div
                  key={item.product.id}
                  layout
                  exit={{ opacity: 0, x: -100 }}
                  className="bg-card rounded-xl p-4 shadow-card flex gap-4"
                >
                  <Link to={`/products/${item.product.id}`}>
                    <img src={item.product.image} alt={item.product.name} className="w-24 h-24 rounded-lg object-cover" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link to={`/products/${item.product.id}`}>
                      <h3 className="font-bold text-foreground truncate hover:text-primary transition-colors">{item.product.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground capitalize">{item.product.category}</p>
                    <p className="text-lg font-bold text-primary mt-1">${item.product.price.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground hover:text-destructive transition-colors" aria-label="Remove">
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <div className="flex items-center gap-2 bg-muted rounded-lg">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-2 hover:text-primary transition-colors" aria-label="Decrease">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-bold text-foreground w-8 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-2 hover:text-primary transition-colors" aria-label="Increase">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <div className="flex justify-between items-center pt-4">
              <Link to="/products"><Button variant="outline">Continue Shopping</Button></Link>
              <Button variant="outline" onClick={clearCart} className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-card rounded-xl p-6 shadow-card h-fit sticky top-20 space-y-4">
            <h2 className="text-xl font-bold text-foreground">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-foreground"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-foreground"><span>Shipping</span><span className="text-success font-medium">Free</span></div>
            </div>
            <div className="border-t border-border pt-4">
              <div className="flex justify-between text-lg font-bold text-foreground">
                <span>Total</span>
                <span className="text-primary">${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            {/* Coupon */}
            <div className="flex gap-2">
              <input type="text" placeholder="Discount code" className="flex-1 px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <Button variant="outline" size="sm">Apply</Button>
            </div>
            <Link to="/checkout" className="block">
              <Button size="lg" className="w-full font-bold text-base">
                Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
