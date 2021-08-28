<template>
  <nav
    class="navbar is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>
      <a
        role="button"
        class="navbar-burger"
        v-on:click="showNav = !showNav"
        v-bind:class="{ 'is-active': showNav }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" v-bind:class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <a class="navbar-item" href="#about-me"> About me </a>
        <a class="navbar-item" href="#projects"> My projects </a>
        <!--   <a class="navbar-item" href="#skills"> My skills </a> -->
        <a class="navbar-item" href="#contact"> Contact me </a>
        <div class="navbar-item">
          <div class="buttons">
            <a
              class="button is-primary"
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
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    show: Boolean
  },
  data() {
    return {
      // Computed property based on show value, to not mutate the prop
      showNav: this.show,
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-burger:hover {
  background-color: transparent;
}
</style>
