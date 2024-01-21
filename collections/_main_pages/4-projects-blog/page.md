---
name: Projects
---
# Projects
##### _What I'm working on_

<div class="d-flex flex-column mx-2">
  {% for project in site.projects %}
  <div class="card mb-3 p-0" >
    <div class="row g-0 p-0 m-0">
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">
          {{ project.blurb }}
          <br>
          <span>
            <a href="{{ project.home_page_url }}" target="_blank">
              Project Home Page
            </a>
            |
            <a href="{{ project.documentation_url }}" target="_blank">
              Documentation
            </a>
            |
            <a href="{{ project.implementation_url }}" target="_blank">
              Use it
            </a>
          </span>
        </p>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
