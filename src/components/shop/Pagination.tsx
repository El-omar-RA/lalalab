import Link from "next/link";
import { buildQueryString } from "@/lib/utils";

type PaginationProps = {
  page: number;
  totalPages: number;
  baseParams: Record<string, string | undefined>;
};

export default function Pagination({
  page,
  totalPages,
  baseParams,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const prevPage = Math.max(1, page - 1);
  const nextPage = Math.min(totalPages, page + 1);

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
      <Link
        className="btn btn-ghost"
        href={`/shop${buildQueryString({
          ...baseParams,
          page: String(prevPage),
        })}`}
        aria-disabled={page === 1}
      >
        Previous
      </Link>
      <span className="text-sm text-muted">
        Page {page} of {totalPages}
      </span>
      <Link
        className="btn btn-ghost"
        href={`/shop${buildQueryString({
          ...baseParams,
          page: String(nextPage),
        })}`}
        aria-disabled={page === totalPages}
      >
        Next
      </Link>
    </div>
  );
}