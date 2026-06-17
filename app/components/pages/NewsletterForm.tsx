"use client";

import { useEffect, useState, type FormEvent } from "react";

export default function NewsletterForm() {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (!mounted) {
    return (
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch" aria-hidden="true">
        <div className="h-[50px] w-full flex-1 rounded border border-outline/40 bg-surface-container" />
        <div className="cta-button h-[50px] shrink-0 px-8 py-3 text-sm opacity-0 sm:w-[148px]" />
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-primary-container/40 bg-surface-container p-6 text-center">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary">
          You&apos;re Subscribed
        </p>
        <p className="mt-2 font-body text-base text-on-surface">
          Watch your inbox for product drops, safety updates, and exclusive Steelbird offers.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
      <label htmlFor="newsletter-page-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-page-email"
        name="email"
        type="email"
        required
        placeholder="Enter your email address"
        autoComplete="email"
        className="w-full flex-1 rounded border border-outline/40 bg-surface-container px-4 py-3 font-body text-base text-on-surface outline-none transition-colors placeholder:text-outline focus:border-primary"
      />
      <button type="submit" className="cta-button shrink-0 px-8 py-3 text-sm">
        Subscribe
      </button>
    </form>
  );
}
