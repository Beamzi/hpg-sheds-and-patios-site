"use client";

import SplitImageText from "@/components/SplitImageText";
import { contactSectionContent } from "@/data/sections/contact";
import {
  FaBuilding,
  FaEnvelope,
  FaIdCard,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";
import {
  getViewportRevealVariants,
  defaultViewport,
} from "@/lib/viewport-reveal";

const contactIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Phone: FaPhone,
  Email: FaEnvelope,
  Location: FaMapMarkerAlt,
  "Business name": FaBuilding,
  ABN: FaIdCard,
  "QBCC licence": FaIdCard,
};

export default function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);

  const contactCards = (
    <div className="grid gap-[var(--spacing-md)]">
      <div className="card">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          {contactSectionContent.contactDetails.title}
        </h3>
        <ul className="mt-[var(--spacing-sm)] grid gap-[var(--spacing-md)] text-sm text-[var(--foreground)]">
          {contactSectionContent.contactDetails.items.map((item) => {
            const Icon = contactIconMap[item.label];
            return (
              <li
                key={`${item.label}-${item.value}`}
                className="flex flex-col gap-[var(--spacing-xs)]"
              >
                <div className="flex items-center gap-[var(--spacing-xs)] text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  {Icon ? (
                    <Icon className="shrink-0 text-[var(--color-primary)]" />
                  ) : null}
                  <span>{item.label}</span>
                </div>
                {item.href ? (
                  <a
                    className="text-[var(--color-primary)] transition-colors hover:underline"
                    href={item.href}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p>{item.value}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          {contactSectionContent.businessDetails.title}
        </h3>
        <ul className="mt-[var(--spacing-sm)] grid gap-[var(--spacing-md)] text-sm text-[var(--foreground)]">
          {contactSectionContent.businessDetails.items.map((item) => {
            const Icon = contactIconMap[item.label];
            return (
              <li
                key={`${item.label}-${item.value}`}
                className="flex flex-col gap-[var(--spacing-xs)]"
              >
                <div className="flex items-center gap-[var(--spacing-xs)] text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  {Icon ? (
                    <Icon className="shrink-0 text-[var(--color-primary)]" />
                  ) : null}
                  <span>{item.label}</span>
                </div>
                <p>{item.value}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
    >
      <motion.div variants={itemVariants}>
        <SplitImageText
          eyebrow={contactSectionContent.eyebrow}
          title={contactSectionContent.title}
          description={contactSectionContent.subtitle}
          media={contactCards}
          imagePosition="right"
          contentBackgroundImage={contactSectionContent.contentBackgroundImage}
        />
      </motion.div>
    </motion.div>
  );
}
