<template>
  <div class="card">
    <div class="card-header">
      <Avatar />
      <div class="username">{{ post.username }}</div>
    </div>
    <div class="feature-image-wrapper">
      <div class="flash-heart" v-if="showHeart">
        <LoveIcon :status="post.liked" class="icon" />
      </div>
      <img
        :src="post.imageUrl"
        class="feature-image"
        @dblclick="likeAPost(post.id)"
      />
    </div>
    <div class="action-btns">
      <div class="left">
        <LoveIcon
          :status="post.liked"
          @click="likeAPost(post.id)"
          class="icon"
        />
        <CommentIcon
          class="icon"
          @click="showSinglePostModal"
          data-name="open"
        />
        <ShareIcon class="icon" />
      </div>

      <div class="right">
        <BookmarkIcon class="icon" />
      </div>
    </div>
    <div class="caption">
      <p>
        <span class="username">{{ post.username }}</span> {{ post.caption }}
      </p>
    </div>
    <comment @click="showSinglePostModal" />
    <PostModal :visible="visible" @click="showSinglePostModal" :post="post" />
  </div>
</template>

<script>
import LoveIcon from "../../assets/svgs/love";
import CommentIcon from "../../assets/svgs/comment";
import ShareIcon from "../../assets/svgs/share";
import BookmarkIcon from "../../assets/svgs/bookmark";
import Avatar from "./Avatar";
import Comment from "../layout/Comment";
import PostModal from "../layout/PostModal";

import { db } from "../../../config/firebase";
import { onUnmounted, ref } from "vue";

export default {
  props: ["post"],
  components: {
    LoveIcon,
    CommentIcon,
    ShareIcon,
    BookmarkIcon,
    Avatar,
    Comment,
    PostModal
  },

  setup(props) {
    let unsubscribe;
    const showHeart = ref(false);
    const visible = ref(false);

    // Show modal
    const showSinglePostModal = e => {
      const isValidToClick =
        e.target.getAttribute("data-name") === "open" ||
        e.target.getAttribute("data-name") === "close";

      if (!isValidToClick) return;

      visible.value = !visible.value;

      if (visible.value) {
        document.documentElement.style.overflow = "hidden";
        return;
      }

      document.documentElement.style.overflow = "auto";
    };

    // Like Post Method
    const likeAPost = seletedId => {
      unsubscribe = db
        .collection("Posts")
        .doc(seletedId)
        .update({ liked: !props.post.liked })
        .then(() => {
          showHeart.value = true;

          setTimeout(() => {
            showHeart.value = false;
          }, 500);
        })
        .catch(error => {
          console.log("errorLIKED", error.message);
        });
    };

    onUnmounted(() => unsubscribe());

    return { likeAPost, showHeart, unsubscribe, visible, showSinglePostModal };
  }
};
</script>

<style lang="scss">
.card {
  border: 5px solid white;
  background-color: #f3f6f9;
  border-radius: 20px;
  overflow: hidden;
  padding: 3px;
  padding-bottom: 1em;

  &:not(:last-child) {
    margin-bottom: 3em;
  }

  .card-header {
    display: flex;
    align-items: center;
    padding: 15px 25px;

    & .avatar {
      margin-right: 10px;
    }
  }

  .username {
    color: rgba(38, 38, 38, 1);
    font-weight: bold;
  }

  .feature-image-wrapper {
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    display: flex;

    .flash-heart {
      position: absolute;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;

      & .icon {
        animation: scale 0.5s;
      }
    }

    & .feature-image {
      width: 100%;
      object-fit: contain;
    }
  }

  .action-btns {
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;

    & .icon {
      cursor: pointer;

      &:not(last-child) {
        margin-right: 15px;
      }
    }
  }

  .caption {
    padding: 0 25px;

    & p {
      font-weight: 500;
    }
  }
}

@keyframes scale {
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(15);
    opacity: 0;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
