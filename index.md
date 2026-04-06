---
layout: default
title: Home
---

# Bhagavad Gita: A First-Principles English Translation

A fresh English translation of the complete Bhagavad Gita (18 chapters, 700 verses), translated directly from Sanskrit using the BORI Critical Edition as the primary source text.

<div id="continue-reading" class="continue-reading-banner" style="display:none">
  <a href="{{ site.baseurl }}/chapters/chapter-__CHAPTER__">Continue reading →</a>
</div>

## Principles

- Direct translation from Sanskrit using Pāṇinian grammatical analysis
- No alignment with any existing English translation
- No imported theological or sectarian frameworks
- Preservation of philosophical density over readability
- Context-sensitive rendering of key terms — no fixed glosses
- Translator's notes only where the text demands clarification

## Source Text

Bhagavad Gītā, critically edited text from the Bhandarkar Oriental Research Institute (BORI) Critical Edition of the Mahābhārata.

## Chapters

{% assign chapters = "01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18" | split: "," %}
{% assign titles = "Arjunaviṣādayogaḥ,Sāṅkhyayogaḥ,Karmayogaḥ,Jñānakarmasaṃnyāsayogaḥ,Karmasaṃnyāsayogaḥ,Dhyānayogaḥ,Jñānavijñānayogaḥ,Akṣarabrahmayogaḥ,Rājavidyārājaguhyayogaḥ,Vibhūtiyogaḥ,Viśvarūpadarśanayogaḥ,Bhaktiyogaḥ,Kṣetrakṣetrajñavibhāgayogaḥ,Guṇatrayavibhāgayogaḥ,Puruṣottamayogaḥ,Daivāsurasampadvibhāgayogaḥ,Śraddhātrayavibhāgayogaḥ,Mokṣasaṃnyāsayogaḥ" | split: "," %}
{% assign english_titles = "Arjuna's Despair,Discernment,Selfless Action,Wisdom and Action,Renunciation,Meditation,Knowledge and Realization,The Imperishable Absolute,The Royal Secret,Divine Manifestations,The Universal Form,Devotion,The Field and Knower,The Three Qualities,The Supreme Person,Divine and Demonic,The Three Kinds of Faith,Freedom through Renunciation" | split: "," %}
{% assign sanskrit_titles = "अर्जुनविषादयोगः,साङ्ख्ययोगः,कर्मयोगः,ज्ञानकर्मसंन्यासयोगः,कर्मसंन्यासयोगः,ध्यानयोगः,ज्ञानविज्ञानयोगः,अक्षरब्रह्मयोगः,राजविद्याराजगुह्ययोगः,विभूतियोगः,विश्वरूपदर्शनयोगः,भक्तियोगः,क्षेत्रक्षेत्रज्ञविभागयोगः,गुणत्रयविभागयोगः,पुरुषोत्तमयोगः,दैवासुरसम्पद्विभागयोगः,श्रद्धात्रयविभागयोगः,मोक्षसंन्यासयोगः" | split: "," %}
{% assign verse_counts = "46,72,43,42,29,47,30,28,34,42,55,20,34,27,20,24,28,78" | split: "," %}
{% assign descriptions = "On the eve of battle, Arjuna sees his kinsmen arrayed as enemies and collapses in grief — the crisis that launches the Gita's inquiry.,Krishna introduces the foundational distinction between the eternal self and the perishable body, and lays out the framework of action.,How right action performed without attachment to results is itself a form of renunciation — the yoga of selfless action.,Why renouncing action and performing action are not opposed: wisdom burns karma, making action without bondage possible.,The outer renunciation of results and the inner renunciation of the self — and why they converge in the same liberated state.,The discipline of meditation: steadying the restless mind, withdrawing from sense-objects, and establishing the self in itself.,Knowledge and realized wisdom are distinguished — knowing about the Absolute versus direct perception of it in all things.,The imperishable Absolute, the nature of death and rebirth, and how the yogi at the moment of death determines the next state.,The most confidential teaching: Krishna reveals his cosmic identity and the effortless grace available to the devoted.,Krishna reveals how the whole universe flows from a fraction of his power — divine manifestations as pointers to the infinite.,Arjuna requests to see Krishna's universal form. The cosmic vision — and the withdrawal from it back to the personal form.,Bhakti yoga: devotion as the highest path, qualities of the ideal devotee, and the grace that transcends all technique.,The field of matter and its knower, the distinction between the perishable and the imperishable, and the path to liberation.,The three gunas — sattva, rajas, tamas — as the fundamental qualities conditioning all existence, action, and rebirth.,The supreme person (Puruṣottama) beyond both the perishable and the imperishable — the highest self that pervades and sustains all.,Divine and demonic natures laid out in full — the qualities that lead toward liberation and those that lead toward bondage.,Faith, worship, and practice are each conditioned by the three gunas — even the manner of austerity, charity, and diet.,The synthesis: true renunciation means renouncing the fruits of all action, not the actions themselves — the path to final freedom." | split: "," %}

<div class="chapter-grid">
{% for chapter_num in chapters %}
  {% assign index = forloop.index0 %}
  <a href="{{ site.baseurl }}/chapters/chapter-{{ chapter_num }}" class="chapter-card" data-chapter="{{ chapter_num | plus: 0 }}">
    <div class="chapter-card-num">{{ chapter_num | plus: 0 }}</div>
    <div class="chapter-card-body">
      <div class="chapter-card-sanskrit">{{ sanskrit_titles[index] }}</div>
      <div class="chapter-card-iast">{{ titles[index] }}</div>
      <div class="chapter-card-english">{{ english_titles[index] }}</div>
      <div class="chapter-card-desc">{{ descriptions[index] }}</div>
      <div class="chapter-card-meta">{{ verse_counts[index] }} verses</div>
    </div>
    <span class="chapter-card-read-badge" title="Read">✓</span>
  </a>
{% endfor %}
</div>

## Methodology

See [METHODOLOGY](METHODOLOGY) for detailed translation principles.

## Glossary

See [glossary](glossary) for key terms and translation rationale.

## License

MIT License. See [LICENSE](LICENSE).

<script>
(function() {
  // Continue reading banner
  var lastChapter = localStorage.getItem('last-chapter');
  if (lastChapter) {
    var banner = document.getElementById('continue-reading');
    if (banner) {
      var pad = String(lastChapter).padStart(2, '0');
      var link = banner.querySelector('a');
      if (link) {
        link.href = link.href.replace('__CHAPTER__', pad);
        link.textContent = 'Continue reading \u2192 Chapter ' + lastChapter;
        banner.style.display = 'block';
      }
    }
  }
  // Mark read chapters on chapter cards
  var readChapters = JSON.parse(localStorage.getItem('read-chapters') || '[]');
  readChapters.forEach(function(num) {
    var card = document.querySelector('.chapter-card[data-chapter="' + num + '"]');
    if (card) card.classList.add('read');
  });
})();
</script>
