<template>
  <div class="modal" v-if="visible">
    <h1>Modal Component</h1>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["visible"]
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
</style>
