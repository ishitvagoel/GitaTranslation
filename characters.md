---
layout: default
title: Who's Who
---

# Who's Who in the Bhagavad Gītā

The Gītā is a philosophical dialogue, not a narrative — most of its 700 verses
are spoken by only two people. But it is spoken *inside* a much larger story,
and the text assumes the reader already knows the surrounding cast: Chapter 1
alone names over two dozen warriors in a single breath, and everyone in it is
addressed by several different names before the chapter is over.

This page is a companion, not a translation: a family tree of how everyone is
related, and a card for each named figure showing where they appear. Names
supplied only for family-tree context — not found anywhere in the Gītā's own
text — are marked accordingly.

<div class="whoswho-legend">
  <span class="legend-item"><span class="legend-swatch textual"></span> Named in the Gītā's text</span>
  <span class="legend-item"><span class="legend-swatch context"></span> Context only — not named in the text</span>
</div>

## The Family Tree

<div class="family-tree" role="img" aria-label="Genealogy of the Kuru dynasty and its allies, showing the Kaurava and Pandava branches descending from Dhritarashtra and Pandu, and Krishna's family connected by Arjuna's marriage to Subhadra.">

  <div class="tree-gen">
    <div class="tree-node context">Bhīṣma<span class="tree-sub">grandsire · celibate, no descendants</span></div>
  </div>

  <div class="tree-connector"></div>

  <div class="tree-gen tree-gen-couples">
    <div class="tree-couple">
      <div class="tree-node context">Gāndhārī*</div>
      <span class="tree-marriage">⚭</span>
      <div class="tree-node textual"><a href="#dhritarashtra">Dhṛtarāṣṭra</a></div>
    </div>
    <div class="tree-siblings-label">brothers</div>
    <div class="tree-couple">
      <div class="tree-node textual"><a href="#pandu">Pāṇḍu</a></div>
      <span class="tree-marriage">⚭</span>
      <div class="tree-node textual"><a href="#kunti">Kuntī</a></div>
    </div>
    <div class="tree-couple tree-couple-secondary">
      <span class="tree-marriage">⚭</span>
      <div class="tree-node context">Mādrī*</div>
    </div>
  </div>

  <div class="tree-connector tree-connector-wide"></div>

  <div class="tree-gen tree-gen-branches">
    <div class="tree-branch">
      <div class="tree-branch-label">The Kauravas</div>
      <div class="tree-node textual"><a href="#duryodhana">Duryodhana</a></div>
      <div class="tree-node textual"><a href="#vikarna">Vikarṇa</a></div>
      <div class="tree-node context">+ 97 unnamed brothers</div>
    </div>
    <div class="tree-branch">
      <div class="tree-branch-label">The Pāṇḍavas</div>
      <div class="tree-node textual"><a href="#yudhishthira">Yudhiṣṭhira</a></div>
      <div class="tree-node textual"><a href="#bhima">Bhīma</a></div>
      <div class="tree-node textual protagonist"><a href="#arjuna">Arjuna</a></div>
      <div class="tree-node textual"><a href="#nakula">Nakula</a></div>
      <div class="tree-node textual"><a href="#sahadeva">Sahadeva</a></div>
    </div>
  </div>

  <div class="tree-gen tree-gen-spouses">
    <div class="tree-node context">shared wife: <a href="#draupadi">Draupadī*</a></div>
    <div class="tree-couple">
      <div class="tree-node context">Subhadrā*</div>
      <span class="tree-marriage">⚭</span>
      <span class="tree-note">(Arjuna, above)</span>
    </div>
  </div>

  <div class="tree-connector"></div>

  <div class="tree-gen">
    <div class="tree-node context">the Draupadeyas — <a href="#draupadi_sons">5 unnamed sons</a></div>
    <div class="tree-node textual"><a href="#abhimanyu">Abhimanyu</a><span class="tree-sub">"son of Subhadrā"</span></div>
  </div>

</div>

<div class="family-tree family-tree-side">
  <div class="tree-gen">
    <div class="tree-node context">Vasudeva*</div>
  </div>
  <div class="tree-connector"></div>
  <div class="tree-gen">
    <div class="tree-node textual protagonist"><a href="#krishna">Krishna</a></div>
    <div class="tree-node context">Subhadrā* <span class="tree-sub">→ married to Arjuna, above</span></div>
  </div>
  <div class="tree-branch-label tree-branch-label-standalone">Krishna's family (Vṛṣṇi / Yādava clan)</div>
</div>

<p class="tree-footnote">* Not named directly in the Gītā's own text — included for context, drawn from the wider Mahābhārata tradition.</p>

## Everyone by Name

{% assign groups = "protagonists,pandavas,kauravas,royal_women,elders,pandava_allies,kaurava_allies,narrators,ancestors,sages" | split: "," %}
{% assign group_titles = "The Two at the Center,The Pāṇḍava Brothers,The Kaurava Brothers,Wives and Mothers,Elders and Teachers,Allies and Commanders (Pāṇḍava Side),Allies and Commanders (Kaurava Side),Narrators of the Frame Story,Ancestors (Context),Sages Named by Krishna (Ch. 10)" | split: "," %}

{% for group in groups %}
{% assign gi = forloop.index0 %}
### {{ group_titles[gi] }}

<div class="character-grid">
{% for c in site.data.characters %}
{% if c.group == group %}
  <div class="character-card{% if c.textual == false %} context-card{% endif %}" id="{{ c.id }}">
    <div class="character-card-head">
      <h4>{{ c.name }}</h4>
      <span class="character-iast">{{ c.iast }}</span>
    </div>
    <p class="character-role">{{ c.role }}</p>
    <p class="character-bio">{{ c.bio }}</p>
    {% if c.note %}<p class="character-note">{{ c.note }}</p>{% endif %}
    {% if c.epithets and c.epithets.size > 0 %}
    <div class="character-epithets">
      {% for e in c.epithets %}<span class="epithet-tag">{{ e }}</span>{% endfor %}
    </div>
    {% endif %}
    {% if c.verses and c.verses.size > 0 %}
    <div class="character-verses">
      <span class="verses-label">Appears at</span>
      {% for v in c.verses %}
        {% assign parts = v | split: ':' %}
        {% assign ch_padded = parts[0] %}
        {% assign vs = parts[1] %}
        {% assign ch_num = ch_padded | plus: 0 %}
        {% assign anchor = ch_num | append: vs %}
        <a class="verse-chip" href="{{ '/chapters/chapter-' | append: ch_padded | append: '#' | append: anchor | relative_url }}">{{ ch_num }}.{{ vs }}</a>
      {% endfor %}
    </div>
    {% else %}
    <p class="character-context-note">Not named directly in the Gītā's text.</p>
    {% endif %}
  </div>
{% endif %}
{% endfor %}
</div>

{% endfor %}
