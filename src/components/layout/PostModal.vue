<template>
  <Modal v-if="visible">
    <div class="post-wrapper">
      <img :src="post.imageUrl" alt="Feature Image" class="feature-image" />
      <div class="side-wrapper"></div>
    </div>
  </Modal>
</template>

<script>
import Modal from "../ui/Modal";

export default {
  props: ["visible", "post"],
  components: { Modal }
};
</script>

<style lang="scss">
.modal .post-wrapper {
  width: 100%;
  height: 100%;
  min-height: 450px;
  display: grid;
  grid-template-columns: 3fr 1.7fr;
  justify-content: center;

  & .feature-image {
    width: 100%;
    object-fit: contain;
  }
}
</style>
