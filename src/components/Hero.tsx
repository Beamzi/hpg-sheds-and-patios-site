"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { homeContent } from "@/data/pages/home";
import {
  getViewportRevealVariants,
  defaultViewport,
} from "@/lib/viewport-reveal";

export default function Hero() {
  const { hero } = homeContent;
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);

  return (
    <section className="hero-on-image relative flex min-h-[calc(98vh-var(--navbar-height))] flex-col overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--hero-image-overlay)]" />
      </div>
      <motion.div
        className="relative z-[1] mx-auto flex min-h-0 flex-1 w-full max-w-[var(--content-max-width)] flex-col items-center justify-center gap-[var(--spacing-md)] px-[var(--spacing-md)] py-[var(--spacing-lg)] text-center md:items-start md:px-[var(--spacing-lg)] md:py-[var(--spacing-xl)] md:text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
      >
        {/* <motion.p
          className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]"
          variants={itemVariants}
        >
          {hero.eyebrow}
        </motion.p> */}
        <motion.h1
          className="text-4xl font-semibold text-[var(--foreground)] md:text-5xl"
          variants={itemVariants}
        >
          {hero.title}
        </motion.h1>
        <motion.p
          className="hero-subtitle max-w-2xl text-base text-[var(--foreground)] md:text-lg"
          variants={itemVariants}
        >
          {hero.subtitle}
        </motion.p>
        <motion.div
          className="flex w-full flex-wrap justify-center gap-[var(--spacing-sm)] md:w-auto md:justify-start"
          variants={itemVariants}
        >
          <Link
            className="btn-primary w-full text-center sm:w-auto"
            href={hero.cta.href}
          >
            <span className="btn-label">{hero.cta.label}</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
