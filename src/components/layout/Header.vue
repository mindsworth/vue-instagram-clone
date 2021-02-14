<template>
  <nav class="header">
    <div class="container">
      <img
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        alt="Instagram logo"
        class="img-fluid"
      />
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
nav.header {
  height: 54px;
  border-bottom: 1px solid rgba(219, 219, 219, 1);
  background-color: #fff;

  & .container {
    padding-top: 10px;
    padding-bottom: 10px;
    height: 100%;
  }
}

.img-fluid {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}
</style>
