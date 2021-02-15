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
          <div class="comment-wrapper">
            <div
              class="comment-item"
              v-for="comment in comments"
              :key="comment.username"
            >
              <Avatar :size="36" />
              <div class="comment-text">
                <span class="username">{{ comment.username }}</span>
                {{ comment.text }}
              </div>
            </div>
          </div>
        </div>

        <div class="input-wrapper">
          <div
            ref="editorRef"
            class="editor"
            contenteditable
            @input="onInputChange"
          />
          <button
            class="post-btn"
            @click="addComment"
            :disabled="commentText.length === 0"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "../ui/Modal";
import Avatar from "../ui/Avatar";

import { commentData } from "../../mockData";
import { ref } from "vue";

export default {
  props: ["visible", "post"],
  components: { Modal, Avatar },

  setup(props) {
    const commentText = ref("");
    const editorRef = ref("");
    const comments = ref(commentData);

    const onInputChange = e => {
      commentText.value = e.target.innerText;
    };

    const addComment = () => {
      if (commentText.value.length === 0) return;

      comments.value.push({
        username: props.post.username,
        text: commentText.value,
        timestamp: ""
      });

      editorRef.value.innerText = "";
      commentText.value = "";
    };

    return { commentText, editorRef, onInputChange, addComment, comments };
  }
};
</script>

<style lang="scss">
.modal .post-wrapper {
  display: grid;
  grid-template-columns: 3fr 350px;
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
    padding: 0;

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
      padding: 25px 15px;
      min-height: 0;
      flex: 1 1 0;

      .comment-wrapper {
        overflow: auto;
        height: 100%;

        & .comment-item {
          display: flex;

          &:not(:last-child) {
            margin-bottom: 1em;
          }

          & .avatar {
            margin-right: 10px;
          }
        }

        & .comment-text {
          flex: 1 1;
          line-height: 18px;
          font-weight: 500;
        }
      }
    }

    .input-wrapper {
      display: flex;
      border-top: 1px solid var(--border-color-gray);

      .editor {
        padding: 1em;
        font-weight: 500;
        flex: 1 1;

        &:focus {
          outline: 0;
        }
      }

      .post-btn {
        background-color: transparent;
        border: 0;
        padding: 15px;
        cursor: pointer;

        &:disabled {
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
