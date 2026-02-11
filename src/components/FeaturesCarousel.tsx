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
  cardsPerView = 4,
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
    <section className="flex flex-col items-center bg-[var(--background)] pb-[var(--spacing-lg)]">
      <div
        className={`w-full ${cardsPerView === 3 ? "max-w-[var(--content-max-width)]" : "max-w-[var(--content-wide-max-width)]"} px-[var(--spacing-md)] md:px-[var(--spacing-lg)]`}
      >
        <div className="flex border-b-1 mx-[var(--spacing-sm)] border-b-[var(--color-border)] pb-[var(--spacing-sm)]   justify-between  ">
          {hasPredominateInfo && (
            <>
              <div className=" pt-[var(--spacing-lg)] w-full max-w-[var(--content-max-width)]">
                <div className="flex  flex-col  gap-[var(--spacing-sm)] text-center">
                  <p className="text-sm text-start font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                    {content.eyebrow}
                  </p>
                  <h2 className="text-3xl  font-semibold text-start text-[var(--foreground)] md:text-4xl">
                    {content.title}
                  </h2>
                  <p className=" text-start max-w-2xl text-[var(--foreground)] md:text-lg">
                    {content.subtitle}
                  </p>
                </div>
              </div>
            </>
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
        </div>
        <div
          className={`feature-carousel-layout mt-[var(--spacing-md)] ${cardsPerView === 3 ? "[--feature-cards-per-view:3]" : "[--feature-cards-per-view:4]"}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`feature-track-layout py-[var(--spacing-xs)] ${isAnimating ? "transition-transform duration-500 ease-out" : "transition-none"}`}
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
                  className={`feature-card-layout flex flex-col gap-[var(--spacing-sm)] bg-[var(--background-elevated)] [border:var(--border)] p-[var(--spacing-lg)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] group ${hoveredIndex === index ? "card-hovered" : ""}`}
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
