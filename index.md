---
layout: default
title: Home
---

# Bhagavad Gita: A First-Principles English Translation

A fresh English translation of the complete Bhagavad Gita (18 chapters, 700 verses), translated directly from Sanskrit using the BORI Critical Edition as the primary source text.

## Principles

- Direct translation from Sanskrit using Pāṇinian grammatical analysis
- No alignment with any existing English translation
- No imported theological or sectarian frameworks
- Preservation of philosophical density over readability
- Context-sensitive rendering of key terms — no fixed glosses
- Translator's notes only where the text demands clarification

## Source Text

Bhagavad Gītā, critically edited text from the Bhandarkar Oriental Research Institute (BORI) Critical Edition of the Mahābhārata.

## Table of Contents

<div class="table-wrapper">
<table>
  <thead>
    <tr>
      <th>Chapter</th>
      <th>Sanskrit Title</th>
      <th>IAST</th>
      <th>English Title</th>
      <th>Verses</th>
    </tr>
  </thead>
  <tbody>
    {% assign chapters = "01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18" | split: "," %}
    {% assign titles = "Arjunaviṣādayogaḥ,Sāṅkhyayogaḥ,Karmayogaḥ,Jñānakarmasaṃnyāsayogaḥ,Karmasaṃnyāsayogaḥ,Dhyānayogaḥ,Jñānavijñānayogaḥ,Akṣarabrahmayogaḥ,Rājavidyārājaguhyayogaḥ,Vibhūtiyogaḥ,Viśvarūpadarśanayogaḥ,Bhaktiyogaḥ,Kṣetrakṣetrajñavibhāgayogaḥ,Guṇatrayavibhāgayogaḥ,Puruṣottamayogaḥ,Daivāsurasampadvibhāgayogaḥ,Śraddhātrayavibhāgayogaḥ,Mokṣasaṃnyāsayogaḥ" | split: "," %}
    {% assign english_titles = "Arjuna's Despair,Discernment,Selfless Action,Wisdom and Action,Renunciation,Meditation,Knowledge and Realization,The Imperishable Absolute,The Royal Secret,Divine Manifestations,The Universal Form,Devotion,The Field and Knower,The Three Qualities,The Supreme Person,Divine and Demonic,The Three Kinds of Faith,Freedom through Renunciation" | split: "," %}
    {% assign sanskrit_titles = "अर्जुनविषादयोगः,साङ्ख्ययोगः,कर्मयोगः,ज्ञानकर्मसंन्यासयोगः,कर्मसंन्यासयोगः,ध्यानयोगः,ज्ञानविज्ञानयोगः,अक्षरब्रह्मयोगः,राजविद्याराजगुह्ययोगः,विभूतियोगः,विश्वरूपदर्शनयोगः,भक्तियोगः,क्षेत्रक्षेत्रज्ञविभागयोगः,गुणत्रयविभागयोगः,पुरुषोत्तमयोगः,दैवासुरसम्पद्विभागयोगः,श्रद्धात्रयविभागयोगः,मोक्षसंन्यासयोगः" | split: "," %}
    {% assign verse_counts = "46,72,43,42,29,47,30,28,34,42,55,20,34,27,20,24,28,78" | split: "," %}
    
    {% for chapter_num in chapters %}
      {% assign index = forloop.index0 %}
      <tr>
        <td><a href="{{ site.baseurl }}/chapters/chapter-{{ chapter_num }}">{{ chapter_num | plus: 0 }}</a></td>
        <td>{{ sanskrit_titles[index] }}</td>
        <td>{{ titles[index] }}</td>
        <td>{{ english_titles[index] }}</td>
        <td>{{ verse_counts[index] }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
</div>

## Methodology

See [METHODOLOGY](METHODOLOGY) for detailed translation principles.

## Glossary

See [glossary](glossary) for key terms and translation rationale.

## License

MIT License. See [LICENSE](LICENSE).
