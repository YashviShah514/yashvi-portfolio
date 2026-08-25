"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function FadeIn({ children, delay = 0, className, as = "div" }: FadeInProps) {
  const transition = { duration: 0.6, delay, ease: "easeOut" as const };
  const viewport = { once: true, margin: "-80px" } as const;

  if (as === "li") {
    return (
      <motion.li
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={variants}
        transition={transition}
      >
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
