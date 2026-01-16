import Link from "next/link";

export const metadata = {
  title: "Payment Successful - LalaLab",
};

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold text-text">Payment successful</h1>
      <p className="mt-3 text-sm text-muted">
        Thank you for your order. A receipt has been sent to your email.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link className="btn btn-primary" href="/courses">
          Back to Courses
        </Link>
        <Link className="btn btn-ghost" href="/shop">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}