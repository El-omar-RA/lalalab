import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact - LalaLab",
  description: "Reach the LalaLab team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold text-text">Contact</h1>
          <p className="mt-3 text-sm text-muted">
            Tell us about your grow goals, lab size, or course questions. We
            respond within 2 business days.
          </p>
          <div className="mt-8 space-y-3 text-sm text-muted">
            <p>General inquiries: hello@lalalab.example</p>
            <p>Course support: courses@lalalab.example</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}