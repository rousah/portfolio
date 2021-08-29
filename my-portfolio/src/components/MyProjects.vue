/* eslint-disable prettier/prettier */
<template>
  <section id="projects" class="section is-medium">
    <Title v-html="titleContent" />
    <div class="projects-container">
      <nav class="level is-mobile container">
        <p class="level-item has-text-centered">
          <button
            class="button is-white hasBadge"
            @click="filterProjects('all')"
            v-bind:class="{ 'is-primary': filterValue == 'all' }"
          >
            All
            <span title="Badge top right" class="badge">{{
              filteredProjectsCount("all")
            }}</span>
          </button>
        </p>
        <p class="level-item has-text-centered">
          <button
            class="button is-white hasBadge"
            @click="filterProjects('web')"
            v-bind:class="{ 'is-primary': filterValue == 'web' }"
          >
            Webs
            <span title="Badge top right" class="badge">{{
              filteredProjectsCount("web")
            }}</span>
          </button>
        </p>
        <p class="level-item has-text-centered">
          <button
            class="button is-white hasBadge"
            @click="filterProjects('app')"
            v-bind:class="{ 'is-primary': filterValue == 'app' }"
          >
            Apps
            <span title="Badge top right" class="badge">{{
              filteredProjectsCount("app")
            }}</span>
          </button>
        </p>
        <p class="level-item has-text-centered">
          <button
            class="button is-white hasBadge"
            @click="filterProjects('game')"
            v-bind:class="{ 'is-primary': filterValue == 'game' }"
          >
            Games
            <span title="Badge top right" class="badge">{{
              filteredProjectsCount("game")
            }}</span>
          </button>
        </p>
      </nav>
      <div class="tile is-ancestor is-flex-wrap-wrap">
        <ProjectCard
          v-for="(project, index) in filteredProjects"
          :key="index"
          :projectInfo="project"
        />
      </div>
      <h1 class="subtitle mt-5">
        Skills I've learned working on these projects:
        <div class="mt-2">
          <span
            class="tag is-rounded is-family-monospace mb-2"
            v-for="(tech, index) in getAllTechnologies()"
            :key="index"
          >
            {{ tech }}
          </span>
        </div>
      </h1>
    </div>
  </section>
</template>

<script>
import ProjectCard from "./ProjectCard";
import Title from "./Title.vue";
import projects from "../resources/projects.json";

var all = "all";

export default {
  name: "MyProjects",
  props: {},
  components: {
    ProjectCard,
    Title
  },
  data() {
    return {
      projects,
      filterValue: all,
      filteredProjects: projects,
      titleContent:
        "<h1 class='title has-ribbon' ref='title'>My Projects<div class='ribbon is-hidden-mobile is-light'>Available at my <a href='https://github.com/rousah' target='_blank'>GitHub</a></div></h1>"
    };
  },
  methods: {
    filterProjects(value) {
      this.filterValue = value;
      this.filteredProjects = [];
      this.projects.forEach(project => {
        if (this.isFilteredProjectType(project.types)) {
          this.filteredProjects.push(project);
        }
      });
    },
    filteredProjectsCount(value) {
      var count = 0;
      if (value != "all") {
        this.projects.forEach(project => {
          if (project.types.includes(value)) count++;
        });
        return count;
      } else return this.projects.length;
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
      this.projects.forEach(project => {
        // Add all technologies of each project
        project.technologies.forEach(tech => {
          techs.push(tech);
        });
      });
      // Convert to set to remove duplicates
      return [...new Set(techs)];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tag {
  margin-right: 0.5rem;
}

.hasBadge {
  display: relative;
}

.badge {
  position: relative !important;
  transform: none !important;
  margin-left: 0.4rem;
}

img {
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
}

@media only screen and (min-width: 1024px) {
  .level {
    margin-right: 15%;
    margin-left: 15%;
  }
}
</style>
