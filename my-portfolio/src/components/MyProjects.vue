<template>
  <section id="projects" class="section is-medium">
    <h1 class="title">My projects</h1>
    <nav class="level is-mobile container">
      <p class="level-item has-text-centered">
        <button class="button is-primary">All</button>
      </p>
      <p class="level-item has-text-centered">
        <button class="button is-white">Webs</button>
      </p>
      <p class="level-item has-text-centered">
        <button class="button is-white">Apps</button>
      </p>
      <p class="level-item has-text-centered">
        <button class="button is-white">Games</button>
      </p>
    </nav>
    <div class="tile is-ancestor">
      <ProjectCard :projectInfo="projectDemo" />
    </div>
  </section>
</template>

<script>
import ProjectCard from "./ProjectCard";

var projectDemo = {
  title: "AUCO",
  description: "short description auco",
  photo: 'xxxxx',
  technologies: ['HTML5', 'JavaScript', 'CSS', 'React'],
  types: ['web', 'game'] 
};

export default {
  name: "MyProjects",
  props: {},
  components: {
    ProjectCard,
  },
  data() {
    return {
      projectDemo
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (min-width: 1024px) {
  .level {
    margin-right: 15%;
    margin-left: 15%;
  }
}
</style>
