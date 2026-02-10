import Link from "next/link";
import { guides } from "@/lib/learn";

export const metadata = {
  title: "Learn - LalaLab",
  description: "Guides and cultivation knowledge from LalaLab.",
};

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-text">Learn</h1>
      <p className="mt-3 text-sm text-muted">
        If you’re new, read these in order. Each guide builds on the last so you
        don’t get lost in advanced theory too early.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {guides.map((guide, index) => (
          <Link
            key={guide.slug}
            href={`/learn/${guide.slug}`}
            className="group glass relative overflow-hidden rounded-2xl p-6"
          >
            <span className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-accent to-secondary opacity-0 transition group-hover:opacity-100" />
            <h2 className="text-lg font-semibold text-text">
              <span className="mr-2 text-xs text-accent">{index + 1}.</span>
              {guide.title}
            </h2>
            <p className="mt-2 text-sm text-muted">{guide.excerpt}</p>
            <span className="mt-4 inline-flex text-xs text-accent">
              Read guide
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}