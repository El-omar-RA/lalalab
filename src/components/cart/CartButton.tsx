"use client";

import { useCart } from "@/components/cart/CartProvider";

export default function CartButton() {
  const { itemCount, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      className="btn btn-ghost"
      aria-label={`Open cart (${itemCount} items)`}
    >
      Cart
      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-primary px-2 text-xs text-white">
        {itemCount}
      </span>
    </button>
  );
}