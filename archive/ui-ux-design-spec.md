# Design Spec: UI/UX Overhaul & Mobile Support

**Date:** 2026-03-30  
**Status:** Approved  
**Topic:** Modernizing the Bhagavad Gītā Translation Site for Readability and Mobile Support

---

## 1. Objective
To transform the current Jekyll-based translation site into a modern, high-contrast, mobile-first reading experience. The focus is on "Verse Cards" that structure the dense Sanskrit and English text into readable units, with a distraction-free navigation system.

## 2. Visual Aesthetic
- **Style:** Modern Clean, high-contrast.
- **Typography:** Sans-serif stack (Inter, System-UI, Roboto, Helvetica, Arial).
- **Color Palette:**
    - **Light Mode:** Pure White (`#FFFFFF`) background, Dark Charcoal (`#111827`) text, Muted Grey (`#6B7280`) for metadata.
    - **Dark Mode:** Deep Blue-Black (`#0F172A`) background, Slate-White (`#F8FAFC`) text, Muted Slate (`#94A3B8`) for metadata.
- **Accent Color:** High-contrast Blue (`#2563EB`) in Light mode / Cyan (`#38BDF8`) in Dark mode for links and highlights.

## 3. Core Components

### 3.1 Layout & Grid
- **Max Width:** Content capped at `720px` for optimal reading line length (approx. 75 characters).
- **Verse Cards:**
    - Each verse (Sanskrit + Transliteration + Translation + Notes) wrapped in a container.
    - **Border:** `1px` subtle border with `8px` corner radius.
    - **Padding:** `24px` (desktop), `16px` (mobile).
    - **Spacing:** `32px` vertical margin between cards.

### 3.2 Typography Hierarchy (Within Card)
1.  **Verse Reference (e.g., 1.1):** Top-left, `14px`, medium weight, muted color.
2.  **Sanskrit Text:** **Bold, 22px, Centered**, highest contrast.
3.  **IAST Transliteration:** `16px`, italic, centered or left-aligned, muted color.
4.  **English Translation:** `18px`, medium weight, left-aligned, high contrast.
5.  **Notes:** `15px`, blockquote style with a `4px` left accent border and light background tint.

### 3.3 Navigation & Header
- **Sticky Header:** Fixed at the top (`z-index: 1000`).
    - **Left:** Hamburger icon for Sidebar.
    - **Center:** Current Chapter Title.
    - **Right:** Theme Toggle icon.
- **Slide-out Sidebar (Hidden by default on all screens):**
    - Full-height drawer sliding from the left.
    - Contains a list of all 18 chapters with numbers and titles.
    - Current chapter highlighted with an accent border.
    - Footer links: Home, Glossary, Methodology.

## 4. Mobile Support & Responsiveness
- **Breakpoint:** `768px` for major layout shifts.
- **Responsive Tables:** Table of Contents on the Home page will allow horizontal scrolling if it exceeds screen width.
- **Card Adaptation:** Internal padding shrinks on mobile; font sizes remain legible (min `16px` for main text).

## 5. Technical Implementation Details
- **CSS:** Use CSS Variables for all theme colors and spacing.
- **JS:** Lightweight vanilla JavaScript for sidebar toggle and theme state persistence.
- **Jekyll:** Update `_layouts/default.html` and `_includes/header.html` to support the new structure.
- **Fonts:** System fonts preferred to avoid external loading overhead.

---

## 6. Success Criteria
- [ ] 100% responsive design (no horizontal overflow).
- [ ] High contrast ratios (meeting WCAG AA standards).
- [ ] Intuitive navigation between any of the 18 chapters via the sidebar.
- [ ] Verse units feel visually distinct and easy to "consume" in sequence.
