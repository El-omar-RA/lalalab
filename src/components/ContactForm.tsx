"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (!values.name.trim()) nextErrors.name = "Name is required.";
    if (!values.email.trim()) nextErrors.email = "Email is required.";
    if (
      values.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.message.trim()) nextErrors.message = "Message is required.";
    return nextErrors;
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <form onSubmit={onSubmit} className="glass rounded-2xl p-6">
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-text">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="mt-2 w-full rounded-xl border border-border bg-[rgba(6,10,20,0.6)] px-4 py-2 text-sm text-text"
            value={values.name}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-xs text-accent">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-text">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-2 w-full rounded-xl border border-border bg-[rgba(6,10,20,0.6)] px-4 py-2 text-sm text-text"
            value={values.email}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-xs text-accent">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-text">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-2 w-full rounded-xl border border-border bg-[rgba(6,10,20,0.6)] px-4 py-2 text-sm text-text"
            value={values.message}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, message: event.target.value }))
            }
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            required
          />
          {errors.message ? (
            <p id="message-error" className="mt-2 text-xs text-accent">
              {errors.message}
            </p>
          ) : null}
        </div>
        <button className="btn btn-primary" type="submit">
          Send Message
        </button>
        {submitted ? (
          <p role="status" className="text-sm text-secondary">
            Thanks! We will reply within 2 business days.
          </p>
        ) : null}
      </div>
    </form>
  );
}