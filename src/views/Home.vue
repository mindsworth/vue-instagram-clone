<template>
  <div class="home">
    <div class="container">
      <div class="post-container">
        <card />
      </div>
      <div class="sidebar"></div>
    </div>
  </div>
</template>

<script>
import Card from "../components/ui/Card.vue";
export default {
  name: "Home",
  components: { Card }
};
</script>

<style lang="scss">
.home {
  height: 100%;

  .container {
    display: grid;
    grid-template-columns: 3fr 1.2fr;
  }

  .post-container {
    padding: 30px 0;
  }
}
</style>
