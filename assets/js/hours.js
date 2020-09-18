---
# generate hours js from _data/hours.yml 
---
{%- assign hours = site.data.config_hours -%}
{%- assign days = "sun;mon;tue;wed;thu;fri;sat" | split: ";" -%}
(function () {
	var display = document.getElementById("timedisp");
    var default_hours = [ {% for d in days %}{{ hours.default[d] | jsonify }}{% unless forloop.last %},{% endunless %}{% endfor %} ];
    {% for b in hours.breaks %}
    var break{{ forloop.index }}_hours = [ {% for d in days %}{{ b[d] | jsonify }}{% unless forloop.last %},{% endunless %}{% endfor %} ];
    {% endfor %}
    var closedDates = {{ hours.closed.dates | jsonify | remove: "-" }};
    var now = new Date();
    var isoDateNumber = now.getFullYear() + ("0" + (now.getMonth() + 1)).slice(-2) + ("0" + now.getDate()).slice(-2);
    var message = "";
    if (closedDates.includes(isoDateNumber)) {
        message = {{ hours.closed.message | jsonify }};
    } 
    {% for s in hours.specials %}
    else if ( {{ s.dates | jsonify | remove: "-" }}.includes(isoDateNumber) ) {
        message = {{ s.message | jsonify }};
    } 
    {% endfor %}
    {% for b in hours.breaks %}
    else if (isoDateNumber >= {{ b.start | remove: "-" }} && isoDateNumber <= {{ b.end | remove: "-" }} ) {
        message = break{{ forloop.index }}_hours[now.getDay()];
    } 
    {% endfor %}
    else {
        message = default_hours[now.getDay()];
    }
    display.innerHTML = message;

})();
