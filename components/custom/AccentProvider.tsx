"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getSessionPalette, type AccentPalette, ACCENT_PALETTES } from "@/lib/accent-palettes";

interface AccentContextValue {
  palette: AccentPalette;
}

const AccentContext = createContext<AccentContextValue>({
  palette: ACCENT_PALETTES[0],
});

export function AccentProvider({ children }: { children: React.ReactNode }) {
  const [palette, setPalette] = useState<AccentPalette>(ACCENT_PALETTES[0]);

  useEffect(() => {
    setPalette(getSessionPalette());
  }, []);

  return (
    <AccentContext.Provider value={{ palette }}>
      {children}
    </AccentContext.Provider>
  );
}

/**
 * Returns the current session's accent palette.
 * Components can use palette.accentDark / accentLight etc. for inline styles,
 * or rely on the CSS custom properties (--ap, --accent-dark, --accent-light)
 * injected by ThemeColor.tsx.
 */
export function useAccentPalette(): AccentPalette {
  return useContext(AccentContext).palette;
}
