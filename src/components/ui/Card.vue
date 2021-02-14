<template>
  <div class="card">
    <div class="card-header">
      <div class="avatar">
        <img src="https://via.placeholder.com/150" alt="user thumbnail" />
      </div>
      <div class="username">Mindsworth</div>
    </div>
    <div class="feature-image-wrapper">
      <img
        src="https://instagram.flos8-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/149426673_263752831879026_1310107989549781236_n.jpg?_nc_ht=instagram.flos8-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Akbb_Zqen1EAX8Jlokk&tp=1&oh=2541610d597662f05e1d936f4c4791e0&oe=605273DA"
        alt="Feature Image"
        class="feature-image"
      />
    </div>
    <div class="action-btns">
      <div class="left">
        <LoveIcon class="icon" />
        <CommentIcon class="icon" />
        <ShareIcon class="icon" />
      </div>

      <div class="right">
        <BookmarkIcon class="icon" />
      </div>
    </div>
    <div class="caption">
      <p>
        <span class="username">Mindsworth</span> Friends who slay together
        💙✨💙 @charlie_clothings and @awemie_girl Dress @charlie_clothings
      </p>
    </div>
  </div>
</template>

<script>
import LoveIcon from "../../assets/svgs/love";
import CommentIcon from "../../assets/svgs/comment";
import ShareIcon from "../../assets/svgs/share";
import BookmarkIcon from "../../assets/svgs/bookmark";

export default {
  components: { LoveIcon, CommentIcon, ShareIcon, BookmarkIcon }
};
</script>

<style lang="scss">
.card {
  border: 5px solid white;
  background-color: #f3f6f9;
  border-radius: 20px;
  overflow: hidden;
  padding: 3px;

  .card-header {
    display: flex;
    align-items: center;
    padding: 15px 25px;
  }

  .avatar {
    height: 40px;
    width: 40px;
    border-radius: 100%;
    overflow: hidden;
    margin-right: 15px;
    border-bottom: 1px solid rgba(219, 219, 219, 0.5);
  }

  .avatar img {
    max-height: 100%;
    object-fit: contain;
  }

  .username {
    color: rgba(38, 38, 38, 1);
    font-weight: bold;
  }

  .feature-image-wrapper {
    width: 100%;
    border-radius: 15px;
    overflow: hidden;

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
    padding: 15px 25px;
  }
}
</style>
