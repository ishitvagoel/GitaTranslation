# Design Spec: Verse Additions (Simple Translation & Contemporary Relevance)

**Date:** 2026-04-02  
**Status:** Draft  
**Topic:** Adding "Simple Translation" and "Contemporary Relevance" sections to all Bhagavad Gita verses.

## 1. Objective
To enhance the accessibility and practical application of the Bhagavad Gita translation by adding two new sections to every verse:
1.  **Simple English Translation:** A version of the verse using modern English grammar and clear sentence structure, without losing the original meaning.
2.  **Contemporary Relevance:** A section explaining how the verse applies to modern-day challenges and life situations, derived using "First Principles Thinking" directly from the Sanskrit/IAST roots.

## 2. Content Strategy
### 2.1 First Principles Approach
All content for the "Simple Translation" and "Contemporary Relevance" will be generated autonomously based on internal knowledge of the Sanskrit and IAST texts. 
*   **Constraint:** Avoid influence from existing translations or commentaries.
*   **Methodology:** Deconstruct the verse into its core philosophical and ethical components (First Principles) and reconstruct them for a modern audience.

### 2.2 Content Format (Markdown)
Each verse in the `chapters/*.md` files will follow this structure:

```markdown
### [Chapter].[Verse]

[Sanskrit Devanagari]

[IAST Transliteration]

[Original English Translation]

**Simple Translation:** [Generated content]

**Contemporary Relevance:** [Generated content]

[Optional: > **Note:** Technical philological notes]
```

## 3. Technical Implementation (Approach 1: Text-Prefix)
### 3.1 JavaScript Parser Updates (`assets/js/main.js`)
The `Verse Card Wrapping Logic` will be updated to:
1.  Identify paragraphs starting with `**Simple Translation:**`.
2.  Strip the prefix and apply the CSS class `.verse-simple-translation`.
3.  Identify paragraphs starting with `**Contemporary Relevance:**`.
4.  Strip the prefix and apply the CSS class `.verse-relevance`.

### 3.2 Styling Updates (`assets/css/main.scss`)
*   **`.verse-simple-translation`**:
    *   `font-size: 16px` (slightly smaller than primary translation).
    *   `color: var(--text-muted)` (less visual weight).
    *   `margin-top: 8px`.
*   **`.verse-relevance`**:
    *   `background-color: rgba(var(--accent-rgb), 0.05)`.
    *   `border-left: 3px solid var(--accent)`.
    *   `padding: 12px 16px`.
    *   `border-radius: 4px`.
    *   `margin-top: 16px`.
    *   `font-style: italic`.

## 4. Execution Plan
1.  **Styling & JS Preparation:** Update the CSS and JS to handle the new classes.
2.  **Batch Processing:** Systematically process each chapter (1-18) using a script or automated agent to generate and append the new content.
3.  **Verification:** Manual spot-checks of several verses in each chapter to ensure consistency and quality of the First Principles analysis.

## 5. Success Criteria
*   All 700+ verses updated with both sections.
*   No breaking changes to the existing layout or "Note" sections.
*   Mobile-friendly rendering of the new relevance boxes.
*   Translations are clear, grammatically simple, and faithful to the source.
