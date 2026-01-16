import CheckoutClient from "@/components/CheckoutClient";

export const metadata = {
  title: "Checkout - LalaLab",
  description: "Review your cart and complete payment with Stripe.",
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-text">Checkout</h1>
      <p className="mt-3 text-sm text-muted">
        Complete payment via Stripe Checkout. Your payment is processed securely.
      </p>
      <div className="mt-10">
        <CheckoutClient />
      </div>
    </div>
  );
}