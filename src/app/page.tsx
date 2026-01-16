import Link from "next/link";
import { courses } from "@/lib/courses";
import { getCatalog } from "@/lib/catalog";
import CourseCard from "@/components/CourseCard";
import Image from "next/image";

const featuredCategories = [
  {
    name: "Mushroom Spawn",
    description: "Foundational cultures for reliable colonization.",
  },
  {
    name: "Agar Plates & Media",
    description: "Precision media for isolation and transfers.",
  },
  {
    name: "Substrates",
    description: "Sterile, tuned blends for consistent yield.",
  },
  {
    name: "Mycology Tools",
    description: "Lab-grade equipment for modern workflows.",
  },
];

const testimonials = [
  {
    name: "A. Chen",
    quote:
      "LalaLab gave us a clean, repeatable workflow in under a month. The course is laser-focused.",
  },
  {
    name: "K. Singh",
    quote:
      "Denmark workshop was a game-changer. We walked out with culture confidence and lab SOPs.",
  },
  {
    name: "J. Rivera",
    quote:
      "The substrate module alone saved us dozens of hours. The kits are premium.",
  },
];

const faqs = [
  {
    q: "Do I need prior mycology experience?",
    a: "No. The online course starts from sterile basics and scales to production.",
  },
  {
    q: "Where is the in-person workshop?",
    a: "Denmark, Western Australia. Dates are released quarterly.",
  },
  {
    q: "What tools do you recommend first?",
    a: "Start with sterile consumables, agar plates, and a small incubation setup.",
  },
];

export default function HomePage() {
  const { categories } = getCatalog();
  const existingCategories = featuredCategories.filter((cat) =>
    categories.includes(cat.name)
  );

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="pill">Futuristic cultivation systems</p>
            <h1 className="text-3xl font-semibold text-text md:text-5xl">
              LalaLab - Mushroom Growing Supplies & Courses
            </h1>
            <p className="text-base text-muted md:text-lg">
              Minimal, precise, and built for repeatable outcomes. Learn modern
              mycology and source clean lab-grade supplies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link className="btn btn-primary" href="/courses/online">
                Enroll Online
              </Link>
              <Link className="btn btn-secondary" href="/courses/denmark-wa">
                Book Denmark (WA) 3-Day Intensive
              </Link>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="art-frame glass">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/mushroom-art-01.svg"
                  alt="Futuristic mushroom art study"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted">
                Art Study 01
              </p>
            </div>
            <div className="art-frame glass">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/mushroom-art-02.svg"
                  alt="Minimal mushroom growth art"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted">
                Art Study 02
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-text">Featured Courses</h2>
            <p className="mt-2 text-sm text-muted">
              Course-first. Start online or join us in Denmark, WA.
            </p>
          </div>
          <Link className="btn btn-ghost" href="/courses">
            Explore Courses
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-[rgba(6,10,20,0.8)]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold text-text">
            Featured Product Categories
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {existingCategories.map((category) => (
              <Link
                key={category.name}
                href={`/shop?category=${encodeURIComponent(category.name)}`}
                className="glass rounded-2xl border border-border/60 p-5 transition hover:border-accent/60"
              >
                <h3 className="text-base font-semibold text-text">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-text">Testimonials</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="glass rounded-2xl p-6">
              <p className="text-sm text-muted">"{item.quote}"</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-accent">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-[rgba(6,10,20,0.9)]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold text-text">FAQ</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {faqs.map((item) => (
              <div key={item.q} className="glass rounded-2xl p-6">
                <p className="text-sm font-semibold text-text">{item.q}</p>
                <p className="mt-3 text-sm text-muted">{item.a}</p>
              </div>
            ))}
          </div>
          <Link className="btn btn-ghost mt-8" href="/contact">
            Ask a question
          </Link>
        </div>
      </section>
    </div>
  );
}