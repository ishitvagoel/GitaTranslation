# Session Handoff: Argument Arc & Common Misreading Implementation

**Branch:** `claude/improve-neuroscience-content-A6vAR`
**Date:** 2026-04-04
**Status:** NOT STARTED — agents hit rate limits before making any edits

## What Was Completed in This Session

1. **Neuroscience Perspective quality improvements** (committed) — Replaced invented terminology, pseudo-scientific claims, and oversimplified brain-region mappings across Chapters 12, 14, 15, and 16 (~30 sections rewritten).

2. **Missing final verse commentary** (committed) — Added Simple Translation, Contemporary Relevance, and Neuroscience Perspective for 7 truncated chapter-ending verses: 8.28, 9.34, 11.55, 12.20, 13.34, 15.20, 18.78.

3. **Bug fixes** (committed) — Fixed Ch 1 verse count header (46→47), fixed mixed Devanagari/IAST script corruption in Ch 7 (verses 7.12, 7.22), fixed mismatched Simple Translation in verse 12.10.

## What Still Needs to Be Done

### Task: Add "Argument Arc" and "Common Misreading" sections to ALL 700+ verses across all 18 chapters

**Zero progress was made** — all three parallel agents hit rate limits before executing any edits.

### Format & Placement

#### Argument Arc (EVERY verse)
- Goes on a NEW line immediately AFTER the `**Simple Translation:**` paragraph, with a blank line before it
- Format: `**Argument Arc:** *Section Name (verse range)* — Specific role of this verse.`

#### Common Misreading (~20-30% of verses, only where genuine misinterpretation exists)
- Goes on a NEW line AFTER the `**Neuroscience Perspective:**` paragraph (blank line before it), BEFORE any `> **Note:**` block
- Format: `**Common Misreading:** "The misinterpretation." Actually, [the correction].`

### Chapter Argument Structures

Use these section names and verse ranges for the Argument Arc markers:

#### Ch 1 — Arjuna's Despair (47 verses)
- 1.1: Framing Question (1.1)
- 1.2–1.11: Army Survey (1.2–1.11)
- 1.12–1.19: Battle Signals (1.12–1.19)
- 1.20–1.27: Arjuna Surveys the Field (1.20–1.27)
- 1.28–1.35: Emotional Collapse (1.28–1.35)
- 1.36–1.44: Moral Arguments Against War (1.36–1.44)
- 1.45–1.47: Total Breakdown (1.45–1.47)

#### Ch 2 — Sāṅkhya Yoga (72 verses)
- 2.1–2.10: Krishna's Rebuke (2.1–2.10)
- 2.11–2.25: The Eternal Self (2.11–2.25)
- 2.26–2.30: Even If Mortal (2.26–2.30)
- 2.31–2.38: The Warrior's Duty (2.31–2.38)
- 2.39–2.53: Introduction to Karma Yoga (2.39–2.53)
- 2.54–2.72: The Sthitaprajña (2.54–2.72)

#### Ch 3 — Karma Yoga (43 verses)
- 3.1–3.2: Arjuna's Confusion (3.1–3.2)
- 3.3–3.9: Two Paths, One Goal (3.3–3.9)
- 3.10–3.16: The Wheel of Sacrifice (3.10–3.16)
- 3.17–3.20: The Self-Realized Are Free (3.17–3.20)
- 3.21–3.26: Leading by Example (3.21–3.26)
- 3.27–3.35: Action Belongs to the Gunas (3.27–3.35)
- 3.36–3.43: Desire: The Great Enemy (3.36–3.43)

#### Ch 4 — Jñāna Karma Sannyāsa Yoga (42 verses)
- 4.1–4.8: Divine Origin of the Teaching (4.1–4.8)
- 4.9–4.15: Liberation Through Knowledge (4.9–4.15)
- 4.16–4.24: What Is Action? (4.16–4.24)
- 4.25–4.33: Forms of Sacrifice (4.25–4.33)
- 4.34–4.42: Knowledge as Supreme Purifier (4.34–4.42)

#### Ch 5 — Karma Sannyāsa Yoga (29 verses)
- 5.1–5.6: Renunciation vs. Action (5.1–5.6)
- 5.7–5.12: The Disciplined Actor (5.7–5.12)
- 5.13–5.17: The City of Nine Gates (5.13–5.17)
- 5.18–5.26: The Vision of Equality (5.18–5.26)
- 5.27–5.29: Threshold of Meditation (5.27–5.29)

#### Ch 6 — Dhyāna Yoga (47 verses)
- 6.1–6.4: True Renunciation (6.1–6.4)
- 6.5–6.9: The Self as Friend and Enemy (6.5–6.9)
- 6.10–6.15: Meditation Technique (6.10–6.15)
- 6.16–6.17: Balance in All Things (6.16–6.17)
- 6.18–6.28: The Disciplined Mind (6.18–6.28)
- 6.29–6.32: The Vision of Unity (6.29–6.32)
- 6.33–6.36: Arjuna's Doubt (6.33–6.36)
- 6.37–6.45: The Failed Yogi (6.37–6.45)
- 6.46–6.47: The Supreme Yogi (6.46–6.47)

#### Ch 7 — Jñāna Vijñāna Yoga (30 verses)
- 7.1–7.3: Promise of Complete Knowledge (7.1–7.3)
- 7.4–7.12: Two Natures (7.4–7.12)
- 7.13–7.15: Māyā Deludes the World (7.13–7.15)
- 7.16–7.19: Four Types of Devotees (7.16–7.19)
- 7.20–7.23: Worship of Lesser Gods (7.20–7.23)
- 7.24–7.30: The Unmanifest Made Manifest (7.24–7.30)

#### Ch 8 — Akṣara Brahma Yoga (28 verses)
- 8.1–8.4: Arjuna's Seven Questions (8.1–8.4)
- 8.5–8.8: Remember Me at Death (8.5–8.8)
- 8.9–8.14: Meditation on the Supreme (8.9–8.14)
- 8.15–8.16: Beyond the Cycle (8.15–8.16)
- 8.17–8.19: Cosmic Cycles (8.17–8.19)
- 8.20–8.22: The Imperishable Beyond (8.20–8.22)
- 8.23–8.27: Two Paths After Death (8.23–8.27)
- 8.28: Conclusion (8.28)

#### Ch 9 — Rāja Vidyā Rāja Guhya Yoga (34 verses)
- 9.1–9.3: The Royal Secret (9.1–9.3)
- 9.4–9.10: Krishna Pervades All (9.4–9.10)
- 9.11–9.12: The Deluded Miss the Divine (9.11–9.12)
- 9.13–9.15: The Great Souls (9.13–9.15)
- 9.16–9.19: Krishna Is Everything (9.16–9.19)
- 9.20–9.25: Worship Determines Destination (9.20–9.25)
- 9.26–9.29: Simple Offerings Accepted (9.26–9.29)
- 9.30–9.34: Even Great Sinners Can Cross Over (9.30–9.34)

#### Ch 10 — Vibhūti Yoga (42 verses)
- 10.1–10.7: Source of All (10.1–10.7)
- 10.8–10.11: The Wise Worship with Love (10.8–10.11)
- 10.12–10.18: Arjuna's Praise and Request (10.12–10.18)
- 10.19–10.38: The Divine Manifestations (10.19–10.38)
- 10.39–10.42: A Fraction Sustains All (10.39–10.42)

#### Ch 11 — Viśvarūpa Darśana Yoga (55 verses)
- 11.1–11.4: Arjuna Requests the Vision (11.1–11.4)
- 11.5–11.8: Krishna Grants Divine Sight (11.5–11.8)
- 11.9–11.14: The Vision Begins (11.9–11.14)
- 11.15–11.31: Arjuna Describes the Vision (11.15–11.31)
- 11.32–11.34: "I Am Time" (11.32–11.34)
- 11.35–11.46: Arjuna's Terror and Plea (11.35–11.46)
- 11.47–11.51: Krishna Resumes His Form (11.47–11.51)
- 11.52–11.55: Devotion Is the Only Way (11.52–11.55)

#### Ch 12 — Bhakti Yoga (20 verses)
- 12.1–12.5: Personal vs. Impersonal Worship (12.1–12.5)
- 12.6–12.7: Krishna Rescues the Devoted (12.6–12.7)
- 12.8–12.12: The Descending Ladder of Practice (12.8–12.12)
- 12.13–12.19: Qualities Dear to Krishna (12.13–12.19)
- 12.20: Conclusion (12.20)

#### Ch 13 — Kṣetra Kṣetrajña Vibhāga Yoga (34 verses)
- 13.1–13.6: The Field and the Knower Defined (13.1–13.6)
- 13.7–13.11: True Knowledge — 20 Qualities (13.7–13.11)
- 13.12–13.18: The Object of Knowledge — Brahman (13.12–13.18)
- 13.19–13.23: Purusha and Prakriti (13.19–13.23)
- 13.24–13.28: Paths to Seeing the Self (13.24–13.28)
- 13.29–13.34: The Self as Illuminator (13.29–13.34)

#### Ch 14 — Guṇatraya Vibhāga Yoga (27 verses)
- 14.1–14.4: Introduction — Supreme Knowledge (14.1–14.4)
- 14.5–14.9: The Three Gunas Defined (14.5–14.9)
- 14.10–14.13: How the Gunas Compete (14.10–14.13)
- 14.14–14.18: Destinations Based on Dominant Guna (14.14–14.18)
- 14.19–14.20: Transcending the Gunas (14.19–14.20)
- 14.21–14.25: Signs of One Beyond the Gunas (14.21–14.25)
- 14.26–14.27: Devotion as the Means to Transcend (14.26–14.27)

#### Ch 15 — Puruṣottama Yoga (20 verses)
- 15.1–15.3: The Cosmic Tree (15.1–15.3)
- 15.4–15.6: Cutting the Tree, Finding the Supreme (15.4–15.6)
- 15.7–15.11: The Individual Soul's Journey (15.7–15.11)
- 15.12–15.15: Krishna as Sustainer of All Life (15.12–15.15)
- 15.16–15.18: Three Levels of Being (15.16–15.18)
- 15.19–15.20: Conclusion — Knowing This Makes One Wise (15.19–15.20)

#### Ch 16 — Daivāsura Sampad Vibhāga Yoga (24 verses)
- 16.1–16.3: The 26 Divine Qualities (16.1–16.3)
- 16.4–16.5: The 6 Demonic Qualities (16.4–16.5)
- 16.6–16.9: Nature of Demonic Beings (16.6–16.9)
- 16.10–16.16: Psychology of Demonic Behavior (16.10–16.16)
- 16.17–16.20: Demonic Worship and Consequences (16.17–16.20)
- 16.21–16.24: The Three Gates of Hell / Conclusion (16.21–16.24)

#### Ch 17 — Śraddhātraya Vibhāga Yoga (28 verses)
- 17.1–17.6: Three Types of Faith (17.1–17.6)
- 17.7–17.10: Three Types of Food (17.7–17.10)
- 17.11–17.13: Three Types of Sacrifice (17.11–17.13)
- 17.14–17.19: Three Types of Austerity (17.14–17.19)
- 17.20–17.22: Three Types of Charity (17.20–17.22)
- 17.23–17.28: Om Tat Sat — The Divine Formula (17.23–17.28)

#### Ch 18 — Mokṣa Sannyāsa Yoga (78 verses)
- 18.1–18.12: Renunciation vs. Abandonment (18.1–18.12)
- 18.13–18.18: Five Causes of Action (18.13–18.18)
- 18.19–18.22: Three Types of Knowledge (18.19–18.22)
- 18.23–18.25: Three Types of Action (18.23–18.25)
- 18.26–18.28: Three Types of Doer (18.26–18.28)
- 18.29–18.32: Three Types of Intellect (18.29–18.32)
- 18.33–18.35: Three Types of Firmness (18.33–18.35)
- 18.36–18.39: Three Types of Happiness (18.36–18.39)
- 18.40–18.44: Duties by Nature (18.40–18.44)
- 18.45–18.49: Perfection Through One's Own Duty (18.45–18.49)
- 18.50–18.55: The Highest Knowledge (18.50–18.55)
- 18.56–18.63: Surrender to Krishna (18.56–18.63)
- 18.64–18.66: The Supreme Secret (18.64–18.66)
- 18.67–18.71: Who Should Hear This Teaching (18.67–18.71)
- 18.72–18.78: Final Exchange and Sanjaya's Conclusion (18.72–18.78)

### Key Common Misreadings to Include

These are the highest-priority misreadings. Add additional ones wherever genuine misinterpretations exist.

- **2.47**: "Don't care about results." → Don't let results be your *motivation*; quality still matters.
- **2.62-63**: "Thinking leads to ruin." → Describes *obsessive craving* chain, not ordinary thinking.
- **3.35**: "Rigid caste duty." → *Svadharma* means authentic nature, not birth-caste.
- **4.7-8**: "God descends on demand." → Cosmic principle of dharma's self-correction.
- **4.13**: "Krishna created caste system." → Categories by guna/karma, not birth.
- **6.5**: "Bootstrap individualism." → Self is both problem and solution; discipline, not willpower alone.
- **7.14**: "Maya is inescapable." → The very next line says surrender crosses beyond it.
- **9.29**: "God is coldly indifferent." → Equal to all, but devotees have a reciprocal relationship.
- **9.32**: "Demeaning women and lower castes." → Radically inclusive — even those excluded reach the supreme.
- **11.32**: "I am death." → "I am Time, the world-destroyer." Emphasis on Time.
- **12.12**: "Knowledge always better than practice." → Hierarchy ends with renouncing results as highest.
- **13.1**: "The body is the field." → Field includes entire psycho-physical apparatus, not just body.
- **14.5**: "The gunas are bad." → Even Sattva binds; goal is transcending all three.
- **16.1-3**: "These qualities make you divine." → Signs of alignment, not a checklist to perform.
- **18.41-44**: "Justifies the caste system." → Psychological types by guna/karma, not hereditary positions.
- **18.66**: "Abandon all duties." → Stop clinging to the ego of being the doer; does not mean stop acting.

### Recommended Execution Strategy

Work through 3 chapters at a time using parallel agents. For each chapter:
1. Read the full file
2. For EVERY verse, use Edit to append `**Argument Arc:**` line after `**Simple Translation:**` paragraph
3. For applicable verses (~20-30%), use Edit to append `**Common Misreading:**` line after `**Neuroscience Perspective:**` paragraph
4. Each Argument Arc must give a SPECIFIC description of what THAT verse contributes (not just the section label)

Track progress by grepping for "Argument Arc" count per chapter file — should match the verse count when complete.
