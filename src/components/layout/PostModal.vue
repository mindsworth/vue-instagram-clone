<template>
  <Modal v-if="visible">
    <h1>Modal Component</h1>
  </Modal>
</template>

<script>
import Modal from "../ui/Modal";

export default {
  props: ["visible"],
  components: { Modal }
};
</script>

<style lang="scss"></style>
