"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Clock, Flame, Star } from "lucide-react";
import type { Meal } from "@/types";

interface MenuCardProps {
  meal: Meal;
  index: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`التقييم ${rating} من 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < Math.floor(rating)
              ? "fill-primary text-primary"
              : i < rating
                ? "fill-primary/50 text-primary/50"
                : "fill-none text-white/20"
          }`}
        />
      ))}
      <span className="mr-1 text-xs text-text-secondary">{rating}</span>
    </div>
  );
}

export default function MenuCard({ meal, index }: MenuCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#17181C] shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-[6px]"
    >
      <div className="relative aspect-[5/4] overflow-hidden sm:aspect-[4/3]">
        <Image
          src={meal.image}
          alt={meal.name}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {meal.badge && (
          <span
            className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold ${
              meal.badge === "new"
                ? "bg-primary text-[#0F0F10]"
                : "bg-[#0F0F10]/80 text-primary backdrop-blur-sm"
            }`}
          >
            {meal.badge === "new" ? "جديد" : "الأكثر طلباً"}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <StarRating rating={meal.rating} />

        <h3 className="mt-3 text-lg font-bold text-[#F5F5F5] sm:text-xl">
          {meal.name}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
          {meal.description}
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
            {meal.price} ر.س
          </span>

          <div className="flex flex-wrap items-center gap-3 text-xs text-text-secondary">
            <span className="flex items-center gap-1">
              <Flame className="h-3.5 w-3.5 text-primary/70" />
              {meal.calories} سعرة
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-primary/70" />
              {meal.prepTime} د
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.05] py-2.5 text-sm text-text-secondary transition duration-300 hover:border-primary/30 hover:text-primary"
        >
          المكونات
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>

        <motion.div
          initial={false}
          animate={{
            height: expanded ? "auto" : 0,
            opacity: expanded ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <ul className="mt-3 flex flex-wrap gap-2 border-t border-white/[0.06] pt-3">
            {meal.ingredients.map((ingredient) => (
              <li
                key={ingredient}
                className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-text-secondary"
              >
                {ingredient}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.article>
  );
}
