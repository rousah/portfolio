<template>
  <div id="app">
    <Navbar :show="showNav"/>
    <HelloWorld :msg="message" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Navbar,
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
  text-align: center;
  color: #2c3e50;
}
</style>
