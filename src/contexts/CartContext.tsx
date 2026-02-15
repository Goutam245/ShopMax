import React, { createContext, useContext, useReducer, useEffect } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  wishlist: number[];
}

type CartAction =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; productId: number }
  | { type: "UPDATE_QUANTITY"; productId: number; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_WISHLIST"; productId: number };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: number) => void;
  cartTotal: number;
  cartCount: number;
  isInWishlist: (productId: number) => boolean;
} | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.items.find((i) => i.product.id === action.product.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.product.id === action.product.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { product: action.product, quantity: 1 }] };
    }
    case "REMOVE_FROM_CART":
      return { ...state, items: state.items.filter((i) => i.product.id !== action.productId) };
    case "UPDATE_QUANTITY":
      if (action.quantity <= 0) {
        return { ...state, items: state.items.filter((i) => i.product.id !== action.productId) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.product.id === action.productId ? { ...i, quantity: action.quantity } : i
        ),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "TOGGLE_WISHLIST": {
      const isIn = state.wishlist.includes(action.productId);
      return {
        ...state,
        wishlist: isIn
          ? state.wishlist.filter((id) => id !== action.productId)
          : [...state.wishlist, action.productId],
      };
    }
    default:
      return state;
  }
}

function loadState(): CartState {
  try {
    const items = JSON.parse(localStorage.getItem("shopmax-cart") || "[]");
    const wishlist = JSON.parse(localStorage.getItem("shopmax-wishlist") || "[]");
    return { items, wishlist };
  } catch {
    return { items: [], wishlist: [] };
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, loadState);

  useEffect(() => {
    localStorage.setItem("shopmax-cart", JSON.stringify(state.items));
    localStorage.setItem("shopmax-wishlist", JSON.stringify(state.wishlist));
  }, [state]);

  const addToCart = (product: Product) => dispatch({ type: "ADD_TO_CART", product });
  const removeFromCart = (productId: number) => dispatch({ type: "REMOVE_FROM_CART", productId });
  const updateQuantity = (productId: number, quantity: number) =>
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });
  const toggleWishlist = (productId: number) => dispatch({ type: "TOGGLE_WISHLIST", productId });
  const cartTotal = state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const cartCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const isInWishlist = (productId: number) => state.wishlist.includes(productId);

  return (
    <CartContext.Provider
      value={{ state, dispatch, addToCart, removeFromCart, updateQuantity, clearCart, toggleWishlist, cartTotal, cartCount, isInWishlist }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
