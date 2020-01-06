# Bootstrap includes 

For Markdown based content, a series of includes are available (`_includes/bootstrap/`) to simplify creating Bootstrap components. 
They should be used on markdown pages (`.md`) and can be passed markdown content.

--------

#### Figures 

`{% include figure.html img="uidaho-workshop.jpg" alt="workshop scene" caption="Library workshops!" width="75%" %}`

{% include figure.html img="uidaho-workshop.jpg" alt="workshop scene" caption="Library workshops!" width="75%" %}

----------

#### Alerts

`{% include alert.md text="This is a Bootstrap [Alert](https://getbootstrap.com/docs/4.1/components/alerts/)" align="center" color="success" %}`

{% include alert.md text="This is a [Bootstrap Alert](https://getbootstrap.com/docs/4.1/components/alerts/)" align="center" color="success" %}

-----------

#### Link Buttons 

`{% include button.md text="Bootstrap Docs" link="https://getbootstrap.com/docs/4.1/components/buttons/" color="info" %}`

{% include button.md text="Bootstrap Docs" link="https://getbootstrap.com/docs/4.1/components/buttons/" color="info" %}

---------

#### Cards

```
{% capture text %}
1. Can add more complex text using markdown.
2. Use a Liquid capture to create the text.
3. It magically becomes a [Bootstrap Card](https://getbootstrap.com/docs/4.1/components/card/).
{% endcapture %}
{% include card.md text=text header="Example Card" title="Title example" img="uidaho-workshop.jpg" %}
```

{% capture text %}
1. Can add more complex text using markdown.
2. Use a Liquid capture to create the text.
3. It magically becomes a [Bootstrap Card](https://getbootstrap.com/docs/4.1/components/card/).
{% endcapture %}
{% include card.md text=text header="Example Card" title="Title example" img="uidaho-workshop.jpg" %}

------------

#### Modal

`{% include modal.md button="Try Me" color="success" title="Example Modal" text="This is a modal, with little text." %}`

{% include modal.md button="Try Me" color="success" title="Example Modal" text="This is a modal, with little text." %}
