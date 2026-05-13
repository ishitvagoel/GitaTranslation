# Bhagavad Gita Translation — Execution Plan

## Context

This project produces a complete, first-principles English translation of all 18 chapters (~700 verses) of the Bhagavad Gītā from Sanskrit, using the BORI Critical Edition. The translation is independent of all existing translations, free of imported theological frameworks, and preserves the philosophical density of the original.

## Project Structure

```
GitaTranslation/
├── _config.yml                      (GitHub Pages/Jekyll configuration)
├── index.md                         (GitHub Pages homepage, identical to README)
├── LICENSE
├── README.md                        (project overview + table of contents)
├── METHODOLOGY.md                   (translation principles statement)
├── report/
│   └── execution-plan.md            (this document)
├── chapters/
│   ├── chapter-01.md  (47 verses)   ├── chapter-10.md  (42 verses)
│   ├── chapter-02.md  (72 verses)   ├── chapter-11.md  (55 verses)
│   ├── chapter-03.md  (43 verses)   ├── chapter-12.md  (20 verses)
│   ├── chapter-04.md  (42 verses)   ├── chapter-13.md  (34 verses)
│   ├── chapter-05.md  (29 verses)   ├── chapter-14.md  (27 verses)
│   ├── chapter-06.md  (47 verses)   ├── chapter-15.md  (20 verses)
│   ├── chapter-07.md  (30 verses)   ├── chapter-16.md  (24 verses)
│   ├── chapter-08.md  (28 verses)   ├── chapter-17.md  (28 verses)
│   └── chapter-09.md  (34 verses)   └── chapter-18.md  (78 verses)
└── glossary.md                      (key terms + translation rationale)
```

## Per-Verse Format

Each verse contains:
1. **Chapter.Verse number** (e.g., 2.47)
2. **Sanskrit** in Devanāgarī script
3. **IAST transliteration**
4. **English translation** — clear, precise, natural English
5. **Translator's note** — only when needed (ambiguous terms, textual variants, polysemy)

## Translation Principles

- Source: BORI Critical Edition only
- Grammar: Pāṇinian analysis; lexicons: Monier-Williams, Apte
- No echoing of any existing translation
- No theological framework imports (Advaita, Dvaita, ISKCON, etc.)
- Context-sensitive rendering of key terms — no fixed glosses
- Polysemy flagged in notes, not collapsed
- No archaisms, no inserted "God/Lord" where Sanskrit uses specific terms
- Gender-neutral where Sanskrit is gender-neutral
- Internal tensions left standing, not smoothed

## Execution Phases

### Phase 0: Scaffolding
- Create project structure (README, METHODOLOGY, glossary, report, chapter directories)
- Configure GitHub Pages (`_config.yml`, `index.md` symlink or copy, layouts if needed)
- Commit and push scaffolding

### Phase 1: Chapters 1–6 (Foundational narrative + core doctrines)
- Translate in order: 1 → 2 → 3 → 4 → 5 → 6
- Include Jekyll YAML frontmatter in each chapter file for correct GitHub Pages rendering
- Chapter 2 is the philosophical anchor (72 verses, introduces most key terms)
- Build glossary incrementally
- Commit + push after each chapter

### Phase 2: Chapters 7–12 (Knowledge, devotion, cosmic vision)
- Translate in order: 7 → 8 → 9 → 10 → 11 → 12
- Include Jekyll YAML frontmatter in each chapter file
- Chapter 11 (55 verses) has unusual descriptive vocabulary
- Commit + push after each chapter

### Phase 3: Chapters 13–18 (Concluding doctrines)
- Translate in order: 13 → 14 → 15 → 16 → 17 → 18
- Include Jekyll YAML frontmatter in each chapter file
- Chapter 18 (78 verses) is longest; recapitulates earlier concepts
- Commit + push after each chapter

### Phase 4: Finalization
- Complete glossary review for consistency
- Final METHODOLOGY.md pass
- Verify GitHub Pages deployment and internal link structure
- Final commit + push

## Chapter Details

| Ch | Sanskrit Title | IAST | Verses | Phase |
|----|--------------|------|--------|-------|
| 1 | अर्जुनविषादयोगः | Arjunaviṣādayogaḥ | 47 | 1 |
| 2 | साङ्ख्ययोगः | Sāṅkhyayogaḥ | 72 | 1 |
| 3 | कर्मयोगः | Karmayogaḥ | 43 | 1 |
| 4 | ज्ञानकर्मसंन्यासयोगः | Jñānakarmasaṃnyāsayogaḥ | 42 | 1 |
| 5 | कर्मसंन्यासयोगः | Karmasaṃnyāsayogaḥ | 29 | 1 |
| 6 | ध्यानयोगः | Dhyānayogaḥ | 47 | 1 |
| 7 | ज्ञानविज्ञानयोगः | Jñānavijñānayogaḥ | 30 | 2 |
| 8 | अक्षरब्रह्मयोगः | Akṣarabrahmayogaḥ | 28 | 2 |
| 9 | राजविद्याराजगुह्ययोगः | Rājavidyārājaguhyayogaḥ | 34 | 2 |
| 10 | विभूतियोगः | Vibhūtiyogaḥ | 42 | 2 |
| 11 | विश्वरूपदर्शनयोगः | Viśvarūpadarśanayogaḥ | 55 | 2 |
| 12 | भक्तियोगः | Bhaktiyogaḥ | 20 | 2 |
| 13 | क्षेत्रक्षेत्रज्ञविभागयोगः | Kṣetrakṣetrajñavibhāgayogaḥ | 34 | 3 |
| 14 | गुणत्रयविभागयोगः | Guṇatrayavibhāgayogaḥ | 27 | 3 |
| 15 | पुरुषोत्तमयोगः | Puruṣottamayogaḥ | 20 | 3 |
| 16 | दैवासुरसम्पद्विभागयोगः | Daivāsurasampadvibhāgayogaḥ | 24 | 3 |
| 17 | श्रद्धात्रयविभागयोगः | Śraddhātrayavibhāgayogaḥ | 28 | 3 |
| 18 | मोक्षसंन्यासयोगः | Mokṣasaṃnyāsayogaḥ | 78 | 3 |

## Commit Strategy

- 1 commit for scaffolding
- 1 commit per chapter (18 total)
- 1 commit for finalization
- Total: ~20 commits

## Verification Checklist

[x] Each chapter file has correct verse count matching BORI edition
[x] All Sanskrit in Devanāgarī renders correctly
[x] IAST transliteration follows standard diacritics
[x] Every verse has all 3 required fields (Sanskrit, IAST, Translation)
[x] Notes present only where genuinely needed
[x] Glossary entries cross-referenced with chapter usage
[x] All chapter links in README resolve correctly
