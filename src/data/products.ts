export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  badge: "sale" | "new" | "hot" | null;
  description: string;
  sizes: string[] | null;
  colors: string[];
}

export const products: Product[] = [
  {
    id: 1, name: "Wireless Bluetooth Headphones Pro", category: "electronics",
    price: 149.99, originalPrice: 199.99, rating: 4.5, reviews: 245,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    badge: "sale", description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and exceptional sound quality.",
    sizes: null, colors: ["#1e293b", "#64748b", "#1e40af"]
  },
  {
    id: 2, name: "Smart Watch Series X", category: "electronics",
    price: 299.99, originalPrice: 399.99, rating: 4.8, reviews: 512,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    badge: "hot", description: "Advanced smartwatch with health monitoring, GPS tracking, and seamless smartphone integration.",
    sizes: ["40mm", "44mm", "46mm"], colors: ["#1e293b", "#fcd34d", "#ef4444"]
  },
  {
    id: 3, name: 'Ultra HD 4K Smart TV 55"', category: "electronics",
    price: 599.99, originalPrice: 799.99, rating: 4.6, reviews: 328,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    badge: "sale", description: "Stunning 4K UHD smart TV with HDR support, built-in streaming apps, and voice control.",
    sizes: null, colors: ["#1e293b"]
  },
  {
    id: 4, name: "Professional Gaming Laptop", category: "electronics",
    price: 1299.99, originalPrice: 1599.99, rating: 4.9, reviews: 187,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    badge: "new", description: "High-performance gaming laptop with RTX graphics, 144Hz display, and advanced cooling system.",
    sizes: ['15"', '17"'], colors: ["#1e293b"]
  },
  {
    id: 5, name: "Wireless Charging Pad", category: "electronics",
    price: 39.99, originalPrice: 49.99, rating: 4.3, reviews: 156,
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=400&h=400&fit=crop",
    badge: null, description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    sizes: null, colors: ["#1e293b", "#ffffff"]
  },
  {
    id: 6, name: "Portable Bluetooth Speaker", category: "electronics",
    price: 79.99, originalPrice: 99.99, rating: 4.4, reviews: 234,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    badge: null, description: "Waterproof portable speaker with 360° sound and 12-hour battery life.",
    sizes: null, colors: ["#1e293b", "#3b82f6", "#ef4444"]
  },
  {
    id: 7, name: "Mechanical Gaming Keyboard", category: "electronics",
    price: 129.99, originalPrice: 159.99, rating: 4.7, reviews: 298,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop",
    badge: "hot", description: "RGB mechanical keyboard with customizable switches and programmable keys.",
    sizes: ["Full Size", "TKL"], colors: ["#1e293b"]
  },
  {
    id: 8, name: "Wireless Gaming Mouse", category: "electronics",
    price: 69.99, originalPrice: 89.99, rating: 4.6, reviews: 412,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    badge: null, description: "High-precision wireless mouse with adjustable DPI and ergonomic design.",
    sizes: null, colors: ["#1e293b", "#3b82f6"]
  },
  {
    id: 9, name: "Premium Cotton T-Shirt", category: "fashion",
    price: 29.99, originalPrice: 39.99, rating: 4.4, reviews: 567,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    badge: "sale", description: "100% organic cotton t-shirt with a comfortable fit and durable quality.",
    sizes: ["S", "M", "L", "XL", "XXL"], colors: ["#ffffff", "#1e293b", "#3b82f6", "#ef4444", "#10b981"]
  },
  {
    id: 10, name: "Classic Denim Jacket", category: "fashion",
    price: 89.99, originalPrice: 119.99, rating: 4.6, reviews: 234,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    badge: null, description: "Timeless denim jacket with a modern fit and premium stitching.",
    sizes: ["S", "M", "L", "XL"], colors: ["#64748b"]
  },
  {
    id: 11, name: "Running Sneakers Ultra", category: "fashion",
    price: 129.99, originalPrice: 159.99, rating: 4.8, reviews: 445,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    badge: "hot", description: "Lightweight running shoes with advanced cushioning and breathable mesh.",
    sizes: ["7", "8", "9", "10", "11", "12"], colors: ["#ef4444", "#1e293b", "#3b82f6"]
  },
  {
    id: 12, name: "Leather Casual Wallet", category: "fashion",
    price: 49.99, originalPrice: 69.99, rating: 4.5, reviews: 312,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    badge: "sale", description: "Genuine leather wallet with RFID protection and multiple card slots.",
    sizes: null, colors: ["#3d2817", "#1e293b"]
  },
  {
    id: 13, name: "Wool Winter Sweater", category: "fashion",
    price: 79.99, originalPrice: 99.99, rating: 4.7, reviews: 189,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
    badge: "new", description: "Soft merino wool sweater perfect for cold weather layering.",
    sizes: ["S", "M", "L", "XL"], colors: ["#1e293b", "#64748b", "#b45309"]
  },
  {
    id: 14, name: "Classic Aviator Sunglasses", category: "fashion",
    price: 149.99, originalPrice: 199.99, rating: 4.6, reviews: 278,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    badge: null, description: "Authentic aviator sunglasses with UV400 protection and gold accents.",
    sizes: null, colors: ["#1e293b", "#fcd34d", "#3b82f6"]
  },
  {
    id: 15, name: "Canvas Messenger Bag", category: "fashion",
    price: 59.99, originalPrice: 79.99, rating: 4.4, reviews: 156,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    badge: null, description: "Durable canvas messenger bag with laptop compartment and multiple pockets.",
    sizes: null, colors: ["#1e293b", "#3d5a80", "#b45309"]
  },
  {
    id: 16, name: "Slim Fit Dress Pants", category: "fashion",
    price: 69.99, originalPrice: 89.99, rating: 4.3, reviews: 198,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
    badge: null, description: "Elegant slim fit dress pants perfect for office or formal occasions.",
    sizes: ["30", "32", "34", "36", "38"], colors: ["#1e293b", "#64748b", "#1e40af"]
  },
  {
    id: 17, name: "Modern LED Desk Lamp", category: "home",
    price: 49.99, originalPrice: 69.99, rating: 4.5, reviews: 234,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    badge: null, description: "Adjustable LED desk lamp with multiple brightness levels and USB charging port.",
    sizes: null, colors: ["#1e293b", "#ffffff", "#3b82f6"]
  },
  {
    id: 18, name: "Ceramic Coffee Mug Set", category: "home",
    price: 34.99, originalPrice: 44.99, rating: 4.6, reviews: 456,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    badge: "new", description: "Set of 4 ceramic mugs with modern design and comfortable grip.",
    sizes: null, colors: ["#ffffff", "#1e293b", "#3b82f6"]
  },
  {
    id: 19, name: "Indoor Plant Pot Set", category: "home",
    price: 39.99, originalPrice: 54.99, rating: 4.4, reviews: 189,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    badge: null, description: "Set of 3 modern plant pots with drainage holes and bamboo trays.",
    sizes: ["Small", "Medium", "Large"], colors: ["#ffffff", "#1e293b", "#b45309"]
  },
  {
    id: 20, name: "Soft Microfiber Bedding Set", category: "home",
    price: 89.99, originalPrice: 119.99, rating: 4.8, reviews: 567,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop",
    badge: "hot", description: "Luxurious microfiber bedding set with pillowcases and fitted sheet.",
    sizes: ["Twin", "Full", "Queen", "King"], colors: ["#ffffff", "#1e293b", "#b8c5d6", "#e2e8f0"]
  },
  {
    id: 21, name: "Scented Candle Collection", category: "home",
    price: 29.99, originalPrice: 39.99, rating: 4.7, reviews: 345,
    image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=400&h=400&fit=crop",
    badge: "sale", description: "Set of 3 scented candles with natural soy wax and essential oils.",
    sizes: null, colors: ["#fcd34d", "#ef4444", "#10b981"]
  },
  {
    id: 22, name: "Kitchen Knife Set Pro", category: "home",
    price: 79.99, originalPrice: 99.99, rating: 4.6, reviews: 234,
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=400&fit=crop",
    badge: null, description: "Professional 6-piece knife set with wooden block and sharpening tool.",
    sizes: null, colors: ["#1e293b"]
  },
  {
    id: 23, name: "Throw Blanket Cozy", category: "home",
    price: 44.99, originalPrice: 59.99, rating: 4.5, reviews: 278,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    badge: null, description: "Ultra-soft throw blanket perfect for couch or bed.",
    sizes: ['50" x 60"', '60" x 80"'], colors: ["#1e293b", "#64748b", "#b8c5d6", "#b45309"]
  },
  {
    id: 24, name: "Wall Mounted Shelf Set", category: "home",
    price: 49.99, originalPrice: 69.99, rating: 4.3, reviews: 167,
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=400&h=400&fit=crop",
    badge: null, description: "Modern floating shelf set with invisible mounting system.",
    sizes: ["3-Piece", "5-Piece"], colors: ["#ffffff", "#1e293b", "#b45309"]
  },
  {
    id: 25, name: "Yoga Mat Premium", category: "sports",
    price: 34.99, originalPrice: 44.99, rating: 4.6, reviews: 456,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    badge: null, description: "Non-slip yoga mat with extra cushioning and carrying strap.",
    sizes: ['24" x 68"', '26" x 72"'], colors: ["#3b82f6", "#10b981", "#ef4444", "#1e293b"]
  },
  {
    id: 26, name: "Adjustable Dumbbell Set", category: "sports",
    price: 199.99, originalPrice: 279.99, rating: 4.8, reviews: 289,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop",
    badge: "hot", description: "Space-saving adjustable dumbbells from 5-52.5 lbs with quick-change system.",
    sizes: null, colors: ["#1e293b"]
  },
  {
    id: 27, name: "Fitness Tracker Band", category: "sports",
    price: 49.99, originalPrice: 69.99, rating: 4.4, reviews: 567,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
    badge: "sale", description: "Waterproof fitness tracker with heart rate monitor and sleep tracking.",
    sizes: ["S/M", "L/XL"], colors: ["#1e293b", "#3b82f6", "#ef4444", "#10b981"]
  },
  {
    id: 28, name: "Resistance Bands Set", category: "sports",
    price: 24.99, originalPrice: 34.99, rating: 4.5, reviews: 378,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    badge: null, description: "Complete set of 5 resistance bands with different resistance levels.",
    sizes: null, colors: ["#3b82f6", "#10b981", "#ef4444", "#fcd34d"]
  },
  {
    id: 29, name: "Cycling Helmet Pro", category: "sports",
    price: 69.99, originalPrice: 89.99, rating: 4.7, reviews: 234,
    image: "https://images.unsplash.com/photo-1557803175-2f1e40fa5247?w=400&h=400&fit=crop",
    badge: null, description: "Aerodynamic cycling helmet with ventilation and LED lights.",
    sizes: ["S", "M", "L"], colors: ["#1e293b", "#ef4444", "#3b82f6"]
  },
  {
    id: 30, name: "Swimming Goggles Pro", category: "sports",
    price: 29.99, originalPrice: 39.99, rating: 4.4, reviews: 189,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=400&fit=crop",
    badge: null, description: "Anti-fog swimming goggles with UV protection and comfortable seal.",
    sizes: null, colors: ["#1e293b", "#3b82f6", "#10b981"]
  },
  {
    id: 31, name: "Basketball Official Size", category: "sports",
    price: 29.99, originalPrice: 39.99, rating: 4.5, reviews: 267,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop",
    badge: null, description: "Official size indoor/outdoor basketball with superior grip.",
    sizes: null, colors: ["#f97316", "#1e293b"]
  },
  {
    id: 32, name: "Tennis Racket Kit", category: "sports",
    price: 89.99, originalPrice: 119.99, rating: 4.6, reviews: 156,
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=400&fit=crop",
    badge: "new", description: "Professional tennis racket with grip, strings, and carrying case.",
    sizes: ["L2", "L3", "L4"], colors: ["#1e293b", "#3b82f6"]
  },
  {
    id: 33, name: "Skincare Essentials Kit", category: "beauty",
    price: 79.99, originalPrice: 99.99, rating: 4.7, reviews: 456,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    badge: "hot", description: "Complete skincare routine with cleanser, toner, serum, and moisturizer.",
    sizes: null, colors: ["#ffffff"]
  },
  {
    id: 34, name: "Premium Hair Dryer", category: "beauty",
    price: 129.99, originalPrice: 159.99, rating: 4.6, reviews: 312,
    image: "https://images.unsplash.com/photo-1522338242992-e1a54571a9f7?w=400&h=400&fit=crop",
    badge: null, description: "Ionic hair dryer with multiple heat settings and concentrator.",
    sizes: null, colors: ["#1e293b", "#fcd34d", "#ef4444"]
  },
  {
    id: 35, name: "Makeup Brush Set", category: "beauty",
    price: 44.99, originalPrice: 59.99, rating: 4.5, reviews: 567,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    badge: "sale", description: "12-piece professional makeup brush set with synthetic bristles.",
    sizes: null, colors: ["#1e293b", "#b8c5d6", "#fcd34d"]
  },
  {
    id: 36, name: "Perfume Eau de Parfum", category: "beauty",
    price: 89.99, originalPrice: 119.99, rating: 4.8, reviews: 234,
    image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?w=400&h=400&fit=crop",
    badge: "new", description: "Luxury long-lasting perfume with notes of florals and musk.",
    sizes: ["50ml", "100ml"], colors: ["#fcd34d", "#ef4444", "#1e293b"]
  },
  {
    id: 37, name: "Electric Facial Cleanser", category: "beauty",
    price: 69.99, originalPrice: 89.99, rating: 4.4, reviews: 378,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop",
    badge: null, description: "Sonic facial cleanser with multiple brush heads and timers.",
    sizes: null, colors: ["#ffffff", "#1e293b", "#fcd34d"]
  },
  {
    id: 38, name: "Nail Care Kit Complete", category: "beauty",
    price: 34.99, originalPrice: 44.99, rating: 4.3, reviews: 267,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    badge: null, description: "Professional nail care kit with tools for manicure and pedicure.",
    sizes: null, colors: ["#1e293b", "#fcd34d", "#ef4444"]
  },
  {
    id: 39, name: "Organic Face Mask Set", category: "beauty",
    price: 29.99, originalPrice: 39.99, rating: 4.6, reviews: 456,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
    badge: "sale", description: "Set of 7 organic face masks for different skin concerns.",
    sizes: null, colors: ["#ffffff"]
  },
  {
    id: 40, name: "Hair Styling Clay", category: "beauty",
    price: 24.99, originalPrice: 32.99, rating: 4.4, reviews: 189,
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=400&h=400&fit=crop",
    badge: null, description: "Strong hold hair clay with natural ingredients and matte finish.",
    sizes: ["50g", "100g"], colors: ["#1e293b"]
  },
  {
    id: 41, name: "Building Blocks Set 500pc", category: "toys",
    price: 49.99, originalPrice: 69.99, rating: 4.8, reviews: 678,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop",
    badge: "hot", description: "Creative building blocks set with 500 pieces in various colors.",
    sizes: null, colors: ["#ef4444", "#3b82f6", "#10b981", "#fcd34d"]
  },
  {
    id: 42, name: "Board Game Collection", category: "toys",
    price: 39.99, originalPrice: 54.99, rating: 4.6, reviews: 345,
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=400&fit=crop",
    badge: null, description: "Classic family board game for 2-6 players. Ages 8+.",
    sizes: null, colors: ["#1e293b"]
  },
  {
    id: 43, name: "Remote Control Car", category: "toys",
    price: 59.99, originalPrice: 79.99, rating: 4.5, reviews: 456,
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=400&h=400&fit=crop",
    badge: "sale", description: "High-speed RC car with 2.4GHz remote and stunt capabilities.",
    sizes: null, colors: ["#ef4444", "#3b82f6", "#1e293b"]
  },
  {
    id: 44, name: "Puzzle 1000 Pieces", category: "toys",
    price: 24.99, originalPrice: 34.99, rating: 4.4, reviews: 289,
    image: "https://images.unsplash.com/photo-1494059980473-813e73ee784b?w=400&h=400&fit=crop",
    badge: null, description: "Beautiful 1000-piece puzzle with stunning landscape design.",
    sizes: null, colors: ["#3b82f6"]
  },
  {
    id: 45, name: "Action Figure Set", category: "toys",
    price: 34.99, originalPrice: 44.99, rating: 4.6, reviews: 234,
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop",
    badge: "new", description: "Collectible action figure set with accessories. 6\" scale.",
    sizes: null, colors: ["#1e293b", "#3b82f6"]
  },
  {
    id: 46, name: "Educational Science Kit", category: "toys",
    price: 29.99, originalPrice: 39.99, rating: 4.7, reviews: 378,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=400&fit=crop",
    badge: null, description: "Hands-on science experiments kit for young explorers. Ages 8+.",
    sizes: null, colors: ["#3b82f6", "#10b981"]
  },
  {
    id: 47, name: "Plush Teddy Bear Large", category: "toys",
    price: 39.99, originalPrice: 49.99, rating: 4.8, reviews: 567,
    image: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=400&h=400&fit=crop",
    badge: "hot", description: "Extra soft and huggable teddy bear. 18\" tall.",
    sizes: ['12"', '18"', '24"'], colors: ["#b45309", "#1e293b", "#fcd34d"]
  },
  {
    id: 48, name: "Art Drawing Set Pro", category: "toys",
    price: 44.99, originalPrice: 59.99, rating: 4.5, reviews: 234,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    badge: null, description: "Professional drawing set with pencils, markers, and sketchbook.",
    sizes: null, colors: ["#1e293b"]
  },
];

export const categories = [
  { id: "electronics", name: "Electronics", icon: "Laptop", count: 8 },
  { id: "fashion", name: "Fashion", icon: "Shirt", count: 8 },
  { id: "home", name: "Home & Garden", icon: "Home", count: 8 },
  { id: "sports", name: "Sports", icon: "Dumbbell", count: 8 },
  { id: "beauty", name: "Beauty", icon: "Sparkles", count: 8 },
  { id: "toys", name: "Toys & Games", icon: "Gamepad2", count: 8 },
];

export const testimonials = [
  { id: 1, name: "Sarah Johnson", role: "Verified Buyer", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", rating: 5, text: "Absolutely love the quality of the products! The delivery was fast and the customer service is outstanding. Will definitely shop here again." },
  { id: 2, name: "Michael Chen", role: "Verified Buyer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", rating: 5, text: "Best online shopping experience I've ever had. The product quality exceeded my expectations, and the prices are unbeatable." },
  { id: 3, name: "Emily Davis", role: "Verified Buyer", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", rating: 4, text: "Great selection and amazing deals! I found exactly what I was looking for at a fraction of the price. Highly recommend ShopMax!" },
];
