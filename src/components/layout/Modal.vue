<template>
  <div class="modal" v-if="visible">
    <div class="dialog">
      <h1>Modal Component</h1>
      <CloseIcon />
    </div>
  </div>
</template>

<script>
import CloseIcon from "../../assets/svgs/close";
export default {
  name: "Modal",
  props: ["visible"],
  components: { CloseIcon }
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  z-index: 9999;
  pointer-events: none;

  .dialog {
    max-width: 817px;
  }
}
</style>
