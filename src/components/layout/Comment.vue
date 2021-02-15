<template>
  <div class="comment">
    <div class="comment-count">
      <span v-on:click="$emit('handleModal')">view all 0 comments</span>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";

export default {
  name: "Comment",
  components: {},
  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.comment {
  padding: 5px 25px;

  &-count span {
    font-weight: 600;
    cursor: pointer;
  }
}
</style>
