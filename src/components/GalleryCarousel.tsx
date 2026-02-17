"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { GallerySectionContent } from "@/data/sections/gallery";
import { motion, useReducedMotion } from "motion/react";
import {
  getViewportRevealVariants,
  defaultViewport,
} from "@/lib/viewport-reveal";
import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";

type GalleryCarouselProps = {
  content: GallerySectionContent;
  hasControls?: boolean;
  hasPredominateInfo?: boolean;
  itemsPerView?: 3 | 4;
};

export default function GalleryCarousel({
  content,
  hasControls = true,
  hasPredominateInfo = true,
  itemsPerView = 4,
}: GalleryCarouselProps) {
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const totalItems = content.items.length;
  const loopItems = [...content.items, ...content.items];
  const autoAdvanceMs = 1800;
  const transitionMs = 600;

  const getNextIndex = (currentIndex: number) =>
    currentIndex >= totalItems - 1 ? totalItems : currentIndex + 1;

  useEffect(() => {
    if (totalItems === 0) return;
    const interval = window.setInterval(() => {
      if (isPaused) return;
      setIsAnimating(true);
      setActiveIndex((prev) => getNextIndex(prev));
    }, autoAdvanceMs);
    return () => window.clearInterval(interval);
  }, [isPaused, totalItems]);

  useEffect(() => {
    if (!isAnimating || totalItems === 0) return;
    if (activeIndex < totalItems) return;
    const timeout = window.setTimeout(() => {
      setIsAnimating(false);
      setActiveIndex(0);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setIsAnimating(true));
      });
    }, transitionMs);
    return () => window.clearTimeout(timeout);
  }, [activeIndex, isAnimating, totalItems]);

  const handleNext = () => {
    setIsAnimating(true);
    setActiveIndex((prev) => getNextIndex(prev));
  };

  const handlePrevious = () => {
    if (activeIndex === 0) {
      setIsAnimating(false);
      setActiveIndex(totalItems);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsAnimating(true);
          setActiveIndex(totalItems - 1);
        });
      });
      return;
    }
    setIsAnimating(true);
    setActiveIndex((prev) => prev - 1);
  };

  return (
    <section className="flex flex-col items-center bg-[var(--background)] pb-[var(--spacing-lg)]">
      <motion.div
        className={`w-full ${itemsPerView === 3 ? "max-w-[var(--content-max-width)]" : "max-w-[var(--content-wide-max-width)]"} px-[var(--spacing-md)] md:px-[var(--spacing-lg)]`}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
      >
        <motion.div
          variants={itemVariants}
          className="flex mx-[var(--spacing-sm)] border-b border-b-[var(--color-border)]

          dark:border-b-neutral-900  dark:text-neutral-50
          pb-[var(--spacing-sm)] justify-between"
        >
          {hasPredominateInfo && (
            <div className="pt-[var(--spacing-lg)] w-full max-w-[var(--content-max-width)]">
              <div className="flex flex-col gap-[var(--spacing-sm)] text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)] text-start">
                  {content.eyebrow}
                </p>
                <h2 className="text-3xl font-semibold text-start text-[var(--foreground)] md:text-4xl">
                  {content.title}
                </h2>
                <p className="text-start max-w-2xl text-[var(--foreground)] md:text-lg">
                  {content.subtitle}
                </p>
              </div>
            </div>
          )}
          {hasControls && (
            <div
              className="mt-[var(--spacing-lg)] flex items-center justify-center gap-[var(--spacing-sm)]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] [border:var(--border)] bg-[var(--background-elevated)] text-[var(--foreground)] transition-colors hover:border-[var(--color-primary)]"
                onClick={handlePrevious}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
                aria-label={content.controls.previousLabel}
              >
                <FaChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] [border:var(--border)] bg-[var(--background-elevated)] text-[var(--foreground)] transition-colors hover:border-[var(--color-primary)]"
                onClick={handleNext}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
                aria-label={content.controls.nextLabel}
              >
                <FaChevronRight aria-hidden="true" />
              </button>
            </div>
          )}
        </motion.div>
        <motion.div
          variants={itemVariants}
          className={`gallery-carousel-layout mt-[var(--spacing-md)] ${itemsPerView === 3 ? "[--gallery-items-per-view:3]" : "[--gallery-items-per-view:4]"}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`gallery-track-layout py-[var(--spacing-xs)] ${isAnimating ? "transition-transform duration-[600ms] ease-out" : "transition-none"}`}
            style={
              {
                "--gallery-carousel-index": activeIndex,
              } as CSSProperties
            }
          >
            {loopItems.map((item, index) => {
              const isDuplicate = index >= totalItems;
              return (
                <article
                  key={`${item.src}-${index}`}
                  className="gallery-item-layout"
                  aria-hidden={isDuplicate}
                >
                  <div className="gallery-item-frame relative w-full">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <a
                    href="/about"
                    className="btn-secondary w-full text-center py-[var(--spacing-xs)] text-sm"
                  >
                    <span className="btn-label">{content.exploreLabel}</span>
                  </a>
                </article>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
