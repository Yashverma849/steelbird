"use client";

import { useState, type FormEvent } from "react";

export default function FooterNewsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="mt-3 font-body text-[14px] text-primary-container [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
        You&apos;re subscribed. Watch your inbox for updates.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-stretch">
      <label htmlFor="footer-newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-newsletter-email"
        name="email"
        type="email"
        required
        placeholder="Enter your email id"
        className="w-full flex-1 rounded border border-outline/40 bg-surface-container/90 px-3 py-2 font-body text-[14px] text-on-surface outline-none transition-colors placeholder:text-outline focus:border-primary [text-shadow:none]"
      />
      <button type="submit" className="cta-button shrink-0 px-4 py-2 text-[12px]">
        Subscribe
      </button>
    </form>
  );
}
