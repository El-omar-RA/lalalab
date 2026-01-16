import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[rgba(6,10,20,0.9)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-text">LalaLab</h3>
          <p className="mt-3 text-sm text-muted">
            Futuristic mushroom cultivation supplies, training, and courses
            designed for reliable, repeatable growth.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-text">Explore</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/shop">Shop</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/learn">Learn</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-text">Connect</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/contact">Contact</Link>
            <Link href="/checkout">Checkout</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted">
        Copyright 2026 LalaLab. All rights reserved.
      </div>
    </footer>
  );
}