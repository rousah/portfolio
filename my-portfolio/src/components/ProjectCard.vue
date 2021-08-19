<template>
  <div class="tile is-parent is-4">
    <div class="tile card is-child" @click="toggleModal">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <p class="title is-4">{{ projectInfo.title }}</p>
        <div class="pills mb-2">
          <span
            class="tag is-rounded"
            v-for="(tech, index) in projectInfo.technologies"
            :key="index"
            >{{ tech }}</span
          >
        </div>
        <p>{{ projectInfo.description }}</p>
      </div>
    </div>
    <ProjectModal :isActive="isOpen" v-bind="$props" :toggleMe="toggleModal"/>
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
</style>
