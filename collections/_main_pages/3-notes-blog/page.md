---
name: Notes
---
# My Outsourced Memory
##### _and other ramblings_

<div class="d-flex flex-column mx-2">
  {% for note in site.posts %}
  {% if note.categories contains "notes" %}
<a href="{{ note.url }}" class="link-underline link-underline-opacity-0" target="_top">
  <div class="card mb-3 p-0" >
    <div class="row g-0 p-0 m-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ note.title }}</h5>
          <p class="card-text">{{ note.blurb }}
            <small class="text-body-secondary">
              {% if note.last_update_date %}
              Last updated at: {{ note.last_update_date | string_to_date | date_to_sting }}
              {% else %}
              Published at: {{ note.date | date_to_string }}
              {% endif %}
            </small>
          </p>
        </div>
      </div>
    </div>
  </div>
  </a>
  {% endif %}
  {% endfor %}
</div>
