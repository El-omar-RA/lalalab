import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/cart/AddToCartButton";
import ProductImage from "@/components/ProductImage";
import { getProductBySlug } from "@/lib/catalog";
import { formatPrice } from "@/lib/utils";

export const metadata = {
  title: "Product - LalaLab",
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const priceLabel = formatPrice(product.priceInfo);
  const priceCents =
    typeof product.priceInfo.min === "number"
      ? Math.round(product.priceInfo.min * 100)
      : undefined;

  const cartItem = {
    id: product.id,
    name: product.clean_name || product.name,
    type: "product" as const,
    priceLabel,
    priceCents,
    image: product.image,
    slug: product.slug,
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="glass relative overflow-hidden rounded-2xl p-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <ProductImage
              src={product.image}
              alt={product.clean_name || product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
        <div>
          <p className="pill">{product.category}</p>
          <h1 className="mt-4 text-3xl font-semibold text-text">
            {product.clean_name || product.name}
          </h1>
          <p className="mt-3 text-xl text-accent">{priceLabel}</p>
          <AddToCartButton
            item={cartItem}
            label="Add to cart"
            className="btn btn-primary mt-6"
          />
          <div className="mt-8 text-sm text-muted">
            <p>Source listing:</p>
            <Link className="text-sm" href={product.link} target="_blank">
              {product.link}
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <section>
          <h2 className="text-xl font-semibold text-text">Description</h2>
          {product.description ? (
            <p className="mt-3 text-sm text-muted">{product.description}</p>
          ) : (
            <p className="mt-3 text-sm text-muted">
              No description available yet.
            </p>
          )}
        </section>
        <section>
          <h2 className="text-xl font-semibold text-text">Reviews</h2>
          {product.reviews && product.reviews.length > 0 ? (
            <div className="mt-3 space-y-4">
              {product.reviews.map((review, index) => (
                <div
                  key={`${review.author || "review"}-${index}`}
                  className="glass rounded-xl p-4 text-sm text-muted"
                >
                  <div className="flex flex-wrap items-center gap-2 text-text">
                    <span className="font-semibold">
                      {review.author || "Anonymous"}
                    </span>
                    {typeof review.rating === "number" && (
                      <span className="text-xs text-accent">
                        Rating: {review.rating}/5
                      </span>
                    )}
                    {review.date && (
                      <span className="text-xs text-muted">{review.date}</span>
                    )}
                  </div>
                  {review.text && <p className="mt-2">{review.text}</p>}
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted">No reviews yet.</p>
          )}
        </section>
      </div>
    </div>
  );
}
