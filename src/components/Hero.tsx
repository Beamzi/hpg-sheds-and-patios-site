"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { homeContent } from "@/data/pages/home";

export default function Hero() {
  const { hero } = homeContent;
  const prefersReducedMotion = useReducedMotion();
  const itemOffset = prefersReducedMotion ? 0 : 16;
  const itemDuration = prefersReducedMotion ? 0 : 0.5;
  const itemStagger = prefersReducedMotion ? 0 : 0.08;

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: itemStagger,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: itemOffset },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: itemDuration },
    },
  };

  return (
    <section className="hero-on-image relative min-h-[calc(80vh-var(--navbar-height))] overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-0">
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
        className="relative mx-auto flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-[var(--spacing-md)] px-[var(--spacing-md)] py-[var(--spacing-lg)] text-center md:items-start md:px-[var(--spacing-lg)] md:py-[var(--spacing-xl)] md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]"
          variants={itemVariants}
        >
          {hero.eyebrow}
        </motion.p>
        <motion.h1
          className="text-4xl font-semibold text-[var(--foreground)] md:text-5xl"
          variants={itemVariants}
        >
          {hero.title}
        </motion.h1>
        <motion.p
          className="max-w-2xl text-base text-[var(--foreground)] md:text-lg"
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
            {hero.cta.label}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
