<template>
  <section
    id="contact"
    class="section is-medium has-background-primary-light mb-6"
  >
    <Title title="Contact me" />
    <div class="is-flex is-align-items-center is-flex-direction-column">
      <div>
        Don't be shy and send me an e-mail:
        <div class="has-text-centered">
          <a href="mailto:emiliarosavdh@gmail.com">emiliarosavdh@gmail.com</a>
        </div>
      </div>
      <div>Or, find me on one of the following:</div>
      <div>
        <a
          href="https://www.linkedin.com/in/rousah/"
          class="icon is-size-3 m-3 has-text-primary"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a
          href="https://github.com/rousah"
          class="icon is-size-3 m-3 has-text-primary"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'github-square']" />
        </a>
      </div>
      <a
        class="button is-info"
        :href="`assets/CV_rosa_van_der_heide_english.pdf`"
        download
      >
        <span class="icon-text">
          <span class="icon"
            ><font-awesome-icon :icon="['fas', 'file-download']"
          /></span>
          <strong> Download CV </strong>
        </span>
      </a>
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue";
export default {
  name: "ContactMe",
  props: {},
  components: {
    Title,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
