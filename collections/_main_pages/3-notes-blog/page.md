---
name: Notes
---
# My Outsourced Memory
##### _and other ramblings_

<ul>
  {% for note in site.posts %}
  {% if note.categories | includes "notes" %}
    <li>
      <a href="{{ note.url }}" target="_top">{{ note.title }}</a>
    </li>
    {% endif %}
  {% endfor %}
</ul>
