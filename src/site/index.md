---
title: Fish and Scripts
subtitle: The all things web development podcast by two Brits with opinions and puns.<br /> Made by <a href="https://twitter.com/philhawksworth">Phil</a> and <a href="https://twitter.com/jack_franklin">Jack</a> for your entertainment.
layout: layouts/base.njk
---

<ul class="listing">
{%- for post in collections.post | reverse -%}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a> -
    <time datetime="{{ post.date }}">{{ post.date | dateDisplay("LLLL d, y") }}</time>
    {%- if loop.first -%}
    <div>{{post.templateContent | safe}}</div>
    {%- endif -%}
  </li>
{%- endfor -%}
</ul>