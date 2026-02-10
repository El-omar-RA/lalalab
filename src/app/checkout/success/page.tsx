import Link from "next/link";

export const metadata = {
  title: "Payment Successful - LalaLab",
};

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold text-text">You&apos;re all set</h1>
      <p className="mt-3 text-sm text-muted">
        Thank you for your order. A receipt has been sent to your email.
        Course access details will arrive shortly; for physical products,
        you&apos;ll receive a shipping confirmation when your order leaves the lab.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link className="btn btn-primary" href="/courses">
          View courses
        </Link>
        <Link className="btn btn-ghost" href="/shop">
          Back to shop
        </Link>
      </div>
    </div>
  );
}