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
    q: "I've never grown mushrooms before. Is this for me?",
    a: "Yes. We assume you’re starting from zero. We cover safety, basic equipment, and simple first grows before anything advanced.",
  },
  {
    q: "What equipment do I actually need to start?",
    a: "You can begin with a still-air box, a few sterile consumables, and a small incubation space. We give you a clear shopping list and offer kits so you don’t buy random gear.",
  },
  {
    q: "Will I be able to grow on my own after the course?",
    a: "That’s the goal. By the end, you’ll understand contamination, how to read your cultures, and how to repeat the same grow instead of getting random results.",
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
            <p className="pill">Start mushroom growing the right way</p>
            <h1 className="text-3xl font-semibold text-text md:text-5xl">
              LalaLab – Learn to Grow Mushrooms from Scratch
            </h1>
            <p className="text-base text-muted md:text-lg">
              No lab degree needed. We walk you from your first clean workspace
              and spores all the way to consistent, safe harvests – with kits
              and tools that actually match what you learn.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                <Link className="btn btn-primary" href="/courses/online">
                  Enroll Online
                </Link>
                <Link
                  className="btn btn-secondary"
                  href="/courses/denmark-wa"
                >
                  Book Denmark (WA) 3-Day Intensive
                </Link>
              </div>
              <div className="flex flex-col gap-1 text-xs text-muted">
                <span>Online: self-paced, beginner friendly.</span>
                <span>Denmark (WA): small group, hands-on lab time.</span>
              </div>
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
              Start with the basics, then move into real production. Choose a
              self-paced online course or a 3-day intensive in Denmark, WA.
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
        <h2 className="text-2xl font-semibold text-text">How it works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="glass rounded-2xl p-6">
            <p className="text-sm font-semibold text-text">1. Learn the basics</p>
            <p className="mt-2 text-sm text-muted">
              We start with safety, contamination, and simple setups you can
              actually run at home.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <p className="text-sm font-semibold text-text">2. Set up your first grow</p>
            <p className="mt-2 text-sm text-muted">
              Follow step-by-step workflows, using either your own equipment or
              matched LalaLab kits.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <p className="text-sm font-semibold text-text">3. Repeat and scale</p>
            <p className="mt-2 text-sm text-muted">
              Once you get one clean, consistent run, we show you how to repeat it
              and slowly increase volume without chaos.
            </p>
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