---
# create lunr store for histphoto search page
# only builds if histphoto-build is true
---
{%- if site.histphoto-build == true or jekyll.environment == "production" -%}
{%- assign items = site.data.spec_histphoto_full -%}
{%- assign fields = "pg,title" | split: "," -%}
{%- assign combine = "date,notes,format,donor,item_data" | split: "," -%}
var store = [ 
{%- for item in items -%}{%- capture text -%}{%- for c in combine -%}{{ item[c] }} {% endfor %}{% endcapture %}
{ "pg":{{ item['pg'] | jsonify }},"title":{{ item['title'] | jsonify }},"text":{{ text | normalize_whitespace | jsonify }},"id": {{ item.serial_number | jsonify }} }{%- unless forloop.last -%},{%- endunless -%}
{%- endfor -%}
];
{% endif %}
