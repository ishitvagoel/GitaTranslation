document.addEventListener('DOMContentLoaded', () => {
  // ──────────────────────────────────────────────
  // 1. SIDEBAR LOGIC
  // ──────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('close-sidebar');

  const toggleSidebar = () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
  };

  if (hamburger) hamburger.addEventListener('click', toggleSidebar);
  if (closeBtn) closeBtn.addEventListener('click', toggleSidebar);
  if (overlay) overlay.addEventListener('click', toggleSidebar);

  // ──────────────────────────────────────────────
  // 2. RESPONSIVE TABLE WRAPPING
  // ──────────────────────────────────────────────
  document.querySelectorAll('table').forEach(table => {
    if (!table.closest('.table-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'table-wrapper';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }
  });

  // ──────────────────────────────────────────────
  // 3. VERSE CARD WRAPPING + ID ANCHORS + DEEP LINKS
  // ──────────────────────────────────────────────
  const pageContent = document.querySelector('.page-content .wrapper');
  const verseCards = [];

  if (pageContent) {
    const elements = Array.from(pageContent.children);
    let currentCard = null;
    let currentVerseRef = null;

    elements.forEach(el => {
      if (el.tagName === 'H3' && /^\d+\.\d+$/.test(el.textContent.trim())) {
        currentVerseRef = el.textContent.trim();
        currentCard = document.createElement('div');
        currentCard.className = 'verse-card';
        // Set ID for deep-linking: "1.1" → "verse-1-1"
        const anchorId = 'verse-' + currentVerseRef.replace('.', '-');
        currentCard.id = anchorId;
        el.parentNode.insertBefore(currentCard, el);

        const ref = document.createElement('span');
        ref.className = 'verse-ref';
        ref.textContent = currentVerseRef;
        currentCard.appendChild(ref);

        // Copy-link button
        const copyBtn = document.createElement('button');
        copyBtn.className = 'verse-copy-link';
        copyBtn.title = 'Copy link to this verse';
        copyBtn.setAttribute('aria-label', 'Copy link to verse ' + currentVerseRef);
        copyBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
        copyBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const url = window.location.origin + window.location.pathname + '#' + anchorId;
          navigator.clipboard.writeText(url).then(() => {
            copyBtn.classList.add('copied');
            setTimeout(() => copyBtn.classList.remove('copied'), 1500);
          });
        });
        currentCard.appendChild(copyBtn);

        el.remove();
        verseCards.push(currentCard);
      } else if (currentCard) {
        if (el.tagName === 'HR') {
          el.remove();
          currentCard = null;
        } else {
          const createLabel = (text) => {
            const label = document.createElement('span');
            label.className = 'verse-label';
            label.textContent = text;
            return label;
          };

          if (el.tagName === 'P') {
            const text = el.textContent.trim();
            let isExtra = false;

            if (/[\u0900-\u097F]/.test(text)) {
              el.className = 'verse-sanskrit';
              currentCard.appendChild(createLabel('Sanskrit'));
            } else if (text.includes('|') || text.includes('//') || /uvāca/i.test(text)) {
              el.className = 'verse-iast';
              currentCard.appendChild(createLabel('Transliteration'));
            } else if (text.startsWith('Simple Translation:')) {
              el.className = 'verse-simple-translation';
              el.textContent = text.replace('Simple Translation:', '').trim();
              currentCard.appendChild(createLabel('Simple Translation'));
            } else if (text.startsWith('Argument Arc:')) {
              el.className = 'verse-argument-arc verse-extra';
              el.innerHTML = el.innerHTML.replace('Argument Arc:', '').trim();
              currentCard.appendChild(createLabel('Argument Arc'));
              isExtra = true;
            } else if (text.startsWith('Contemporary Relevance:')) {
              el.className = 'verse-relevance verse-extra';
              el.textContent = text.replace('Contemporary Relevance:', '').trim();
              currentCard.appendChild(createLabel('Contemporary Relevance'));
              isExtra = true;
            } else if (text.startsWith('Neuroscience Perspective:')) {
              el.className = 'verse-neuroscience verse-extra';
              el.textContent = text.replace('Neuroscience Perspective:', '').trim();
              currentCard.appendChild(createLabel('Neuroscience Perspective'));
              isExtra = true;
            } else if (text.startsWith('Common Misreading:')) {
              el.className = 'verse-misreading verse-extra';
              el.textContent = text.replace('Common Misreading:', '').trim();
              currentCard.appendChild(createLabel('Common Misreading'));
              isExtra = true;
            } else {
              el.className = 'verse-translation';
              currentCard.appendChild(createLabel('Primary Translation'));
            }

            // Mark extra labels too
            if (isExtra) {
              const labels = currentCard.querySelectorAll('.verse-label');
              if (labels.length > 0) labels[labels.length - 1].classList.add('verse-label-extra');
            }
          } else if (el.tagName === 'BLOCKQUOTE') {
            currentCard.appendChild(createLabel('Notes'));
          } else if (el.tagName === 'STRONG' && el.parentElement === currentCard) {
            // standalone bold paragraph — skip wrapping
          }
          currentCard.appendChild(el);
        }
      }
    });

    // ── Wrap extra elements in collapsible container ──
    verseCards.forEach(card => {
      const extraLabels = card.querySelectorAll('.verse-label-extra');
      if (extraLabels.length === 0) return;

      const extras = document.createElement('div');
      extras.className = 'verse-extras';

      // Collect all extra label+content pairs
      extraLabels.forEach(label => {
        const next = label.nextElementSibling;
        extras.appendChild(label);
        if (next && next !== label) extras.appendChild(next);
      });

      // Toggle button
      const toggleBtn = document.createElement('button');
      toggleBtn.className = 'verse-extras-toggle';
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '<span class="toggle-label-show">Show commentary ▾</span><span class="toggle-label-hide">Hide commentary ▴</span>';
      card.appendChild(toggleBtn);
      card.appendChild(extras);

      toggleBtn.addEventListener('click', () => {
        const expanded = extras.classList.toggle('expanded');
        toggleBtn.setAttribute('aria-expanded', String(expanded));
      });
    });

    // Apply global expand/collapse preference
    const verseMode = localStorage.getItem('verse-mode');
    if (verseMode === 'expanded') {
      document.querySelectorAll('.verse-extras').forEach(e => {
        e.classList.add('expanded');
        const btn = e.previousElementSibling;
        if (btn) btn.setAttribute('aria-expanded', 'true');
      });
    }
  }

  // ──────────────────────────────────────────────
  // 4. READING PROGRESS TRACKING
  // ──────────────────────────────────────────────
  const chapterNumMeta = document.querySelector('meta[name="chapter-num"]');
  if (chapterNumMeta) {
    const chNum = chapterNumMeta.content;
    localStorage.setItem('last-chapter', chNum);
    // Track read chapters
    let readChapters = JSON.parse(localStorage.getItem('read-chapters') || '[]');
    if (!readChapters.includes(chNum)) {
      readChapters.push(chNum);
      localStorage.setItem('read-chapters', JSON.stringify(readChapters));
    }
    // Mark sidebar items as read
    updateSidebarReadState();
  }

  // Homepage: "Continue reading" banner
  const continueReading = document.getElementById('continue-reading');
  if (continueReading) {
    const lastChapter = localStorage.getItem('last-chapter');
    if (lastChapter) {
      const pad = String(lastChapter).padStart(2, '0');
      const link = continueReading.querySelector('a');
      if (link) {
        link.href = link.href.replace('__CHAPTER__', pad);
        link.textContent = 'Continue reading → Chapter ' + lastChapter;
        continueReading.style.display = 'block';
      }
    }
  }

  function updateSidebarReadState() {
    const readChapters = JSON.parse(localStorage.getItem('read-chapters') || '[]');
    document.querySelectorAll('.sidebar-nav li[data-chapter]').forEach(li => {
      if (readChapters.includes(li.dataset.chapter)) {
        li.classList.add('read');
      }
    });
  }
  updateSidebarReadState();

  // ──────────────────────────────────────────────
  // 5. JUMP-TO-VERSE
  // ──────────────────────────────────────────────
  const jumpInput = document.getElementById('jump-verse-input');
  if (jumpInput) {
    jumpInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = jumpInput.value.trim();
        const anchorId = 'verse-' + val.replace('.', '-');
        const target = document.getElementById(anchorId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          jumpInput.value = '';
          jumpInput.blur();
        } else {
          jumpInput.classList.add('jump-error');
          setTimeout(() => jumpInput.classList.remove('jump-error'), 600);
        }
      }
      if (e.key === 'Escape') jumpInput.blur();
    });
  }

  // Scroll to hash on page load (for deep links)
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
    }
  }

  // ──────────────────────────────────────────────
  // 6. CHAPTER PROGRESS INDICATOR
  // ──────────────────────────────────────────────
  const progressIndicator = document.getElementById('verse-progress');
  if (progressIndicator && verseCards.length > 0) {
    const total = verseCards.length;
    progressIndicator.textContent = '1 / ' + total;
    progressIndicator.style.display = 'inline-block';

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = verseCards.indexOf(entry.target) + 1;
          if (idx > 0) progressIndicator.textContent = idx + ' / ' + total;
        }
      });
    }, { rootMargin: '-60px 0px -60% 0px', threshold: 0 });

    verseCards.forEach(card => observer.observe(card));
  }

  // ──────────────────────────────────────────────
  // 7. FONT SIZE CONTROLS
  // ──────────────────────────────────────────────
  const fontScales = { small: '0.875', medium: '1', large: '1.175' };
  const savedScale = localStorage.getItem('font-scale') || 'medium';
  applyFontScale(savedScale);

  document.querySelectorAll('.font-size-btn').forEach(btn => {
    if (btn.dataset.scale === savedScale) btn.classList.add('active');
    btn.addEventListener('click', () => {
      const scale = btn.dataset.scale;
      applyFontScale(scale);
      localStorage.setItem('font-scale', scale);
      document.querySelectorAll('.font-size-btn').forEach(b => b.classList.toggle('active', b.dataset.scale === scale));
    });
  });

  function applyFontScale(scale) {
    document.documentElement.style.setProperty('--font-scale', fontScales[scale] || '1');
  }

  // ──────────────────────────────────────────────
  // 8. THEME TOGGLE PERSISTENCE
  // ──────────────────────────────────────────────
  const themeToggle = document.querySelector('.theme-toggle input');
  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      const theme = themeToggle.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
    const currentTheme = document.documentElement.getAttribute('data-theme');
    themeToggle.checked = currentTheme === 'dark';
  }

  // ──────────────────────────────────────────────
  // 9. KEYBOARD SHORTCUTS
  // ──────────────────────────────────────────────
  const shortcutsModal = document.getElementById('shortcuts-modal');

  document.addEventListener('keydown', (e) => {
    const tag = document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;

    switch (e.key) {
      case '[':
        navigateChapter(-1);
        break;
      case ']':
        navigateChapter(1);
        break;
      case '/':
        e.preventDefault();
        if (jumpInput) { jumpInput.focus(); jumpInput.select(); }
        break;
      case '?':
        if (shortcutsModal) shortcutsModal.classList.toggle('open');
        break;
      case 'Escape':
        if (sidebar && sidebar.classList.contains('open')) toggleSidebar();
        if (shortcutsModal) shortcutsModal.classList.remove('open');
        break;
    }
  });

  if (shortcutsModal) {
    shortcutsModal.addEventListener('click', (e) => {
      if (e.target === shortcutsModal) shortcutsModal.classList.remove('open');
    });
    const closeShortcuts = shortcutsModal.querySelector('.shortcuts-close');
    if (closeShortcuts) closeShortcuts.addEventListener('click', () => shortcutsModal.classList.remove('open'));
  }

  function navigateChapter(direction) {
    const nav = document.querySelector('.chapter-nav');
    if (!nav) return;
    const link = direction < 0
      ? nav.querySelector('.chapter-nav-prev')
      : nav.querySelector('.chapter-nav-next');
    if (link) window.location.href = link.href;
  }
});
