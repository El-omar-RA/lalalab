"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CartItem, CartItemInput } from "@/lib/types";

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  isOpen: boolean;
  subtotalCents: number;
  hasUnknownPrices: boolean;
  addItem: (
    item: CartItemInput,
    options?: { quantity?: number; openDrawer?: boolean }
  ) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "lalalab-cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        setItems([]);
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotalCents = useMemo(
    () =>
      items.reduce((sum, item) => {
        if (typeof item.priceCents === "number") {
          return sum + item.priceCents * item.quantity;
        }
        return sum;
      }, 0),
    [items]
  );

  const hasUnknownPrices = useMemo(
    () => items.some((item) => typeof item.priceCents !== "number"),
    [items]
  );

  const addItem: CartContextValue["addItem"] = (
    item,
    options = { quantity: 1, openDrawer: true }
  ) => {
    const quantity = options.quantity ?? 1;
    setItems((prev) => {
      const existing = prev.find((entry) => entry.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.id === item.id
            ? { ...entry, quantity: entry.quantity + quantity }
            : entry
        );
      }
      return [...prev, { ...item, quantity }];
    });
    if (options.openDrawer !== false) {
      setIsOpen(true);
    }
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        isOpen,
        subtotalCents,
        hasUnknownPrices,
        addItem,
        removeItem,
        updateQty,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}