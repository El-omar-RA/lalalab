import type { Guide } from "@/lib/types";

export const guides: Guide[] = [
  {
    slug: "clean-room-setup",
    title: "Clean Room Setup for Small Labs",
    excerpt:
      "Build a compact sterile workflow with minimal equipment and maximum control.",
    sections: [
      {
        heading: "Core Zones",
        body: "Separate intake, prep, and sterile zones. Keep airflow predictable and tools in fixed locations.",
      },
      {
        heading: "Surface Protocols",
        body: "Use 70% isopropyl, single-direction wipes, and maintain a timed cleanup routine before every session.",
      },
    ],
  },
  {
    slug: "spawn-performance",
    title: "Optimizing Spawn Performance",
    excerpt:
      "Increase colonization speed by managing hydration, grain density, and inoculation ratios.",
    sections: [
      {
        heading: "Hydration Balance",
        body: "Aim for firm grains with a dry exterior. Wet surfaces invite contamination and slow colonization.",
      },
      {
        heading: "Inoculation Ratios",
        body: "Increase ratio for faster cycles. Maintain consistent grain-to-substrate ratios for repeatability.",
      },
    ],
  },
  {
    slug: "substrate-formulas",
    title: "Future-Proof Substrate Formulas",
    excerpt:
      "Build substrate recipes that scale without sacrificing yield or texture.",
    sections: [
      {
        heading: "Base Materials",
        body: "Coco coir, hardwood pellets, and vermiculite provide a stable baseline for most gourmet species.",
      },
      {
        heading: "Supplement Strategy",
        body: "Add supplements only after sterility is dialed in. Over-supplementation raises contamination risk.",
      },
    ],
  },
  {
    slug: "fruiting-rooms",
    title: "Fruiting Room Environmental Control",
    excerpt:
      "Dial temperature, humidity, and fresh air exchange for consistent flushes.",
    sections: [
      {
        heading: "Automation",
        body: "Use smart controllers to stabilize humidity and cycling. Log data to spot drift early.",
      },
      {
        heading: "Harvest Timing",
        body: "Harvest at peak cap development to maximize shelf life and texture.",
      },
    ],
  },
  {
    slug: "culture-management",
    title: "Culture Management and Transfers",
    excerpt:
      "Keep strains healthy with disciplined transfers and clear labeling.",
    sections: [
      {
        heading: "Transfer Cadence",
        body: "Limit transfers per generation. Store masters cold and work from copies to avoid drift.",
      },
      {
        heading: "Documentation",
        body: "Log every plate, date, and batch in a consistent registry. Traceability saves runs.",
      },
    ],
  },
];