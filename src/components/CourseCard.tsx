import Link from "next/link";
import type { Course } from "@/lib/types";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="group glass relative overflow-hidden rounded-2xl p-6 shadow-card">
      <span className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-accent to-secondary opacity-0 transition group-hover:opacity-100" />
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          <span className="pill">{course.duration}</span>
          {course.location ? <span className="pill">{course.location}</span> : null}
        </div>
        <h3 className="text-lg font-semibold text-text">{course.title}</h3>
        <p className="text-sm text-muted">{course.summary}</p>
        <p className="text-sm font-semibold text-text">{course.priceLabel}</p>
        <Link className="btn btn-primary w-fit" href={`/courses/${course.slug}`}>
          {course.cta}
        </Link>
      </div>
    </div>
  );
}