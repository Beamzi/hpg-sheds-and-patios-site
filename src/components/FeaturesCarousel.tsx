"use client";

import {
  FaChevronLeft,
  FaChevronRight,
  FaHammer,
  FaHome,
  FaPencilRuler,
  FaShieldAlt,
  FaTree,
  FaTruck,
} from "react-icons/fa";
import type { FeaturesSectionContent } from "@/data/sections/features";
import { useEffect, useState, type CSSProperties } from "react";
import styles from "./FeaturesCarousel.module.css";

const iconMap = {
  durableBuilds: FaHammer,
  customDesign: FaPencilRuler,
  backyardReady: FaTree,
  storageSolutions: FaHome,
  weatherReady: FaShieldAlt,
  deliveredReady: FaTruck,
};

type FeaturesCarouselProps = {
  content: FeaturesSectionContent;
  hasControls?: boolean;
  hasPredominateInfo?: boolean;
  /** Number of cards visible at once (1/3 or 1/4 of container width). Responsive breakpoints still apply (2 at 1200px, 1 at 768px). */
  cardsPerView?: 3 | 4;
};

export default function FeaturesCarousel({
  content,
  hasControls,
  hasPredominateInfo,
  cardsPerView = 3,
}: FeaturesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const totalItems = content.items.length;
  const loopItems = [...content.items, ...content.items];
  const autoAdvanceMs = 2000;
  const transitionMs = 1000;

  const getNextIndex = (currentIndex: number) =>
    currentIndex >= totalItems - 1 ? totalItems : currentIndex + 1;

  useEffect(() => {
    if (totalItems === 0) {
      return;
    }

    const interval = window.setInterval(() => {
      if (isPaused) {
        return;
      }
      setIsAnimating(true);
      setActiveIndex((prevIndex) => getNextIndex(prevIndex));
    }, autoAdvanceMs);

    return () => window.clearInterval(interval);
  }, [isPaused, totalItems]);

  useEffect(() => {
    if (!isAnimating || totalItems === 0) {
      return;
    }

    if (activeIndex < totalItems) {
      return;
    }

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
    setActiveIndex((prevIndex) => getNextIndex(prevIndex));
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
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <section className="bg-[var(--background)]">
      <div
        className={`mx-auto w-full ${cardsPerView === 3 ? "max-w-[var(--content-max-width)]" : "max-w-[var(--content-wide-max-width)]"} px-[var(--spacing-md)] md:px-[var(--spacing-lg)]`}
      >
        <div className="flex max-w-[var(--content-max-width)] mx-auto">
          {hasPredominateInfo && (
            <>
              <div className="mx-auto w-full max-w-[var(--content-max-width)]">
                <div className="flex flex-col gap-[var(--spacing-sm)] text-center">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                    {content.eyebrow}
                  </p>
                  <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
                    {content.title}
                  </h2>
                  <p className="mx-auto max-w-2xl text-base text-[var(--foreground)] md:text-lg">
                    {content.subtitle}
                  </p>
                </div>
              </div>
            </>
          )}
          {hasControls && (
            <div
              className={styles.controls}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <button
                type="button"
                className={styles.controlButton}
                onClick={handlePrevious}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
                aria-label={content.controls.previousLabel}
              >
                <FaChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                className={styles.controlButton}
                onClick={handleNext}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
                aria-label={content.controls.nextLabel}
              >
                <FaChevronRight aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
        <div
          className={`${styles.carousel} mt-[var(--spacing-md)]`}
          style={{ "--feature-cards-per-view": cardsPerView } as CSSProperties}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`${styles.track} py-[var(--spacing-xs)] ${
              isAnimating ? styles.trackAnimated : styles.trackStatic
            }`}
            style={
              {
                "--feature-carousel-index": activeIndex,
              } as CSSProperties
            }
          >
            {loopItems.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? FaHome;
              const isDuplicate = index >= totalItems;

              return (
                <article
                  key={`${item.title}-${index}`}
                  className={`${styles.card} group ${
                    hoveredIndex === index ? "card-hovered" : ""
                  }`}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                  }}
                  aria-hidden={isDuplicate}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--background)]">
                    <Icon className="text-2xl text-[var(--color-primary)] transition-transform duration-200 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
