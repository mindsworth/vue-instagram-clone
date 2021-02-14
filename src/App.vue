<template>
  <div class="view">
    <Header />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  name: "App",
  components: { Header }
};
</script>

<style lang="scss">
body,
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.view {
  min-height: 100vh;
}

.container {
  margin: 0 auto;
  max-width: 960px;
  height: 100%;
  padding: 0 20px;
}
</style>
