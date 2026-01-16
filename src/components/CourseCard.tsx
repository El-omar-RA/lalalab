import Link from "next/link";
import type { Course } from "@/lib/types";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="glass rounded-2xl border border-border/60 p-6 transition hover:border-accent/50">
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