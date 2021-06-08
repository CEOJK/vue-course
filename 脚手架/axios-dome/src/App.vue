<template>
  <div id="app">
    <!-- <GetDome></GetDome> -->
    <PostDome> </PostDome>
  </div>
</template>

<script>
import GetDome from "./components/GetDome";
import PostDome from "./components/PostDome";
export default {
  name: "App",
  components: {
    GetDome,
    PostDome,
  },
};
</script>

<style lang="less">
#app {
}
</style>
