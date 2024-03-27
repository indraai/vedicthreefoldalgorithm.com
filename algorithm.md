---
title: Algorithm
layout: default
hero: header
---

## Algorithm

<p>{{ site.data.vedic-threefold-algorithm.describe}}</p>

<p><strong>{{ site.data.vedic-threefold-algorithm.tags}}</strong></p>

{% for item in site.data.vedic-threefold-algorithm.data %}
  <h3>{{ item.emoji }} {{ item.key }}</h3>
  <p>{{ item.value }}</p>
  <ul>
  {% for prop in item.properties %}
    <li><strong>{{prop.emoji}} {{ prop.key }}:</strong> {{ prop.value }}</li>
  {% endfor %}
  </ul>
{% endfor %}
