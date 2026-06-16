"use client";

import { useState } from "react";
import { filterTabs, type FilterTab } from "@/app/data/helmets";

function IconBolt() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
    </svg>
  );
}

export default function FilterTabs() {
  const [activeTab, setActiveTab] = useState<FilterTab>(filterTabs[0]);

  return (
    <div className="flex flex-wrap gap-3">
      {filterTabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-1.5 border px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider transition-colors ${
              isActive
                ? "border-primary-container bg-primary-container text-on-primary-container"
                : "ghost-border text-on-surface hover:border-primary/40"
            }`}
          >
            {isActive && <IconBolt />}
            {tab}
          </button>
        );
      })}
    </div>
  );
}
