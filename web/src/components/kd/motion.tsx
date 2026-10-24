"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** `extra`: a working note (lib/scope.ts), hidden unless working notes are shown. */
type ExtraProp = { extra?: boolean };

/** Fades and lifts content in on first render. */
export function FadeIn({ children, delay = 0, className, extra }: { children: React.ReactNode; delay?: number; className?: string } & ExtraProp) {
  return (
    <motion.div
      data-extra={extra || undefined}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Children fade in one after another when the list scrolls into view. */
export function Stagger({ children, className, step = 0.04 }: { children: React.ReactNode; className?: string; step?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: step } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, extra }: { children: React.ReactNode; className?: string } & ExtraProp) {
  return (
    <motion.div
      data-extra={extra || undefined}
      variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** A number that counts up from 0 when it comes into view. */
export function CountUp({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => Math.round(v).toLocaleString("en"));
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration: 1.1, ease: EASE });
    return () => controls.stop();
  }, [inView, mv, value]);
  return (
    <motion.span ref={ref} className={className} aria-label={value.toLocaleString("en")}>
      {text}
    </motion.span>
  );
}

/** A bar that grows to its width when it comes into view. */
export function GrowBar({ pct, className, delay = 0 }: { pct: number; className?: string; delay?: number }) {
  return (
    <motion.span
      initial={{ width: 0 }}
      whileInView={{ width: `${pct}%` }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    />
  );
}
