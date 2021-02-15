<template>
  <div class="home">
    <div class="container">
      <div class="post-container">
        <div v-for="post in posts" :key="post.username">
          <card :post="post" />
        </div>
      </div>
      <div class="sidebar"></div>
    </div>
  </div>
</template>

<script>
import Card from "../components/ui/Card.vue";
import { postsData } from "../mockData";

export default {
  name: "Home",
  components: { Card },
  setup() {
    const posts = postsData;

    console.log("posts", posts);

    return { posts };
  }
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
