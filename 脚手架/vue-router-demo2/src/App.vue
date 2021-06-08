<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/" tag="li" replace>Home</router-link>
      <router-link to="/about" tag="li" replace>About</router-link> -->
      <button @click="homeclik">Home</button>
      <button @click="aboutclick">About</button>
    </div>
    <router-view />
  </div>
</template>
  <script>
export default {
  // 编程式路由
  data() {
    return {
      id: 123,
      username: "123",
    };
  },
  methods: {
    homeclik() {
      console.log("点击了首页");
      // 字符串
      // this.$router.push("/h"),
      // this.$router.replace('/h')
      //对象
      // this.$router.replace({path:'h'})
      //命名路由
      // this.$router.replace({ name: "Home", params: { userId: this.id } });
      // 带查询参数，变成 /h(register)?name=private
      this.$router.replace({
        path: "/h",
        query: { name: this.username, sex: "男", age: "18" },
      });
    },
    aboutclick() {
      console.log("点击了关于");
      // this.$router.push("/about");
      this.$router.replace("/about");
    },
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
