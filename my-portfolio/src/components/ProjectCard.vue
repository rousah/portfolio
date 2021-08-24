<template>
  <div class="tile is-parent is-4">
    <div
      class="tile card is-child is-flex is-clickable is-flex-direction-column"
      @click="toggleModal"
    >
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            :src="require('../assets/images/' + projectInfo.photo)"
            :alt="'Image of ' + projectInfo.title"
          />
        </figure>
      </div>
      <div class="card-content p-4">
        <p class="title is-4">{{ projectInfo.title }}</p>
        <div class="pills mb-1">
          <span
            class="tag is-rounded is-family-monospace"
            v-for="(tech, index) in projectInfo.technologies"
            :key="index"
            >{{ tech }}</span
          >
        </div>
        <p class="mb-2">{{ projectInfo.shortDescription }}</p>
        <p class="year is-size-7 has-text-weight-light is-family-monospace">
          {{ projectInfo.year }}
        </p>
      </div>
    </div>
    <ProjectModal :isActive="isOpen" v-bind="$props" :toggleMe="toggleModal" />
  </div>
</template>

<script>
import ProjectModal from "./ProjectModal.vue";
export default {
  name: "ProjectCard",
  props: {
    projectInfo: Object,
  },
  components: {
    ProjectModal,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tag {
  margin-bottom: 0.5rem;
}
.year {
  margin-top: auto;
}
.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media only screen and (min-width: 1024px) {
  .card-content {
    height: -webkit-fill-available;
  }
}
</style>
