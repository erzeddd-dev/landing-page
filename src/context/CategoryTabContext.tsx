"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { CATEGORIES, type PriceCategory } from "@/data/pricelist";

function getInitialIndex(): number {
  if (typeof window === "undefined") return 0;
  const tab = new URLSearchParams(window.location.search).get("tab");
  const idx = CATEGORIES.findIndex((c) => c.id === tab);
  return idx >= 0 ? idx : 0;
}

type CategoryTabContextValue = {
  categories: PriceCategory[];
  activeIndex: number;
  direction: number;
  setActiveIndex: (index: number) => void;
};

const CategoryTabContext = createContext<CategoryTabContextValue | null>(null);

export function CategoryTabProvider({ children }: { children: React.ReactNode }) {
  const [activeIndex, setActiveIndexState] = useState(getInitialIndex);
  const [direction, setDirection] = useState(0);

  const setActiveIndex = useCallback((index: number) => {
    setActiveIndexState((prev) => {
      setDirection(index > prev ? 1 : -1);
      return index;
    });
    const url = new URL(window.location.href);
    url.searchParams.set("tab", CATEGORIES[index].id);
    window.history.replaceState({}, "", url);
  }, []);

  const value = useMemo(
    () => ({ categories: CATEGORIES, activeIndex, direction, setActiveIndex }),
    [activeIndex, direction, setActiveIndex]
  );

  return (
    <CategoryTabContext.Provider value={value}>{children}</CategoryTabContext.Provider>
  );
}

export function useCategoryTab() {
  const ctx = useContext(CategoryTabContext);
  if (!ctx) throw new Error("useCategoryTab must be used within CategoryTabProvider");
  return ctx;
}
