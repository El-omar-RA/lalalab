import Image from "next/image";
import Link from "next/link";

const learningCollections = [
  {
    heading: "Start with the essentials",
    kicker: "Tooling, safety and first projects",
    description:
      "Borrowing the spirit of Rootlab's Learning Centre, we pulled together the most requested primers for new growers. Pick a card, follow the checklist, and you will have a sterile workflow before the weekend.",
    items: [
      {
        title: "Getting started with All-American sterilisers",
        blurb:
          "Dial in venting, pressure and cooling so your first load of grain jars survives intact.",
        href: "/learn/all-american-sterilizers",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/2023/10/sterilizer-011_1000x1333-300x300.jpeg",
      },
      {
        title: "Heat sealer roadmap",
        blurb:
          "Impulse, constant heat or handheld? We break down settings for grain bags, sawdust blocks and filter patch sleeves.",
        href: "/learn/heat-sealers",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/2023/10/Heat-impulse-plastic-sealer-01_1000x1333-300x300.jpeg",
      },
      {
        title: "Mushroom grains decoded",
        blurb:
          "Rye vs. millet vs. sorghum, hydration targets and how to test for endospores before inoculation.",
        href: "/learn/mushroom-grains",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/2023/12/Grain-bag-300x300.png",
      },
      {
        title: "Beginner mushroom growing kits",
        blurb:
          "Unbox, fruit and reset spray blocks without losing momentum between flushes.",
        href: "/learn/beginner-mushroom-growing-kits",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/2023/12/mushroom-kit-1-01-296x300.png",
      },
    ],
  },
  {
    heading: "Hands-on grow guides",
    kicker: "Projects that move you from spawn to harvest",
    description:
      "These walkthroughs mirror the practical how-tos that made Rootlab famous while swapping in LalaLab tooling, specs and troubleshooting trees.",
    items: [
      {
        title: "Beginner's bucket grow",
        blurb:
          "Use pasteurised straw, a handful of spawn and any 10 L food-safe bucket to crank out oyster clusters.",
        href: "/learn/bucket-grows",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/2023/10/Grow-mushrooms-in-buckets1_1000x1000-300x300.jpeg",
      },
      {
        title: "Spray-and-grow kit care",
        blurb:
          "Placement, daily misting cadence and what to do when pins stall or dry out.",
        href: "/learn/spray-and-grow",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/elementor/thumbs/Block-with-spray-01-scaled-rhrk220fsowvig31u5nrfia4vtb4v9alvnppp41vp4.png",
      },
      {
        title: "Grow mushrooms on logs",
        blurb:
          "Species pairing, drill patterns, sealing techniques and seasonal timelines for outdoor beds.",
        href: "/learn/log-growing",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/elementor/thumbs/log-stack-01-rdtr5t5mln34nbc31d3ieax5qh17ytc4nozri8x9ko.png",
      },
      {
        title: "Mycelium design lab",
        blurb:
          "Turn waste fibre into lamps, panels or packaging with staged growth forms and drying workflows.",
        href: "/learn/mycelium-objects",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/2023/10/square-plastic-01_1368x1000-300x300.jpeg",
      },
      {
        title: "Grow mushrooms from scratch",
        blurb:
          "See the whole lifecycle—from culture to bulk substrate—before you invest in gear.",
        href: "/learn/grow-mushrooms",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/2024/02/Mushroom-Growing-Kit-300x300.png",
      },
    ],
  },
  {
    heading: "Lab workflows & culture work",
    kicker: "Agar, liquid culture and supplementation",
    description:
      "Ready to leave PF Tek behind? Use these guides to culture, QC and scale your genetics without fighting contamination every week.",
    items: [
      {
        title: "Agar plate fundamentals",
        blurb:
          "Mix, pour and wrap MEA without bubbles. Includes transfer etiquette and fridge storage tips.",
        href: "/learn/agar-plates",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-12-at-10.06.17-PM-300x300.jpeg",
      },
      {
        title: "Liquid culture clinic",
        blurb:
          "Stir bars, nutrient ratios, noc points and how to spot healthy coral vs. nasty biofilm.",
        href: "/learn/liquid-culture",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-01-23-at-3.18.08-PM-e1737628804196-rhmxl87qsh6mat01qq2xerz0fr6zq46mlwym5toe60.jpeg",
      },
      {
        title: "Supplements & bio-enhancers",
        blurb:
          "Understand when to lean on soy hulls, gypsum or functional extracts without overloading your substrate.",
        href: "/learn/mushroom-supplements",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/2025/03/Pouch-with-jar-01-300x300.png",
      },
    ],
  },
  {
    heading: "Species spotlights & inspiration",
    kicker: "What to grow, cook and legally forage in Australia",
    description:
      "Curious about lion's mane dosing, chanterelle foraging or how to cook your first flush? Start here.",
    items: [
      {
        title: "Learn about different mushrooms",
        blurb:
          "Compare oysters, lion's mane, shiitake and more so you can plan your grow calendar.",
        href: "/learn/different-mushrooms",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/2023/12/Shutterstock_2452794925-300x300.png",
      },
      {
        title: "Lion's mane deep dive",
        blurb:
          "From fruiting temps to tincture yields, learn why hericium is the go-to functional mushroom right now.",
        href: "/learn/lions-mane",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/elementor/thumbs/Lions-mane-growing-culture-01-scaled-rdtlo0y6jmc3p4mkydck8pohwpvtbl5egr8p786gu0.png",
      },
      {
        title: "Magic mushroom policy guide",
        blurb:
          "Stay informed on Australian regulations, harm minimisation practices and approved therapeutic use cases.",
        href: "/learn/magic-mushroom-guide",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/elementor/thumbs/Magic-MUSHROOM-with-grass-02-scaled-rhrk0yj7tnetytoe8olfis8rxmppvyxvq8bbjhoeyg.png",
      },
      {
        title: "Cooking with gourmet mushrooms",
        blurb:
          "Pan-techniques, dehydration tips and recipe pairings for your homegrown harvest.",
        href: "/learn/cook-with-mushrooms",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/elementor/thumbs/Mushroom-chunks2-02-scaled-rhrk19ta3nu9u580etgycpeb2964gc6nrs55at7ovs.png",
      },
      {
        title: "Foraging the Aussie bush",
        blurb:
          "Safety, look-alikes and seasons for legal mushroom foraging across Australian states.",
        href: "/learn/mushroom-foraging-australia",
        image:
          "https://www.rootlab.com.au/wp-content/uploads/elementor/thumbs/MUSHROOM-FORAGING-01-scaled-rhrk0kfmz4vj4o8vj0i0zdsv0un7oidwoaj1cc9bjs.png",
      },
    ],
  },
];

export default function LearnPage() {
  return (
    <div className="space-y-24">
      <section className="border-b border-border bg-[rgba(6,10,20,0.6)]">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16 text-left md:flex-row md:items-center">
          <div className="flex-1 space-y-5">
            <p className="pill">LalaLab Learning Centre</p>
            <h1 className="text-3xl font-semibold text-text md:text-5xl">
              Guided playbooks for every stage of your mushroom practice
            </h1>
            <p className="text-base text-muted md:text-lg">
              We studied what growers loved about Rootlab's knowledge base and
              rebuilt it with LalaLab tooling, specs and troubleshooting trees.
              These modules stay living—expect fresh SOPs every time regulations,
              hardware or substrates change.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/shop" className="btn btn-primary">
                Shop the tools we reference
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Ask for a custom training plan
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="glass rounded-2xl border border-border/60 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                What you'll find inside
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>• Step-by-step labs for grains, agar and LC.</li>
                <li>• Grow room builds—from buckets to monotubs.</li>
                <li>• Species-specific playbooks for gourmet & functional fungi.</li>
                <li>• Food safety, foraging law and dosing references for AU.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {learningCollections.map((collection) => (
        <section key={collection.heading} className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                {collection.kicker}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-text">
                {collection.heading}
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-muted">
                {collection.description}
              </p>
            </div>
            <Link className="btn btn-ghost" href="/contact">
              Need a deeper dive?
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {collection.items.map((item) => (
              <article
                key={item.title}
                className="glass group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold text-text">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted">{item.blurb}</p>
                  <div className="mt-auto">
                    <Link className="btn btn-link px-0" href={item.href}>
                      Open guide ↗
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="border-t border-border bg-[rgba(6,10,20,0.85)]">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <p className="pill mx-auto w-fit">Keep learning with LalaLab</p>
          <h2 className="mt-4 text-3xl font-semibold text-text">
            Missing a topic you saw on Rootlab?
          </h2>
          <p className="mt-3 text-base text-muted">
            Send us the gap. We'll draft the SOP, record the walkthrough and add
            it here so the entire community benefits.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="mailto:hello@lalalab.au" className="btn btn-primary">
              Email a lesson request
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Book a live lab session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
