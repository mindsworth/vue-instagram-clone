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

      <slot></slot>
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
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  z-index: 9999;

  .dialog {
    max-width: 935px;
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
}
</style>
