/**
 * Accent palettes for dynamic theming.
 * Each palette has:
 *  - id: unique string key
 *  - name: human-readable name
 *  - dark mode accent (light, vivid color on dark bg)
 *  - light mode accent (dark, deep color on light bg)
 *  - hover variants for each
 *  - background tint for dark mode body
 *  - foreground tint for light mode body
 */

export interface AccentPalette {
  id: string;
  name: string;
  /** Vivid accent used in dark mode (e.g. bright lime) */
  accentDark: string;
  /** Deep accent used in light mode (e.g. dark green) */
  accentLight: string;
  /** Hover variant for dark mode accent */
  accentDarkHover: string;
  /** Hover variant for light mode accent */
  accentLightHover: string;
  /** Foreground on top of accentDark button (dark mode) */
  accentDarkFg: string;
  /** Foreground on top of accentLight button (light mode) */
  accentLightFg: string;
}

export const ACCENT_PALETTES: AccentPalette[] = [
  // 0 — Original: Lime / Forest Green
  {
    id: "lime-forest",
    name: "Lime Forest",
    accentDark: "#9fe870",
    accentLight: "#054d28",
    accentDarkHover: "#cdffad",
    accentLightHover: "#2ead4b",
    accentDarkFg: "#0e0f0c",
    accentLightFg: "#ffffff",
  },
  // 1 — Cyan / Teal
  {
    id: "cyan-teal",
    name: "Cyan Teal",
    accentDark: "#67e8f9",
    accentLight: "#0e7490",
    accentDarkHover: "#a5f3fc",
    accentLightHover: "#0891b2",
    accentDarkFg: "#0e0f0c",
    accentLightFg: "#ffffff",
  },
  // 2 — Violet / Indigo
  {
    id: "violet-indigo",
    name: "Violet Indigo",
    accentDark: "#c4b5fd",
    accentLight: "#4c1d95",
    accentDarkHover: "#ddd6fe",
    accentLightHover: "#6d28d9",
    accentDarkFg: "#0e0f0c",
    accentLightFg: "#ffffff",
  },
  // 3 — Amber / Brown
  {
    id: "amber-brown",
    name: "Amber Brown",
    accentDark: "#fcd34d",
    accentLight: "#78350f",
    accentDarkHover: "#fde68a",
    accentLightHover: "#b45309",
    accentDarkFg: "#0e0f0c",
    accentLightFg: "#ffffff",
  },
  // 4 — Rose / Crimson
  {
    id: "rose-crimson",
    name: "Rose Crimson",
    accentDark: "#fda4af",
    accentLight: "#9f1239",
    accentDarkHover: "#fecdd3",
    accentLightHover: "#be123c",
    accentDarkFg: "#0e0f0c",
    accentLightFg: "#ffffff",
  },
  // 5 — Sky / Navy
  {
    id: "sky-navy",
    name: "Sky Navy",
    accentDark: "#93c5fd",
    accentLight: "#1e3a8a",
    accentDarkHover: "#bfdbfe",
    accentLightHover: "#1d4ed8",
    accentDarkFg: "#0e0f0c",
    accentLightFg: "#ffffff",
  },
  // 6 — Orange / Rust
  {
    id: "orange-rust",
    name: "Orange Rust",
    accentDark: "#fdba74",
    accentLight: "#7c2d12",
    accentDarkHover: "#fed7aa",
    accentLightHover: "#c2410c",
    accentDarkFg: "#0e0f0c",
    accentLightFg: "#ffffff",
  },
  // 7 — Emerald / Deep Teal
  {
    id: "emerald-teal",
    name: "Emerald Teal",
    accentDark: "#6ee7b7",
    accentLight: "#064e3b",
    accentDarkHover: "#a7f3d0",
    accentLightHover: "#047857",
    accentDarkFg: "#0e0f0c",
    accentLightFg: "#ffffff",
  },
  // 8 — Pink / Magenta
  {
    id: "pink-magenta",
    name: "Pink Magenta",
    accentDark: "#f9a8d4",
    accentLight: "#831843",
    accentDarkHover: "#fbcfe8",
    accentLightHover: "#be185d",
    accentDarkFg: "#0e0f0c",
    accentLightFg: "#ffffff",
  },
  // 9 — Lime / Slate
  {
    id: "lime-slate",
    name: "Lime Slate",
    accentDark: "#d9f99d",
    accentLight: "#1e293b",
    accentDarkHover: "#ecfccb",
    accentLightHover: "#334155",
    accentDarkFg: "#0e0f0c",
    accentLightFg: "#ffffff",
  },
];

const SESSION_KEY = "rudra_accent_palette_id";

/**
 * Pick (or restore) a random accent palette for this browser session.
 * The same palette is used for the entire session, changing only on fresh visits.
 */
export function getSessionPalette(): AccentPalette {
  if (typeof window === "undefined") return ACCENT_PALETTES[0];

  const stored = sessionStorage.getItem(SESSION_KEY);
  if (stored) {
    const found = ACCENT_PALETTES.find((p) => p.id === stored);
    if (found) return found;
  }

  // Use current timestamp millis as seed for "access time" randomness
  const idx = Math.floor(Math.random() * ACCENT_PALETTES.length);
  const palette = ACCENT_PALETTES[idx];
  sessionStorage.setItem(SESSION_KEY, palette.id);
  return palette;
}
