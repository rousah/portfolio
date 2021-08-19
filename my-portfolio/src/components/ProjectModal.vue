<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ projectInfo.title }}</p>
        <button class="delete" aria-label="close" @click="toggleMe"></button>
      </header>
      <section class="modal-card-body">
        {{projectInfo.description}}
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="toggleMe">Close</button>
      </footer>
    </div>
  </div>
</template>

<script>
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
