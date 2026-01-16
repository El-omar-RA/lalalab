"use client";

import Image from "next/image";
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
    <header className="sticky top-0 z-50 border-b border-border bg-[rgba(6,10,20,0.7)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-28">
            <Image
              src="/images/lalalab-logo.png"
              alt="LalaLab logo"
              fill
              sizes="112px"
              className="object-contain"
              priority
            />
          </div>
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
                className={`text-xs uppercase tracking-[0.2em] transition ${
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
    </header>
  );
}