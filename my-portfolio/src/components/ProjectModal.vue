<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div
      class="modal-background"
      :class="[
        isActive ? 'animate__fadeIn animate__faster' : 'animate__fadeOutDown',
        'animate__animated'
      ]"
    ></div>
    <div
      class="modal-card"
      :class="[
        isActive ? 'animate__fadeInUp animate__faster' : 'animate__fadeOutDown',
        'animate__animated'
      ]"
    >
      <header class="modal-card-head">
        <p class="modal-card-title has-text-weight-bold">
          {{ projectInfo.title }}
        </p>
        <button class="delete" aria-label="close" @click="toggleMe"></button>
      </header>
      <section class="modal-card-body">
        <div class="image-container container is-size-7 has-text-centered">
          <p class="image is-4by3">
            <img
              :src="require('../assets/images/' + projectInfo.photo)"
              :alt="'Image of ' + projectInfo.title"
            />
          </p>
          <span
            class="credits"
            v-if="projectInfo.imageCredits != null"
            v-html="projectInfo.imageCredits"
          />
        </div>
        <h5 class="title is-5 mt-3 mb-2">Description</h5>
        <p>
          {{ projectInfo.description }}
        </p>
        <h5 class="title is-5 mt-3 mb-2">Technologies and languages</h5>
        <div class="pills mb-1">
          <span
            class="tag is-rounded is-family-monospace"
            v-for="(tech, index) in projectInfo.technologies"
            :key="index"
            >{{ tech }}
          </span>
        </div>
        <div>
          <h5 class="title is-5 mt-3 mb-2">Links</h5>
          <div>
            <span v-if="projectInfo.link">
              Available here:
              <a
                :href="projectInfo.link"
                target="_blank"
                rel="noopener noreferrer"
                >{{ projectInfo.link }}
              </a>
            </span>
            <div>
              Repository:
              <a
                :href="projectInfo.repository"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </div>
          </div>
          <div
            class="is-family-monospace mt-3 is-flex is-justify-content-flex-end"
          >
            {{ projectInfo.year }}
          </div>
        </div>
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
    toggleMe: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-container {
  width: 70%;
}
</style>
