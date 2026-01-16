"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import ProductImage from "@/components/ProductImage";
import { formatAUD } from "@/lib/utils";

export default function CheckoutClient() {
  const { items, subtotalCents, hasUnknownPrices } = useCart();

  if (items.length === 0) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <p className="text-sm text-muted">Your cart is empty.</p>
        <Link className="btn btn-primary mt-4" href="/shop">
          Shop Supplies
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-text">Cart Summary</h2>
        <div className="mt-4 grid gap-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl">
                <ProductImage src={item.image} alt={item.name} fill sizes="56px" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-text">{item.name}</p>
                <p className="text-xs text-muted">
                  {item.priceLabel} • Qty {item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between text-sm">
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
      </div>
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-text">Payments Coming Next</h3>
        <p className="mt-2 text-sm text-muted">
          Payments coming next (Stripe). For now, request an invoice or pay link.
        </p>
        <Link className="btn btn-secondary mt-4" href="/contact">
          Request Invoice / Pay Link
        </Link>
      </div>
    </div>
  );
}