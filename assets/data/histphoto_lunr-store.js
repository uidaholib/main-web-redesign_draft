---
# create lunr store for histphoto search page
# only builds if histphoto-build is true
---
{%- if site.histphoto-build == true or jekyll.environment == "production" -%}
{%- assign items = site.data.spec_histphoto_full -%}
{%- assign fields = "pg,title,date,thumb,digital_collection,notes,format,donor,item_data" | split: "," -%}
var store = [ 
{%- for item in items -%} 
{ "id": {{ item.serial_number | jsonify }}, {% for f in fields %}{{ f | jsonify }}: {% if item[f] %}{{ item[f] | normalize_whitespace | replace: '""','"' | jsonify }}{% endif %}{% unless forloop.last %},{% endunless %}{% endfor %} }{%- unless forloop.last -%},{%- endunless -%}
{%- endfor -%}
];
{% endif %}