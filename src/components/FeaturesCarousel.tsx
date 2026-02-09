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
import { featuresSectionContent } from "@/data/sections/features";
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
  content?: typeof featuresSectionContent;
};

export default function FeaturesCarousel({
  content = featuresSectionContent,
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
    <section className="bg-[var(--background)] py-[var(--spacing-xl)] ">
      <div className="mx-auto w-full max-w-6xl px-[var(--spacing-md)] md:px-[var(--spacing-lg)]">
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
      <div
        className="feature-carousel mt-[var(--spacing-md)]  "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`feature-track py-[var(--spacing-xs)]  ${
            isAnimating ? "feature-track-animated" : "feature-track-static"
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
                className={`feature-card group ${
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
                <div className="flex h-12 w-12  items-center justify-center rounded-[var(--radius-md)] bg-[var(--background)]">
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
      <div
        className="feature-controls  "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="feature-control-button"
          onClick={handlePrevious}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          aria-label={content.controls.previousLabel}
        >
          <FaChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          className="feature-control-button"
          onClick={handleNext}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          aria-label={content.controls.nextLabel}
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
