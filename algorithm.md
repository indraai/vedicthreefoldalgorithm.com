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
  <h3>{{item.emoji}} {{item.key}}</h3>

  <p>{{item.value}}</p>
  <ul>
  {% for prop in item.properties %}
    <li><strong>{{prop.emoji}} {{prop.key}}:</strong> {{prop.value}}</li>
  {% endfor %}
  </ul>

  <p><a href="{{item.training}}" class="training">〉Take the {{item.key}} Training</a></p>
{% endfor %}
