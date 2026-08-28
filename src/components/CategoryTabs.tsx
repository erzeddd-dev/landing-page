"use client";

import { useCategoryTab } from "@/context/CategoryTabContext";

export default function CategoryTabs() {
  const { categories, activeIndex, setActiveIndex } = useCategoryTab();

  return (
    <nav className="flex gap-1 overflow-x-auto no-scrollbar">
      {categories.map((cat, i) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => setActiveIndex(i)}
          className={`shrink-0 px-3 py-1.5 text-[13px] font-medium rounded-full whitespace-nowrap transition-colors ${
            i === activeIndex
              ? "bg-white text-black"
              : "text-white/55 hover:text-white"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </nav>
  );
}
