# UI/UX Overhaul & Mobile Support Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the GitaTranslation site into a modern, high-contrast, mobile-first experience with Verse Cards and a slide-out navigation sidebar.

**Architecture:** A mobile-first CSS approach using CSS Variables for theming, Verse Card components for content structure, and a sticky header with a hidden-by-default sidebar for distraction-free navigation.

**Tech Stack:** Jekyll, Liquid, SCSS, Vanilla JavaScript.

---

### Task 1: Setup CSS Variables and Base Styles

**Files:**
- Create: `assets/css/main.scss`
- Modify: `_config.yml`

- [ ] **Step 1: Define CSS variables for Light and Dark modes in `assets/css/main.scss`**

```scss
:root {
  --bg-color: #ffffff;
  --text-main: #111827;
  --text-muted: #6b7280;
  --accent: #2563eb;
  --border-color: #e5e7eb;
  --card-bg: #ffffff;
  --card-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  --header-bg: rgba(255, 255, 255, 0.8);
  --max-width: 720px;
}

[data-theme="dark"] {
  --bg-color: #0f172a;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --accent: #38bdf8;
  --border-color: #1e293b;
  --card-bg: #1e293b;
  --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --header-bg: rgba(15, 23, 42, 0.8);
}

body {
  font-family: Inter, system-ui, -apple-system, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-main);
  line-height: 1.6;
  margin: 0;
  -webkit-font-smoothing: antialiased;
}

.wrapper {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1rem;
}
```

- [ ] **Step 2: Update `_config.yml` to use `main.scss` (if necessary) or ensure it's loaded.**

- [ ] **Step 3: Commit**

```bash
git add assets/css/main.scss _config.yml
git commit -m "style: initial css variables and base styles"
```

---

### Task 2: Implement Verse Card Component

**Files:**
- Modify: `assets/css/main.scss`
- Modify: `_layouts/default.html` (to wrap content in a card-friendly way if possible, or style existing markdown output)

- [ ] **Step 1: Add Verse Card styles to `assets/css/main.scss`**

```scss
.verse-card {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 32px;
  background-color: var(--card-bg);
  box-shadow: var(--card-shadow);
  
  @media (max-width: 768px) {
    padding: 16px;
  }
}

.verse-ref {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.verse-sanskrit {
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
}

.verse-iast {
  font-size: 16px;
  font-style: italic;
  color: var(--text-muted);
  text-align: center;
  margin-bottom: 16px;
}

.verse-translation {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
}

blockquote {
  font-size: 15px;
  border-left: 4px solid var(--accent);
  padding-left: 16px;
  margin-left: 0;
  color: var(--text-muted);
  background-color: rgba(0, 0, 0, 0.02);
  [data-theme="dark"] & {
    background-color: rgba(255, 255, 255, 0.02);
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add assets/css/main.scss
git commit -m "style: add verse card components"
```

---

### Task 3: Sticky Header and Sidebar Navigation

**Files:**
- Create: `_includes/sidebar.html`
- Create: `assets/js/main.js`
- Modify: `_includes/header.html`
- Modify: `_layouts/default.html`
- Modify: `assets/css/main.scss`

- [ ] **Step 1: Create `_includes/sidebar.html`**

```html
<div id="sidebar" class="sidebar">
  <div class="sidebar-header">
    <h3>Chapters</h3>
    <button id="close-sidebar">&times;</button>
  </div>
  <nav class="sidebar-nav">
    <ul>
      {% for i in (1..18) %}
        {% capture chapter_num %}{% if i < 10 %}0{{ i }}{% else %}{{ i }}{% endif %}{% endcapture %}
        <li {% if page.url contains chapter_num %}class="active"{% endif %}>
          <a href="{{ site.baseurl }}/chapters/chapter-{{ chapter_num }}.md">
            <span>{{ chapter_num }}</span> Arjunaviṣādayogaḥ
          </a>
        </li>
      {% endfor %}
    </ul>
  </nav>
  <div class="sidebar-footer">
    <a href="{{ site.baseurl }}/">Home</a>
    <a href="{{ site.baseurl }}/glossary.md">Glossary</a>
    <a href="{{ site.baseurl }}/METHODOLOGY.md">Methodology</a>
  </div>
</div>
<div id="overlay" class="overlay"></div>
```

- [ ] **Step 2: Create `assets/js/main.js` for sidebar logic**

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('close-sidebar');

  const toggleSidebar = () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggleSidebar);
  closeBtn.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', toggleSidebar);
});
```

- [ ] **Step 3: Update `_includes/header.html` for sticky behavior**

```html
<header class="site-header">
  <div class="header-wrapper">
    <button id="hamburger" class="hamburger-btn">
      <span></span><span></span><span></span>
    </button>
    <div class="header-title">{{ page.title | default: site.title }}</div>
    <div class="header-toggle">
      {% include theme-toggle.html %}
    </div>
  </div>
</header>
```

- [ ] **Step 4: Commit**

```bash
git add _includes/sidebar.html assets/js/main.js _includes/header.html
git commit -m "feat: add sticky header and slide-out sidebar"
```

---

### Task 4: Responsive Table of Contents (Home Page)

**Files:**
- Modify: `assets/css/main.scss`

- [ ] **Step 1: Add responsive table styles**

```scss
.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 500px; /* Force scroll on very small screens */
}

th, td {
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid var(--border-color);
}

th {
  background-color: var(--border-color);
  font-weight: 600;
}
```

- [ ] **Step 2: Commit**

```bash
git add assets/css/main.scss
git commit -m "style: responsive tables for mobile"
```

---

### Task 5: Final Layout Integration and Cleanup

**Files:**
- Modify: `_layouts/default.html`
- Modify: `_includes/custom-head.html`

- [ ] **Step 1: Update `_layouts/default.html` to include sidebar and JS**
- [ ] **Step 2: Ensure `assets/js/main.js` is loaded in `custom-head.html` or at the bottom of `default.html`**
- [ ] **Step 3: Verify no horizontal scrolling on mobile**
- [ ] **Step 4: Commit**

```bash
git add _layouts/default.html _includes/custom-head.html
git commit -m "chore: integrate all components and finalize layout"
```
