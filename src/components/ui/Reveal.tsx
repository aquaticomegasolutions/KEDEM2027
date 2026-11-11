import { motion } from "motion/react";
import type { ReactNode } from "react";

import { useReducedMotionSafe } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article" | "header";
};

/** Scroll reveal. Motion respects prefers-reduced-motion via MotionConfig in the root. */
export function Reveal({ children, className, delay = 0, y = 28 }: Props) {
  const reduced = useReducedMotionSafe();
  return (
    <motion.div
      data-reveal=""
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduced ? 0 : 0.75, delay: reduced ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
