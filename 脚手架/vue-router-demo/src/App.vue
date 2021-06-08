<template>
  <div id="app">
    <!-- 第六步:点击跳转路由 -->
    <div class="nva">
      <router-link to="/home">home</router-link>
      <router-link to="/hello/:id">hello</router-link>
    </div>
    <!-- 第七步:设置路由的出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
//配置路由  动态路由
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {},
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nva a {
  margin: 0px 10px;
  text-decoration: none;
}
</style>
