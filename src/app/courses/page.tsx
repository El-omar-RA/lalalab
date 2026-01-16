import { courses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

export const metadata = {
  title: "Courses - LalaLab",
  description: "Online and in-person mycology training.",
};

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold text-text">Courses</h1>
        <p className="mt-3 text-sm text-muted">
          LalaLab courses are the primary experience. Start online or join the
          Denmark, WA intensive.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}