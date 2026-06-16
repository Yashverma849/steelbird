"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ContactForm from "@/app/components/pages/ContactForm";

export default function ContactPageContent() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const textItems = root.querySelectorAll<HTMLElement>(".contact-text-item");
    const formPanel = root.querySelector<HTMLElement>(".contact-form-panel");
    const formFields = root.querySelectorAll<HTMLElement>(".contact-form-field");
    const asideItems = root.querySelectorAll<HTMLElement>(".contact-aside-item");

    gsap.set(textItems, { opacity: 0, y: 36 });
    gsap.set(formPanel, { opacity: 0, x: -140 });
    gsap.set(formFields, { opacity: 0, y: 28 });
    gsap.set(asideItems, { opacity: 0, x: 140 });

    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    timeline.to(textItems, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.18,
    });

    timeline.to(
      formPanel,
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      "-=0.4",
    );

    timeline.to(
      formFields,
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.1,
      },
      "-=0.65",
    );

    timeline.to(
      asideItems,
      {
        opacity: 1,
        x: 0,
        duration: 0.95,
        stagger: 0.14,
      },
      "-=0.9",
    );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div ref={rootRef}>
      <header className="mb-10 md:mb-14">
        <p className="contact-text-item font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          Contact
        </p>
        <h1 className="contact-text-item mt-2 font-display text-4xl uppercase tracking-[0.02em] text-on-surface md:text-6xl">
          Get In Touch
        </h1>
        <p className="contact-text-item mt-4 max-w-2xl font-body text-lg leading-relaxed text-secondary md:text-xl">
          Reach our customer care team for product support, warranty claims, dealer enquiries, or
          engineering feedback.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="contact-form-panel rounded-md border border-outline/20 bg-surface-container/30 p-6 md:p-8">
          <ContactForm />
        </div>

        <aside className="space-y-8">
          <div className="contact-aside-item">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Toll Free
            </p>
            <p className="mt-2 font-display text-3xl text-primary-container md:text-4xl">
              1800 102 3260
            </p>
          </div>

          <div className="contact-aside-item">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Customer Care
            </p>
            <p className="mt-2 font-body text-lg text-on-surface">
              Steelbird Hi-Tech India Limited
              <br />
              B2B-17, Jasola
              <br />
              New Delhi - 110025, India
            </p>
            <a
              href="mailto:info@steelbirdhelmet.com"
              className="mt-3 inline-block font-body text-lg text-primary-container transition-opacity hover:opacity-80"
            >
              info@steelbirdhelmet.com
            </a>
          </div>

          <div className="contact-aside-item">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Hours
            </p>
            <p className="mt-2 font-body text-lg text-secondary">
              Monday – Saturday, 9:00 AM – 6:00 PM IST
            </p>
          </div>

          <p className="contact-aside-item font-body text-base text-secondary">
            Looking for quick answers? Visit our{" "}
            <Link href="/faq" className="text-primary-container underline-offset-2 hover:underline">
              FAQ page
            </Link>
            .
          </p>
        </aside>
      </div>
    </div>
  );
}
