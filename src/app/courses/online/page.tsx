import AddToCartButton from "@/components/cart/AddToCartButton";
import { courses } from "@/lib/courses";

const course = courses.find((item) => item.slug === "online")!;

const modules = [
  "Sterile technique and lab setup",
  "Agar workflows and isolation",
  "Spawn selection and optimization",
  "Substrate formulation fundamentals",
  "Fruiting room design and controls",
  "Harvest timing and post-processing",
];

const outcomes = [
  "Build a repeatable sterile workflow",
  "Launch your first production run with confidence",
  "Design scalable substrate and fruiting plans",
];

const who = [
  "First-time growers moving beyond kits",
  "Small labs ready to scale production",
  "Teams standardizing SOPs across batches",
];

const included = [
  "15 video modules with replays",
  "Printable checklists and SOP templates",
  "Access to monthly Q&A archive",
];

export const metadata = {
  title: "LalaLab Online - Future Mycology Fundamentals",
  description: "Self-paced online mycology course.",
};

export default function OnlineCoursePage() {
  const cartItem = {
    id: course.id,
    name: course.title,
    type: "course" as const,
    priceLabel: course.priceLabel,
    priceCents: course.priceCents,
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="pill">{course.duration}</p>
          <h1 className="mt-4 text-3xl font-semibold text-text">
            {course.title}
          </h1>
          <p className="mt-3 text-sm text-muted">{course.summary}</p>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-text">Outcomes</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
              {outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-text">Modules</h2>
            <ul className="mt-4 grid gap-2 text-sm text-muted md:grid-cols-2">
              {modules.map((item) => (
                <li key={item} className="glass rounded-xl p-3">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-text">Who it is for</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
              {who.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-text">What is included</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="glass h-fit rounded-2xl p-6">
          <p className="text-sm text-muted">Price</p>
          <p className="mt-2 text-2xl font-semibold text-text">
            {course.priceLabel}
          </p>
          <AddToCartButton
            item={cartItem}
            label="Enroll Online"
            className="btn btn-primary mt-6 w-full"
          />
          <p className="mt-4 text-xs text-muted">
            Instant access after checkout. Payments coming next (Stripe).
          </p>
        </aside>
      </div>
    </div>
  );
}