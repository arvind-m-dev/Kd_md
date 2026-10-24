// The colour themes. Each is a class on <html> (see globals.css); "system" follows the device's light/dark setting.
export interface ThemeDef {
  id: string;
  label: string;
  hint: string;
  dark: boolean;
  /** Preview colours for the picker: background, card, primary, glow. */
  swatch: [string, string, string, string];
}

export const THEMES: ThemeDef[] = [
  { id: "light", label: "Light", hint: "Clean and bright", dark: false, swatch: ["#fafaff", "#ffffff", "#4f46e5", "#c084fc"] },
  { id: "dark", label: "Dark", hint: "Easy on the eyes", dark: true, swatch: ["#14151d", "#1c1d27", "#a5b4fc", "#6d28d9"] },
  { id: "aurora", label: "Aurora", hint: "Violet night, teal glow", dark: true, swatch: ["#120d22", "#1b1430", "#2dd4bf", "#a855f7"] },
  { id: "ocean", label: "Ocean", hint: "Calm blues", dark: false, swatch: ["#f3fbfd", "#ffffff", "#0e7ab8", "#22d3ee"] },
  { id: "sunset", label: "Sunset", hint: "Warm coral and gold", dark: false, swatch: ["#fffaf5", "#fffdfb", "#e2552f", "#f59e0b"] },
  { id: "forest", label: "Forest", hint: "Deep greens", dark: true, swatch: ["#0f1713", "#16201b", "#4ade80", "#65a30d"] },
];
