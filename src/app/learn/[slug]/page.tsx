import { notFound } from "next/navigation";
import { guides } from "@/lib/learn";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = guides.find((item) => item.slug === params.slug);
  if (!guide) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-text">{guide.title}</h1>
      <p className="mt-3 text-sm text-muted">{guide.excerpt}</p>
      <div className="mt-10 grid gap-6">
        {guide.sections.map((section) => (
          <div key={section.heading} className="glass rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-text">
              {section.heading}
            </h2>
            <p className="mt-3 text-sm text-muted">{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
