<template>
  <section class="hero is-medium has-background-primary">
    <div class="hero-body">
      <p class="title is-family-monospace" style="color: white !important">Welcome!</p>
      <p class="subtitle" style="color: white !important">My name is Rosa. Take a look at the things I've worked on :)</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  background-color: rgba(255, 248, 235, 0.8);
}
.hero-body {
}
</style>
