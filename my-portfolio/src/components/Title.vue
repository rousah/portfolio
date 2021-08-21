<template>
  <h1 class="title" ref="title">
    {{ title }}
  </h1>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String,
  },
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      const section = this.$refs["title"];

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const title = entry.target;

          if (entry.isIntersecting) {
            title.classList.add("animate__fadeInUp", "animate__animated");
            return; // if we added the class, exit the function
          }
        });
      });

      observer.observe(section);
    });
  },
};
</script>

<style>
</style>
