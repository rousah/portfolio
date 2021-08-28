<template>
  <section class="hero is-medium has-background-primary">
    <div class="hero-body">
      <p
        class="title typewriter is-family-monospace"
        style="color: white !important"
      >
        Welcome!
      </p>
      <span class="title line is-family-monospace" />
      <p class="subtitle" style="color: white !important">
        My name is Rosa. Take a look at the things I've worked on :)
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  background-color: rgba(255, 248, 235, 0.8);
}
.hero-body {
  position: relative;
}

/* Welcome typewriter animation for big screens */
@media only screen and (min-width: 1024px) {
  .typewriter {
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    top: 40%;
    left: 5%;
    width: 0;
    animation: typing 1.8s steps(9, end);
    -webkit-animation: typing 1.8s steps(9, end);
    animation-delay: 0.225s;
    -webkit-animation-delay: 0.225s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }

  .subtitle {
    position: absolute;
    left: 5%;
    top: 60%;
  }

  .line {
    content: " ";
    height: 0.9em;
    top: 41%;
    left: 5%;
    position: absolute;
    border-left: 0.1em solid white;
    animation: stick 1.8s steps(8, end),
      blink 0.5s step-end infinite alternate 2s;
    -webkit-animation: stick 1.8s steps(8, end),
      blink 0.5s step-end infinite alternate 2s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }
}
/* Typewriter animation */
@keyframes typing {
  to {
    width: 9ch;
  }
}
@-webkit-keyframes typing {
  to {
    width: 9ch;
  }
}

/* White stick movement animation */
@keyframes stick {
  to {
    left: 12ch;
  }
}
@-webkit-keyframes stick {
  to {
    left: 12ch;
  }
}

/* Blinking animation for white stick */
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
@-webkit-keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
