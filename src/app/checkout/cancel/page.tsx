import Link from "next/link";

export const metadata = {
  title: "Checkout Canceled - LalaLab",
};

export default function CheckoutCancelPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold text-text">Checkout canceled</h1>
      <p className="mt-3 text-sm text-muted">
        Your payment was not completed. You can return to checkout or contact us
        for help.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link className="btn btn-primary" href="/checkout">
          Return to Checkout
        </Link>
        <Link className="btn btn-ghost" href="/contact">
          Contact Support
        </Link>
      </div>
    </div>
  );
}