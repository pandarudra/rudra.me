---
version: 1.0.0
name: rudrax.me-design-system
description: The design system powering the rudrax.me interactive portfolio. It merges a Wise-inspired Scandinavian fintech aesthetic—featuring heavy 900-weight display typography, soft sage/charcoal canvas surfaces, and pill-rounded geometries—with a custom Session-Based Dynamic Accent color system that randomizes the primary CTA color on every visit.

colors:
  # Dynamic Accent (Injected via CSS Variables by ThemeColor.tsx)
  primary: "var(--accent-primary)"
  on-primary: "var(--accent-primary-fg)"
  primary-active: "var(--accent-primary-hover)"
  
  # Surface & Ink (Light Mode defaults)
  ink: "#0e0f0c"
  ink-soft: "#454745"
  mute: "#868685"
  canvas: "#ffffff"
  canvas-soft: "#e8ebe6"
  
  # Surface & Ink (Dark Mode defaults)
  dark-ink: "#ffffff"
  dark-ink-soft: "#868685"
  dark-canvas: "#121311"
  dark-canvas-soft: "#0e0f0c"

  # Semantic States
  positive: "#2ead4b"
  warning: "#ffd11a"
  negative: "#d03238"

typography:
  display-mega:
    fontFamily: Geist Sans, Inter, system-ui, sans-serif
    fontSize: 72px (up to 126px on desktop)
    fontWeight: 900
    letterSpacing: -0.04em
  display-xl:
    fontFamily: Geist Sans, Inter, system-ui, sans-serif
    fontSize: 48px (up to 64px on desktop)
    fontWeight: 900
  display-md:
    fontFamily: Geist Sans, Inter, system-ui, sans-serif
    fontSize: 32px (up to 40px on desktop)
    fontWeight: 900
  body-lg:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 20px
    fontWeight: 500
  body-md:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
  body-sm-strong:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 700

rounded:
  none: 0px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  pill: 9999px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px
  hero: 96px

components:
  nav-bar:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg} {spacing.xl}"
  card-content:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  hero-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-mega}"
    padding: "{spacing.hero} {spacing.xl}"
---

## Overview

The `rudrax.me` design system is an evolved interpretation of premium fintech branding, merged with the playfulness of interactive gaming and physics UIs. It heavily relies on a massive contrast between extremely bold headers (`font-black` / weight 900) and highly legible, medium-weight body text.

The defining characteristic of this portfolio is the **Dynamic Accent System**. Unlike traditional brands with a single primary color, this site leverages a pool of 10 curated accent pairs (e.g., Cyan/Teal, Lime/Forest). Every new browser session generates a fresh primary color, dynamically updating the CSS variables (`--accent-primary`), the `theme-color` meta tag, and the browser favicon in real-time.

**Key Characteristics:**
- A dynamic primary CTA accent `{colors.primary}` (`var(--accent-primary)`) — universally applied to primary buttons, interactive nodes, and link hovers.
- High-contrast typography — Geist Sans at weight 900 for displays, Inter at weight 400/500 for body.
- Soft pill geometries — `{rounded.xl}` (24px) is the canonical border radius for almost all interactive cards, text inputs, and buttons.
- Surface contrast — the layout constantly shifts between the soft sage/charcoal canvas (`#e8ebe6` / `#0e0f0c`) and elevated card interiors (`#ffffff` / `#121311`).
- Micro-animations — heavy reliance on `motion/react` for subtle `y: -4` float effects on hover and `scale: 0.95` on tap.

## Colors

### Dynamic Accent

- **Primary Accent** (`{colors.primary}` — `var(--accent-primary)`): The dynamic CTA color injected via `ThemeColor.tsx`.
- **Primary Active** (`{colors.primary-active}` — `var(--accent-primary-hover)`): The hover variant of the dynamic accent.
- **On-Primary** (`{colors.on-primary}` — `var(--accent-primary-fg)`): Guaranteed contrast foreground color (either deep black or pure white) sitting on top of the primary accent.

### Surface (Light Mode)

- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white for card interiors and elevated surfaces.
- **Canvas Soft** (`{colors.canvas-soft}` — `#e8ebe6`): The sage-tinted page background used for hero sections and page roots.

### Surface (Dark Mode)

- **Dark Canvas** (`{colors.dark-canvas}` — `#121311`): Slightly elevated dark gray for card interiors.
- **Dark Canvas Soft** (`{colors.dark-canvas-soft}` — `#0e0f0c`): The ultra-deep charcoal page background.

### Text

- **Ink** (`{colors.ink}` — `#0e0f0c`): Near-black with a hint of olive warmth — default text and headings color.
- **Ink Soft** (`{colors.ink-soft}` — `#454745`): Secondary body text.
- **Mute** (`{colors.mute}` — `#868685`): Lowest-priority text — captions, placeholders.

## Typography

### Font Family

1. **Geist Sans** — Used exclusively for display typography at weight 900 (`font-black`). Drives the premium, geometric, heavy feel of the site headers.
2. **Inter** — Used for sub-displays, all body text, and UI labels. 

### Principles

- **Weight 900 for hero, weight 500/400 for everything else.** The brand's display ceiling is full-black weight. 
- **Dynamic Accent Text.** Interactive text elements use the `.accent-text` utility class to automatically inherit the session's dynamic color.

## Elevation & Depth

| Level                      | Treatment                                                                                   | Use                                    |
| -------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------- |
| Level 0 — Flat             | No shadow, `border-black/5`.                                                               | Default for large sections.            |
| Level 1 — Soft Card        | `shadow-sm`, implicit contrast against the `canvas-soft` background.                       | Default card elevation.                |
| Level 2 — Hover Card       | `shadow-xl`, `border-black/10`, combined with `y: -4` translation.                         | Interactive cards on hover.            |

The brand avoids heavy box-shadows. Instead, it relies on soft surface contrast and subtle 5% opacity borders to define edges.

## Shapes

### Border Radius Scale

| Token            | Value  | Use                                         |
| ---------------- | ------ | ------------------------------------------- |
| `{rounded.none}` | 0px    | Full-bleed bands.                           |
| `{rounded.md}`   | 12px   | Inner UI elements, smaller icons.           |
| `{rounded.lg}`   | 16px   | Embedded iframes, smaller cards.            |
| `{rounded.xl}`   | 24px   | The canonical button + card radius.         |
| `{rounded.pill}` | 9999px | Status pills and full-radius nav wrappers.  |
| `{rounded.full}` | 9999px | Circular icon containers.                   |

## Components

### Buttons

**`button-primary`**
- Background `var(--accent-primary)`, text `var(--accent-primary-fg)`, shape `{rounded.xl}` 24 px. Uses Framer Motion for tap/hover physics.

**`button-outline`**
- Background transparent, 2px border of `border-black/10`, shape `{rounded.xl}`. Usually scales up slightly on hover.

### Cards & Containers

**`card-interactive`**
- Background `{colors.canvas}`, padding `{spacing.xl}`, shape `{rounded.xl}`. Includes a subtle 5% border. On hover, the border darkens to 10% and the card elevates `y: -4px`.

### UI Utilities

**`<FadeIn>`**
- A global wrapper component that handles the standard entrance animation (opacity 0 to 1, Y translation up) based on scroll triggers.

## Do's and Don'ts

### Do
- Always use `.accent-text` or `.accent-bg` for primary actions and highlights instead of hardcoding a specific color.
- Set hero headlines in `font-black` (weight 900). Never lighter.
- Use `{rounded.xl}` 24 px for buttons and primary cards. The generous radius is non-negotiable.
- Wrap new sections in the `<FadeIn>` component to maintain smooth scroll physics.
- Test new components in both light mode and dark mode.

### Don't
- Don't use standard primary/secondary color tokens (e.g., `text-blue-500`). The dynamic accent system must be respected.
- Don't render CTAs as sharp rectangles.
- Don't use heavy, high-opacity drop shadows. Use `border-black/5` or `border-white/5` with `shadow-sm` for depth.
