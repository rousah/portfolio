<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div
      class="modal-background"
      :class="[isActive ? 'animate__fadeIn animate__faster' : 'animate__fadeOutDown', 'animate__animated']"
    ></div>
    <div
      class="modal-card"
      :class="[isActive ? 'animate__fadeInUp animate__faster' : 'animate__fadeOutDown', 'animate__animated']"
    >
      <header class="modal-card-head">
        <p class="modal-card-title has-text-weight-bold">
          {{ projectInfo.title }}
        </p>
        <button class="delete" aria-label="close" @click="toggleMe"></button>
      </header>
      <section class="modal-card-body">
        <p class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
        </p>
        <p class="mt-3">
          {{ projectInfo.description }}
          <a
            :href="projectInfo.repository"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </p>
        <p
          v-if="projectInfo.link"
          class="is-flex is-justify-content-space-between"
        >
          <span>
            Available here:
            <a
              :href="projectInfo.link"
              target="_blank"
              rel="noopener noreferrer"
              >{{ projectInfo.link }}
            </a>
          </span>
          <span class="is-family-monospace">{{ projectInfo.year }}</span>
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "ProjectModal",
  props: {
    projectInfo: Object,
    isActive: Boolean,
    toggleMe: Function,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
