import Link from "next/link";
import ProductCard from "@/components/shop/ProductCard";
import Pagination from "@/components/shop/Pagination";
import { getCatalog } from "@/lib/catalog";

const ITEMS_PER_PAGE = 24;

type ShopSearchParams = {
  q?: string;
  category?: string;
  sort?: string;
  page?: string;
};

export const metadata = {
  title: "Shop - LalaLab",
  description: "Browse all LalaLab mushroom cultivation products.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<ShopSearchParams>;
}) {
  const params = await searchParams;
  const { products, categories } = getCatalog();
  const query = params.q?.trim().toLowerCase() || "";
  const category = params.category || "";
  const sort = params.sort || "";
  const page = Math.max(1, Number(params.page || "1") || 1);

  let filtered = products.filter((product) => {
    const matchesQuery = query
      ? (product.clean_name || product.name)
          .toLowerCase()
          .includes(query)
      : true;
    const matchesCategory = category ? product.category === category : true;
    return matchesQuery && matchesCategory;
  });

  if (sort === "price-asc" || sort === "price-desc") {
    filtered = [...filtered].sort((a, b) => {
      const aPrice =
        typeof a.priceInfo.min === "number" ? a.priceInfo.min : null;
      const bPrice =
        typeof b.priceInfo.min === "number" ? b.priceInfo.min : null;

      if (aPrice === null && bPrice === null) return 0;
      if (aPrice === null) return 1;
      if (bPrice === null) return -1;

      return sort === "price-asc" ? aPrice - bPrice : bPrice - aPrice;
    });
  }

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paged = filtered.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-text">Shop</h1>
          <p className="mt-2 text-sm text-muted">
            {filtered.length} products across {categories.length} categories
          </p>
        </div>
        <form method="get" className="flex flex-wrap gap-3">
          <input
            type="text"
            name="q"
            defaultValue={searchParams.q}
            placeholder="Search products"
            className="w-48 rounded-full border border-border bg-[rgba(6,10,20,0.6)] px-4 py-2 text-sm text-text"
            aria-label="Search products"
          />
          <select
            name="sort"
            defaultValue={sort}
            className="rounded-full border border-border bg-[rgba(6,10,20,0.6)] px-4 py-2 text-sm text-text"
            aria-label="Sort by price"
          >
            <option value="">Sort by price</option>
            <option value="price-asc">Low to high</option>
            <option value="price-desc">High to low</option>
          </select>
          {category ? <input type="hidden" name="category" value={category} /> : null}
          <button type="submit" className="btn btn-ghost">
            Apply
          </button>
        </form>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        <Link className={`pill ${category ? "text-muted" : "text-accent"}`} href="/shop">
          All
        </Link>
        {categories.map((item) => (
          <Link
            key={item}
            className={`pill ${category === item ? "text-accent" : ""}`}
            href={`/shop?category=${encodeURIComponent(item)}${
              query ? `&q=${encodeURIComponent(query)}` : ""
            }${sort ? `&sort=${encodeURIComponent(sort)}` : ""}`}
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paged.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <Pagination
        page={currentPage}
        totalPages={totalPages}
        baseParams={{
          q: searchParams.q,
          category: searchParams.category,
          sort: searchParams.sort,
        }}
      />
    </div>
  );
}