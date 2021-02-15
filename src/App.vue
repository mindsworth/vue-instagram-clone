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
:root {
  --border-color-gray: rgba(219, 219, 219, 1);
  --white: #ffffff;
}

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
  background-color: #e3ecf2;
}

.container {
  margin: 0 auto;
  max-width: 960px;
  min-height: 100%;
  padding: 0 20px;
}
</style>
