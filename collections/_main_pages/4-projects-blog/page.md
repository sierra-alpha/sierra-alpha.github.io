---
name: Projects
---
# Projects
##### _What I'm working on_

My intention is for it to document projects I'm working on. It will also
function similar to a posts page.

<ul>
  {% for post in site.projects %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
