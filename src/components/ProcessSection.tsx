"use client";

import { Fragment, useEffect, useRef, useState } from "react";

import {
  FaArrowRight,
  FaChevronDown,
  FaChevronRight,
  FaClipboardCheck,
  FaDraftingCompass,
  FaPaperPlane,
  FaTruck,
} from "react-icons/fa";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { homeContent } from "@/data/pages/home";
import {
  getViewportRevealVariants,
  defaultViewport,
} from "@/lib/viewport-reveal";

const iconMap = {
  design: FaDraftingCompass,
  submit: FaPaperPlane,
  review: FaClipboardCheck,
  delivery: FaTruck,
};

const STEP_DURATION_MS = 1500;
const MARQUEE_X_DASHED: [string, string] = ["0", "-50%"];
const MARQUEE_X_CHEVRON: [string, string] = ["-50%", "0%"];

export default function ProcessSection() {
  const { process } = homeContent;
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);
  const sectionRef = useRef<HTMLElement>(null);
  const mountedRef = useRef(true);
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (mountedRef.current) setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) {
      setActiveIndex(-1);
      return;
    }
    const stepCount = process.steps.length;
    let step = 0;
    setActiveIndex(0);
    const id = setInterval(() => {
      if (!mountedRef.current) return;
      step = (step + 1) % stepCount;
      setActiveIndex(step);
    }, STEP_DURATION_MS);
    return () => clearInterval(id);
  }, [isInView, process.steps.length]);

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--background)]  py-[var(--spacing-xl)]"
    >
      <div className="mx-auto w-full  max-w-[var(--content-max-width)] px-[var(--spacing-md)] md:px-[var(--spacing-lg)]">
        <motion.div
          className="flex flex-col gap-[var(--spacing-md)] lg:grid lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-[var(--spacing-sm)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-[var(--spacing-sm)] text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              {process.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
              {process.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[var(--foreground)] md:text-lg">
              {process.subtitle}
            </p>
          </motion.div>

          <div className="relative flex flex-col gap-[var(--spacing-md)] lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-[var(--spacing-sm)]">
            {process.steps.map((step, index) => {
              const Icon =
                iconMap[step.icon as keyof typeof iconMap] ?? FaTruck;
              const isLast = index === process.steps.length - 1;
              const isActive = activeIndex === index;

              return (
                <Fragment key={step.title}>
                  <motion.div
                    variants={itemVariants}
                    className="card flex min-h-0 relative z-10 flex-col gap-[var(--spacing-sm)] !border-2 duration-500 ease-in-out"
                    style={{
                      borderColor: isActive
                        ? "var(--color-primary)"
                        : "transparent",
                      boxShadow: `var(--shadow-md), 0 0 0 var(--spacing-xs) var(--background)`,
                    }}
                  >
                    <div className="flex items-center justify-between gap-[var(--spacing-sm)]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--background)]">
                        <motion.span
                          className="inline-flex items-center justify-center text-[var(--color-primary)]"
                          animate={
                            isActive
                              ? {
                                  scale: [1, 1.2, 1],
                                  color: [
                                    "var(--color-primary)",
                                    "#ffffff",
                                    "var(--color-primary)",
                                  ],
                                }
                              : {
                                  scale: 1,
                                  color: "var(--color-primary)",
                                }
                          }
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                          }}
                        >
                          <Icon className="text-2xl text-current" />
                        </motion.span>
                      </div>
                      <span className="rounded-[var(--radius-md)] bg-[var(--background)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)]">
                      {step.description}
                    </p>
                  </motion.div>
                  {!isLast && (
                    <div className="hidden w-10 items-center justify-center text-[var(--color-muted)] lg:flex">
                      {/* <FaArrowRight className="text-2xl" /> */}
                    </div>
                  )}
                </Fragment>
              );
            })}

            {/* dashed + chevron marquees — last stagger item */}
            <motion.div
              variants={itemVariants}
              className="absolute inset-0 pointer-events-none z-[9]"
              aria-hidden
            >
              <div className="absolute left-0 right-0 top-[57%] h-0.5 overflow-hidden opacity-50">
                <motion.div
                  className="flex w-[200%] min-h-[2px]"
                  animate={{ x: MARQUEE_X_DASHED }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <span className="block w-1/2 shrink-0 border-t-2 border-dashed border-[var(--color-border-dashed)]" />
                  <span className="block w-1/2 shrink-0 border-t-2 border-dashed border-[var(--color-border-dashed)]" />
                </motion.div>
              </div>
              <div className="absolute left-0 right-0 top-[43%] h-0.5 overflow-hidden opacity-50 z-[9] pointer-events-none">
                <motion.div
                  className="flex w-[200%] min-h-[2px]"
                  animate={{ x: MARQUEE_X_DASHED }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <span className="block w-1/2 shrink-0 border-t-2 border-dashed border-[var(--color-border-dashed)]" />
                  <span className="block w-1/2 shrink-0 border-t-2 border-dashed border-[var(--color-border-dashed)]" />
                </motion.div>
              </div>
              {/* chevron marquee between the two dashed lines */}
              <div className="absolute left-0 right-0 top-[50%] h-6 -translate-y-1/2 overflow-hidden opacity-50 z-[9] pointer-events-none">
                <motion.div
                  className="flex w-[200%] min-h-full items-center"
                  animate={{ x: MARQUEE_X_CHEVRON }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {[1, 2].map((copy) => (
                    <span
                      key={copy}
                      className="flex min-w-[50%] shrink-0 flex-nowrap items-center gap-[var(--spacing-md)]"
                    >
                      {Array.from({ length: 35 }).map((_, i) => (
                        <FaChevronRight
                          key={i}
                          className="shrink-0 text-sm text-[var(--foreground)]"
                        />
                      ))}
                      {/* last chevron + spacer in one group so no extra gap at seam */}
                      <span className="flex shrink-0 items-center gap-0">
                        <FaChevronRight className="shrink-0 text-sm text-[var(--foreground)]" />
                        <span
                          className="w-[var(--spacing-md)] shrink-0"
                          aria-hidden
                        />
                      </span>
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="py-[var(--spacing-xm)]"
          >
            <div>
              <FaChevronDown className="mb-4 w-10 h-10 mx-auto fill-[var(--color-background-elevated-high)]" />
            </div>
            <Link
              className="btn-secondary mx-auto block w-[14rem] min-w-[14rem] text-center"
              href={process.cta.href}
            >
              <span className="btn-label">{process.cta.label}</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
