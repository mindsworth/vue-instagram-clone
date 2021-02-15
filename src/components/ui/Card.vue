<template>
  <div class="card">
    <div class="card-header">
      <Avatar />

      <div class="username">{{ post.username }}</div>
    </div>
    <div class="feature-image-wrapper">
      <div class="flash-heart">
        <LoveIcon :status="post.liked" class="icon" />
      </div>
      <img :src="post.imageUrl" class="feature-image" />
    </div>
    <div class="action-btns">
      <div class="left">
        <LoveIcon :status="post.liked" @click="likeAPost(post.id)" />
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
  </div>
</template>

<script>
import LoveIcon from "../../assets/svgs/love";
import CommentIcon from "../../assets/svgs/comment";
import ShareIcon from "../../assets/svgs/share";
import BookmarkIcon from "../../assets/svgs/bookmark";
import Avatar from "./Avatar.vue";

import { db } from "../../../config/firebase";
import { onUnmounted } from "vue";

export default {
  props: ["post"],
  components: { LoveIcon, CommentIcon, ShareIcon, BookmarkIcon, Avatar },

  setup(props) {
    let unsubscribe;
    const likeAPost = seletedId => {
      console.log("LIKED", seletedId);

      unsubscribe = db
        .collection("Posts")
        .doc(seletedId)
        .update({ liked: !props.post.liked });
    };

    onUnmounted(() => unsubscribe());

    return { likeAPost };
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
    padding: 0 25px 15px;

    & p {
      font-weight: 500;
    }
  }
}
</style>
