"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeColor() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    // 1. Update theme-color meta tag
    const existingTags = document.querySelectorAll('meta[name="theme-color"]');
    existingTags.forEach(tag => tag.remove());

    const metaThemeColor = document.createElement("meta");
    metaThemeColor.setAttribute("name", "theme-color");
    metaThemeColor.setAttribute("content", resolvedTheme === "dark" ? "#9fe870" : "#054d28");
    document.head.appendChild(metaThemeColor);

    // 2. Update favicon dynamically
    const existingIcons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]');
    existingIcons.forEach(icon => icon.remove());
    
    // Create SVG Favicon
    const svgIcon = resolvedTheme === "dark" 
      ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#0e0f0c"/><text x="50" y="75" font-family="sans-serif" font-weight="900" font-size="75" fill="#9fe870" text-anchor="middle">R</text></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#e8ebe6"/><text x="50" y="75" font-family="sans-serif" font-weight="900" font-size="75" fill="#054d28" text-anchor="middle">R</text></svg>`;
      
    let link = document.getElementById('dynamic-favicon') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.id = 'dynamic-favicon';
      link.rel = 'icon';
      link.type = 'image/svg+xml';
      document.head.appendChild(link);
    }
    
    // Use Base64 encoding which forces browsers to refresh the icon reliably
    link.href = `data:image/svg+xml;base64,${btoa(svgIcon)}`;

  }, [resolvedTheme]);

  return null;
}
