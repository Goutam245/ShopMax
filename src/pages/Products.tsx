import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "reviews", label: "Most Reviews" },
];

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "all";
  const [category, setCategory] = useState(initialCat);
  const [priceRange, setPriceRange] = useState([0, 1400]);
  const [sort, setSort] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = products.filter(p => {
      if (category !== "all" && p.category !== category) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    });
    switch (sort) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      case "reviews": result.sort((a, b) => b.reviews - a.reviews); break;
    }
    return result;
  }, [category, priceRange, sort, searchQuery]);

  const clearFilters = () => {
    setCategory("all");
    setPriceRange([0, 1400]);
    setSort("default");
    setSearchQuery("");
  };

  const hasActiveFilters = category !== "all" || priceRange[0] > 0 || priceRange[1] < 1400 || searchQuery;

  const FiltersContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-2 block">Search</label>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      {/* Categories */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-2 block">Category</label>
        <div className="space-y-1">
          <button onClick={() => setCategory("all")} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${category === "all" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"}`}>
            All Products
          </button>
          {categories.map(c => (
            <button key={c.id} onClick={() => setCategory(c.id)} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${category === c.id ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"}`}>
              {c.name}
            </button>
          ))}
        </div>
      </div>
      {/* Price */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-3 block">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <Slider value={priceRange} onValueChange={setPriceRange} min={0} max={1400} step={10} className="mt-2" />
      </div>
      {/* Sort */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-2 block">Sort By</label>
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {sortOptions.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>
      {hasActiveFilters && (
        <Button variant="outline" size="sm" onClick={clearFilters} className="w-full">
          <X className="h-4 w-4 mr-1" /> Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-hero-gradient py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">Our Products</h1>
          <p className="text-primary-foreground/70 mt-2">Browse our complete collection of {products.length}+ products</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Mobile filter toggle */}
        <div className="md:hidden mb-4">
          <Button variant="outline" onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)} className="w-full">
            <SlidersHorizontal className="h-4 w-4 mr-2" /> Filters {hasActiveFilters && "•"}
          </Button>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 shrink-0">
            <div className="sticky top-20 bg-card rounded-xl p-6 shadow-card">
              <FiltersContent />
            </div>
          </aside>

          {/* Mobile Filters Drawer */}
          <AnimatePresence>
            {mobileFiltersOpen && (
              <>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-foreground/50 z-40 md:hidden" onClick={() => setMobileFiltersOpen(false)} />
                <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} className="fixed left-0 top-0 bottom-0 w-80 bg-card z-50 p-6 overflow-y-auto md:hidden">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-foreground">Filters</h3>
                    <Button variant="ghost" size="icon" onClick={() => setMobileFiltersOpen(false)}><X className="h-5 w-5" /></Button>
                  </div>
                  <FiltersContent />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">{filtered.length} products found</p>
            </div>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl font-bold text-foreground mb-2">No products found</p>
                <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
