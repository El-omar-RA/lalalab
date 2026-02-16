import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { learnArticles } from "@/data/learnArticles";

interface LearnArticlePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(learnArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LearnArticlePageProps) {
  const article = learnArticles[params.slug];
  if (!article) {
    return {};
  }
  return {
    title: `${article.title} | LalaLab Learning Centre`,
    description: article.intro,
  };
}

export default function LearnArticlePage({ params }: LearnArticlePageProps) {
  const article = learnArticles[params.slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="space-y-16">
      <section className="border-b border-border bg-[rgba(6,10,20,0.6)]">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-16 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              LalaLab Learning Centre
            </p>
            <h1 className="text-3xl font-semibold text-text md:text-5xl">
              {article.title}
            </h1>
            <p className="text-base text-muted">{article.intro}</p>
            {article.readingTime ? (
              <p className="text-sm text-muted">{article.readingTime}</p>
            ) : null}
            <div className="flex flex-wrap gap-3">
              <Link href="/learn" className="btn btn-secondary">
                ← All lessons
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Ask for help
              </Link>
            </div>
          </div>
          {article.heroImage ? (
            <div className="flex-1">
              <div className="glass relative overflow-hidden rounded-2xl border border-border/60">
                <div className="relative h-64 w-full">
                  <Image
                    src={article.heroImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4">
        <div className="space-y-12">
          {article.sections.map((section) => (
            <article
              key={section.title}
              className="glass rounded-2xl border border-border/60 p-6"
            >
              <h2 className="text-xl font-semibold text-text">
                {section.title}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-4 text-sm text-muted">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {article.resources ? (
        <section className="border-t border-border bg-[rgba(6,10,20,0.85)]">
          <div className="mx-auto max-w-4xl px-4 py-12">
            <h3 className="text-lg font-semibold text-text">Helpful links</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {article.resources.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="btn btn-secondary"
                    target={resource.href.startsWith("http") ? "_blank" : undefined}
                    rel={resource.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </div>
  );
}
