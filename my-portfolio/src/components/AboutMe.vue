<template>
  <section id="about-me" class="section is-medium">
    <Title title="About me" />
    <div class="columns">
      <div class="column container is-flex is-narrow is-justify-content-center">
        <figure class="image is-128x128">
          <img class="is-rounded" src="../assets/me.png" />
        </figure>
      </div>
      <div class="column">
        Hello! My name is Rosa, I am a Software Developer 👩🏼‍💻. Currently I work at
        <a href="https://www.theselectionlab.com" target="_blank">
          The Selection Lab
        </a> in Amsterdam 📍. I am a graduate
        from the Polythecnic University of Valencia (Spain) in
        Interactive Technologies Engineering. I am mainly attracted to web, app and game development,
        with a special focus on creating attractive and fun UI's. I love working
        in teams in an agile environment, drinking tea and practicing yoga 🧘🏼‍♀️.
      </div>
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue";
export default {
  name: "AboutMe",
  props: {},
  components: {
    Title
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
