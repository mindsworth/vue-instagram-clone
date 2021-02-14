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
      </div>
    </div>
  </div>
</template>

<script>
import LoveIcon from "../../assets/svgs/love.svg";

export default {
  components: { LoveIcon }
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
}
</style>
