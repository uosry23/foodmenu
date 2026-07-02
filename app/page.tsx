"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import CategoryTabs from "@/components/CategoryTabs";
import MenuGrid from "@/components/MenuGrid";
import Footer from "@/components/Footer";
import type { CategoryId } from "@/types";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  return (
    <main className="min-h-screen bg-[#0F0F10]">
      <Hero />
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <MenuGrid activeCategory={activeCategory} />
      <Footer />
    </main>
  );
}
