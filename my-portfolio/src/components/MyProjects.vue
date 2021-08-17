<template>
  <section id="projects" class="section is-medium">
    <h1 class="title">My projects</h1>
    <nav class="level is-mobile container">
      <p class="level-item has-text-centered">
        <button
          class="button is-white"
          @click="filterProjects('all')"
          v-bind:class="{ 'is-primary': filterValue == 'all' }"
        >
          All
        </button>
      </p>
      <p class="level-item has-text-centered">
        <button
          class="button is-white"
          @click="filterProjects('web')"
          v-bind:class="{ 'is-primary': filterValue == 'web' }"
        >
          Webs
        </button>
      </p>
      <p class="level-item has-text-centered">
        <button
          class="button is-white"
          @click="filterProjects('app')"
          v-bind:class="{ 'is-primary': filterValue == 'app' }"
        >
          Apps
        </button>
      </p>
      <p class="level-item has-text-centered">
        <button
          class="button is-white"
          @click="filterProjects('game')"
          v-bind:class="{ 'is-primary': filterValue == 'game' }"
        >
          Games
        </button>
      </p>
    </nav>
    <div class="tile is-ancestor">
      <ProjectCard
        v-for="(project, index) in filteredProjects"
        :key="index"
        :projectInfo="project"
      />
    </div>
    <h1 class="subtitle mt-5">
      Skills I've learned:
      <span
        class="tag is-rounded"
        v-for="(tech, index) in getAllTechnologies()"
        :key="index"
        >{{ tech }}</span
      >
    </h1>
  </section>
</template>

<script>
import ProjectCard from "./ProjectCard";

var projects = [
  {
    title: "AUCO",
    description: "short description auco",
    photo: "xxxxx",
    technologies: ["HTML5", "HTML5", "JavaScript", "CSS", "React"],
    types: ["web", "game"],
  },
  {
    title: "Lost Scout",
    description: "short description scout",
    photo: "xxxxx",
    technologies: ["Unity", "3DsMax"],
    types: ["game"],
  },
  {
    title: "Wecycle",
    description: "Recycling app",
    photo: "xxxxx",
    technologies: ["Android", "Java"],
    types: ["app"],
  },
];

var all = "all";

export default {
  name: "MyProjects",
  props: {},
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects,
      filterValue: all,
      filteredProjects: projects,
    };
  },
  methods: {
    filterProjects(value) {
      this.filterValue = value;
      console.log(this.filterValue);
      this.filteredProjects = [];
      this.projects.forEach((project) => {
        if (this.isFilteredProjectType(project.types)) {
          this.filteredProjects.push(project);
        }
      });
    },
    isFilteredProjectType(types) {
      if (this.filterValue != "all") {
        if (types.includes(this.filterValue)) return true;
        return false;
      }
      return true;
    },
    getAllTechnologies() {
      var techs = [];
      // Check all projects
      this.projects.forEach((project) => {
        // Add all technologies of each project
        project.technologies.forEach((tech) => {
          techs.push(tech);
        });
      });
      // Convert to set to remove duplicates
      return [...new Set(techs)];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tag {
  margin-right: 0.5rem;
}
@media only screen and (min-width: 1024px) {
  .level {
    margin-right: 15%;
    margin-left: 15%;
  }
}
</style>
