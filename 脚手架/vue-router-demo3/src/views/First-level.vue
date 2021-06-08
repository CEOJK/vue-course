<template>
  <div>
    <router-link to="/firstlevel/twopoles1" tag="button">子路由1</router-link>
    <router-link to="/firstlevel/twopoles2" tag="button">子路由2</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
button {
  margin-left: 5px;
}
</style>