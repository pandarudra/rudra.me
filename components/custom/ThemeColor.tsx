"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { getSessionPalette, type AccentPalette } from "@/lib/accent-palettes";

export function ThemeColor() {
  const { resolvedTheme } = useTheme();
  const [palette, setPalette] = useState<AccentPalette | null>(null);

  // Pick palette once on mount (client-side only, persists within session)
  useEffect(() => {
    setPalette(getSessionPalette());
  }, []);

  useEffect(() => {
    if (!resolvedTheme || !palette) return;

    const isDark = resolvedTheme === "dark";

    // ── 1. Inject CSS custom properties onto :root ───────────────────────────
    const root = document.documentElement;

    // Current accent values (mode-aware)
    root.style.setProperty("--accent-primary", isDark ? palette.accentDark : palette.accentLight);
    root.style.setProperty("--accent-primary-hover", isDark ? palette.accentDarkHover : palette.accentLightHover);
    root.style.setProperty("--accent-primary-fg", isDark ? palette.accentDarkFg : palette.accentLightFg);

    // Both variants always available (components may need the opposite for cross-mode styling)
    root.style.setProperty("--accent-dark", palette.accentDark);
    root.style.setProperty("--accent-light", palette.accentLight);
    root.style.setProperty("--accent-dark-hover", palette.accentDarkHover);
    root.style.setProperty("--accent-light-hover", palette.accentLightHover);
    root.style.setProperty("--accent-dark-fg", palette.accentDarkFg);
    root.style.setProperty("--accent-light-fg", palette.accentLightFg);

    // ── 2. Update theme-color meta tag ───────────────────────────────────────
    const existingTags = document.querySelectorAll('meta[name="theme-color"]');
    existingTags.forEach((tag) => tag.remove());
    const metaThemeColor = document.createElement("meta");
    metaThemeColor.setAttribute("name", "theme-color");
    metaThemeColor.setAttribute("content", isDark ? palette.accentDark : palette.accentLight);
    document.head.appendChild(metaThemeColor);

    // ── 3. Update favicon dynamically ────────────────────────────────────────
    const existingIcons = document.querySelectorAll(
      'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]'
    );
    existingIcons.forEach((icon) => icon.remove());

    const bgColor = isDark ? "#0e0f0c" : "#e8ebe6";
    const letterColor = isDark ? palette.accentDark : palette.accentLight;
    const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="${bgColor}"/><text x="50" y="75" font-family="sans-serif" font-weight="900" font-size="75" fill="${letterColor}" text-anchor="middle">R</text></svg>`;

    let link = document.getElementById("dynamic-favicon") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.id = "dynamic-favicon";
      link.rel = "icon";
      link.type = "image/svg+xml";
      document.head.appendChild(link);
    }
    link.href = `data:image/svg+xml;base64,${btoa(svgIcon)}`;

  }, [resolvedTheme, palette]);

  return null;
}
