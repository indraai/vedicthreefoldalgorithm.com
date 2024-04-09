---
layout: default
title: Algorithm
tagline: The algorithm is a framework developed by Quinn Michaels inspired by Vedic principles.
image: /assets/img/page-algorithm.png
quote: Now, Indra! lauded, glorified with praises, let power swell. High like rivers for the singer. For thee a new hymn is fashioned. May we through song be victors ever.
color: var(--color-white)
date: March 30, 2024
author: Quinn Michaels
copyright: (c)2024 Quinn Michaels. All rights reserved.
---

<p>{{site.data.vedic-threefold-algorithm.describe}}</p>

<p><strong>{{site.data.vedic-threefold-algorithm.tags}}</strong></p>

{% for item in site.data.vedic-threefold-algorithm.data %}
  <h3>{{item.emoji}} {{item.title}}</h3>

  <p>{{item.value}}</p>

  {% if item.properties %}
  <ul class="algo-props">
  {% for prop in item.properties %}
    <li class="{{prop.key}}"><span class="title">{{prop.emoji}} {{prop.key}}</span><span class="value">{{prop.value}}</span></li>
  {% endfor %}
  </ul>
  {% endif %}

  {% for desc in item.describe %}
  <p>{{ desc }}</p>
  {% endfor %}

---
{% endfor %}
