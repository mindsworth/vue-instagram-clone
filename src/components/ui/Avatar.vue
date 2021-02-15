<template>
  <div class="avatar" :style="styleProps">
    <img src="https://via.placeholder.com/150" alt="user thumbnail" />
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["size"],

  setup(props) {
    const styleProps = computed(() => ({
      "--avatar-size": `${props.size || 42}px`
    }));

    return { styleProps };
  }
};
</script>

<style lang="scss">
.avatar {
  height: var(--avatar-size);
  width: var(--avatar-size);
  border-radius: 50%;
  overflow: hidden;
  border-bottom: 1px solid rgba(219, 219, 219, 0.5);

  & img {
    max-height: 100%;
    object-fit: contain;
  }
}
</style>
