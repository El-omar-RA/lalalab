import Link from "next/link";

export const metadata = {
  title: "Checkout Canceled - LalaLab",
};

export default function CheckoutCancelPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold text-text">Checkout canceled</h1>
      <p className="mt-3 text-sm text-muted">
        Your payment wasn&apos;t completed. Your cart is still saved – you can review
        it again or contact us if something wasn&apos;t clear.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link className="btn btn-primary" href="/checkout">
          Review cart again
        </Link>
        <Link className="btn btn-ghost" href="/contact">
          Contact support
        </Link>
      </div>
    </div>
  );
}