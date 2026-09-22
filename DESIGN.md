---
name: Apple Property Group AG
description: Inhabergeführtes Immobilienunternehmen am Bodensee, ruhiges Rose-Gold-Design ohne Makler-Glanz
colors:
  weathered-rose-gold: "#9a5c4a"
  weathered-rose-gold-deep: "#7a4839"
  rose-gold-blush: "#f3e5de"
  paper-white: "#ffffff"
  warm-linen: "#f6f2ef"
  warm-linen-line: "#e6ded8"
  espresso-ink: "#1c1714"
  warm-taupe: "#5b524c"
  espresso-charcoal: "#1c1512"
  espresso-charcoal-raised: "#251c18"
  espresso-line: "#362a24"
  linen-mist: "#f5f1ee"
  taupe-mist: "#bdb0a8"
typography:
  display:
    fontFamily: "Titillium Web, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  button: "4px"
  card: "6px"
spacing:
  section-sm: "3rem"
  section-md: "4rem"
  section-lg: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.weathered-rose-gold}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.button}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.weathered-rose-gold-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.espresso-ink}"
    rounded: "{rounded.button}"
    padding: "14px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.button}"
    padding: "14px 28px"
---

# Design System: Apple Property Group AG

## Overview

**Creative North Star: "Quiet Rose Gold"**

The site reads like a well-run, owner-led business, not a real-estate brochure. Rose gold is a rare, precise accent, never a wash: one button, one line under an eyebrow label, one hover state at a time. Everything else sits on paper white or a warm linen tint, set in a crisp, no-nonsense grid that lets the actual project photography (real renders and real rooms, never stock) carry the emotional weight. Corners are barely rounded, shadows only appear as a response to scrolling or hovering, and nothing glows, gradients only exist to keep white hero text readable over a photo.

Confirmed anti-reference: a generic glossy real-estate broker site, stock-photo families, exclamation-mark sales copy, and glossy colour gradients as decoration. This system explicitly rejects all of that.

**Key Characteristics:**
- One accent colour (Weathered Rose Gold) used sparingly, never as a background wash
- Flat-by-default surfaces; shadows appear only on hover, scroll, or open state
- Very shallow corner radii (4 to 6px), "angular, not playful"
- A very wide content column (max 2400px) instead of a boxed 1280px layout
- Real project photography full-bleed in heroes and cards, no illustration, no stock imagery

## Colors

Restrained: a single warm accent against paper white and one warm linen tint, with a warm espresso-charcoal for dark sections instead of pure black.

### Primary
- **Weathered Rose Gold** (`#9a5c4a`): the one accent colour. Primary buttons, active nav links, link hover, focus rings, the small rule above eyebrow labels, category tags on project cards. Contrast against white is 5.24:1, safe for white-on-accent text.
- **Weathered Rose Gold Deep** (`#7a4839`): hover/active state for the primary accent, never used as a resting colour.
- **Rose Gold Blush** (`#f3e5de`): reserved light tint for the accent's "hell" role (badges on dark, quiet backgrounds); currently under-used in the shipped screens but defined for that purpose.

### Neutral
- **Paper White** (`#ffffff`): default page background.
- **Warm Linen** (`#f6f2ef`): section background for alternating bands (project grid, fact boxes, page-header strips), never pure grey.
- **Warm Linen Line** (`#e6ded8`): hairline dividers and borders on light surfaces.
- **Espresso Ink** (`#1c1714`): default body and heading text on light surfaces. Warm near-black, never `#000`.
- **Warm Taupe** (`#5b524c`): secondary/muted text (captions, meta rows, labels).
- **Espresso Charcoal** (`#1c1512`): dark section background (footer, hero underlay before the photo loads, dark call-to-action band never used, that band uses the accent instead).
- **Espresso Charcoal Raised** (`#251c18`): secondary dark surface, one step lighter than Espresso Charcoal.
- **Espresso Line** (`#362a24`): hairline dividers on dark surfaces.
- **Linen Mist** (`#f5f1ee`) / **Taupe Mist** (`#bdb0a8`): primary/secondary text on dark surfaces, mirroring Espresso Ink / Warm Taupe's roles in light mode.

### Named Rules
**The One Accent Rule.** Weathered Rose Gold appears as a fill on at most one element per view (the primary button or the active nav state). Everywhere else it is a line, a label, or a hover colour, never a block of colour behind a whole section.

## Typography

**Display Font:** Titillium Web (with ui-sans-serif, system-ui fallback)
**Body Font:** Inter (with ui-sans-serif, system-ui fallback)

**Character:** Titillium Web's squared, slightly technical letterforms at heavy weight (700/900) give headlines a confident, almost architectural presence without turning decorative; Inter stays completely neutral for body copy so long Swiss-German sentences stay easy to scan.

### Hierarchy
- **Display / titel-1** (700, `clamp` 2.25rem to 6rem, growing further above 2200px, line-height 1.12): page H1, once per page.
- **Headline / titel-2** (700, 1.875rem to 3.75rem): section titles (H2).
- **Title / titel-3** (600, 1.25rem to 1.875rem): card and sub-section titles (H3).
- **Body / einleitung** (400, 1.125rem to 1.5rem, line-height 1.6, on `text-leise`): section intros directly under a headline.
- **Body / default** (400, 1.0625rem desktop 1.125rem, line-height 1.7): running text.
- **Label / ueberzeile** (600, small, `0.14em` tracking, uppercase, Weathered Rose Gold, preceded by an 8px horizontal rule): the small eyebrow line above a title.

### Named Rules
**The Hyphenation Rule.** Long compound German words (`Elektroinstallateur/in`) are allowed to hyphenate (`hyphens: auto`) on narrow screens instead of overflowing; this is load-bearing for German-language headlines and must not be turned off.

## Layout

Full-bleed sections at `py-16` (mobile) to `py-24` (desktop) for standard blocks, `py-12`/`py-16` for compact bands (logo strips), `py-20`/`py-32` for header-less pages (legal pages, error page). A single content wrapper, `container-seite`, centres everything at a **2400px max width** with 24/32/48px side padding (mobile/tablet/desktop), deliberately much wider than the common 1280px container so the layout does not feel like a generic template on large monitors. Long-form text is separately clamped to 72 characters (`lesebreite`) inside that wide wrapper so paragraphs stay readable. An extra `3xl` breakpoint at 2200px lets titles and intros grow one step further on very large screens instead of leaving dead margin. Card grids never leave a dangling empty column: a 4-item grid only goes to 4 columns at the point where 4 divides evenly, otherwise it holds at 3.

## Elevation & Depth

Flat by default. Surfaces carry no resting shadow; depth appears only as a direct response to state; a sticky header raises a soft shadow once the page scrolls past the top, a project card's image scales up 4% on hover instead of lifting, and an open dropdown menu or the hero's framed image get one soft shadow because they visually float above the page.

### Shadow Vocabulary
- **Header-scrolled** (`box-shadow: 0 8px 30px -12px rgba(0,0,0,0.12)`): sticky header once the page has scrolled, paired with a blurred, semi-transparent background.
- **Dropdown / menu-panel** (Tailwind `shadow-xl`): open navigation submenus and mega-menu panels.
- **Hero-framed-image** (`box-shadow: 0 30px 80px -30px rgba(0,0,0,0.35)`): the framed photo in the split-layout hero variant, the one deliberately "lifted" element on the site.

### Named Rules
**The Response-Only Shadow Rule.** A shadow only ever appears because of scroll position, hover, or an open/closed state. No card, button, or section carries a shadow at rest.

## Shapes

Corners are deliberately shallow: 4px on buttons, 6px on cards and image frames, both far short of the rounded-2xl look of typical template sites. The brief for this is explicit in code: "eher kantig als verspielt" (angular rather than playful), chosen so the site reads as a sachlich (matter-of-fact) real-estate developer rather than a consumer app. Borders are 1px hairlines in Warm Linen Line (light) or Espresso Line (dark), never heavier. No clipping, blob shapes, or decorative geometry anywhere in the system.

## Components

### Buttons
- **Shape:** 4px radius (`--radius-knopf`), minimum 48px/56px tap height (mobile/desktop).
- **Primary:** Weathered Rose Gold fill, white text, 14px/28px padding scaling up on desktop; hover darkens to Weathered Rose Gold Deep.
- **Secondary:** transparent, 1px border in the current text colour, hover fills with Espresso Ink and flips text to white. Used on light backgrounds only.
- **Ghost (on image):** transparent with a 40%-opacity white border for use over hero photography; hover fills solid white with Espresso Ink text. This is the only button variant allowed directly on a photograph.

### Cards (project / reference tiles)
- **Corner Style:** 6px radius (`--radius-karte`).
- **Background:** Warm Linen behind the image placeholder; no border, no shadow at rest.
- **Image:** 4:3 crop, scales to 104% on hover (700ms ease-out), the only "lift" affordance a card has.
- **Meta row:** category (Weathered Rose Gold, semibold) · location · month/year, in Warm Taupe.
- **Title / description:** titel-3 heading, two-line-clamped description underneath in Warm Taupe.

### Inputs / Fields
- **Style:** 1px Warm Linen Line border, white fill, `rounded-md`, comfortable 12px/16px padding.
- **Focus:** border switches to Weathered Rose Gold plus a 25%-opacity Weathered Rose Gold focus ring (`ring-2`).
- **Placeholder:** Warm Taupe at 70% opacity.

### Navigation
- **Style:** sticky header, transparent over the page until scrolled, then a blurred, near-opaque Paper White bar with the header-scrolled shadow. Logo left, links centred/right, phone number and a Weathered-Rose-Gold "Kontakt" button on the far right (desktop only above 1280px).
- **States:** the active route's link and any open dropdown trigger turn Weathered Rose Gold; a mega-menu (3+ sub-items) opens as a two-column panel with a 2px Weathered Rose Gold top border; a short submenu opens as a plain single-column list.
- **Mobile:** a full-height off-canvas panel (300ms slide/fade), the same nav links stacked large, with the phone number and Kontakt button repeated inside it; Escape closes it and returns focus to the trigger.

### Hero (signature component)
Two variants sharing one rhythm: **Vollbild** (full-bleed photo, directional black gradient for legible white text, used for the homepage and any page that should feel like an opener) and **Geteilt** (text on a quiet Warm Linen field with a faint 64px grid pattern behind it, photo framed right with the hero-framed-image shadow, used for interior pages like "Über uns"). Both fade their text block in on load (`animate-einblenden`, 700ms, no scroll trigger since it is above the fold).

## Do's and Don'ts

### Do:
- **Do** keep Weathered Rose Gold to one filled element per screen; everywhere else use it as a line, label, or hover state (The One Accent Rule).
- **Do** use real project photography full-bleed in heroes and cards; never stock photography or illustration.
- **Do** keep radii shallow (4px buttons, 6px cards); never jump to fully rounded ("pill") buttons or large `rounded-2xl` cards.
- **Do** let shadows appear only in response to scroll, hover, or open state (The Response-Only Shadow Rule).
- **Do** keep the content wrapper at up to 2400px; a narrower, centred 1280px container is the generic-template look this system exists to avoid.

### Don't:
- **Don't** fill a whole section, card, or hero background with the accent colour; it reads as a coupon banner, not a developer's site.
- **Don't** add drop shadows, glows, or gradients as decoration; the only permitted gradient is the black overlay behind hero text on a photo.
- **Don't** write sales-brochure copy (exclamation marks, "Jetzt anfragen!", superlatives); the tone is Swiss-German, factual, and trustworthy, matching PRODUCT.md's voice commitment.
- **Don't** invent stats, testimonials, or team photos that are not confirmed; empty states (no photo) render a plain outline person icon, never a placeholder stock headshot.
