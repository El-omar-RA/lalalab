import rawProducts from "@/data/lalalab_products_clean.json";
import type { Catalog, Product, RawProduct } from "@/lib/types";
import { parsePrice, toSlug } from "@/lib/utils";

function buildCatalog(items: RawProduct[]): Catalog {
  const slugCounts = new Map<string, number>();
  const products: Product[] = items.map((item, index) => {
    const base = toSlug(item.clean_name || item.name || `product-${index + 1}`);
    const count = (slugCounts.get(base) ?? 0) + 1;
    slugCounts.set(base, count);
    const slug = count > 1 ? `${base}-${count}` : base;

    return {
      ...item,
      id: item.link || slug,
      slug,
      priceInfo: parsePrice(item.price, item.price_min),
    };
  });

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  ).sort();

  return {
    products,
    categories,
    bySlug: new Map(products.map((product) => [product.slug, product])),
  };
}

const catalog = buildCatalog(rawProducts as RawProduct[]);

export function getCatalog() {
  return catalog;
}

export function getProductBySlug(slug: string) {
  return catalog.bySlug.get(slug);
}