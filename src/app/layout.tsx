import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/cart/CartProvider";
import CartDrawer from "@/components/cart/CartDrawer";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Sora({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "LalaLab - Mushroom Growing Supplies & Courses",
  description:
    "Futuristic mushroom cultivation supplies and courses. Online training and Denmark WA 3-day intensive workshops.",
  icons: {
    icon: "/images/lalalab-logo.png",
    apple: "/images/lalalab-logo.png",
  },
  openGraph: {
    title: "LalaLab - Mushroom Growing Supplies & Courses",
    description:
      "Futuristic mushroom cultivation supplies and courses. Online training and Denmark WA 3-day intensive workshops.",
    images: [
      {
        url: "/images/lalalab-logo.png",
        width: 1200,
        height: 900,
        alt: "LalaLab logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <CartProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <div className="min-h-screen">
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </div>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}