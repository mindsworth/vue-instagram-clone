<template>
  <div class="home">
    <div class="container">
      <div class="post-container">
        <card v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <div class="sidebar"></div>
    </div>
  </div>
</template>

<script>
import Card from "../components/ui/Card.vue";
// import { postsData } from "../mockData";
import { db } from "../../config/firebase";
import { onMounted, onUnmounted, ref } from "vue";

export default {
  name: "Home",
  components: { Card },
  setup() {
    let unsubscribe;
    const posts = ref([]);

    onMounted(() => {
      unsubscribe = db.collection("Posts").onSnapshot(snapshot => {
        posts.value = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      });
    });

    onUnmounted(() => unsubscribe());

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
