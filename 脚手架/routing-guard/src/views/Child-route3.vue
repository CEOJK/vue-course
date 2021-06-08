<template>
  <div class="about">
    <h1>子路由3</h1>
    <button @click="tosome1">四级路由1</button>
    <button @click="tosome2">四级路由2</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "child-roue3",
  data() {
    return {
      name: "1",
    };
  },
  // 组件内路由守卫
  // 进入当前路由时触发
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter发生改变");
    next();
  },
  //   复用当前路由时触发
  beforeRouteUpdate(to, from, next) {
    console.log(to.name);
    //  离开当前路由时触发
    console.log("beforeRouterUpdate发生改变");
    this.name = to.params.name;
    next();
  },
  beforeRouteLeave(to, from, next) {
    //在路由改变前
    console.log("beforeRouterLeave发生改变");
    next();
  },
  methods: {
    tosome1() {
      this.$router.push("/mainpakg/home/child-route3/some1");
    },
    tosome2() {
      this.$router.push("/mainpakg/home/child-route3/some2");
    },
  },
};
</script>