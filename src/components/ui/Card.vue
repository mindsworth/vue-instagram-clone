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
        <CommentIcon class="icon" />
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
    <comment />
  </div>
</template>

<script>
import LoveIcon from "../../assets/svgs/love";
import CommentIcon from "../../assets/svgs/comment";
import ShareIcon from "../../assets/svgs/share";
import BookmarkIcon from "../../assets/svgs/bookmark";
import Avatar from "./Avatar.vue";
import Comment from "../layout/Comment";

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
    Comment
  },

  setup(props) {
    let unsubscribe;
    const showHeart = ref(false);

    // Like Post Method
    const likeAPost = seletedId => {
      console.log(showHeart.value);
      console.log("LIKED", seletedId);

      unsubscribe = db
        .collection("Posts")
        .doc(seletedId)
        .update({ liked: !props.post.liked })
        .then(() => {
          console.log("resLIKED");
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

    return { likeAPost, showHeart, unsubscribe };
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
      margin-bottom: -1%;
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
</style>
