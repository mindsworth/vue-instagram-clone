<template>
  <Modal :visible="visible" />
  <div class="comment">
    <div class="comment-count">
      <span @click="showModal">view all 0 comments</span>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Modal from "./Modal";
export default {
  name: "Comment",
  components: { Modal },
  setup() {
    const visible = ref(false);
    const showModal = () => {
      visible.value = true;
    };

    return { visible, showModal };
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
