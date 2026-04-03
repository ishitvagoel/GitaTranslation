document.addEventListener('DOMContentLoaded', () => {
  // Sidebar Logic
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

  // Responsive Table Wrapping
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

  // Verse Card Wrapping Logic
  const pageContent = document.querySelector('.page-content .wrapper');
  if (pageContent) {
    const elements = Array.from(pageContent.children);
    let currentCard = null;

    elements.forEach(el => {
      // Verse headers are h3 and contain a dot (e.g. 1.1, 18.78)
      if (el.tagName === 'H3' && /^\d+\.\d+$/.test(el.textContent.trim())) {
        currentCard = document.createElement('div');
        currentCard.className = 'verse-card';
        el.parentNode.insertBefore(currentCard, el);
        
        const ref = document.createElement('span');
        ref.className = 'verse-ref';
        ref.textContent = el.textContent;
        currentCard.appendChild(ref);
        el.remove();
      } else if (currentCard) {
        if (el.tagName === 'HR') {
          el.remove();
          currentCard = null;
        } else {
          // Identify Sanskrit, IAST, and English
          if (el.tagName === 'P') {
            const text = el.textContent.trim();
            // Simple heuristic: Sanskrit contains Devanagari
            if (/[\u0900-\u097F]/.test(text)) {
              el.className = 'verse-sanskrit';
            } 
            // IAST often has | or // for verse markers, or the word uvāca
            else if (text.includes('|') || text.includes('//') || /uvāca/i.test(text)) {
              el.className = 'verse-iast';
            }
            else if (text.startsWith('Simple Translation:')) {
              el.className = 'verse-simple-translation';
              el.textContent = text.replace('Simple Translation:', '').trim();
            }
            else if (text.startsWith('Contemporary Relevance:')) {
              el.className = 'verse-relevance';
              el.textContent = text.replace('Contemporary Relevance:', '').trim();
            }
            else {
              el.className = 'verse-translation';
            }
          }
          currentCard.appendChild(el);
        }
      }
    });
  }

  // Theme Toggle Persistence
  const themeToggle = document.querySelector('.theme-toggle input');
  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      const theme = themeToggle.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });

    // Initialize toggle state
    const currentTheme = document.documentElement.getAttribute('data-theme');
    themeToggle.checked = currentTheme === 'dark';
  }
});
