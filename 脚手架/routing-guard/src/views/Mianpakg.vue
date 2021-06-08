<template>
  <div id="mianpakg">
    <div id="nav">
      <router-link to="/mainpakg/home">Home</router-link> |
      <router-link to="/mainpakg/about">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>