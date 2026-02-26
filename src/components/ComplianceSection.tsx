"use client";

import {
  FaBalanceScale,
  FaSolarPanel,
  FaClipboardCheck,
  FaDraftingCompass,
  FaMapMarkedAlt,
  FaCertificate,
} from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";
import {
  getViewportRevealVariants,
  defaultViewport,
} from "@/lib/viewport-reveal";
import { homeContent } from "@/data/pages/home";

const iconMap = {
  australianStandards: FaDraftingCompass,
  solarReady: FaSolarPanel,
  nccAligned: FaClipboardCheck,
  designCompliance: FaMapMarkedAlt,
  engineeringCert: FaCertificate,
};

export default function ComplianceSection() {
  const { compliance } = homeContent;
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--background-elevated)] py-[var(--spacing-xl)]">
      <div className="mx-auto w-full max-w-[var(--content-max-width)] px-[var(--spacing-md)] md:px-[var(--spacing-lg)]">
        <motion.div
          className="grid grid-cols-1 gap-[var(--spacing-lg)] text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-[var(--spacing-md)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-[var(--spacing-sm)] text-center sm:col-span-2 md:col-span-3 lg:col-span-5"
          >
            <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
              {compliance.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[var(--color-muted)] md:text-lg">
              {compliance.subtitle}
            </p>
          </motion.div>
          {compliance.items.map((item, index) => {
            const Icon =
              iconMap[item.icon as keyof typeof iconMap] ?? FaDraftingCompass;

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className={`flex flex-col items-center gap-[var(--spacing-xs)] px-[var(--spacing-sm)] lg:border-l lg:border-[var(--color-border)] lg:px-[var(--spacing-md)] ${index === 0 ? "lg:border-l-0" : ""}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-[var(--border)] bg-[var(--background)]">
                  <Icon className="text-xl text-[var(--color-primary)]" />
                </div>
                <h3 className="text-base font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
