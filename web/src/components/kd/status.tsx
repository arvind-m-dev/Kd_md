import { CircleAlert, CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "clear" | "needs-clarity";

/** Status is never colour-only: icon + label (badge) or icon + accessible name (dot). */
export function StatusBadge({ status, className }: { status: Status; className?: string }) {
  const clear = status === "clear";
  const Icon = clear ? CircleCheck : CircleAlert;
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
        clear ? "bg-clear-soft text-clear" : "bg-unclear-soft text-unclear-ink",
        className,
      )}
    >
      <Icon className="size-3.5" aria-hidden />
      {clear ? "Clear" : "Needs clarity"}
    </span>
  );
}

export function StatusDot({ status }: { status: Status }) {
  const clear = status === "clear";
  const Icon = clear ? CircleCheck : CircleAlert;
  return <Icon className={cn("size-4 shrink-0", clear ? "text-clear" : "text-unclear")} aria-label={clear ? "Clear" : "Needs clarity"} />;
}
