# Bootstrap includes 

For Markdown based content, a series of includes are available (`_includes/feature/`) to simplify creating Bootstrap components.
Check the comments at the top of each include for information about the options and how to use them.

## Liquid capture

It is often handy to use liquid capture to send text to the includes.
For example:

```
{% capture text %}
This is an example list: 

1. Can add more complex text using markdown.
2. Use a Liquid capture to create the text.
3. It magically becomes a [Bootstrap Card](https://getbootstrap.com/docs/4.1/components/card/).

{% endcapture %}
{% include feature/card.html text=text header="Example Card" title="Title example" %}
```
