"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-form-success rounded-md border border-primary-container/40 bg-surface-container p-6">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary">
          Message Sent
        </p>
        <p className="mt-2 font-body text-base text-on-surface">
          Thank you for reaching out. Our customer care team will respond within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="contact-form-field">
          <label htmlFor="contact-name" className="mb-1.5 block font-mono text-xs font-semibold uppercase tracking-wider text-outline">
            Full Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className="w-full rounded border border-outline/40 bg-surface-container px-4 py-3 font-body text-base text-on-surface outline-none transition-colors focus:border-primary"
          />
        </div>
        <div className="contact-form-field">
          <label htmlFor="contact-email" className="mb-1.5 block font-mono text-xs font-semibold uppercase tracking-wider text-outline">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="w-full rounded border border-outline/40 bg-surface-container px-4 py-3 font-body text-base text-on-surface outline-none transition-colors focus:border-primary"
          />
        </div>
      </div>

      <div className="contact-form-field">
        <label htmlFor="contact-subject" className="mb-1.5 block font-mono text-xs font-semibold uppercase tracking-wider text-outline">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          className="w-full rounded border border-outline/40 bg-surface-container px-4 py-3 font-body text-base text-on-surface outline-none transition-colors focus:border-primary"
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor="contact-message" className="mb-1.5 block font-mono text-xs font-semibold uppercase tracking-wider text-outline">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className="w-full resize-y rounded border border-outline/40 bg-surface-container px-4 py-3 font-body text-base text-on-surface outline-none transition-colors focus:border-primary"
        />
      </div>

      <button type="submit" className="contact-form-field cta-button px-8 py-3 text-sm">
        Send Message
      </button>
    </form>
  );
}
