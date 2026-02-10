import CheckoutClient from "@/components/CheckoutClient";

export const metadata = {
  title: "Checkout - LalaLab",
  description: "Review your cart and complete payment with Stripe.",
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-text">Review &amp; checkout</h1>
      <p className="mt-3 text-sm text-muted">
        Check your cart, then complete payment securely. Courses grant instant online access; supplies ship from Western Australia.
      </p>
      <div className="mt-10">
        <CheckoutClient />
      </div>
    </div>
  );
}