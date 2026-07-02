"use client";

import { categories } from "@/data/menu";
import type { CategoryId } from "@/types";

interface CategoryTabsProps {
  activeCategory: CategoryId;
  onCategoryChange: (category: CategoryId) => void;
}

export default function CategoryTabs({
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <nav
      aria-label="تصنيفات القائمة"
      className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0F0F10]/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onCategoryChange(category.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-[#0F0F10] shadow-[0_4px_16px_rgba(212,175,55,0.25)]"
                    : "border border-white/[0.08] bg-[#17181C] text-[#F5F5F5] hover:border-primary/30 hover:text-primary"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
