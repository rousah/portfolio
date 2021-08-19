<template>
  <section
    id="contact"
    class="section is-medium has-background-primary-light mb-6"
  >
    <h1 class="title">Contact me</h1>
    <div class="is-flex is-align-items-center is-flex-direction-column">
      <div>
        Don't be shy and send me an e-mail:
        <a href="mailto:emiliarosavdh@gmail.com">emiliarosavdh@gmail.com</a>
      </div>
      <div>Or, find me on the following:</div>
      <div>
        <a href="https://www.linkedin.com/in/rousah/" class="icon is-size-3 m-3 has-text-primary">
          <font-awesome-icon :icon="['fab', 'linkedin']"/>
        </a>
        <a href="https://github.com/rousah" class="icon is-size-3 m-3 has-text-primary">
          <font-awesome-icon :icon="['fab', 'github-square']" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactMe",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
