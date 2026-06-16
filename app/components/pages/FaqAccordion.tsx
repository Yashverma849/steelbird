"use client";

import { useState } from "react";
import type { FaqItem } from "@/app/data/faq";

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="mx-auto flex w-full max-w-[900px] flex-col gap-3">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="faq-card-item overflow-hidden rounded-md border border-outline/20 bg-surface-container/40"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:text-primary"
            >
              <span className="font-body text-base font-semibold text-on-surface md:text-lg">
                {item.question}
              </span>
              <span
                className={`shrink-0 font-mono text-xl leading-none text-primary-container transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen ? (
              <div className="px-5 pb-5">
                <p className="max-w-3xl font-body text-base leading-relaxed text-secondary">
                  {item.answer}
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
