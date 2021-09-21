---
title: Components
section: 
permalink: /components.html
layout: page
noindex: true
---
<style> code { color: #495057; } </style>

-------------------

## Custom Button Colors
{% assign colors = site.data.config_theme-colors | where_exp: 'a','a.color' %}
{% for c in colors %}
<a href="#" class="btn btn-{{ c.color_class }}">{{ c.color_class }} Button</a>

`btn btn-{{ c.color_class }}`

<a href="#" class="btn btn-outline-{{ c.color_class }}">{{ c.color_class }} Outline Button</a>

`btn btn-outline-{{ c.color_class }}`

{% endfor %}
