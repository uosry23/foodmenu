"use client";

import { meals } from "@/data/menu";
import type { CategoryId } from "@/types";
import MenuCard from "./MenuCard";

interface MenuGridProps {
  activeCategory: CategoryId;
}

export default function MenuGrid({ activeCategory }: MenuGridProps) {
  const filteredMeals =
    activeCategory === "all"
      ? meals
      : meals.filter((meal) => meal.category === activeCategory);

  return (
    <section className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {filteredMeals.length === 0 ? (
        <p className="py-16 text-center text-text-secondary">
          لا توجد أصناف في هذا التصنيف حالياً
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-6 lg:gap-8">
          {filteredMeals.map((meal, index) => (
            <MenuCard key={meal.id} meal={meal} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
