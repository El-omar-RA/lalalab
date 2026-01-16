import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold text-text">Page not found</h1>
      <p className="mt-3 text-sm text-muted">
        The page you are looking for does not exist yet.
      </p>
      <Link className="btn btn-primary mt-6" href="/">
        Back to Home
      </Link>
    </div>
  );
}