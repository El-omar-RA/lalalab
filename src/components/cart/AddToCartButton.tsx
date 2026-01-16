"use client";

import type { CartItemInput } from "@/lib/types";
import { useCart } from "@/components/cart/CartProvider";

export default function AddToCartButton({
  item,
  label,
  className = "btn btn-primary",
}: {
  item: CartItemInput;
  label: string;
  className?: string;
}) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      className={className}
      onClick={() => addItem(item, { quantity: 1, openDrawer: true })}
    >
      {label}
    </button>
  );
}