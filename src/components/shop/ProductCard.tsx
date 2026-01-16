import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import ProductImage from "@/components/ProductImage";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="glass rounded-2xl border border-border/60 p-4 transition hover:border-accent/50">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <ProductImage
          src={product.image}
          alt={product.clean_name || product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">
          {product.category}
        </span>
        <h3 className="text-sm font-semibold text-text">
          {product.clean_name || product.name}
        </h3>
        <p className="text-sm text-accent">{formatPrice(product.priceInfo)}</p>
        <Link className="btn btn-ghost w-fit" href={`/shop/${product.slug}`}>
          View
        </Link>
      </div>
    </div>
  );
}