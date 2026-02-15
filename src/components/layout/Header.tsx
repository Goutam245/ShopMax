import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, ShoppingCart, User, Search, Menu, X, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Images } from "public/logo.png"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount, state } = useCart();
  const location = useLocation();

  const searchResults = searchQuery.length > 1
    ? products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : [];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-primary font-extrabold text-2xl">
            {/* <ShoppingBag className="h-7 w-7" /> */} <img src="logo.png" alt="ShopMax Logo" className="h-8 w-8" />
            <span>ShopMax</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors relative pb-1 ${
                  location.pathname === link.to
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(""); }}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
              {searchOpen && (
                <div className="absolute right-0 top-12 w-80 bg-card border border-border rounded-lg shadow-lg p-3 z-50">
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                 
                  {searchResults.length > 0 && (
                    <div className="mt-2 space-y-1 max-h-64 overflow-y-auto">
                      {searchResults.map(p => (
                        <Link
                          key={p.id}
                          to={`/products/${p.id}`}
                          onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                          className="flex items-center gap-3 p-2 rounded-md hover:bg-muted transition-colors"
                        >
                          <img src={p.image} alt={p.name} className="w-10 h-10 rounded object-cover" />
                          <div>
                            <p className="text-sm font-medium text-foreground">{p.name}</p>
                            <p className="text-xs text-primary font-semibold">${p.price.toFixed(2)}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                  {searchQuery.length > 1 && searchResults.length === 0 && (
                    <p className="text-sm text-muted-foreground mt-2 text-center">No products found</p>
                  )}
                </div>
              )}
            </div>

            {/* Wishlist */}
            <Link to="/products">
              <Button variant="ghost" size="icon" aria-label="Wishlist" className="relative">
                <Heart className="h-5 w-5" />
                {state.wishlist.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-destructive text-destructive-foreground">
                    {state.wishlist.length}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="icon" aria-label="Cart" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-destructive text-destructive-foreground">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Account */}
            <Link to="/account" className="hidden md:block">
              <Button variant="ghost" size="icon" aria-label="Account">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Mobile menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden py-4 border-t border-border space-y-1 animate-fade-in">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/account" onClick={() => setMobileOpen(false)} className="block px-4 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted">
              Account
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}


