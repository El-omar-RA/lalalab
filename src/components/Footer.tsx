import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[rgba(6,10,20,0.85)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="relative h-10 w-32">
            <Image
              src="/images/lalalab-logo.png"
              alt="LalaLab logo"
              fill
              sizes="128px"
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-sm text-muted">
            Futuristic mushroom cultivation supplies, training, and courses
            designed for reliable, repeatable growth.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Explore
          </h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/shop">Shop</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/learn">Learn</Link>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Connect
          </h4>
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