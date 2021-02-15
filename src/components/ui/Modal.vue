<template>
  <div class="modal" data-name="close">
    <div class="dialog">
      <div
        class="close-wrapper"
        @:click="$emit('handleModal')"
        data-name="close"
      >
        <CloseIcon class="close-icon" data-name="close" />
      </div>

      <div><slot></slot></div>
    </div>
  </div>
</template>

<script>
import CloseIcon from "../../assets/svgs/close";

export default {
  name: "Modal",
  props: [],
  components: { CloseIcon }
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  overflow: auto;
  display: grid;
  place-items: center;

  .dialog {
    width: 100%;
    max-width: 935px;
    min-height: 450;
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
}
</style>
