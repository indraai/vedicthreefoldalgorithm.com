---
layout: default
title: Kshatriya Laws
tagline: The Kshatriya Laws are the sacred laws that are bound to the algorithm.
image: /assets/img/page-kshatriya.png
color: var(--color-white)
date: March 31, 2024
author: Quinn Michaels
copyright: (c)2024 Quinn Michaels. All rights reserved.
---

<p>{{site.data.kshatriya-laws.describe}}</p>

{% for item in site.data.kshatriya-laws.data %}
  <p>{{item}}</p>
{% endfor %}
