"use client";

// Visual effects shared across pages: the drifting aurora behind the app, cards with a glow that
// follows the pointer, topic icon tiles and progress rings. All of them respect reduced motion.
import { motion } from "motion/react";
import { useRef } from "react";
import { topicStyle } from "@/lib/topic-style";
import { cn } from "@/lib/utils";

/** Soft colour blobs drifting behind everything, in the current theme's glow colours. */
export function AuroraBackground() {
  return (
    <div aria-hidden className="kd-aurora pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <span className="kd-blob kd-blob-1" />
      <span className="kd-blob kd-blob-2" />
      <span className="kd-blob kd-blob-3" />
      <span className="kd-grid absolute inset-0" />
    </div>
  );
}

/** A card with a radial glow that follows the pointer and a gradient edge on hover. */
export function SpotlightCard({
  children,
  className,
  hue,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** Glow hue (OKLCH); defaults to the theme's primary colour. */
  hue?: number;
  as?: "div" | "section" | "article" | "li";
}) {
  const ref = useRef<HTMLElement>(null);
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      onPointerMove={(e: React.PointerEvent<HTMLElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      style={hue !== undefined ? ({ "--spot": `oklch(0.72 0.17 ${hue} / 0.22)`, "--edge": `oklch(0.72 0.17 ${hue} / 0.55)` } as React.CSSProperties) : undefined}
      className={cn("kd-spotlight relative isolate overflow-hidden rounded-2xl border bg-card/80 backdrop-blur-sm", className)}
    >
      {children}
    </Tag>
  );
}

/** The topic's icon on a glowing gradient tile. */
export function TopicIcon({ group, size = "md", className }: { group: string | null | undefined; size?: "sm" | "md" | "lg"; className?: string }) {
  const { icon: Icon, hue } = topicStyle(group);
  const box = { sm: "size-8 rounded-lg", md: "size-11 rounded-xl", lg: "size-14 rounded-2xl" }[size];
  const ico = { sm: "size-4", md: "size-5", lg: "size-7" }[size];
  return (
    <span
      aria-hidden
      className={cn("grid shrink-0 place-items-center text-white shadow-lg", box, className)}
      style={{
        background: `linear-gradient(135deg, oklch(0.74 0.16 ${hue}), oklch(0.56 0.2 ${(hue + 35) % 360}))`,
        boxShadow: `0 6px 20px -6px oklch(0.65 0.2 ${hue} / 0.6), inset 0 1px 0 oklch(1 0 0 / 0.35)`,
      }}
    >
      <Icon className={ico} strokeWidth={2.2} />
    </span>
  );
}

/** A ring that fills to `pct` (0–100), drawn when it scrolls into view. */
export function ProgressRing({
  pct,
  size = 44,
  stroke = 5,
  hue,
  label,
  className,
}: {
  pct: number;
  size?: number;
  stroke?: number;
  hue?: number;
  label?: React.ReactNode;
  className?: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const color = hue !== undefined ? `oklch(0.68 0.17 ${hue})` : "var(--primary)";
  return (
    <span className={cn("relative inline-grid shrink-0 place-items-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--muted)" strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * (1 - pct / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </svg>
      {label !== undefined && <span className="absolute text-[10px] font-semibold tabular-nums">{label}</span>}
    </span>
  );
}
