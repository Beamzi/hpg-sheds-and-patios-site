"use client";

import SplitImageText from "@/components/SplitImageText";
import { aboutContent } from "@/data/pages/about";
import { motion, useReducedMotion } from "motion/react";
import {
  getViewportRevealVariants,
  defaultViewport,
} from "@/lib/viewport-reveal";

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);

  return (
    <motion.div
      className="flex flex-col"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
    >
      {aboutContent.sections.map((section, index) => {
        const { id, ...splitProps } = section;

        return (
          <motion.div key={id} variants={itemVariants}>
            <SplitImageText
              {...splitProps}
              imagePriority={index === 0}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
