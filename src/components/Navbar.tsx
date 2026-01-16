"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CartButton from "@/components/cart/CartButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/courses", label: "Courses" },
  { href: "/learn", label: "Learn" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[rgba(6,10,20,0.8)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(245,197,66,0.8)]" />
          <span className="text-lg font-semibold text-text">LalaLab</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition ${
                  isActive ? "text-accent" : "text-muted hover:text-accent"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <CartButton />
      </div>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[rgba(37,99,235,0.55)] to-transparent" />
    </header>
  );
}