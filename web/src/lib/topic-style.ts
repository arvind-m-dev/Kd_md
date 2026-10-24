// An icon and a hue per topic group, so every topic is recognisable at a glance.
import {
  BellRing,
  Building2,
  ClipboardList,
  FileSpreadsheet,
  GitPullRequestArrow,
  LayoutGrid,
  MessagesSquare,
  PanelsTopLeft,
  ShieldCheck,
  Target,
  Users,
  Folder,
  type LucideIcon,
} from "lucide-react";

export interface TopicStyle {
  icon: LucideIcon;
  /** OKLCH hue, 0–360. */
  hue: number;
  /** A two-word name for small spaces. */
  short: string;
}

const STYLES: Record<string, TopicStyle> = {
  "02": { icon: GitPullRequestArrow, hue: 35, short: "Change requests" },
  "03": { icon: MessagesSquare, hue: 200, short: "Clarifications" },
  "04": { icon: ClipboardList, hue: 268, short: "Requirements" },
  "05": { icon: FileSpreadsheet, hue: 150, short: "Master sheet" },
  "06": { icon: LayoutGrid, hue: 305, short: "Fields & listings" },
  "07": { icon: Target, hue: 345, short: "Relevancy" },
  "08": { icon: PanelsTopLeft, hue: 235, short: "Pages & journeys" },
  "09": { icon: Building2, hue: 70, short: "Occupier pages" },
  "10": { icon: Users, hue: 180, short: "Keydemand team" },
  "11": { icon: ShieldCheck, hue: 285, short: "Control panel" },
  "12": { icon: BellRing, hue: 15, short: "Roles & alerts" },
};

export const topicStyle = (groupId: string | null | undefined): TopicStyle =>
  (groupId && STYLES[groupId]) || { icon: Folder, hue: 268, short: "Topic" };
