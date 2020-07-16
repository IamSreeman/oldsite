---
layout: not_homepage
title: Projects | K Sreeman Reddy
permalink: /projects/
---


<div class="project_list">
  <h2 class="heading center">Projects and reports:</h2>
  <div class="container about_section">
    <div class="row">
      
      <div class="about_paragraph">
        <p>
          In this page you can find my projects and reports-
        </p>
      </div>
    </div>
  </div>
  {% for project in site.data.projects %}
    {% include project_box.html %}
  {% endfor %}
</div>

>##### List of projects and reports
>
>1. [Special and General Relativity (April 2020)](#special-and-general-relativity-april-2020)

>##### Special and General Relativity (April 2020)
>
>**Abstract**: First we are going to learn concepts of special theory of relativity from basic postulates. We then introduce Tensors and Tensor calculus and after that we deal with basic General Relativity. We are using the Einstein notation(1916) and not the new Abstract index notation of Penrose and Rindler(1984).
>
>It is an Summer of Science(SoS) report. If you want the tex files you can [download here](\files\projects\Special and General Relativity.zip)
>
><a class="waves-effect waves-light btn" href='\files\projects\Special and General Relativity.pdf' target="_blank">View PDF</a> 

<div class="projects-bottom center-align">
  <h1 class="heading">Have questions, comments, feedback? Feel free to <a href="/contact">contact</a>!</h1>
  <div class="row">
    <div class="col m6 offset-m3 s12">
      <div class="row">
        <div class="col s6">
          <a href="/contact"><button type="button" class="fill col s12" name="button">contact</button></a>
        </div>
        <div class="col s6">
          <button type="button" class="fill col s12" id="scroll-top" title="scroll back top" name="button">scroll back top</button>
        </div>
      </div>
    </div>
  </div>
</div>
