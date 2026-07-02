"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { restaurant } from "@/data/menu";

export default function Hero() {
  return (
    <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden sm:min-h-[480px] md:min-h-[520px]">
      <Image
        src={restaurant.heroImage}
        alt=""
        fill
        priority
        className="object-cover scale-105 blur-sm"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-[#0F0F10]/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F10]/40 via-transparent to-[#0F0F10]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center px-6 py-16 text-center"
      >
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/[0.08] bg-[#17181C]/80 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:h-28 sm:w-28">
          <Image
            src={restaurant.logo}
            alt={restaurant.name}
            width={80}
            height={80}
            className="h-full w-full object-contain"
            priority
          />
        </div>

        <h1 className="mb-2 text-4xl font-bold tracking-wide text-[#F5F5F5] sm:text-5xl md:text-6xl">
          {restaurant.name}
        </h1>

        <p className="mb-4 text-xs font-medium tracking-[0.35em] text-primary sm:text-sm">
          {restaurant.subtitle}
        </p>

        <p className="mb-8 max-w-lg text-sm leading-relaxed text-text-secondary sm:text-base">
          {restaurant.description}
        </p>

        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-gradient-to-l from-primary to-transparent sm:w-16" />
          <div className="h-1.5 w-1.5 rotate-45 bg-primary" />
          <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent sm:w-16" />
        </div>
      </motion.div>
    </section>
  );
}
