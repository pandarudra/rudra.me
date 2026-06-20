# rudrax.me — Comprehensive Design System

> **Version:** 1.0.0  
> **Stack:** Next.js 15 · Tailwind CSS v4 · motion/react (Framer Motion) · Lucide Icons · shadcn/ui  
> **Fonts:** Tosh A/B (local), Geist Sans/Mono (Google), Virgil (local handwriting)

---

## 1. Brand Identity

### Design Philosophy
A Wise-inspired Scandinavian fintech aesthetic merged with interactive portfolio playfulness. The site prioritizes **heavy typographic contrast**, **soft rounded geometries**, and a unique **session-randomized accent color system** that gives every visit a fresh personality while maintaining structural consistency.

### Visual Style
- Premium, editorial feel — reads like a design magazine, not a generic portfolio
- High contrast between ultra-bold display type (weight 900) and medium-weight body text
- Generous whitespace and rounded surfaces create a calm, approachable tone
- Dark mode is a first-class citizen — every component supports both modes

### Brand Personality
- **Confident** — massive 900-weight headlines command attention
- **Playful** — dynamic accent colors, interactive JS console in hero, physics-based animations
- **Premium** — subtle borders, soft shadows, glassmorphic nav, no visual clutter
- **Technical** — monospace accents, code-themed components, data visualizations

### Design Principles
1. **Dynamic over static** — the accent color randomizes per session; never hardcode a primary color
2. **Surface contrast over shadows** — elevation comes from canvas-soft ↔ white/dark surface interplay
3. **Bold headlines, quiet body** — weight 900 for display, 400–500 for everything else
4. **Pill geometry is sacred** — 24px radius on all primary cards and buttons, no exceptions
5. **Motion is meaningful** — every entrance uses `<FadeIn>`, hovers float `y: -4`, taps scale `0.95`

---

## 2. Color System

### Dynamic Accent (Session-Based)
The defining feature. `ThemeColor.tsx` picks a random palette from 10 curated pairs on each session via `lib/accent-palettes.ts`. Colors are injected as CSS custom properties.

| Variable | Light Mode | Dark Mode | Purpose |
|----------|-----------|-----------|---------|
| `--ap` | `var(--accent-light)` | `var(--accent-dark)` | Current accent (convenience alias) |
| `--ap-hover` | `var(--accent-light-hover)` | `var(--accent-dark-hover)` | Hover state |
| `--ap-fg` | `var(--accent-light-fg)` | `var(--accent-dark-fg)` | Text on accent bg |

**10 Palette Pairs (dark / light mode accents):**

| ID | Name | Dark Accent | Light Accent |
|----|------|------------|-------------|
| `lime-forest` | Lime Forest | `#9fe870` | `#054d28` |
| `cyan-teal` | Cyan Teal | `#67e8f9` | `#0e7490` |
| `violet-indigo` | Violet Indigo | `#c4b5fd` | `#4c1d95` |
| `amber-brown` | Amber Brown | `#fcd34d` | `#78350f` |
| `rose-crimson` | Rose Crimson | `#fda4af` | `#9f1239` |
| `sky-navy` | Sky Navy | `#93c5fd` | `#1e3a8a` |
| `orange-rust` | Orange Rust | `#fdba74` | `#7c2d12` |
| `emerald-teal` | Emerald Teal | `#6ee7b7` | `#064e3b` |
| `pink-magenta` | Pink Magenta | `#f9a8d4` | `#831843` |
| `lime-slate` | Lime Slate | `#d9f99d` | `#1e293b` |

All palettes use `#0e0f0c` as dark-mode foreground and `#ffffff` as light-mode foreground on accent buttons.

### Accent Utility Classes (globals.css)

| Class | Effect |
|-------|--------|
| `.accent-text` | Text colored with current accent |
| `.accent-bg` | Background filled with accent + correct foreground |
| `.accent-border` | Border colored with accent |
| `.accent-tint` | 10% opacity accent bg + 20% opacity accent border |
| `.accent-dot` | Solid accent bg (timeline dots, badges) |

### Surface Colors

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| Canvas | `#ffffff` | `#121311` | Card interiors, elevated surfaces |
| Canvas-soft | `#e8ebe6` | `#0e0f0c` | Page background, hero bands, section bg |

**Tailwind usage:**
- Light bg: `bg-[#e8ebe6]` / `bg-white`
- Dark bg: `dark:bg-[#0e0f0c]` / `dark:bg-[#121311]`

### Text Colors

| Token | Hex | Use |
|-------|-----|-----|
| Ink | `#0e0f0c` / dark: `white` | Primary headings, strong text |
| Ink-soft | `#454745` / dark: `#a0a0a0` | Body text, secondary labels |
| Mute | `#868685` | Captions, placeholders, tertiary text |

### Border Colors

| Pattern | Use |
|---------|-----|
| `border-[#0e0f0c]/5 dark:border-white/5` | Default subtle card/section borders |
| `border-[#0e0f0c]/10 dark:border-white/10` | Hover-state / emphasized borders |
| `border-black/10 dark:border-white/10` | Form inputs, interactive elements |

### Semantic Colors

| State | Color | Use |
|-------|-------|-----|
| Positive | `#2ead4b` | Success indicators, progress bars |
| Warning | `#ffd11a` | Caution states |
| Negative/Error | `#d03238` | Error messages, destructive actions |

---

## 3. Typography

### Font Stack (body declaration in globals.css)
```css
font-family: "Tosh A", "Tosh B", "BBH Bogle", system-ui, -apple-system,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
```

**Tosh A/B** — Primary display + body font (loaded locally at weights 100–900).  
**Geist Sans** — Available via `var(--font-geist-sans)`, used as `font-sans` in Tailwind theme.  
**Geist Mono** — Available via `var(--font-geist-mono)` for code/monospace contexts.  
**Virgil** — Handwriting font via `var(--font-lf)` for informal/sketch elements.

### Heading Hierarchy (as used across all sections)

| Level | Size | Weight | Tailwind Classes | Use |
|-------|------|--------|-----------------|-----|
| Hero H1 | 120px (desktop) / 60px (mobile) | 900 | `text-6xl sm:text-7xl md:text-[100px] lg:text-[120px] font-black` | Hero headline only |
| Section H2 | 56px (desktop) / 40px (mobile) | 900 | `text-5xl sm:text-7xl font-black tracking-tight` | Section titles |
| Section H2 (alt) | 48px / 32px | 900 | `text-4xl sm:text-5xl font-black tracking-tight` | Skills, Certs subsections |
| Card H3 | 20px | 900 | `text-xl font-black` | Card headings |
| Card H3 (large) | 32px / 24px | 900 | `text-2xl sm:text-3xl font-black` | Philosophy card, project names |

### Body Text Styles

| Style | Size | Weight | Classes | Use |
|-------|------|--------|---------|-----|
| Lead | 24px / 20px | 500 | `text-xl sm:text-2xl font-medium` | Hero sub-headline |
| Body-lg | 18–20px | 500 | `text-lg font-medium` | Section descriptions |
| Body-md | 16px | 700 | `text-[16px] font-bold` | Button labels, nav links (desktop) |
| Body-sm | 14px | 700 | `text-[14px] font-bold` | Nav links, stat labels, tech tags |
| Caption | 13px | 700 | `text-[13px] font-bold` | Small links, metadata labels |
| Eyebrow | 11–12px | 700 | `text-[11px] font-bold uppercase tracking-widest` | Category labels, section labels |
| Mono | 13–14px | 400 | `font-mono text-[13px]` | Code console, skill tags |

### Typography Principles
- **Weight 900** (`font-black`) for ALL display/heading text — non-negotiable
- **Weight 700** (`font-bold`) for labels, nav, buttons, metadata
- **Weight 500** (`font-medium`) for body paragraphs, descriptions
- **`tracking-tight`** on all headings; **`tracking-widest`** + `uppercase` on eyebrow labels
- **`leading-relaxed`** on body paragraphs; tight line-height (`leading-[0.85]`) on hero

---

## 4. Spacing System

| Token | Value | Primary Use |
|-------|-------|-------------|
| xs | 4px | Fine gaps, icon padding |
| sm | 8px | Small internal gaps |
| md | 12px | Input padding, nav padding |
| lg | 16px | Card sections, button vertical padding |
| xl | 24px | Card padding (canonical), horizontal button padding |
| 2xl | 32px | Section internal gaps |
| 3xl | 48px | Section vertical padding |
| hero | 96px | Hero section top padding |

### Key spacing patterns observed:
- **Card interior padding:** `p-8 sm:p-10` (32px / 40px)
- **Section vertical padding:** `py-24 sm:py-32` (96px / 128px)
- **Section horizontal padding:** `px-6 md:px-12` or `px-6 lg:px-12`
- **Inter-card gap:** `gap-6` (24px)
- **Inter-section gap:** `gap-16` (64px) in grid layouts
- **Heading margin-bottom:** `mb-10` to `mb-16` (40–64px)
- **Eyebrow margin-bottom:** `mb-5` or `mb-6`

---

## 5. Layout Rules

### Container Widths
| Context | Max Width | Class |
|---------|-----------|-------|
| Primary content | 1400px | `max-w-[1400px] mx-auto` |
| Narrower content | 1280px | `max-w-7xl mx-auto` |
| Text-focused | 1024px | `max-w-6xl mx-auto` |
| Narrow (Experience) | 896px | `max-w-4xl mx-auto` |

### Grid Systems
- **Hero:** `grid lg:grid-cols-[1.15fr_0.85fr]` — text-heavy left, widget right
- **About:** `grid lg:grid-cols-12` — 7/5 split
- **Skills:** `grid md:grid-cols-3 gap-6`
- **LeetCode:** `grid md:grid-cols-2 gap-6`
- **Footer:** `grid lg:grid-cols-12` — 7/5 split
- **Projects:** Stacked cards with `sticky top-20` for scroll-based parallax

### Responsive Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 768px (`md:`) | Single column, hero stacked, project accordion |
| Tablet | 768–1023px | 2-column grids appear |
| Desktop | ≥ 1024px (`lg:`) | Full multi-column layouts, hero split, mind-map |

### Navigation Pattern
- **Desktop:** Floating centered pill nav — `rounded-[24px]` glassmorphic bar with `backdrop-blur-md`, `bg-white/70 dark:bg-[#121311]/70`
- **Mobile:** FAB hamburger button (top-right), animated dropdown panel with `AnimatePresence`
- **Position:** `fixed top-0 z-50` with `pointer-events-none` container, `pointer-events-auto` on nav itself

---

## 6. Border Radius System

| Token | Value | Use |
|-------|-------|-----|
| `rounded-[24px]` | 24px | **Canonical.** Cards, buttons, nav, modals, inputs, sections with `rounded-t-[24px]` |
| `rounded-[20px]` | 20px | Mind-map leaf nodes |
| `rounded-[16px]` | 16px | Inner media containers, image frames |
| `rounded-[14px]` | 14px | Icon containers inside cards |
| `rounded-lg` | ~8px | Skill tags, small icon wrappers |
| `rounded-full` | 9999px | Timeline dots, avatar/icon circles, mobile menu button, tech tag pills |
| `rounded-[6px]` | 6px | Tooltip/label overlays |

**Rule:** Default to `rounded-[24px]` for any new card, button, or container. Use `rounded-full` only for circular elements.

---

## 7. Shadow & Elevation System

| Level | Treatment | Use |
|-------|-----------|-----|
| Level 0 — Flat | No shadow, `border-[#0e0f0c]/5` | Default sections, bg bands |
| Level 1 — Soft | `shadow-sm` + subtle border | Default card state |
| Level 2 — Hover | `shadow-xl` (via `hover:shadow-xl`) | Cards on hover |
| Level 3 — Elevated | `shadow-2xl` | Hero console card, mobile nav panel |
| Level 4 — CTA | `shadow-lg` | Primary accent buttons |

### Shadow Principles
- **Surface contrast IS the primary elevation** — white cards on sage bg, dark cards on charcoal bg
- **No heavy box-shadows** — always subtle, never colored/brand shadows
- **Border-based edges** — `border-[#0e0f0c]/5 dark:border-white/5` defines card boundaries
- Hover transitions add shadow AND border darkening: `hover:shadow-xl` + `hover:border-[#0e0f0c]/10`

---

## 8. Animation System

### Library
**motion/react** (Framer Motion) — used throughout for entrance, hover, tap, and scroll animations.

### `<FadeIn>` Component (`components/custom/ui/FadeIn.tsx`)
The universal entrance wrapper. Every new section/card should use it.

```tsx
<FadeIn y={30} delay={0.2} duration={0.7} once={true}>
  {children}
</FadeIn>
```

| Prop | Default | Purpose |
|------|---------|---------|
| `y` | `30` | Vertical offset (px) before animating to 0 |
| `x` | `0` | Horizontal offset |
| `delay` | `0` | Stagger delay in seconds |
| `duration` | `0.7` | Animation duration |
| `once` | `true` | Animate only on first scroll into view |

**Easing:** `[0.25, 0.1, 0.25, 1]` — a smooth ease-out cubic bezier.  
**Viewport trigger:** `margin: "50px"`, `amount: 0.1` (triggers early, at 10% visibility).

### Hover Interactions

| Pattern | Motion Config | Use |
|---------|--------------|-----|
| Float up | `whileHover={{ y: -4 }}` | Social links, interactive cards |
| Scale up | `hover:scale-105` (CSS) | Buttons, CTA links |
| Scale + float | `whileHover={{ scale: 1.08, y: -4 }}` | Mind-map nodes |
| Border darken | `hover:border-[#0e0f0c]/10` | Cards, containers |
| Shadow grow | `hover:shadow-xl` | Cards on hover |

### Tap / Active Interactions

| Pattern | Config | Use |
|---------|--------|-----|
| Press shrink | `active:scale-95` (CSS) | All buttons |
| Motion tap | `whileTap={{ scale: 0.98 }}` | Submit buttons |

### Scroll Animations
- **Parallax project cards:** `useScroll` + `useTransform` for sticky card stacking with scale reduction
- **Marquee tech strip:** `useScroll` + `useTransform` for bidirectional horizontal scroll on two rows
- **Progress bars:** `whileInView={{ width: "89%" }}` with 1.2s ease-out

### Page Transitions
- `transition-colors duration-300` on all section containers for smooth theme switching
- Smooth scroll: `html { scroll-behavior: smooth; }` in globals.css

### Loading States
- Spinner: `w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin`
- Skeleton pulse: `animate-pulse bg-black/5 dark:bg-white/5 rounded-[24px]`

### Special Animations
- **Pulsing center node (ExploreSection):** Animated `boxShadow` with `repeat: Infinity`, 2.5s cycle
- **SVG path dots:** `<animateMotion>` along curved bezier paths, 1.5–3s cycle
- **MagnetButton:** Spring physics (`stiffness: 150, damping: 15, mass: 0.1`) following cursor position

---

## 9. Components

### 9.1 Buttons

#### Primary CTA Button
```html
<button class="inline-flex h-14 items-center justify-center gap-2
  rounded-[24px] accent-bg px-8 text-[16px] font-bold
  transition-all hover:scale-105 active:scale-95 shadow-lg">
  Label
</button>
```
- Background: dynamic accent (`accent-bg` class)
- Height: 56px (`h-14`)
- Radius: 24px
- Shadow: `shadow-lg`

#### Outline Button
```html
<a class="inline-flex h-14 items-center justify-center gap-2
  rounded-[24px] border-2 border-[#0e0f0c] dark:border-white
  bg-transparent px-8 text-[16px] font-bold text-[#0e0f0c] dark:text-white
  hover:bg-[#0e0f0c] hover:text-white dark:hover:bg-white dark:hover:text-[#0e0f0c]
  hover:scale-105 active:scale-95">
  Label <ArrowRight />
</a>
```
- Fills with ink on hover (polarity flip)
- 2px solid border

#### Small Action Button (Cards)
```html
<a class="inline-flex h-10 items-center justify-center gap-2
  rounded-[24px] accent-bg px-4 sm:px-5 text-[13px] font-bold
  shadow-lg">
  <Icon /> Label
</a>
```

#### Small Outline Button (Cards)
```html
<a class="inline-flex h-10 items-center justify-center gap-2
  rounded-[24px] border-2 border-[#0e0f0c]/5 dark:border-white/5
  bg-transparent px-4 text-[13px] font-bold text-[#0e0f0c] dark:text-white
  hover:bg-black/5 dark:hover:bg-white/5">
  <Icon /> Label
</a>
```

#### Icon Button (Circular)
```html
<button class="size-10 rounded-full border border-[#0e0f0c]/10 dark:border-white/10
  flex items-center justify-center text-[#0e0f0c] dark:text-white
  hover:bg-black/5 dark:hover:bg-white/5 active:scale-95">
  <Icon />
</button>
```

#### MagnetButton (Physics)
Spring-based cursor-following button. See `components/custom/ui/Buttons.tsx`. Follows cursor at 30% intensity with spring physics.

### 9.2 Cards

#### Standard Content Card
```html
<div class="p-8 sm:p-10 bg-white dark:bg-[#121311]
  border border-[#0e0f0c]/5 dark:border-white/5
  rounded-[24px] shadow-sm transition-all hover:shadow-xl">
  <span class="text-[11px] font-bold uppercase tracking-widest accent-text mb-5 block">
    Eyebrow Label
  </span>
  <h3 class="text-xl font-black text-[#0e0f0c] dark:text-white">Title</h3>
  <!-- content -->
</div>
```

#### Sage Surface Card (on white bg sections)
```html
<div class="p-8 rounded-[24px] bg-[#e8ebe6] dark:bg-[#1a1b19]
  border border-[#0e0f0c]/5 dark:border-white/5
  transition-all hover:border-[#0e0f0c]/10 dark:hover:border-white/10">
  <!-- content -->
</div>
```
Used for skills categories, LeetCode stats on white sections.

#### Project Card (Sticky Scroll)
Full-width card with `sticky top-20`, scales down via `useTransform`. Contains header + media grid. See `ProjectsSection.tsx`.

#### Certificate Card
Fixed-width (`w-[300px] sm:w-[360px] h-[240px]`), horizontally scrollable. Uses color-coded backgrounds per issuer.

### 9.3 Navigation

#### Desktop Nav
```html
<nav class="hidden lg:flex items-center justify-center gap-8
  rounded-[24px] border border-[#0e0f0c]/5 dark:border-white/5
  bg-white/70 dark:bg-[#121311]/70 px-8 py-3 backdrop-blur-md shadow-sm">
  <a class="text-[14px] font-bold text-[#454745] dark:text-[#a0a0a0]
    hover:text-[#0e0f0c] dark:hover:text-white transition-colors">
    Link
  </a>
</nav>
```

#### Mobile Nav
- Hamburger: circular `rounded-full` button with `backdrop-blur-md`
- Dropdown: `AnimatePresence` with `scale: 0.95 → 1`, `opacity: 0 → 1`, `y: -20 → 0`
- Links separated by `border-b border-[#0e0f0c]/5`

### 9.4 Form Inputs

#### Text Input / Textarea
```html
<input class="w-full px-6 py-4 rounded-[24px]
  bg-black/5 dark:bg-white/5
  border border-black/10 dark:border-white/10
  text-[#0e0f0c] dark:text-white
  placeholder:text-black/40 dark:placeholder:text-white/40
  focus:outline-none focus:ring-2 transition-all
  group-hover:border-black/20 dark:group-hover:border-white/20" />
```
- Focus ring color: `color-mix(in srgb, var(--ap) 40%, transparent)`
- Wrapped in `<div class="relative group">` for hover-border effect

### 9.5 Dialogs / Modals
Uses shadcn `<Dialog>` with custom styling:
```html
<DialogContent class="sm:max-w-xl bg-white dark:bg-[#0e0f0c]
  border border-[#0e0f0c]/10 dark:border-white/10 rounded-[24px]">
```

### 9.6 Badges / Pills

#### Accent Tint Badge
```html
<span class="px-4 py-2 rounded-[24px] accent-tint text-[14px] font-black accent-text">
  <Icon /> Label
</span>
```

#### Tech Tag
```html
<span class="px-4 py-1.5 rounded-[24px] bg-white/40 dark:bg-white/5
  border-2 border-[#0e0f0c]/5 dark:border-white/10
  text-[14px] font-bold text-[#454745] dark:text-[#a0a0a0]">
  Tag
</span>
```

#### Skill Tag (Mono)
```html
<span class="px-3.5 py-1.5 rounded-lg bg-[#0e0f0c]/5 dark:bg-white/5
  border border-[#0e0f0c]/10 dark:border-white/10
  text-[13px] font-mono text-[#454745] dark:text-[#a0a0a0]">
  Skill
</span>
```

### 9.7 Footer
- Background: `bg-white dark:bg-[#0e0f0c]` with `rounded-t-[24px]` for section overlap
- 7/5 grid split: contact form left, socials + theme switcher right
- Social links: `motion.a` with `whileHover={{ y: -4 }}`, `rounded-[24px]`, `bg-black/5`
- Theme switcher: 3-button dock (`Sun/Moon/Monitor`) in `rounded-[24px]` container, active state uses `accent-bg`

### 9.8 Section Structure Pattern
Every section follows this skeleton:
```html
<section id="name" class="py-24 sm:py-32 bg-[#e8ebe6] dark:bg-[#0e0f0c]
  transition-colors duration-300 border-t border-[#0e0f0c]/5 dark:border-white/5">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <FadeIn>
      <h2 class="text-5xl sm:text-7xl font-black tracking-tight
        text-[#0e0f0c] dark:text-white mb-10">
        Title
      </h2>
    </FadeIn>
    <!-- content -->
  </div>
</section>
```
Sections alternate between `bg-[#e8ebe6]` (sage) and `bg-white` (canvas).

### 9.9 Progress Bars
```html
<div class="w-full bg-black/5 dark:bg-white/5 h-2 rounded-full overflow-hidden">
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: "89%" }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    class="accent-bg h-full rounded-full" />
</div>
```

### 9.10 Timeline
- Vertical line: `border-l-2 border-[#0e0f0c]/10 dark:border-white/10`
- Dots: `accent-dot` class, `w-5 h-5 rounded-full border-4`, positioned with negative left offset
- Content: cards aligned right of the line with `pl-6 sm:pl-10`

### 9.11 Toast Notifications
Uses `sonner` via shadcn's `<Toaster>`. Default positioning and styling.

---

## 10. Icons

### Library
**Lucide React** — the sole icon library. No other icon sets.

### Sizing Conventions
| Context | Size | Class |
|---------|------|-------|
| Inline text | 16px | `w-4 h-4` or `size-4` |
| Card header icon | 24px | `w-6 h-6` |
| Section header icon | 40px | `w-10 h-10` |
| Nav button icon | 20px | `size-5` |
| Small inline | 14px | `size-3.5` |

### Usage Rules
- Icon color inherits from parent text color OR uses `accent-text`
- Icons in card headers: always paired with `accent-text` class
- Button icons: inherit color from button, use `size-4` or `size-5`
- Decorative icons use Lucide exclusively — no emoji, no SVG sprites (except favicon)

---

## 11. Accessibility

### Contrast Patterns
- Primary text `#0e0f0c` on `#ffffff` → ratio > 18:1
- Primary text `#0e0f0c` on `#e8ebe6` → ratio > 12:1
- Body text `#454745` on white → ratio > 7:1
- Mute text `#868685` on white → ratio ~3.5:1 (decorative/non-essential only)
- Dark mode `white` on `#0e0f0c` → ratio > 18:1
- All accent palettes maintain minimum 4.5:1 contrast via curated fg colors

### Focus States
- Form inputs: `focus:ring-2` with accent-tinted ring color
- Buttons: `focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]`
- Select elements: `focus:ring-2` with `var(--ap)` ring color

### Keyboard Navigation
- All nav links are `<a>` elements with `href` (keyboard focusable)
- Mobile menu toggle has `aria-label="Toggle menu"`
- Social links include `<span class="sr-only">` labels
- Scroll nav buttons have `aria-label` attributes
- Theme buttons have individual `aria-label` attributes

### Touch Targets
- All buttons render ≥ 40px tall (most are 48–56px)
- Mobile nav links have generous padding (`py-6`, `pb-4`)
- Circular buttons are `size-10` (40px) minimum

---

## 12. Design Patterns

### Hero Section
- Full viewport height (`min-h-screen`)
- Sage background (`bg-[#e8ebe6]`)
- Split layout: headline left (60%), interactive widget right (40%)
- `<FadeIn>` stagger: headline → subtitle → CTAs → widget (delays 0.1, 0.22, 0.32, 0.28)
- Two CTA buttons: primary accent + outline

### Content Sections
- Alternate between sage (`bg-[#e8ebe6]`) and white (`bg-white`) backgrounds
- `border-t border-[#0e0f0c]/5` separates sections
- Centered section heading + descriptive subtitle pattern

### Card Grid Pattern
- `grid md:grid-cols-2` or `md:grid-cols-3 gap-6`
- Cards use white bg on sage sections, sage bg on white sections
- Each card wraps in `<FadeIn delay={index * 0.1}>`

### Sticky Card Stack (Projects)
- Each card is `sticky top-20` with descending z-index
- Scale reduces per card via `useTransform`
- Mobile fallback: shadcn `<Accordion>` with cards as items

### Horizontal Scroll (Certificates)
- `overflow-x-auto` with hidden scrollbar
- Fixed-width cards with `snap-x snap-mandatory`
- Navigation: circular prev/next buttons

### Timeline (Experience)
- Vertical border-left line
- Accent-colored dots at each entry
- Content beside the line with staggered `<FadeIn>`

### Mind-Map (Explore)
- SVG curved bezier connections from center node to leaf nodes
- Animated dots travel along paths
- Pulsing center node with `accent-bg`
- Leaf nodes scale up + float on hover

### Contact/Footer
- Full contact form with email + textarea
- Social icon grid with hover float animation
- Theme switcher dock (light/dark/system)

---

## 13. AI Instructions

### Do's

1. **Always use accent utility classes** — `accent-text`, `accent-bg`, `accent-tint`, `accent-border` for any primary/interactive color. Never hardcode a specific brand color.
2. **Use `rounded-[24px]`** for all cards, buttons, containers, and interactive surfaces.
3. **Use `font-black` (weight 900)** for ALL headings — section titles, card titles, stat numbers. No exceptions.
4. **Wrap every new section/card in `<FadeIn>`** with appropriate `delay` for stagger.
5. **Alternate section backgrounds** — `bg-[#e8ebe6] dark:bg-[#0e0f0c]` ↔ `bg-white dark:bg-[#121311]`.
6. **Add `transition-colors duration-300`** to every section container.
7. **Include both light AND dark mode** styles on every element.
8. **Use `border border-[#0e0f0c]/5 dark:border-white/5`** on all cards.
9. **Use Lucide icons** exclusively. Size them with `w-N h-N` or `size-N`.
10. **Use `motion/react`** (not `framer-motion`) for all animations.
11. **Keep sections within `max-w-[1400px] mx-auto px-6 lg:px-12`**.
12. **Use `hover:shadow-xl`** for card hover states, not colored shadows.

### Don'ts

1. **Don't hardcode accent colors** — no `text-blue-500`, `bg-green-400`, etc. for primary actions.
2. **Don't use sharp corners** — minimum `rounded-lg` (8px) for any element, prefer `rounded-[24px]`.
3. **Don't use heavy box-shadows** — rely on surface contrast + subtle borders for depth.
4. **Don't set headings below weight 700** — display text is always 900, labels are 700.
5. **Don't skip dark mode** — every color must have a `dark:` variant.
6. **Don't use CSS animations for entrances** — use `<FadeIn>` component or `motion/react`.
7. **Don't add new icon libraries** — Lucide only.
8. **Don't use `className="container"`** — use explicit `max-w-` + `mx-auto`.
9. **Don't use colored borders** on cards — stick to `black/5` or `white/5` opacity patterns.
10. **Don't create non-responsive layouts** — always include `sm:`, `md:`, `lg:` breakpoints.

### Component Reuse Rules
- Reuse `<FadeIn>` for all scroll-triggered entrances
- Reuse accent utility classes (`accent-bg`, `accent-text`, etc.) — never recreate
- Import dialogs from `@/components/ui/dialog` (shadcn)
- Import accordion from `@/components/ui/accordion` (shadcn)
- Use `toast` from `sonner` for notifications

### Layout Rules
- Hero: `min-h-screen`, sage bg, split grid
- Sections: `py-24 sm:py-32`, alternating bg, `border-t`
- Footer: `rounded-t-[24px]` to overlap previous section

### Color Usage Rules
- **Accent** → CTAs, active states, progress bars, interactive highlights
- **Ink `#0e0f0c`** → headings, strong text, dark backgrounds
- **Ink-soft `#454745`** → body text, secondary info
- **Mute `#868685`** → captions, placeholders, tertiary info
- **Canvas-soft `#e8ebe6`** → page backgrounds, sage bands
- **Canvas `#ffffff`** → card surfaces, elevated containers

### Mobile Responsiveness Rules
- Stack grids to single column below `md:` (768px)
- Hide complex widgets below `md:` (e.g., hero console, project media grid)
- Provide accordion fallback for stacked card layouts
- Nav switches from centered pill to hamburger below `lg:` (1024px)
- Font sizes scale down: hero 120→60px, sections 56→40px

---

## 14. Examples

### Good Usage ✅

```tsx
// Correct: accent-aware card with proper structure
<FadeIn delay={0.2}>
  <div className="p-8 sm:p-10 bg-white dark:bg-[#121311]
    border border-[#0e0f0c]/5 dark:border-white/5
    rounded-[24px] shadow-sm transition-all hover:shadow-xl">
    <span className="text-[11px] font-bold uppercase tracking-widest accent-text mb-5 block">
      Category
    </span>
    <h3 className="text-xl font-black text-[#0e0f0c] dark:text-white mb-4">
      Card Title
    </h3>
    <p className="text-[#454745] dark:text-[#868685] font-medium">
      Description text here.
    </p>
    <button className="mt-6 inline-flex h-10 items-center justify-center gap-2
      rounded-[24px] accent-bg px-5 text-[13px] font-bold shadow-lg">
      Action
    </button>
  </div>
</FadeIn>
```

### Bad Usage ❌

```tsx
// WRONG: hardcoded color, sharp corners, no dark mode, no FadeIn
<div className="p-4 bg-blue-500 text-white rounded-md shadow-2xl">
  <h3 className="text-lg font-semibold">Title</h3>
  <p className="text-gray-200">Description</p>
  <button className="bg-blue-700 px-4 py-2 rounded">Click</button>
</div>
```

**What's wrong:**
- `bg-blue-500` → should use `accent-bg`
- `rounded-md` → should be `rounded-[24px]`
- `font-semibold` → should be `font-black`
- No `dark:` variants
- No `<FadeIn>` wrapper
- `shadow-2xl` is too heavy — use `shadow-sm` + `hover:shadow-xl`
- No border defined

### Preferred Component Combinations

**Section with card grid:**
```
<section> (sage bg + border-t)
  └── <div> (max-w container)
      ├── <FadeIn> → <h2> (font-black, 5xl/7xl)
      └── <div> (grid md:grid-cols-3 gap-6)
          ├── <FadeIn delay={0}> → Card (white bg)
          ├── <FadeIn delay={0.1}> → Card (white bg)
          └── <FadeIn delay={0.2}> → Card (white bg)
```

**Card with stats:**
```
Card (white bg, rounded-[24px], shadow-sm)
  ├── Icon + Title row (accent-text icon, font-black title)
  ├── Stat label (text-[13px] font-bold mute color)
  ├── Stat value (text-3xl font-black ink color)
  └── Progress bar (accent-bg fill, rounded-full track)
```

**CTA pair:**
```
<div> (flex gap-4)
  ├── Primary button (accent-bg, shadow-lg, rounded-[24px])
  └── Outline button (border-2 ink, rounded-[24px], hover:fill-ink)
```
