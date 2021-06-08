<template>
  <div id="app">
    <!-- 总路由 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>
<style lang="scss">
#app {
  /* 
		vh == %
		%:当元素没有内容的时候，设置%,改元素是不会被撑开的
		vh: 该元素都会被撑开（屏幕高度一致）
	 */
  height: 100vh;
}
</style>
