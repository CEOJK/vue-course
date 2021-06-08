<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <router-link to="/mainpakg/home/child-route1" tag="button"
        >子路由1</router-link
      >
      <router-link to="/mainpakg/home/child-route2" tag="button"
        >子路由2</router-link
      >
      <router-link to="/mainpakg/home/child-route3" tag="button"
        >子路由3</router-link
      >
    </div>
    <div id="box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
};
</script>
<style lang="less">
button {
  margin-left: 10px;
}
.router-link-exact-active {
  color: red;
}
#box {
  width: 200px;
  height: 300px;
  background-color: aqua;
  margin: 0 auto;
}
</style>
