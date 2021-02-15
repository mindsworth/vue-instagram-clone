<template>
  <div class="modal" v-if="visible">
    <div class="dialog">
      <h1>Modal Component</h1>
      <div class="close-wrapper">
        <CloseIcon class="close-icon" />
      </div>
      <div class="post-wrapper">
        <img src="" alt="" />
      </div>
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

  .dialog {
    max-width: 817px;
    background-color: #fff;
  }

  .close-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;

    .close-icon {
      cursor: pointer;
    }
  }

  .post-wrapper {
    min-height: 450px;
  }
}
</style>
