---
layout: default
title: Search
---

# Search Verses

<div class="search-page">
  <div class="search-bar-wrap">
    <input id="search-input" class="search-page-input" type="search" placeholder="Search translations, themes, Sanskrit terms…" autocomplete="off" autofocus />
    <span id="search-status" class="search-status"></span>
  </div>
  <div id="search-results" class="search-results" aria-live="polite"></div>
</div>

<script src="{{ '/assets/js/search.js' | relative_url }}" defer></script>
<script>
window.SITE_BASEURL = '{{ site.baseurl }}';
</script>
