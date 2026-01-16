import AddToCartButton from "@/components/cart/AddToCartButton";
import { courses } from "@/lib/courses";

const course = courses.find((item) => item.slug === "denmark-wa")!;

const agenda = [
  {
    day: "Day 1",
    items: [
      "Lab orientation and sterile setup",
      "Agar prep and transfers",
      "Spawn workflow walkthrough",
    ],
  },
  {
    day: "Day 2",
    items: [
      "Bulk substrate prep and inoculation",
      "Fruiting room control systems",
      "Harvest timing and QA protocols",
    ],
  },
  {
    day: "Day 3",
    items: [
      "Batch planning and scaling strategy",
      "Troubleshooting clinic",
      "Q&A and take-home checklist",
    ],
  },
];

const bring = [
  "Closed-toe shoes and lab-ready attire",
  "Notebook or tablet for SOPs",
  "Personal protective equipment (optional)",
];

export const metadata = {
  title: "LalaLab Intensive - 3-Day Mycology Workshop",
  description: "Hands-on training in Denmark, Western Australia.",
};

export default function DenmarkCoursePage() {
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
          <p className="pill">Denmark, Western Australia</p>
          <h1 className="mt-4 text-3xl font-semibold text-text">
            {course.title}
          </h1>
          <p className="mt-3 text-sm text-muted">{course.summary}</p>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-text">Agenda</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {agenda.map((day) => (
                <div key={day.day} className="glass rounded-2xl p-4">
                  <p className="text-sm font-semibold text-text">{day.day}</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                    {day.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-text">Logistics</h2>
            <div className="mt-4 grid gap-3 text-sm text-muted">
              <p>Duration: 3 days</p>
              <p>Dates: TBA (limited seats per cohort)</p>
              <p>Accommodation: Placeholder note for nearby options.</p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-text">What to bring</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
              {bring.map((item) => (
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
            label="Book Denmark Workshop"
            className="btn btn-primary mt-6 w-full"
          />
          <p className="mt-4 text-xs text-muted">
            Limited seats. Payments coming next (Stripe).
          </p>
        </aside>
      </div>
    </div>
  );
}