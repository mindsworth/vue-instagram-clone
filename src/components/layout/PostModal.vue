<template>
  <Modal v-if="visible">
    <div class="post-wrapper">
      <div class="featured-image-wrapper">
        <img :src="post.imageUrl" alt="Feature Image" class="featured-image" />
      </div>
      <div class="side-wrapper">
        <div class="side-wrapper-header">
          <Avatar :size="36" />
          <div class="username">{{ post.username }}</div>
        </div>
        <div class="chat-thread">
          <div class="comment-item">
            <Avatar :size="36" />
            <div class="comment-text">
              <span class="username">{{ post.username }}</span> You are loved
              and you deserve it You are beautiful with or without a gift ❤️
            </div>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="editor" contenteditable></div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "../ui/Modal";
import Avatar from "../ui/Avatar";

export default {
  props: ["visible", "post"],
  components: { Modal, Avatar }
};
</script>

<style lang="scss">
.modal .post-wrapper {
  display: grid;
  grid-template-columns: 3fr 355px;
  justify-content: center;
  margin: 3em;
  background-color: #fff;

  & .featured-image-wrapper {
    display: flex;

    .featured-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  .side-wrapper {
    display: flex;
    flex-direction: column;
    border-left: 1px solid var(--border-color-gray);

    &-header {
      display: flex;
      align-items: center;
      padding: 15px;
      border-bottom: 1px solid var(--border-color-gray);

      & .avatar {
        margin-right: 10px;
      }
      .username {
        color: rgba(38, 38, 38, 1);
        font-weight: bold;
      }
    }

    .chat-thread {
      flex: 1 1;
      padding: 15px;

      & .comment-item {
        display: flex;

        & .avatar {
          margin-right: 10px;
        }
      }

      & .comment-text {
        flex: 1 1;
        line-height: 18px;
      }
    }

    .input-wrapper {
      .editor {
        padding: 1em;
        border-top: 1px solid var(--border-color-gray);
        font-weight: 500;

        &:focus {
          outline: 0;
        }
      }
    }
  }
}
</style>
