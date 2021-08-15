<template>
  <section id="projects" class="section is-medium">
    <h1 class="title">My projects</h1>
    <nav class="level is-mobile container">
      <p class="level-item has-text-centered">
        <button class="button is-primary">All</button>
      </p>
      <p class="level-item has-text-centered">
        <button class="button is-white">Webs</button>
      </p>
      <p class="level-item has-text-centered">
        <button class="button is-white">Apps</button>
      </p>
      <p class="level-item has-text-centered">
        <button class="button is-white">Games</button>
      </p>
    </nav>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-4">
        <div class="tile card is-child">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <p class="title is-4">AUCO</p>
            <div class="pills mb-2">
              <span class="tag is-rounded">HTML5</span>
              <span class="tag is-rounded">JavaScript</span>
            </div>
            <p>Description</p>
          </div>
        </div>
      </div>
      <div class="tile is-parent is-4">
        <div class="tile box is-child">
          <p class="title">AUCO</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyProjects",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  background-color: teal;
}
.tag {
  margin-right: 0.5rem;
}
@media only screen and (min-width: 1024px) {
  .level {
    margin-right: 15%;
    margin-left: 15%;
  }
}
</style>
