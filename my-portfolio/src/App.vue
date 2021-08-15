<template>
  <div id="app">
    <Navbar :show="showNav" />
    <Hero />
    <div class="container is-max-desktop">
      <about-me />
      <my-projects />
      <my-skills />
      <HelloWorld :msg="message" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import AboutMe from "./components/AboutMe.vue";
import MyProjects from "./components/MyProjects.vue";
import MySkills from "./components/MySkills.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Navbar,
    Hero,
    AboutMe,
    MyProjects,
    MySkills,
  },
  data() {
    return {
      message: "Hello world",
      showNav: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
