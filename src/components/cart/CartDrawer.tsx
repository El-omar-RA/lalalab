"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/components/cart/CartProvider";
import ProductImage from "@/components/ProductImage";
import { formatAUD } from "@/lib/utils";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQty,
    removeItem,
    subtotalCents,
    hasUnknownPrices,
  } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCart();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        aria-label="Close cart"
        className="absolute inset-0 bg-black/60"
        onClick={closeCart}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className="absolute right-0 top-0 h-full w-full max-w-md border-l border-border bg-[rgba(6,10,20,0.95)] shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 id="cart-title" className="text-lg font-semibold">
            Cart
          </h2>
          <button className="btn btn-ghost" onClick={closeCart}>
            Close
          </button>
        </div>

        <div className="flex h-[calc(100%-180px)] flex-col gap-4 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="glass rounded-2xl p-6 text-center">
              <p className="text-sm text-muted">
                Your cart is empty. Start with a course or explore the catalog.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link className="btn btn-primary" href="/courses">
                  Browse Courses
                </Link>
                <Link className="btn btn-ghost" href="/shop">
                  Shop Supplies
                </Link>
              </div>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="glass flex items-center gap-4 rounded-2xl p-4"
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                  <ProductImage src={item.image} alt={item.name} fill sizes="64px" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-text">{item.name}</p>
                  <p className="text-xs text-muted">{item.priceLabel}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="btn btn-ghost h-8 w-8 rounded-full px-0"
                      aria-label={`Decrease ${item.name} quantity`}
                      onClick={() => updateQty(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      type="button"
                      className="btn btn-ghost h-8 w-8 rounded-full px-0"
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() => updateQty(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="ml-auto text-xs text-muted hover:text-accent"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-border px-6 py-5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted">Subtotal</span>
            <span className="font-semibold text-text">
              {formatAUD(subtotalCents / 100)}
            </span>
          </div>
          {hasUnknownPrices ? (
            <p className="mt-2 text-xs text-muted">
              Some items have variable pricing. Subtotal reflects known prices.
            </p>
          ) : null}
          <p className="mt-2 text-xs text-muted">
            You can remove items or change quantities here before checkout.
          </p>
          <div className="mt-4 flex gap-3">
            <Link className="btn btn-primary w-full" href="/checkout">
              Review &amp; Checkout
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}