import type { Course } from "@/lib/types";

export const courses: Course[] = [
  {
    id: "course-online",
    slug: "online",
    title: "LalaLab Online - Future Mycology Fundamentals",
    summary:
      "A self-paced program covering sterile technique, spawn science, and modern cultivation workflows.",
    duration: "Self-paced (6 weeks recommended)",
    priceLabel: "$249 AUD",
    priceCents: 24900,
    cta: "Enroll Online",
    highlights: [
      "15 concise modules with lab demonstrations",
      "Sterile workflow blueprints and SOPs",
      "Printable checklists and material calculators",
    ],
  },
  {
    id: "course-denmark-wa",
    slug: "denmark-wa",
    title: "LalaLab Intensive - 3-Day Mycology Workshop",
    summary:
      "Hands-on training in Denmark, Western Australia with live lab work, culture work, and harvest planning.",
    duration: "3 days",
    location: "Denmark, Western Australia",
    priceLabel: "$1,250 AUD",
    priceCents: 125000,
    cta: "Book Denmark Workshop",
    highlights: [
      "Live inoculations, lab setup, and fruiting room walkthrough",
      "Small cohort with limited seats",
      "Take-home culture and workflow guides",
    ],
  },
];